import * as THREE from 'three';
import foldStyles from './fold-demo.css?inline';
import viewerTheme from './viewer-theme.css?inline';
import {loadTexture,createPrintMaterial} from './print-material.js';
import {mountRetailViewer} from './retail-viewer.js';

const clamp=x=>Math.max(0,Math.min(1,x));
const smooth=x=>x*x*(3-2*x);
let nextId=0;
export function mountPackageViewer(host,variants,initialState={}){
 if(['retail-card','pouch'].includes(variants[0].shape))return mountRetailViewer(host,variants,initialState);
 const root=host.attachShadow({mode:'open'}),uid=++nextId,variant=variants[0];
 const $=s=>root.querySelector(s),$$=s=>root.querySelectorAll(s);
 const title=variant.title?`${variant.label} ${variant.title}`:variant.group==='full'?'풀박스':`${variant.label} ${variant.group==='single'?'싱글팩':'리미티드 에디션'}`;
 root.innerHTML=`<style>${foldStyles}
 :host{display:block;min-width:0;font-family:Arial,'Apple SD Gothic Neo','Malgun Gothic',sans-serif;color:#292929}.model-name{font-size:17px;margin:0 0 9px;font-weight:600}.dimensions{font-size:11px;margin:0 0 18px;color:#555}.stage{height:470px;touch-action:pan-y}.stage canvas{display:block;width:100%;height:100%}.main-controls{padding:20px 0;flex-wrap:wrap}.scrubber{max-width:360px}.demo-notes{padding-bottom:0}.demo-notes p{margin:0}.render-error{padding:35px;font-size:12px;line-height:1.9}.viewer-bottom{min-height:55px}
 @media(max-width:700px){.stage{height:370px}.model-name{font-size:15px}.dimensions{font-size:10px}.detail-controls{display:block}.scrubber{max-width:none}.rotation-controls{margin-top:18px}.viewer-top{font-size:9px}.demo-notes{font-size:10px}}
 ${viewerTheme}</style><div class="widget"><h4 class="model-name">${title}</h4><p class="dimensions">${variant.dimensionNote||`${variant.dimensions.join(' × ')} mm · ${variant.group==='single'?'제공 사양 기준':'인수인계 규격 기록 기준'}`}</p>
 <section class="viewer" aria-label="${title} 전개도 접힘 뷰어"><div class="viewer-top"><span id="view-state">01 / 평면 전개도</span><span id="view-hint">자료를 불러오는 중</span></div><div class="stage" tabindex="0" role="group" aria-label="${title}. 마우스 휠로 확대·축소하고, 접은 후 드래그 또는 방향키로 회전할 수 있습니다." data-state="loading"></div><div class="viewer-bottom"><span id="phase-text" aria-live="polite">자료를 불러오는 중</span><span id="progress-text">0%</span></div></section>
 <div class="main-controls"><button id="fold-toggle" class="primary" disabled>접어서 3D로 보기</button><button id="flat-reset" disabled>전개도로 초기화</button>${variant.shape==='display'?'<button id="display-toggle" disabled aria-pressed="false">진열형으로 보기</button>':''}</div>
 <div class="detail-controls"><div class="scrubber"><label for="fold-progress-${uid}">접힘 단계 직접 살펴보기</label><input id="fold-progress-${uid}" class="fold-progress" type="range" min="0" max="100" step="1" value="0" disabled aria-valuetext="평면 전개도, 0퍼센트"/></div><div class="rotation-controls" role="group" aria-label="완성된 패키지 시점"><button data-view="front" disabled>정면</button><button data-view="back" disabled>뒷면</button><button data-view="side" disabled>측면</button><button data-view="bottom" disabled>바닥</button><button data-view="reset" disabled>초기 시점</button></div></div>
 <div class="demo-notes"><p>전개도 → 약 2초 접힘 → 드래그 회전 · 휠 확대/축소 → 다시 펼치기. 칼선은 펼친 전개도에서만 표시합니다.</p><p>제공 그래픽과 규격 기록을 바탕으로 한 시각적 시연입니다. 생산용 조립·접착 순서와 종이 두께의 정밀 검증은 별도입니다.</p></div></div>`;
 const stage=$('.stage'),toggle=$('#fold-toggle'),slider=$('.fold-progress');
 const [W,H,D]=variant.dimensions,{tuck:T,dustTop:DT,bottom:B,dustBottom:DB,glue:G}=variant.heights;
 let renderer,scene,camera,rig,model,floor,ready=false,destroyed=false,initializing=false,progress=initialState.progress??0,animation=0,rx=initialState.rx??-12,ry=initialState.ry??-28,zoom=initialState.zoom??1,drag=false,lastX=0,lastY=0,displayOpen=initialState.displayOpen??false;
 const hinges={},materials=[],geometries=[],tearAway=[];
 const phase=(a,b)=>smooth(clamp((progress-a)/(b-a)));
 host.dataset.variant=variant.id;host.dataset.state='loading';host.dataset.dimensions=variant.dimensions.join(',');
 function stop(){if(animation)cancelAnimationFrame(animation);animation=0;drag=false;stage.classList.remove('dragging');stage.removeAttribute('aria-busy');toggle.disabled=!ready;}
 function paperGeometry(w,h,points,ox=0,oy=0,pivotX=0){
  const poly=points||[[0,0],[100,0],[100,100],[0,100]],contour=poly.map(([x,y])=>new THREE.Vector2(ox+w*x/100-pivotX,-oy-h*y/100));
  const triangles=THREE.ShapeUtils.triangulateShape(contour,[]),positions=[],uvs=[];
  for(const tri of triangles){let [a,b,c]=tri;const av=contour[a],bv=contour[b],cv=contour[c];if((bv.x-av.x)*(cv.y-av.y)-(bv.y-av.y)*(cv.x-av.x)<0)[b,c]=[c,b];for(const i of [a,b,c]){positions.push(contour[i].x,contour[i].y,0);uvs.push(poly[i][0]/100,1-poly[i][1]/100);}}
  const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));geometry.setAttribute('uv',new THREE.Float32BufferAttribute(uvs,2));geometry.computeVertexNormals();geometries.push(geometry);return geometry;
 }
 function material(texture,poly){const m=createPrintMaterial(texture,poly,variant.stock);materials.push(m);return m;}
 function addPanel(id,parent,w,h,ox=0,oy=0){
  const pivot=new THREE.Group();parent.add(pivot);hinges[id]=pivot;
  if(variant.shape==='display'&&['front','left','right'].includes(id)){
   const cut=variant.tearHeight*100;
   const kept=id==='front'?[[0,cut],[100,cut],[100,100],[0,100]]:id==='left'?[[0,0],[100,cut],[100,100],[0,100]]:[[0,cut],[100,0],[100,100],[0,100]];
   const upper=id==='front'?[[0,0],[100,0],[100,cut],[0,cut]]:id==='left'?[[0,0],[100,0],[100,cut]]:[[0,0],[100,0],[0,cut]];
   pivot.add(new THREE.Mesh(paperGeometry(w,h,kept,ox,oy),material(textures[id],kept)));
   const removed=new THREE.Mesh(paperGeometry(w,h,upper,ox,oy),material(textures[id],upper));pivot.add(removed);tearAway.push(removed);
  }else if(id==='bottom-front'||id==='bottom-back'){
   pivot.add(new THREE.Mesh(paperGeometry(w,h,variant.bottomMain),material(textures[id],variant.bottomMain)));
   const diagonal=new THREE.Group();diagonal.position.x=w;pivot.add(diagonal);diagonal.add(new THREE.Mesh(paperGeometry(w,h,variant.bottomTab,0,0,w),material(textures[id],variant.bottomTab)));hinges[id+'-tab']=diagonal;
  }else pivot.add(new THREE.Mesh(paperGeometry(w,h,null,ox,oy),material(textures[id])));
  return pivot;
 }
 let textures={};
 function build(){
  scene=new THREE.Scene();scene.background=new THREE.Color('#f7f7f5');camera=new THREE.PerspectiveCamera(30,1,10,5000);camera.position.z=1000;
  rig=new THREE.Group();scene.add(rig);model=new THREE.Group();model.position.set(-W/2,H/2,D/2);rig.add(model);
  const left=addPanel('left',model,D,H,-D,0);const back=addPanel('back',left,W,H,-W,0);back.position.x=-D;
  const glue=addPanel('glue',back,G,H,-G,0);glue.position.x=-W;
  const right=addPanel('right',model,D,H);right.position.x=W;
  addPanel('front',model,W,H);
  const lid=addPanel('lid',model,W,D,0,-D),tuck=addPanel('lid-tuck',lid,W,T,0,-T);tuck.position.y=D;
  addPanel('dust-left-top',left,D,DT,-D,-DT);
  addPanel('dust-right-top',right,D,DT,0,-DT);
  const bl=addPanel('dust-left-bottom',left,D,DB,-D,0);bl.position.y=-H;
  const br=addPanel('dust-right-bottom',right,D,DB);br.position.y=-H;
  const frontBase=addPanel('bottom-front',model,W,B);frontBase.position.y=-H;
  const backBase=addPanel('bottom-back',back,W,B);backBase.position.set(-W,-H,0);
  // Closed, opaque inner stock under the interlocking flaps. Depth testing keeps
  // it behind the actual outer paper in every viewing direction.
  const bottomGeo=paperGeometry(W,D),bottomMat=new THREE.MeshBasicMaterial({color:variant.stock,side:THREE.DoubleSide});materials.push(bottomMat);floor=new THREE.Mesh(bottomGeo,bottomMat);floor.rotation.x=Math.PI/2;floor.position.y=-H+(variant.shape==='display'?1:.32);model.add(floor);
  if(variant.shape==='display'){const innerMat=new THREE.MeshBasicMaterial({color:'#fff9fc',side:THREE.BackSide});materials.push(innerMat);bottomMat.side=THREE.FrontSide;floor.add(new THREE.Mesh(bottomGeo,innerMat));}
 }
 function render(){
  if(!ready||destroyed)return;
  const rad=Math.PI/180;
  hinges.left.rotation.y=-90*rad*phase(.08,.32);hinges.back.rotation.y=-90*rad*phase(.26,.52);hinges.right.rotation.y=90*rad*phase(.4,.61);hinges.glue.rotation.y=-90*rad*phase(.5,.65);
  for(const id of ['dust-left-top','dust-right-top'])hinges[id].rotation.x=-90*rad*phase(.61,.73);
  for(const id of ['dust-left-bottom','dust-right-bottom'])hinges[id].rotation.x=90*rad*phase(.62,.73);
  hinges['bottom-back'].rotation.x=90*rad*phase(.69,.82);hinges['bottom-front'].rotation.x=90*rad*phase(.74,.87);
  const axis=new THREE.Vector3(variant.diagonal[0]*W,variant.diagonal[1]*B,0).normalize();
  for(const id of ['bottom-front-tab','bottom-back-tab']){hinges[id].quaternion.setFromAxisAngle(axis,Math.PI*phase(.57,.74));hinges[id].position.z=-.35*phase(.57,.74);}
  hinges.lid.rotation.x=-90*rad*phase(.76,.94);hinges['lid-tuck'].rotation.x=-90*rad*phase(.87,.98);
  const seat=phase(.6,1);hinges['dust-left-top'].position.y=hinges['dust-right-top'].position.y=-.4*seat;
  hinges['dust-left-bottom'].position.y=hinges['dust-right-bottom'].position.y=-H+.6*seat;hinges['bottom-back'].position.y=-H+.25*seat;
  // These offsets are in each hinge's parent coordinates. The glue tab
  // must move off the right wall along the back panel's X axis; the tuck
  // must move off the back wall along the lid's Y axis. Local Z only moved
  // them along those walls and left the printed faces coplanar.
  hinges.glue.position.set(-W+.65*seat,0,0);
  hinges['lid-tuck'].position.set(0,D-.65*seat,0);
  if(variant.shape==='display'){const open=displayOpen&&progress>=.999;tearAway.forEach(m=>m.visible=!open);for(const id of ['lid','dust-left-top','dust-right-top'])hinges[id].visible=!open;$('#display-toggle').disabled=progress<.999;$('#display-toggle').textContent=open?'상단 닫힌 형태로 보기':'진열형으로 보기';$('#display-toggle').setAttribute('aria-pressed',String(open));}
  floor.visible=progress>.88;materials.forEach(m=>{if(m.uniforms)m.uniforms.clean.value=phase(.03,.65)});
  const c=phase(0,1);rig.rotation.set(-rx*c*rad,ry*c*rad,0,'XYZ');rig.position.set((W+G)/2*(1-c),-(D+T-B)/2*(1-c),0);
  const width=stage.clientWidth,height=stage.clientHeight,aspect=width/height;camera.aspect=aspect;
  const tan=Math.tan(camera.fov*rad/2),flatDistance=Math.max((H+D+T+B)/2/tan,(2*W+2*D+G)/2/tan/aspect)*1.13;
  const foldedDistance=Math.hypot(W,H,D)/2/Math.sin(camera.fov*rad/2)*1.12;camera.position.z=(flatDistance+(foldedDistance-flatDistance)*c)/zoom;camera.updateProjectionMatrix();
  renderer.render(scene,camera);
  const full=progress>=.999,flat=progress<=.001;stage.dataset.state=host.dataset.state=flat?'flat':full?'folded':'partial';
  $('#view-state').textContent=flat?'01 / 평면 전개도':full?'03 / 입체 패키지':'02 / 접힘 과정';$('#view-hint').textContent=full?'드래그 회전 · 휠 확대/축소':'휠 확대/축소 · 연결된 면 접기';
  const text=flat?'평면 전개도':progress<.61?'옆면과 뒷면 접기':progress<.76?'안쪽 날개 접기':progress<.9?'바닥과 덮개 접기':full?'완성 · 드래그로 회전':'덮개 마무리';
  $('#phase-text').textContent=text;$('#progress-text').textContent=Math.round(progress*100)+'%';slider.value=Math.round(progress*100);slider.setAttribute('aria-valuetext',text+', '+Math.round(progress*100)+'퍼센트');toggle.textContent=full?'전개도로 펼치기':flat?'접어서 3D로 보기':'이어서 접기';$$('[data-view]').forEach(b=>b.disabled=!full);
 }
 function resize(){if(!renderer||!ready)return;renderer.setSize(stage.clientWidth,stage.clientHeight,false);render();}
 async function initialize(){
  if(initializing||destroyed)return;initializing=true;
  try{
   renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'low-power'});renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));stage.append(renderer.domElement);
   renderer.domElement.addEventListener('webglcontextlost',e=>{e.preventDefault();stop();$('#phase-text').textContent='3D 화면이 중단됐습니다. 페이지를 새로 열어주세요.';});
   const entries=await Promise.all(Object.entries(variant.textures).map(async([id,url])=>[id,await loadTexture(url)]));if(destroyed)return;textures=Object.fromEntries(entries);build();ready=true;toggle.disabled=slider.disabled=$('#flat-reset').disabled=false;resize();
  }catch(error){host.dataset.state=stage.dataset.state='error';stage.innerHTML='<p class="render-error">이 브라우저에서 3D 화면을 표시할 수 없습니다. 최신 Chrome 또는 Safari에서 다시 열어주세요.</p>';$('#phase-text').textContent='3D 표시 실패';console.error(error);}
 }
 function animate(target){if(!ready)return;stop();const from=progress;if(matchMedia('(prefers-reduced-motion: reduce)').matches||Math.abs(target-from)<.0001){progress=target;render();return;}const start=performance.now(),duration=2000*Math.abs(target-from);toggle.disabled=true;stage.setAttribute('aria-busy','true');const tick=now=>{const t=clamp((now-start)/duration);progress=from+(target-from)*t;render();if(t<1)animation=requestAnimationFrame(tick);else{stop();render();}};animation=requestAnimationFrame(tick);}
 toggle.onclick=()=>{rx=-12;ry=-28;animate(progress>=.999?0:1)};$('#flat-reset').onclick=()=>{rx=-12;ry=-28;zoom=1;animate(0)};slider.oninput=()=>{stop();progress=Number(slider.value)/100;render()};
 if($('#display-toggle'))$('#display-toggle').onclick=()=>{displayOpen=!displayOpen;render();};
 const views={front:[0,0],back:[0,180],side:[0,-90],bottom:[85,30],reset:[-12,-28]};$$('[data-view]').forEach(b=>b.onclick=()=>{[rx,ry]=views[b.dataset.view];if(b.dataset.view==='reset')zoom=1;render()});
 stage.onpointerdown=e=>{if(progress<.999||animation)return;drag=true;lastX=e.clientX;lastY=e.clientY;stage.setPointerCapture(e.pointerId);stage.classList.add('dragging')};stage.onpointermove=e=>{if(!drag)return;ry+=(e.clientX-lastX)*.5;rx=Math.max(-90,Math.min(90,rx-(e.clientY-lastY)*.35));lastX=e.clientX;lastY=e.clientY;render()};stage.onpointerup=stage.onpointercancel=()=>{drag=false;stage.classList.remove('dragging')};stage.onkeydown=e=>{if(progress<.999||!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key))return;e.preventDefault();if(e.key==='ArrowLeft')ry-=10;if(e.key==='ArrowRight')ry+=10;if(e.key==='ArrowUp')rx=Math.max(-90,rx-10);if(e.key==='ArrowDown')rx=Math.min(90,rx+10);render()};
 stage.addEventListener('wheel',event=>{
  if(!ready||animation)return;
  event.preventDefault();
  const pixels=event.deltaY*(event.deltaMode===1?16:event.deltaMode===2?stage.clientHeight:1);
  zoom=Math.max(.65,Math.min(2.5,zoom*Math.exp(-Math.max(-200,Math.min(200,pixels))*.0015)));
  render();
 },{passive:false});
 const resizeObserver=new ResizeObserver(resize);resizeObserver.observe(stage);
 const visibility=new IntersectionObserver(es=>{if(es.some(e=>e.isIntersecting)){initialize();visibility.disconnect();}},{rootMargin:'500px'});visibility.observe(host);
 const api={getState(){return {progress,rx,ry,zoom,displayOpen};},getInteriorBounds(){
   if(!ready)return null;model.updateWorldMatrix(true,true);const inverse=new THREE.Matrix4().copy(model.matrixWorld).invert(),bounds={};
   for(const id of ['glue','lid-tuck']){const box=new THREE.Box3();hinges[id].traverse(object=>{if(!object.isMesh)return;const positions=object.geometry.getAttribute('position');for(let i=0;i<positions.count;i++)box.expandByPoint(new THREE.Vector3().fromBufferAttribute(positions,i).applyMatrix4(object.matrixWorld).applyMatrix4(inverse));});bounds[id]={min:box.min.toArray(),max:box.max.toArray()};}return bounds;
  },setBackground(color){if(scene){scene.background.set(color);render();}},setView(x,y){rx=x;ry=y;render();},projectBottom(){if(!ready)return [];model.updateWorldMatrix(true,false);return [[0,-H,0],[W,-H,0],[W,-H,-D],[0,-H,-D]].map(p=>{const v=new THREE.Vector3(...p).applyMatrix4(model.matrixWorld).project(camera);return [(v.x+1)/2*stage.clientWidth,(1-v.y)/2*stage.clientHeight];});},destroy(){destroyed=true;stop();visibility.disconnect();resizeObserver.disconnect();geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());renderer?.dispose();root.innerHTML='';}};
 host.viewer=api;return api;
}

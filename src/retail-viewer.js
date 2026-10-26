import * as THREE from 'three';
import foldStyles from './fold-demo.css?inline';
import viewerTheme from './viewer-theme.css?inline';
import {loadTexture,createPrintMaterial} from './print-material.js';
const clamp=x=>Math.max(0,Math.min(1,x));
const ease=x=>x*x*(3-2*x);
let nextId=0;

// Flexible film and flat hanging packs have their own geometry, rather than
// forcing a carton hinge structure onto a different kind of packaging.
export function mountRetailViewer(host,variants,initialState={}){
 const variant=variants[0],pouch=variant.shape==='pouch',uid=`retail-${++nextId}`;
 const [W,H,D]=variant.dimensions,title=`${variant.label} ${variant.title}`;
 const root=host.attachShadow({mode:'open'}),$=s=>root.querySelector(s),$$=s=>root.querySelectorAll(s);
 root.innerHTML=`<style>${foldStyles}
 :host{display:block;min-width:0;font-family:Arial,'Apple SD Gothic Neo','Malgun Gothic',sans-serif;color:#292929}.model-name{font-size:17px;margin:0 0 9px;font-weight:600}.dimensions{font-size:11px;margin:0 0 18px;color:#555;line-height:1.8}.stage{height:470px;touch-action:pan-y}.stage canvas{display:block;width:100%;height:100%}.main-controls{padding:20px 0;flex-wrap:wrap}.scrubber{max-width:360px}.demo-notes{padding-bottom:0}.demo-notes p{margin:0}.viewer-bottom{min-height:55px}.render-error{padding:35px;font-size:12px;line-height:1.9}
 @media(max-width:700px){.stage{height:370px}.model-name{font-size:15px}.dimensions{font-size:10px}.detail-controls{display:block}.scrubber{max-width:none}.rotation-controls{margin-top:18px}.viewer-top{font-size:9px}.demo-notes{font-size:10px}}
 ${viewerTheme}</style><div class="widget"><h4 class="model-name">${title}</h4><p class="dimensions">${variant.dimensionNote}</p>
 <section class="viewer" aria-label="${title} 입체 목업"><div class="viewer-top"><span id="view-state">01 / 평면 그래픽</span><span id="view-hint">자료를 불러오는 중</span></div><div class="stage" tabindex="0" role="group" aria-label="${title}. 입체 상태에서 드래그 회전, 휠 확대·축소가 가능합니다." data-state="loading"></div><div class="viewer-bottom"><span id="phase-text" aria-live="polite">자료를 불러오는 중</span><span id="progress-text">0%</span></div></section>
 <div class="main-controls"><button id="fold-toggle" class="primary" disabled>3D 목업으로 보기</button><button id="flat-reset" disabled>평면 그래픽으로 초기화</button></div>
 <div class="detail-controls"><div class="scrubber"><label for="${uid}">${pouch?'앞뒤 인쇄면 → 실링 파우치':'전면 그래픽 → 입체 진열 팩'}</label><input id="${uid}" class="fold-progress" type="range" min="0" max="100" step="1" value="0" disabled /></div><div class="rotation-controls" role="group" aria-label="패키지 시점"><button data-view="front" disabled>정면</button><button data-view="back" disabled>뒷면</button><button data-view="side" disabled>측면</button><button data-view="bottom" disabled>바닥</button><button data-view="reset" disabled>초기 시점</button></div></div>
 <div class="demo-notes"><p>${pouch?'제공된 앞·뒷면으로 봉투를 만들고, 상하 실링과 중앙의 볼륨을 표현했습니다.':'제공 전면 그래픽으로 얇은 진열 팩과 원형 배지의 높이감을 표현했습니다. 후면은 자료가 없어 무지로 표시합니다.'}</p><p>약 2초 입체 전환 · 드래그 회전 · 휠 확대/축소 · 초기 시점에서 배율 복원.</p></div></div>`;
 const stage=$('.stage'),toggle=$('#fold-toggle'),slider=$('.fold-progress');
 let progress=initialState.progress??0,rx=initialState.rx??-12,ry=initialState.ry??-28,zoom=initialState.zoom??1;
 let renderer,scene,camera,rig,front,back,edgeMesh,ready=false,destroyed=false,initializing=false,animation=0,drag=false,lastX=0,lastY=0;
 const materials=[],geometries=[],surfaces=[],coins=[];
 host.dataset.variant=variant.id;host.dataset.state='loading';host.dataset.dimensions=variant.dimensions.join(',');
 function stockMaterial(color){const m=new THREE.MeshStandardMaterial({color,roughness:.5,metalness:.03,side:THREE.DoubleSide});materials.push(m);return m;}
 function printed(texture){
  const m=createPrintMaterial(texture,null,variant.stock),edges=m.uniforms.edges.value;let n=m.uniforms.edgeCount.value;
  for(const line of variant.sealLines){edges[n++].set(0,1-line,1,1-line);}
  const [u,v,r]=variant.hole;
  for(let i=0;i<8;i++){const a=i*Math.PI/4,b=(i+1)*Math.PI/4;edges[n++].set(u+r*Math.cos(a),1-v+r*W/H*Math.sin(a),u+r*Math.cos(b),1-v+r*W/H*Math.sin(b));}
  m.uniforms.edgeCount.value=n;materials.push(m);return m;
 }
 function outline(top=H/2,bottom=-H/2,hole=false){
  const s=new THREE.Shape();s.moveTo(-W/2,top);s.lineTo(W/2,top);s.lineTo(W/2,bottom);s.lineTo(-W/2,bottom);s.closePath();
  if(hole){const [u,v,r]=variant.hole,p=new THREE.Path();p.absarc((u-.5)*W,H/2-v*H,r*W,0,Math.PI*2,true);s.holes.push(p);}return s;
 }
 function mapUV(geometry){const pos=geometry.getAttribute('position'),uv=[];for(let i=0;i<pos.count;i++)uv.push(pos.getX(i)/W+.5,pos.getY(i)/H+.5);geometry.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));geometries.push(geometry);return geometry;}
 function surface(parent,geometry,mat,body=false){
  const mesh=new THREE.Mesh(mapUV(geometry),mat);parent.add(mesh);
  const pos=geometry.getAttribute('position'),depth=[];
  for(let i=0;i<pos.count;i++){
   const x=pos.getX(i),y=pos.getY(i),t=clamp((H/2-15-y)/(H-30)),u=clamp(x/W+.5);
   depth.push(pouch?.16+(body?D/2*Math.pow(Math.max(0,Math.sin(Math.PI*u)*Math.sin(Math.PI*t)),.8):0):D/2+.02);
  }
  surfaces.push({mesh,depth});return mesh;
 }
 function build(textures){
  scene=new THREE.Scene();scene.background=new THREE.Color('#f7f7f5');scene.add(new THREE.HemisphereLight('#ffffff','#b7acb5',2));const light=new THREE.DirectionalLight('#ffffff',2.2);light.position.set(-120,200,300);scene.add(light);
  camera=new THREE.PerspectiveCamera(30,1,10,5000);rig=new THREE.Group();scene.add(rig);front=new THREE.Group();back=new THREE.Group();rig.add(front,back);
  const frontMat=printed(textures.front),backMat=textures.back?printed(textures.back):stockMaterial('#f6f1f3');
  for(const [group,mat] of [[front,frontMat],[back,backMat]]){
   if(pouch){
    surface(group,new THREE.ShapeGeometry(outline(H/2,H/2-15,true),48),mat);
    const geometry=new THREE.PlaneGeometry(W,H-30,56,48);surface(group,geometry,mat,true);
    surface(group,new THREE.ShapeGeometry(outline(-H/2+15,-H/2),8),mat);
   }else surface(group,new THREE.ShapeGeometry(outline(H/2,-H/2,true),64),mat);
  }
  // Only the extrusion side walls are drawn; the independently textured faces
  // sit outside them and never share a coplanar depth surface.
  const edgeGeometry=new THREE.ExtrudeGeometry(outline(H/2,-H/2,true),{depth:pouch?.3:D,bevelEnabled:false,curveSegments:48,steps:1});edgeGeometry.translate(0,0,-(pouch?.3:D)/2);geometries.push(edgeGeometry);
  const invisible=new THREE.MeshBasicMaterial();invisible.visible=false;materials.push(invisible);edgeMesh=new THREE.Mesh(edgeGeometry,[invisible,stockMaterial(pouch?variant.stock:'#e2d5dc')]);rig.add(edgeMesh);
  if(!pouch){
   const texture=textures.front;
   const relief=variant.badgeRelief||[420,590].flatMap(y=>[120,290,460].map(x=>({u:x/585,v:y/texture.image.height,r:80/585})));
   for(const badge of relief){
    const r=badge.r*W,centerX=(badge.u-.5)*W,centerY=H/2-badge.v*H;
    const disk=new THREE.CircleGeometry(r,64),pos=disk.getAttribute('position'),uv=[];
    for(let i=0;i<pos.count;i++)uv.push((pos.getX(i)+centerX)/W+.5,(pos.getY(i)+centerY)/H+.5);
    disk.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));geometries.push(disk);
    const coin=new THREE.Group(),face=new THREE.Mesh(disk,printed(texture));face.position.z=.85;coin.add(face);
    const side=new THREE.CylinderGeometry(r,r,1.6,64,1,true);side.rotateX(Math.PI/2);geometries.push(side);coin.add(new THREE.Mesh(side,stockMaterial(variant.badgeRelief?'#dfdce1':variant.group==='daiso'?'#dac28d':variant.stock)));coin.position.set(centerX,centerY,0);front.add(coin);coins.push(coin);
   }
  }
 }
 function stop(){if(animation)cancelAnimationFrame(animation);animation=0;drag=false;stage.classList.remove('dragging');stage.removeAttribute('aria-busy');toggle.disabled=!ready;}
 function render(){
  if(!ready||destroyed)return;const t=ease(progress),rad=Math.PI/180;
  for(const {mesh,depth} of surfaces){const pos=mesh.geometry.getAttribute('position');for(let i=0;i<pos.count;i++)pos.setZ(i,depth[i]*t);pos.needsUpdate=true;mesh.geometry.computeVertexNormals();}
  front.position.x=pouch?-W*.6*(1-t):0;back.position.x=pouch?W*.6*(1-t):0;back.rotation.y=Math.PI*t;back.visible=pouch||progress>.001;
  edgeMesh.scale.z=t;edgeMesh.visible=progress>.001;
  for(const coin of coins){coin.visible=progress>.001;coin.position.z=(D/2+.85)*t;coin.scale.z=t;}
  materials.forEach(m=>{if(m.uniforms?.clean)m.uniforms.clean.value=variant.cleanCutlines===false?0:t});
  rig.rotation.set(-rx*t*rad,ry*t*rad,0,'XYZ');
  const width=stage.clientWidth,height=stage.clientHeight,aspect=width/height,tan=Math.tan(camera.fov*rad/2);
  const flatDistance=Math.max(H/2/tan,W*(pouch?2.25:1.1)/2/tan/aspect)*1.16,foldedDistance=Math.hypot(W,H,D)/2/Math.sin(camera.fov*rad/2)*1.15;
  camera.aspect=aspect;camera.position.z=(flatDistance+(foldedDistance-flatDistance)*t)/zoom;camera.updateProjectionMatrix();renderer.render(scene,camera);
  const full=progress>=.999,flat=progress<=.001;host.dataset.state=stage.dataset.state=flat?'flat':full?'folded':'partial';
  $('#view-state').textContent=flat?'01 / 평면 그래픽':full?'03 / 입체 패키지':'02 / 입체 전환';
  $('#view-hint').textContent=full?'드래그 회전 · 휠 확대/축소':'휠 확대/축소';
  $('#phase-text').textContent=flat?(pouch?'앞면 · 뒷면 인쇄 그래픽':'전면 인쇄 그래픽'):full?'완성 · 드래그로 회전':pouch?'앞뒤 면 조립 · 실링과 볼륨 형성':'진열 팩 · 배지 높이감 형성';
  $('#progress-text').textContent=Math.round(progress*100)+'%';slider.value=Math.round(progress*100);slider.setAttribute('aria-valuetext',`${full?'입체 목업':'평면에서 입체로 전환'}, ${Math.round(progress*100)}퍼센트`);
  toggle.textContent=full?'평면 그래픽으로 보기':flat?'3D 목업으로 보기':'이어서 3D로 보기';$$('[data-view]').forEach(b=>b.disabled=!full);
 }
 function resize(){if(ready&&!destroyed){renderer.setSize(stage.clientWidth,stage.clientHeight,false);render();}}
 async function initialize(){
  if(initializing||destroyed)return;initializing=true;
  try{renderer=new THREE.WebGLRenderer({antialias:true,preserveDrawingBuffer:true,powerPreference:'low-power'});renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));stage.append(renderer.domElement);
   const textures=Object.fromEntries(await Promise.all(Object.entries(variant.textures).map(async([id,url])=>[id,await loadTexture(url)])));if(destroyed)return;if(variant.badgeRelief){for(const texture of Object.values(textures)){texture.generateMipmaps=true;texture.minFilter=THREE.LinearMipmapLinearFilter;texture.anisotropy=Math.min(8,renderer.capabilities.getMaxAnisotropy());texture.needsUpdate=true;}}build(textures);ready=true;toggle.disabled=slider.disabled=$('#flat-reset').disabled=false;resize();
  }catch(error){host.dataset.state=stage.dataset.state='error';$('#phase-text').textContent='3D 표시 실패';stage.innerHTML='<p class="render-error">3D 화면을 표시할 수 없습니다. 최신 Chrome 또는 Safari에서 다시 열어주세요.</p>';console.error(error);}
 }
 function animate(target){if(!ready)return;stop();const from=progress;if(matchMedia('(prefers-reduced-motion: reduce)').matches){progress=target;render();return;}toggle.disabled=true;stage.setAttribute('aria-busy','true');const start=performance.now(),duration=Math.max(1,2000*Math.abs(target-from));const tick=now=>{const t=clamp((now-start)/duration);progress=from+(target-from)*t;render();if(t<1)animation=requestAnimationFrame(tick);else{stop();render();}};animation=requestAnimationFrame(tick);}
 toggle.onclick=()=>animate(progress>=.999?0:1);$('#flat-reset').onclick=()=>{rx=-12;ry=-28;zoom=1;animate(0);};slider.oninput=()=>{stop();progress=Number(slider.value)/100;render();};
 const views={front:[0,0],back:[0,180],side:[0,-82],bottom:[85,30],reset:[-12,-28]};$$('[data-view]').forEach(b=>b.onclick=()=>{[rx,ry]=views[b.dataset.view];if(b.dataset.view==='reset')zoom=1;render();});
 stage.onpointerdown=e=>{if(progress<.999||animation)return;drag=true;lastX=e.clientX;lastY=e.clientY;stage.setPointerCapture(e.pointerId);stage.classList.add('dragging');};stage.onpointermove=e=>{if(!drag)return;ry+=(e.clientX-lastX)*.5;rx=Math.max(-90,Math.min(90,rx-(e.clientY-lastY)*.35));lastX=e.clientX;lastY=e.clientY;render();};stage.onpointerup=stage.onpointercancel=()=>{drag=false;stage.classList.remove('dragging');};
 stage.onkeydown=e=>{if(progress<.999||!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key))return;e.preventDefault();if(e.key==='ArrowLeft')ry-=10;if(e.key==='ArrowRight')ry+=10;if(e.key==='ArrowUp')rx=Math.max(-90,rx-10);if(e.key==='ArrowDown')rx=Math.min(90,rx+10);render();};
 stage.addEventListener('wheel',event=>{if(!ready||animation)return;event.preventDefault();const pixels=event.deltaY*(event.deltaMode===1?16:event.deltaMode===2?stage.clientHeight:1);zoom=Math.max(.65,Math.min(2.5,zoom*Math.exp(-Math.max(-200,Math.min(200,pixels))*.0015)));render();},{passive:false});
 const resizer=new ResizeObserver(resize);resizer.observe(stage);const observer=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting)){initialize();observer.disconnect();}},{rootMargin:'500px'});observer.observe(host);
 const api={getState(){return {progress,rx,ry,zoom};},setView(x,y){rx=x;ry=y;render();},setBackground(color){if(scene){scene.background.set(color);render();}},destroy(){destroyed=true;stop();observer.disconnect();resizer.disconnect();geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());renderer?.dispose();root.innerHTML='';}};
 host.viewer=api;return api;
}

import * as THREE from 'three';
import {badgeDesigns} from './vector-data.js';
import {readyBadgeFace,loadBadgeFace} from './badge-texture-cache.js';
const rad=Math.PI/180;
export function mountBadgeViewer(host,onSelect){
 const stage=host.querySelector('.badge-3d-stage'),status=host.querySelector('.badge-3d-status');
 let renderer,scene,camera,rig,frontMesh,backMesh,ready=false,disposed=false,current=null,rx=0,ry=0,zoom=1,drag=false,lastX=0,lastY=0,request=0,resolution=0,loading=false;
 const geometries=[],materials=[];let frontTexture,backTexture,placeholderTexture;
 function setup(){
  renderer=new THREE.WebGLRenderer({antialias:true,preserveDrawingBuffer:true,powerPreference:'low-power'});renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.toneMapping=THREE.NoToneMapping;renderer.outputColorSpace=THREE.SRGBColorSpace;stage.append(renderer.domElement);
  scene=new THREE.Scene();scene.background=new THREE.Color('#f7f7f5');scene.add(new THREE.HemisphereLight('#ffffff','#d3cbd2',2));
  const key=new THREE.DirectionalLight('#ffffff',2);key.position.set(-70,95,150);scene.add(key);const fill=new THREE.DirectionalLight('#ffffff',.7);fill.position.set(100,-40,80);scene.add(fill);
  camera=new THREE.OrthographicCamera(-64,64,32,-32,.1,1000);rig=new THREE.Group();scene.add(rig);
  placeholderTexture=new THREE.DataTexture(new Uint8Array([255,255,255,255]),1,1);placeholderTexture.colorSpace=THREE.SRGBColorSpace;placeholderTexture.needsUpdate=true;
  const faceGeo=new THREE.CircleGeometry(27,192);geometries.push(faceGeo);
  for(const side of ['front','back']){
   const mat=new THREE.MeshBasicMaterial({color:'#fff',toneMapped:false,map:placeholderTexture});materials.push(mat);
   const mesh=new THREE.Mesh(faceGeo,mat);mesh.position.z=side==='front'?1.005:-1.005;if(side==='back')mesh.rotation.y=Math.PI;rig.add(mesh);if(side==='front')frontMesh=mesh;else backMesh=mesh;
  }
  for(const [depth,z,color] of [[1.6,0,'#454247'],[.2,.9,'#ede8ed'],[.2,-.9,'#ede8ed']]){
   const g=new THREE.CylinderGeometry(26.98,26.98,depth,192,1,true);g.rotateX(Math.PI/2);geometries.push(g);
   const m=new THREE.MeshStandardMaterial({color,roughness:.65,metalness:.05});materials.push(m);const edge=new THREE.Mesh(g,m);edge.position.z=z;rig.add(edge);
  }
  ready=true;camera.position.z=120;renderer.compile(scene,camera);resize();
 }
 function draw(){if(!ready||disposed)return;const w=stage.clientWidth,h=stage.clientHeight;if(!w||!h)return;const aspect=w/h,span=Math.max(64,64/aspect);camera.left=-span*aspect/2;camera.right=span*aspect/2;camera.top=span/2;camera.bottom=-span/2;camera.position.z=120;camera.zoom=zoom;camera.updateProjectionMatrix();rig.rotation.set(-rx*rad,ry*rad,0,'XYZ');renderer.render(scene,camera);stage.dataset.face=Math.abs(((ry%360)+360)%360-180)<90?'back':'front';host.querySelector('.badge-zoom-value').textContent=Math.round(zoom*100)+'%';}
 function resize(){if(renderer&&!disposed&&stage.clientWidth&&stage.clientHeight){renderer.setSize(stage.clientWidth,stage.clientHeight,false);draw();if(current&&!loading)ensureResolution();}}
 function neededSize(){const projected=Math.min(stage.clientWidth,stage.clientHeight)*Math.min(devicePixelRatio,2)*zoom;return Math.min(renderer.capabilities.maxTextureSize,projected>1500?4096:projected>750?2048:1024);}
 function texture(image){const t=new THREE.Texture(image);t.needsUpdate=true;t.colorSpace=THREE.SRGBColorSpace;t.anisotropy=Math.min(8,renderer.capabilities.getMaxAnisotropy());return t;}
 function applyFaces(front,back,size){
  if(front&&frontTexture?.image!==front){frontTexture?.dispose();frontTexture=texture(front);frontMesh.material.map=frontTexture;frontMesh.material.needsUpdate=true;frontMesh.visible=true;}
  if(back&&backTexture?.image!==back){backTexture?.dispose();backTexture=texture(back);backMesh.material.map=backTexture;backMesh.material.needsUpdate=true;backMesh.visible=true;}
  resolution=size;stage.dataset.state='ready';stage.dataset.textureSize=String(size);stage.removeAttribute('aria-busy');draw();
 }
 async function select(id,reset=false,clickedImage=null){
  const badge=badgeDesigns.find(b=>b.id===id);if(!badge)return;
  const seq=++request;current=badge;if(reset){rx=0;ry=0;zoom=1;}resolution=0;loading=true;
  host.dataset.badge=id;host.querySelector('.badge-selected-title').textContent=`${badge.label} · ${badge.typeDescription}`;onSelect?.(badge);
  try{
   if(!ready)setup();renderer.setSize(stage.clientWidth,stage.clientHeight,false);
   const quick=readyBadgeFace(badge,'front',2048)||readyBadgeFace(badge,'front')||(clickedImage?.complete&&clickedImage.naturalWidth?clickedImage:null),reverse=readyBadgeFace(badge,'back');
   frontMesh.visible=!!quick;backMesh.visible=true;
   if(!reverse){backTexture?.dispose();backTexture=null;backMesh.material.map=placeholderTexture;backMesh.material.needsUpdate=true;}
   if(quick){applyFaces(quick,reverse,quick.naturalWidth||quick.width);status.textContent='드래그 회전 · 휠 확대/축소 · 앞면/뒷면 선택';}
   else{stage.dataset.state='loading';stage.setAttribute('aria-busy','true');status.textContent='인쇄면을 준비하는 중';draw();}
   const size=Math.max(neededSize(),resolution),[front,back]=await Promise.all([loadBadgeFace(badge,'front',size),loadBadgeFace(badge,'back',size)]);
   if(disposed||seq!==request)return;loading=false;applyFaces(front,back,size);status.textContent='드래그 회전 · 휠 확대/축소 · 앞면/뒷면 선택';ensureResolution();
  }catch(error){if(seq!==request||disposed)return;loading=false;stage.removeAttribute('aria-busy');if(!resolution)stage.dataset.state='error';status.textContent='배지 화면을 불러오지 못했습니다. 다시 선택해주세요.';console.error(error);}
 }
 async function ensureResolution(){
  if(!ready||!current||loading)return;const target=neededSize();if(target<=resolution)return;
  const id=current.id,seq=++request,badge=current;loading=true;
  try{const [front,back]=await Promise.all([loadBadgeFace(badge,'front',target),loadBadgeFace(badge,'back',target)]);if(disposed||seq!==request||current.id!==id)return;
   loading=false;applyFaces(front,back,target);status.textContent='드래그 회전 · 휠 확대/축소 · 앞면/뒷면 선택';ensureResolution();
  }catch(error){if(seq===request&&!disposed){loading=false;status.textContent='현재 인쇄면으로 표시 중입니다. 다시 확대하면 재시도합니다.';console.error(error);}}
 }
 function setZoom(value){zoom=Math.max(.7,Math.min(2.8,value));draw();ensureResolution();}
 stage.addEventListener('wheel',e=>{if(!ready)return;e.preventDefault();const delta=e.deltaY*(e.deltaMode===1?16:e.deltaMode===2?stage.clientHeight:1);setZoom(zoom*Math.exp(-Math.max(-200,Math.min(200,delta))*.0015));},{passive:false});
 stage.onpointerdown=e=>{if(!ready)return;drag=true;lastX=e.clientX;lastY=e.clientY;stage.setPointerCapture(e.pointerId);stage.classList.add('dragging');};stage.onpointermove=e=>{if(!drag)return;ry+=(e.clientX-lastX)*.5;rx=Math.max(-90,Math.min(90,rx-(e.clientY-lastY)*.4));lastX=e.clientX;lastY=e.clientY;draw();};stage.onpointerup=stage.onpointercancel=()=>{drag=false;stage.classList.remove('dragging');};
 stage.onkeydown=e=>{if(!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key))return;e.preventDefault();e.stopPropagation();if(e.key==='ArrowLeft')ry-=10;if(e.key==='ArrowRight')ry+=10;if(e.key==='ArrowUp')rx=Math.max(-90,rx-10);if(e.key==='ArrowDown')rx=Math.min(90,rx+10);draw();};
 host.querySelectorAll('[data-badge-view]').forEach(button=>button.onclick=()=>{const view=button.dataset.badgeView;if(view==='front'){rx=0;ry=0;}if(view==='back'){rx=0;ry=180;}if(view==='edge'){rx=-10;ry=82;}if(view==='reset'){rx=0;ry=0;zoom=1;}draw();});
 host.querySelector('[data-badge-zoom="in"]').onclick=()=>setZoom(zoom*1.25);host.querySelector('[data-badge-zoom="out"]').onclick=()=>setZoom(zoom/1.25);
 const observer=new ResizeObserver(resize);observer.observe(stage);
 const api={prepare(){if(!ready&&!disposed)setup();},select,getState(){return {badge:current?.id,rx,ry,zoom,resolution,loading};},destroy(){disposed=true;request++;observer.disconnect();frontTexture?.dispose();backTexture?.dispose();placeholderTexture?.dispose();geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());renderer?.dispose();renderer?.forceContextLoss();stage.replaceChildren();}};host.badgeViewer=api;return api;
}

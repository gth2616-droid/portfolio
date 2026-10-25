import './fold-demo.css';
const textures={
 front:new URL('./fold-assets/front.png',import.meta.url).href,
 left:new URL('./fold-assets/left.png',import.meta.url).href,
 back:new URL('./fold-assets/back.png',import.meta.url).href,
 right:new URL('./fold-assets/right.png',import.meta.url).href,
 glue:new URL('./fold-assets/glue.png',import.meta.url).href,
 lid:new URL('./fold-assets/lid.png',import.meta.url).href,
 'lid-tuck':new URL('./fold-assets/lid-tuck.png',import.meta.url).href,
 'dust-left-top':new URL('./fold-assets/dust-left-top.png',import.meta.url).href,
 'dust-right-top':new URL('./fold-assets/dust-right-top.png',import.meta.url).href,
 'bottom-front':new URL('./fold-assets/bottom-front.png',import.meta.url).href,
 'bottom-back':new URL('./fold-assets/bottom-back.png',import.meta.url).href,
 'dust-left-bottom':new URL('./fold-assets/dust-left-bottom.png',import.meta.url).href,
 'dust-right-bottom':new URL('./fold-assets/dust-right-bottom.png',import.meta.url).href,
};
const paper=id=>`<div class="paper"><img class="ink-original" src="${textures[id]}" alt="" draggable="false"/><img class="ink-clean" src="${textures[id]}" alt="" draggable="false"/></div><div class="paper-inside" aria-hidden="true"><img src="${textures[id]}" alt="" draggable="false"/></div>`;
function panel(id,children=''){
 // The diagonal locking tab is a separate hinged piece of the original flap.
 if(id==='bottom-front'||id==='bottom-back')return `<div class="panel ${id}" data-panel="${id}"><div class="bottom-main">${paper(id)}</div><div class="diagonal-hinge" data-diagonal="${id}">${paper(id)}</div>${children}</div>`;
 return `<div class="panel ${id}" data-panel="${id}">${paper(id)}${children}</div>`;
}
document.querySelector('#fold-app').innerHTML=`
<svg class="render-filters" aria-hidden="true" width="0" height="0"><defs>
<filter id="no-cutlines" color-interpolation-filters="sRGB" x="0" y="0" width="100%" height="100%">
<feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  -5 5 5 0 1" result="key"/>
<feComposite in="key" in2="SourceGraphic" operator="in" result="ink"/>
<feFlood flood-color="#efa0c3" result="stock"/><feComposite in="stock" in2="SourceGraphic" operator="in" result="stockMask"/>
<feMerge><feMergeNode in="stockMask"/><feMergeNode in="ink"/></feMerge></filter>
<filter id="paper-stock" color-interpolation-filters="sRGB"><feFlood flood-color="#fff9fc"/><feComposite in2="SourceGraphic" operator="in"/></filter>
</defs></svg><header class="demo-header"><span>INTERACTION EXAMPLE / 01</span><a href="./index.html">와이어프레임으로 돌아가기</a></header>
<div class="demo-intro"><div><p class="overline">전개도 → 접힘 → 입체 관찰</p><h1>하츄핑 싱글팩</h1><p>같은 전개도가 접혀 하나의 패키지가 되는 예시입니다.</p></div><dl><div><dt>제품 규격</dt><dd>120 × 140 × 40 mm</dd></div><div><dt>사용 자료</dt><dd>제공된 실제 패키지 전개도</dd></div></dl></div>
<section class="viewer" aria-label="하츄핑 싱글팩 전개도 접힘 시연">
<div class="viewer-top"><span id="view-state">01 / 평면 전개도</span><span id="view-hint">아래 버튼을 눌러 접어보세요</span></div>
<div class="stage" tabindex="0" role="group" aria-label="패키지 뷰어. 접은 후 드래그 또는 방향키로 회전할 수 있습니다." data-state="flat">
<div class="package-shadow" aria-hidden="true"></div><div class="rig"><div class="turntable"><div class="package-root"><div class="bottom-backing" aria-hidden="true"><div class="base-outside"></div><div class="base-inside"></div></div>${panel('front',panel('left',panel('back',panel('glue')+panel('bottom-back'))+panel('dust-left-top')+panel('dust-left-bottom'))+panel('right',panel('dust-right-top')+panel('dust-right-bottom'))+panel('lid',panel('lid-tuck'))+panel('bottom-front'))}</div></div></div>
</div><div class="viewer-bottom"><span id="phase-text" aria-live="polite">평면 전개도</span><span id="progress-text">0%</span></div>
</section>
<div class="main-controls"><button id="fold-toggle" class="primary">접어서 3D로 보기</button><button id="flat-reset">전개도로 초기화</button></div>
<div class="detail-controls"><div class="scrubber"><label for="fold-progress">접힘 단계 직접 살펴보기</label><input id="fold-progress" type="range" min="0" max="100" step="1" value="0" aria-valuetext="평면 전개도, 0퍼센트"></div><div class="rotation-controls" role="group" aria-label="완성된 패키지 시점"><button data-view="front" disabled>정면</button><button data-view="back" disabled>뒷면</button><button data-view="side" disabled>측면</button><button data-view="reset" disabled>시점 초기화</button></div></div>
<div class="demo-notes"><p><strong>확인할 동작</strong> 전개도에서 각 면이 이어진 채 접힙니다. 완성 후 마우스·터치 드래그 또는 방향키로 회전하고, 버튼을 다시 누르면 펼쳐집니다.</p><p>실제 그래픽과 제품 규격 비율을 사용한 시각적 시연입니다. 바닥의 사선 날개를 안으로 접고, 바닥 플랩을 겹쳐 닫는 시연입니다. 생산용 조립 순서와 종이 두께의 정밀 검증은 별도입니다.</p></div>`;

let progress=0,animation=0,rotationX=-12,rotationY=-28,dragging=false,lastX=0,lastY=0;
const stage=document.querySelector('.stage'),rig=document.querySelector('.rig'),turntable=document.querySelector('.turntable'),slider=document.querySelector('#fold-progress'),toggle=document.querySelector('#fold-toggle');
const panelEls=Object.fromEntries([...document.querySelectorAll('[data-panel]')].map(e=>[e.dataset.panel,e]));
const clamp=x=>Math.max(0,Math.min(1,x));const smooth=x=>x*x*(3-2*x);const phase=(a,b)=>smooth(clamp((progress-a)/(b-a)));
function bend(id,axis,degrees,start,end){panelEls[id].style.transform=`rotate${axis}(${degrees*phase(start,end)}deg)`;}
function render(){
 bend('left','Y',-90,.08,.32);bend('back','Y',-90,.26,.52);bend('right','Y',90,.4,.61);bend('glue','Y',-90,.5,.65);
 bend('dust-left-top','X',90,.61,.73);bend('dust-right-top','X',90,.61,.73);
 // Fold diagonal locking tabs inward before seating the larger bottom flaps.
 const diagonalFold=phase(.57,.74);
 document.querySelectorAll('[data-diagonal]').forEach(el=>{
  el.style.transform=`translateZ(${-0.9*diagonalFold}px) rotate3d(-0.708,0.706,0,${180*diagonalFold}deg)`;
 });
 bend('dust-left-bottom','X',-90,.62,.73);bend('dust-right-bottom','X',-90,.62,.73);
 bend('bottom-back','X',-90,.69,.82);bend('bottom-front','X',-90,.74,.87);
 bend('lid','X',90,.76,.94);bend('lid-tuck','X',90,.87,.98);
 // Separate physical paper layers to avoid coplanar flickering at the closures.
 const seating=phase(.6,1);
 panelEls['dust-left-top'].style.top=`${-55.8+1.2*seating}px`;
 panelEls['dust-right-top'].style.top=`${-55.8+1.2*seating}px`;
 panelEls['dust-left-bottom'].style.top=`${280-1.4*seating}px`;
 panelEls['dust-right-bottom'].style.top=`${280-1.4*seating}px`;
 panelEls['bottom-back'].style.top=`${280-.65*seating}px`;
 panelEls.glue.style.transform+=` translateZ(${-0.8*seating}px)`;
 panelEls['lid-tuck'].style.transform+=` translateZ(${-0.8*seating}px)`;
 stage.style.setProperty('--clean-mix',phase(.04,.65));
 stage.style.setProperty('--base-opacity',phase(.77,.9));
 // Dust flaps and the tuck sit inside the closed package, not on the exterior.
 const innerVisibility=1-phase(.92,.99);
 for(const id of ['dust-left-top','dust-right-top','dust-left-bottom','dust-right-bottom','glue','lid-tuck']){
  panelEls[id].querySelector('.paper').style.opacity=innerVisibility;
  panelEls[id].querySelector('.paper-inside').style.opacity=innerVisibility;
 }
 const camera=phase(0,1);const fit=Math.min((stage.clientWidth-50)/730,(stage.clientHeight-75)/530);const scale=fit*(1+camera*.38);
 rig.style.transform=`translateX(${135*(1-camera)*fit}px) scale(${scale})`;
 turntable.style.transform=`rotateX(${rotationX*camera}deg) rotateY(${rotationY*camera}deg)`;
 document.querySelector('.package-shadow').style.opacity=String(.15*camera);
 const full=progress>=.999,flat=progress<=.001;
 stage.dataset.state=flat?'flat':full?'folded':'partial';
 document.querySelector('#view-state').textContent=flat?'01 / 평면 전개도':full?'03 / 입체 패키지':'02 / 접힘 과정';
 document.querySelector('#view-hint').textContent=full?'드래그 · 방향키로 회전':'각 면이 연결된 채 접히는 모습을 확인하세요';
 const phaseText=flat?'평면 전개도':progress<.61?'옆면과 뒷면 접기':progress<.76?'보조 날개 접기':progress<.9?'바닥과 덮개 접기':full?'완성 · 드래그로 회전':'덮개 마무리';
 document.querySelector('#phase-text').textContent=phaseText;document.querySelector('#progress-text').textContent=`${Math.round(progress*100)}%`;
 slider.value=Math.round(progress*100);slider.setAttribute('aria-valuetext',`${phaseText}, ${Math.round(progress*100)}퍼센트`);
 toggle.textContent=full?'전개도로 펼치기':flat?'접어서 3D로 보기':'이어서 접기';
 document.querySelectorAll('[data-view]').forEach(b=>b.disabled=!full);
}
function stop(){if(animation)cancelAnimationFrame(animation);animation=0;toggle.disabled=false;stage.removeAttribute('aria-busy');}
function animateTo(target){stop();dragging=false;const start=progress;if(Math.abs(target-start)<.0001){progress=target;render();return;}const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;if(reduced){progress=target;render();return;}
 const duration=2000*Math.abs(target-start);const startTime=performance.now();toggle.disabled=true;stage.setAttribute('aria-busy','true');
 function tick(now){const t=clamp((now-startTime)/duration);progress=start+(target-start)*t;render();if(t<1)animation=requestAnimationFrame(tick);else{stop();render();}}
 animation=requestAnimationFrame(tick);
}
toggle.addEventListener('click',()=>{rotationX=-12;rotationY=-28;animateTo(progress>=.999?0:1)});
document.querySelector('#flat-reset').addEventListener('click',()=>{rotationX=-12;rotationY=-28;animateTo(0)});
slider.addEventListener('input',()=>{stop();progress=Number(slider.value)/100;render()});
document.querySelectorAll('[data-view]').forEach(b=>b.addEventListener('click',()=>{[rotationX,rotationY]=({front:[0,0],back:[0,180],side:[0,-90],reset:[-12,-28]})[b.dataset.view];render()}));
stage.addEventListener('pointerdown',e=>{if(progress<.999||animation)return;dragging=true;lastX=e.clientX;lastY=e.clientY;stage.setPointerCapture(e.pointerId);stage.classList.add('dragging')});
stage.addEventListener('pointermove',e=>{if(!dragging)return;rotationY+=(e.clientX-lastX)*.5;rotationX=Math.max(-75,Math.min(75,rotationX-(e.clientY-lastY)*.35));lastX=e.clientX;lastY=e.clientY;render()});
function endDrag(){dragging=false;stage.classList.remove('dragging')}
stage.addEventListener('pointerup',endDrag);stage.addEventListener('pointercancel',endDrag);
stage.addEventListener('keydown',e=>{if(progress<.999||!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key))return;e.preventDefault();if(e.key==='ArrowLeft')rotationY-=10;if(e.key==='ArrowRight')rotationY+=10;if(e.key==='ArrowUp')rotationX=Math.max(-75,rotationX-10);if(e.key==='ArrowDown')rotationX=Math.min(75,rotationX+10);render()});
new ResizeObserver(()=>render()).observe(stage);render();

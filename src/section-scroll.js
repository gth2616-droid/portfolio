import {getSectionPanels} from './section-panels.js';
let mounted;
const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

export function scrollToSection(element, {instant = true} = {}) {
  if (mounted) return mounted.navigate(element, instant);
  const offset = document.querySelector('.header')?.offsetHeight || 72;
  window.scrollTo({top: Math.max(0, element.getBoundingClientRect().top + scrollY - offset), behavior: 'instant'});
}

export function mountSectionScroll() {
  const media = matchMedia('(min-width:1024px) and (min-height:700px) and (pointer:fine)');
  const motion = matchMedia('(prefers-reduced-motion:reduce)');
  const panels = getSectionPanels();
  const root = document.documentElement;
  let frame = 0, moving = false, destination = null;
  let lastWheel = -Infinity, used = false, contentGesture = false, sum = 0;
  const headerHeight = () => document.querySelector('.header').offsetHeight;
  const maxScroll = () => Math.max(0, root.scrollHeight - innerHeight);
  const topOf = panel => clamp(panel.element.getBoundingClientRect().top + scrollY - headerHeight(), 0, maxScroll());
  function stop() {
    cancelAnimationFrame(frame);
    frame = 0; moving = false; destination = null;
    delete root.dataset.sectionMoving;
  }
  function currentIndex() {
    let index = 0;
    const line = scrollY + headerHeight() + 6;
    panels.forEach((panel,i) => {
      if (panel.element.getBoundingClientRect().top + scrollY <= line) index = i;
    });
    return index;
  }
  function navigate(element, instant = false, updateHash = false) {
    stop();
    const panel = panels.find(item => item.element === element || item.anchor === element.id || item.id === element.id);
    const target = panel?.element || element;
    const end = clamp(target.getBoundingClientRect().top + scrollY - headerHeight(), 0, maxScroll());
    if (updateHash && panel && location.hash !== `#${panel.anchor}`) history.replaceState(null, '', `#${panel.anchor}`);
    if (instant || motion.matches || !media.matches || Math.abs(scrollY-end)<1) {
      window.scrollTo({top:end,behavior:'instant'});
      return;
    }
    const start = scrollY, started = performance.now(), duration = 660;
    moving = true; destination = target; root.dataset.sectionMoving = 'true';
    function tick(now) {
      const time = Math.min(1, (now-started)/duration);
      const ease = time < .5 ? 4*time*time*time : 1-Math.pow(-2*time+2,3)/2;
      window.scrollTo({top:start+(end-start)*ease,behavior:'instant'});
      if (time<1) frame=requestAnimationFrame(tick);
      else stop();
    }
    frame=requestAnimationFrame(tick);
  }
  mounted = {navigate};
  function isWidget(event) {
    return event.composedPath().some(node => {
      if (!(node instanceof HTMLElement) || node===document.body || node===root) return false;
      if (node.matches('dialog,.stage,input,select,textarea,[contenteditable="true"]')) return true;
      const style=getComputedStyle(node);
      return /(auto|scroll)/.test(style.overflowY) && node.scrollHeight>node.clientHeight+2;
    });
  }
  function step(direction) {
    const index = currentIndex();
    const next = panels[clamp(index+direction,0,panels.length-1)];
    navigate(next.element,false,true);
  }
  addEventListener('wheel', event => {
    if (!media.matches || event.defaultPrevented || event.ctrlKey || event.metaKey || Math.abs(event.deltaX)>Math.abs(event.deltaY) || isWidget(event) || document.querySelector('dialog[open]') || !document.querySelector('.chapter-curtain').hidden) return;
    const now = performance.now();
    if (now-lastWheel>240) {used=false;contentGesture=false;sum=0;}
    lastWheel=now;
    event.preventDefault();
    if (moving || used) {used=true;return;}
    const delta=event.deltaY*(event.deltaMode===1?16:event.deltaMode===2?innerHeight:1);
    if (!delta) return;
    const direction=Math.sign(delta);
    const panel=panels[currentIndex()];
    const start=topOf(panel);
    const end=clamp(panel.element.getBoundingClientRect().bottom+scrollY-innerHeight,0,maxScroll());
    // Expanded material remains readable. A new gesture at its edge advances a chapter.
    const expanded = panel.element.querySelector('details[open],#concept-gallery-toggle[aria-expanded="true"]') || [...panel.element.querySelectorAll('.package-viewer-mount')].some(host => host.shadowRoot?.querySelector('details[open]'));
    if (expanded && end-start>48 && ((direction>0 && scrollY<end-2) || (direction<0 && scrollY>start+2))) {
      contentGesture=true;
      window.scrollTo({top:clamp(scrollY+delta,start,end),behavior:'instant'});
      return;
    }
    if (contentGesture) return;
    sum += delta;
    if (Math.abs(sum)<24) return;
    used=true;
    step(Math.sign(sum));
  }, {passive:false});
  addEventListener('keydown', event => {
    if (!media.matches || event.defaultPrevented || event.ctrlKey || event.metaKey || event.altKey || isWidget(event) || event.target.closest?.('a,button,summary') || document.querySelector('dialog[open]') || !document.querySelector('.chapter-curtain').hidden) return;
    const key=event.key;
    if (!['ArrowDown','ArrowUp','PageDown','PageUp',' ','Home','End'].includes(key)) return;
    event.preventDefault();
    if (moving) return;
    if (key==='Home' || key==='End') navigate(panels[key==='Home'?0:panels.length-1].element,false,true);
    else step(key==='ArrowUp'||key==='PageUp'||(key===' '&&event.shiftKey)?-1:1);
  });
  function updateMedia() {
    if (destination) {const target=destination;stop();navigate(target,true);}
    root.toggleAttribute('data-section-scroll',media.matches);
    used=false;contentGesture=false;sum=0;lastWheel=-Infinity;
  }
  media.addEventListener('change',updateMedia);
  motion.addEventListener('change',updateMedia);
  addEventListener('resize', () => {if(moving){const target=destination;stop();navigate(target,true);}}, {passive:true});
  updateMedia();
}

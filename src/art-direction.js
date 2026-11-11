import {getSectionPanels} from './section-panels.js';
// Shared section order drives the chapter rail and current-location labels.
export function mountArtDirection() {
  const header = document.querySelector('.header');
  const links = [...header.querySelectorAll('nav a')];
  const route = new Map([
    ['package-index','#single'],['commerce-screen','#digital'],['footer','#about'],['overview', '#overview'], ['badges', '#badges'], ['badge-collection', '#badges'], ['social-screen', '#digital'], ['poster-screen', '#digital'],
    ...['single', 'full', 'limited', 'daiso', 'display', 'pouch'].map(id => [id, '#single']),
    ['experience', '#experience'], ['digital', '#digital'], ['about', '#about']
  ]);
  const panels = getSectionPanels();
  const sections = panels.map(panel => panel.element);
  const rail = document.createElement('nav');
  rail.className = 'screen-rail';
  rail.setAttribute('aria-label', '화면별 바로가기');
  panels.forEach((panel,index) => {
    const link = document.createElement('a');
    link.href = `#${panel.anchor}`;
    link.dataset.panel = panel.id;
    link.setAttribute('aria-label', panel.label);
    const label = document.createElement('span');
    label.textContent = `${String(index+1).padStart(2,'0')} / ${panel.label}`;
    link.append(label);
    rail.append(link);
  });
  document.body.append(rail);
  const stops = [...rail.querySelectorAll('a')];
  let queued = false;
  let previous;
  function updatePosition() {
    const available = document.documentElement.scrollHeight - innerHeight;
    const progress = available > 0 ? Math.min(1, Math.max(0, scrollY / available)) : 0;
    const readingLine = header.offsetHeight + Math.min(180, innerHeight * .2);
    let current;
    let active = sections[0];
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= readingLine) {current = route.get(section.id);active = section;}
      else break;
    }
    if (progress >= .999) {current = '#about';active = sections.at(-1);}
    stops.forEach(link => {
      if (link.dataset.panel === active.id) link.setAttribute('aria-current','location');
      else link.removeAttribute('aria-current');
    });
    header.style.setProperty('--reading-progress', String(progress));
    if (current !== previous) {
      links.forEach(link => {
        if (link.getAttribute('href') === current) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
      previous = current;
    }
    queued = false;
  }
  function scheduleUpdate() {
    if (!queued) { queued = true; requestAnimationFrame(updatePosition); }
  }
  addEventListener('scroll', scheduleUpdate, {passive: true});
  addEventListener('resize', scheduleUpdate, {passive: true});
  const resize = new ResizeObserver(scheduleUpdate);
  resize.observe(document.querySelector('main'));
  updatePosition();
}

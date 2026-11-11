// Native scrolling remains intact; the header only reflects the reader's position.
export function mountArtDirection() {
  const header = document.querySelector('.header');
  const links = [...header.querySelectorAll('nav a')];
  const route = new Map([
    ['overview', '#overview'], ['badges', '#badges'],
    ...['single', 'full', 'limited', 'daiso', 'display', 'pouch'].map(id => [id, '#single']),
    ['experience', '#experience'], ['digital', '#digital'], ['about', '#about']
  ]);
  const sections = [...document.querySelectorAll('main > section[id]')];
  let queued = false;
  let previous;
  function updatePosition() {
    const available = document.documentElement.scrollHeight - innerHeight;
    const progress = available > 0 ? Math.min(1, Math.max(0, scrollY / available)) : 0;
    const readingLine = header.offsetHeight + Math.min(180, innerHeight * .2);
    let current;
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= readingLine) current = route.get(section.id);
      else break;
    }
    if (progress >= .999) current = '#about';
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

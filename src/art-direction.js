// Native scrolling remains intact; the header only reflects the reader's position.
export function mountArtDirection() {
  const header = document.querySelector('.header');
  const links = [...header.querySelectorAll('nav a')];
  const route = new Map([
    ['overview', '#overview'], ['badges', '#badges'], ['badge-collection', '#badges'], ['social-screen', '#digital'], ['poster-screen', '#digital'],
    ...['single', 'full', 'limited', 'daiso', 'display', 'pouch'].map(id => [id, '#single']),
    ['experience', '#experience'], ['digital', '#digital'], ['about', '#about']
  ]);
  const sections = [...document.querySelectorAll('main > section[id], #social-screen, #poster-screen')];
  const rail = document.createElement('nav');
  rail.className = 'screen-rail';
  rail.setAttribute('aria-label', '화면별 바로가기');
  const names = {cover:'표지',overview:'프로젝트',badges:'대표 배지','badge-collection':'배지 컬렉션',single:'싱글팩',full:'풀박스',limited:'리미티드',daiso:'다이소',display:'디스플레이 박스',pouch:'파우치',experience:'홍보·컨셉',digital:'판매 화면','social-screen':'인스타그램','poster-screen':'포스터',about:'소개'};
  sections.forEach((section,index) => {
    const link = document.createElement('a');
    link.href = `#${section.id}`;
    link.setAttribute('aria-label', names[section.id]);
    const label = document.createElement('span');
    label.textContent = `${String(index+1).padStart(2,'0')} / ${names[section.id]}`;
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
      if (link.hash === `#${active.id}`) link.setAttribute('aria-current','location');
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

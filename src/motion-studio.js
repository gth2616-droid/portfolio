import {scrollToSection} from './section-scroll.js';
const titles = {
  'package-index':['03','Package studies'],footer:['11','Yubin Jeon'],cover: ['01', 'Selected work'], overview: ['01', 'The project'], badges: ['02', 'Badge collection'],
  'badge-collection': ['02', 'The collection'], 'social-screen': ['10', 'Instagram'], 'poster-screen': ['10', 'Poster & promotion'], single: ['03', 'Single pack'], full: ['04', 'Full box'], limited: ['05', 'Limited edition'],
  daiso: ['06', 'Retail edition'], display: ['07', 'Display box'], pouch: ['08', 'Badge pouch'],
  experience: ['09', 'Visual stories'], digital: ['10', 'Digital experience'], about: ['11', 'Behind the work']
};

export function mountStudioMotion() {
  const preference = matchMedia('(prefers-reduced-motion: reduce)');
  const animations = new Set();
  const play = (element, frames, options = {}) => {
    if (!element || preference.matches) return;
    const animation = element.animate(frames, {duration: 650, easing: 'cubic-bezier(.22,1,.36,1)', ...options});
    animations.add(animation);
    animation.finished.then(() => animations.delete(animation), () => animations.delete(animation));
    return animation;
  };
  const rise = element => play(element, [{opacity: .12, transform: 'translateY(34px)'}, {opacity: 1, transform: 'translateY(0)'}]);
  const observed = new WeakSet();
  const reveal = new IntersectionObserver(entries => {
    for (const {target, isIntersecting} of entries) {
      if (!isIntersecting || observed.has(target)) continue;
      observed.add(target);
      reveal.unobserve(target);
      if (target.matches('.section-heading')) {
        target.querySelectorAll('.eyebrow,.english-section-title,.korean-section-title,.section-description').forEach((child, index) => {
          play(child, [{opacity: .1, transform: 'translateY(30px)'}, {opacity: 1, transform: 'translateY(0)'}], {delay: index * 75, duration: 750});
        });
      } else rise(target);
    }
  }, {threshold: .08, rootMargin: '0px 0px -35px 0px'});
  document.querySelectorAll('.section-heading,.product-visual,.product-copy,.overview-intro,.role-list article,.about-intro,.about-block,.digital-copy,.concept-gallery-item').forEach(element => reveal.observe(element));
  document.querySelectorAll('.hero-line>span:first-child').forEach((line,index) => {
    play(line, [{transform: 'translateY(115%) rotate(3deg)'}, {transform: 'translateY(0) rotate(0deg)'}], {duration: 950, delay: index * 110});
  });
  play(document.querySelector('.cover-visual'), [{opacity: .2, transform: 'translateY(35px) rotate(2deg)'}, {opacity: 1, transform: 'translateY(0) rotate(0deg)'}], {duration: 1000, delay: 180});

  // A short curtain connects anchor jumps; the section controller owns wheel navigation.
  const curtain = document.createElement('div');
  curtain.className = 'chapter-curtain';
  curtain.setAttribute('aria-hidden', 'true');
  curtain.hidden = true;
  curtain.innerHTML = '<div class="curtain-copy"><span></span><p></p><i>↗</i></div>';
  document.body.append(curtain);
  let transition = null;
  function navigate(hash, target) {
    if (location.hash !== hash) history.pushState(null, '', hash);
    scrollToSection(target, {instant:true});
  }
  document.addEventListener('click', async event => {
    const link = event.target.closest('a[href^="#"]');
    if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || preference.matches || link.classList.contains('skip')) return;
    const hash = link.getAttribute('href');
    const target = document.getElementById(hash.slice(1));
    if (!target || !titles[target.id] || Math.abs(target.getBoundingClientRect().top - 90) < innerHeight * .65) return;
    event.preventDefault();
    if (transition) return;
    const [number,title] = titles[target.id];
    curtain.querySelector('span').textContent = `CHAPTER / ${number}`;
    curtain.querySelector('p').textContent = title;
    curtain.hidden = false;
    const active = {hash,target};
    transition = active;
    try {
      await play(curtain, [{transform:'translateY(100%)'},{transform:'translateY(0)'}], {duration:320, easing:'cubic-bezier(.76,0,.24,1)', fill:'forwards'})?.finished;
      navigate(hash,target);
      play(curtain.querySelector('.curtain-copy'), [{opacity:.25,transform:'translateY(12px)'},{opacity:1,transform:'translateY(0)'}], {duration:260});
      await play(curtain, [{transform:'translateY(0)'},{transform:'translateY(-100%)'}], {duration:400, delay:100, easing:'cubic-bezier(.76,0,.24,1)', fill:'forwards'})?.finished;
    } catch {
      // Preference changes or cancellation must still complete the requested navigation.
      if (transition === active) navigate(hash,target);
    } finally {
      curtain.hidden = true;
      curtain.getAnimations().forEach(animation => animation.cancel());
      transition = null;
    }
  });
  document.addEventListener('click', event => {
    const button = event.target.closest('[data-design],[data-badge-type],[data-social-group],#slide-next,#slide-prev');
    if (!button || preference.matches) return;
    requestAnimationFrame(() => {
      const target = button.matches('[data-design]') ? button.closest('.package-section').querySelector('.product-visual') : button.matches('[data-badge-type]') ? document.querySelector('#badge-catalog') : document.querySelector('#social-image');
      play(target, [{opacity:.35,transform:'translateY(10px)'},{opacity:1,transform:'translateY(0)'}], {duration:420});
    });
  });
  for (const dialog of document.querySelectorAll('dialog')) {
    new MutationObserver(() => {
      if (dialog.open) play(dialog, [{opacity:0,transform:'translateY(22px) scale(.985)'},{opacity:1,transform:'translateY(0) scale(1)'}], {duration:350});
    }).observe(dialog, {attributes:true,attributeFilter:['open']});
  }
  preference.addEventListener('change', () => {
    if (preference.matches) {
      animations.forEach(animation => animation.cancel());
      curtain.hidden = true;
    }
  });
}

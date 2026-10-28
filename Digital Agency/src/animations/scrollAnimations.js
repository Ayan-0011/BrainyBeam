import { gsap, ScrollTrigger } from './gsapConfig.js';

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const scrub = (trigger, start = 'top bottom', end = 'bottom top') => ({ trigger, start, end, scrub: true });

// Runs inside a gsap.context (PageTransition.jsx), so everything created here is reverted on route change.
// Each page type gets its own pattern instead of one effect everywhere.
export function animatePageContent() {
  if (reduced()) return; // content simply stays visible

  // ---------- page headings ----------
  // Work / Services / Studio / Contact / Legal: the two heading lines rise out of a mask
  const lines = gsap.utils.toArray('.page-intro h1 .pi-line > *');
  if (lines.length) gsap.fromTo(lines, { yPercent: 108 }, { yPercent: 0, duration: 1.1, stagger: 0.12, ease: 'power4.out' });
  // Case study / 404: the whole heading lifts in
  gsap.fromTo('.case-hero h1, .not-found h1', { y: 70, opacity: 0, rotate: 1 }, { y: 0, opacity: 1, rotate: 0, duration: 1, ease: 'power4.out' });
  gsap.utils.toArray('.page-intro > p, .page-intro-top, .case-kicker, .case-hero > p').forEach(element => gsap.from(element, { y: 18, opacity: 0, duration: 0.7, delay: 0.15, ease: 'power3.out' }));

  // the glyph in the page intro turns in, then drifts slower than the page
  if (document.querySelector('.page-intro-glyph')) {
    gsap.fromTo('.page-intro-glyph', { scale: 0.82, opacity: 0, rotate: -18 }, { scale: 1, opacity: 0.7, rotate: 0, duration: 1.6, delay: 0.2, ease: 'power3.out' });
    gsap.to('.page-intro-glyph', { yPercent: -18, ease: 'none', scrollTrigger: scrub('.page-intro', 'top top') });
  }

  // ---------- Work (also used on Home): project cards arrive in rows, artwork unmasks upward ----------
  const cards = gsap.utils.toArray('.project-card');
  if (cards.length) {
    const visual = card => card.querySelector('.project-visual');
    gsap.set(cards, { autoAlpha: 0, y: 60 });
    gsap.set(cards.map(visual), { clipPath: 'inset(0% 0% 100% 0%)' });
    ScrollTrigger.batch(cards, {
      start: 'top 90%',
      onEnter: batch => {
        gsap.to(batch, { autoAlpha: 1, y: 0, duration: 1, stagger: 0.14, ease: 'power3.out', overwrite: true });
        gsap.to(batch.map(visual), { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.2, stagger: 0.14, ease: 'power4.out', overwrite: true });
      },
      onLeaveBack: batch => {
        gsap.to(batch, { autoAlpha: 0, y: 60, duration: 0.4, overwrite: true });
        gsap.set(batch.map(visual), { clipPath: 'inset(0% 0% 100% 0%)' });
      },
    });
  }

  // ---------- Studio: values rise one after another; the orbit turns with the scroll ----------
  const values = gsap.utils.toArray('.about-values article');
  if (values.length) {
    gsap.set(values, { autoAlpha: 0, y: 50 });
    ScrollTrigger.batch(values, {
      start: 'top 88%',
      onEnter: batch => gsap.to(batch, { autoAlpha: 1, y: 0, duration: 1, stagger: 0.18, ease: 'expo.out', overwrite: true }),
      onLeaveBack: batch => gsap.to(batch, { autoAlpha: 0, y: 50, duration: 0.4, overwrite: true }),
    });
  }
  if (document.querySelector('.about-orbit')) gsap.to('.about-orbit', { rotate: 120, ease: 'none', scrollTrigger: scrub('.about-statement') });

  // ---------- Services: rows slide in from the left ----------
  const rows = gsap.utils.toArray('.service-row');
  if (rows.length) {
    gsap.set(rows, { autoAlpha: 0, x: -36 });
    ScrollTrigger.batch(rows, {
      start: 'top 92%',
      onEnter: batch => gsap.to(batch, { autoAlpha: 1, x: 0, duration: 0.9, stagger: 0.08, ease: 'power3.out', overwrite: true }),
      onLeaveBack: batch => gsap.to(batch, { autoAlpha: 0, x: -36, duration: 0.4, overwrite: true }),
    });
  }

  // ---------- Case study: story columns + fact rows ----------
  gsap.utils.toArray('.case-story > div').forEach((column, index) => {
    gsap.from(column, { y: 40, opacity: 0, duration: 0.9, delay: index * 0.12, ease: 'power3.out', scrollTrigger: { trigger: column, start: 'top 85%', toggleActions: 'play none none reverse' } });
  });
  if (document.querySelector('.case-facts')) {
    gsap.from('.case-facts > *', { y: 18, opacity: 0, duration: 0.6, stagger: 0.07, ease: 'power3.out', scrollTrigger: { trigger: '.case-facts', start: 'top 88%' } });
  }

  // ---------- Legal: sections fade up; the side list follows where you are ----------
  gsap.utils.toArray('.legal-copy article').forEach((article, index) => {
    gsap.from(article, { y: 24, opacity: 0, duration: 0.7, ease: 'power3.out', scrollTrigger: { trigger: article, start: 'top 90%' } });
    const link = document.querySelectorAll('.legal-layout aside a')[index];
    if (link) ScrollTrigger.create({ trigger: article, start: 'top 45%', end: 'bottom 45%', onToggle: self => link.classList.toggle('is-active', self.isActive) });
  });

  // ---------- Contact form + footer ----------
  if (document.querySelector('.contact-form')) {
    gsap.from('.contact-form > *', { y: 28, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.contact-form', start: 'top 85%' } });
  }
  if (document.querySelector('.contact-graphic-ring')) gsap.to('.contact-graphic-ring', { rotate: 90, ease: 'none', scrollTrigger: scrub('.contact-section') });
  gsap.from('.footer-main > *', { y: 30, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.footer', start: 'top 92%' } });

  // ---------- big blocks: a calm scale-in (kept from the original) ----------
  gsap.utils.toArray('.case-art-wrap, .about-statement h2, .services-note').forEach(element => gsap.from(element, { scale: 0.96, opacity: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: element, start: 'top 82%' } }));
}

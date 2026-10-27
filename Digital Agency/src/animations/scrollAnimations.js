import { gsap } from './gsapConfig.js';

export function animatePageContent() {
  gsap.fromTo('.page-intro h1, .case-hero h1, .not-found h1', { y: 70, opacity: 0, rotate: 1 }, { y: 0, opacity: 1, rotate: 0, duration: 1, ease: 'power4.out' });
  gsap.utils.toArray('.page-intro > p, .page-intro-top, .case-kicker, .case-hero > p').forEach(element => gsap.from(element, { y: 18, opacity: 0, duration: 0.7, delay: 0.15, ease: 'power3.out' }));
  gsap.utils.toArray('.project-card, .about-values article, .legal-copy article').forEach((element, index) => gsap.from(element, { y: 30, opacity: 0, duration: 0.7, delay: (index % 3) * 0.08, ease: 'power3.out', scrollTrigger: { trigger: element, start: 'top 88%' } }));
  gsap.utils.toArray('.case-art-wrap, .about-statement h2, .services-note').forEach(element => gsap.from(element, { scale: 0.96, opacity: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: element, start: 'top 82%' } }));
}

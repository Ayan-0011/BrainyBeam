import Lenis from '@studio-freight/lenis';
import { gsap, ScrollTrigger } from './gsapConfig.js';

let instance = null;

// other components (menu, brand link, route changes) can pause / drive the same Lenis instance
export const getLenis = () => instance;

export function startSmoothScroll() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {};

  const lenis = new Lenis({ duration: 1.15, smoothWheel: true, wheelMultiplier: 0.9, touchMultiplier: 1.25 });
  instance = lenis;
  lenis.on('scroll', ScrollTrigger.update);
  const tick = time => lenis.raf(time * 1000);
  gsap.ticker.add(tick);
  gsap.ticker.lagSmoothing(0);

  return () => {
    gsap.ticker.remove(tick);
    lenis.destroy();
    if (instance === lenis) instance = null;
  };
}

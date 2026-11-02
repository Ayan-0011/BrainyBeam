import { useLayoutEffect } from 'react';
import { gsap, ScrollTrigger } from './gsapConfig.js';

const MOTION = '(prefers-reduced-motion: no-preference)';
const WIDE = '(min-width: 861px) and (prefers-reduced-motion: no-preference)';

// a ScrollTrigger config that fires once (same pattern the homepage sections use)
export const once = (trigger, start = 'top 85%') => ({ trigger, start, once: true });

/**
 * Builds the GSAP animations for one section or page block.
 *
 *  - Runs only when the visitor has NOT asked for reduced motion. Otherwise nothing is hidden or moved,
 *    so the content simply stays visible.
 *  - Everything is created inside a gsap.context scoped to `scope`, so it is reverted on unmount,
 *    on route change and whenever `deps` change (no duplicate ScrollTriggers).
 *  - build({ wide }) receives wide = true on desktop-sized screens: use it for parallax / scrubbed
 *    effects and keep mobile lightweight.
 *  - build() may return a cleanup function (e.g. to restore text a counter has overwritten).
 */
export function useReveal(scope, build, deps = []) {
  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add({ motion: MOTION, wide: WIDE }, context => {
      let cleanup;
      const ctx = gsap.context(() => {
        cleanup = build({ wide: Boolean(context.conditions.wide) });
      }, scope);
      return () => {
        ctx.revert();
        if (typeof cleanup === 'function') cleanup();
      };
    });

    // web fonts change line breaks and heights, so measure again once they have arrived
    let alive = true;
    document.fonts?.ready.then(() => { if (alive) ScrollTrigger.refresh(); });

    return () => {
      alive = false;
      mm.revert();
    };
    // `build` is intentionally not a dependency: callers pass an inline function and list real deps instead
  }, deps);
}

// The standard section-heading entrance (see SectionHead): masked lines rise, eyebrow + intro fade up.
// Call inside a build() function.
export function revealHeads() {
  gsap.utils.toArray('.pg-head').forEach(head => {
    gsap.from(head.querySelectorAll('.pg-line > span'), {
      yPercent: 110,
      duration: 1.1,
      stagger: 0.12,
      ease: 'power4.out',
      scrollTrigger: once(head),
    });
    gsap.from(head.querySelectorAll('.pg-eyebrow, .pg-intro'), {
      autoAlpha: 0,
      y: 24,
      duration: 0.9,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: once(head),
    });
  });
}

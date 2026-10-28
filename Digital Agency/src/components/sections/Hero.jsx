import { useLayoutEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../../animations/gsapConfig.js';
import { dockState, fitWord, viewWidth, heroPad } from '../../animations/brandGeometry.js';
import BrandWord from '../ui/BrandWord.jsx';

// crosshair marks, % of hero
const PLUS = [[3, 36], [34, 36], [66, 36], [97, 36], [3, 58], [97, 58], [3, 80], [34, 80], [97, 80]];

export default function Hero() {
  const root = useRef(null);
  const stage = useRef(null);
  const mark = useRef(null);
  const word = useRef(null);

  // hero image must start at the very top: remove <main> top padding while the hero is on screen
  useLayoutEffect(() => {
    document.body.classList.add('has-hero');
    return () => document.body.classList.remove('has-hero');
  }, []);

  // size the (invisible) placeholder so the hero layout still reserves the space the brand name uses
  useLayoutEffect(() => {
    const fit = () => fitWord(word.current, stage.current.clientWidth - heroPad() * 2);
    fit();
    document.fonts?.ready.then(fit);
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, []);

  useLayoutEffect(() => {
    const logo = document.querySelector('.nv-logo'); // the single brand element (BrandMark)
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let cleanup = () => {};

    const ctx = gsap.context(() => {
      // ---------- where the brand name starts (centre of the hero) and where it docks ----------
      const start = () => {
        const rect = mark.current.getBoundingClientRect();
        return { x: viewWidth() / 2, y: rect.top + window.scrollY + rect.height / 2 };
      };

      if (!reduce && logo) {
        // the placeholder only reserves layout; the real, clickable brand name is the navbar element
        gsap.set(mark.current, { visibility: 'hidden' });

        const chars = logo.querySelectorAll('.hx-char > span');
        gsap.timeline({ defaults: { ease: 'power4.out' } })
          .from('.hx-bg', { scale: 1.18, duration: 2, ease: 'power3.out' }, 0)
          .from(chars, { yPercent: 115, duration: 1.2, stagger: 0.06 }, 0.2)
          .from('.hx-kicker, .hx-tagline, .hx-sub', { autoAlpha: 0, y: 24, duration: 0.9, stagger: 0.12 }, 0.7)
          .from('.hx-plus', { autoAlpha: 0, scale: 0.4, duration: 0.6, stagger: 0.04 }, 1);

        // ---------- scroll: the hero leaves, the brand name travels up into the navbar ----------
        // No pinning: the hero scrolls away naturally, so its gradient never lingers behind later sections.
        const setDocked = docked => logo.classList.toggle('is-docked', docked);
        gsap.timeline({
          scrollTrigger: {
            trigger: root.current,
            start: 'top top',
            end: () => `+=${Math.round(window.innerHeight * 0.85)}`,
            scrub: 0.8,
            invalidateOnRefresh: true,
            refreshPriority: 10, // measure before the triggers further down the page
            onUpdate: self => setDocked(self.progress > 0.985),
            onRefresh: self => setDocked(self.progress > 0.985),
          },
        })
          .fromTo(logo,
            { x: () => start().x, y: () => start().y, scale: 1 },
            { x: () => dockState(logo).x, y: () => dockState(logo).y, scale: () => dockState(logo).scale, ease: 'power2.inOut', duration: 1, force3D: false },
            0)
          .to('.hx-kicker-box', { autoAlpha: 0, y: -40, duration: 0.3, ease: 'none' }, 0)
          .to('.hx-fade', { autoAlpha: 0, duration: 0.35, ease: 'none' }, 0);

        // the hero background drifts slower than the page, then the image section slides up over the space
        gsap.to('.hx-bg', {
          yPercent: 12,
          ease: 'none',
          scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
        });
      } else if (logo) {
        // reduced motion: big name stays in the hero, navbar name appears once the hero is gone
        document.body.classList.add('hx-reduced');
        const dock = () => gsap.set(logo, { ...dockState(logo), xPercent: -50, yPercent: -50 });
        dock();
        window.addEventListener('resize', dock);
        cleanup = () => window.removeEventListener('resize', dock);
        ScrollTrigger.create({
          trigger: root.current,
          start: 'bottom top+=80',
          onToggle: self => document.body.classList.toggle('hx-passed', self.isActive === false && self.direction === 1),
        });
      }

      document.fonts?.ready.then(() => ScrollTrigger.refresh());
    }, root);

    return () => {
      cleanup();
      ctx.revert();
      document.body.classList.remove('hx-reduced', 'hx-passed');
      logo?.classList.remove('is-docked');
    };
  }, []);

  return (
    <section className="hx" id="top" ref={root}>
      <div className="hx-bg" />

      <div className="hx-fade">
        <h1 className="hx-tagline">Make it mean more.</h1>
        <p className="hx-sub">Brands, digital experiences and technology people want to spend time with</p>
        {PLUS.map(([left, top]) => <span key={`${left}-${top}`} className="hx-plus" style={{ left: `${left}%`, top: `${top}%` }} aria-hidden="true" />)}
      </div>

      <div className="hx-stage" ref={stage}>
        <div className="hx-kicker-box"><p className="hx-kicker">Creative Digital Agency</p></div>
        <div className="hx-wordmark" ref={mark} aria-hidden="true">
          <span ref={word} className="hx-ghost"><BrandWord /></span>
        </div>
      </div>
    </section>
  );
}

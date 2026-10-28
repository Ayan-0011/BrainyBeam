import { useLayoutEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { gsap, ScrollTrigger } from '../../animations/gsapConfig.js';
import { brand } from '../../config/brand.js';

// crosshair marks, % of hero
const PLUS = [[3, 36], [34, 36], [66, 36], [97, 36], [3, 58], [97, 58], [3, 80], [34, 80], [97, 80]];

export default function Hero() {
  const root = useRef(null);
  const stage = useRef(null);
  const mark = useRef(null);
  const word = useRef(null);
  const cursor = useRef(null);

  // hero image must start at the very top: remove <main> top padding while the hero is on screen
  useLayoutEffect(() => {
    document.body.classList.add('has-hero');
    return () => document.body.classList.remove('has-hero');
  }, []);

  // fit the giant company name to the screen width
  useLayoutEffect(() => {
    const fit = () => {
      const el = word.current;
      if (!el) return;
      const box = stage.current;
      const pad = parseFloat(getComputedStyle(box).paddingLeft) * 2;
      el.style.fontSize = '100px';
      el.style.fontSize = `${(100 * (box.clientWidth - pad) * 0.97) / el.offsetWidth}px`;
    };
    fit();
    document.fonts?.ready.then(fit);
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      // ---------- intro ----------
      if (!reduce) {
        gsap.timeline({ defaults: { ease: 'power4.out' } })
          .from('.hx-bg', { scale: 1.18, duration: 2, ease: 'power3.out' }, 0)
          .from('.hx-char > span', { yPercent: 115, duration: 1.2, stagger: 0.06 }, 0.2)
          .from('.hx-kicker, .hx-tagline, .hx-sub', { autoAlpha: 0, y: 24, duration: 0.9, stagger: 0.12 }, 0.7)
          .from('.hx-plus', { autoAlpha: 0, scale: 0.4, duration: 0.6, stagger: 0.04 }, 1);
      }

      // ---------- scroll: company name travels from the centre up to the navbar ----------
      // where the name sits now, and where the navbar logo sits (top centre)
      const travel = () => {
        const m = mark.current;
        const w = m.offsetWidth;
        const h = m.offsetHeight;
        const cx = stage.current.offsetLeft + m.offsetLeft + w / 2;
        const cy = stage.current.offsetTop + m.offsetTop + h / 2;
        const logo = document.querySelector('.nv-logo').getBoundingClientRect();
        return {
          x: logo.left + logo.width / 2 - cx,
          y: logo.top + logo.height / 2 - cy,
          s: logo.width / w,
        };
      };

      const dock = self => {
        const docked = self.progress >= 0.999;
        document.body.classList.toggle('hx-docked', docked);
        gsap.set(mark.current, { autoAlpha: docked ? 0 : 1 });
      };

      if (!reduce) {
        gsap.timeline({
          scrollTrigger: {
            trigger: root.current,
            start: 'top top',
            end: '+=120%',
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: dock,
            onLeave: dock,
            onEnterBack: dock,
            onRefresh: dock,
          },
        })
          .to('.hx-kicker-box', { autoAlpha: 0, y: -40, duration: 0.3, ease: 'none' }, 0)
          .to('.hx-fade', { autoAlpha: 0, duration: 0.35, ease: 'none' }, 0)
          .to(mark.current, {
            x: () => travel().x,
            y: () => travel().y,
            scale: () => travel().s,
            transformOrigin: '50% 50%',
            duration: 1,
            ease: 'power2.inOut',
          }, 0);
      } else {
        // reduced motion: no travel, just show the navbar logo after the hero
        ScrollTrigger.create({
          trigger: root.current,
          start: 'bottom top+=80',
          onToggle: self => document.body.classList.toggle('hx-docked', self.isActive === false && self.direction === 1),
        });
      }

      // ---------- orange cursor dot (follows the mouse across the whole page) ----------
      const dot = cursor.current;
      const x = gsap.quickTo(dot, 'x', { duration: 0.45, ease: 'power3' });
      const y = gsap.quickTo(dot, 'y', { duration: 0.45, ease: 'power3' });
      const move = event => { gsap.to(dot, { opacity: 1, duration: 0.3, overwrite: 'auto' }); x(event.clientX); y(event.clientY); };
      const leave = () => gsap.to(dot, { opacity: 0, duration: 0.3 });
      window.addEventListener('mousemove', move);
      document.documentElement.addEventListener('mouseleave', leave);

      document.fonts?.ready.then(() => ScrollTrigger.refresh());

      return () => { window.removeEventListener('mousemove', move); document.documentElement.removeEventListener('mouseleave', leave); };
    }, root);

    return () => { ctx.revert(); document.body.classList.remove('hx-docked'); };
  }, []);

  return <>
  <section className="hx" id="top" ref={root}>
    <div className="hx-bg" />

    <div className="hx-fade">
      <h1 className="hx-tagline">Make it mean more.</h1>
      <p className="hx-sub">Brands, digital experiences and technology people want to spend time with</p>
      {PLUS.map(([left, top]) => <span key={`${left}-${top}`} className="hx-plus" style={{ left: `${left}%`, top: `${top}%` }} aria-hidden="true" />)}
    </div>

    <div className="hx-stage" ref={stage}>
      <div className="hx-kicker-box"><p className="hx-kicker">Creative Digital Agency</p></div>
      <div className="hx-wordmark" ref={mark} aria-label={brand.name}>
        <div className="hx-word" ref={word} aria-hidden="true">
          {[...brand.heroWord].map((char, index) => <span className="hx-char" key={index}><span>{char}</span></span>)}
        </div>
      </div>
    </div>

  </section>
    {createPortal(<span className="hx-cursor" ref={cursor} aria-hidden="true" />, document.body)}
  </>;
}
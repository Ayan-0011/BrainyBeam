import { useLayoutEffect, useRef } from 'react';
import { gsap } from '../../animations/gsapConfig.js';
import { brand } from '../../config/brand.js';

// crosshair marks, % of hero
const PLUS = [[3, 36], [34, 36], [66, 36], [97, 36], [3, 58], [97, 58], [3, 80], [34, 80], [97, 80]];

export default function Hero() {
  const root = useRef(null);
  const word = useRef(null);
  const cursor = useRef(null);

  // fit the giant wordmark to the screen width
  useLayoutEffect(() => {
    const fit = () => {
      const el = word.current;
      if (!el) return;
      el.style.fontSize = '100px';
      el.style.fontSize = `${(100 * el.parentElement.clientWidth * 0.93) / el.offsetWidth}px`;
    };
    fit();
    document.fonts?.ready.then(fit);
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        gsap.timeline({ defaults: { ease: 'power4.out' } })
          .from('.hx-bg', { scale: 1.18, duration: 2, ease: 'power3.out' }, 0)
          .from('.hx-char > span', { yPercent: 115, duration: 1.2, stagger: 0.06 }, 0.2)
          .from('.hx-tagline, .hx-sub, .hx-descriptor', { autoAlpha: 0, y: 24, duration: 0.9, stagger: 0.12 }, 0.7)
          .from('.hx-plus', { autoAlpha: 0, scale: 0.4, duration: 0.6, stagger: 0.04 }, 1);
      }

      // orange cursor dot
      const x = gsap.quickTo(cursor.current, 'x', { duration: 0.45, ease: 'power3' });
      const y = gsap.quickTo(cursor.current, 'y', { duration: 0.45, ease: 'power3' });
      const move = event => { gsap.to(cursor.current, { opacity: 1, duration: 0.3, overwrite: 'auto' }); x(event.clientX); y(event.clientY); };
      const leave = () => gsap.to(cursor.current, { opacity: 0, duration: 0.3 });
      const el = root.current;
      el.addEventListener('mousemove', move);
      el.addEventListener('mouseleave', leave);
      return () => { el.removeEventListener('mousemove', move); el.removeEventListener('mouseleave', leave); };
    }, root);
    return () => ctx.revert();
  }, []);

  return <section className="hx" id="top" ref={root}>
    <div className="hx-bg" />

    <h1 className="hx-tagline">Make it mean more.</h1>
    <p className="hx-sub">Brands, digital experiences and technology people want to spend time with</p>
    <p className="hx-descriptor">Creative Digital Studio—</p>

    {PLUS.map(([left, top]) => <span key={`${left}-${top}`} className="hx-plus" style={{ left: `${left}%`, top: `${top}%` }} aria-hidden="true" />)}

    <div className="hx-wordmark" aria-hidden="true">
      <div className="hx-word" ref={word}>
        {[...brand.heroWord].map((char, index) => <span className="hx-char" key={index}><span>{char}</span></span>)}
      </div>
    </div>

    <span className="hx-cursor" ref={cursor} aria-hidden="true" />
  </section>;
}

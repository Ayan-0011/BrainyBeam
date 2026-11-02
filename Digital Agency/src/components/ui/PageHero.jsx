import { Fragment, useRef } from 'react';
import { gsap } from '../../animations/gsapConfig.js';
import { useReveal } from '../../animations/useReveal.js';

/**
 * Hero for the inner pages. Same visual language as the homepage sections (masked line reveal,
 * Instrument Serif accent, mono eyebrow) with a slowly turning orbit as the brand motif.
 * Pages pass their own composition through `children` (stats, image, index list ...).
 */
export default function PageHero({ eyebrow, meta, lines, intro, children, className = '' }) {
  const root = useRef(null);

  useReveal(root, ({ wide }) => {
    gsap.from('.pg-hero-title .pg-line > span', { yPercent: 112, duration: 1.2, stagger: 0.12, ease: 'power4.out', delay: 0.1 });
    gsap.from('.pg-hero-top > *, .pg-hero-intro, .pg-hero-extra', {
      autoAlpha: 0, y: 20, duration: 0.9, stagger: 0.1, ease: 'power3.out', delay: 0.35,
    });
    gsap.from('.pg-orbit', { scale: 0.82, autoAlpha: 0, duration: 1.6, ease: 'power3.out', delay: 0.2 });

    if (wide) {
      // the orbit turns with the scroll (desktop only)
      gsap.to('.pg-orbit-spin', {
        rotate: 100,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
      });
    }
  }, []);

  return (
    <section className={`pg-hero ${className}`.trim()} ref={root}>
      <div className="pg-hero-top">
        <span className="eyebrow">{eyebrow}</span>
        <span className="eyebrow">{meta}</span>
      </div>

      <h1 className="pg-hero-title">
        {lines.map((line, i) => (
          <Fragment key={i}>
            <span className="pg-line"><span>{line}</span></span>{' '}
          </Fragment>
        ))}
      </h1>

      <div className="pg-hero-foot">
        <p className="pg-hero-intro">{intro}</p>
        {children && <div className="pg-hero-extra">{children}</div>}
      </div>

      <div className="pg-orbit" aria-hidden="true">
        <div className="pg-orbit-spin"><i /><i /><i /></div>
      </div>
    </section>
  );
}

import { useLayoutEffect, useRef } from 'react';
import { gsap } from '../../animations/gsapConfig.js';

// The image that follows the hero. It opens up (clip-path), settles (scale) and drifts (parallax) as you scroll.
export default function ShowcaseSection() {
  const root = useRef(null);

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const ctx = gsap.context(() => {
      gsap.fromTo('.showcase-frame',
        { clipPath: 'inset(14% 7% 14% 7% round 28px)' },
        { clipPath: 'inset(0% 0% 0% 0% round 20px)', ease: 'none', scrollTrigger: { trigger: root.current, start: 'top 92%', end: 'top 22%', scrub: true } });
      gsap.fromTo('.showcase-img',
        { scale: 1.16, yPercent: -7 },
        { scale: 1, yPercent: 7, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'bottom top', scrub: true } });
      gsap.from('.showcase-caption span', {
        yPercent: 110, duration: 0.9, stagger: 0.12, ease: 'power4.out',
        scrollTrigger: { trigger: '.showcase-frame', start: 'top 55%', toggleActions: 'play none none reverse' },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section className="showcase" ref={root} aria-label="Studio showcase">
      <div className="showcase-frame">
        <img className="showcase-img" src="/images/showcase.jpg" alt="" width="2400" height="1500" loading="eager" decoding="async" />
        <p className="showcase-caption">
          <span>Independent thinking.</span>
          <span>Digital things with feeling.</span>
        </p>
      </div>
    </section>
  );
}

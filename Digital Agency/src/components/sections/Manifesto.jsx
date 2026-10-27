import { useEffect, useRef } from 'react';
import { gsap } from '../../animations/gsapConfig.js';

export default function Manifesto() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.manifesto-word', { yPercent: 110, rotate: 2, stagger: 0.13, duration: 1, ease: 'power4.out', scrollTrigger: { trigger: ref.current, start: 'top 70%' } });
      gsap.to('.manifesto-orb', { rotate: 360, ease: 'none', scrollTrigger: { trigger: ref.current, start: 'top bottom', end: 'bottom top', scrub: 1 } });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section className="manifesto-section" ref={ref}>
      <div className="manifesto-top"><span className="eyebrow">A POINT OF VIEW</span><span>02 — 04</span></div>
      <div className="manifesto-copy">
        <span className="manifesto-word">LESS</span>
        <span className="manifesto-word">SAME.</span>
        <span className="manifesto-word manifesto-outline">MORE <i>SOUL.</i></span>
      </div>
      <div className="manifesto-orb"><div /><span>MAKE<br />IT MATTER</span></div>
      <p className="manifesto-note">The internet has enough of the expected.<br />We’re here for the work with a point of view.</p>
    </section>
  );
}

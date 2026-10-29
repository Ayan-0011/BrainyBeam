import { useEffect, useRef } from 'react';
import { gsap } from '../../animations/gsapConfig.js';

const perspectives = [
  {
    num: '01',
    title: 'Distinct over Default',
    desc: 'The internet is drowning in identical templates and corporate monotony. We build work that stops the scroll through bold point-of-view.',
  },
  {
    num: '02',
    title: 'Code as Craft',
    desc: 'High design means nothing if the execution lags. We treat frontend engineering, accessibility, and micro-interactions with obsessive care.',
  },
  {
    num: '03',
    title: 'Substance over Noise',
    desc: 'Every element must earn its place. We strip away superficial gimmicks to let clear typography, rhythm, and purpose lead.',
  },
];

export default function Manifesto() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.manifesto-word', {
        yPercent: 110,
        rotate: 2,
        stagger: 0.13,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: { trigger: ref.current, start: 'top 70%' },
      });

      gsap.to('.manifesto-orb', {
        rotate: 360,
        ease: 'none',
        scrollTrigger: { trigger: ref.current, start: 'top bottom', end: 'bottom top', scrub: 1 },
      });

      gsap.from('.manifesto-insight', {
        autoAlpha: 0,
        y: 35,
        duration: 0.85,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.manifesto-insights-grid', start: 'top 85%' },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section className="manifesto-section" id="manifesto" ref={ref} aria-label="Studio manifesto and core perspectives">
      <div className="manifesto-top">
        <span className="eyebrow">( Studio Perspectives )</span>
        <span>A POINT OF VIEW · 2026</span>
      </div>

      <div className="manifesto-copy">
        <span className="manifesto-word">LESS</span>
        <span className="manifesto-word">SAME.</span>
        <span className="manifesto-word manifesto-outline">MORE <i>SOUL.</i></span>
      </div>

      <div className="manifesto-orb" aria-hidden="true">
        <div />
        <span>MAKE<br />IT MATTER</span>
      </div>

      <p className="manifesto-note">
        The internet has enough of the expected.<br />
        We’re here for the work with a genuine point of view.
      </p>

      <div className="manifesto-insights-grid">
        {perspectives.map((p, i) => (
          <article className="manifesto-insight" key={i}>
            <span className="manifesto-insight-num">{p.num}</span>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

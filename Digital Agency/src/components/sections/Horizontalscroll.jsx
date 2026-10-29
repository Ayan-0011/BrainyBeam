import { useLayoutEffect, useRef } from 'react';
import { gsap } from '../../animations/gsapConfig.js';

// Edit the cards here
const steps = [
  { n: '01', title: 'Listen first.', text: 'We start with your problem, not our playbook.' },
  { n: '02', title: 'Shape the idea.', text: 'Strategy and direction, in plain words.' },
  { n: '03', title: 'Design with intent.', text: 'Brand and interface that say something.' },
  { n: '04', title: 'Build it properly.', text: 'Fast, accessible and made to last.' },
  { n: '05', title: 'Launch together.', text: 'We ship it with you, not at you.' },
  { n: '06', title: 'Keep it growing.', text: 'Measure, improve, repeat.' },
];

export default function HorizontalScroll() {
  const root = useRef(null);
  const track = useRef(null);
  const bar = useRef(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {
        // how far the row has to travel to show the last card
        const distance = () => Math.max(0, track.current.scrollWidth - window.innerWidth);

        // vertical scroll -> horizontal movement (section is pinned)
        gsap.to(track.current, {
          x: () => -distance(),
          ease: 'none',
          scrollTrigger: {
            trigger: root.current,
            start: 'top top',
            end: () => `+=${distance()}`,
            pin: true,
            scrub: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: self => { if (bar.current) bar.current.style.transform = `scaleX(${self.progress})`; },
          },
        });

        // cards slide in when the section arrives
        gsap.from('.hs-card', {
          x: 250,
          autoAlpha: 0,
          duration: 0.9,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: { trigger: root.current, start: 'top 75%', toggleActions: 'play none none reverse' },
        });
      }, root);
      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <section className="hs" id="process" ref={root}>
      <div className="hs-head">
        <span className="eyebrow">( How we work )</span>
        <h2 className="hs-title">Six steps.<br /><em>One direction.</em></h2>
      </div>

      <div className="hs-viewport">
        <div className="hs-track" ref={track}>
          {steps.map(s => (
            <div className="hs-item" key={s.n}>
              <article className="hs-card">
                <span className="hs-count">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
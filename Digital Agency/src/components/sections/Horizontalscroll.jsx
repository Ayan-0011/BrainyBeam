import { useLayoutEffect, useRef } from 'react';
import { gsap } from '../../animations/gsapConfig.js';

const steps = [
  {
    n: '01',
    title: 'Listen first.',
    text: 'We start with your core problem and business reality, not an off-the-shelf playbook.',
    tag: 'DISCOVERY',
  },
  {
    n: '02',
    title: 'Shape the idea.',
    text: 'Strategy, positioning, and scope articulated in plain language with clear milestones.',
    tag: 'STRATEGY',
  },
  {
    n: '03',
    title: 'Design with intent.',
    text: 'Brand world and interface architecture that reflect your identity and feel distinctive.',
    tag: 'DESIGN',
  },
  {
    n: '04',
    title: 'Build it properly.',
    text: 'Engineered with clean code, modern web standards, and high-performance GSAP motion.',
    tag: 'DEVELOPMENT',
  },
  {
    n: '05',
    title: 'Launch together.',
    text: 'Rigorous cross-browser quality assurance, SEO checks, and smooth deployment.',
    tag: 'DEPLOYMENT',
  },
  {
    n: '06',
    title: 'Keep it growing.',
    text: 'Post-launch performance review, analytics tuning, and continuous enhancements.',
    tag: 'EVOLUTION',
  },
];

export default function HorizontalScroll() {
  const root = useRef(null);
  const track = useRef(null);
  const bar = useRef(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add('(min-width: 769px) and (prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {
        const distance = () => Math.max(0, track.current.scrollWidth - window.innerWidth + 120);

        gsap.to(track.current, {
          x: () => -distance(),
          ease: 'none',
          scrollTrigger: {
            trigger: root.current,
            start: 'top top',
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 0.6,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: self => {
              if (bar.current) bar.current.style.transform = `scaleX(${self.progress})`;
            },
          },
        });

        gsap.from('.hs-card', {
          y: 60,
          autoAlpha: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: { trigger: root.current, start: 'top 75%', once: true },
        });
      }, root);
      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <section className="hs" id="process" ref={root} aria-label="Our process and methodology">
      <div className="hs-head">
        <div className="hs-head-meta">
          <span className="eyebrow">( How we work )</span>
          <span className="eyebrow hs-counter">06 PHASES / SYSTEMATIC SPRINT</span>
        </div>
        <h2 className="hs-title">Six steps.<br /><em>One direction.</em></h2>
        <div className="hs-progress" aria-hidden="true">
          <span ref={bar} />
        </div>
      </div>

      <div className="hs-viewport">
        <div className="hs-track" ref={track}>
          {steps.map(s => (
            <div className="hs-item" key={s.n}>
              <article className="hs-card">
                <div className="hs-card-head">
                  <span className="hs-count">{s.n}</span>
                  <span className="hs-tag">{s.tag}</span>
                </div>
                <div className="hs-card-body">
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
                <div className="hs-card-foot">
                  <span className="hs-dot" />
                  <span>PHASE {s.n}</span>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

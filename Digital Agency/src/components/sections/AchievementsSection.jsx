import { useLayoutEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { gsap } from '../../animations/gsapConfig.js';

const metrics = [
  {
    value: '24+',
    label: 'Platforms Shipped',
    desc: 'Bespoke brand identities, e-commerce stores, and high-performance web systems launched since inception.',
  },
  {
    value: '04',
    label: 'Core Disciplines',
    desc: 'Strategy, design, full-stack engineering, and AI automation sitting at the exact same table.',
  },
  {
    value: '100%',
    label: 'Senior Collaboration',
    desc: 'Direct partner and specialist access from day one. Zero layers of account managers or outsourced fluff.',
  },
  {
    value: '99.4%',
    label: 'Performance Target',
    desc: 'Sub-second interaction speeds, responsive fluid grids, and accessible GSAP motion systems.',
  },
];

export default function AchievementsSection() {
  const root = useRef(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {
        const once = trigger => ({ trigger, start: 'top 85%', once: true });

        gsap.from('.achieve-line > span', {
          yPercent: 110,
          duration: 1.1,
          stagger: 0.12,
          ease: 'power4.out',
          scrollTrigger: once('.achieve-head'),
        });

        gsap.from('.achieve-eyebrow, .achieve-intro', {
          autoAlpha: 0,
          y: 24,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: once('.achieve-head'),
        });

        gsap.utils.toArray('.achieve-card').forEach((card, i) => {
          gsap.from(card, {
            autoAlpha: 0,
            y: 40,
            duration: 0.85,
            delay: (i % 2) * 0.08,
            ease: 'power3.out',
            scrollTrigger: once(card),
          });
        });

        if (document.querySelector('.achieve-spotlight')) {
          gsap.from('.achieve-spotlight', {
            autoAlpha: 0,
            y: 35,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: once('.achieve-spotlight'),
          });
        }
      }, root);
      return () => ctx.revert();
    });
    return () => mm.revert();
  }, []);

  return (
    <section className="achieve" id="achievements" ref={root} aria-label="Our achievements and metrics">
      <div className="achieve-head">
        <span className="eyebrow achieve-eyebrow">( Our Achievements )</span>
        <h2 className="achieve-title">
          <span className="achieve-line"><span>Behind every</span></span>
          <span className="achieve-line"><span>milestone <em>pulses</em></span></span>
          <span className="achieve-line"><span>a human story.</span></span>
        </h2>
        <p className="achieve-intro">
          Transforming ambitious goals into durable digital reality. We measure progress by clarity of purpose, technical excellence, and the quiet impact of work done right.
        </p>
      </div>

      <div className="achieve-grid">
        {metrics.map((m, i) => (
          <article className="achieve-card" key={i}>
            <div className="achieve-card-top">
              <span className="achieve-num">{m.value}</span>
              <span className="achieve-icon" aria-hidden="true">✳</span>
            </div>
            <h3 className="achieve-label">{m.label}</h3>
            <p className="achieve-desc">{m.desc}</p>
          </article>
        ))}
      </div>

      <div className="achieve-spotlight">
        <div className="achieve-spotlight-left">
          <span className="eyebrow achieve-spot-pill">STUDIO PRINCIPLE / 2026</span>
          <h4 className="achieve-spot-title">Engineered for depth, designed for memory.</h4>
          <p className="achieve-spot-copy">
            We avoid throwaway trends and cookie-cutter frameworks. Every build is treated as a long-term investment in your brand’s reputation and commercial pipeline.
          </p>
        </div>
        <div className="achieve-spotlight-right">
          <div className="achieve-stat-badge">
            <span className="achieve-stat-kicker">COLLABORATION</span>
            <span className="achieve-stat-val">100%</span>
            <span className="achieve-stat-sub">Direct Partner Access</span>
          </div>
          <div className="achieve-stat-badge">
            <span className="achieve-stat-kicker">ORIGINALITY</span>
            <span className="achieve-stat-val">00</span>
            <span className="achieve-stat-sub">Pre-made Templates</span>
          </div>
        </div>
      </div>
    </section>
  );
}

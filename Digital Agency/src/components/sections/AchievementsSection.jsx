
import { useLayoutEffect, useRef } from 'react';
import { gsap } from '../../animations/gsapConfig.js';

const metrics = [
  {
    value: 24,
    suffix: '+',
    decimals: 0,
    pad: true,
    label: 'Platforms Shipped',
    desc: 'Bespoke brand identities, e-commerce stores, and high-performance web systems launched since inception.',
  },
  {
    value: 4,
    suffix: '',
    decimals: 0,
    pad: true,
    label: 'Core Disciplines',
    desc: 'Strategy, design, full-stack engineering, and AI automation sitting at the exact same table.',
  },
  {
    value: 100,
    suffix: '%',
    decimals: 0,
    pad: false,
    label: 'Senior Collaboration',
    desc: 'Direct partner and specialist access from day one. Zero layers of account managers or outsourced fluff.',
  },
  {
    value: 99.4,
    suffix: '%',
    decimals: 1,
    pad: false,
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
        const once = trigger => ({
          trigger,
          start: 'top 85%',
          once: true,
        });

        // Heading animation
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

        // Cards + count-up animation
        gsap.utils.toArray('.achieve-card').forEach((card, i) => {
          gsap.from(card, {
            autoAlpha: 0,
            y: 40,
            duration: 0.85,
            delay: (i % 2) * 0.08,
            ease: 'power3.out',
            scrollTrigger: once(card),
          });

          const number = card.querySelector('.achieve-num');
          const target = Number(number.dataset.value);
          const decimals = Number(number.dataset.decimals);
          const suffix = number.dataset.suffix;
          const pad = number.dataset.pad === 'true';

          const counter = { value: 0 };

          gsap.to(counter, {
            value: target,
            duration: 2,
            ease: 'power2.out',
            snap: {
              value: decimals === 1 ? 0.1 : 1,
            },
            scrollTrigger: once(card),
            onUpdate: () => {
              let formatted = counter.value.toFixed(decimals);

              if (pad) {
                formatted = formatted.padStart(2, '0');
              }

              number.textContent = formatted + suffix;
            },
          });
        });

      }, root);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      className="achieve"
      id="achievements"
      ref={root}
      aria-label="Our achievements and metrics"
    >
      <div className="achieve-head">
        <span className="eyebrow achieve-eyebrow">
          ( Our Achievements )
        </span>

        <h2 className="achieve-title">
          <span className="achieve-line">
            <span>Behind every</span>
          </span>
          <span className="achieve-line">
            <span>milestone <em>pulses</em></span>
          </span>
          <span className="achieve-line">
            <span>a human story.</span>
          </span>
        </h2>

        <p className="achieve-intro">
          Transforming ambitious goals into durable digital reality.
          We measure progress by clarity of purpose, technical excellence,
          and the quiet impact of work done right.
        </p>
      </div>

      <div className="achieve-grid">
        {metrics.map((m, i) => (
          <article className="achieve-card" key={i}>
            <div className="achieve-card-top">
              <span
                className="achieve-num"
                data-value={m.value}
                data-decimals={m.decimals}
                data-suffix={m.suffix}
                data-pad={m.pad}
              >
                0
              </span>

              <span className="achieve-icon" aria-hidden="true">
                ✳
              </span>
            </div>

            <h3 className="achieve-label">{m.label}</h3>
            <p className="achieve-desc">{m.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

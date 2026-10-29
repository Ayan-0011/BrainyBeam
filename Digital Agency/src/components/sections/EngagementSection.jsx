import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';
import { gsap } from '../../animations/gsapConfig.js';

const tiers = [
  {
    kicker: 'RAPID SCOPE',
    name: 'Targeted Sprint',
    headline: 'Validate an idea or overhaul a key interface rapidly.',
    deliverables: [
      '2 to 4-week concentrated design or code sprint',
      'Strategic brand & UX direction',
      'High-fidelity interactive prototype in Figma',
      'Direct collaboration with studio founders',
      'Complete design tokens & component handoff',
    ],
    cta: 'DISCUSS A SPRINT',
    featured: false,
  },
  {
    kicker: 'FLAGSHIP BUILD',
    name: 'End-to-End Website',
    headline: 'A bespoke, unforgettable digital home for your brand.',
    deliverables: [
      'Custom visual identity & design language',
      'Modern, lightweight React + Vite engineering',
      'Tailored GSAP scroll animations & micro-interactions',
      'Headless CMS integration for effortless updates',
      'Cross-device optimization & sub-second load times',
      'Rigorous SEO setup and launch deployment',
    ],
    cta: 'START YOUR BUILD',
    featured: true,
  },
  {
    kicker: 'CONTINUOUS EVOLUTION',
    name: 'Studio Retainer',
    headline: 'Ongoing design and technical capacity for growing teams.',
    deliverables: [
      'Dedicated monthly hours for design & development',
      'Continuous conversion rate & UX optimization',
      'New landing page rollouts and feature releases',
      'Priority sprint queue and prompt async response',
      'Flexible month-to-month commitment',
    ],
    cta: 'EXPLORE RETAINER',
    featured: false,
  },
];

export default function EngagementSection() {
  const root = useRef(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {
        const once = trigger => ({ trigger, start: 'top 85%', once: true });

        gsap.from('.engage-line > span', {
          yPercent: 110,
          duration: 1.1,
          stagger: 0.12,
          ease: 'power4.out',
          scrollTrigger: once('.engage-head'),
        });

        gsap.from('.engage-eyebrow, .engage-intro', {
          autoAlpha: 0,
          y: 24,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: once('.engage-head'),
        });

        gsap.utils.toArray('.engage-card').forEach((card, i) => {
          gsap.from(card, {
            autoAlpha: 0,
            y: 45,
            duration: 0.9,
            delay: i * 0.12,
            ease: 'power3.out',
            scrollTrigger: once(card),
          });
        });
      }, root);
      return () => ctx.revert();
    });
    return () => mm.revert();
  }, []);

  return (
    <section className="engage-sec" id="engagement" ref={root} aria-label="Engagement models and pricing options">
      <div className="engage-head">
        <span className="eyebrow engage-eyebrow">( How We Partner )</span>
        <h2 className="engage-title">
          <span className="engage-line"><span>Clear models.</span></span>
          <span className="engage-line"><span>Focused <em>outcomes.</em></span></span>
        </h2>
        <p className="engage-intro">
          Transparent collaborations tailored to your ambition. Every engagement is rooted in direct accountability, clean craftsmanship, and measurable business impact.
        </p>
      </div>

      <div className="engage-grid">
        {tiers.map((t, i) => (
          <article className={`engage-card ${t.featured ? 'engage-featured' : ''}`} key={i}>
            {t.featured && <span className="engage-badge">FEATURED PARTNERSHIP</span>}
            <div className="engage-card-top">
              <span className="engage-kicker">{t.kicker}</span>
              <h3 className="engage-name">{t.name}</h3>
              <p className="engage-headline">{t.headline}</p>
            </div>

            <div className="engage-divider" />

            <ul className="engage-list">
              {t.deliverables.map((item, idx) => (
                <li key={idx}>
                  <Check size={16} className="engage-check" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="engage-card-action">
              <Link to="/contact" className={`engage-btn ${t.featured ? 'engage-btn-featured' : ''}`}>
                <span>{t.cta}</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="engage-note">
        <p>
          Need a custom scope or specific technical integration? We craft tailored proposals based on your exact requirements.{' '}
          <Link to="/contact" className="engage-inline-link">Let’s discuss your project ↘</Link>
        </p>
      </div>
    </section>
  );
}

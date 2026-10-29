import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ShieldCheck, Zap, Layers, Sparkles } from 'lucide-react';
import { gsap } from '../../animations/gsapConfig.js';

const benefits = [
  {
    num: '01',
    icon: Sparkles,
    title: 'Direct Senior Craft',
    subtitle: 'No middle layers. Direct collaboration.',
    desc: 'You work directly with senior founders and specialists. Every question gets a definitive, knowledgeable answer without endless account manager telephone games.',
  },
  {
    num: '02',
    icon: Layers,
    title: 'Strategy Meets Code',
    subtitle: 'Design that looks bold and loads instantly.',
    desc: 'We never decouple visual storytelling from architectural performance. Every project is built on modern, lightweight frameworks with sub-second responsiveness.',
  },
  {
    num: '03',
    icon: Zap,
    title: 'Transparent Sprints',
    subtitle: 'Predictable delivery, zero surprises.',
    desc: 'Structured weekly milestones, live staging links, and transparent communication. You experience the evolving product in real code, not just static mockups.',
  },
  {
    num: '04',
    icon: ShieldCheck,
    title: 'Built to Endure',
    subtitle: 'Substance that drives real conversion.',
    desc: 'Visual distinction that earns respect and converts attention into pipeline. We create brand assets and codebases designed to remain relevant for years to come.',
  },
];

export default function BenefitsSection() {
  const root = useRef(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {
        const once = trigger => ({ trigger, start: 'top 85%', once: true });

        gsap.from('.benefit-line > span', {
          yPercent: 110,
          duration: 1.1,
          stagger: 0.12,
          ease: 'power4.out',
          scrollTrigger: once('.benefit-head'),
        });

        gsap.from('.benefit-eyebrow, .benefit-intro', {
          autoAlpha: 0,
          y: 24,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: once('.benefit-head'),
        });

        gsap.utils.toArray('.benefit-card').forEach((card, i) => {
          gsap.from(card, {
            autoAlpha: 0,
            y: 45,
            duration: 0.9,
            delay: (i % 2) * 0.1,
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
    <section className="benefits" id="benefits" ref={root} aria-label="Why choose our studio">
      <div className="benefit-head">
        <span className="eyebrow benefit-eyebrow">( Why Choose Us )</span>
        <h2 className="benefit-title">
          <span className="benefit-line"><span>Partnership,</span></span>
          <span className="benefit-line"><span>not just <em>projects.</em></span></span>
        </h2>
        <p className="benefit-intro">
          Skip the hiring maze and bloated agency overhead. We operate as an agile creative and engineering powerhouse right at your fingertips, tuned for clarity and execution.
        </p>
      </div>

      <div className="benefit-grid">
        {benefits.map((b, i) => {
          const IconComponent = b.icon;
          return (
            <article className="benefit-card" key={i}>
              <div className="benefit-card-top">
                <span className="benefit-num">{b.num}</span>
                <span className="benefit-badge"><IconComponent size={18} /></span>
              </div>
              <h3 className="benefit-card-title">{b.title}</h3>
              <p className="benefit-card-sub">{b.subtitle}</p>
              <p className="benefit-card-desc">{b.desc}</p>
              <div className="benefit-card-foot">
                <span className="benefit-indicator" />
                <span className="benefit-tag">STUDIO STANDARD</span>
              </div>
            </article>
          );
        })}
      </div>

      <div className="benefit-bottom">
        <div className="benefit-seal">
          <span>INDEPENDENT BY DESIGN</span>
          <b>↗</b>
          <span>AHMEDABAD &amp; REMOTE</span>
        </div>
        <div className="benefit-cta-wrap">
          <p>Ready to collaborate without agency red tape?</p>
          <Link to="/contact" className="text-link">
            START A CONVERSATION <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}

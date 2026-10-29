import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { gsap } from '../../animations/gsapConfig.js';
import { brand } from '../../config/brand.js';

export default function CtaSection() {
  const root = useRef(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {
        gsap.timeline({ scrollTrigger: { trigger: root.current, start: 'top 70%', once: true } })
          .from('.cta-top', { autoAlpha: 0, y: 16, duration: 0.7, ease: 'power3.out' }, 0)
          .from('.cta-line > span', { yPercent: 112, duration: 1.15, stagger: 0.12, ease: 'power4.out' }, 0.1)
          .from('.cta-sub, .cta-actions > *', { autoAlpha: 0, y: 26, duration: 0.8, stagger: 0.1, ease: 'power3.out' }, 0.7);
      }, root);
      return () => ctx.revert();
    });
    return () => mm.revert();
  }, []);

  return (
    <section className="cta" ref={root} aria-labelledby="cta-title">
      <div className="cta-top"><span className="eyebrow">( Next )</span><span className="eyebrow">LET'S TALK ↘</span></div>
      <h2 className="cta-title" id="cta-title">
        <span className="cta-line"><span>Let's make it</span></span>
        <span className="cta-line"><span>mean <em>more.</em></span></span>
      </h2>
      <div className="cta-bottom">
        <p className="cta-sub">Big brief, small question, or just a feeling that something could be better. Start the conversation.</p>
        <div className="cta-actions">
          <Link to="/contact" className="cta-btn">
            <span className="cta-btn-label">START A PROJECT</span>
            <span className="cta-btn-icon"><ArrowUpRight size={20} /></span>
          </Link>
          <a className="cta-mail" href={`mailto:${brand.email}`}>{brand.email}</a>
        </div>
      </div>
    </section>
  );
}
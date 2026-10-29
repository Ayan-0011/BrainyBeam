import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { gsap } from '../../animations/gsapConfig.js';
import { services } from '../../data/services.js';

export default function WhatWeDo() {
  const root = useRef(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {
        const once = trigger => ({ trigger, start: 'top 85%', once: true });

        gsap.from('.wwd-line > span', { yPercent: 110, duration: 1.1, stagger: 0.12, ease: 'power4.out', scrollTrigger: once('.wwd-head') });
        gsap.from('.wwd-eyebrow, .wwd-intro', { autoAlpha: 0, y: 24, duration: 0.9, stagger: 0.12, ease: 'power3.out', scrollTrigger: once('.wwd-head') });

        gsap.utils.toArray('.wwd-row').forEach((row, i) => {
          gsap.from(row, { autoAlpha: 0, y: 42, duration: 0.9, delay: (i % 2) * 0.05, ease: 'power3.out', scrollTrigger: once(row) });
          gsap.from(row.querySelector('.wwd-rule'), { scaleX: 0, transformOrigin: 'left center', duration: 1.1, ease: 'power3.inOut', scrollTrigger: once(row) });
        });
      }, root);
      return () => ctx.revert();
    });
    return () => mm.revert();
  }, []);

  return (
    <section className="wwd" id="what-we-do" ref={root}>
      <div className="wwd-head">
        <span className="eyebrow wwd-eyebrow">( What we do )</span>
        <h2 className="wwd-title" aria-label="What we do.">
          <span className="wwd-line"><span>What we</span></span>
          <span className="wwd-line"><span><em>do.</em></span></span>
        </h2>
        <p className="wwd-intro">Strategy, design and technology in the same room. Four disciplines, one small team — pick one, or let us stitch them together.</p>
      </div>

      <ul className="wwd-list">
        {services.map(s => (
          <li key={s.n}>
            <Link to="/services" className="wwd-row" aria-label={`${s.title} — view services`}>
              <span className="wwd-rule" aria-hidden="true" />
              <span className="wwd-no">{s.n}</span>
              <span className="wwd-name">{s.title}</span>
              <span className="wwd-copy">
                <span className="wwd-desc">{s.desc}</span>
                <span className="wwd-tags">{s.items.slice(0, 3).join(' · ')}</span>
              </span>
              <span className="wwd-arrow" aria-hidden="true"><ArrowUpRight size={22} /></span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="wwd-foot">
        <span>04 DISCIPLINES / ONE STUDIO</span>
        <Link className="text-link" to="/services">ALL SERVICES <ArrowUpRight size={15} /></Link>
      </div>
    </section>
  );
}
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { gsap } from '../../animations/gsapConfig.js';
import { once, useReveal } from '../../animations/useReveal.js';
import { services } from '../../data/services.js';
import { serviceDetails } from '../../data/serviceDetails.js';

// each service gets its own surface and its own visual so the page never repeats one card
const LOOK = { '01': 'ink', '02': 'paper', '03': 'paper', '04': 'ink' };

function Visual({ n, tools }) {
  if (n === '01') {
    // rising bars: reporting / pipeline
    return <div className="sv-visual sv-bars" aria-hidden="true">{[34, 52, 44, 70, 62, 88, 100].map((h, i) => <i key={i} style={{ '--h': `${h}%` }} />)}</div>;
  }
  if (n === '02') {
    // performance ring: the 99.4% target quoted on the homepage
    return (
      <div className="sv-visual sv-ring" aria-hidden="true">
        <svg viewBox="0 0 120 120"><circle className="sv-ring-bg" cx="60" cy="60" r="52" /><circle className="sv-ring-fg" cx="60" cy="60" r="52" pathLength="100" /></svg>
        <b>99.4%</b><span>PERFORMANCE TARGET</span>
      </div>
    );
  }
  if (n === '03') {
    // overlapping brand discs
    return <div className="sv-visual sv-discs" aria-hidden="true"><i /><i /><i /><i /></div>;
  }
  // workflow nodes joined by a line
  return (
    <div className="sv-visual sv-flow" aria-hidden="true">
      <span className="sv-flow-line" />
      {tools.map(tool => <span className="sv-node" key={tool}>{tool}</span>)}
    </div>
  );
}

function ServiceBlock({ service }) {
  const root = useRef(null);
  const detail = serviceDetails[service.n];
  const tone = LOOK[service.n] ?? 'paper';

  useReveal(root, ({ wide }) => {
    const block = root.current;
    gsap.from('.sv-num', { y: 60, autoAlpha: 0, duration: 1.1, ease: 'power4.out', scrollTrigger: once(block, 'top 75%') });
    gsap.from('.sv-main > *', { autoAlpha: 0, y: 30, duration: 0.9, stagger: 0.1, ease: 'power3.out', scrollTrigger: once(block, 'top 70%') });
    gsap.from('.sv-cap li', { autoAlpha: 0, x: -20, duration: 0.6, stagger: 0.04, ease: 'power3.out', scrollTrigger: once(block.querySelector('.sv-caps'), 'top 85%') });
    gsap.from('.sv-visual', { autoAlpha: 0, scale: 0.9, duration: 1.1, ease: 'power3.out', scrollTrigger: once(block, 'top 70%') });

    // one motion per visual; only the variant that exists on this block is animated
    const has = selector => block.querySelector(selector);
    const at = () => once(block, 'top 65%'); // a fresh config per tween (ScrollTrigger attaches the animation to it)
    if (has('.sv-bars')) gsap.from('.sv-bars i', { scaleY: 0, transformOrigin: 'bottom', duration: 1, stagger: 0.08, ease: 'power3.out', scrollTrigger: at() });
    if (has('.sv-ring')) gsap.from('.sv-ring-fg', { strokeDashoffset: 100, duration: 1.6, ease: 'power2.out', scrollTrigger: at() });
    if (has('.sv-discs')) gsap.from('.sv-discs i', { scale: 0, duration: 0.9, stagger: 0.12, ease: 'back.out(1.6)', scrollTrigger: at() });
    if (has('.sv-flow')) {
      gsap.from('.sv-flow-line', { scaleX: 0, transformOrigin: 'left center', duration: 1.3, ease: 'power3.inOut', scrollTrigger: at() });
      gsap.from('.sv-node', { autoAlpha: 0, y: 18, duration: 0.7, stagger: 0.14, ease: 'power3.out', scrollTrigger: at() });
    }

    // desktop: the huge number moves slower than the page
    if (wide) {
      gsap.to('.sv-num', { yPercent: -18, ease: 'none', scrollTrigger: { trigger: block, start: 'top bottom', end: 'bottom top', scrub: true } });
    }
  }, []);

  return (
    <section className={`sv-block sv-block--${service.n} pg-surface pg-surface--${tone}`} id={`service-${service.n}`} ref={root} aria-labelledby={`sv-title-${service.n}`}>
      <div className="sv-top">
        <span className="eyebrow">( Service {service.n} / {String(services.length).padStart(2, '0')} )</span>
        <span className="eyebrow">{detail.kicker.toUpperCase()}</span>
      </div>

      <div className="sv-grid">
        <div className="sv-num" aria-hidden="true">{service.n}</div>

        <div className="sv-main">
          <h2 className="sv-title" id={`sv-title-${service.n}`}>{service.title}</h2>
          <p className="sv-lead">{detail.lead}</p>
          <p className="sv-best"><span className="eyebrow">Best for</span>{detail.bestFor}</p>
          <ul className="sv-outcomes">
            {detail.outcomes.map(outcome => <li key={outcome}>{outcome}</li>)}
          </ul>
        </div>

        <Visual n={service.n} tools={detail.tools} />

        <div className="sv-caps">
          <span className="eyebrow">Key capabilities / {service.count}</span>
          <ul className="sv-cap">
            {service.items.map(item => <li key={item}>{item}</li>)}
          </ul>
        </div>

        {service.n !== '04' && (
          <div className="sv-tools">
            <span className="eyebrow">{detail.toolsLabel}</span>
            <ul>{detail.tools.map(tool => <li key={tool}>{tool}</li>)}</ul>
          </div>
        )}
      </div>

      <Link className="sv-link" to="/contact">START WITH {service.title.toUpperCase()} <ArrowUpRight size={15} /></Link>
    </section>
  );
}

export default function ServiceDetail() {
  return <>{services.map(service => <ServiceBlock service={service} key={service.n} />)}</>;
}

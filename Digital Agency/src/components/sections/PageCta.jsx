import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { gsap } from '../../animations/gsapConfig.js';
import { once, useReveal } from '../../animations/useReveal.js';
import { brand } from '../../config/brand.js';

/**
 * Closing call-to-action for the inner pages. It reuses the homepage CTA's markup and CSS classes
 * (.cta*) so it looks identical, but takes its copy as props. The homepage CtaSection is untouched.
 *
 * primary: { label, to }  -> router link      or      { label, href } -> plain link (mailto: etc.)
 */
export default function PageCta({
  eyebrow = '( Next )',
  side = "LET'S TALK ↘",
  lines,
  sub,
  primary = { label: 'START A PROJECT', to: '/contact' },
}) {
  const root = useRef(null);

  useReveal(root, () => {
    gsap.timeline({ scrollTrigger: once(root.current, 'top 70%') })
      .from('.cta-top', { autoAlpha: 0, y: 16, duration: 0.7, ease: 'power3.out' }, 0)
      .from('.cta-line > span', { yPercent: 112, duration: 1.15, stagger: 0.12, ease: 'power4.out' }, 0.1)
      .from('.cta-sub, .cta-actions > *', { autoAlpha: 0, y: 26, duration: 0.8, stagger: 0.1, ease: 'power3.out' }, 0.7);
  }, []);

  const button = <>
    <span className="cta-btn-label">{primary.label}</span>
    <span className="cta-btn-icon"><ArrowUpRight size={20} /></span>
  </>;

  return (
    <section className="cta" ref={root} aria-labelledby="cta-title">
      <div className="cta-top"><span className="eyebrow">{eyebrow}</span><span className="eyebrow">{side}</span></div>
      <h2 className="cta-title" id="cta-title">
        {lines.map((line, i) => <span className="cta-line" key={i}><span>{line}</span></span>)}
      </h2>
      <div className="cta-bottom">
        <p className="cta-sub">{sub}</p>
        <div className="cta-actions">
          {primary.to
            ? <Link to={primary.to} className="cta-btn">{button}</Link>
            : <a href={primary.href} className="cta-btn">{button}</a>}
          <a className="cta-mail" href={`mailto:${brand.email}`}>{brand.email}</a>
        </div>
      </div>
    </section>
  );
}

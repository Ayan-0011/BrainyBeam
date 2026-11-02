import { useId, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Minus, Plus } from 'lucide-react';
import { gsap } from '../../animations/gsapConfig.js';
import { once, useReveal } from '../../animations/useReveal.js';

/**
 * Props-driven FAQ. It reuses the homepage FAQ's markup and CSS classes (.faq-*) so it matches it
 * exactly; the homepage FaqSection (with its own fixed questions) is untouched.
 *
 * faqs:   [{ q, a }]
 * banner: optional { title, text, label, to }  (the "still looking for answers" strip)
 */
export default function FaqList({ eyebrow = '( Popular Queries )', lines, intro, faqs, banner }) {
  const [openIndex, setOpenIndex] = useState(0);
  const root = useRef(null);
  const uid = useId();

  useReveal(root, () => {
    gsap.from('.faq-line > span', { yPercent: 110, duration: 1.1, stagger: 0.12, ease: 'power4.out', scrollTrigger: once('.faq-head') });
    gsap.from('.faq-eyebrow, .faq-intro', { autoAlpha: 0, y: 24, duration: 0.9, stagger: 0.12, ease: 'power3.out', scrollTrigger: once('.faq-head') });
    gsap.utils.toArray('.faq-item').forEach((item, i) => {
      gsap.from(item, { autoAlpha: 0, y: 30, duration: 0.8, delay: (i % 3) * 0.05, ease: 'power3.out', scrollTrigger: once(item) });
    });
  }, []);

  return (
    <section className="faq-sec" ref={root} aria-label="Frequently asked questions">
      <div className="faq-head">
        <span className="eyebrow faq-eyebrow">{eyebrow}</span>
        <h2 className="faq-title">
          {lines.map((line, i) => <span className="faq-line" key={i}><span>{line}</span></span>)}
        </h2>
        <p className="faq-intro">{intro}</p>
      </div>

      <div className="faq-accordion" role="region" aria-label="FAQ items">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div className={`faq-item ${isOpen ? 'faq-item-open' : ''}`} key={item.q}>
              <button
                type="button"
                className="faq-question-btn"
                onClick={() => setOpenIndex(prev => (prev === index ? -1 : index))}
                aria-expanded={isOpen}
                aria-controls={`${uid}-a${index}`}
                id={`${uid}-q${index}`}
              >
                <span className="faq-num">{String(index + 1).padStart(2, '0')}</span>
                <span className="faq-question-text">{item.q}</span>
                <span className="faq-icon-wrap" aria-hidden="true">{isOpen ? <Minus size={16} /> : <Plus size={16} />}</span>
              </button>
              <div
                id={`${uid}-a${index}`}
                role="region"
                aria-labelledby={`${uid}-q${index}`}
                className="faq-answer-wrap"
                style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
              >
                <div className="faq-answer-inner"><p>{item.a}</p></div>
              </div>
            </div>
          );
        })}
      </div>

      {banner && (
        <div className="faq-bottom-banner">
          <div>
            <h4>{banner.title}</h4>
            <p>{banner.text}</p>
          </div>
          <Link to={banner.to} className="faq-call-btn"><span>{banner.label}</span><ArrowUpRight size={16} /></Link>
        </div>
      )}
    </section>
  );
}

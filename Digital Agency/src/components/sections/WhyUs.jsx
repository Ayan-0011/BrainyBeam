import { useRef } from 'react';
import { gsap } from '../../animations/gsapConfig.js';
import { once, revealHeads, useReveal } from '../../animations/useReveal.js';
import SectionHead from '../ui/SectionHead.jsx';

/**
 * Differentiators / benefits, in two layouts:
 *   list  - big full-width rows (About "Why choose us")
 *   split - sticky heading on the left, numbered stack on the right (Services "Why our approach")
 * items: [{ n, title, text }]
 */
export default function WhyUs({ variant = 'list', tone = 'paper', eyebrow, lines, intro, items, id }) {
  const root = useRef(null);

  useReveal(root, () => {
    revealHeads();
    gsap.utils.toArray('.pg-why-item').forEach(item => {
      gsap.from(item, { autoAlpha: 0, y: 40, duration: 0.9, ease: 'power3.out', scrollTrigger: once(item, 'top 90%') });
      gsap.from(item.querySelector('.pg-why-rule'), {
        scaleX: 0, transformOrigin: 'left center', duration: 1.1, ease: 'power3.inOut', scrollTrigger: once(item, 'top 90%'),
      });
    });
  }, []);

  return (
    <section className={`pg-why pg-why--${variant} pg-surface pg-surface--${tone}`} id={id} ref={root}>
      <SectionHead eyebrow={eyebrow} lines={lines} intro={intro} />
      <ol className="pg-why-list">
        {items.map(item => (
          <li className="pg-why-item" key={item.n}>
            <span className="pg-why-rule" aria-hidden="true" />
            <span className="pg-why-n">{item.n}</span>
            <h3 className="pg-why-title">{item.title}</h3>
            <p className="pg-why-text">{item.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

import { useRef } from 'react';
import { gsap } from '../../animations/gsapConfig.js';
import { revealHeads, useReveal } from '../../animations/useReveal.js';
import SectionHead from '../ui/SectionHead.jsx';
import { philosophy } from '../../data/studio.js';

/**
 * Approach / philosophy as a stack of cards that slide over each other (CSS position: sticky).
 * On desktop the card that is being covered also settles back slightly.
 */
export default function Philosophy() {
  const root = useRef(null);

  useReveal(root, ({ wide }) => {
    revealHeads();

    if (wide) {
      const cards = gsap.utils.toArray('.ab-card');
      cards.slice(0, -1).forEach((card, i) => {
        gsap.to(card, {
          scale: 0.94,
          ease: 'none',
          scrollTrigger: { trigger: cards[i + 1], start: 'top 88%', end: 'top 28%', scrub: true },
        });
      });
    }
  }, []);

  return (
    <section className="ab-phil pg-surface pg-surface--alt" id="approach" ref={root}>
      <div className="ab-phil-head">
        <SectionHead
          eyebrow="( Our Approach )"
          lines={['How we', <>think about <em>work.</em></>]}
          intro="Four habits that shape every project, whatever the size of the brief."
        />
      </div>

      <ol className="ab-stack">
        {philosophy.map((item, i) => (
          <li className={`ab-card ab-card--${i % 4}`} style={{ '--i': i }} key={item.n}>
            <span className="ab-card-n">{item.n}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

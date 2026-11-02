import { useRef } from 'react';
import { gsap } from '../../animations/gsapConfig.js';
import { once, revealHeads, useReveal } from '../../animations/useReveal.js';
import SectionHead from '../ui/SectionHead.jsx';
import { expertise } from '../../data/studio.js';

export default function Expertise() {
  const root = useRef(null);

  useReveal(root, ({ wide }) => {
    revealHeads();

    gsap.utils.toArray('.ab-panel').forEach((panel, i) => {
      gsap.from(panel, { autoAlpha: 0, y: 60, duration: 1, delay: i * 0.1, ease: 'power3.out', scrollTrigger: once(panel, 'top 90%') });
      // desktop: the panels drift at slightly different speeds
      if (wide) {
        gsap.to(panel, {
          yPercent: i === 1 ? -6 : i === 2 ? 4 : 0,
          ease: 'none',
          scrollTrigger: { trigger: panel, start: 'top bottom', end: 'bottom top', scrub: true },
        });
      }
    });
  }, []);

  return (
    <section className="ab-expertise pg-surface" id="expertise" ref={root}>
      <SectionHead
        eyebrow="( Our Expertise )"
        lines={['Three ways', <>we make it <em>matter.</em></>]}
        intro="Creative development, digital experiences and technology, working as one team rather than three departments."
      />

      <div className="ab-panels">
        {expertise.map(item => (
          <article className="ab-panel" key={item.n}>
            <span className="ab-panel-n">{item.n}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <ul className="ab-tags">
              {item.tags.map(tag => <li key={tag}>{tag}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

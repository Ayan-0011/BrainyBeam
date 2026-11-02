import { useRef } from 'react';
import { gsap } from '../../animations/gsapConfig.js';
import { once, revealHeads, useReveal } from '../../animations/useReveal.js';
import SectionHead from '../ui/SectionHead.jsx';
import Words from '../ui/Words.jsx';
import StatsStrip from '../ui/StatsStrip.jsx';
import { aboutPillars, aboutStatement } from '../../data/studio.js';
import { services } from '../../data/services.js';
import { projects } from '../../data/projects.js';

// "24+" is the same figure the homepage Achievements section shows
const stats = [
  { value: services.length, pad: true, label: 'Core disciplines' },
  { value: 24, suffix: '+', label: 'Platforms shipped' },
  { value: projects.length, pad: true, label: 'Selected projects' },
  { value: 100, suffix: '%', label: 'Senior collaboration' },
];

export default function WhoWeAre() {
  const root = useRef(null);

  useReveal(root, () => {
    revealHeads();

    // the statement is read word by word as you scroll
    gsap.fromTo('.pg-word', { opacity: 0.16 }, {
      opacity: 1,
      ease: 'none',
      stagger: 0.1,
      scrollTrigger: { trigger: root.current.querySelector('.ab-statement'), start: 'top 80%', end: 'bottom 55%', scrub: true },
    });

    gsap.from('.ab-pillar', {
      autoAlpha: 0, y: 36, duration: 0.9, stagger: 0.12, ease: 'power3.out',
      scrollTrigger: once(root.current.querySelector('.ab-pillars'), 'top 88%'),
    });
  }, []);

  return (
    <section className="ab-who pg-surface pg-surface--ink" id="who-we-are" ref={root}>
      <SectionHead eyebrow="( Who We Are )" lines={['Small studio.', <>Big <em>picture.</em></>]} />

      <Words as="p" className="ab-statement">{aboutStatement}</Words>

      <div className="ab-pillars">
        {aboutPillars.map(pillar => (
          <article className="ab-pillar" key={pillar.label}>
            <span className="eyebrow">{pillar.label}</span>
            <p>{pillar.text}</p>
          </article>
        ))}
      </div>

      <StatsStrip items={stats} className="ab-stats" />
    </section>
  );
}

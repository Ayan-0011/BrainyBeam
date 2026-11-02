import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { gsap } from '../../animations/gsapConfig.js';
import { once, useReveal } from '../../animations/useReveal.js';

// Detail crops of the project picture (no extra image files needed): position + zoom + frame ratio
const SHOTS = [
  { pos: '15% 35%', zoom: 1.5, ratio: '4 / 5' },
  { pos: '85% 65%', zoom: 1.45, ratio: '1 / 1' },
  { pos: '50% 50%', zoom: 1.05, ratio: '4 / 3' },
];

const caps = text => text.charAt(0) + text.slice(1).toLowerCase();

/** Challenge / approach, detail gallery and a link to the next project. Sections added below the existing case-study story. */
export default function CaseDetail({ project, next }) {
  const root = useRef(null);

  useReveal(root, () => {
    gsap.from('.cs-block > *', {
      autoAlpha: 0, y: 28, duration: 0.9, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: once(root.current.querySelector('.cs-grid'), 'top 80%'),
    });

    gsap.utils.toArray('.cs-shot').forEach(shot => {
      gsap.set(shot, { clipPath: 'inset(0% 0% 100% 0%)' });
      gsap.to(shot, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.2, ease: 'power4.out', scrollTrigger: once(shot, 'top 88%') });
    });

    gsap.from('.cs-next-title', { yPercent: 40, autoAlpha: 0, duration: 1, ease: 'power4.out', scrollTrigger: once(root.current.querySelector('.cs-next'), 'top 80%') });
  }, [project.slug]);

  const [nextFirst, nextSecond] = next.name.split(' / ').map(caps);

  return (
    <div ref={root}>
      <section className="cs-detail pg-surface">
        <div className="cs-grid">
          <div className="cs-block">
            <span className="eyebrow">( The Challenge )</span>
            <p className="cs-lead">{project.challenge}</p>
          </div>
          <div className="cs-block">
            <span className="eyebrow">( Our Approach )</span>
            <p>{project.approach}</p>
            <ul className="cs-services">
              {project.services.map(item => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>

        <div className="cs-gallery" aria-hidden="true">
          {SHOTS.map((shot, i) => (
            <figure className={`cs-shot cs-shot--${i}`} style={{ aspectRatio: shot.ratio }} key={i}>
              <img src={project.image} alt="" loading="lazy" decoding="async" style={{ objectPosition: shot.pos, '--zoom': shot.zoom }} />
            </figure>
          ))}
        </div>
      </section>

      <Link className="cs-next pg-surface pg-surface--ink" to={`/work/${next.slug}`} aria-label={`Next project: ${next.name}`}>
        <span className="eyebrow">( Next Project ) {next.no}</span>
        <span className="cs-next-title">{nextFirst}{nextSecond && <> <em>{nextSecond}</em></>}</span>
        <span className="cs-next-meta">{next.type} <ArrowUpRight size={20} /></span>
      </Link>
    </div>
  );
}

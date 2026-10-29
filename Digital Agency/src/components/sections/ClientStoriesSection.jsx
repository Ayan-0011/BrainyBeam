import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { gsap } from '../../animations/gsapConfig.js';
import { projects } from '../../data/projects.js';

export default function ClientStoriesSection() {
  const root = useRef(null);

  // Take 3 featured projects for deep impact stories
  const featuredCases = projects.slice(0, 3);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {
        const once = trigger => ({ trigger, start: 'top 85%', once: true });

        gsap.from('.stories-line > span', {
          yPercent: 110,
          duration: 1.1,
          stagger: 0.12,
          ease: 'power4.out',
          scrollTrigger: once('.stories-head'),
        });

        gsap.from('.stories-eyebrow, .stories-intro', {
          autoAlpha: 0,
          y: 24,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: once('.stories-head'),
        });

        gsap.utils.toArray('.story-card').forEach((card, i) => {
          gsap.from(card, {
            autoAlpha: 0,
            y: 45,
            duration: 0.9,
            delay: i * 0.12,
            ease: 'power3.out',
            scrollTrigger: once(card),
          });
        });
      }, root);
      return () => ctx.revert();
    });
    return () => mm.revert();
  }, []);

  return (
    <section className="stories-sec" id="client-stories" ref={root} aria-label="Client case stories and impact">
      <div className="stories-head">
        <span className="eyebrow stories-eyebrow">( Client Impact )</span>
        <h2 className="stories-title">
          <span className="stories-line"><span>Transforming brands.</span></span>
          <span className="stories-line"><span>Driven by <em>outcomes.</em></span></span>
        </h2>
        <p className="stories-intro">
          Real challenges turned into lasting digital advantage. Discover how our collaboration helped these brands claim distinctive positions in their industries.
        </p>
      </div>

      <div className="stories-grid">
        {featuredCases.map((p, i) => (
          <article className="story-card" key={p.slug}>
            <div className="story-card-media">
              <img
                src={p.image}
                alt={`${p.name} case study visual`}
                className="story-card-img"
                loading="lazy"
              />
              <div className="story-card-badge">
                <span>{p.no}</span>
                <span>{p.year}</span>
              </div>
            </div>

            <div className="story-card-content">
              <span className="story-cat">{p.type}</span>
              <h3 className="story-name">{p.name}</h3>
              <p className="story-line">"{p.line}"</p>
              <p className="story-intro">{p.intro}</p>

              <div className="story-meta-row">
                <span className="story-palette">Palette: {p.palette}</span>
                <Link to={`/work/${p.slug}`} className="story-link">
                  <span>CASE STUDY</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="stories-foot">
        <span>DELIVERED WITH METICULOUS DETAIL</span>
        <Link to="/work" className="text-link">
          ALL CASE STUDIES <ArrowUpRight size={15} />
        </Link>
      </div>
    </section>
  );
}

import { useLayoutEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { gsap, ScrollTrigger } from '../../animations/gsapConfig.js';
import { useReveal } from '../../animations/useReveal.js';
import { projects, workCategories } from '../../data/projects.js';

// composition of the grid when every project is shown (repeats every five cards)
const CYCLE = ['a', 'b', 'c', 'd', 'e'];

// 'NORTH / OBJECTS' -> ['North', 'Objects']
const titleCase = text => text.toLowerCase().replace(/(^|[\s/])([a-z])/g, (_, lead, letter) => lead + letter.toUpperCase());
const splitName = name => name.split(' / ').map(titleCase);

// filtered lists use a simpler two-column rhythm so there are no awkward gaps
const patternFor = (index, total, filtered) => {
  if (!filtered) return CYCLE[index % CYCLE.length];
  if (total === 1) return 'a';
  return index % 2 === 0 ? 'f' : 'g';
};

function WorkCard({ project, pattern, priority }) {
  const [first, second] = splitName(project.name);
  const categories = project.tags.map(tag => workCategories.find(c => c.id === tag)?.label).filter(Boolean);

  return (
    <Link
      className={`wk-card wk-card--${pattern}`}
      to={`/work/${project.slug}`}
      aria-label={`${project.name}: ${project.line}. View case study`}
    >
      <div className="wk-media">
        <div className="wk-zoom">
          <img
            className="wk-img"
            src={project.image}
            alt={`${project.name}: ${project.line}`}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
          />
        </div>
        <span className="wk-chip">{project.type}</span>
        <span className="wk-open" aria-hidden="true"><ArrowUpRight size={22} /></span>
        <span className="wk-view" aria-hidden="true">View case study</span>
      </div>

      <div className="wk-info">
        <div className="wk-info-top">
          <span>{project.no} / {String(projects.length).padStart(2, '0')}</span>
          <span>{project.year}</span>
        </div>
        <h3 className="wk-title">{first}{second && <> <em>{second}</em></>}</h3>
        <p className="wk-line">{project.line}</p>
        <p className="wk-desc">{project.intro}</p>
        <ul className="wk-cats">
          {categories.map(label => <li key={label}>{label}</li>)}
        </ul>
      </div>
    </Link>
  );
}

export default function WorkGrid() {
  const [active, setActive] = useState('all');
  const grid = useRef(null);
  const busy = useRef(false);

  const visible = useMemo(
    () => (active === 'all' ? projects : projects.filter(project => project.tags.includes(active))),
    [active],
  );
  const counts = useMemo(() => {
    const result = { all: projects.length };
    workCategories.forEach(c => { result[c.id] = projects.filter(p => p.tags.includes(c.id)).length; });
    return result;
  }, []);
  const activeCategory = workCategories.find(c => c.id === active);

  // ---- filtering: current cards fade out, the list changes, the new cards come in ----
  const select = id => {
    if (id === active || busy.current) return;
    const cards = grid.current ? grid.current.querySelectorAll('.wk-card') : [];
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!cards.length || reduced) { setActive(id); return; }

    busy.current = true;
    gsap.to(cards, {
      autoAlpha: 0, y: 28, duration: 0.35, stagger: 0.04, ease: 'power2.in', overwrite: true,
      onComplete: () => setActive(id),
    });
  };

  // ---- entrance of the cards; rebuilt whenever the filter changes (no stale ScrollTriggers) ----
  useReveal(grid, ({ wide }) => {
    const cards = gsap.utils.toArray('.wk-card');
    if (!cards.length) return;

    const media = card => card.querySelector('.wk-media');
    gsap.set(cards, { autoAlpha: 0, y: 56 });
    gsap.set(cards.map(media), { clipPath: 'inset(0% 0% 100% 0%)' });

    ScrollTrigger.batch(cards, {
      start: 'top 92%',
      once: true,
      onEnter: batch => {
        gsap.to(batch, { autoAlpha: 1, y: 0, duration: 0.95, stagger: 0.12, ease: 'power3.out', overwrite: true });
        gsap.to(batch.map(media), { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.2, stagger: 0.12, ease: 'power4.out', overwrite: true });
      },
    });

    // desktop: the picture drifts inside its frame as the card passes
    if (wide) {
      cards.forEach(card => {
        gsap.fromTo(card.querySelector('.wk-img'), { yPercent: -7 }, {
          yPercent: 7,
          ease: 'none',
          scrollTrigger: { trigger: card, start: 'top bottom', end: 'bottom top', scrub: true },
        });
      });
    }
  }, [active]);

  // after the list changed: allow the next click and re-measure the page height
  useLayoutEffect(() => {
    busy.current = false;
    const frame = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(frame);
  }, [active]);

  return (
    <section className="wk-section pg-surface pg-surface--ink" id="projects">
      <div className="wk-bar">
        <div className="wk-filters" role="group" aria-label="Filter projects by category">
          <span className="eyebrow wk-filters-label">( Filter )</span>
          {[{ id: 'all', label: 'All projects' }, ...workCategories].map(category => (
            <button
              type="button"
              key={category.id}
              className={`wk-chip-btn ${active === category.id ? 'is-active' : ''}`}
              aria-pressed={active === category.id}
              onClick={() => select(category.id)}
            >
              {category.label}<sup>{String(counts[category.id]).padStart(2, '0')}</sup>
            </button>
          ))}
        </div>
        <p className="wk-status" aria-live="polite">
          <span className="eyebrow">
            Showing {visible.length} of {projects.length}{activeCategory ? `: ${activeCategory.label}` : ''}
          </span>
          {activeCategory && <span className="wk-status-blurb">{activeCategory.blurb}</span>}
        </p>
      </div>

      <div className={`wk-grid ${active === 'all' ? '' : 'wk-grid--filtered'}`} ref={grid}>
        {visible.map((project, index) => (
          <WorkCard
            key={project.slug}
            project={project}
            pattern={patternFor(index, visible.length, active !== 'all')}
            priority={index === 0}
          />
        ))}
      </div>
    </section>
  );
}

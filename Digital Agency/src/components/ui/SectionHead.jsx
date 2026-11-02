import { Fragment } from 'react';

/**
 * The shared section heading for the inner pages: mono eyebrow, big masked lines, optional intro.
 * `lines` is an array of strings / JSX (use <em> for the serif accent word).
 * Animated by revealHeads() from animations/useReveal.js.
 */
export default function SectionHead({ eyebrow, lines, intro, className = '' }) {
  return (
    <div className={`pg-head ${className}`.trim()}>
      <span className="eyebrow pg-eyebrow">{eyebrow}</span>
      <h2 className="pg-title">
        {lines.map((line, i) => (
          <Fragment key={i}>
            <span className="pg-line"><span>{line}</span></span>{' '}
          </Fragment>
        ))}
      </h2>
      {intro && <p className="pg-intro">{intro}</p>}
    </div>
  );
}

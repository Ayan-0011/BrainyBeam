import { brand } from '../../config/brand.js';

// The big brand word, split into characters so it can be revealed letter by letter.
export default function BrandWord({ className = '' }) {
  return (
    <span className={`hx-word ${className}`.trim()} aria-hidden="true">
      {[...brand.heroWord].map((char, index) => <span className="hx-char" key={index}><span>{char}</span></span>)}
    </span>
  );
}

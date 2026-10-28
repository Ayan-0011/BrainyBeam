import { useLayoutEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from '../../animations/gsapConfig.js';
import { getLenis } from '../../animations/smoothScroll.js';
import { dockState, fitWord } from '../../animations/brandGeometry.js';
import { brand } from '../../config/brand.js';
import BrandWord from '../ui/BrandWord.jsx';

/**
 * The ONE brand name on the site.
 * - Home: Hero.jsx scrubs this element from the middle of the hero up into the navbar.
 * - Every other page: it simply sits docked in the navbar.
 * It is always a link to "/".
 */
export default function BrandMark() {
  const ref = useRef(null);
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  // size + (when not on the home hero) dock position; re-runs on resize and when fonts arrive
  useLayoutEffect(() => {
    const logo = ref.current;
    const place = () => {
      fitWord(logo);
      gsap.set(logo, { xPercent: -50, yPercent: -50, transformOrigin: '50% 50%', force3D: false });
      if (!isHome) {
        const { x, y, scale } = dockState(logo);
        gsap.set(logo, { x, y, scale });
        logo.classList.add('is-docked');
      }
    };
    place();
    document.fonts?.ready.then(place);
    window.addEventListener('resize', place);
    return () => window.removeEventListener('resize', place);
  }, [isHome]);

  const goHome = event => {
    if (!isHome) return; // router handles navigation from other pages
    event.preventDefault();
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(0, { duration: 1.2 });
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Link ref={ref} to="/" className="nv-logo" aria-label={`${brand.name} home`} onClick={goHome} data-cursor="link">
      <BrandWord />
    </Link>
  );
}

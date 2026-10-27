import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap, ScrollTrigger } from '../../animations/gsapConfig.js';
import { animatePageContent } from '../../animations/scrollAnimations.js';

export default function PageTransition() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    const context = gsap.context(animatePageContent);

    ScrollTrigger.refresh();
    return () => context.revert();
  }, [pathname]);

  return null;
}

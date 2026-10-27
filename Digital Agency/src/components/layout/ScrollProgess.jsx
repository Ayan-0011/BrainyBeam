import { useEffect, useRef } from 'react';
import { gsap } from '../../animations/gsapConfig.js';

export default function ScrollProgress() {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(ref.current, { scaleX: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: 0.2 } });
    });
    return () => ctx.revert();
  }, []);
  return <div className="scroll-progress" ref={ref} aria-hidden="true" />;
}
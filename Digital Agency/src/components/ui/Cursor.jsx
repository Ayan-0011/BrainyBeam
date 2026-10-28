import { useEffect, useRef } from 'react';
import { gsap } from '../../animations/gsapConfig.js';

const INTERACTIVE = 'a, button, [role="button"], summary, label[for], .project-card, [data-cursor="link"]';
const TEXT_FIELD = 'input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]), textarea, select, [contenteditable="true"]';

/**
 * The orange cursor dot, available on every page.
 * Fine pointers only (mouse / trackpad): touch devices keep their normal behaviour.
 */
export default function Cursor() {
  const dot = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!fine.matches) return undefined;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const el = dot.current;

    gsap.set(el, { xPercent: 0, opacity: 0, scale: 1 });
    const moveX = gsap.quickTo(el, 'x', { duration: reduce ? 0 : 0.28, ease: 'power3' });
    const moveY = gsap.quickTo(el, 'y', { duration: reduce ? 0 : 0.28, ease: 'power3' });
    const setScale = gsap.quickTo(el, 'scale', { duration: reduce ? 0 : 0.35, ease: 'power3' });
    const setOpacity = gsap.quickTo(el, 'opacity', { duration: 0.2, ease: 'none' });

    let state = 'default';
    let pressed = false;
    const apply = () => {
      const scale = state === 'link' ? 2.3 : 1;
      setScale(pressed ? scale * 0.82 : scale);
      setOpacity(state === 'text' ? 0 : 1);
      el.dataset.state = state;
    };

    document.documentElement.classList.add('has-cursor');
    let seen = false;

    const onMove = event => {
      if (event.pointerType && event.pointerType !== 'mouse') return;
      if (!seen) { seen = true; gsap.set(el, { x: event.clientX, y: event.clientY }); apply(); }
      moveX(event.clientX);
      moveY(event.clientY);
    };
    const onOver = event => {
      const target = event.target instanceof Element ? event.target : null;
      const next = !target ? 'default' : target.closest(TEXT_FIELD) ? 'text' : target.closest(INTERACTIVE) ? 'link' : 'default';
      if (next !== state) { state = next; if (seen) apply(); }
    };
    const onDown = () => { pressed = true; if (seen) apply(); };
    const onUp = () => { pressed = false; if (seen) apply(); };
    const onLeave = () => setOpacity(0);
    const onEnter = () => { if (seen) apply(); };

    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerover', onOver, { passive: true });
    window.addEventListener('pointerdown', onDown, { passive: true });
    window.addEventListener('pointerup', onUp, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);
    document.documentElement.addEventListener('mouseenter', onEnter);

    return () => {
      document.documentElement.classList.remove('has-cursor');
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerover', onOver);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointerup', onUp);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      document.documentElement.removeEventListener('mouseenter', onEnter);
      gsap.killTweensOf(el);
    };
  }, []);

  return <span className="hx-cursor" ref={dot} aria-hidden="true" />;
}

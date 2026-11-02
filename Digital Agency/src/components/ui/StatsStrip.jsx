import { useRef } from 'react';
import { gsap } from '../../animations/gsapConfig.js';
import { once, useReveal } from '../../animations/useReveal.js';

/**
 * Row of numbers that count up once when they scroll into view.
 * items: [{ value, suffix?, decimals?, pad?, label }]
 * The final value is rendered in the markup, so it is correct with reduced motion / no JS.
 */
const format = (item, value) => {
  const text = value.toFixed(item.decimals ?? 0);
  return (item.pad ? text.padStart(2, '0') : text) + (item.suffix ?? '');
};

export default function StatsStrip({ items, className = '' }) {
  const root = useRef(null);

  useReveal(root, () => {
    const counters = gsap.utils.toArray('.pg-count');

    counters.forEach((el, i) => {
      const item = items[i];
      const state = { value: 0 };
      el.textContent = format(item, 0);
      gsap.to(state, {
        value: item.value,
        duration: 1.8,
        ease: 'power2.out',
        scrollTrigger: once(el, 'top 95%'),
        onUpdate: () => { el.textContent = format(item, state.value); },
      });
    });

    gsap.from('.pg-stat', {
      autoAlpha: 0, y: 24, duration: 0.8, stagger: 0.1, ease: 'power3.out', scrollTrigger: once(root.current, 'top 95%'),
    });

    // put the real numbers back if the animation is reverted
    return () => counters.forEach((el, i) => { el.textContent = format(items[i], items[i].value); });
  }, []);

  return (
    <ul className={`pg-stats ${className}`.trim()} ref={root}>
      {items.map(item => (
        <li className="pg-stat" key={item.label}>
          <b className="pg-count">{format(item, item.value)}</b>
          <span>{item.label}</span>
        </li>
      ))}
    </ul>
  );
}

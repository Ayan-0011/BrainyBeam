import { useRef } from 'react';
import { gsap, ScrollTrigger } from '../../animations/gsapConfig.js';
import { once, revealHeads, useReveal } from '../../animations/useReveal.js';
import SectionHead from '../ui/SectionHead.jsx';

/**
 * Process steps with three layouts that share one markup:
 *   vertical - timeline with a progress line that fills on scroll (About)
 *   row      - five columns across a rule (Services)
 *   steps    - big numerals, four columns (Contact "how we start")
 * steps: [{ n, title, text, outputs? }]
 */
export default function ProcessTimeline({ variant = 'vertical', tone = 'ink', eyebrow, lines, intro, steps, id }) {
  const root = useRef(null);

  useReveal(root, () => {
    revealHeads();
    const items = gsap.utils.toArray('.pg-step');
    const list = root.current.querySelector('.pg-steps');

    if (variant === 'vertical') {
      gsap.fromTo('.pg-progress i', { scaleY: 0 }, {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: { trigger: list, start: 'top 62%', end: 'bottom 70%', scrub: true },
      });
      items.forEach(step => {
        gsap.from(step, { autoAlpha: 0, y: 40, duration: 0.9, ease: 'power3.out', scrollTrigger: once(step, 'top 88%') });
        // the number lights up while its step is in the reading zone
        ScrollTrigger.create({
          trigger: step,
          start: 'top 62%',
          end: 'bottom 62%',
          toggleClass: { targets: step, className: 'is-active' },
        });
      });
    } else {
      gsap.from('.pg-steps-rule', { scaleX: 0, transformOrigin: 'left center', duration: 1.3, ease: 'power3.inOut', scrollTrigger: once(list) });
      gsap.from(items, { autoAlpha: 0, y: 36, duration: 0.9, stagger: 0.1, ease: 'power3.out', scrollTrigger: once(list, 'top 82%') });
    }
  }, []);

  return (
    <section className={`pg-process pg-process--${variant} pg-surface pg-surface--${tone}`} id={id} ref={root}>
      <SectionHead eyebrow={eyebrow} lines={lines} intro={intro} />

      <div className="pg-steps-wrap">
        {variant === 'vertical'
          ? <span className="pg-progress" aria-hidden="true"><i /></span>
          : <span className="pg-steps-rule" aria-hidden="true" />}
        <ol className="pg-steps">
          {steps.map(step => (
            <li className="pg-step" key={step.n}>
              <span className="pg-step-n">{step.n}</span>
              <div className="pg-step-body">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                {step.outputs && (
                  <ul className="pg-step-out">
                    {step.outputs.map(output => <li key={output}>{output}</li>)}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

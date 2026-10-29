import { useState, useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Plus, Minus } from 'lucide-react';
import { gsap } from '../../animations/gsapConfig.js';

const faqs = [
  {
    q: 'What kind of projects does the studio take on?',
    a: 'We specialize in brand identities, high-performance bespoke websites, interactive e-commerce experiences, and custom web applications. We work best with forward-thinking teams and founders who value design distinction and technical craft.',
  },
  {
    q: 'How long does a typical website build take?',
    a: 'Focused design or architecture sprints typically take 2 to 4 weeks. Full end-to-end digital builds generally range between 6 to 10 weeks, depending on scope, custom animations, integrations, and content readiness.',
  },
  {
    q: 'Who will I actually be working with on our project?',
    a: 'You collaborate directly with the studio founders and senior specialists in design and engineering. We deliberately do not employ layers of account managers, so you always receive informed, immediate answers.',
  },
  {
    q: 'What technologies and frameworks do you build with?',
    a: 'We build with React 18, Vite, GSAP 3 (ScrollTrigger), Lenis smooth scrolling, modern CSS architecture, and headless CMS platforms. When appropriate, we also work with Webflow or Node.js backends based on your team’s editing needs.',
  },
  {
    q: 'How do revisions and feedback cycles work?',
    a: 'We operate in transparent weekly iterations. You review live interactive prototypes and staging links rather than static screenshots, allowing us to incorporate feedback quickly and keep the project moving forward without bottlenecks.',
  },
  {
    q: 'How do we get started with a new engagement?',
    a: 'Reach out via our contact form with a brief summary of your timeline and goals. We will schedule a focused 30-minute discovery call to assess alignment, outline the project scope, and provide a clear timeline.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const root = useRef(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {
        const once = trigger => ({ trigger, start: 'top 85%', once: true });

        gsap.from('.faq-line > span', {
          yPercent: 110,
          duration: 1.1,
          stagger: 0.12,
          ease: 'power4.out',
          scrollTrigger: once('.faq-head'),
        });

        gsap.from('.faq-eyebrow, .faq-intro', {
          autoAlpha: 0,
          y: 24,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: once('.faq-head'),
        });

        gsap.utils.toArray('.faq-item').forEach((item, i) => {
          gsap.from(item, {
            autoAlpha: 0,
            y: 30,
            duration: 0.8,
            delay: (i % 3) * 0.05,
            ease: 'power3.out',
            scrollTrigger: once(item),
          });
        });
      }, root);
      return () => ctx.revert();
    });
    return () => mm.revert();
  }, []);

  const toggle = index => {
    setOpenIndex(prev => (prev === index ? -1 : index));
  };

  return (
    <section className="faq-sec" id="faq" ref={root} aria-label="Frequently asked questions">
      <div className="faq-head">
        <span className="eyebrow faq-eyebrow">( Popular Queries )</span>
        <h2 className="faq-title">
          <span className="faq-line"><span>Quick and clear</span></span>
          <span className="faq-line"><span>answers to your <em>questions.</em></span></span>
        </h2>
        <p className="faq-intro">
          Everything you need to know about our collaboration, process, timelines, and deliverables. Clear communication from day one.
        </p>
      </div>

      <div className="faq-accordion" role="region" aria-label="FAQ items">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div className={`faq-item ${isOpen ? 'faq-item-open' : ''}`} key={index}>
              <button
                type="button"
                className="faq-question-btn"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                <span className="faq-num">0{index + 1}</span>
                <span className="faq-question-text">{item.q}</span>
                <span className="faq-icon-wrap" aria-hidden="true">
                  {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>

              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className="faq-answer-wrap"
                style={{
                  gridTemplateRows: isOpen ? '1fr' : '0fr',
                }}
              >
                <div className="faq-answer-inner">
                  <p>{item.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="faq-bottom-banner">
        <div>
          <h4>Still looking for answers or need a good chat?</h4>
          <p>Our team will guide you through our process, project specifications, and timeline estimates.</p>
        </div>
        <Link to="/contact" className="faq-call-btn">
          <span>LET'S TALK</span>
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </section>
  );
}

import { useLayoutEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { gsap } from '../../animations/gsapConfig.js';

const toolCategories = [
  {
    category: 'Engineering & Frontend',
    desc: 'Lightweight, lightning-fast rendering without unnecessary framework bloat.',
    items: ['React 18', 'Vite', 'GSAP 3', 'ScrollTrigger', 'Lenis Scroll', 'TypeScript', 'Node.js'],
  },
  {
    category: 'Design & Design Systems',
    desc: 'Scalable visual identities, fluid typography, and precise design tokens.',
    items: ['Figma', 'Design Tokens', 'Motion Prototyping', 'Art Direction', 'SVG Geometry'],
  },
  {
    category: 'Content & Platforms',
    desc: 'Modern headless architectures giving marketing teams complete publishing independence.',
    items: ['Headless CMS', 'Webflow', 'REST APIs', 'Supabase', 'Cloudflare Edge'],
  },
  {
    category: 'AI & Automation Workflows',
    desc: 'Practical automated pipelines that streamline workflows and operate 24/7.',
    items: ['OpenAI / Claude APIs', 'Automated CRM Sync', 'Voice AI Agents', 'Webhook Pipelines'],
  },
];

export default function ToolsSection() {
  const root = useRef(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {
        const once = trigger => ({ trigger, start: 'top 85%', once: true });

        gsap.from('.tools-line > span', {
          yPercent: 110,
          duration: 1.1,
          stagger: 0.12,
          ease: 'power4.out',
          scrollTrigger: once('.tools-head'),
        });

        gsap.from('.tools-eyebrow, .tools-intro', {
          autoAlpha: 0,
          y: 24,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: once('.tools-head'),
        });

        gsap.utils.toArray('.tools-cat').forEach((col, i) => {
          gsap.from(col, {
            autoAlpha: 0,
            y: 40,
            duration: 0.85,
            delay: (i % 2) * 0.08,
            ease: 'power3.out',
            scrollTrigger: once(col),
          });
        });
      }, root);
      return () => ctx.revert();
    });
    return () => mm.revert();
  }, []);

  return (
    <section className="tools-sec" id="tools" ref={root} aria-label="Tools and technology we use">
      <div className="tools-head">
        <span className="eyebrow tools-eyebrow">( Stack &amp; Craft )</span>
        <h2 className="tools-title">
          <span className="tools-line"><span>Modern tools for</span></span>
          <span className="tools-line"><span>modern <em>ambition.</em></span></span>
        </h2>
        <p className="tools-intro">
          We choose technologies that are fast, accessible, and enjoyable to maintain. No bloated dependencies, no obsolete legacy code — only resilient digital foundations.
        </p>
      </div>

      <div className="tools-grid">
        {toolCategories.map((cat, i) => (
          <article className="tools-cat" key={i}>
            <div className="tools-cat-header">
              <span className="tools-cat-num">0{i + 1}</span>
              <h3>{cat.category}</h3>
            </div>
            <p className="tools-cat-desc">{cat.desc}</p>
            <div className="tools-tag-list">
              {cat.items.map((item, idx) => (
                <span className="tools-tag" key={idx}>
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="tools-foot">
        <span>CURATED STACK / ZERO BLOAT GUARANTEE</span>
        <a href="#top" className="text-link" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          BACK TO TOP <ArrowUpRight size={14} />
        </a>
      </div>
    </section>
  );
}

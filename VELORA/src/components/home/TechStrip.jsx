import React from 'react';
import { SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiThreedotjs, SiWebgl, SiFastapi, SiPython, SiTailwindcss, SiPostgresql,
SiSocketdotio, SiCloudflare, SiDocker, SiRedis,} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

const technologies = [
  { name: 'React 19', icon: SiReact, color: '#61DAFB', desc: 'Component Architecture' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000', desc: 'Full-Stack Framework' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', desc: 'Type-Safe Code' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E', desc: 'Server Runtime' },
  { name: 'Three.js', icon: SiThreedotjs, color: '#000000', desc: 'Interactive 3D Graphics' },
  { name: 'WebGL', icon: SiWebgl, color: '#990000', desc: 'GPU Rendering' },
  { name: 'FastAPI', icon: SiFastapi, color: '#009688', desc: 'Python APIs' },
  { name: 'Python AI', icon: SiPython, color: '#3776AB', desc: 'Agentic Intelligence' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', desc: 'Modular Design Systems' },
  { name: 'Vector DB & RAG', icon: SiPostgresql, color: '#4169E1', desc: 'Semantic Knowledge' },
  { name: 'WebSockets', icon: SiSocketdotio, color: '#010101', desc: 'Realtime Data' },
  { name: 'Redis', icon: SiRedis, color: '#DC382D', desc: 'Caching & Queues' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED', desc: 'Containerised Deploys' },
  { name: 'AWS', icon: FaAws, color: '#FF9900', desc: 'Cloud Infrastructure' },
  { name: 'Cloudflare Edge', icon: SiCloudflare, color: '#F38020', desc: 'Global Scalability' },
];

function TechCard({ tech }) {
  const Icon = tech.icon;
  return (
    <div className="group flex items-center gap-3 shrink-0 px-4 py-3 rounded-xl bg-cream/80 border border-sand-border hover:border-orange hover:bg-cream hover:shadow-sm transition-colors duration-200">
      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center border border-sand-border/60">
        {/* Brand colour logo */}
        <Icon className="w-5 h-5" style={{ color: tech.color }} aria-hidden="true" />
      </div>
      <div className="flex flex-col leading-tight whitespace-nowrap">
        <span className="text-sm font-heading font-bold text-nearblack group-hover:text-orange transition-colors">
          {tech.name}
        </span>
        <span className="text-[11px] text-muted mt-0.5">{tech.desc}</span>
      </div>
    </div>
  );
}

export default function TechStrip() {
  return (
    <section
      id="capability-strip"
      className="py-10 border-y border-sand-border/80 bg-sand/30 overflow-hidden relative"
      aria-label="Technologies and Disciplines" >
      {/* Marquee keyframes live here so no tailwind.config change is needed */}
      <style>{`
        @keyframes tech-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .tech-marquee-track {
          display: flex;
          width: max-content;
          animation: tech-marquee 40s linear infinite;
        }
        .tech-marquee:hover .tech-marquee-track,
        .tech-marquee:focus-within .tech-marquee-track {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .tech-marquee-track { animation: none; }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-orange" />
          <span className="text-xs uppercase tracking-widest font-heading font-bold text-nearblack">
            Tech Stacks
          </span>
        </div>
        <p className="text-xs text-muted">
          Battle-tested modern stacks powering high-scale web products
        </p>
      </div>

      {/* Infinite slider */}
      <div
        className="tech-marquee relative"
        style={{
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          maskImage:
            'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        }}
      >
        <div className="tech-marquee-track gap-4 pr-4">
          {/* List is rendered twice; translating -50% loops seamlessly */}
          {[...technologies, ...technologies].map((tech, i) => (
            <div key={i} aria-hidden={i >= technologies.length ? 'true' : undefined}>
              <TechCard tech={tech} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
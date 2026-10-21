import React from 'react';
import { 
  Code2, 
  Cpu, 
  Database, 
  Globe2, 
  Layers, 
  Sparkles, 
  Terminal, 
  Workflow, 
  Boxes 
} from 'lucide-react';

export default function TechStrip() {
  const technologies = [
    { name: 'React 19 & Next.js', icon: Globe2, desc: 'Component Architecture' },
    { name: 'TypeScript & Node.js', icon: Code2, desc: 'Type-Safe Runtimes' },
    { name: 'Three.js & WebGL', icon: Boxes, desc: 'Interactive 3D Graphics' },
    { name: 'FastAPI & Python AI', icon: Cpu, desc: 'Agentic Intelligence' },
    { name: 'Tailwind CSS & Tokens', icon: Layers, desc: 'Modular Design Systems' },
    { name: 'Vector DBs & RAG', icon: Database, desc: 'Semantic Knowledge' },
    { name: 'Edge APIs & WebSockets', icon: Terminal, desc: 'Sub-Millisecond Data' },
    { name: 'AWS & Cloudflare Edge', icon: Workflow, desc: 'Global Scalability' },
  ];

  return (
    <section 
      id="capability-strip" 
      className="py-10 border-y border-sand-border/80 bg-sand/30 overflow-hidden relative"
      aria-label="Technologies and Disciplines"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-orange" />
          <span className="text-xs uppercase tracking-widest font-heading font-bold text-nearblack">
            Studio Engineering Disciplines
          </span>
        </div>
        <p className="text-xs text-muted">
          Battle-tested modern stacks powering high-scale web products
        </p>
      </div>

      {/* Grid on tablet & desktop, horizontally scrollable on mobile */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={index}
                className="group flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-cream/80 border border-sand-border hover:border-orange hover:bg-cream hover:shadow-sm transition-all duration-200 text-center"
              >
                <div className="w-8 h-8 rounded-lg bg-sand/50 flex items-center justify-center text-nearblack group-hover:text-orange group-hover:bg-orange/10 transition-colors mb-2">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-xs font-heading font-bold text-nearblack leading-tight group-hover:text-orange transition-colors">
                  {tech.name}
                </span>
                <span className="text-[10px] text-muted mt-1 leading-none">
                  {tech.desc}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

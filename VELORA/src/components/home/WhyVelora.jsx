import React from 'react';
import { 
  Palette, 
  Terminal, 
  Gauge, 
  Eye, 
  Cpu, 
  Compass, 
  CheckCircle2 
} from 'lucide-react';
import SectionHeading from '../common/SectionHeading';

export default function WhyVelora() {
  const pillars = [
    {
      icon: Palette,
      number: '01',
      title: 'Design-Led Engineering',
      desc: 'We never treat design as superficial makeup. Every architecture decision is rooted in user intuition, typography hierarchy, and purposeful motion.',
    },
    {
      icon: Gauge,
      number: '02',
      title: 'Performance Without Compromise',
      desc: 'Sub-second page loads, 60 FPS WebGL scenes, and strict bundle budgets. Speed is an essential design feature, not an afterthought.',
    },
    {
      icon: Terminal,
      number: '03',
      title: 'Scalable Modern Stack',
      desc: 'We engineer with type-safe React, modular design tokens, and decoupled edge architectures built to grow effortlessly with your business.',
    },
    {
      icon: Eye,
      number: '04',
      title: 'Radical Transparency',
      desc: 'No vague hand-waving or black boxes. You get direct access to sprint boards, continuous preview staging links, and honest technical guidance.',
    },
    {
      icon: Cpu,
      number: '05',
      title: 'Pragmatic AI Systems',
      desc: 'We implement practical generative workflows, semantic search, and automated data pipelines with clear citation trails and strict privacy.',
    },
    {
      icon: Compass,
      number: '06',
      title: 'WCAG AAA Accessibility',
      desc: 'True digital quality is inclusive. We build accessible keyboard navigation, semantic ARIA structures, and readable contrast ratios for everyone.',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-nearblack text-cream relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-orange/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-sand/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionHeading
            variant="light"
            eyebrow="The VELORA Difference"
            title="Why ambitious brands build with VELORA."
            highlightWord="ambitious"
            align="center"
            description="We reject generic templates and corporate bureaucracy. We operate as an elite digital technology studio pairing high aesthetic taste with deep engineering rigor."
          />
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.number}
                className="group relative p-8 rounded-2xl bg-nearblack-surface/90 border border-white/10 hover:border-orange hover:bg-nearblack-card transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-orange group-hover:bg-orange group-hover:text-white transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-heading font-bold text-sm text-sand/40 group-hover:text-orange transition-colors">
                      {pillar.number}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-cream mb-3 group-hover:text-orange transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-sand/70 text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-sand/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange" />
                  <span>Core studio standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

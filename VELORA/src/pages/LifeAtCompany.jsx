import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Coffee, 
  Laptop, 
  Sparkles, 
  Code, 
  Compass, 
  Sun, 
  Smile, 
  Users, 
  Zap, 
  ArrowRight 
} from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import FinalCTA from '../components/home/FinalCTA';

export default function LifeAtCompany() {
  const rituals = [
    {
      icon: Sun,
      title: 'Meeting-Free Focus Blocks',
      desc: 'Mornings are protected for deep focus. No back-to-back calendar tetris. Real engineering and design requires uninterrupted cognitive flow.'
    },
    {
      icon: Code,
      title: '15% Experimentation Time',
      desc: 'Every Friday afternoon is dedicated to exploring creative technology—whether testing new WebGPU shaders, fine-tuning local LLMs, or open-source tooling.'
    },
    {
      icon: Users,
      title: 'Annual Studio Offsites',
      desc: 'We gather twice a year in inspiring creative hubs to collaborate, brainstorm, cook together, and recharge our creative batteries.'
    },
    {
      icon: Coffee,
      title: 'Asynchronous Autonomy',
      desc: 'We measure thoughtful output and craft quality, not arbitrary green status dots on a messaging client.'
    }
  ];

  const illustrativeVignettes = [
    {
      title: 'The Design Lab',
      desc: 'Prototyping physics-based micro-interactions and tactile typography in Figma and browser canvases.',
      category: 'Design Craft'
    },
    {
      title: 'The Shader Room',
      desc: 'Exploring real-time GLSL fragment shaders and WebGL particle systems for next-generation brand experiences.',
      category: 'Creative Tech'
    },
    {
      title: 'The Architecture Roundtable',
      desc: 'Peer code reviews, RFC discussions, and evaluating edge compute runtimes over coffee.',
      category: 'Engineering'
    }
  ];

  return (
    <div className="w-full">
      {/* 1. Life at VELORA Hero */}
      <section className="py-16 sm:py-24 bg-cream relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="eyebrow-pill mb-6">
              <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />
              <span>Studio Culture &amp; Environment</span>
            </span>
            <h1 className="hero-headline font-heading font-extrabold text-nearblack mb-6">
              Autonomy, craft, and <span className="text-orange">deliberate focus.</span>
            </h1>
            <p className="text-lg sm:text-2xl text-muted leading-relaxed font-normal max-w-3xl">
              We've designed VELORA to be the kind of creative sanctuary where senior engineers and designers do the proudest work of their careers.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Working Philosophy Strip */}
      <section className="py-16 bg-sand/30 border-y border-sand-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rituals.map((ritual, idx) => {
              const Icon = ritual.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-cream border border-sand-border flex flex-col justify-between hover:border-orange transition-colors"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center text-orange mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading font-bold text-base text-nearblack mb-2">
                      {ritual.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted leading-relaxed">
                      {ritual.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Illustrative Studio Workspaces & Concept Vignettes */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <SectionHeading
              eyebrow="Creative Laboratories"
              title="Where ideas become tangible."
              highlightWord="tangible"
              align="left"
              description="A look inside the focus areas that define our day-to-day experimentation and product engineering."
            />
            <div className="flex-shrink-0">
              <Button to="/careers" variant="primary" icon="arrow">
                View Open Roles
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {illustrativeVignettes.map((vig, idx) => (
              <div
                key={idx}
                className="group rounded-2xl bg-sand/20 border border-sand-border p-8 hover:border-orange hover:bg-cream transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-orange/10 text-orange border border-orange/20 uppercase">
                      {vig.category}
                    </span>
                    <span className="text-xs text-muted font-mono">LAB 0{idx + 1}</span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-nearblack mb-3 group-hover:text-orange transition-colors">
                    {vig.title}
                  </h3>

                  <p className="text-sm text-muted leading-relaxed">
                    {vig.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-sand-border text-[11px] text-muted flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Illustrative Studio Vignette</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Careers Callout Banner */}
      <section className="py-20 bg-nearblack text-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-mono font-bold text-orange uppercase tracking-wider block mb-3">
            JOIN THE STUDIO
          </span>
          <h2 className="section-headline font-heading font-extrabold text-cream mb-6">
            Ready to build work you're genuinely proud of?
          </h2>
          <p className="text-base sm:text-lg text-sand/80 max-w-2xl mx-auto mb-8">
            We are always seeking exceptional frontend architects, 3D creative technologists, and product designers who value craft over corporate red tape.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button to="/careers" variant="primary" icon="arrow">
              Explore Open Positions
            </Button>
            <Button to="/about" variant="outline-light" icon="upRight">
              Read Our Mission
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

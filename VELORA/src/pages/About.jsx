import React from 'react';
import { 
  Compass, 
  Sparkles, 
  HeartHandshake, 
  Lightbulb, 
  Code2, 
  CheckCircle2, 
  ShieldCheck, 
  Terminal, 
  Cpu 
} from 'lucide-react';
import { companyValues } from '../data/company';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import FinalCTA from '../components/home/FinalCTA';

export default function About() {
  const principles = [
    {
      title: 'Designers Who Code',
      desc: 'Our design directors write clean CSS and interact with DOM trees. This eliminates translation loss and brings intricate animations to life flawlessly.'
    },
    {
      title: 'Engineers Who Care About UX',
      desc: 'Our software engineers obsess over tap targets, typographic rhythm, and spatial proportions. We refuse to compromise on visual precision.'
    },
    {
      title: 'Boutique Focus, Global Scale',
      desc: 'We purposefully remain a high-leverage studio. Our founders and senior architects remain hands-on across every single engagement.'
    }
  ];

  return (
    <div className="w-full">
      {/* 1. About Hero */}
      <section className="py-10 sm:py-10 bg-cream relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="eyebrow-pill mb-6">
              <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />
              <span>About VELORA Digital Studio</span>
            </span>
            <h1 className="hero-headline font-heading font-extrabold text-nearblack mb-6">
              Where design intentionality meets <span className="text-orange">engineering mastery.</span>
            </h1>
            <p className="text-lg sm:text-2xl text-muted leading-relaxed font-normal max-w-3xl">
              We are an independent digital technology studio founded on the belief that modern software should feel tactile, fast, and undeniably memorable.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Brand Story & Mission */}
      <section className="py-16 sm:py-24 bg-sand/20 border-y border-sand-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-mono font-bold text-orange uppercase tracking-wider block mb-2">
                ORIGIN &amp; PURPOSE
              </span>
              <h2 className="section-headline font-heading font-bold text-nearblack mb-6">
                Rejecting generic templates since day one.
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-muted leading-relaxed">
                <p>
                  VELORA was born from frustration with the modern digital agency status quo: massive layers of middle management, bloated codebases, and cookie-cutter designs that all look interchangeable.
                </p>
                <p>
                  We assembled an agile collective of senior technologists, motion designers, and product architects dedicated to crafting digital artifacts that leave lasting impressions.
                </p>
                <p>
                  We build for ambitious founders and market leaders who understand that software is their brand's primary storefront, core product, and most critical competitive moat.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-8 sm:p-10 rounded-3xl bg-cream border border-sand-border shadow-sm space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-sand-border">
                  <div className="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center text-orange font-bold font-mono">
                    V
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-nearblack">
                      The VELORA Standard
                    </h3>
                    <span className="text-xs text-muted">Concept Studio Ethos</span>
                  </div>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-nearblack/90">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-orange flex-shrink-0 mt-0.5" />
                    <span><strong>No junior handoffs:</strong> Senior architects work directly on your problem from day one.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-orange flex-shrink-0 mt-0.5" />
                    <span><strong>100% Code Ownership:</strong> Zero proprietary vendor lock-in. All IP belongs to you.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-orange flex-shrink-0 mt-0.5" />
                    <span><strong>Accessible by default:</strong> WCAG AAA compliance and keyboard ergonomics in all builds.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Studio Principles"
            title="Values that guide every line of code."
            highlightWord="code"
            align="center"
            description="Our convictions are reflected in our engineering standards, our design decisions, and how we treat our clients."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {companyValues.map((val) => (
              <div
                key={val.number}
                className="p-8 rounded-2xl bg-sand/20 border border-sand-border hover:border-orange hover:bg-cream hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs font-bold text-orange mb-3 block">
                    VALUE {val.number}
                  </span>
                  <h3 className="font-heading font-bold text-xl text-nearblack mb-3">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. How the Team Thinks & Works */}
      <section className="py-20 bg-nearblack text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionHeading
              variant="light"
              eyebrow="Team DNA"
              title="How we think, build, and operate."
              highlightWord="operate"
              align="center"
              description="A hybrid culture uniting artistic curiosity with computer science discipline."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {principles.map((p, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-nearblack-surface border border-white/10 hover:border-orange transition-colors"
              >
                <span className="text-xs font-mono font-bold text-orange block mb-3">
                  PILLAR 0{idx + 1}
                </span>
                <h3 className="font-heading font-bold text-xl text-cream mb-3">
                  {p.title}
                </h3>
                <p className="text-sand/70 text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Final CTA */}
      <FinalCTA />
    </div>
  );
}

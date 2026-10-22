import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Smartphone, 
  Server, 
  Sparkles, 
  CheckCircle2, 
  ArrowUpRight, 
  ChevronDown, 
  ChevronUp, 
  Layers, 
  ShieldCheck, 
  Zap, 
  Clock 
} from 'lucide-react';
import { services, engagementModels, servicesFAQs } from '../data/services';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import FinalCTA from '../components/home/FinalCTA';

export default function Services() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const serviceIcons = {
    'web-development': Globe,
    'mobile-applications': Smartphone,
    'custom-software': Server,
    'ai-automation': Sparkles,
  };

  return (
    <div className="w-full">
      {/* 1. Services Hero */}
      <section className="py-10 sm:py-10 bg-cream relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="eyebrow-pill mb-6">
              <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />
              <span>Full-Stack Engineering & Design Disciplines</span>
            </span>
            <h1 className="hero-headline font-heading font-extrabold text-nearblack mb-6">
              We design and engineer <span className="text-orange">digital advantage.</span>
            </h1>
            <p className="text-lg sm:text-2xl text-muted leading-relaxed font-normal max-w-3xl">
              From high-performance web applications and mobile products to bespoke enterprise software and practical AI automation, we craft software that combines visual elegance with high-scale reliability.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Studio Service Philosophy Strip */}
      <section className="py-12 bg-sand/30 border-y border-sand-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center text-orange flex-shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-base text-nearblack mb-1">
                  Speed as a Design Metric
                </h3>
                <p className="text-xs sm:text-sm text-muted">
                  Sub-second load times, 60fps interaction physics, and optimized bundle sizes baked in from sprint one.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center text-orange flex-shrink-0">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-base text-nearblack mb-1">
                  Living Design Systems
                </h3>
                <p className="text-xs sm:text-sm text-muted">
                  Shared design tokens synchronize Figma wireframes with production React components effortlessly.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center text-orange flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-base text-nearblack mb-1">
                  Enterprise Resilience
                </h3>
                <p className="text-xs sm:text-sm text-muted">
                  Type-safe TypeScript, automated integration testing, and zero-knowledge privacy standards for data integrity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3-6. Detailed Service Sections */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.id] || Sparkles;
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-32 rounded-3xl bg-sand/20 border border-sand-border p-8 sm:p-12 lg:p-16 hover:border-orange/60 transition-all duration-300"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}>
                  {/* Service Header & Narrative */}
                  <div className="lg:col-span-5">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-mono text-xs font-bold text-orange px-2.5 py-1 rounded bg-orange/10 border border-orange/20">
                        SERVICE {service.number}
                      </span>
                      <span className="text-xs font-bold text-muted uppercase tracking-wider">
                        {service.heroAccent}
                      </span>
                    </div>

                    <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-nearblack mb-4">
                      {service.title}
                    </h2>

                    <p className="font-heading text-lg font-medium text-orange mb-4">
                      {service.tagline}
                    </p>

                    <p className="text-muted text-sm sm:text-base leading-relaxed mb-8">
                      {service.fullDesc}
                    </p>

                    <div className="p-4 rounded-xl bg-cream border border-sand-border mb-8">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-muted block mb-1">
                        Ideal For
                      </span>
                      <p className="text-xs sm:text-sm font-medium text-nearblack">
                        {service.idealFor}
                      </p>
                    </div>

                    <Button to="/contact" variant="primary" icon="upRight">
                      Discuss a {service.title} Project
                    </Button>
                  </div>

                  {/* Capabilities & Tech Breakdown */}
                  <div className="lg:col-span-7 space-y-8">
                    {/* Capabilities Cards */}
                    <div>
                      <h3 className="font-heading text-xs uppercase tracking-widest text-muted font-bold mb-4 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-orange" />
                        Specific Core Capabilities
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {service.capabilities.map((cap, capIdx) => (
                          <div
                            key={capIdx}
                            className="p-4 rounded-xl bg-cream border border-sand-border hover:border-orange transition-colors"
                          >
                            <h4 className="font-heading font-bold text-sm text-nearblack mb-1">
                              {cap.name}
                            </h4>
                            <p className="text-xs text-muted leading-relaxed">
                              {cap.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Deliverables & Stack */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-sand-border">
                      {/* Deliverables */}
                      <div>
                        <h4 className="font-heading text-xs uppercase tracking-widest text-muted font-bold mb-3">
                          Tangible Deliverables
                        </h4>
                        <ul className="space-y-1.5">
                          {service.deliverables.map((item, dIdx) => (
                            <li key={dIdx} className="text-xs text-nearblack flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-orange" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack */}
                      <div>
                        <h4 className="font-heading text-xs uppercase tracking-widest text-muted font-bold mb-3">
                          Technology Stack
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {service.techStack.map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2 py-0.5 rounded text-xs bg-cream text-nearblack font-medium border border-sand-border"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. Engagement Models: How Clients Work With Us */}
      <section className="py-20 sm:py-28 bg-sand/30 border-y border-sand-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionHeading
              eyebrow="Collaboration Framework"
              title="How we partner with ambitious teams."
              highlightWord="partner"
              align="center"
              description="Flexible, transparent engagement structures designed to match your organizational stage, technical maturity, and launch roadmap."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {engagementModels.map((model, index) => (
              <div
                key={model.title}
                className="rounded-2xl bg-cream border border-sand-border p-8 flex flex-col justify-between hover:border-orange hover:shadow-md transition-all duration-200"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-orange uppercase tracking-wider block mb-2">
                    MODEL 0{index + 1}
                  </span>
                  <h3 className="font-heading text-xl font-bold text-nearblack mb-1">
                    {model.title}
                  </h3>
                  <p className="text-xs font-medium text-muted mb-4">
                    {model.subtitle}
                  </p>
                  <p className="text-sm text-muted leading-relaxed mb-6">
                    {model.desc}
                  </p>

                  <div className="pt-4 border-t border-sand-border mb-6">
                    <p className="text-[11px] uppercase font-bold text-muted tracking-wider mb-3">
                      Key Highlights
                    </p>
                    <ul className="space-y-2">
                      {model.features.map((feat, fIdx) => (
                        <li key={fIdx} className="text-xs text-nearblack/90 flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-orange flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-sand-border">
                  <span className="text-[10px] text-muted uppercase font-bold block mb-1">
                    Best Fit For
                  </span>
                  <p className="text-xs text-nearblack font-medium">
                    {model.bestFor}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Frequently Asked Questions */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Questions & Clarity"
            title="Frequently asked questions."
            highlightWord="questions"
            align="center"
            description="Clear answers about our technical delivery, intellectual property ownership, and collaboration standards."
            className="mb-16"
          />

          <div className="space-y-4">
            {servicesFAQs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-sand/20 border border-sand-border overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-heading font-bold text-base sm:text-lg text-nearblack hover:text-orange transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <div className="w-8 h-8 rounded-full bg-cream border border-sand-border flex items-center justify-center flex-shrink-0 text-nearblack">
                      {isOpen ? <ChevronUp className="w-4 h-4 text-orange" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-sm sm:text-base text-muted leading-relaxed border-t border-sand-border/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <FinalCTA />
    </div>
  );
}

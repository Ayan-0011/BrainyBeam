import React, { useState } from 'react';
import { 
  Compass, 
  Workflow, 
  PenTool, 
  Code2, 
  Rocket, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  RefreshCcw, 
  ShieldCheck, 
  Layers, 
  FileText 
} from 'lucide-react';
import { processSteps } from '../data/company';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import FinalCTA from '../components/home/FinalCTA';

export default function Process() {
  const [activeStage, setActiveStage] = useState(0);

  const phaseIcons = [Compass, Workflow, PenTool, Code2, Rocket];

  const communicationRituals = [
    {
      title: 'Bi-Weekly Observable Sprints',
      desc: 'Work is broken into focused two-week sprints. Every sprint concludes with an interactive deployment build rather than slide decks.'
    },
    {
      title: 'Real-Time Staging Previews',
      desc: 'Every pull request deploys an isolated edge preview URL so stakeholders can test features immediately on real devices.'
    },
    {
      title: 'Async-First Linear / Slack Sync',
      desc: 'Transparent asynchronous updates reduce unnecessary meetings, keeping engineers focused while maintaining total project visibility.'
    },
    {
      title: 'Design Token Synchronicity',
      desc: 'Figma token updates automatically cascade into code variables, ensuring zero discrepancy between mockups and production builds.'
    }
  ];

  const handoverChecklist = [
    'Complete clean Git repository with full commit history',
    'Figma master design systems, tokens, and prototype links',
    'Interactive Storybook component documentation',
    'Production cloud deployment scripts & Terraform configs',
    '30-day post-launch warranty covering any defects',
    'Recorded video walkthroughs for engineering & content teams'
  ];

  return (
    <div className="w-full">
      {/* 1. Process Hero */}
      <section className="py-16 sm:py-24 bg-cream relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="eyebrow-pill mb-6">
              <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />
              <span>Engineering &amp; Design Methodology</span>
            </span>
            <h1 className="hero-headline font-heading font-extrabold text-nearblack mb-6">
              How we turn chaos into <span className="text-orange">crafted precision.</span>
            </h1>
            <p className="text-lg sm:text-2xl text-muted leading-relaxed font-normal max-w-3xl">
              Great software is not an accident. Our disciplined 5-stage delivery model eliminates guesswork, ensures predictable budgets, and transforms ambitious ideas into durable digital flagships.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Interactive Process Stages Walkthrough */}
      <section className="py-16 bg-sand/30 border-y border-sand-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Phase Selection Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-12">
            {processSteps.map((step, index) => {
              const Icon = phaseIcons[index] || Compass;
              const isActive = activeStage === index;
              return (
                <button
                  key={step.step}
                  type="button"
                  onClick={() => setActiveStage(index)}
                  className={`p-4 sm:p-5 rounded-2xl text-left transition-all duration-200 border cursor-pointer ${
                    isActive
                      ? 'bg-nearblack text-cream border-nearblack shadow-lg scale-102'
                      : 'bg-cream text-nearblack hover:bg-sand/60 border-sand-border'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`font-mono text-xs font-bold ${
                      isActive ? 'text-orange' : 'text-muted'
                    }`}>
                      PHASE {step.step}
                    </span>
                    <Icon className={`w-4 h-4 ${isActive ? 'text-orange' : 'text-muted'}`} />
                  </div>
                  <div className="font-heading font-bold text-base sm:text-lg leading-tight">
                    {step.name}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Stage Detailed Breakdown */}
          {processSteps[activeStage] && (
            <div className="rounded-3xl bg-cream border border-sand-border p-8 sm:p-12 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                {/* Left Overview */}
                <div className="lg:col-span-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange/10 text-orange border border-orange/20 text-xs font-mono font-bold mb-4">
                    <span>STAGE {processSteps[activeStage].step} &bull; {processSteps[activeStage].name.toUpperCase()}</span>
                  </div>

                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-nearblack mb-4">
                    {processSteps[activeStage].tagline}
                  </h2>

                  <p className="text-muted text-sm sm:text-base leading-relaxed mb-8">
                    {processSteps[activeStage].description}
                  </p>

                  <div className="p-4 rounded-xl bg-sand/30 border border-sand-border">
                    <span className="text-[10px] uppercase font-bold text-muted tracking-wider block mb-2">
                      Tools & Frameworks
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {processSteps[activeStage].tools.map((tool, tIdx) => (
                        <span key={tIdx} className="px-2.5 py-1 rounded-full bg-cream text-xs font-medium text-nearblack border border-sand-border">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Lists: Activities & Deliverables */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-sand/20 rounded-2xl p-6 sm:p-8 border border-sand-border">
                  {/* Activities */}
                  <div>
                    <h3 className="font-heading text-xs uppercase tracking-wider text-muted font-bold mb-4 flex items-center gap-2">
                      <Workflow className="w-4 h-4 text-orange" />
                      Specific Activities
                    </h3>
                    <ul className="space-y-3">
                      {processSteps[activeStage].activities.map((act, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-nearblack/90">
                          <span className="w-1.5 h-1.5 rounded-full bg-orange flex-shrink-0 mt-2" />
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverables */}
                  <div>
                    <h3 className="font-heading text-xs uppercase tracking-wider text-muted font-bold mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-orange" />
                      Concrete Deliverables
                    </h3>
                    <ul className="space-y-3">
                      {processSteps[activeStage].deliverables.map((del, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2 text-xs sm:text-sm text-nearblack font-medium">
                          <CheckCircle2 className="w-4 h-4 text-orange flex-shrink-0 mt-0.5" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 3. Collaboration & Communication Rituals */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Radical Transparency"
            title="How we communicate and collaborate."
            highlightWord="communicate"
            align="center"
            description="We eliminate the friction of traditional agency bureaucracy. Our clients enjoy direct access to senior practitioners and daily visibility into code."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communicationRituals.map((ritual, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-sand/20 border border-sand-border hover:border-orange transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs font-bold text-orange mb-3 block">
                    RITUAL 0{idx + 1}
                  </span>
                  <h3 className="font-heading font-bold text-lg text-nearblack mb-2">
                    {ritual.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    {ritual.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Delivery, Handover & 30-Day Warranty */}
      <section className="py-20 bg-nearblack text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-mono font-bold text-orange uppercase tracking-wider block mb-3">
                POST-LAUNCH RIGOR
              </span>
              <h2 className="section-headline font-heading font-extrabold text-cream mb-6">
                Delivery and comprehensive handover.
              </h2>
              <p className="text-sand/80 text-sm sm:text-base leading-relaxed mb-6">
                We don't vanish the moment code goes live. We manage full DNS cutover, execute live traffic stress testing, and hand over every asset with structured documentation.
              </p>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-sand/90">
                <strong className="text-orange">30-Day Defect Warranty:</strong> Every VELORA release is backed by a 30-day post-launch warranty where our engineering team remediates any bugs at zero additional fee.
              </div>
            </div>

            <div className="lg:col-span-6 bg-nearblack-surface border border-white/10 rounded-2xl p-6 sm:p-8">
              <h3 className="font-heading font-bold text-lg text-cream mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-orange" />
                Handover Checklist Included
              </h3>
              <ul className="space-y-3">
                {handoverChecklist.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-sand/80">
                    <CheckCircle2 className="w-4 h-4 text-orange flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Final CTA */}
      <FinalCTA />
    </div>
  );
}

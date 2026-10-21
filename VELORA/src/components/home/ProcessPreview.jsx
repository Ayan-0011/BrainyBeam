import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { processSteps } from '../../data/company';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';

export default function ProcessPreview() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = processSteps[activeStepIndex];

  return (
    <section className="py-20 sm:py-28 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading
            eyebrow="Methodology & Rigor"
            title="A systematic path from concept to code."
            highlightWord="systematic"
            align="left"
            description="Our disciplined five-phase delivery model ensures predictable milestones, transparent communication, and zero launch surprises."
          />
          <div className="flex-shrink-0">
            <Button to="/process" variant="outline" icon="arrow">
              Explore Full Process
            </Button>
          </div>
        </div>

        {/* Interactive Step Switcher Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-4 mb-8">
          {processSteps.map((step, index) => {
            const isActive = activeStepIndex === index;
            return (
              <button
                key={step.step}
                type="button"
                onClick={() => setActiveStepIndex(index)}
                className={`p-4 rounded-xl text-left transition-all duration-200 border ${
                  isActive
                    ? 'bg-nearblack text-cream border-nearblack shadow-md'
                    : 'bg-sand/30 hover:bg-sand/60 text-nearblack border-sand-border'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono font-bold ${
                    isActive ? 'text-orange' : 'text-muted'
                  }`}>
                    {step.step}
                  </span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />}
                </div>
                <div className="font-heading font-bold text-sm sm:text-base leading-tight">
                  {step.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Spotlight Card */}
        <div className="rounded-2xl bg-sand/30 border border-sand-border p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Stage Intro */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream border border-sand-border text-xs font-mono font-bold text-nearblack mb-4">
                <span>PHASE {activeStep.step} OF 05</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-nearblack mb-3">
                {activeStep.name}: {activeStep.tagline}
              </h3>
              <p className="text-muted text-sm sm:text-base leading-relaxed mb-6">
                {activeStep.description}
              </p>
              
              <Link
                to="/process"
                className="inline-flex items-center gap-2 text-xs font-heading font-bold text-orange hover:text-orange-hover"
              >
                <span>Read detailed stage artifacts & tools</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right Column: Key Activities & Deliverables */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-cream rounded-xl p-6 border border-sand-border">
              {/* Activities */}
              <div>
                <h4 className="font-heading text-xs uppercase tracking-wider text-muted font-bold mb-4 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-orange" />
                  Key Activities
                </h4>
                <ul className="space-y-2.5">
                  {activeStep.activities.slice(0, 4).map((activity, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2 text-xs sm:text-sm text-nearblack/90">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange flex-shrink-0 mt-1.5" />
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deliverables */}
              <div>
                <h4 className="font-heading text-xs uppercase tracking-wider text-muted font-bold mb-4 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange" />
                  Tangible Deliverables
                </h4>
                <ul className="space-y-2.5">
                  {activeStep.deliverables.slice(0, 4).map((deliv, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2 text-xs sm:text-sm text-nearblack/90 font-medium">
                      <span className="text-orange text-xs mt-0.5">&bull;</span>
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

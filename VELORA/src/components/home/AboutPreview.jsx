import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Compass, Sparkles, HeartHandshake, Lightbulb } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';

export default function AboutPreview() {
  return (
    <section className="py-20 sm:py-28 bg-cream border-t border-sand-border/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Narrative Left Column */}
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Studio Manifesto"
              title="Where design intentionality meets engineering mastery."
              highlightWord="engineering"
              align="left"
              description="VELORA was founded on a simple premise: the world has enough bloated, slow, generic corporate software. We believe modern digital products deserve the same aesthetic care as physical architecture and the same reliability as aerospace instruments."
            />

            <div className="mt-8 space-y-4 text-sm sm:text-base text-muted leading-relaxed">
              <p>
                We operate as a high-caliber team of designers who code and engineers who care deeply about typography, spatial pacing, and user delight. We don't hand designs over a fence—we iterate together in code.
              </p>
              <p>
                Whether building a generative 3D brand portal or an institutional-grade financial platform, our mission remains constant: creating digital products that are undeniably fast, effortless to use, and memorable.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button to="/about" variant="primary" icon="upRight">
                Our Story & Philosophy
              </Button>
              <Button to="/life-at-company" variant="outline" icon="arrow">
                Explore Studio Culture
              </Button>
            </div>
          </div>

          {/* Visual Editorial Right Column */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl bg-sand/40 border border-sand-border p-6 sm:p-8 overflow-hidden">
              {/* Studio Ethos Card */}
              <div className="relative z-10 space-y-6">
                <div className="p-6 rounded-xl bg-cream border border-sand-border shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-orange/10 flex items-center justify-center text-orange">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <h4 className="font-heading font-bold text-base text-nearblack">
                      Independent & Creative Autonomy
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-muted">
                    We choose to stay boutique so our principals remain hands-on with every client engagement. No layers of account managers.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-cream border border-sand-border shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-orange/10 flex items-center justify-center text-orange">
                      <Compass className="w-4 h-4" />
                    </div>
                    <h4 className="font-heading font-bold text-base text-nearblack">
                      Pragmatic Innovation
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-muted">
                    We embrace experimental technologies like WebGL and agentic models only when they genuinely elevate user utility and brand distinction.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-cream border border-sand-border shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-orange/10 flex items-center justify-center text-orange">
                      <HeartHandshake className="w-4 h-4" />
                    </div>
                    <h4 className="font-heading font-bold text-base text-nearblack">
                      Enduring Craftsmanship
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-muted">
                    We write clean, well-tested TypeScript and modular CSS that your team will actually enjoy maintaining for years to come.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

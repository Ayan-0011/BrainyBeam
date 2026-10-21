import React from 'react';
import { ArrowUpRight, Sparkles, MessageSquareCode } from 'lucide-react';
import Button from '../common/Button';

export default function FinalCTA() {
  return (
    <section className="py-20 sm:py-28 bg-nearblack text-cream relative overflow-hidden">
      {/* Background Radiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-orange/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-orange mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-orange animate-ping" />
          <span>New Client Engagements Open</span>
        </div>

        <h2 className="section-headline font-heading font-extrabold text-cream mb-6 tracking-tight">
          Have an idea{' '}
          <span className="text-orange relative inline-block">
            worth building?
            <span className="absolute left-0 right-0 -bottom-1 h-1 bg-orange/40 rounded-full" />
          </span>
        </h2>

        <p className="text-base sm:text-xl text-sand/80 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Whether you're redefining an entire market or re-architecting a mission-critical platform, let's discuss how VELORA can help you make an undeniable impact.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button to="/contact" size="lg" variant="primary" icon="upRight">
            Start a project inquiry
          </Button>
          <Button to="/work" size="lg" variant="outline-light" icon="arrow">
            Explore our work
          </Button>
        </div>

        {/* Quick Inquiries Subtext */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-sand/60">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Fast Response Within 24-48 Hours
          </span>
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-orange" /> Direct Partner Access
          </span>
          <span className="flex items-center gap-1.5">
            <MessageSquareCode className="w-3.5 h-3.5 text-orange" /> Strict Confidentiality & NDAs
          </span>
        </div>
      </div>
    </section>
  );
}

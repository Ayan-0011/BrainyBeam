import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, MapPin, Sparkles } from 'lucide-react';
import Logo from '../common/Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-nearblack text-cream border-t border-nearblack-border pt-16 sm:pt-20 pb-12 relative overflow-hidden">
      {/* Subtle Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <Logo variant="light" />
              <p className="mt-5 text-sand/80 text-sm sm:text-base leading-relaxed max-w-sm">
                VELORA is an independent digital technology studio. We unite editorial design, resilient engineering, and applied intelligence to turn bold ideas into high-impact digital experiences.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-sand/90">
                <span className="w-2 h-2 rounded-full bg-orange animate-ping" />
                <span>Available for select Q1/Q2 engagements</span>
              </div>
            </div>
          </div>

          {/* Studio Navigation */}
          <div>
            <h3 className="font-heading text-xs uppercase tracking-[0.18em] text-sand/50 font-bold mb-5">
              Studio
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="text-cream/80 hover:text-orange transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-cream/80 hover:text-orange transition-colors">
                  Services & Capabilities
                </Link>
              </li>
              <li>
                <Link to="/work" className="text-cream/80 hover:text-orange transition-colors">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link to="/process" className="text-cream/80 hover:text-orange transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-cream/80 hover:text-orange transition-colors">
                  About the Studio
                </Link>
              </li>
              <li>
                <Link to="/life-at-company" className="text-cream/80 hover:text-orange transition-colors">
                  Life at VELORA
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-cream/80 hover:text-orange transition-colors inline-flex items-center gap-2">
                  <span>Careers</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-orange text-white font-bold">WE'RE HIRING</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Disciplines */}
          <div>
            <h3 className="font-heading text-xs uppercase tracking-[0.18em] text-sand/50 font-bold mb-5">
              Disciplines
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/services#web-development" className="text-cream/80 hover:text-orange transition-colors">
                  Web Applications & Flagships
                </Link>
              </li>
              <li>
                <Link to="/services#mobile-applications" className="text-cream/80 hover:text-orange transition-colors">
                  Mobile Product Engineering
                </Link>
              </li>
              <li>
                <Link to="/services#custom-software" className="text-cream/80 hover:text-orange transition-colors">
                  Custom Software & APIs
                </Link>
              </li>
              <li>
                <Link to="/services#ai-automation" className="text-cream/80 hover:text-orange transition-colors">
                  Agentic AI & Automation
                </Link>
              </li>
              <li>
                <Link to="/work/velora-design-system-core" className="text-cream/80 hover:text-orange transition-colors">
                  Design Systems & Tokens
                </Link>
              </li>
              <li>
                <Link to="/process" className="text-cream/80 hover:text-orange transition-colors">
                  Rapid Architecture Sprints
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Demo Status */}
          <div>
            <h3 className="font-heading text-xs uppercase tracking-[0.18em] text-sand/50 font-bold mb-5">
              Inquiries
            </h3>
            <div className="space-y-4 text-sm text-sand/80">
              <div>
                <p className="text-xs text-sand/50 font-medium">New Partnerships</p>
                <Link to="/contact" className="text-cream hover:text-orange transition-colors font-medium flex items-center gap-1 mt-0.5">
                  hello@velora-studio.demo
                  <ArrowUpRight className="w-3.5 h-3.5 text-orange" />
                </Link>
              </div>

              <div>
                <p className="text-xs text-sand/50 font-medium">Studio Coordinates</p>
                <p className="text-cream/80 text-xs mt-0.5 leading-relaxed">
                  Distributed Global Studio<br />
                  Fictional Demo Environment
                </p>
              </div>

              <div className="pt-2">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange text-white text-xs font-semibold hover:bg-orange-hover transition-all"
                >
                  <span>Start a Conversation</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sand/60">
          <div className="flex flex-wrap items-center gap-6">
            <span>&copy; {currentYear} VELORA Digital Studio. All rights reserved.</span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-white/5 text-[10px] text-sand/80">
              <span className="w-1.5 h-1.5 rounded-full bg-orange" /> Concept Demo
            </span>
          </div>

          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-cream transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-cream transition-colors">
              Terms of Service
            </Link>
            <Link to="/process" className="hover:text-cream transition-colors">
              Security & Methodology
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

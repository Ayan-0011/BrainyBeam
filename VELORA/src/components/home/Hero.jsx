import React from 'react';
import { motion } from 'framer-motion';
import { Layers, ShieldCheck, Zap, Move3d } from 'lucide-react';
import HeroScene from './HeroScene';
import Button from '../common/Button';

export default function Hero() {
  return (
    <section className="relative min-h-[90svh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 lg:pt-28 pb-16 lg:pb-20 overflow-hidden bg-cream">
      {/* Warm Ambient Glow Accents */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-orange/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[480px] h-[480px] bg-orange/15 rounded-full blur-[150px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Left-aligned Headline & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow Pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6"
            >
              <span className="eyebrow-pill backdrop-blur-sm bg-sand/60 border border-sand-border text-nearblack">
                <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />
                <span>Digital Studio &bull; Strategy &bull; Engineering &bull; AI</span>
              </span>
            </motion.div>

            {/* Hero Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="hero-headline font-heading font-extrabold text-nearblack tracking-[-0.04em] text-left"
            >
              We turn bold ideas into{' '}
              <span className="relative inline-block text-orange">
                digital experiences.
                <span className="absolute left-0 right-0 -bottom-1.5 h-1.5 bg-gradient-to-r from-orange via-orange/60 to-transparent rounded-full opacity-70" />
              </span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 sm:mt-8 text-base sm:text-lg lg:text-xl text-muted max-w-xl font-normal leading-relaxed text-left"
            >
              Strategy, design and technology to help ambitious brands build
              meaningful digital experiences and move forward.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 sm:mt-10 flex flex-wrap items-center justify-start gap-4"
            >
              <Button to="/contact" size="lg" variant="primary" icon="upRight">
                Start a project
              </Button>

              <Button to="/work" size="lg" variant="secondary" icon="arrow">
                Explore our work
              </Button>
            </motion.div>

            {/* Trust Badges & Tech Capability Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.6 }}
              className="mt-10 sm:mt-12 pt-8 border-t border-sand-border/80 w-full flex flex-wrap items-center gap-5 sm:gap-7 text-xs sm:text-sm text-muted"
            >
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
                <span className="font-semibold text-nearblack">Available for Q2/Q3</span>
              </div>
              <span className="hidden sm:inline text-sand-border">&bull;</span>
              <div className="flex items-center gap-1.5 font-medium">
                <Zap className="w-4 h-4 text-orange" />
                <span>60 FPS WebGL</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <Layers className="w-4 h-4 text-orange" />
                <span>Production React</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-orange" />
                <span>Enterprise Grade</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Animated Three.js Sculpture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative w-full flex flex-col items-center justify-center"
          >
            {/* Interactive Sculpture Card Container */}
            <div className="relative w-full aspect-square max-w-[520px] rounded-3xl bg-gradient-to-b from-white/70 via-white/30 to-white/10 backdrop-blur-md border border-white/60 shadow-[0_20px_50px_rgba(32,33,36,0.06)] overflow-hidden flex items-center justify-center p-2">
              
              {/* Radial Center Accent Glow */}
              <div className="absolute inset-0 bg-radial-gradient from-orange/15 via-transparent to-transparent opacity-70 pointer-events-none" />

              {/* Three.js Canvas Scene */}
              <div className="w-full h-full relative z-10">
                <HeroScene />
              </div>

              {/* Interactive Floating Pill */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-nearblack/75 backdrop-blur-md text-cream text-[11px] font-medium tracking-wide shadow-sm border border-white/10">
                  <Move3d className="w-3.5 h-3.5 text-orange animate-spin" style={{ animationDuration: '6s' }} />
                  <span>Interactive 3D &bull; Drag to rotate</span>
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

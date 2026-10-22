import React from 'react';
import { motion } from 'framer-motion';
import { Layers, ShieldCheck, Zap, Move3d } from 'lucide-react';
import HeroScene from './HeroScene';
import Button from '../common/Button';

const ease = [0.16, 1, 0.3, 1];

export default function Hero() {
  return (

    <section className="relative px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-1 pb-12 lg:pb-16 overflow-hidden bg-cream">
      {/* Warm Ambient Glow Accents */}
      <div className="absolute top-10 -left-20 w-96 h-96 bg-orange/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[480px] h-[480px] bg-orange/15 rounded-full blur-[150px] pointer-events-none" />

      {/* Container: same max-width as your navbar so left edges line up */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* Left Column: everything flush-left */}
          <div className="lg:col-span-7 flex flex-col items-start justify-self-start w-full text-left">
            {/* Eyebrow Pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="mb-5 self-start"
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
              transition={{ duration: 0.8, delay: 0.15, ease }}
              className="hero-headline font-heading font-extrabold text-nearblack tracking-[-0.04em] text-left self-start"
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
              transition={{ duration: 0.8, delay: 0.3, ease }}
              className="mt-5 sm:mt-6 text-base sm:text-lg lg:text-xl text-muted max-w-xl font-normal leading-relaxed text-left self-start"
            >
              Strategy, design and technology to help ambitious brands build
              meaningful digital experiences and move forward.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease }}
              className="mt-7 sm:mt-8 flex flex-wrap items-center justify-start gap-4 self-start"
            >
              <Button to="/contact" size="lg" variant="primary" icon="upRight">
                Start a project
              </Button>
              <Button to="/work" size="lg" variant="secondary" icon="arrow">
                Explore our work
              </Button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.6 }}
              className="mt-8 sm:mt-10 pt-6 border-t border-sand-border/80 w-full flex flex-wrap items-center justify-start gap-x-6 gap-y-3 text-xs sm:text-sm text-muted"
            >
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
                <span className="font-semibold text-nearblack">Available for Q2/Q3</span>
              </div>
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

          {/* Right Column: 3D sculpture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.25, ease }}
            className="lg:col-span-5 relative w-full flex items-center justify-center"
          >
            <div className="relative w-full aspect-square max-w-[460px] rounded-3xl bg-gradient-to-b from-white/70 via-white/30 to-white/10 backdrop-blur-md border border-white/60 shadow-[0_20px_50px_rgba(32,33,36,0.06)] overflow-hidden">
              {/* Center glow (bg-radial-gradient Tailwind me nahi hota, isliye inline style) */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(circle at 50% 50%, rgba(255,106,26,0.18) 0%, rgba(255,106,26,0) 65%)',
                }}
              />

              <div className="absolute inset-0 z-10">
                <HeroScene />
              </div>

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
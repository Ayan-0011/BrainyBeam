import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Layers, ShieldCheck, Zap } from 'lucide-react';
import HeroScene from './HeroScene';
import Button from '../common/Button';

export default function Hero() {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('capability-strip');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
<section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 pt-24 pb-28 sm:pt-28 sm:pb-24 overflow-hidden bg-cream">
  {/* Background 3D Composition */}


  {/* Ambient Gradient Highlights */}
  <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange/10 rounded-full blur-[140px] pointer-events-none -z-10" />

  {/* Main Content Area */}
  <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">
    {/* Eyebrow Label */}
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="mb-6"
    >
      <span className="eyebrow-pill backdrop-blur-sm bg-sand/60">
        <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />
        <span>Digital Studio &bull; Strategy &bull; Engineering &bull; AI</span>
      </span>
    </motion.div>

    {/* Hero Headline */}
    <motion.h1
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="hero-headline font-heading font-extrabold text-nearblack tracking-[-0.04em]"
    >
      We turn bold ideas into{" "}
      <span className="relative inline-block text-orange">
        digital experiences.
        <span className="absolute left-0 right-0 -bottom-1 h-1 bg-gradient-to-r from-orange via-orange/60 to-transparent rounded-full opacity-60" />
      </span>
    </motion.h1>

    {/* Supporting Copy */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="mt-6 sm:mt-8 text-base sm:text-xl lg:text-2xl text-muted max-w-2xl font-normal leading-relaxed"
    >
      Strategy, design and technology to help ambitious brands build
      meaningful digital experiences and move forward.
    </motion.p>

    {/* CTA Buttons */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4"
    >
      <Button to="/contact" size="lg" variant="primary" icon="upRight">
        Start a project
      </Button>

      <Button to="/work" size="lg" variant="secondary" icon="arrow">
        Explore our work
      </Button>
    </motion.div>
  </div>

  {/* Bottom Brand Details */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.7 }}
    className="absolute bottom-5 sm:bottom-7 left-0 z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted"
  >
    {/* Left Studio Detail */}
    <div className="hidden sm:flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-emerald-600" />
      <span className="font-semibold text-nearblack">VELORA LABS</span>
      <span className="text-muted/60">&mdash;</span>
      <span>Crafting modern digital artifacts</span>
    </div>

    {/* Right Capability Tags */}
    <div className="hidden sm:flex items-center gap-4 text-[11px] font-medium text-muted">
      <span className="flex items-center gap-1">
        <Zap className="w-3.5 h-3.5 text-orange" /> 60 FPS WebGL
      </span>
      <span className="flex items-center gap-1">
        <Layers className="w-3.5 h-3.5 text-orange" /> Headless React
      </span>
      <span className="flex items-center gap-1">
        <ShieldCheck className="w-3.5 h-3.5 text-orange" /> Enterprise Grade
      </span>
    </div>
  </motion.div>
</section>

  );
}

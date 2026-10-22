import React from 'react';
import { motion } from 'framer-motion';
import { Layers, ShieldCheck, Zap } from 'lucide-react';
import Button from '../common/Button';
import VantaBackground from '../animation/Vantabackground ';

const ease = [0.16, 1, 0.3, 1];

export default function Hero() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 pt-10 sm:pt-28 lg:pt-2 pb-14 lg:pb-20 overflow-hidden bg-cream">
      
      <VantaBackground
        className="absolute inset-y-0 right-0 w-full lg:w-[65%] z-0 opacity-30 lg:opacity-100 lg:[mask-image:linear-gradient(to_right,transparent,black_25%)] lg:[-webkit-mask-image:linear-gradient(to_right,transparent,black_25%)]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="flex flex-col items-start text-left w-full lg:max-w-[55%] lg:min-h-[520px] lg:justify-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="mb-5"
          >
            <span className="eyebrow-pill backdrop-blur-sm bg-sand/60 border border-sand-border text-nearblack">
              <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />
              <span>Digital Studio &bull; Strategy &bull; Engineering &bull; AI</span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="hero-headline font-heading font-extrabold text-nearblack tracking-[-0.04em] text-left"
          >
            We turn bold ideas into{' '}
            <span className="relative inline-block text-orange">
              digital experiences.
              <span className="absolute left-0 right-0 -bottom-1.5 h-1.5 bg-gradient-to-r from-orange via-orange/60 to-transparent rounded-full opacity-70" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="mt-5 sm:mt-6 text-base sm:text-lg lg:text-xl text-muted max-w-xl leading-relaxed text-left"
          >
            Strategy, design and technology to help ambitious brands build
            meaningful digital experiences and move forward.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="mt-7 sm:mt-8 w-full flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-4 [&>*]:w-full sm:[&>*]:w-auto"
          >
            <Button to="/contact" size="lg" variant="primary" icon="upRight">
              Start a project
            </Button>
            <Button to="/work" size="lg" variant="secondary" icon="arrow">
              Explore our work
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.45 }}
            className="mt-8 sm:mt-10 pt-6 border-t border-sand-border/80 w-full flex flex-wrap items-center gap-x-6 gap-y-3 text-xs sm:text-sm text-muted"
          >
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
              <span className="font-semibold text-nearblack">Available</span>
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
      </div>
    </section>
  );
}
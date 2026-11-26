import React from 'react';
import { marqueeSkills } from '../data/skillsData';
import { Sparkles } from 'lucide-react';

export default function TechMarquee() {
  // Duplicate list to ensure seamless infinite loop
  const skillsLoop = [...marqueeSkills, ...marqueeSkills, ...marqueeSkills];

  return (
    <div className="py-6 bg-slate-900 text-white border-y border-slate-800 overflow-hidden relative selection:bg-indigo-600">
      <div className="max-w-7xl mx-auto px-4 mb-2 flex items-center justify-between text-slate-400 text-xs font-mono uppercase tracking-widest">
        <span className="flex items-center gap-1.5 text-indigo-400 font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          CORE TECHNICAL STACK
        </span>
        <span className="hidden sm:inline">HOVER TO PAUSE</span>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee flex items-center gap-4 py-2">
          {skillsLoop.map((skill, index) => (
            <div
              key={`${skill}-${index}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800/80 hover:bg-indigo-600/90 border border-slate-700/60 text-slate-200 hover:text-white text-xs font-semibold tracking-wide transition-all duration-200 cursor-default whitespace-nowrap shadow-xs"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

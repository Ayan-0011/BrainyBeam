import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data/experienceData';
import { GraduationCap, Award, Calendar, BookOpen } from 'lucide-react';

export default function Education() {
  return (
    <section className="py-16 bg-white border-b border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative z-10">
            
            <div className="flex items-start gap-4">
              <div className="p-3.5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 text-indigo-400">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-indigo-300 bg-indigo-500/20 px-3 py-1 rounded-full border border-indigo-400/30 mb-2">
                  <Award className="w-3.5 h-3.5" />
                  ACADEMIC DEGREE
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  {education.degree}
                </h3>
                <p className="text-slate-300 text-sm font-medium mt-1">
                  {education.institution} • {education.location}
                </p>
              </div>
            </div>

            <div className="sm:text-right shrink-0">
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-slate-900 font-mono text-xs font-bold shadow-sm">
                <Calendar className="w-3.5 h-3.5 text-indigo-600" />
                {education.year}
              </span>
            </div>

          </div>

          <p className="text-xs sm:text-sm text-slate-300 mt-6 pt-6 border-t border-white/10 leading-relaxed">
            {education.details}
          </p>

        </div>

      </div>
    </section>
  );
}

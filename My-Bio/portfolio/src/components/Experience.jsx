import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../data/experienceData';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2, Code2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-50/50 border-b border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-md border border-indigo-100">
            04 / EXPERIENCE
          </span>
          <div className="h-px bg-slate-200 flex-1" />
        </div>

        <div className="max-w-3xl mb-16">
          <h2 className="text-section-clamp font-extrabold text-slate-900 mb-4 tracking-tight">
            Work Experience & Internship Timeline
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Hands-on practical development experience in full-stack MERN application engineering, frontend UI creation, and RESTful API integration.
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 sm:left-8 top-3 bottom-3 w-0.5 bg-slate-200" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative pl-12 sm:pl-20 group"
              >
                {/* Timeline Dot Indicator */}
                <div className="absolute left-2 sm:left-6 top-1.5 -translate-x-1/2 w-5 h-5 rounded-full bg-white border-4 border-indigo-600 shadow-md group-hover:scale-125 transition-transform" />

                {/* Main Card Box */}
                <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-2xs hover:shadow-md transition-all duration-300">
                  
                  {/* Top Badge & Dates Row */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <span className="p-2 bg-indigo-50 text-indigo-600 rounded-xl">
                        <Briefcase className="w-4 h-4" />
                      </span>
                      <div>
                        <h3 className="font-heading font-extrabold text-slate-900 text-lg sm:text-xl">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-slate-600 text-xs font-semibold">
                          <Building2 className="w-3.5 h-3.5 text-slate-400" />
                          <span>{exp.company}</span>
                          <span>•</span>
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-slate-900 text-white shadow-2xs flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Role Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2.5 mb-6">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      Key Responsibilities & Deliverables
                    </span>
                    {exp.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 font-mono text-xs font-semibold border border-slate-200/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

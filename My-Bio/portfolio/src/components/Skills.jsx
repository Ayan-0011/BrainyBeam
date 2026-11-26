import React from 'react';
import { motion } from 'framer-motion';
import { skillsCategories } from '../data/skillsData';
import { Layout, Server, Database, ShieldCheck, Cpu, Wrench, Sparkles } from 'lucide-react';

const iconMap = {
  Layout: Layout,
  Server: Server,
  Database: Database,
  ShieldCheck: ShieldCheck,
  Cpu: Cpu,
  Wrench: Wrench
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-50/50 border-b border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Index Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-md border border-indigo-100">
            02 / SKILLS
          </span>
          <div className="h-px bg-slate-200 flex-1" />
        </div>

        <div className="max-w-3xl mb-12">
          <h2 className="text-section-clamp font-extrabold text-slate-900 mb-4 tracking-tight">
            Technical Proficiency & Tooling
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Technologies, frameworks, and database architectures I actively use to develop modern full-stack web applications.
          </p>
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsCategories.map((category, catIdx) => {
            const IconComponent = iconMap[category.icon] || Layout;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.08 }}
                className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 bg-indigo-50 border border-indigo-100 text-indigo-600 rounded-xl">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="font-heading font-bold text-slate-900 text-base group-hover:text-indigo-600 transition-colors">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills Pill Tags */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`group/skill relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all duration-200 ${
                          skill.hot
                            ? 'bg-slate-900 text-white border-slate-800 hover:bg-indigo-600 hover:border-indigo-600'
                            : 'bg-slate-50 text-slate-700 border-slate-200/90 hover:bg-white hover:border-slate-300'
                        }`}
                      >
                        <span>{skill.name}</span>
                        <span className={`text-[10px] font-normal px-1.5 py-0.2 rounded ${
                          skill.hot ? 'bg-slate-800 text-indigo-300' : 'bg-slate-200/60 text-slate-500'
                        }`}>
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Layers, Code2, Database, Award, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { education } from '../data/experienceData';

const pillars = [
  {
    icon: Layers,
    title: "Full-Stack MERN Development",
    description: "Architecting end-to-end web applications combining React single-page applications with Node.js and Express backend servers."
  },
  {
    icon: Code2,
    title: "Modern React & UI Systems",
    description: "Crafting highly responsive, accessible, and interactive user interfaces leveraging React, TypeScript, and Tailwind CSS."
  },
  {
    icon: Database,
    title: "REST APIs & Data Modeling",
    description: "Designing structured JSON API endpoints, JWT authentication mechanisms, and MongoDB Mongoose document schemas."
  },
  {
    icon: Award,
    title: "Problem Solving & DSA",
    description: "Applying strong computer science fundamentals, data structures, and algorithmic thinking to debug and optimize software."
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white border-b border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Index Header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-md border border-indigo-100">
            01 / ABOUT
          </span>
          <div className="h-px bg-slate-200 flex-1" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Main Editorial Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6"
          >
            <h2 className="text-section-clamp font-extrabold text-slate-900 mb-6 tracking-tight">
              Driven by curiosity, clean code, and user-centric web engineering.
            </h2>

            <div className="space-y-4 text-slate-600 text-base leading-relaxed">
              <p>
                I'm a <strong className="text-slate-900 font-semibold">BCA Graduate</strong> (Sardar Patel University, 2025) and <strong className="text-slate-900 font-semibold">MERN Stack Developer</strong> focused on creating modern, responsive, and practical web applications.
              </p>
              <p>
                Currently working as a <strong className="text-slate-900 font-semibold">MERN Stack Intern at BrainyBeam</strong>, I spend my time transforming complex ideas into production-ready web platforms using React, Node.js, Express, and MongoDB.
              </p>
              <p>
                Whether it's building role-based dashboards, integrating secure HTTP-only cookies, or structuring custom API endpoints, I aim for high standards of UI refinement and clean backend architecture.
              </p>
            </div>

            {/* Academic Credential Highlight Box */}
            <div className="mt-8 p-6 bg-slate-50 border border-slate-200 rounded-2xl flex items-start gap-4">
              <div className="p-3 bg-white border border-slate-200 rounded-xl text-indigo-600 shadow-2xs">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-wider">
                  Degree & Education
                </span>
                <h3 className="font-heading font-bold text-slate-900 text-base mt-0.5">
                  {education.degree}
                </h3>
                <p className="text-sm text-slate-600 font-medium">
                  {education.institution} • {education.year}
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Focus: Web Engineering, Data Structures & Algorithms, DBMS, Software Design.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right 4 Pillar Cards Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 bg-slate-50/70 hover:bg-white border border-slate-200/80 hover:border-indigo-200 rounded-2xl transition-all duration-300 shadow-2xs hover:shadow-md group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-800 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-all duration-200 mb-4 shadow-2xs">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-slate-900 text-base mb-2 group-hover:text-indigo-600 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

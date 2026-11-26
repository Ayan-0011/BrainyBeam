import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projectsData';
import ProjectCard from './ProjectCard';
import { ChevronLeft, ChevronRight, Sparkles, Layers } from 'lucide-react';

export default function ProjectsHorizontal({ onSelectProject }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  const handleNext = () => {
    setActiveIndex((prev) => (prev < projectsData.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : projectsData.length - 1));
  };

  return (
    <section id="projects" className="py-24 bg-white border-b border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-md border border-indigo-100">
              03 / PROJECTS
            </span>
            <div className="h-px bg-slate-200 w-24 sm:w-48" />
          </div>

          {/* Active Counter & Navigation Arrows */}
          <div className="flex items-center gap-4">
            <div className="text-xs font-mono font-bold text-slate-500">
              <span className="text-slate-900 text-sm">{String(activeIndex + 1).padStart(2, '0')}</span> / {String(projectsData.length).padStart(2, '0')}
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePrev}
                className="p-2 bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 rounded-xl text-slate-700 transition-colors border border-slate-200/80 cursor-pointer"
                title="Previous Project"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 rounded-xl text-slate-700 transition-colors border border-slate-200/80 cursor-pointer"
                title="Next Project"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mb-10">
          <h2 className="text-section-clamp font-extrabold text-slate-900 mb-3 tracking-tight">
            Featured Projects & Engineering Work
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Production-grade web applications built with MERN stack, React, TypeScript, and database architectures. Click any project card to view complete architecture diagrams and case studies.
          </p>
        </div>

        {/* Progress Tracker Bar */}
        <div className="w-full bg-slate-100 h-1.5 rounded-full mb-8 overflow-hidden">
          <motion.div
            className="h-full bg-indigo-600 rounded-full"
            animate={{ width: `${((activeIndex + 1) / projectsData.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Desktop & Mobile Interactive Cards Carousel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`transition-all duration-300 ${
                activeIndex === idx ? 'ring-2 ring-indigo-600/30 rounded-3xl scale-[1.01]' : 'opacity-90'
              }`}
              onClick={() => setActiveIndex(idx)}
            >
              <ProjectCard project={project} onSelectProject={onSelectProject} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

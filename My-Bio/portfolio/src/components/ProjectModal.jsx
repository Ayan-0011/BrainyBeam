import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, AlertCircle, Cpu, Database, Server, Code, Sparkles, Layers } from 'lucide-react';
import { Github } from './SocialIcons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 lg:p-8">
        
        {/* Backdrop Blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.1 }}
          className="relative bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header Close Button & Tag Bar */}
          <div className="p-6 sm:p-8 pb-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-md border border-indigo-100">
                CASE STUDY {project.number}
              </span>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider hidden sm:inline">
                {project.category}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-slate-500 hover:text-slate-900 bg-white hover:bg-slate-200/80 rounded-xl transition-colors border border-slate-200/80 cursor-pointer"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
            
            {/* Title & Actions Row */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
                  {project.title}
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed max-w-2xl">
                  {project.shortDescription}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-xl font-semibold text-xs inline-flex items-center gap-2 transition-colors border border-slate-200"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub Repo</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold text-xs inline-flex items-center gap-2 shadow-sm transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                Tech Stack & Libraries
              </span>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-xl bg-white text-slate-800 font-mono text-xs font-semibold border border-slate-200 shadow-2xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Overview & Problem & Solution Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/80">
                <div className="flex items-center gap-2 mb-3 text-rose-600 font-bold text-sm">
                  <AlertCircle className="w-4 h-4" />
                  <span>The Problem</span>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-6 bg-emerald-50/60 rounded-2xl border border-emerald-200/80">
                <div className="flex items-center gap-2 mb-3 text-emerald-700 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>The Technical Solution</span>
                </div>
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Architecture Diagram Box */}
            <div className="p-6 bg-slate-900 text-white rounded-3xl border border-slate-800">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Layers className="w-4 h-4" />
                  SYSTEM ARCHITECTURE DIAGRAM
                </span>
                <span className="text-[11px] font-mono text-slate-400">Data Flow Pipeline</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center text-xs font-mono">
                <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/70">
                  <Code className="w-4 h-4 text-sky-400 mx-auto mb-1" />
                  <span className="text-sky-300 font-bold block mb-1">Frontend SPA</span>
                  <span className="text-[10px] text-slate-400 block">{project.architecture?.frontend?.split(' ')[0] || 'React SPA'}</span>
                </div>

                <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/70">
                  <Cpu className="w-4 h-4 text-indigo-400 mx-auto mb-1" />
                  <span className="text-indigo-300 font-bold block mb-1">REST API Layer</span>
                  <span className="text-[10px] text-slate-400 block">Axios / JSON HTTP</span>
                </div>

                <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/70">
                  <Server className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                  <span className="text-emerald-300 font-bold block mb-1">Backend Server</span>
                  <span className="text-[10px] text-slate-400 block">Node.js + Express</span>
                </div>

                <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/70">
                  <Database className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                  <span className="text-amber-300 font-bold block mb-1">Database Storage</span>
                  <span className="text-[10px] text-slate-400 block">MongoDB / PostgreSQL</span>
                </div>
              </div>
            </div>

            {/* Key Features List */}
            <div>
              <h3 className="font-heading font-bold text-slate-900 text-lg mb-4">
                Key Platform Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/60 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges & Learnings */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <h3 className="font-heading font-bold text-slate-900 text-lg">
                Engineering Challenges & Key Learnings
              </h3>
              <div className="space-y-3">
                {project.challenges?.map((chal, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-700">
                    <strong className="text-slate-900 font-semibold block mb-1">Challenge #{idx + 1}</strong>
                    <p>{chal}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Modal Footer Bar */}
          <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
            <span className="text-xs text-slate-500 font-mono">Mahmad Ayan Ansari Portfolio</span>
            <button
              onClick={onClose}
              className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-semibold text-xs transition-colors cursor-pointer"
            >
              Close Case Study
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}

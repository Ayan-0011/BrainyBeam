import React from 'react';
import { ExternalLink, ArrowRight, Layers, CheckCircle2 } from 'lucide-react';
import { Github } from './SocialIcons';

export default function ProjectCard({ project, onSelectProject }) {
  return (
    <div className="bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col h-full group">
      
      {/* Top Visual Image Header */}
      <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-900">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

        {/* Top Badges Overlay */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <span className="text-xs font-mono font-bold text-white bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
            {project.number}
          </span>
          <span className={`text-xs font-bold px-3 py-1 rounded-full backdrop-blur-md border ${
            project.tag === 'Flagship Project'
              ? 'bg-indigo-600/90 text-white border-indigo-400'
              : 'bg-emerald-600/90 text-white border-emerald-400'
          }`}>
            {project.tag}
          </span>
        </div>

        {/* Bottom Category Overlay */}
        <div className="absolute bottom-3 left-4">
          <span className="text-xs font-semibold text-slate-200 bg-slate-900/60 backdrop-blur-md px-2.5 py-1 rounded-md">
            {project.category}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
            {project.title}
          </h3>

          <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
            {project.shortDescription}
          </p>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 font-mono text-[11px] font-semibold border border-slate-200/80"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="pt-6 border-t border-slate-100 flex items-center justify-between gap-3">
          <button
            onClick={() => onSelectProject(project)}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-900 hover:bg-indigo-600 text-white text-xs font-semibold rounded-xl shadow-2xs transition-all duration-200 cursor-pointer group/btn"
          >
            <span>Case Study</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
          </button>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/80 rounded-xl transition-colors text-xs"
                title="View Source Code"
              >
                <Github className="w-4 h-4" />
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-indigo-600 hover:text-indigo-700 bg-indigo-50 hover:bg-indigo-100 rounded-xl transition-colors text-xs flex items-center gap-1 font-semibold"
                title="Open Live Application"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

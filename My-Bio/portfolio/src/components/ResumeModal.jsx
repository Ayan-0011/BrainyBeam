import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Copy, Check, FileText, Mail, MapPin, Phone, ExternalLink, Printer } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';
import { personalInfo, education, experiences } from '../data/experienceData';
import { projectsData } from '../data/projectsData';

export default function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrintDownload = () => {
    window.print();
  };

  const handleCopyResumeText = () => {
    const text = `
MAHMAD AYAN ANSARI
MERN Stack Developer | React.js | Node.js | Express | MongoDB
Location: Ahmedabad, Gujarat, India
Email: ${personalInfo.email}
GitHub: ${personalInfo.github} | LinkedIn: ${personalInfo.linkedin}

SUMMARY:
Motivated MERN Stack Developer focused on building modern, responsive, and scalable web applications using React, Node.js, Express, and MongoDB. Proven track record of developing role-based platforms and single-page applications.

EDUCATION:
${education.degree} - ${education.institution} (${education.year})

EXPERIENCE:
- MERN Stack Intern @ BrainyBeam (2026 - Present)
  Building full-stack web applications, REST APIs, MongoDB models, and responsive React interfaces.

PROJECTS:
1. Fleet Management System (MERN Stack, JWT Auth, Role-based Access Control)
2. Lucky Hair Style - Salon Appointment System (React, TypeScript, Supabase, PostgreSQL)
3. Zaptro E-commerce Platform (React, Context API, Clerk Auth, REST API)

SKILLS:
Frontend: React.js, JavaScript (ES6+), TypeScript, Tailwind CSS, HTML5, CSS3
Backend: Node.js, Express.js, REST APIs, MVC Architecture
Database: MongoDB, Mongoose, PostgreSQL, Supabase
Auth & Tools: JWT, HTTP-Only Cookies, Git, GitHub, Postman, Vercel
`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 lg:p-8">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-md"
        />

        {/* Modal Outer Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.1 }}
          className="relative bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 max-h-[92vh] flex flex-col"
        >
          {/* Top Control Bar */}
          <div className="p-4 sm:p-6 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="p-2 bg-indigo-50 text-indigo-600 rounded-xl">
                <FileText className="w-5 h-5" />
              </span>
              <div>
                <h3 className="font-heading font-bold text-slate-900 text-sm sm:text-base">
                  Curriculum Vitae / ATS Resume
                </h3>
                <span className="text-[11px] text-slate-500 font-mono">
                  Verified Recruiter Format • Updated 2026
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyResumeText}
                className="px-3.5 py-2 bg-white hover:bg-slate-100 text-slate-700 rounded-xl font-semibold text-xs border border-slate-200 inline-flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy Text'}</span>
              </button>

              <button
                onClick={handlePrintDownload}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold text-xs inline-flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / Download PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-slate-900 bg-white hover:bg-slate-100 rounded-xl border border-slate-200 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Body */}
          <div className="p-6 sm:p-10 overflow-y-auto font-sans space-y-6 text-slate-800 bg-white print:p-0">
            
            {/* Resume Header */}
            <div className="border-b pb-6 border-slate-200">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {personalInfo.name}
              </h1>
              <p className="text-indigo-600 font-bold text-base mt-1">
                {personalInfo.title}
              </p>
              
              <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-600 mt-3">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  {personalInfo.location}
                </span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  {personalInfo.email}
                </span>
                <a href={personalInfo.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-slate-800 hover:underline">
                  <Github className="w-3.5 h-3.5 text-slate-400" />
                  github.com/ayan-ansari
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-indigo-600 hover:underline">
                  <Linkedin className="w-3.5 h-3.5 text-indigo-500" />
                  linkedin.com/in/ayan-ansari
                </a>
              </div>
            </div>

            {/* Profile Summary */}
            <div>
              <h2 className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-wider mb-2">
                PROFESSIONAL SUMMARY
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Detail-oriented MERN Stack Developer with hands-on experience building scalable, responsive web applications using React, Node.js, Express, and MongoDB. Passionate about writing clean, maintainable code, implementing secure JWT authentication, and integrating RESTful APIs. Currently gaining real-world industry experience as a MERN Stack Intern at BrainyBeam.
              </p>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-wider mb-3">
                TECHNICAL EXPERIENCE
              </h2>
              <div className="space-y-4">
                {experiences.map((exp) => (
                  <div key={exp.id} className="border-l-2 border-indigo-200 pl-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-slate-900 text-sm">
                        {exp.role} — <span className="text-indigo-600 font-semibold">{exp.company}</span>
                      </h3>
                      <span className="text-xs font-mono text-slate-500 font-semibold">{exp.period}</span>
                    </div>
                    <ul className="mt-2 space-y-1 text-xs text-slate-700 list-disc list-inside">
                      {exp.highlights.slice(0, 4).map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Projects */}
            <div>
              <h2 className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-wider mb-3">
                KEY FEATURED PROJECTS
              </h2>
              <div className="space-y-3">
                {projectsData.map((proj) => (
                  <div key={proj.id} className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-bold text-slate-900 text-xs sm:text-sm">
                        {proj.title}
                      </h3>
                      <span className="text-[11px] font-mono text-indigo-600 font-bold">{proj.category}</span>
                    </div>
                    <p className="text-xs text-slate-600 mb-2">{proj.shortDescription}</p>
                    <div className="flex flex-wrap gap-1">
                      {proj.techStack.map((t) => (
                        <span key={t} className="text-[10px] bg-white text-slate-700 font-mono px-2 py-0.5 rounded border border-slate-200">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Skills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div>
                <h2 className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-wider mb-2">
                  EDUCATION
                </h2>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">{education.degree}</h3>
                  <p className="text-xs text-slate-600">{education.institution} • {education.year}</p>
                </div>
              </div>

              <div>
                <h2 className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-wider mb-2">
                  CORE COMPETENCIES
                </h2>
                <p className="text-xs text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-200 font-mono">
                  React.js, Node.js, Express.js, MongoDB, TypeScript, JavaScript (ES6+), REST APIs, JWT Auth, Tailwind CSS, Supabase, Git/GitHub.
                </p>
              </div>
            </div>

          </div>

          {/* Footer Bar */}
          <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
            <span className="text-xs text-slate-500 font-mono">Mahmad Ayan Ansari • Developer Resume</span>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold cursor-pointer"
            >
              Close Viewer
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}

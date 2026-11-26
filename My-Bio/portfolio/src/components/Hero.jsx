import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileText, Terminal, Sparkles, CheckCircle, Code, Server, Database, Copy, Check } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';

export default function Hero({ onOpenResume }) {
  const [copied, setCopied] = useState(false);

  const codeSnippet = `// Ayan Ansari - MERN Stack Developer
const developer = {
  name: "Mahmad Ayan Ansari",
  role: "MERN Stack Developer",
  location: "Ahmedabad, Gujarat, India",
  education: "BCA (2025) - Sardar Patel University",
  stack: ["React.js", "Node.js", "Express.js", "MongoDB", "TypeScript"],
  status: "Available for MERN & Frontend Roles"
};`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="home" className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden bg-grid-pattern">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Status Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-2xs mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold text-slate-700 tracking-wider uppercase">
                MERN STACK DEVELOPER
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                Available for roles
              </span>
            </div>

            {/* Expressive Main Heading */}
            <h1 className="text-hero-clamp font-extrabold text-slate-900 mb-6 tracking-tight">
              Building modern web experiences with <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-800 bg-clip-text text-transparent">code, creativity</span> & problem solving.
            </h1>

            {/* Supporting Bio Paragraph */}
            <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed font-normal">
              I'm <strong className="text-slate-900 font-semibold">Ayan Ansari</strong>, a developer focused on building responsive and scalable web applications with React, Node.js, Express, and MongoDB.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-slate-900 hover:bg-indigo-600 text-white rounded-2xl font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-95"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>

              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-900 border border-slate-200/90 rounded-2xl font-semibold text-sm shadow-2xs hover:shadow-sm transition-all duration-200 cursor-pointer active:scale-95"
              >
                <FileText className="w-4 h-4 text-indigo-600" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social Links & Quick Profile Stats */}
            <div className="flex items-center gap-6 pt-6 border-t border-slate-200/60 w-full">
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/ayan-ansari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-200/80 rounded-xl transition-all shadow-2xs"
                  title="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/ayan-ansari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 text-slate-600 hover:text-indigo-600 bg-white hover:bg-slate-100 border border-slate-200/80 rounded-xl transition-all shadow-2xs"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>

              <div className="h-6 w-px bg-slate-200" />

              <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  BCA 2025 Graduate
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  BrainyBeam Intern
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Visual Interactive Developer Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Ambient Floating Tech Stack Pills */}
            <div className="absolute -top-4 -right-2 z-20 animate-float-slow hidden sm:block">
              <span className="px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/90 text-xs font-bold text-slate-800 shadow-md flex items-center gap-1.5">
                <Code className="w-3.5 h-3.5 text-indigo-600" />
                React.js & TS
              </span>
            </div>

            <div className="absolute -bottom-4 -left-2 z-20 animate-float-slow hidden sm:block" style={{ animationDelay: '2s' }}>
              <span className="px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/90 text-xs font-bold text-slate-800 shadow-md flex items-center gap-1.5">
                <Server className="w-3.5 h-3.5 text-emerald-600" />
                Node.js & Express
              </span>
            </div>

            <div className="absolute top-1/2 -right-6 z-20 animate-float-slow hidden sm:block" style={{ animationDelay: '3.5s' }}>
              <span className="px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/90 text-xs font-bold text-slate-800 shadow-md flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-amber-600" />
                MongoDB
              </span>
            </div>

            {/* Developer Code Terminal Window */}
            <div className="bg-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-800 text-slate-100 font-code relative overflow-hidden">
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                    developer.config.ts
                  </span>
                </div>

                <button
                  onClick={handleCopyCode}
                  className="p-1.5 hover:bg-slate-800 text-slate-400 hover:text-slate-200 rounded-lg transition-colors text-xs flex items-center gap-1"
                  title="Copy snippet"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-[10px] text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Code Content */}
              <pre className="text-xs leading-relaxed overflow-x-auto text-slate-300">
                <code>
                  <span className="text-slate-500">// MERN Stack Engineer Profile</span>{'\n'}
                  <span className="text-indigo-400">const</span> <span className="text-amber-300">developer</span> = {'{\n'}
                  {'  '}<span className="text-sky-300">name</span>: <span className="text-emerald-300">"Mahmad Ayan Ansari"</span>,{'\n'}
                  {'  '}<span className="text-sky-300">role</span>: <span className="text-emerald-300">"MERN Stack Developer"</span>,{'\n'}
                  {'  '}<span className="text-sky-300">location</span>: <span className="text-emerald-300">"Ahmedabad, India"</span>,{'\n'}
                  {'  '}<span className="text-sky-300">education</span>: <span className="text-emerald-300">"BCA (2025)"</span>,{'\n'}
                  {'  '}<span className="text-sky-300">stack</span>: [{'\n'}
                  {'    '}<span className="text-emerald-300">"React.js"</span>, <span className="text-emerald-300">"Node.js"</span>,{'\n'}
                  {'    '}<span className="text-emerald-300">"Express.js"</span>, <span className="text-emerald-300">"MongoDB"</span>,{'\n'}
                  {'    '}<span className="text-emerald-300">"TypeScript"</span>, <span className="text-emerald-300">"REST APIs"</span>{'\n'}
                  {'  '}],{'\n'}
                  {'  '}<span className="text-sky-300">internship</span>: <span className="text-emerald-300">"BrainyBeam MERN Intern"</span>,{'\n'}
                  {'  '}<span className="text-sky-300">status</span>: <span className="text-emerald-300">"Ready to Deploy 🚀"</span>{'\n'}
                  {'}'};{'\n\n'}
                  <span className="text-indigo-400">export default</span> developer;
                </code>
              </pre>

              {/* Bottom Quick Console Output */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  Compiled successfully in 42ms
                </span>
                <span className="text-slate-500">MERN Stack 2026</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Mail, Heart, ArrowUp } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900 selection:bg-indigo-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-slate-900">
          
          {/* Brand Signature */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-heading font-extrabold text-lg shadow-md">
              AA
            </div>
            <div>
              <h3 className="font-heading font-bold text-white text-lg tracking-tight">
                Mahmad Ayan Ansari
              </h3>
              <p className="text-xs text-slate-500 font-mono">
                MERN Stack Developer • Ahmedabad, India
              </p>
            </div>
          </div>

          {/* Core Tech Pill Tags */}
          <div className="flex flex-wrap gap-2 text-xs font-mono">
            <span className="px-3 py-1 bg-slate-900 text-slate-300 rounded-full border border-slate-800">React.js</span>
            <span className="px-3 py-1 bg-slate-900 text-slate-300 rounded-full border border-slate-800">Node.js</span>
            <span className="px-3 py-1 bg-slate-900 text-slate-300 rounded-full border border-slate-800">Express</span>
            <span className="px-3 py-1 bg-slate-900 text-slate-300 rounded-full border border-slate-800">MongoDB</span>
            <span className="px-3 py-1 bg-slate-900 text-slate-300 rounded-full border border-slate-800">TypeScript</span>
          </div>

          {/* Top Scroll Button */}
          <button
            onClick={scrollToTop}
            className="p-3 bg-slate-900 hover:bg-indigo-600 text-slate-400 hover:text-white rounded-xl border border-slate-800 transition-all cursor-pointer self-end md:self-auto"
            title="Scroll to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} Mahmad Ayan Ansari. Engineered with precision & care.
          </div>

          <div className="flex items-center gap-6">
            <a href="https://github.com/ayan-ansari" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com/in/ayan-ansari" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <button onClick={onOpenResume} className="hover:text-indigo-400 transition-colors cursor-pointer">
              Resume CV
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

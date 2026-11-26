import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechMarquee from './components/TechMarquee';
import About from './components/About';
import Skills from './components/Skills';
import ProjectsHorizontal from './components/ProjectsHorizontal';
import ProjectModal from './components/ProjectModal';
import Experience from './components/Experience';
import Education from './components/Education';
import ResumeModal from './components/ResumeModal';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { FileText, Mail, ArrowRight, Sparkles } from 'lucide-react';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  // Top Page Scroll Progress Indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#0F172A] font-sans relative selection:bg-indigo-600 selection:text-white">
      
      {/* Top Page Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-blue-600 to-indigo-600 z-50 transform-gpu origin-left"
        style={{ scaleX }}
      />

      {/* Floating Sticky Navigation Bar */}
      <Navbar onOpenResume={() => setResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero onOpenResume={() => setResumeModalOpen(true)} />

        {/* Continuous Tech Stack Marquee */}
        <TechMarquee />

        {/* About Section */}
        <About />

        {/* Categorized Skills Section */}
        <Skills />

        {/* Featured Projects Showcase Section */}
        <ProjectsHorizontal onSelectProject={(proj) => setSelectedProject(proj)} />

        {/* Experience Timeline Section */}
        <Experience />

        {/* Education Section */}
        <Education />

        {/* Dedicated Resume CTA Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 text-white relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-indigo-300 text-xs font-mono font-bold mb-6 border border-white/10">
              <Sparkles className="w-3.5 h-3.5" />
              RECRUITER QUICK ACTION
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight">
              Interested in reviewing Ayan's resume or full profile?
            </h2>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
              Download the ATS-friendly one-page resume or initiate a direct discussion regarding MERN stack roles, frontend development, or internship opportunities.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => setResumeModalOpen(true)}
                className="px-8 py-4 bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm rounded-2xl shadow-lg transition-all duration-200 cursor-pointer inline-flex items-center gap-2 active:scale-95"
              >
                <FileText className="w-4 h-4 text-indigo-600" />
                <span>View / Download Resume</span>
              </button>

              <a
                href="#contact"
                className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm rounded-2xl shadow-lg transition-all duration-200 cursor-pointer inline-flex items-center gap-2 active:scale-95 border border-indigo-500"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Ayan</span>
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setResumeModalOpen(true)} />

      {/* Interactive Project Case Study Overlay Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Interactive ATS Resume Viewer Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

    </div>
  );
}

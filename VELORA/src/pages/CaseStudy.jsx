import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowUpRight, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  ChevronRight, 
  Sparkles, 
  AlertCircle 
} from 'lucide-react';
import { projects } from '../data/projects';
import Button from '../components/common/Button';
import FinalCTA from '../components/home/FinalCTA';

export default function CaseStudy() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  // Graceful fallback for unknown project slug
  if (!project) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-20 bg-cream">
        <div className="w-16 h-16 rounded-2xl bg-orange/10 flex items-center justify-center text-orange mb-6">
          <AlertCircle className="w-8 h-8" />
        </div>
        <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-nearblack mb-4">
          Case Study Not Found
        </h1>
        <p className="text-muted text-base max-w-md mb-8">
          The requested case study "{slug}" could not be located in our portfolio archive.
        </p>
        <Button to="/work" variant="primary" icon="arrow">
          Return to Selected Work
        </Button>
      </div>
    );
  }

  // Related projects (excluding current project)
  const relatedProjects = projects.filter(p => p.slug !== slug).slice(0, 2);

  return (
    <article className="w-full">
      {/* 1. Breadcrumbs & Header Section */}
      <section className="py-12 sm:py-20 bg-cream border-b border-sand-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-muted uppercase tracking-wider mb-8" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-orange transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-sand-border" />
            <Link to="/work" className="hover:text-orange transition-colors">
              Work
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-sand-border" />
            <span className="text-nearblack font-bold truncate max-w-xs sm:max-w-md">
              {project.title}
            </span>
          </nav>

          {/* Project Title & Subtitle */}
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-orange text-white text-xs font-heading font-bold uppercase tracking-wider">
                {project.category}
              </span>
              <span className="text-xs font-mono font-semibold text-muted">
                {project.year} &bull; {project.client}
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-sand/60 text-nearblack border border-sand-border">
                Concept Case Study
              </span>
            </div>

            <h1 className="hero-headline font-heading font-extrabold text-nearblack mb-6">
              {project.title}
            </h1>

            <p className="text-lg sm:text-2xl text-muted leading-relaxed font-normal">
              {project.subtitle}
            </p>
          </div>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 mt-10 border-t border-sand-border">
            <div>
              <span className="text-xs uppercase font-bold text-muted tracking-wider block mb-1">
                Client / Initiative
              </span>
              <span className="text-sm sm:text-base font-heading font-bold text-nearblack">
                {project.client}
              </span>
            </div>
            <div>
              <span className="text-xs uppercase font-bold text-muted tracking-wider block mb-1">
                Discipline
              </span>
              <span className="text-sm sm:text-base font-heading font-bold text-nearblack">
                {project.category}
              </span>
            </div>
            <div>
              <span className="text-xs uppercase font-bold text-muted tracking-wider block mb-1">
                Timeline
              </span>
              <span className="text-sm sm:text-base font-heading font-bold text-nearblack">
                12 Weeks Sprint &bull; {project.year}
              </span>
            </div>
            <div>
              <span className="text-xs uppercase font-bold text-muted tracking-wider block mb-1">
                Core Stack
              </span>
              <span className="text-sm sm:text-base font-heading font-bold text-nearblack truncate block">
                {project.tags.slice(0, 3).join(', ')}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Hero Project Visual & Metric Callouts */}
      <section className="py-12 bg-sand/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden bg-nearblack border border-sand-border shadow-2xl relative">
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-[400px] sm:h-[580px] object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-nearblack/80 via-transparent to-transparent" />

            {/* Illustrative Telemetry Metrics */}
            {project.demoMetrics && (
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {project.demoMetrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-nearblack/85 backdrop-blur-md border border-white/10"
                  >
                    <span className="font-heading font-extrabold text-2xl sm:text-3xl text-orange block mb-1">
                      {metric.value}
                    </span>
                    <span className="font-heading font-bold text-xs text-cream block mb-0.5">
                      {metric.label}
                    </span>
                    <span className="text-[10px] text-sand/60 block">
                      {metric.detail}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. Narrative Deep Dive: Objective, Challenge, Solution */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Section: The Objective */}
          <div>
            <span className="text-xs font-mono font-bold text-orange uppercase tracking-wider block mb-2">
              01 &bull; PROBLEM &amp; OBJECTIVE
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-nearblack mb-4">
              The Strategic Challenge
            </h2>
            <p className="text-base sm:text-lg text-muted leading-relaxed mb-6">
              {project.objective}
            </p>
            <div className="p-6 rounded-2xl bg-sand/30 border border-sand-border">
              <h3 className="font-heading font-bold text-sm text-nearblack mb-2 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-orange" />
                Key Technical Hurdle
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {project.challenge}
              </p>
            </div>
          </div>

          {/* Section: Architectural Solution */}
          <div>
            <span className="text-xs font-mono font-bold text-orange uppercase tracking-wider block mb-2">
              02 &bull; ARCHITECTURE &amp; APPROACH
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-nearblack mb-4">
              How VELORA Solved It
            </h2>
            <p className="text-base sm:text-lg text-muted leading-relaxed mb-8">
              {project.solution}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {project.approach && project.approach.map((item, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-sand/20 border border-sand-border">
                  <span className="font-mono text-xs font-bold text-orange block mb-2">
                    PHASE {idx + 1}
                  </span>
                  <h4 className="font-heading font-bold text-base text-nearblack mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Key Features */}
          <div>
            <span className="text-xs font-mono font-bold text-orange uppercase tracking-wider block mb-2">
              03 &bull; PRODUCT CAPABILITIES
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-nearblack mb-6">
              Engineered Product Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.keyFeatures && project.keyFeatures.map((feat, fIdx) => (
                <div key={fIdx} className="p-5 rounded-xl bg-cream border border-sand-border shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-orange flex-shrink-0" />
                    <h4 className="font-heading font-bold text-base text-nearblack">
                      {feat.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed pl-6">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Architecture Stack Breakdown */}
          {project.architecture && (
            <div className="rounded-2xl bg-nearblack text-cream p-8 sm:p-10 border border-white/10">
              <span className="text-xs font-mono font-bold text-orange uppercase tracking-wider block mb-2">
                04 &bull; TECHNICAL SPECIFICATION
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-cream mb-6">
                System Topology &amp; Stack
              </h2>
              <div className="space-y-4 text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 pb-3 border-b border-white/10">
                  <span className="text-sand/50 font-bold uppercase text-xs">Frontend</span>
                  <span className="sm:col-span-3 text-cream/90 font-mono text-xs">{project.architecture.frontend}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 pb-3 border-b border-white/10">
                  <span className="text-sand/50 font-bold uppercase text-xs">Backend</span>
                  <span className="sm:col-span-3 text-cream/90 font-mono text-xs">{project.architecture.backend}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 pb-3 border-b border-white/10">
                  <span className="text-sand/50 font-bold uppercase text-xs">Database</span>
                  <span className="sm:col-span-3 text-cream/90 font-mono text-xs">{project.architecture.database}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
                  <span className="text-sand/50 font-bold uppercase text-xs">DevOps</span>
                  <span className="sm:col-span-3 text-cream/90 font-mono text-xs">{project.architecture.deployment}</span>
                </div>
              </div>
            </div>
          )}

          {/* Section: Studio Takeaways */}
          <div>
            <span className="text-xs font-mono font-bold text-orange uppercase tracking-wider block mb-2">
              05 &bull; ARCHITECTURAL REFLECTIONS
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-nearblack mb-4">
              Project Takeaways &amp; Impact
            </h2>
            <p className="text-base sm:text-lg text-muted leading-relaxed">
              {project.takeaways}
            </p>
          </div>
        </div>
      </section>

      {/* 4. Related Projects Grid */}
      <section className="py-16 bg-sand/20 border-t border-sand-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-nearblack">
              Explore Related Case Studies
            </h3>
            <Link to="/work" className="text-xs font-heading font-bold text-orange hover:underline flex items-center gap-1">
              <span>All Projects</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedProjects.map(rel => (
              <Link
                key={rel.slug}
                to={`/work/${rel.slug}`}
                className="group rounded-2xl bg-cream border border-sand-border overflow-hidden hover:border-orange hover:shadow-lg transition-all flex flex-col"
              >
                <div className="aspect-[16/9] overflow-hidden bg-nearblack">
                  <img
                    src={rel.thumbnail}
                    alt={rel.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[10px] uppercase font-bold text-muted block mb-1">
                    {rel.category}
                  </span>
                  <h4 className="font-heading text-lg font-bold text-nearblack group-hover:text-orange transition-colors">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-muted mt-2 line-clamp-2">
                    {rel.subtitle}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Final CTA */}
      <FinalCTA />
    </article>
  );
}

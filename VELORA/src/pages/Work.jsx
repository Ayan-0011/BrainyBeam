import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Filter, Sparkles } from 'lucide-react';
import { projects, projectCategories } from '../data/projects';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import FinalCTA from '../components/home/FinalCTA';

export default function Work() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.categorySlug === selectedCategory);

  const featuredProject = projects.find(p => p.featured) || projects[0];

  return (
    <div className="w-full">
      {/* 1. Page Header */}
      <section className="py-10 sm:py-10 bg-cream relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="eyebrow-pill mb-6">
              <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />
              <span>Selected Portfolio &amp; Case Studies</span>
            </span>
            <h1 className="hero-headline font-heading font-extrabold text-nearblack mb-6">
              Engineering depth. <span className="text-orange">Tactile craft.</span>
            </h1>
            <p className="text-lg sm:text-2xl text-muted leading-relaxed font-normal max-w-3xl">
              Explore our representative digital projects across custom enterprise software, WebGL experiences, mobile products, and cognitive AI workflows.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Flagship Featured Project Spotlight */}
      <section className="pb-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-nearblack text-cream overflow-hidden border border-white/10 group">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              {/* Image Preview */}
              <div className="lg:col-span-7 aspect-[16/10] overflow-hidden bg-nearblack relative">
                <img
                  src={featuredProject.heroImage}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-nearblack/80 via-transparent to-transparent lg:block hidden" />
              </div>

              {/* Information */}
              <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-orange text-white text-xs font-heading font-bold uppercase tracking-wider">
                      Flagship Feature
                    </span>
                    <span className="text-xs text-sand/60 font-mono">
                      {featuredProject.category} &bull; {featuredProject.year}
                    </span>
                  </div>

                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-cream mb-4 group-hover:text-orange transition-colors">
                    {featuredProject.title}
                  </h2>

                  <p className="text-sand/80 text-sm sm:text-base leading-relaxed mb-6">
                    {featuredProject.subtitle}
                  </p>

                  {/* Demo Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-8 pt-6 border-t border-white/10">
                    {featuredProject.demoMetrics && featuredProject.demoMetrics.slice(0, 2).map((m, mIdx) => (
                      <div key={mIdx}>
                        <span className="font-heading font-bold text-lg text-orange block">
                          {m.value}
                        </span>
                        <span className="text-[11px] text-sand/60 leading-tight block">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Button to={`/work/${featuredProject.slug}`} variant="primary" icon="upRight">
                    Explore Case Study
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Category Filter Tabs */}
      <section className="py-8 bg-sand/30 border-y border-sand-border/80 sticky top-16 sm:top-20 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted">
              <Filter className="w-4 h-4 text-orange" />
              <span>Filter by Discipline:</span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {projectCategories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-heading font-bold transition-all duration-200 cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-nearblack text-cream shadow-sm scale-105'
                      : 'bg-cream text-nearblack hover:bg-sand border border-sand-border'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Complete Filtered Project Grid */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <article
                key={project.slug}
                className="group flex flex-col rounded-2xl bg-cream border border-sand-border overflow-hidden hover:border-orange hover:shadow-xl transition-all duration-300"
              >
                {/* Thumbnail */}
                <Link
                  to={`/work/${project.slug}`}
                  className="aspect-[16/10] overflow-hidden bg-nearblack relative block"
                >
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-cream/95 backdrop-blur-sm text-[10px] font-heading font-bold text-nearblack tracking-wider uppercase border border-sand-border">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-0.5 rounded bg-nearblack/80 text-[10px] font-mono text-sand/80">
                      {project.year}
                    </span>
                  </div>
                </Link>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-muted uppercase tracking-wider">
                        {project.client}
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-sand/60 text-nearblack border border-sand-border">
                        Concept Demo
                      </span>
                    </div>

                    <h3 className="font-heading text-xl font-bold text-nearblack mb-2 group-hover:text-orange transition-colors">
                      <Link to={`/work/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h3>

                    <p className="text-muted text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Tags and Link */}
                  <div className="pt-4 border-t border-sand-border flex items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-1">
                      {project.tags.slice(0, 2).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded text-[10px] font-medium bg-sand/40 text-nearblack/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={`/work/${project.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-heading font-bold text-nearblack group-hover:text-orange transition-colors"
                    >
                      <span>Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-orange" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Final CTA */}
      <FinalCTA />
    </div>
  );
}

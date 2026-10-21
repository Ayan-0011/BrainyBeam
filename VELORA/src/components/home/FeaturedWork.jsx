import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { projects } from '../../data/projects';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';

export default function FeaturedWork() {
  const featured = projects.filter(p => p.featured).slice(0, 4);

  return (
    <section className="py-20 sm:py-28 bg-sand/20 border-t border-sand-border/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading
            eyebrow="Selected Case Studies"
            title="Proof of concept. Built for scale."
            highlightWord="scale"
            align="left"
            description="Explore representative concept case studies demonstrating our technical depth, aesthetic precision, and architectural discipline."
          />
          <div className="flex-shrink-0">
            <Button to="/work" variant="primary" icon="arrow">
              View All Projects
            </Button>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {featured.map((project, index) => (
            <article
              key={project.slug}
              className="group flex flex-col rounded-2xl bg-cream border border-sand-border overflow-hidden hover:border-orange hover:shadow-xl transition-all duration-300"
            >
              {/* Image Preview Container */}
              <Link
                to={`/work/${project.slug}`}
                className="relative block aspect-[16/10] overflow-hidden bg-nearblack"
              >
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nearblack/70 via-transparent to-transparent opacity-80" />

                {/* Category Pill Over Image */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-cream/90 backdrop-blur-md text-[11px] font-heading font-bold text-nearblack tracking-wide border border-white/40">
                    {project.category}
                  </span>
                </div>

                {/* Demo Metric Highlight */}
                {project.demoMetrics && project.demoMetrics[0] && (
                  <div className="absolute bottom-4 right-4 bg-nearblack/80 backdrop-blur-md border border-white/10 rounded-xl px-3 py-1.5 text-right">
                    <span className="block font-heading font-bold text-orange text-sm sm:text-base leading-none">
                      {project.demoMetrics[0].value}
                    </span>
                    <span className="text-[10px] text-cream/70 leading-none">
                      {project.demoMetrics[0].label}
                    </span>
                  </div>
                )}
              </Link>

              {/* Content Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <span className="text-xs font-semibold text-muted tracking-wider uppercase">
                      {project.client} &bull; {project.year}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-sand/60 text-nearblack border border-sand-border">
                      Concept Demo
                    </span>
                  </div>

                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-nearblack mb-3 group-hover:text-orange transition-colors">
                    <Link to={`/work/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h3>

                  <p className="text-muted text-sm leading-relaxed mb-6">
                    {project.subtitle}
                  </p>
                </div>

                {/* Footer with Tags & Case Study Link */}
                <div className="pt-5 border-t border-sand-border flex items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag, tIndex) => (
                      <span
                        key={tIndex}
                        className="px-2 py-0.5 rounded text-[11px] font-medium bg-sand/40 text-nearblack/80 border border-sand-border/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/work/${project.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-heading font-bold text-nearblack group-hover:text-orange transition-colors flex-shrink-0"
                  >
                    <span>Read Case Study</span>
                    <ArrowUpRight className="w-4 h-4 text-orange transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

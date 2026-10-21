import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Globe, Smartphone, Server, Sparkles, CheckCircle2 } from 'lucide-react';
import { services } from '../../data/services';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';

export default function ServicesOverview() {
  const serviceIcons = {
    'web-development': Globe,
    'mobile-applications': Smartphone,
    'custom-software': Server,
    'ai-automation': Sparkles,
  };

  return (
    <section className="py-20 sm:py-28 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading
            eyebrow="Capabilities & Disciplines"
            title="Engineered for impact, designed for humans."
            highlightWord="impact"
            align="left"
            description="We partner with ambitious companies to design, architect, and ship digital products that redefine their markets."
          />
          <div className="flex-shrink-0">
            <Button to="/services" variant="outline" icon="upRight">
              View All Services
            </Button>
          </div>
        </div>

        {/* Asymmetrical Editorial Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.id] || Sparkles;
            // First and fourth items take 7 cols, second and third take 5 cols for an editorial asymmetrical rhythm
            const colSpan = (index === 0 || index === 3) ? 'lg:col-span-7' : 'lg:col-span-5';

            return (
              <div
                key={service.id}
                className={`${colSpan} group relative rounded-2xl bg-cream border border-sand-border p-6 sm:p-8 lg:p-10 flex flex-col justify-between hover:border-orange hover:shadow-lg hover:shadow-orange/5 transition-all duration-300 overflow-hidden`}
              >
                {/* Subtle Orange Accent Top Border on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-orange transition-colors duration-300" />

                <div>
                  {/* Top Bar with Number and Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-heading font-extrabold text-2xl sm:text-3xl text-sand-border group-hover:text-orange transition-colors">
                      {service.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-sand/60 border border-sand-border/80 flex items-center justify-center text-nearblack group-hover:bg-orange group-hover:text-white transition-all duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-nearblack mb-3 group-hover:text-orange transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted text-sm sm:text-base leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Capabilities List */}
                  <div className="space-y-2 mb-8">
                    {service.capabilities.slice(0, 3).map((cap, capIndex) => (
                      <div key={capIndex} className="flex items-start gap-2.5 text-xs sm:text-sm text-nearblack/90">
                        <CheckCircle2 className="w-4 h-4 text-orange flex-shrink-0 mt-0.5" />
                        <span><strong>{cap.name}</strong> &mdash; <span className="text-muted">{cap.desc}</span></span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer with Tech Stack and Link */}
                <div className="pt-6 border-t border-sand-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {service.techStack.slice(0, 4).map((tech, tIndex) => (
                      <span
                        key={tIndex}
                        className="px-2.5 py-0.5 rounded-full bg-sand/40 text-[11px] font-medium text-nearblack/75 border border-sand-border/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/services#${service.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-nearblack group-hover:text-orange transition-colors"
                  >
                    <span>Explore Discipline</span>
                    <ArrowUpRight className="w-4 h-4 text-orange transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

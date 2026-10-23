import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Globe, Smartphone, Server, Sparkles, CheckCircle2, ArrowLeft, ArrowUpRight,} from 'lucide-react';
import { services } from '../data/services';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import TechBadge from '../components/common/TechBadge';
import FinalCTA from '../components/home/FinalCTA';

const serviceIcons = {
  'web-development': Globe,
  'mobile-applications': Smartphone,
  'custom-software': Server,
  'ai-automation': Sparkles,
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.id === slug);

  // Unknown service -> send to a path that does not exist, so the standalone 404 page shows
  if (!service) return <Navigate to="/not-found" replace />;

  const Icon = serviceIcons[service.id] || Sparkles;
  const capabilities = service.capabilities || [];
  const deliverables = service.deliverables || [];
  const techStack = service.techStack || [];
  const otherServices = services.filter((s) => s.id !== service.id);

  return (
    <div className="w-full">
      {/* 1. Hero */}
      <section className="py-2 sm:py-2 bg-cream relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-orange transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            All services
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-orange/10 text-orange flex items-center justify-center">
                <Icon className="w-6 h-6" />
              </div>
              <span className="font-mono text-xs font-bold text-orange px-2.5 py-1 rounded bg-orange/10 border border-orange/20">
                SERVICE {service.number}
              </span>
              {service.heroAccent && (
                <span className="text-xs font-bold text-muted uppercase tracking-wider">
                  {service.heroAccent}
                </span>
              )}
            </div>

            <h1 className="hero-headline font-heading font-extrabold text-nearblack mb-4">
              {service.title}
            </h1>

            <p className="font-heading text-xl sm:text-2xl font-medium text-orange mb-5">
              {service.tagline}
            </p>

            <p className="text-base sm:text-xl text-muted leading-relaxed max-w-3xl">
              {service.fullDesc}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button to="/contact" variant="primary" icon="upRight">
                Discuss a {service.title} Project
              </Button>
              <Button to="/services" variant="secondary" icon="arrow">
                View all services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Capabilities */}
      {capabilities.length > 0 && (
        <section className="py-16 sm:py-24 bg-sand/30 border-y border-sand-border/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <SectionHeading
                eyebrow="What we deliver"
                title="Core capabilities."
                highlightWord="capabilities"
                align="left"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {capabilities.map((cap) => (
                <div
                  key={cap.name}
                  className="p-6 rounded-2xl bg-cream border border-sand-border hover:border-orange hover:shadow-md transition-all duration-200"
                >
                  <h3 className="font-heading font-bold text-base text-nearblack mb-2">
                    {cap.name}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. Deliverables + Ideal for */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-nearblack mb-6">
              What you get
            </h2>
            <ul className="space-y-3">
              {deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm sm:text-base text-nearblack">
                  <CheckCircle2 className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-sand/20 border border-sand-border p-8">
              <span className="text-[11px] font-bold uppercase tracking-wider text-muted block mb-2">
                Ideal for
              </span>
              <p className="text-base font-medium text-nearblack leading-relaxed">
                {service.idealFor}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Technology stack with logos */}
      {techStack.length > 0 && (
        <section className="py-16 sm:py-24 bg-sand/30 border-y border-sand-border/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <SectionHeading
                eyebrow="Our toolkit"
                title="Built with the right technology."
                highlightWord="technology"
                align="left"
              />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {techStack.map((tech) => (
                <TechBadge key={tech} name={tech} size="lg" />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. Other services */}
      {otherServices.length > 0 && (
        <section className="py-16 sm:py-24 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-nearblack mb-8">
              Explore other services
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {otherServices.map((s) => {
                const OtherIcon = serviceIcons[s.id] || Sparkles;
                return (
                  <Link
                    key={s.id}
                    to={`/services/${s.id}`}
                    className="group p-6 rounded-2xl bg-sand/20 border border-sand-border hover:border-orange hover:shadow-md transition-all duration-200 flex flex-col gap-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-orange/10 text-orange flex items-center justify-center">
                        <OtherIcon className="w-5 h-5" />
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-orange transition-colors" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-nearblack">{s.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{s.tagline}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <FinalCTA />
    </div>
  );
}
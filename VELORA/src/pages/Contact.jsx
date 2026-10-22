import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  CheckCircle2, 
  ArrowUpRight, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  AlertCircle 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Web Development',
    message: '',
    consent: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const servicesList = [
    'Web Development',
    'Mobile Applications',
    'Custom Software',
    'AI & Automation',
    'Design Systems / Architecture'
  ];

 

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide at least 10 characters detailing your project idea.';
    }
    if (!formData.consent) {
      errs.consent = 'Please confirm consent for inquiry processing.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FF7417', '#EAE5DB', '#202124']
      });
    }, 1200);
  };

  return (
    <div className="w-full">
      {/* 1. Contact Hero */}
      <section className="py-16 sm:py-24 bg-cream relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="eyebrow-pill mb-6">
              <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />
              <span>Direct Studio Inquiries</span>
            </span>
            <h1 className="hero-headline font-heading font-extrabold text-nearblack mb-6">
              Let's turn your bold idea into <span className="text-orange">reality.</span>
            </h1>
            <p className="text-lg sm:text-2xl text-muted leading-relaxed font-normal max-w-3xl">
              Tell us about your product vision, timeline, and architectural requirements. We respond with thoughtful feedback and scheduling options within 24 to 48 hours.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Contact Form & Context Sidebar */}
      <section className="py-16 sm:py-24 bg-sand/20 border-y border-sand-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Form Column */}
            <div className="lg:col-span-7 rounded-3xl bg-cream border border-sand-border p-8 sm:p-12 shadow-sm">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-orange/10 text-orange flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-nearblack mb-3">
                    Inquiry Simulation Received!
                  </h3>
                  <p className="text-muted text-base leading-relaxed max-w-md mx-auto mb-8">
                    Thank you, <strong>{formData.name}</strong>. In a live deployment, our engineering leadership would review your details and send our Discovery calendar invite.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        service: 'Web Development',
                        message: '',
                        consent: false
                      });
                    }}
                  >
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Demo Notice Banner */}
                  <div className="p-4 rounded-xl bg-orange/10 border border-orange/20 text-xs text-nearblack flex items-start gap-3">
                    <AlertCircle className="w-4 h-4 text-orange flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Demo Notice:</strong> This website is an interactive concept showcase. This form simulates live front-end validation, controlled state handling, and submission feedback.
                    </div>
                  </div>

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-nearblack mb-2">
                        Your Full Name <span className="text-orange">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Jordan Hayes"
                        className="w-full px-4 py-3 rounded-xl bg-cream border border-sand-border focus:border-orange focus:ring-1 focus:ring-orange text-sm text-nearblack"
                      />
                      {errors.name && (
                        <span className="text-[11px] text-red-600 font-medium block mt-1">
                          {errors.name}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-nearblack mb-2">
                        Work Email <span className="text-orange">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jordan@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-cream border border-sand-border focus:border-orange focus:ring-1 focus:ring-orange text-sm text-nearblack"
                      />
                      {errors.email && (
                        <span className="text-[11px] text-red-600 font-medium block mt-1">
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Company Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-nearblack mb-2">
                      Company / Organization (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. HyperScale Tech"
                      className="w-full px-4 py-3 rounded-xl bg-cream border border-sand-border focus:border-orange focus:ring-1 focus:ring-orange text-sm text-nearblack"
                    />
                  </div>

                  {/* Service of Interest */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-nearblack mb-2">
                      Primary Service / Discipline Needed
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {servicesList.map((srv) => (
                        <button
                          key={srv}
                          type="button"
                          onClick={() => setFormData({ ...formData, service: srv })}
                          className={`px-3.5 py-1.5 rounded-full text-xs font-heading font-semibold transition-all ${
                            formData.service === srv
                              ? 'bg-nearblack text-cream shadow-sm'
                              : 'bg-sand/30 hover:bg-sand text-nearblack border border-sand-border'
                          }`}
                        >
                          {srv}
                        </button>
                      ))}
                    </div>
                  </div>

       

                  {/* Project Description */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-nearblack mb-2">
                      Project Details &amp; Objectives <span className="text-orange">*</span>
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe what you want to build, key challenges, target users, or architectural preferences..."
                      className="w-full px-4 py-3 rounded-xl bg-cream border border-sand-border focus:border-orange focus:ring-1 focus:ring-orange text-sm text-nearblack resize-none"
                    />
                    {errors.message && (
                      <span className="text-[11px] text-red-600 font-medium block mt-1">
                        {errors.message}
                      </span>
                    )}
                  </div>

                 

                  {/* Submit Button */}
                  <div>
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      loading={isSubmitting}
                      className="w-full justify-center" >
                      Send Project Inquiry
                    </Button>
                  </div>
                </form>
              )}
            </div>

            {/* Sidebar Column: Coordinates & What Happens Next */}
            <div className="lg:col-span-5 space-y-8">
              {/* Studio Coordinates Card */}
              <div className="rounded-3xl bg-nearblack text-cream p-8 border border-white/10 space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold text-orange uppercase tracking-wider block mb-2">
                    STUDIO COORDINATES
                  </span>
                  <h3 className="font-heading font-bold text-2xl text-cream">
                    VELORA Digital Studio
                  </h3>
                  <span className="text-xs text-sand/60">
                    Fictional / Demo Concept Environment
                  </span>
                </div>

                <div className="space-y-4 pt-4 border-t border-white/10 text-sm">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-orange" />
                    <span className="text-sand/90">hello@velora-studio.demo</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-orange" />
                    <span className="text-sand/90">Global Distributed Team &bull; Worldwide</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-orange" />
                    <span className="text-sand/90">Mon &ndash; Fri &bull; 9am &ndash; 6pm EST / CET</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <span className="inline-flex items-center gap-2 text-xs text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Accepting selected new projects for 2026
                  </span>
                </div>
              </div>

              {/* What Happens Next Card */}
            
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import React, { useState } from 'react';
import { 
  Briefcase, 
  MapPin, 
  DollarSign, 
  Clock, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  ArrowUpRight, 
  Sparkles, 
  Send, 
  X, 
  AlertCircle 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { openPositions, companyPerks } from '../data/company';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import FinalCTA from '../components/home/FinalCTA';

export default function Careers() {
  const [selectedDept, setSelectedDept] = useState('All');
  const [expandedJobId, setExpandedJobId] = useState(openPositions[0]?.id || null);
  const [applicationModalJob, setApplicationModalJob] = useState(null);

  // Application form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    portfolio: '',
    resumeName: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const departments = ['All', 'Engineering', 'Design & Motion', 'Product Design'];

  const filteredJobs = selectedDept === 'All'
    ? openPositions
    : openPositions.filter(j => j.department === selectedDept);

  const toggleJob = (id) => {
    setExpandedJobId(expandedJobId === id ? null : id);
  };

  const handleOpenApplication = (job) => {
    setApplicationModalJob(job);
    setSubmitSuccess(false);
    setFormErrors({});
    setFormData({ name: '', email: '', portfolio: '', resumeName: '', message: '' });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      errors.email = 'Please provide your email address.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please provide a valid email format.';
    }
    if (!formData.portfolio.trim()) {
      errors.portfolio = 'Please provide a portfolio, GitHub, or LinkedIn URL.';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleApplySubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#FF7417', '#EAE5DB', '#202124']
      });
    }, 1000);
  };

  const hiringSteps = [
    { step: '01', title: 'Portfolio Review', desc: 'We review your code samples, design artifacts, and live projects for craft quality.' },
    { step: '02', title: 'Technical Conversation', desc: 'A 45-minute discussion with a senior practitioner about technical trade-offs and architecture.' },
    { step: '03', title: 'Paid Collaborative Sprint', desc: 'A 3-hour paid micro-project pairing directly with our team on a realistic feature.' },
    { step: '04', title: 'Offer & Welcome', desc: 'Transparent compensation offer with equity, equipment grant, and flexible onboarding.' },
  ];

  return (
    <div className="w-full">
      {/* 1. Careers Hero */}
      <section className="py-10 sm:py-10 bg-cream relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="eyebrow-pill mb-6">
              <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />
              <span>We're Hiring &bull; Concept Demo Opportunities</span>
            </span>
            <h1 className="hero-headline font-heading font-extrabold text-nearblack mb-6">
              Build the software you <span className="text-orange">wish existed.</span>
            </h1>
            <p className="text-lg sm:text-2xl text-muted leading-relaxed font-normal max-w-3xl">
              Join an independent team of designers, engineers, and creative technologists who obsess over digital craft, speed, and autonomy.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Perks & Benefits */}
      <section className="py-16 bg-sand/30 border-y border-sand-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Benefits & Culture"
            title="Designed for sustainable excellence."
            highlightWord="excellence"
            align="left"
            description="We believe brilliant work happens when you are rested, well-equipped, and trusted with complete autonomy."
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyPerks.map((perk, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-cream border border-sand-border shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-orange/10 flex items-center justify-center text-orange font-bold text-xs mb-3">
                    0{idx + 1}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-nearblack mb-2">
                    {perk.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    {perk.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Open Positions with Filter */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="eyebrow-pill mb-4">
                <span>Available Openings</span>
              </span>
              <h2 className="section-headline font-heading font-bold text-nearblack">
                Current Opportunities
              </h2>
            </div>

            {/* Department Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {departments.map((dept) => (
                <button
                  key={dept}
                  type="button"
                  onClick={() => setSelectedDept(dept)}
                  className={`px-4 py-1.5 rounded-full text-xs font-heading font-bold transition-all ${
                    selectedDept === dept
                      ? 'bg-nearblack text-cream shadow-sm'
                      : 'bg-sand/40 text-nearblack hover:bg-sand border border-sand-border'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Job Openings Accordion / Cards */}
          <div className="space-y-6">
            {filteredJobs.map((job) => {
              const isExpanded = expandedJobId === job.id;
              return (
                <div
                  key={job.id}
                  className="rounded-2xl bg-cream border border-sand-border overflow-hidden hover:border-orange transition-all duration-200 shadow-sm"
                >
                  {/* Job Header Bar */}
                  <div
                    onClick={() => toggleJob(job.id)}
                    className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer bg-cream hover:bg-sand/10 transition-colors"
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                        <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-orange/10 text-orange border border-orange/20 font-mono">
                          {job.department}
                        </span>
                        <span className="text-xs text-muted flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" /> {job.location}
                        </span>
                        <span className="text-xs text-muted flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" /> {job.type}
                        </span>
                        <span className="text-xs text-nearblack font-semibold flex items-center gap-1">
                          <DollarSign className="w-3.5 h-3.5 text-orange" /> {job.salary}
                        </span>
                      </div>
                      <h3 className="font-heading text-xl sm:text-2xl font-bold text-nearblack">
                        {job.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-4 flex-shrink-0">
                      <Button
                        type="button"
                        variant="primary"
                        size="sm"
                        icon="upRight"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenApplication(job);
                        }}
                      >
                        Apply Now
                      </Button>
                      <button
                        type="button"
                        className="w-9 h-9 rounded-full bg-sand/40 flex items-center justify-center text-nearblack hover:bg-sand transition-colors"
                        aria-label="Toggle details"
                      >
                        {isExpanded ? <ChevronUp className="w-4 h-4 text-orange" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Expanded Job Specifications */}
                  {isExpanded && (
                    <div className="p-6 sm:p-8 pt-0 border-t border-sand-border/60 bg-sand/10">
                      <p className="text-sm sm:text-base text-muted leading-relaxed mb-8 pt-6">
                        {job.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        {/* Responsibilities */}
                        <div>
                          <h4 className="font-heading text-xs uppercase tracking-wider text-nearblack font-bold mb-3 flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-orange" />
                            Core Responsibilities
                          </h4>
                          <ul className="space-y-2">
                            {job.responsibilities.map((resp, rIdx) => (
                              <li key={rIdx} className="text-xs text-muted leading-relaxed flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-orange mt-1.5 flex-shrink-0" />
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Requirements */}
                        <div>
                          <h4 className="font-heading text-xs uppercase tracking-wider text-nearblack font-bold mb-3 flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-orange" />
                            Must-Have Experience
                          </h4>
                          <ul className="space-y-2">
                            {job.requirements.map((req, reqIdx) => (
                              <li key={reqIdx} className="text-xs text-muted leading-relaxed flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-orange mt-1.5 flex-shrink-0" />
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Nice to Haves */}
                        <div>
                          <h4 className="font-heading text-xs uppercase tracking-wider text-nearblack font-bold mb-3 flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-orange" />
                            Nice-to-Have Skills
                          </h4>
                          <ul className="space-y-2">
                            {job.niceToHaves.map((nice, nIdx) => (
                              <li key={nIdx} className="text-xs text-muted leading-relaxed flex items-start gap-2">
                                <span className="text-orange">&bull;</span>
                                <span>{nice}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-sand-border">
                        <span className="text-xs text-muted">
                          Identified as Concept Demo vacancy for showcase purposes.
                        </span>
                        <Button
                          variant="primary"
                          size="md"
                          icon="upRight"
                          onClick={() => handleOpenApplication(job)}
                        >
                          Submit Application for {job.title}
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Transparent 4-Step Hiring Process */}
      <section className="py-20 bg-nearblack text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionHeading
              variant="light"
              eyebrow="No LeetCode Grinding"
              title="Our respectful 4-step interview process."
              highlightWord="interview"
              align="center"
              description="We respect your time. Our hiring process is conversational, practical, and focused entirely on real-world engineering craft."
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hiringSteps.map((hs, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-nearblack-surface border border-white/10">
                <span className="font-mono text-xs font-bold text-orange mb-3 block">
                  STEP {hs.step}
                </span>
                <h3 className="font-heading font-bold text-lg text-cream mb-2">
                  {hs.title}
                </h3>
                <p className="text-xs text-sand/70 leading-relaxed">
                  {hs.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Interactive Demo Application Modal */}
      {applicationModalJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-nearblack/70 backdrop-blur-sm">
          <div className="relative w-full max-w-lg rounded-3xl bg-cream border border-sand-border p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
            <div className="flex items-start justify-between pb-4 border-b border-sand-border mb-6">
              <div>
                <span className="text-[10px] font-mono font-bold text-orange uppercase tracking-wider block">
                  Application &bull; Demo Mode
                </span>
                <h3 className="font-heading font-bold text-xl text-nearblack">
                  Apply for {applicationModalJob.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setApplicationModalJob(null)}
                className="p-1.5 rounded-full bg-sand/40 hover:bg-sand text-nearblack transition-colors"
                aria-label="Close application modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submitSuccess ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-heading font-bold text-2xl text-nearblack mb-2">
                  Demo Application Received!
                </h4>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  Thank you, <strong>{formData.name}</strong>. In a live environment, our recruiting team would review your portfolio and reach out within 48 hours. This is a functional demo simulation.
                </p>
                <Button
                  variant="primary"
                  onClick={() => setApplicationModalJob(null)}
                  className="w-full"
                >
                  Done
                </Button>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="space-y-4">
                <div className="p-3 rounded-xl bg-orange/10 border border-orange/20 text-xs text-nearblack flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-orange flex-shrink-0" />
                  <span>This is a simulated demo application form with live validation.</span>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-nearblack mb-1">
                    Full Name <span className="text-orange">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Rivera"
                    className="w-full px-4 py-2.5 rounded-xl bg-cream border border-sand-border focus:border-orange focus:ring-1 focus:ring-orange text-sm text-nearblack"
                  />
                  {formErrors.name && (
                    <span className="text-[11px] text-red-600 font-medium block mt-1">
                      {formErrors.name}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-nearblack mb-1">
                    Email Address <span className="text-orange">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@domain.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-cream border border-sand-border focus:border-orange focus:ring-1 focus:ring-orange text-sm text-nearblack"
                  />
                  {formErrors.email && (
                    <span className="text-[11px] text-red-600 font-medium block mt-1">
                      {formErrors.email}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-nearblack mb-1">
                    Portfolio / GitHub / LinkedIn <span className="text-orange">*</span>
                  </label>
                  <input
                    type="url"
                    value={formData.portfolio}
                    onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                    placeholder="https://github.com/alexrivera"
                    className="w-full px-4 py-2.5 rounded-xl bg-cream border border-sand-border focus:border-orange focus:ring-1 focus:ring-orange text-sm text-nearblack"
                  />
                  {formErrors.portfolio && (
                    <span className="text-[11px] text-red-600 font-medium block mt-1">
                      {formErrors.portfolio}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-nearblack mb-1">
                    Why do you want to build with VELORA? (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share what kind of digital experiences inspire you..."
                    className="w-full px-4 py-2 rounded-xl bg-cream border border-sand-border focus:border-orange focus:ring-1 focus:ring-orange text-sm text-nearblack resize-none"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    loading={isSubmitting}
                    className="w-full justify-center"
                  >
                    Submit Demo Application
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

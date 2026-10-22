import React, { useState } from 'react';
import { Mail, MapPin, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';
import Button from '../components/common/Button';

const projectTypes = [
  'Web Development',
  'Mobile App',
  'Custom Software',
  'AI & Automation',
  'Other',
];

const budgetRanges = [
  'Under ₹5 lakhs',
  '₹5–15 lakhs',
  '₹15–50 lakhs',
  '₹50 lakhs+',
  'Not sure yet',
];

const initialForm = {
  name: '',
  email: '',
  company: '',
  projectType: '',
  budget: '',
  message: '',
};

function validate(form) {
  const errors = {};

  if (!form.name.trim()) {
    errors.name = 'Name is required';
  }

  if (!form.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = 'Enter a valid email';
  }

  if (!form.projectType) {
    errors.projectType = 'Select a project type';
  }

  if (!form.message.trim()) {
    errors.message = 'Tell us about your project';
  } else if (form.message.trim().length < 20) {
    errors.message = 'Please add a bit more detail (20+ characters)';
  }

  return errors;
}

const labelClass = 'block text-xs font-bold uppercase tracking-wider text-nearblack mb-2';

const inputClass = (hasError) =>
  `w-full px-4 py-3 rounded-xl bg-cream border text-sm text-nearblack ${
    hasError
      ? 'border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500'
      : 'border-sand-border focus:border-orange focus:ring-1 focus:ring-orange'
  }`;

function FieldError({ message }) {
  if (!message) return null;
  return (
    <span className="text-[11px] text-red-600 font-medium mt-1 flex items-center gap-1">
      <AlertCircle className="w-3 h-3" />
      {message}
    </span>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((current) => ({ ...current, [name]: value }));

    if (errors[name]) {
      setErrors((current) => ({ ...current, [name]: undefined }));
    }
    if (submitError) setSubmitError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate(formData);
    setErrors(validationErrors);
    setSubmitError('');

    if (Object.keys(validationErrors).length > 0) return;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setSubmitError('Email service is not configured. Please try again later.');
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name.trim(),
          from_email: formData.email.trim(),
          reply_to: formData.email.trim(),
          company: formData.company.trim() || 'Not provided',
          project_type: formData.projectType,
          budget: formData.budget || 'Not specified',
          message: formData.message.trim(),
        },
        { publicKey }
      );

      setSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FF7417', '#EAE5DB', '#202124'],
      });
    } catch (error) {
      console.error('EmailJS submission failed:', error);
      setSubmitError('We could not send your message. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      {/* 1. Contact Hero */}
      <section className="py-16 sm:py-10 bg-cream relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="eyebrow-pill mb-6">
              <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />
              <span>Direct Studio Inquiries</span>
            </span>
            <h1 className="hero-headline font-heading font-extrabold text-nearblack mb-6">
              Let's turn your bold idea into <span className="text-orange">reality.</span>
            </h1>
            
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
                <div role="status" aria-live="polite" className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-orange/10 text-orange flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-nearblack mb-3">
                    Thank you. Your message is on its way.
                  </h3>
                  <p className="text-muted text-base leading-relaxed max-w-md mx-auto mb-8">
                    Thank you, <strong>{formData.name}</strong>. We've received your project details and will reply within one business day.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData(initialForm);
                      setErrors({});
                    }}
                  >
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-8">
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-name" className={labelClass}>
                        Your Full Name <span className="text-orange">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        autoComplete="name"
                        className={inputClass(errors.name)}
                      />
                      <FieldError message={errors.name} />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className={labelClass}>
                        Work Email <span className="text-orange">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        autoComplete="email"
                        className={inputClass(errors.email)}
                      />
                      <FieldError message={errors.email} />
                    </div>
                  </div>

                  {/* Company Name */}
                  <div>
                    <label htmlFor="contact-company" className={labelClass}>
                      Company / Organization (Optional)
                    </label>
                    <input
                      id="contact-company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      autoComplete="organization"
                      className={inputClass(false)}
                    />
                  </div>

                  {/* Project Type & Budget Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-type" className={labelClass}>
                        Project Type <span className="text-orange">*</span>
                      </label>
                      <select
                        id="contact-type"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className={inputClass(errors.projectType)}
                      >
                        <option value="">Select a type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                      <FieldError message={errors.projectType} />
                    </div>

                    <div>
                      <label htmlFor="contact-budget" className={labelClass}>
                        Budget Range
                      </label>
                      <select
                        id="contact-budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className={inputClass(false)}
                      >
                        <option value="">Select a range</option>
                        {budgetRanges.map((budget) => (
                          <option key={budget} value={budget}>
                            {budget}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Project Description */}
                  <div>
                    <label htmlFor="contact-message" className={labelClass}>
                      Project Details &amp; Objectives <span className="text-orange">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="What are you building? What problem does it solve?"
                      className={`${inputClass(errors.message)} resize-none`}
                    />
                    <FieldError message={errors.message} />
                  </div>

                  {/* Send error */}
                  {submitError && (
                    <div
                      role="alert"
                      className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <p>{submitError}</p>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div>
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      loading={isSubmitting}
                      className="w-full justify-center"
                    >
                      Send Project Inquiry
                    </Button>
                  </div>
                </form>
              )}
            </div>

            {/* Sidebar Column: Coordinates */}
            <div className="lg:col-span-5 space-y-8">
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
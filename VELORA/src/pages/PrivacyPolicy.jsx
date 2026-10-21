import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowLeft, Lock } from 'lucide-react';

export default function PrivacyPolicy() {
  const lastUpdated = 'October 2026';

  return (
    <div className="w-full py-16 sm:py-24 bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <Link to="/" className="inline-flex items-center gap-2 text-xs font-heading font-bold text-muted hover:text-orange transition-colors uppercase tracking-wider mb-6">
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Studio Home</span>
          </Link>
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange mb-2">
            <Lock className="w-4 h-4" />
            <span>TRANSPARENCY &amp; LEGAL DISCLOSURE</span>
          </div>
          <h1 className="hero-headline font-heading font-extrabold text-nearblack mb-4">
            Privacy Policy
          </h1>
          <p className="text-xs text-muted font-mono">
            Last Updated: {lastUpdated} &bull; VELORA Digital Studio (Demo Environment)
          </p>
        </div>

        {/* Legal Content Body */}
        <div className="prose prose-nearblack max-w-none space-y-10 text-sm sm:text-base text-muted leading-relaxed">
          <div className="p-4 rounded-xl bg-orange/10 border border-orange/20 text-xs text-nearblack">
            <strong>Demonstration Notice:</strong> The website you are currently browsing is a simulated, high-fidelity portfolio and demonstration project for <strong>VELORA</strong>. No personal data collected in the contact or careers forms is sold, shared with advertising brokers, or stored in commercial consumer databases.
          </div>

          <section>
            <h2 className="font-heading font-bold text-xl sm:text-2xl text-nearblack mb-3">
              1. Information We Collect
            </h2>
            <p>
              When interacting with this demonstration application, you may choose to submit information through interactive forms:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2 text-nearblack/90">
              <li><strong>Contact Inquiries:</strong> Full name, professional email address, company name, project budget, and project notes.</li>
              <li><strong>Careers Submissions:</strong> Full name, email address, portfolio or GitHub URLs, and introductory messages.</li>
              <li><strong>Technical Metadata:</strong> Browser type, viewport dimensions, and anonymized performance metrics (e.g. WebGL support detection for 3D rendering).</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl sm:text-2xl text-nearblack mb-3">
              2. How Information is Used
            </h2>
            <p>
              Any information entered into this interface is handled strictly for client-side demonstration, form validation testing, and immediate simulated feedback. In a production enterprise engagement, VELORA uses contact details solely to evaluate project scope, formulate technical architecture proposals, and establish commercial service agreements.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl sm:text-2xl text-nearblack mb-3">
              3. Cookies and Local State
            </h2>
            <p>
              This website uses standard browser session storage and temporary memory to manage UI states (such as active navigation pills, form inputs, and accordion drawers). We do not deploy invasive third-party cross-site ad tracking cookies or fingerprinting scripts.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl sm:text-2xl text-nearblack mb-3">
              4. Client Data Privacy &amp; AI Guardrails
            </h2>
            <p>
              In our commercial client work involving Artificial Intelligence and machine learning pipelines, VELORA adheres to strict zero-retention standards. Proprietary client code, training documents, and user data are routed exclusively through private, encrypted virtual private clouds (VPCs) and are never used to train public language models.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl sm:text-2xl text-nearblack mb-3">
              5. User Rights
            </h2>
            <p>
              Regardless of jurisdiction, we respect your rights to access, inspect, or request deletion of any inquiry communications. If you have any inquiries regarding this policy or our data practices, contact us at <code>hello@velora-studio.demo</code>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

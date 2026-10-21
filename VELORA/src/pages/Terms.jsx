import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, ShieldAlert } from 'lucide-react';

export default function Terms() {
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
            <FileText className="w-4 h-4" />
            <span>TERMS OF ENGAGEMENT &amp; SERVICE</span>
          </div>
          <h1 className="hero-headline font-heading font-extrabold text-nearblack mb-4">
            Terms &amp; Conditions
          </h1>
          <p className="text-xs text-muted font-mono">
            Last Updated: {lastUpdated} &bull; VELORA Digital Studio
          </p>
        </div>

        {/* Legal Content Body */}
        <div className="prose prose-nearblack max-w-none space-y-10 text-sm sm:text-base text-muted leading-relaxed">
          <section>
            <h2 className="font-heading font-bold text-xl sm:text-2xl text-nearblack mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing, browsing, or interacting with the VELORA website and digital properties, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you disagree with any part of these terms, please discontinue use of this site.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl sm:text-2xl text-nearblack mb-3">
              2. Demonstration Notice &amp; Fictional Context
            </h2>
            <p>
              This website serves as a high-fidelity demonstration and portfolio showcase for VELORA. The case studies, performance metrics, client testimonials, and job vacancies displayed herein are created as illustrative concept prototypes designed to demonstrate the studio's technical, visual, and architectural capabilities.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl sm:text-2xl text-nearblack mb-3">
              3. Intellectual Property Rights
            </h2>
            <p>
              The original brand marks, geometric 3D sculptures, custom typography configurations, and software source code comprising the VELORA platform are the intellectual property of VELORA. In professional client engagements, all bespoke source code, design systems, and visual assets are transferred 100% to the client upon final project delivery.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl sm:text-2xl text-nearblack mb-3">
              4. Prohibited Uses
            </h2>
            <p>
              You may not use this website to inject malicious payloads, conduct denial-of-service stress tests without written permission, or scrape proprietary code patterns without attribution.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl sm:text-2xl text-nearblack mb-3">
              5. Disclaimers &amp; Limitation of Liability
            </h2>
            <p>
              This website is provided on an "as is" and "as available" basis without warranties of any kind. VELORA disclaims all liability for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use this demonstration site.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl sm:text-2xl text-nearblack mb-3">
              6. Inquiries
            </h2>
            <p>
              For legal questions, intellectual property inquiries, or contract reviews, please direct correspondence to <code>legal@velora-studio.demo</code>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

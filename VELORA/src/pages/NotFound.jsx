import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Compass, Home, Layers } from 'lucide-react';
import Button from '../components/common/Button';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 py-20 bg-cream relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange/15 rounded-full blur-3xl pointer-events-none" />

      {/* Abstract Geometric V 404 Emblem */}
      <div className="relative mb-8">
        <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-3xl bg-nearblack flex items-center justify-center p-6 shadow-2xl border border-sand-border relative group">
          <svg viewBox="0 0 44 44" fill="none" className="w-full h-full animate-float-slow">
            <path d="M9 10L22 36L35 10H28.5L22 25.5L15.5 10H9Z" fill="#FF7417" />
            <path d="M22 36L18 27L22 24.5L26 27L22 36Z" fill="#F7F5F0" />
            <circle cx="22" cy="13" r="2.2" fill="#FF7417" />
          </svg>
          <span className="absolute -bottom-3 -right-3 px-3 py-1 rounded-full bg-orange text-white font-mono font-bold text-xs shadow-md">
            404
          </span>
        </div>
      </div>

      {/* Heading & Narrative */}
      <span className="eyebrow-pill mb-4">
        <span>Coordinate Mismatch</span>
      </span>

      <h1 className="hero-headline font-heading font-extrabold text-nearblack mb-4">
        Lost in digital space.
      </h1>

      <p className="text-muted text-base sm:text-lg max-w-md mx-auto mb-10 leading-relaxed">
        The route you are attempting to reach does not exist or has been refactored into a newer architecture.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button to="/" variant="primary" icon="arrow">
          Return to Studio Home
        </Button>
        <Button to="/work" variant="secondary" icon="none">
          Explore Selected Work
        </Button>
        <Button to="/services" variant="outline" icon="none">
          View Services
        </Button>
      </div>
    </div>
  );
}

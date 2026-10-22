import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-start text-center px-4 py-16 bg-cream overflow-hidden">
      {/* Soft orange glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-orange/15 rounded-full blur-3xl pointer-events-none" />

    
      <div className="relative z-10 flex flex-col items-center">
        <p className="font-heading font-extrabold text-orange text-7xl sm:text-9xl leading-none tracking-[-0.04em]">
          404
        </p>

        <h1 className="mt-6 font-heading font-extrabold text-nearblack text-2xl sm:text-4xl tracking-[-0.02em]">
          Page not found
        </h1>

        <p className="mt-3 text-muted text-base sm:text-lg max-w-md leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto [&>*]:w-full sm:[&>*]:w-auto">
          <Button to="/" variant="primary" icon="arrow">
            Back to home
          </Button>
          <Button variant="secondary" onClick={() => navigate(-1)}>
            Go back
          </Button>
        </div>
      </div>
    </main>
  );
}
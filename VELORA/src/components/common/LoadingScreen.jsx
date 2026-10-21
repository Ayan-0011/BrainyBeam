import React from 'react';

export default function LoadingScreen() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 bg-cream" aria-label="Loading page">
      <div className="relative w-12 h-12 flex items-center justify-center">
        {/* Pulsing Outer Ring */}
        <div className="absolute inset-0 rounded-full border-2 border-orange/20 animate-ping" />
        {/* Spinning Brand V */}
        <div className="w-10 h-10 rounded-xl bg-nearblack flex items-center justify-center shadow-md animate-pulse">
          <svg viewBox="0 0 44 44" fill="none" className="w-6 h-6">
            <path d="M9 10L22 36L35 10H28.5L22 25.5L15.5 10H9Z" fill="#FF7417" />
          </svg>
        </div>
      </div>
      <span className="mt-4 text-xs font-mono font-bold tracking-widest text-muted uppercase">
        Loading VELORA...
      </span>
    </div>
  );
}

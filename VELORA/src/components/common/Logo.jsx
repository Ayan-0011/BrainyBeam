import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ variant = 'dark', iconOnly = false, className = '' }) {
  const isLight = variant === 'light'; // Light text for dark backgrounds

  return (
    <Link 
      to="/" 
      className={`inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-orange rounded-md ${className}`}
      aria-label="VELORA Home"
    >
      {/* Geometric V Brand Mark */}
      <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
        <svg 
          viewBox="0 0 44 44" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
        >
          {/* Base Geometric Plate */}
          <rect 
            x="0" 
            y="0" 
            width="44" 
            height="44" 
            rx="9" 
            fill={isLight ? '#222222' : '#171717'} 
          />
          {/* Outer Vibrant Orange Angular V Wing */}
          <path 
            d="M9 10L22 36L35 10H28.5L22 25.5L15.5 10H9Z" 
            fill="#FF7417" 
          />
          {/* Inner Geometric Prism Core */}
          <path 
            d="M22 36L18 27L22 24.5L26 27L22 36Z" 
            fill={isLight ? '#F7F0E4' : '#E8D5BB'} 
          />
          {/* Radiant Amber Apex Indicator */}
          <circle 
            cx="22" 
            cy="13" 
            r="2.2" 
            fill="#FF7417" 
            className="animate-pulse"
          />
        </svg>
      </div>

      {/* VELORA Wordmark */}
      {!iconOnly && (
        <div className="flex flex-col">
          <span className={`font-heading text-xl sm:text-2xl font-extrabold tracking-[-0.03em] leading-none transition-colors duration-200 ${
            isLight ? 'text-cream group-hover:text-orange' : 'text-nearblack group-hover:text-orange'
          }`}>
            VELORA
          </span>
          <span className={`text-[9px] uppercase tracking-[0.24em] font-semibold -mt ${
            isLight ? 'text-sand/70' : 'text-muted'
          }`}>
            Digital Studio
          </span>
        </div>
      )}
    </Link>
  );
}

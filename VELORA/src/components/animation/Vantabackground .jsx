import React, { useEffect, useRef } from 'react';

/**
 * Vanta.js Globe background in VELORA colors.
 * Loads three r134 + Vanta from a CDN (same as the official snippet), so it does not
 * depend on npm / bundler / three version issues. No npm install needed.
 */

const THREE_SRC = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js';
const VANTA_SRC = 'https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.globe.min.js';

// Set to false to show the animation even when the OS has "reduce motion" turned on.
const RESPECT_REDUCED_MOTION = true;

let loadingPromise = null;

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) {
      if (existing.dataset.loaded === 'true') return resolve();
      existing.addEventListener('load', resolve);
      existing.addEventListener('error', reject);
      return;
    }
    const s = document.createElement('script');
    s.src = src;
    s.async = false;
    s.onload = () => {
      s.dataset.loaded = 'true';
      resolve();
    };
    s.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.head.appendChild(s);
  });
}

function loadVanta() {
  if (window.THREE && window.VANTA && window.VANTA.GLOBE) return Promise.resolve();
  if (!loadingPromise) {
    // three must load first, then Vanta
    loadingPromise = loadScript(THREE_SRC)
      .then(() => loadScript(VANTA_SRC))
      .catch((err) => {
        loadingPromise = null;
        throw err;
      });
  }
  return loadingPromise;
}

export default function VantaBackground({ className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (RESPECT_REDUCED_MOTION && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      console.info('[Vanta] skipped: your OS has "reduce motion" enabled.');
      return;
    }

    let effect = null;
    let cancelled = false;

    loadVanta()
      .then(() => {
        if (cancelled || !ref.current) return;

        // Globe size depends on the box width, so it never spills outside the screen.
        // Smaller number = smaller globe. Tweak these four values if you want it bigger/smaller.
        const w = ref.current.clientWidth;
        const globeSize = w < 480 ? 0.5 : w < 768 ? 0.62 : w < 1280 ? 0.7 : 0.8;

        effect = window.VANTA.GLOBE({
          el: ref.current,
          THREE: window.THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,

          // VELORA colors
          color: 0xff7417, // orange
          color2: 0x202124, // charcoal
          backgroundColor: 0xf7f5f0, // warm ivory
          backgroundAlpha: 0, // transparent: the section's bg-cream shows through

          size: globeSize,
          points: 10.0,
          maxDistance: 22.0,
          spacing: 17.0,
        });
      })
      .catch((err) => {
        console.error('[Vanta] could not start. Check the Network tab for blocked scripts.', err);
      });

    return () => {
      cancelled = true;
      if (effect) effect.destroy();
    };
  }, []);

  return <div ref={ref} className={className} aria-hidden="true" />;
}
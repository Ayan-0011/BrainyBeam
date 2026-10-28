// Shared geometry for the single travelling brand name (see BrandMark.jsx / Hero.jsx).
// The numbers mirror the CSS clamp() values in hero-nav.css so JS and CSS agree.
const clamp = (min, value, max) => Math.min(max, Math.max(min, value));

export const viewWidth = () => document.documentElement.clientWidth;

// --hx-pad: clamp(16px, 2.6vw, 36px)
export const heroPad = () => clamp(16, window.innerWidth * 0.026, 36);

// top offset of the navbar row: clamp(16px, 2.2vw, 28px)
export const dockTop = () => clamp(16, window.innerWidth * 0.022, 28);

// size of the brand name once it has docked in the navbar: clamp(18px, 1.8vw, 26px)
export const dockFont = () => clamp(18, window.innerWidth * 0.018, 26);

// Fit a word element to the hero width (same maths the hero always used).
export function fitWord(el, availableWidth = (viewWidth() - heroPad() * 2)) {
  if (!el) return;
  el.style.fontSize = '100px';
  const width = el.offsetWidth || 1;
  el.style.fontSize = `${(100 * availableWidth * 0.97) / width}px`;
}

// Where the brand sits once docked (viewport coordinates of its centre) and how much it is scaled.
export function dockState(logo) {
  const big = parseFloat(getComputedStyle(logo).fontSize) || 100;
  const font = dockFont();
  return { x: viewWidth() / 2, y: dockTop() + font / 2, scale: font / big };
}

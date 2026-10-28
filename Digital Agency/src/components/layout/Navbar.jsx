import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { gsap } from '../../animations/gsapConfig.js';
import { getLenis } from '../../animations/smoothScroll.js';
import { brand } from '../../config/brand.js';
import { navigation } from '../../config/navigation.js';
import BrandMark from './BrandMark.jsx';

const links = [{ label: 'Home', href: '/' }, ...navigation];

function useClock() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return now;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const burgerRef = useRef(null);
  const tl = useRef(null);
  const wasOpen = useRef(false);
  const { pathname } = useLocation();
  const now = useClock();

  const time = now.toLocaleTimeString('en-GB', { hour12: false });
  const tz = new Intl.DateTimeFormat('en', { timeZoneName: 'shortOffset' })
    .formatToParts(now)
    .find(part => part.type === 'timeZoneName')?.value;

  // close on route change
  useEffect(() => setOpen(false), [pathname]);

  // menu timeline (built once, played / reversed)
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({ paused: true, defaults: { ease: 'power4.inOut' } })
        .set(menuRef.current, { visibility: 'visible' }, 0)
        .fromTo(menuRef.current, { clipPath: 'inset(0% 0% 100% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.85 }, 0)
        .fromTo('.nv-link-inner', { yPercent: 110 }, { yPercent: 0, duration: 0.8, stagger: 0.06, ease: 'power4.out' }, 0.35)
        .fromTo('.nv-info > *, .nv-clock > *', { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out' }, 0.45);
      if (reduce) timeline.timeScale(8); // near-instant, still ends in the right state
      tl.current = timeline;
    }, menuRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!tl.current) return undefined;
    if (open) tl.current.timeScale(1).play();
    else tl.current.timeScale(1.3).reverse();
    document.body.classList.toggle('menu-open', open);

    // pause smooth scrolling underneath the menu
    const lenis = getLenis();
    if (open) lenis?.stop(); else lenis?.start();

    // keyboard: move focus into the menu (once it is visible), and back to the burger when it closes
    let focusTimer;
    if (open) focusTimer = setTimeout(() => menuRef.current?.querySelector('a')?.focus({ preventScroll: true }), 80);
    else if (wasOpen.current) burgerRef.current?.focus({ preventScroll: true });
    wasOpen.current = open;

    return () => { clearTimeout(focusTimer); document.body.classList.remove('menu-open'); getLenis()?.start(); };
  }, [open]);

  useEffect(() => {
    const onKey = event => event.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // keep Tab inside the menu while it is open
  const trapTab = event => {
    if (event.key !== 'Tab' || !open) return;
    const items = [burgerRef.current, ...menuRef.current.querySelectorAll('a')];
    const first = items[0];
    const last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  };

  return <>
    {/* the single, animated brand name (links to "/") */}
    <BrandMark />

    <header className={`nv ${open ? 'nv--open' : ''}`} onKeyDown={trapTab}>
      <button ref={burgerRef} className="nv-burger" onClick={() => setOpen(value => !value)} aria-expanded={open} aria-controls="site-menu" aria-label={open ? 'Close menu' : 'Open menu'}>
        <span /><span />
      </button>
    </header>

    <div id="site-menu" ref={menuRef} className={`nv-menu ${open ? 'nv-menu--open' : ''}`} aria-hidden={!open} inert={!open ? '' : undefined} onKeyDown={trapTab} data-lenis-prevent>
      <div className="nv-info">
        <p className="nv-about">We are based in <em>{brand.city}</em> and work remotely.</p>
      </div>
      <ul className="nv-list">
        {links.map(({ label, href }) => <li className="nv-item" key={href}>
          <NavLink to={href} end={href === '/'} className="nv-link" tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>
            <span className="nv-link-inner">{label}</span>
          </NavLink>
        </li>)}
      </ul>
      {/* time lives at the bottom of the menu */}
      <div className="nv-clock">
        <p className="nv-time">{time}</p>
        <p className="nv-tz">Current time zone ({tz})</p>
      </div>
    </div>
  </>;
}

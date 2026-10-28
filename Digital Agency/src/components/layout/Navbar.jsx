import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { gsap } from '../../animations/gsapConfig.js';
import { brand } from '../../config/brand.js';
import { navigation } from '../../config/navigation.js';

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
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const tl = useRef(null);
  const { pathname } = useLocation();
  const now = useClock();

  const isHome = pathname === '/';
  const time = now.toLocaleTimeString('en-GB', { hour12: false });
  const tz = new Intl.DateTimeFormat('en', { timeZoneName: 'shortOffset' })
    .formatToParts(now)
    .find(part => part.type === 'timeZoneName')?.value;

  // close on route change
  useEffect(() => setOpen(false), [pathname]);

  // centre logo appears after the hero (always visible on inner pages)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // menu timeline (built once, played / reversed)
  useEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({ paused: true, defaults: { ease: 'power4.inOut' } })
        .set(menuRef.current, { visibility: 'visible' }, 0)
        .fromTo(menuRef.current, { clipPath: 'inset(0% 0% 100% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.85 }, 0)
        .fromTo('.nv-link-inner', { yPercent: 110 }, { yPercent: 0, duration: 0.8, stagger: 0.06, ease: 'power4.out' }, 0.35)
        .fromTo('.nv-info > *', { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out' }, 0.45);
    }, menuRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!tl.current) return undefined;
    if (open) tl.current.timeScale(1).play();
    else tl.current.timeScale(1.3).reverse();
    document.body.classList.toggle('menu-open', open);
    return () => document.body.classList.remove('menu-open');
  }, [open]);

  useEffect(() => {
    const onKey = event => event.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const showLogo = scrolled || !isHome || open;

  return <>
    <header className={`nv ${showLogo ? 'nv--logo' : ''} ${open ? 'nv--open' : ''}`}>
     
      <Link to="/" className="nv-logo" aria-label={`${brand.name} home`}>{brand.heroWord}</Link>

      <button className="nv-burger" onClick={() => setOpen(value => !value)} aria-expanded={open} aria-controls="site-menu" aria-label={open ? 'Close menu' : 'Open menu'}>
        <span /><span />
      </button>
    </header>

    <div id="site-menu" ref={menuRef} className={`nv-menu ${open ? 'nv-menu--open' : ''}`} aria-hidden={!open} data-lenis-prevent>
      <div className="nv-info">
        <p className="nv-about">We are based in <em>{brand.city}</em> and work remotely.</p>
        <p className="nv-time">{time}</p>
        <p className="nv-tz">Current time zone ({tz})</p>
      </div>
      <ul className="nv-list">
        {links.map(({ label, href }) => <li className="nv-item" key={href}>
          <NavLink to={href} end={href === '/'} className="nv-link" tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>
            <span className="nv-link-inner">{label}</span>
          </NavLink>
        </li>)}
      </ul>
    </div>
  </>;
}

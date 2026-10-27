import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X, Asterisk } from 'lucide-react';
import gsap from 'gsap';
import { brand } from '../../config/brand.js';
import Brand from '../ui/Brand.jsx';
import { navigation } from '../../config/navigation.js';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);
  const itemsRef = useRef([]);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  const headerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => headerRef.current?.classList.toggle('is-scrolled', window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    const panel = panelRef.current;
    if (!panel) return undefined;

    if (open) {
      gsap.set(panel, { autoAlpha: 1, clipPath: 'inset(0% 0% 100% 0% round 18px)' });
      gsap.timeline()
        .to(panel, { clipPath: 'inset(0% 0% 0% 0% round 18px)', duration: 0.72, ease: 'power4.inOut' })
        .fromTo(itemsRef.current.filter(Boolean), { y: 38, opacity: 0, rotate: 2 }, { y: 0, opacity: 1, rotate: 0, stagger: 0.075, duration: 0.55, ease: 'power3.out' }, '-=0.28')
        .fromTo('.menu-meta', { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.4 }, '-=0.2');
    } else {
      gsap.to(panel, { clipPath: 'inset(0% 0% 100% 0% round 18px)', duration: 0.48, ease: 'power3.inOut', onComplete: () => gsap.set(panel, { autoAlpha: 0 }) });
    }

    return () => document.body.classList.remove('menu-open');
  }, [open]);

  return <header className="site-nav" ref={headerRef}>
    <Brand />
    <div className="nav-center"><span>INDEPENDENT DIGITAL STUDIO</span><span>{brand.location}</span></div>
    <div className="nav-actions">
      <Link className="nav-brief" to="/contact">Start a project <ArrowUpRight size={14} /></Link>
      <button className={`menu-button ${open ? 'menu-button-open' : ''}`} onClick={() => setOpen(value => !value)} aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open}>
        <span>{open ? 'CLOSE' : 'MENU'}</span><i>{open ? <X size={17} /> : <Menu size={17} />}</i>
      </button>
    </div>
    <div className="menu-panel" ref={panelRef} aria-hidden={!open}>
      <div className="menu-panel-top"><span>{brand.name}® — NAVIGATION</span><span>GOOD IDEAS MOVE PEOPLE.</span><button onClick={() => setOpen(false)} aria-label="Close menu"><X size={19} /></button></div>
      <div className="menu-panel-body">
        <div className="menu-links">
          {navigation.map(({ number, label, href }, index) => <NavLink key={href} to={href} onClick={() => setOpen(false)} ref={element => { itemsRef.current[index] = element; }}><span>{number}</span><b>{label}</b><ArrowUpRight /></NavLink>)}
        </div>
        <div className="menu-aside"><div className="menu-glyph"><div className="glyph-ring" /><div className="glyph-core">F<span>/</span>S</div><Asterisk className="glyph-star" /></div><div className="menu-meta"><span>INDEPENDENT THINKING.<br />DIGITAL THINGS WITH FEELING.</span><a href={`mailto:${brand.email}`}>{brand.email.toUpperCase()} <ArrowUpRight size={13} /></a><span className="menu-availability"><i /> AVAILABLE FOR SELECT PROJECTS</span></div></div>
      </div>
      <div className="menu-panel-bottom"><span>© {brand.name} {brand.year}</span><span>SCROLL LESS. NOTICE MORE.</span><span>01 — 04</span></div>
    </div>
    {open && <button className="menu-scrim" onClick={() => setOpen(false)} aria-label="Close navigation overlay" />}
  </header>;
}

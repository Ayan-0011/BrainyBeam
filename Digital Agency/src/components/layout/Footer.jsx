import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { gsap } from '../../animations/gsapConfig.js';
import { brand } from '../../config/brand.js';
import Brand from '../ui/Brand.jsx';

const SOCIAL_NAMES = { WA: 'WhatsApp', X: 'X', IG: 'Instagram', LI: 'LinkedIn' };
const socials = brand.socials.filter(s => /^https?:/.test(s.href));
const WORD = [...'AWESOME'];

export default function Footer() {
  const root = useRef(null);
  const word = useRef(null);

  // fit the giant wordmark to the footer width
  useLayoutEffect(() => {
    const fit = () => {
      const el = word.current;
      const box = root.current;
      if (!el || !box) return;
      const pad = parseFloat(getComputedStyle(box).paddingLeft) * 2;
      el.style.fontSize = '100px';
      el.style.fontSize = `${(100 * (box.clientWidth - pad)) / el.offsetWidth}px`;
    };
    fit();
    document.fonts?.ready.then(fit);
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, []);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {
        gsap.from('.footer-col, .footer-brand', { autoAlpha: 0, y: 28, duration: 0.8, stagger: 0.08, ease: 'power3.out', scrollTrigger: { trigger: root.current, start: 'top 92%', once: true } });
        gsap.from('.fg-char > span', { yPercent: 115, duration: 1.1, stagger: 0.05, ease: 'power4.out', scrollTrigger: { trigger: '.footer-giant', start: 'top 98%', once: true } });
      }, root);
      return () => ctx.revert();
    });
    return () => mm.revert();
  }, []);

  return <footer className="footer" ref={root}>
    <div className="footer-main">
      <div className="footer-brand"><Brand light /><p>Independent thinking.<br />Digital things with feeling.</p></div>

      <nav className="footer-col" aria-label="Footer">
        <span className="footer-label">Navigate</span>
        <div className="footer-links">
          <Link to="/">Home <ArrowUpRight size={13} /></Link>
          <Link to="/work">Work <ArrowUpRight size={13} /></Link>
          <Link to="/about">Studio <ArrowUpRight size={13} /></Link>
          <Link to="/services">Services <ArrowUpRight size={13} /></Link>
          <Link to="/contact">Contact <ArrowUpRight size={13} /></Link>
        </div>
      </nav>

      <div className="footer-col footer-contact">
        <span className="footer-label">Say hello</span>
        <div className="footer-links">
          <a href={`mailto:${brand.email}`}>{brand.email} <ArrowUpRight size={13} /></a>
          <span className="footer-plain">{brand.location}</span>
        </div>
      </div>

      <div className="footer-col footer-follow">
        <span className="footer-label">Follow</span>
        <div className="footer-links">
          {socials.map(s => <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">{SOCIAL_NAMES[s.label] || s.label} <ArrowUpRight size={13} /></a>)}
        </div>
      </div>

      <a href="#top" className="back-top" onClick={event => { event.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>BACK TO TOP ↑</a>
    </div>

    <div className="footer-giant" aria-hidden="true">
      <div className="footer-giant-word" ref={word}>
        {WORD.map((char, i) => <span className={`fg-char ${char === '/' ? 'fg-slash' : ''}`} key={i}><span>{char}</span></span>)}
      </div>
    </div>

    <div className="footer-bottom"><span>© {brand.year} {brand.name} STUDIO — CONCEPT BRAND</span><span>BUILT TO BE DIFFERENT. MADE TO WORK.</span><div><Link to="/privacy-policy">PRIVACY</Link><Link to="/terms">TERMS</Link></div></div>
  </footer>;
}
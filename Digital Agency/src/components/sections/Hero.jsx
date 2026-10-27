import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDownRight } from 'lucide-react';
import { gsap } from '../../animations/gsapConfig.js';

export default function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.from('.hero-kicker > *', { y: 18, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out', delay: 0.12 });
      gsap.from('.hero-word-line', { yPercent: 125, rotate: 3, opacity: 0, duration: 1.2, stagger: 0.12, ease: 'power4.out', delay: 0.18 });
      gsap.from('.hero-summary, .hero-sticker, .hero-scroll-cue', { y: 24, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out', delay: 0.65 });
      gsap.to('.hero-emblem', { rotate: 360, duration: 32, repeat: -1, ease: 'none' });
      gsap.to('.emblem-petal', { rotate: 90, scale: 1.08, duration: 4, repeat: -1, yoyo: true, stagger: 0.25, ease: 'sine.inOut' });
      gsap.to('.hero-orbit-a', { rotate: 18, x: 20, y: -10, scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom top', scrub: 1 } });
      gsap.to('.hero-orbit-b', { rotate: -28, x: -30, y: 30, scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom top', scrub: 1 } });
      gsap.to('.hero-emblem-wrap', { yPercent: 30, scale: 0.75, opacity: 0.55, scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom top', scrub: 1 } });
    }, ref);
    return () => context.revert();
  }, []);

  return <section className="hero" id="top" ref={ref}>
    <div className="hero-kicker"><span>CREATIVE TECHNOLOGY FOR AMBITIOUS PEOPLE</span><span>EST. 2026 — INDEPENDENT BY DESIGN</span></div>
    <div className="hero-composition">
      <div className="hero-emblem-wrap" aria-hidden="true">
        <div className="hero-orbit hero-orbit-a" /><div className="hero-orbit hero-orbit-b" />
        <div className="hero-emblem"><div className="emblem-petal petal-a" /><div className="emblem-petal petal-b" /><div className="emblem-petal petal-c" /><div className="emblem-petal petal-d" /><div className="emblem-core">F<span>/</span>S</div></div>
        <span className="emblem-note note-a">INDEPENDENT BY DESIGN</span><span className="emblem-note note-b">FIG. 001 / SHIFT THE EXPECTED</span>
      </div>
      <div className="hero-type">
        <h1><span className="hero-word-line">MAKE IT</span><span className="hero-word-line second">MEAN <i>MORE.</i></span></h1>
        <div className="hero-sticker"><span>GOOD WORK</span><b>NO<br />NOISE</b><ArrowDownRight /></div>
      </div>
    </div>
    <div className="hero-bottom"><p className="hero-summary">We turn sharp thinking into brands, digital experiences and technology people <em>want to spend time with.</em></p><Link className="hero-round-link" to="/work" aria-label="Explore work"><ArrowDownRight /></Link><div className="hero-scroll-cue"><span>SCROLL TO GET THE PICTURE</span><div><i /></div></div></div>
    <div className="hero-index"><span>01 / 05</span><span>KEEP GOING ↓</span></div>
  </section>;
}

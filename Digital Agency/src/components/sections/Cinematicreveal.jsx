import { useEffect, useLayoutEffect, useRef } from 'react';
import { gsap } from '../../animations/gsapConfig.js';
import '../../styles/cinematic-reveal.css';

// Layout lives in CSS custom properties so the same markup serves desktop, tablet and mobile.
//   --l / --t / --w   : left %, top % (of the stage) and width (vw units) on tablet + desktop
//   --ml / --mt / --mw: the same three values for phones (<= 720px)
//   speed             : how far the card drifts over the whole scroll (fraction of the viewport height)
// DOM order is also stacking order, so later cards overlap earlier ones.
const CARDS = [
  { src: '/images/p1.avif', alt: 'Velocity Phantom concept car, seen from above', l: 5,  t: 12, w: 16,   ml: 4,  mt: 3,  mw: 30, speed: 0.1 },
  { src: '/images/p4.avif', alt: 'Design Matters poster with black brush strokes', l: 78, t: 9,  w: 15,   ml: 64, mt: 6,  mw: 30, speed: 0.16 },
  { src: '/images/p3.avif', alt: 'Boreal VR headset campaign portrait',            l: 17, t: 42, w: 13.5, ml: 34, mt: 14, mw: 28, speed: 0.22 },
  { src: '/images/p6.avif', alt: 'Yellow phone interface on dark phone backs',     l: 84, t: 40, w: 11.5, ml: 66, mt: 66, mw: 28, speed: 0.08 },
  { src: '/images/p2.avif', alt: 'Relaxo black product packaging on dark fabric',  l: 72, t: 56, w: 13,   ml: 3,  mt: 70, mw: 30, speed: 0.2 },
  { src: '/images/p5.avif', alt: 'Black and red desk object on a white surface',   l: 25, t: 68, w: 10, ml: 35, mt: 76, mw: 27, speed: 0.12 },
];

const HEADLINE = ['Design that', 'captivates today', '& inspires', 'tomorrow'];

const VIDEO_SRC = '/videos/JvsYQ6i2XehdtVamXDEovL33lw.mp4';

export default function CinematicReveal() {
  const root = useRef(null);
  const video = useRef(null);

  // Keep the video cheap: it only plays while the section is on screen (and never under reduced motion).
  useEffect(() => {
    const el = video.current;
    if (!el) return undefined;
    el.muted = true; // some browsers ignore the attribute alone and block autoplay
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { el.pause(); return undefined; }

    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) el.play().catch(() => {});
      else el.pause();
    }, { threshold: 0.01 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined; // cards simply stay visible

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.cine-card');
      const clips = gsap.utils.toArray('.cine-clip');
      const imgs = gsap.utils.toArray('.cine-img');
      const isSmall = () => window.innerWidth <= 720;

      // starting state: every card fully hidden, collapsed to its bottom edge
      gsap.set(clips, { clipPath: 'inset(100% 0% 0% 0% round 14px)', yPercent: 16 });
      gsap.set(imgs, { scale: 1.5 });

      const scrollTrigger = {
        trigger: root.current,
        start: 'top top',            // the stage is stuck (position: sticky) from here ...
        end: 'bottom bottom',        // ... until the end of the tall section
        scrub: true,                 // Lenis already drives ScrollTrigger.update, so no extra smoothing
        invalidateOnRefresh: true,
      };

      // ---------- main timeline: reveals bottom -> top, staggered ----------
      const tl = gsap.timeline({ defaults: { ease: 'none' }, scrollTrigger });
      const STEP = 1.05;
      const LENGTH = 2.8;
      cards.forEach((_, i) => {
        const at = 0.3 + i * STEP;
        tl.to(clips[i], { clipPath: 'inset(0% 0% 0% 0% round 14px)', yPercent: 0, duration: LENGTH, ease: 'power2.inOut' }, at)
          .to(imgs[i], { scale: 1, duration: LENGTH + 0.6, ease: 'power2.out' }, at);
      });
      // headline lines rise out of their masks first, then the cards start arriving
      tl.fromTo('.cine-line > span', { yPercent: 115 }, { yPercent: 0, duration: 1.6, stagger: 0.25, ease: 'power3.out' }, 0);
      // the video slowly settles and a soft shade grows so the cards read against it
      tl.fromTo('.cine-video', { scale: 1.16 }, { scale: 1, duration: 10 }, 0)
        .fromTo('.cine-shade', { opacity: 0.55 }, { opacity: 1, duration: 10 }, 0)
        .to({}, { duration: 0.001 }, 10); // pins the timeline length at 10 so the last card has time to settle

      // ---------- parallax: each card drifts at its own pace (separate wrapper, so it never fights the reveal) ----------
      cards.forEach((card, i) => {
        const { speed } = CARDS[i];
        gsap.fromTo(card,
          { y: () => window.innerHeight * speed * (isSmall() ? 0.55 : 1) },
          { y: () => -window.innerHeight * speed * (isSmall() ? 0.55 : 1), ease: 'none', scrollTrigger: { ...scrollTrigger } });
      });
      // inner image drifts a little against its frame
      imgs.forEach((img, i) => {
        gsap.fromTo(img, { yPercent: i % 2 ? -5 : 5 }, { yPercent: i % 2 ? 5 : -5, ease: 'none', scrollTrigger: { ...scrollTrigger } });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section className="cine" ref={root} aria-label="Selected work over studio reel">
      <div className="cine-stage">
        <div className="cine-frame">
          <video
            ref={video}
            className="cine-video"
            src={VIDEO_SRC}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            aria-hidden="true"
            tabIndex={-1}
          />
          <div className="cine-shade" aria-hidden="true" />

          <div className="cine-layer">
            {CARDS.map(card => (
              <figure
                className="cine-card"
                key={card.src}
                style={{ '--l': `${card.l}%`, '--t': `${card.t}%`, '--w': card.w, '--ml': `${card.ml}%`, '--mt': `${card.mt}%`, '--mw': card.mw }}
              >
                <div className="cine-clip">
                  <img className="cine-img" src={card.src} alt={card.alt} width="350" height="540" loading="lazy" decoding="async" draggable="false" />
                </div>
              </figure>
            ))}
          </div>

          <h2 className="cine-title" aria-label="Design that captivates today & inspires tomorrow">
            {HEADLINE.map(line => (
              <span className="cine-line" key={line} aria-hidden="true"><span>{line}</span></span>
            ))}
          </h2>
        </div>
      </div>
    </section>
  );
}
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { gsap } from '../../animations/gsapConfig.js';
import { once, revealHeads, useReveal } from '../../animations/useReveal.js';
import { brand } from '../../config/brand.js';
import { studioTimezone } from '../../data/studio.js';
import SectionHead from '../ui/SectionHead.jsx';
import ContactForm from '../ui/ContactForm.jsx';

const SOCIAL_NAMES = { WA: 'WhatsApp', X: 'X', IG: 'Instagram', LI: 'LinkedIn' };
// only real links; a bare wa.me/ (no number) is a placeholder, so no phone / WhatsApp is shown until one is configured
const socials = brand.socials.filter(s => /^https?:/.test(s.href) && !/wa\.me\/?$/.test(s.href));

function LocalTime() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(id);
  }, []);
  return <>{new Intl.DateTimeFormat('en-GB', { timeZone: studioTimezone, hour: '2-digit', minute: '2-digit', hour12: false, timeZoneName: 'short' }).format(now)}</>;
}

export default function ContactPanel() {
  const root = useRef(null);

  useReveal(root, () => {
    revealHeads();
    gsap.from('.ct-field', { autoAlpha: 0, y: 28, duration: 0.8, stagger: 0.07, ease: 'power3.out', scrollTrigger: once(root.current.querySelector('.ct-layout'), 'top 80%') });
    gsap.from('.ct-info > *', { autoAlpha: 0, y: 24, duration: 0.8, stagger: 0.1, ease: 'power3.out', scrollTrigger: once(root.current.querySelector('.ct-layout'), 'top 80%') });
  }, []);

  return (
    <section className="ct-panel pg-surface pg-surface--ink" id="start" ref={root}>
      <SectionHead
        eyebrow="( Start A Project )"
        lines={['Tell us what', <>you&rsquo;re <em>thinking.</em></>]}
        intro="Fill in what you can. Only the essentials are required, and a first conversation doesn't need a perfect brief."
      />

      <div className="ct-layout">
        <ContactForm variant="full" />

        <aside className="ct-info" aria-label="Contact details">
          <div>
            <span className="eyebrow">Email</span>
            <a className="ct-mail" href={`mailto:${brand.email}`}>{brand.email} <ArrowUpRight size={16} /></a>
          </div>
          <div>
            <span className="eyebrow">Studio</span>
            <p>{brand.city}, working with teams everywhere.</p>
          </div>
          <div>
            <span className="eyebrow">Local time</span>
            <p className="ct-time"><LocalTime /></p>
          </div>
          <div>
            <span className="eyebrow">Follow</span>
            <ul className="ct-social">
              {socials.map(s => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer">{SOCIAL_NAMES[s.label] || s.label} <ArrowUpRight size={13} /></a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}

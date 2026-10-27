import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function StudioSection() {
  return (
    <section className="studio-section" id="studio">
      <div className="studio-left">
        <span className="eyebrow">SMALL STUDIO. BIG PICTURE.</span>
        <h2>We make the<br />complicated feel<br /><em>obvious.</em></h2>
        <div className="studio-seal"><span>INDEPENDENT<br />THINKING</span><b>↗</b><span>BY DESIGN<br />SINCE DAY ONE</span></div>
      </div>
      <div className="studio-right">
        <div className="studio-image"><div className="studio-image-grid" /><div className="studio-image-type">THINK<br />THEN<br /><i>MAKE.</i></div><span className="image-note">A GOOD PLACE TO START / 001</span></div>
        <p>We're a deliberately independent digital studio bringing strategy, design and technology into the same room. No layers of account managers. No recycled playbooks. Just a close-knit team, a clear point of view and the right people around the table.</p>
        <Link className="text-link" to="/about">MEET THE STUDIO <ArrowUpRight size={15} /></Link>
      </div>
    </section>
  );
}

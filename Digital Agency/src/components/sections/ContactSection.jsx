import { ArrowUpRight } from 'lucide-react';
import ContactForm from '../ui/ContactForm.jsx';
import { brand } from '../../config/brand.js';

export default function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-top"><span className="eyebrow">GOT SOMETHING GOOD?</span><span>LET'S MAKE IT REAL ↘</span></div>
      <div className="contact-layout">
        <div className="contact-heading">
          <h2>Have a<br />good <em>one.</em></h2>
          <p>Tell us what you're thinking. Big brief, small question, or just a feeling that something could be better.</p>
          <a href={`mailto:${brand.email}`}>{brand.email.toUpperCase()} <ArrowUpRight size={15} /></a>
        </div>
        <ContactForm />
      </div>
      <div className="contact-graphic" aria-hidden="true"><div className="contact-graphic-ring" /><span>GOOD<br />THINGS<br /><i>START</i><br />HERE.</span></div>
    </section>
  );
}

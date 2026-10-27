import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import ServiceAccordion from '../ui/ServiceAccordion.jsx';

export default function ServicesSection({ full = false }) {
  return (
    <section className={`services-section ${full ? 'services-full' : ''}`} id="services">
      <div className="services-intro">
        <span className="eyebrow">WHAT WE BRING TO THE TABLE</span>
        <h2>One studio.<br /><em>Many ways in.</em></h2>
        <p>Bring us a problem, a half-formed idea or a very clear ambition. We'll work out what it needs.</p>
        {!full && <Link className="text-link" to="/services">ALL SERVICES <ArrowUpRight size={15} /></Link>}
      </div>
      <ServiceAccordion full={full} />
    </section>
  );
}

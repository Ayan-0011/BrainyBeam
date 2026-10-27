import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import PageIntro from '../components/ui/PageIntro.jsx';
import ServicesSection from '../components/sections/ServicesSection.jsx';
import ContactSection from '../components/sections/ContactSection.jsx';

export default function Services() {
  return <>
    <PageIntro eyebrow="OUR CAPABILITIES" title="The right" italic="kind of help." description="No off-the-shelf packages. We bring the right mix of strategy, craft and technology to the problem in front of us." number="02 — 04" />
    <ServicesSection full />
    <div className="services-note">
      <span className="eyebrow">NOT SURE WHERE TO START?</span>
      <h2>That's a good<br /><em>place to start.</em></h2>
      <Link className="text-link" to="/contact">TELL US ABOUT IT <ArrowUpRight size={15} /></Link>
    </div>
    <ContactSection />
  </>;
}

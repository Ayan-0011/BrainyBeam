import Hero from '../components/sections/Hero.jsx';
import Marquee from '../components/ui/Marquee.jsx';
import WorkSection from '../components/sections/WorkSection.jsx';
import StudioSection from '../components/sections/StudioSection.jsx';
import ServicesSection from '../components/sections/ServicesSection.jsx';
import Manifesto from '../components/sections/Manifesto.jsx';
import ContactSection from '../components/sections/ContactSection.jsx';

export default function Home() {
  return <>
    <Hero />
    <Marquee>INDEPENDENT BY DESIGN</Marquee>
    <WorkSection compact />
    <StudioSection />
    <ServicesSection />
    <Manifesto />
    <ContactSection />
  </>;
}

import Hero from '../components/sections/Hero.jsx';
import ShowcaseSection from '../components/sections/ShowcaseSection.jsx';
import Marquee from '../components/ui/Marquee.jsx';
import WorkSection from '../components/sections/WorkSection.jsx';
import StudioSection from '../components/sections/StudioSection.jsx';
import ServicesSection from '../components/sections/ServicesSection.jsx';
import Manifesto from '../components/sections/Manifesto.jsx';
import ContactSection from '../components/sections/ContactSection.jsx';
import WhatWeDo from '../components/sections/Whatwedo.jsx';
import CtaSection from '../components/sections/Ctasection.jsx';

export default function Home() {
  return <>
    <Hero />
    <ShowcaseSection />
    <Marquee>INDEPENDENT BY DESIGN</Marquee>
    <WorkSection compact />
    <WhatWeDo/>
    <StudioSection />
    {/* <ServicesSection /> */}
    <Manifesto />
    <CtaSection/>
    {/* <ContactSection /> */}
  </>;
}

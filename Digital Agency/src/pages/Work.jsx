import PageIntro from '../components/ui/PageIntro.jsx';
import WorkSection from '../components/sections/WorkSection.jsx';
import Marquee from '../components/ui/Marquee.jsx';
import ContactSection from '../components/sections/ContactSection.jsx';

export default function Work() {
  return <>
    <PageIntro eyebrow="SELECTED PROJECTS / 2024—2026" title="Proof over" italic="promises." description="A few collaborations, each with a different question to answer and a point of view worth protecting." />
    <WorkSection />
    <Marquee>GOOD WORK TRAVELS</Marquee>
    <ContactSection />
  </>;
}

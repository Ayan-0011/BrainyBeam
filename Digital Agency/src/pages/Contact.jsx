import PageIntro from '../components/ui/PageIntro.jsx';
import ContactSection from '../components/sections/ContactSection.jsx';

export default function Contact() {
  return <>
    <PageIntro eyebrow="LET'S START SOMETHING" title="Have a" italic="good one." description="A first conversation doesn't need a perfect brief. Just tell us what you're thinking." number="04 — 04" />
    <ContactSection />
  </>;
}

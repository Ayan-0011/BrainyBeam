import PageIntro from '../components/ui/PageIntro.jsx';
import Marquee from '../components/ui/Marquee.jsx';
import ContactSection from '../components/sections/ContactSection.jsx';

export default function About() {
  return <>
    <PageIntro eyebrow="A LITTLE ABOUT US" title="Independent" italic="by design." description="A small, curious studio for people who want to make a difference — not just make more noise." number="03 — 04" />
    <section className="about-statement">
      <span className="eyebrow">OUR POINT OF VIEW</span>
      <h2>We believe the best work happens when <em>clear thinking</em> meets brave making.</h2>
      <div className="about-orbit"><div className="glyph-core">F<span>/</span>S</div></div>
    </section>
    <section className="about-values">
      <article><span>01 / CURIOSITY</span><h3>Ask better<br /><em>questions.</em></h3><p>We start by listening, looking closer and getting to the heart of what actually needs to change.</p></article>
      <article><span>02 / CRAFT</span><h3>Care about<br /><em>the details.</em></h3><p>Every choice earns its place. From the big idea to the tiny interaction someone feels but may never notice.</p></article>
      <article><span>03 / COLLABORATION</span><h3>Better, <em>together.</em></h3><p>Good partnerships make good work. We keep the team close, the conversations honest and the process human.</p></article>
    </section>
    <Marquee dark>MAKE IT MATTER</Marquee>
    <ContactSection />
  </>;
}

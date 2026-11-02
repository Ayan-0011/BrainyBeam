import PageHero from '../components/ui/PageHero.jsx';
import Marquee from '../components/ui/Marquee.jsx';
import WhoWeAre from '../components/sections/WhoWeAre.jsx';
import Expertise from '../components/sections/Expertise.jsx';
import Philosophy from '../components/sections/Philosophy.jsx';
import ProcessTimeline from '../components/sections/ProcessTimeline.jsx';
import WhyUs from '../components/sections/WhyUs.jsx';
import PageCta from '../components/sections/PageCta.jsx';
import { aboutProcess, whyUs } from '../data/studio.js';

export default function About() {
  return <>
    <PageHero
      className="pg-hero--about"
      eyebrow="( About The Studio )"
      meta="AHMEDABAD · WORKING EVERYWHERE"
      lines={['Independent', <>by <em>design.</em></>]}
      intro="A small, curious digital studio for people who want to make a difference, not just more noise. Strategy, design and technology in the same room."
    >
      <figure className="ab-figure">
        <img src="/images/img.jpg" alt="" width="2400" height="1500" loading="eager" decoding="async" style={{"objectFit":"cover"}}/>
        <svg className="ab-badge" viewBox="0 0 120 120" aria-hidden="true">
          <defs><path id="ab-circle" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" /></defs>
          <text><textPath href="#ab-circle" textLength="284" lengthAdjust="spacing">INDEPENDENT BY DESIGN ✳ SMALL STUDIO ✳ BIG PICTURE ✳</textPath></text>
        </svg>
      </figure>
    </PageHero>

    <Marquee>INDEPENDENT BY DESIGN</Marquee>
    <WhoWeAre />
    <Expertise />
    <Philosophy />

    <ProcessTimeline
      variant="vertical"
      tone="ink"
      id="process"
      eyebrow="( Our Process )"
      lines={['Five steps from', <>hello to <em>launch.</em></>]}
      intro="A clear path with no surprises, and something concrete to review at every stage."
      steps={aboutProcess}
    />

    <WhyUs
      variant="list"
      tone="paper"
      id="why-us"
      eyebrow="( Why Choose Us )"
      lines={['Partnership,', <>not just <em>projects.</em></>]}
      intro="Skip the agency overhead. Work with a small team that is tuned for clarity and execution."
      items={whyUs}
    />

    <PageCta
      eyebrow="( Next )"
      lines={["Let's build", <>something <em>good.</em></>]}
      sub="Big brief, small question, or just a feeling that something could be better. Start the conversation."
    />
  </>;
}

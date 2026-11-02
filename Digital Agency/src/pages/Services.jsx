import PageHero from '../components/ui/PageHero.jsx';
import ServiceDetail from '../components/sections/ServiceDetail.jsx';
import ProcessTimeline from '../components/sections/ProcessTimeline.jsx';
import WhyUs from '../components/sections/WhyUs.jsx';
import FaqList from '../components/sections/FaqList.jsx';
import PageCta from '../components/sections/PageCta.jsx';
import { getLenis } from '../animations/smoothScroll.js';
import { services } from '../data/services.js';
import { serviceBenefits, serviceFaqs, serviceProcess } from '../data/studio.js';

// jump to a service; uses the same Lenis instance as the rest of the site when it is running
const jump = (event, id) => {
  const target = document.getElementById(id);
  if (!target) return;
  event.preventDefault();
  const lenis = getLenis();
  if (lenis) lenis.scrollTo(target, { duration: 1.2 });
  else target.scrollIntoView({ behavior: 'smooth' });
};

export default function Services() {
  return <>
    <PageHero
      className="pg-hero--services"
      eyebrow="( Our Capabilities )"
      meta={`${String(services.length).padStart(2, '0')} DISCIPLINES / ONE STUDIO`}
      lines={['The right', <>kind of <em>help.</em></>]}
      intro="No off-the-shelf packages. We bring the right mix of strategy, craft and technology to the problem in front of you."
    >
      <ol className="sv-index" aria-label="Jump to a service">
        {services.map(service => (
          <li key={service.n}>
            <a href={`#service-${service.n}`} onClick={event => jump(event, `service-${service.n}`)}>
              <span>{service.n}</span>
              <b>{service.title}</b>
              <i aria-hidden="true">↓</i>
            </a>
          </li>
        ))}
      </ol>
    </PageHero>

    <ServiceDetail />

    <ProcessTimeline
      variant="row"
      tone="alt"
      id="process"
      eyebrow="( How It Works )"
      lines={['From first call', <>to <em>launch.</em></>]}
      intro="The same five steps whatever the service, scaled to the size of the problem."
      steps={serviceProcess}
    />

    <WhyUs
      variant="split"
      tone="ink"
      id="approach"
      eyebrow="( Why Our Approach )"
      lines={['Built around', <>your <em>outcome.</em></>]}
      intro="What working this way means for you in practice."
      items={serviceBenefits}
    />

    <FaqList
      eyebrow="( Good To Know )"
      lines={['Questions about', <>working <em>together.</em></>]}
      intro="Services, timelines, what we need from you and how collaboration works."
      faqs={serviceFaqs}
      banner={{ title: 'Not sure which service you need?', text: "That's a good place to start. Tell us about the problem and we'll point you in the right direction.", label: 'TELL US ABOUT IT', to: '/contact' }}
    />

    <PageCta
      eyebrow="( Next )"
      lines={["Let's find the", <>right <em>fit.</em></>]}
      sub="Tell us about the problem. We'll recommend the smallest mix of services that solves it."
    />
  </>;
}

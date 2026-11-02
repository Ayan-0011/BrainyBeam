import { ArrowUpRight } from 'lucide-react';
import PageHero from '../components/ui/PageHero.jsx';
import ContactPanel from '../components/sections/ContactPanel.jsx';
import ProcessTimeline from '../components/sections/ProcessTimeline.jsx';
import FaqList from '../components/sections/FaqList.jsx';
import PageCta from '../components/sections/PageCta.jsx';
import { brand } from '../config/brand.js';
import { contactFaqs, contactSteps } from '../data/studio.js';

export default function Contact() {
  return <>
    <PageHero
      className="pg-hero--contact"
      eyebrow="( Let's Start Something )"
      meta={brand.location}
      lines={['Have a', <><em>good one.</em></>]}
      intro="A first conversation doesn't need a perfect brief. Tell us what you're thinking and we'll take it from there."
    >
      <a className="ct-hero-mail" href={`mailto:${brand.email}`}>
        <span className="eyebrow">Prefer email?</span>
        <b>{brand.email}</b>
        <ArrowUpRight size={22} />
      </a>
    </PageHero>

    <ContactPanel />

    <ProcessTimeline
      variant="steps"
      tone="alt"
      id="how-we-start"
      eyebrow="( How We Start )"
      lines={['Four steps to', <>a good <em>start.</em></>]}
      intro="What happens between your first note and the first week of work."
      steps={contactSteps}
    />

    <FaqList
      eyebrow="( Before You Write )"
      lines={['Common questions', <>before <em>you start.</em></>]}
      intro="The things people usually ask us before getting in touch."
      faqs={contactFaqs}
    />

    <PageCta
      eyebrow="( Still Thinking? )"
      side="WRITE TO US ↘"
      lines={['Say hello,', <>we&rsquo;d love <em>to.</em></>]}
      sub="Prefer to skip the form? Send us a note directly and we'll reply with next steps."
      primary={{ label: 'EMAIL THE STUDIO', href: `mailto:${brand.email}` }}
    />
  </>;
}

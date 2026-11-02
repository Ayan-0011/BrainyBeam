import PageHero from '../components/ui/PageHero.jsx';
import StatsStrip from '../components/ui/StatsStrip.jsx';
import Marquee from '../components/ui/Marquee.jsx';
import WorkGrid from '../components/sections/WorkGrid.jsx';
import PageCta from '../components/sections/PageCta.jsx';
import { projects, workCategories } from '../data/projects.js';
import { services } from '../data/services.js';

const stats = [
  { value: projects.length, pad: true, label: 'Selected projects' },
  { value: workCategories.length, pad: true, label: 'Categories' },
  { value: services.length, pad: true, label: 'Disciplines' },
];

export default function Work() {
  return <>
    <PageHero
      className="pg-hero--work"
      eyebrow="( Selected Work )"
      meta="2024 — 2026"
      lines={['Selected', <><em>work.</em></>]}
      intro="Each project started with a question and a point of view worth protecting. A few collaborations, each with a different answer."
    >
      <StatsStrip items={stats} />
    </PageHero>

    <Marquee>GOOD WORK TRAVELS</Marquee>
    <WorkGrid />

    <PageCta
      eyebrow="( Your Project )"
      lines={['Your project', <>could be <em>next.</em></>]}
      sub="Tell us what you're working on. We'll tell you honestly how we could help."
    />
  </>;
}

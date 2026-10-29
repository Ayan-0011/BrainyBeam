import Hero from '../components/sections/Hero.jsx';
import ShowcaseSection from '../components/sections/ShowcaseSection.jsx';
import Marquee from '../components/ui/Marquee.jsx';
import WorkSection from '../components/sections/WorkSection.jsx';
import AchievementsSection from '../components/sections/AchievementsSection.jsx';
import WhatWeDo from '../components/sections/Whatwedo.jsx';
import BenefitsSection from '../components/sections/BenefitsSection.jsx';
import HorizontalScroll from '../components/sections/Horizontalscroll.jsx';
import ToolsSection from '../components/sections/ToolsSection.jsx';
import EngagementSection from '../components/sections/EngagementSection.jsx';
import FaqSection from '../components/sections/FaqSection.jsx';
import ClientStoriesSection from '../components/sections/ClientStoriesSection.jsx';
import Manifesto from '../components/sections/Manifesto.jsx';
import CtaSection from '../components/sections/Ctasection.jsx';

export default function Home() {
  return (
    <>
      {/* Section 1 — Hero */}
      <Hero />

      {/* Section 2 — Cinematic Media Reveal */}
      <ShowcaseSection />

      {/* Editorial Separator */}
      <Marquee>INDEPENDENT BY DESIGN</Marquee>

      {/* Section 3 — Featured Work / Project Showcase */}
      <WorkSection compact />

      {/* Section 4 — Achievements / Metrics */}
      <AchievementsSection />

      {/* Section 5 — What We Do / Services */}
      <WhatWeDo />

      {/* Section 6 — Why Choose Us / Benefits */}
      {/* <BenefitsSection /> */}

      {/* Section 7 — Process / How We Work */}
      <HorizontalScroll />

      {/* Section 8 — Tools & Technology */}
      <ToolsSection />

      {/* Section 9 — Pricing / Engagement Options */}
      <EngagementSection />

      {/* Section 10 — FAQ */}
      <FaqSection />

      {/* Section 11 — Client Stories / Case Highlights */}
      <ClientStoriesSection />

      {/* Section 12 — Studio Perspectives & Insights */}
      <Manifesto />

      {/* Section 13 — Final CTA */}
      <CtaSection />
    </>
  );
}

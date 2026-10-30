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
import CinematicReveal from '../components/sections/Cinematicreveal.jsx';

export default function Home() {
  return (
    <>

      <Hero />
      <CinematicReveal />

      <Marquee>INDEPENDENT BY DESIGN</Marquee>
      <WorkSection compact />

      <AchievementsSection />
      <WhatWeDo />

      <HorizontalScroll />
      <ToolsSection />

      <EngagementSection />
      <FaqSection />

      <ClientStoriesSection />
      
      <Manifesto />
      <CtaSection />

    </>
  );
}

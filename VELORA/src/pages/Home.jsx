import React from 'react';
import Hero from '../components/home/Hero';
import TechStrip from '../components/home/TechStrip';
import ServicesOverview from '../components/home/ServicesOverview';
import FeaturedWork from '../components/home/FeaturedWork';
import WhyVelora from '../components/home/WhyVelora';
import ProcessPreview from '../components/home/ProcessPreview';
import TechAndEngineering from '../components/home/TechAndEngineering';
import AboutPreview from '../components/home/AboutPreview';
import FinalCTA from '../components/home/FinalCTA';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <TechStrip />
      <ServicesOverview />
      <FeaturedWork />
      <WhyVelora />
      <ProcessPreview />
      <TechAndEngineering />
      <FinalCTA />
      {/* <AboutPreview /> */}
    </div>
  );
}

import { Link, useParams } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { ProjectArtwork } from '../components/ui/ProjectCard.jsx';
import ContactSection from '../components/sections/ContactSection.jsx';
import NotFound from './NotFound.jsx';
import { projects } from '../data/projects.js';

export default function CaseStudy() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);
  if (!project) return <NotFound />;

  const [first, second] = project.name.split(' / ');
  const accent = second ?? (project.style === 'after' ? 'After dark' : 'Field notes');

  return <>
    <section className={`case-hero case-${project.style}`}>
      <div className="case-kicker"><span>CASE STUDY / {project.no}</span><span>{project.year} · {project.category}</span></div>
      <h1>{first}<br /><em>{accent}.</em></h1>
      <p>{project.intro}</p>
      <div className="case-art-wrap"><ProjectArtwork project={project} /></div>
      <div className="case-bottom"><span>ART DIRECTION / DIGITAL / STRATEGY</span><span>SCROLL TO EXPLORE ↓</span></div>
    </section>
    <section className="case-story">
      <div><span className="eyebrow">THE BRIEF</span><h2>Make it feel<br /><em>like nothing else.</em></h2></div>
      <div>
        <p>{project.intro} We worked across strategy, art direction and digital experience to build a distinct world with a clear purpose and a memorable point of view.</p>
        <div className="case-facts">
          <span>DISCIPLINES</span><b>{project.type}</b>
          <span>PALETTE</span><b>{project.palette}</b>
          <span>OUTCOME</span><b>A sharper story and a more useful digital home.</b>
        </div>
      </div>
    </section>
    <div className="case-next"><span className="eyebrow">MORE GOOD WORK</span><Link to="/work">BACK TO ALL PROJECTS <ArrowUpRight /></Link></div>
    <ContactSection />
  </>;
}

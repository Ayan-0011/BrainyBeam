import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import ProjectCard from '../ui/ProjectCard.jsx';
import { projects } from '../../data/projects.js';

export default function WorkSection({ compact = false }) {
  const displayProjects = compact ? projects.slice(0, 4) : projects;

  return (
    <section className={`work-section ${compact ? 'work-compact' : ''}`} id="work">
      <div className="section-head">
        <div>
          <span className="eyebrow">( Selected Work )</span>
          <h2>Work that<br /><em>does the talking.</em></h2>
        </div>
        <p>
          Different challenges.<br />
          Different answers.<br />
          <span>Always made with intent.</span>
        </p>
      </div>
      <div className="project-grid">
        {displayProjects.map(p => <ProjectCard key={p.slug} project={p} />)}
      </div>
      <div className="work-bottom">
        <span>SELECTED WORK / 2024—2026</span>
        <Link className="text-link" to="/work">EXPLORE ALL PROJECTS <ArrowUpRight size={15} /></Link>
      </div>
    </section>
  );
}

import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export function ProjectArtwork({ project }) {
  return <div className={`project-art art-${project.style}`}>
    <div className="art-labels"><span>{project.category.toUpperCase()}</span><span>{project.no} / 03</span></div>

    {project.image && (
      <img
        className="project-background-image"
        src={project.image}
        alt={`${project.name} visual`}
        loading="lazy"
      />
    )}

   
  </div>;
}

export default function ProjectCard({ project }) {
  return <Link className="project-card" to={`/work/${project.slug}`}>
    <div className="project-visual"><ProjectArtwork project={project} /><span className="project-open"><ArrowUpRight /></span></div>
    <div className="project-meta"><div><span>{project.no} — {project.type}</span><h3>{project.name}</h3></div><span>{project.year}<ArrowUpRight size={14} /></span></div>
  </Link>;
}

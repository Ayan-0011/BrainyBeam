import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export function ProjectArtwork({ project }) {
  return <div className={`project-art art-${project.style}`}>
    <div className="art-labels"><span>{project.category.toUpperCase()}</span><span>{project.no} / 03</span></div>
    {project.style === 'north' && <><div className="north-disc" /><div className="north-block" /><div className="north-copy">LESS,<br />BUT<br /><i>BETTER.</i></div><span className="art-caption">N / OBJECTS</span></>}
    {project.style === 'after' && <><div className="after-sphere" /><div className="after-orbit" /><div className="after-copy">AFTER<br /><i>HOURS</i></div><span className="art-caption">CITY / 0025</span></>}
    {project.style === 'field' && <><div className="field-sun" /><div className="field-hill field-hill-a" /><div className="field-hill field-hill-b" /><div className="field-copy">GO<br />OUT<span>↗</span></div><span className="art-caption">F / WILD</span></>}
    <span className="art-big-number">{project.no}</span>
  </div>;
}

export default function ProjectCard({ project }) {
  return <Link className="project-card" to={`/work/${project.slug}`}>
    <div className="project-visual"><ProjectArtwork project={project} /><span className="project-open"><ArrowUpRight /></span></div>
    <div className="project-meta"><div><span>{project.no} — {project.type}</span><h3>{project.name}</h3></div><span>{project.year}<ArrowUpRight size={14} /></span></div>
  </Link>;
}

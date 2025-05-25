import React from 'react';
import '../styles/global.css';
import type { Project } from '../data/projects';

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  const isExternalLink = project.url?.startsWith('http://') || project.url?.startsWith('https://');
  
  const anchorProps = isExternalLink ? {
    href: project.url,
    target: "_blank",
    rel: "noopener noreferrer"
  } : {
    href: `/projects/${project.url}`
  };

  return (
    <a className="project-card" {...anchorProps}>
      <img 
        src={project.imageUrl} 
        alt={project.title} 
        className="project-image"
      />
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
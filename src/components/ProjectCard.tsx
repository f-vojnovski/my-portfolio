import React from 'react';
import '../styles/global.css';
import type { Project } from '../data/projects';

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <a className="project-card" href={`/projects/${project.url}`} >
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

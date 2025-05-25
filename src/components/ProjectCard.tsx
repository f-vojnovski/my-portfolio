import React from 'react';
import '../styles/global.css';
import type { Project } from '../data/projects';

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <div className="project-card">
       <a 
          href={`/projects/${project.url}`} 
          className="project-card-link"
    >View</a>
      <img 
        src={project.imageUrl} 
        alt={project.title} 
        className="project-image"
      />
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;

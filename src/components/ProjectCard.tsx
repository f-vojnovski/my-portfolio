import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="project-card">
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
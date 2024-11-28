import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import './ProjectGrid.scss';

function ProjectGrid({ projects }) {
  return (
    <div className="projects-grid">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
          link={project.link}
          logo={project.logo}
        />
      ))}
    </div>
  );
}

export default ProjectGrid;

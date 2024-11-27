import React from 'react';
import './ProjectCard.scss';

function ProjectCard({ title, description, image, link }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
          Voir le projet
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;

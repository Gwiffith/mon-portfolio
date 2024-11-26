import React from 'react';
import './About.scss';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-title">
        <h2>À propos</h2>
      </div>
      <div className="about-content">
        <h3>Bertrand Gatinier</h3>
        <p>31 ans</p>
        <p>Développeur frontend créatif</p>
        <div className="about-text">
          <p>
            Je me spécialise dans la création d'interfaces utilisateur modernes et intuitives, avec un fort accent sur l'expérience utilisateur et l'efficacité du design. Mon but est de transformer des idées en applications fluides et attractives, tout en améliorant constamment les interfaces existantes avec créativité, souci du détail, et expertise technique.
          </p>
          <p>
            Autonome et toujours curieux, j'aime me confronter à de nouveaux défis et me renseigner sur les nouveautés technologiques. Mon objectif est de perfectionner continuellement mes compétences pour proposer des solutions à la fois performantes et esthétiques.
          </p>
          <p>
            Si vous cherchez un développeur frontend rigoureux et engagé, qui saura travailler avec vous dans une atmosphère de confiance et de collaboration, n'hésitez pas à me contacter pour discuter de vos projets !
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

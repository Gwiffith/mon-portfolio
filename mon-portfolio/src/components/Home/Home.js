import React from 'react';
import './Home.scss';

function Home() {
  return (
    <section id="home" className="home-section">
      <h1>Bertrand Gatinier<span> Développeur Frontend</span></h1>
      <p>Portfolio</p>
      <a href="#about" className="cta-button">En savoir plus</a>
    </section>
  );
}

export default Home;

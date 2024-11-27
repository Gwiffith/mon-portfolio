import React, { useEffect } from 'react';
import './Navigation.scss';

function Navigation() {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const navLinks = document.querySelectorAll("nav ul li a");

      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 60) {
          currentSection = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSection}`) {
          link.classList.add("active");
        }
      });
    };

    // Forcer la classe active lors du premier chargement
    const setInitialActiveLink = () => {
      const navLinks = document.querySelectorAll("nav ul li a");
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });
      const homeLink = document.querySelector("nav ul li a[href='#home']");
      if (homeLink) {
        homeLink.classList.add("active");
      }
    };

    setInitialActiveLink(); // Appelle la fonction pour forcer l'état actif au chargement

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav>
      <ul>
        <li>
          <a href="#home">Accueil</a>
        </li>
        <li>
          <a href="#about">À propos</a>
        </li>
        <li>
          <a href="#skills">Mes compétences</a>
        </li>
        <li>
          <a href="#projects">Projets</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

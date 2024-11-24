import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" end activeClassName="active">Accueil</NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">À propos</NavLink>
        </li>
        <li>
          <NavLink to="/projects" activeClassName="active">Projets</NavLink>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

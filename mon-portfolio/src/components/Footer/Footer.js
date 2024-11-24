import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; 2024 Mon Portfolio. Tous droits réservés.</p>
        <ul className="social-links">
          <li><a href="https://github.com/Gwiffith" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/bertrand-gatinier" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

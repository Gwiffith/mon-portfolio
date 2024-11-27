import React from 'react';
import './Contact.scss';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Me contacter</h2>
      <p>Vous pouvez me joindre par email</p>
      <ul className="social-links">
        <li><a href="mailto:bertrand.gatinier@gmail.com">Mail</a></li>
        <li><a href="https://github.com/Gwiffith" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        <li><a href="https://www.linkedin.com/in/bertrand-gatinier" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>
    </section>
  );
}

export default Contact;

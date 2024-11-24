import React from 'react';
import './Contact.scss';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contactez-moi</h2>
      <p>Vous pouvez me joindre par email</p>
      <ul>
        <li>
          <a href="mailto:bertrand.gatinier@gmail.com">Me contacter</a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;

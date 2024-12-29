import React from 'react';

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contactez-moi</h2>
      <form>
        <input type="text" placeholder="Nom" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button>Envoyer</button>
      </form>
    </section>
  );
};

export default Contact;

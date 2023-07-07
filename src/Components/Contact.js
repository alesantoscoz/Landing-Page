import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">¿Tienes alguna pregunta?</h1>
      <h1 className="primary-heading">¡Ponte en contacto!</h1>
      <p>Deja tu correo aquí y te escribiremos a la brevedad</p>
      <div className="contact-form-container">
        <input type="text" placeholder="ejemplo@mail.com" />
        <button className="secondary-button">Enviar</button>
      </div>
    </div>
  );
};

export default Contact;

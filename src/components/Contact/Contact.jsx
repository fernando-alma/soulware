import React from 'react';
import SocialLinks from '../SocialLinks/SocialLinks';
import './Contact.scss';

const Contact = () => {
  return (
    <section className="contact-section bg-a-black" id="contacto">
      <div className="container contact-container">
        <div className="contact-info">
          <h2>Hablemos de tu proyecto</h2>
          <p>
            Completa el formulario contándonos de tu proyecto y te contactaremos para coordinar una reunión,
            estamos para ayudarte a transformarlo en realidad.
          </p>
          <div className="contact-highlights">
            <p><strong>Primera reunión sin costo</strong>, para conocer más acerca de tus proyectos.</p>
            <p><strong>Acuerdos de Confidencialidad.</strong></p>
          </div>
          <button className="btn-primary highlight-btn">Agenda una reunión sin costo</button>

          <div className="location-info">
            <h4>Desde Argentina para el Mundo</h4>
            <p>
              Nos encontramos de manera presencial en Mendoza.
              Operamos localmente, trabajamos globalmente.
            </p>
            <SocialLinks size={26} centered={false} />
          </div>
        </div>

        <div className="contact-form-wrapper">
          <form className="clean-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label>Nombre completo:</label>
              <input type="text" placeholder="" required />
            </div>

            <div className="form-group">
              <label>Teléfono de contacto:</label>
              <input type="tel" placeholder="" required />
            </div>

            <div className="form-group">
              <label>Correo electrónico:</label>
              <input type="email" placeholder="" required />
            </div>

            <div className="form-group">
              <label>Requerimiento Principal:</label>
              <select required defaultValue="">
                <option value="" disabled>Selecciona el tipo de servicio principal</option>
                <option value="landing">Landing Page</option>
                <option value="web">Sitio Web / Institucional</option>
                <option value="ecommerce">E-Commerce</option>
                <option value="custom">Desarrollo a Medida</option>
                <option value="other">Otro</option>
              </select>
            </div>

            <div className="form-group">
              <label>Mensaje:</label>
              <textarea rows="4" placeholder="" required></textarea>
            </div>

            <button type="submit" className="submit-btn">Enviar</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

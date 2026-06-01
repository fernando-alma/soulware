import React from 'react';
import SocialLinks from '../SocialLinks/SocialLinks';
import './Contact.scss';

const CONTACT_EMAIL = 'contacto@soulware.com.ar';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const nombre = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const telefono = form.querySelector('input[type="tel"]').value;
    const servicio = form.querySelector('select').value;
    const mensaje = form.querySelector('textarea').value;

    const subject = encodeURIComponent(`Consulta de proyecto - ${nombre}`);
    const body = encodeURIComponent(
      `Nombre: ${nombre}\nTeléfono: ${telefono}\nCorreo: ${email}\nServicio: ${servicio}\n\nMensaje:\n${mensaje}`
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

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
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Quiero agendar una reunión sin costo')}`}
            className="btn-primary highlight-btn"
          >
            Agenda una reunión sin costo
          </a>

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
          <form className="clean-form" onSubmit={handleSubmit}>
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


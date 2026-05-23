import React from 'react';
import { FaClock, FaPhoneAlt, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer bg-black">
      <div className="container">
        <div className="footer-grid">
          {/* Columna 1: Brand / Info */}
          <div className="footer-column brand-column">
            <h3 className="footer-logo">Soulware</h3>
            <p className="brand-description">
              Desarrollamos soluciones tecnológicas escalables e ingeniería de software a medida, combinando metodologías ágiles, diseño de interfaces excepcionales y consultoría estratégica para empresas con visión de futuro.
            </p>
          </div>

          {/* Columna 2: Contacto */}
          <div className="footer-column contact-column">
            <h4 className="footer-column-title">Contacto</h4>
            <ul className="contact-list">
              <li>
                <FaClock className="contact-icon" />
                <span>Lun a Vie: 9:00 a 18:00 hs</span>
              </li>
              <li>
                <FaPhoneAlt className="contact-icon" />
                <a href="tel:+5492613865615">+54 9 261 386 5615</a>
              </li>
              <li>
                <FaWhatsapp className="contact-icon" />
                <a href="https://wa.me/5492613865615" target="_blank" rel="noopener noreferrer">
                  +54 9 261 386 5615
                </a>
              </li>
              <li>
                <FaEnvelope className="contact-icon" />
                <a href="mailto:contacto@soulware.com.ar">contacto@soulware.com.ar</a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Servicios */}
          <div className="footer-column links-column">
            <h4 className="footer-column-title">Servicios</h4>
            <ul className="footer-links">
              <li><a href="#servicios">Diseño Web</a></li>
              <li><a href="#servicios">Tienda Online</a></li>
              <li><a href="#servicios">Desarrollo de Software</a></li>
              <li><a href="#servicios">Marketing Digital</a></li>
              <li><a href="#servicios">Hosting & Cloud</a></li>
            </ul>
          </div>

          {/* Columna 4: Información */}
          <div className="footer-column links-column">
            <h4 className="footer-column-title">Información</h4>
            <ul className="footer-links">
              <li><a href="#faq">Preguntas Frecuentes</a></li>
              <li><a href="#blog">Blog de Tecnología</a></li>
              <li><a href="#terminos">Términos y Condiciones</a></li>
              <li><a href="#privacidad">Política de Privacidad</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Inferior */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p>© 2026 - Desarrollado por Soulware</p>
          </div>
          <div className="footer-bottom-right">
            <a href="#terminos">Términos</a>
            <span className="separator">•</span>
            <a href="#privacidad">Privacidad</a>
            <span className="separator">•</span>
            <a href="#equipo">Quienes Somos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { FaClock, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.scss';

// ── Lista de 10 servicios — ordenados automáticamente A→Z con localeCompare ──
const footerServices = [
  'Acompañamiento',
  'Content Management',
  'Correos Corporativos',
  'Diseño Gráfico',
  'Hosting',
  'IA & Automatizaciones',
  'Marketing digital',
  'QA & Testing',
  'Software a medida',
  'Trazabilidad',
].sort((a, b) => a.localeCompare(b, 'es', { sensitivity: 'base' }));

// Dividir en dos columnas simétricas de 5 elementos cada una
const servicesCol1 = footerServices.slice(0, 5);
const servicesCol2 = footerServices.slice(5);

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* ── Fila principal: Brand | Contacto | [Servicios bloque ancho] | Info ── */}
        <div className="footer-grid">

          {/* Columna 1 — Brand */}
          <div className="footer-column brand-column">
            <h3 className="footer-logo">Soulware</h3>
            <p className="brand-description">
              Desarrollamos soluciones tecnológicas escalables e ingeniería de
              software a medida, combinando metodologías ágiles, diseño de
              interfaces excepcionales y consultoría estratégica para empresas
              con visión de futuro.
            </p>
          </div>

          {/* Columna 2 — Contacto */}
          <div className="footer-column contact-column">
            <h4 className="footer-column-title">Contacto</h4>
            <ul className="contact-list">
              <li>
                <FaClock className="contact-icon" aria-hidden="true" />
                <span>Lun a Vie: 8:00 a 13:00 hs</span>
              </li>
              <li>
                <FaWhatsapp className="contact-icon" aria-hidden="true" />
                <a
                  href="https://wa.me/5492615407274"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +54 9 261 540 7274
                </a>
              </li>
              <li>
                <FaEnvelope className="contact-icon" aria-hidden="true" />
                <a href="mailto:contacto@soulware.com.ar">
                  contacto@soulware.com.ar
                </a>
              </li>
              {/* Pin de ubicación geográfica — justo debajo del email */}
              <li className="location-item">
                <FaMapMarkerAlt className="contact-icon" aria-hidden="true" />
                <span>Mendoza, Argentina</span>
              </li>
            </ul>
          </div>

          {/* Columna 3 — Bloque de Servicios con título centrado sobre ambas sub-columnas */}
          <div className="footer-column services-block">
            {/*
              El título "SERVICIOS" está posicionado aquí, sobre el sub-grid,
              y se centra con text-align: center + width: 100% en el SCSS.
            */}
            <h4 className="footer-column-title services-title">Servicios</h4>

            {/* Sub-grid de 2 columnas simétricas */}
            <div className="services-two-col">
              <ul className="footer-links">
                {servicesCol1.map((service) => (
                  <li key={service}>
                    <a href="#servicios">{service}</a>
                  </li>
                ))}
              </ul>
              <ul className="footer-links">
                {servicesCol2.map((service) => (
                  <li key={service}>
                    <a href="#servicios">{service}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Columna 4 — Información */}
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

        {/* ── Barra inferior: Copyright y links legales ───────────────────────── */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p>© 2026 - Desarrollado por Soulware</p>
          </div>
          <div className="footer-bottom-right">
            <a href="#terminos">Términos</a>
            <span className="separator">•</span>
            <a href="#privacidad">Privacidad</a>
            <span className="separator">•</span>
            <a href="#nosotros">Quiénes Somos</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

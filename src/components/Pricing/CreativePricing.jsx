import React from 'react';
import { Check } from "lucide-react";
import { useTheme } from '../../context/ThemeContext';
import './Pricing.scss';

// ── Planes estándar (3 tarjetas — fila superior) ──────────────────────────────
const webDevTiers = [
  {
    name: "Landing Page",
    price: "$650.000",
    description: "Perfecto para lanzar tu producto o servicio rápidamente",
    color: "cyan",
    features: [
      "1 Landing Page a medida",
      "Diseño Ultra Responsive",
      "Formulario de contacto integrado",
      "SEO Básico Optimizado",
      "Integración con Google Analytics"
    ],
  },
  {
    name: "Web Profesional",
    price: "$850.000",
    description: "Sitio web completo e interactivo para tu negocio o PYME",
    color: "magenta",
    features: [
      "Hasta 5 secciones internas",
      "Gestor de contenidos (CMS)",
      "Formularios personalizados",
      "Optimización de velocidad WPO",
      "Soporte técnico mensual 24/7"
    ],
    popular: true,
  },
  {
    name: "E-Commerce",
    price: "$900.000",
    description: "Tienda online robusta y escalable con panel autoadministrable",
    color: "blue",
    features: [
      "Productos y categorías ilimitados",
      "Pasarela de pago integrada (Stripe/MP)",
      "Panel de administración de stock",
      "Notificaciones por email automatizadas",
      "Optimización SEO Avanzada"
    ],
  },
];

const CONTACT_EMAIL = 'contacto@soulware.com.ar';

const CreativePricing = ({
  tag = "Planes Estandarizados",
  title = "Soluciones Web que Destacan",
  description = "Elige el plan ideal y lleva tu negocio al siguiente nivel digital en minutos",
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section className="pricing bg-a-black" id="planes">
      <div className="creative-pricing-container">

        {/* ── Header ─────────────────────────────────────────────────────────── */}
        <div className="pricing-header">
          <div className="pricing-tag">{tag}</div>
          <div className="pricing-title-wrapper">
            <h2 className="pricing-title">{title}</h2>
            <div className="pricing-title-underline-glow" />
          </div>
          <p className="pricing-desc">{description}</p>
        </div>

        {/* ── NIVEL 1: Fila de 3 tarjetas estándar ───────────────────────────── */}
        <div className="pricing-grid-top">
          {webDevTiers.map((tier) => (
            <div key={tier.name} className="pricing-card-wrapper group">
              {/* Fondo neobrutalist con sombra */}
              <div className={`card-bg ${tier.color}`} />

              {/* Contenido */}
              <div className="card-content">
                {tier.popular && (
                  <div className="popular-badge">¡Más Elegido!</div>
                )}

                <div className="card-header-block">
                  <h3 className="card-tier-name">{tier.name}</h3>
                  <p className="card-tier-desc">{tier.description}</p>
                </div>

                <div className="price-block">
                  <span className="amount">{tier.price}</span>
                  <span className="period">/único</span>
                </div>

                <ul className="features-list">
                  {tier.features.map((feature) => (
                    <li key={feature} className="feature-item">
                      <div className="check-bullet">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="feature-text">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contacto"
                  className={`btn-pricing-action ${tier.popular ? 'popular-btn' : 'standard-btn'}`}
                >
                  Comenzar Proyecto
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ── NIVEL 2: Bloque full-width "Soluciones a Medida" ────────────────── */}
        <div className={`pricing-custom-block ${isDark ? 'custom--dark' : 'custom--light'}`}>
          {/* Fondo neobrutalist del bloque */}
          <div className="custom-card-bg" />

          {/* Contenido del bloque */}
          <div className="custom-card-content">
            <div className="custom-card-text">
              <h3 className="custom-card-title">
                Soluciones de Desarrollo a Medida
              </h3>
              <p className="custom-card-desc">
                Si ninguna de las soluciones estandarizadas cumple con tus objetivos,
                contactanos para agendar una reunión. Trabajaremos estrechamente desde
                la concepción hasta la implementación final para materializar tu visión única.
              </p>
            </div>
            <div className="custom-card-action">
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Consulta de Proyecto a Medida')}`}
                className="btn-custom-action"
              >
                Agendar Consulta
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CreativePricing;

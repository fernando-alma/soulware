import React from 'react';
import { Check } from "lucide-react";
import './Pricing.scss';

const webDevTiers = [
  {
      name: "Landing Page",
      price: 299,
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
      price: 699,
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
      name: "E-Commerce Pro",
      price: 1299,
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

const CreativePricing = ({
    tag = "Planes Claros",
    title = "Soluciones Web que Destacan",
    description = "Elige el plan ideal y lleva tu negocio al siguiente nivel digital en minutos",
}) => {
  return (
    <section className="pricing bg-a-black" id="planes">
      <div className="creative-pricing-container">
        
        {/* Header Section */}
        <div className="pricing-header">
          <div className="pricing-tag">
            {tag}
          </div>
          <div className="pricing-title-wrapper">
            <h2 className="pricing-title">
              {title}
              <div className="pricing-title-sparkle-right">✨</div>
              <div className="pricing-title-star-left">⭐️</div>
            </h2>
            <div className="pricing-title-underline-glow" />
          </div>
          <p className="pricing-desc">
            {description}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="pricing-grid">
          {webDevTiers.map((tier, index) => {
            // Apply rotations as specified in the original design
            let rotationClass = "";
            if (index === 0) rotationClass = "rotate-left-1";
            if (index === 1) rotationClass = "rotate-right-1";
            if (index === 2) rotationClass = "rotate-left-2";

            return (
              <div
                key={tier.name}
                className={`pricing-card-wrapper ${rotationClass} group`}
              >
                {/* Neo-brutalist solid color card background shadow box */}
                <div className={`card-bg ${tier.color}`} />

                {/* Card Content container */}
                <div className="card-content">
                  {tier.popular && (
                    <div className="popular-badge">
                      ¡Más Elegido!
                    </div>
                  )}

                  {/* Card header: título y descripción sin ícono decorativo */}
                  <div className="card-header-block">
                    <h3 className="card-tier-name">
                      {tier.name}
                    </h3>
                    <p className="card-tier-desc">
                      {tier.description}
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className="price-block">
                    <span className="currency">$</span>
                    <span className="amount">{tier.price}</span>
                    <span className="period">/único</span>
                  </div>

                  {/* Features List */}
                  <ul className="features-list">
                    {tier.features.map((feature) => (
                      <li key={feature} className="feature-item">
                        <div className="check-bullet">
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="feature-text">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Action Button — redirige al formulario de contacto */}
                  <a
                    href="#contacto"
                    className={`btn-pricing-action ${
                      tier.popular ? 'popular-btn' : 'standard-btn'
                    }`}
                  >
                    Comenzar Proyecto
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default CreativePricing;

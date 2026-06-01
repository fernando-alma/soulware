import React from 'react';
import './Hero.scss';

const Hero = () => {
  return (
    <section className="hero bg-a-black" id="inicio">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>Desarrollo de Software y Gestión para Empresas que Lideran</h1>
          <p>
            Construimos soluciones tecnológicas escalables combinando ingeniería de software avanzada, gestión ágil de proyectos y control de calidad integral, con un enfoque estricto en ciberseguridad y trazabilidad.
          </p>
          <div className="hero-buttons">
            <a href="#contacto" className="btn-primary">Agenda una reunión sin costo</a>
            <a href="#servicios" className="btn-secondary">Explora nuestros Servicios</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="effect-placeholder">
            { }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

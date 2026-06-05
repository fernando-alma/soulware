import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import './Hero.scss';

const Hero = () => {
  const { theme } = useTheme();

  // El logo PNG es blanco sobre transparente.
  // En White mode (fondo claro) se vuelve invisible → invert(1) lo convierte a negro.
  // En Dark mode no se aplica ningún filtro.
  const logoFilter = theme === 'dark' ? 'none' : 'invert(1)';

  return (
    <section className="hero bg-a-black" id="inicio">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>Desarrollo de Software y Gestión para Empresas que Lideran</h1>
          <p>
            Construimos soluciones tecnológicas escalables combinando ingeniería de software avanzada, gestión ágil de proyectos y control de calidad integral, con un enfoque estricto en la robustez, seguridad y trazabilidad.
          </p>
          <div className="hero-buttons">
            <a href="#contacto" className="btn-primary">Agendá una reunión</a>
            <a href="#servicios" className="btn-secondary">Nuestros Servicios</a>
          </div>
        </div>
        <div className="hero-visual">
          <img
            src="/logo-transparent.png"
            alt="Soulware Logo"
            className="hero-logo-img"
            style={{ filter: logoFilter }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

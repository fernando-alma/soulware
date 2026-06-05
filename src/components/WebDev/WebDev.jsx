import React, { useState, useEffect } from 'react';
import './WebDev.scss';

const features = [
  {
    title: "Diseño a medida",
    desc: "Con una interfaz de navegación centrada en el usuario, impulsamos tu conversión."
  },
  {
    title: "QA y Trazabilidad",
    desc: "Monitoreo, testing continuo de procesos y un log comprensible."
  },
  {
    title: "Arquitectura Robusta",
    desc: "Código limpio, escalable y preparado para acompañar el crecimiento de tu empresa."
  },
  {
    title: "Gestión Ágil",
    desc: "Entregas basadas en valor garantizado."
  },
  {
    title: "Optimizado para buscadores",
    desc: "Potenciamos la visibilidad de tu marca en las búsquedas."
  }
];

const sliderImages = [
  { src: '/gmstore.png', label: 'GamerStore' },
  { src: '/blogtermetsa.png', label: 'Termet SA' },
  { src: '/dicomvisor.png', label: 'Visualizador Dicom' },
  { src: '/aiproyecto.png', label: 'Ai Proyectos' },
];

const WebDev = () => {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="webdev bg-b-dots-radial">
      <div className="container webdev-container">
        <div className="webdev-content">
          <h2>Desarrollo a medida</h2>
          <div className="features-grid">
            {features.map((feat, idx) => (
              <div key={idx} className="feature-item">
                <h3>{feat.title}</h3>
                <p>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="webdev-slider">
          <div
            className="slider-wrapper"
            style={{ transform: `translateY(-${currentImg * 100}%)` }}
          >
            {sliderImages.map((project, idx) => (
              <div key={idx} className="slide">
                <img src={project.src} alt={project.label} />
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="slide-caption"
                >
                  {project.label} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDev;

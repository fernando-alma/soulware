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
  "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
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
          <h2>Desarrollo web a medida</h2>
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
          <div className="slider-wrapper" style={{ transform: `translateY(-${currentImg * 100}%)` }}>
            {sliderImages.map((src, idx) => (
              <div key={idx} className="slide">
                <img src={src} alt={`Proyecto ${idx + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDev;

import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  CardDescription,
} from '../Card/Card';
import './Portfolio.scss';

/**
 * Proyectos con Sello Soulware.
 */
const projects = [
  {
    tag: "AiProyectos",
    title: "Sistema para hackatones",
    desc: "Plataforma de gestión integral para hackatones, permitiendo gestionar la carga de proyectos y la evaluación de los mismos.",
    image: "/assets/portfolio/aiproyectos.png"
  },
  {
    tag: "LLMedic",
    title: "LLMedic",
    desc: "Plataforma Healthtech que prioriza la usabilidad y la accesibilidad, integrando funcionalidades de IA como speech to text para optimizar la gestión de consultas.",
    image: "/assets/portfolio/llmedic.png"
  },
  {
    tag: "DicomViewer",
    title: "Visualizador 3D DicomViewer",
    desc: "Sistema avanzado de visualización de imágenes médicas y 3D con altos estándares de protección de datos.",
    image: "/assets/portfolio/dicomviewer.png"
  }
];

const webs = [
  {
    name: "GamerStore",
    desc: "Tienda de hardware y periféricos de última generación.",
    link: "https://gamerstore-genezis.vercel.app/",
    image: "/assets/portfolio/gamerstore.png"
  },
  {
    name: "Termet SA",
    desc: "Web institucional de ingeniería en refrigeración y procesos.",
    link: "https://termetsa.com.ar/",
    image: "/assets/portfolio/termetsa.png"
  },
  {
    name: "Casita de Flor",
    desc: "E-commerce de arreglos florales y regalos especiales.",
    link: "https://casitadeflor.com/",
    image: "/assets/portfolio/casitadeflor.png"
  },
  {
    name: "Victoria SM",
    desc: "Web de sport management y representación deportiva.",
    link: "https://victoriasm.com.ar/",
    image: "/assets/portfolio/victorism.png"
  }
];

const Portfolio = () => {
  return (
    <section className="portfolio bg-a-black" id="portfolio">
      <div className="container">
        <h2 className="section-title">Proyectos con ADN Soulware</h2>

        {/* ── Proyectos ── */}
        <div className="portfolio-grid">
          {projects.map((proj, idx) => (
            <Card key={idx} variant="project" size="default" className="project-card">
              <div className="card-image-container">
                <img src={proj.image} alt={proj.title} loading="lazy" />
              </div>
              <div className="project-info">
                <CardHeader>
                  <span className="project-tag">{proj.tag}</span>
                </CardHeader>
                <CardBody>
                  <CardTitle className="project-title">{proj.title}</CardTitle>
                  <CardDescription className="project-desc">{proj.desc}</CardDescription>
                </CardBody>
              </div>
            </Card>
          ))}
        </div>

        {/* ── Desarrollos Web ── */}
        <h3 className="sub-title">Desarrollos web:</h3>
        <div className="webs-grid">
          {webs.map((web, idx) => (
            <div key={idx} className="web-link-wrapper">
              <Card variant="default" size="compact" className="web-card-item">
                {/* Imagen superior */}
                <div className="web-card-image">
                  <img src={web.image} alt={web.name} loading="lazy" />
                </div>

                {/* Bloque inferior: título + descripción + botón */}
                <CardBody>
                  <CardTitle className="web-card-name">{web.name}</CardTitle>
                  <CardDescription className="web-card-desc">{web.desc}</CardDescription>
                  {/* Botón con el mismo estilo que "Ver Perfil" del componente Team */}
                  <a
                    href={web.link}
                    className="team-card__link web-card-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ver sitio de ${web.name}`}
                  >
                    Ver sitio →
                  </a>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

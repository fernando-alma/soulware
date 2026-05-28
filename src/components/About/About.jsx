import React from 'react';
import { Star } from 'lucide-react';
import './About.scss';

const testimonials = [
  {
    name: "Juan Pérez",
    role: "CEO, TechLogistics",
    text: "El nivel de profesionalismo de Soulware superó nuestras expectativas. Transformaron nuestra operación manual en un sistema automatizado en tiempo récord."
  },
  {
    name: "María Gómez",
    role: "Directora de Innovación",
    text: "Tener un Project Manager de su equipo ordenó nuestro caos interno. La trazabilidad y calidad del código son inmejorables."
  },
  {
    name: "Carlos Ruiz",
    role: "Founder, Fintech Startup",
    text: "La seguridad y escalabilidad eran críticos para nosotros. Soulware nos entregó una arquitectura robusta lista para crecer."
  }
];

const About = () => {
  return (
    <section className="about-section bg-b-dots-radial" id="nosotros">
      <div className="container">
        <div className="about-content">
          <h2 className="section-title">El Lado Humano de la Tecnología Avanzada</h2>
          <div className="text-content">
            <p>
              En Soulware, creemos que la excelencia técnica surge de la combinación entre empatía y estructura. 
              Diseñamos soluciones a medida fusionando ingeniería de software avanzada, gestión ágil de proyectos y control de calidad integral.
            </p>
            <p>
              Nuestras soluciones se construyen sobre cimientos sólidos de <strong>arquitectura, ciberseguridad y trazabilidad</strong>. 
              Utilizamos metodologías ágiles para asegurar que cada iteración responda al cambio, garantizando siempre la integridad de los sistemas.
            </p>
            <p>
              No escribimos código de forma aislada; cada decisión técnica y arquitectónica responde directamente a un objetivo 
              de negocio medible, garantizando así el retorno de la inversión de nuestros clientes.
            </p>
          </div>
        </div>

        <div className="testimonials-section">
          <h3>La opinión de nuestros clientes</h3>
          <div className="testimonials-grid">
            {testimonials.map((testi, idx) => (
              <div key={idx} className="testimonial-card">
                <div className="stars">
                  {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="#FFFFFF" color="#FFFFFF" />)}
                </div>
                <p className="quote">"{testi.text}"</p>
                <div className="author">
                  <div className="avatar">{testi.name.charAt(0)}</div>
                  <div className="author-info">
                    <strong>{testi.name}</strong>
                    <span>{testi.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

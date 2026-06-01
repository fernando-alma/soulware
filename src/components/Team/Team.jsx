import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  CardDescription,
} from '../Card/Card';
import './Team.scss';

/**
 * Datos del equipo.
 * Podés ampliar o reemplazar con datos reales.
 */
const teamMembers = [
  {
    name: 'Fernando Alma Dileo',
    role: 'Fullstack Developer & Founder',
    description:
      'Arquitecto de soluciones web escalables. Especialista en React, Node.js y sistemas distribuidos. Combina visión de producto con ejecución técnica de alto nivel.',
    portfolio: 'https://www.linkedin.com/in/fernando-alma/',
    initials: 'FA',
  },
  {
    name: 'Juan Bisaguirre Livellara',
    role: 'Backend Engineer',
    description:
      'Desarrollador full-stack con enfoque en ciberseguridad. Especialista en React, Node.js y protección de datos. Diseña soluciones web robustas, eficientes y seguras.',
    portfolio: 'https://www.linkedin.com/in/juan-anibal-bisaguirre-livellara/',
    initials: 'JB',
  },
  {
    name: 'Rocío Aguirre Cerullo',
    role: 'Project Manager y QA',
    description:
      'Project Manager IT y QA con enfoque en análisis normativo y trazabilidad. Optimiza la comunicación, mitiga riesgos regulatorios y asegura la calidad y documentación del proyecto.',
    portfolio: 'https://www.linkedin.com/in/rocio-aguirre-cerullo/',
    initials: 'RAC',
  },
  {
    name: 'Camila Alma',
    role: 'Diseñadora Gráfica',
    description:
      'Diseñadora freelance enfocada en el desarrollo visual de marcas. Conecta la identidad de tu empresa con su público ideal a través de diseño, fotografía y estrategia.',
    portfolio: 'https://www.linkedin.com/in/calma-dise%C3%B1o-gr%C3%A1fico-/',
    initials: 'CA',
  },
];

const Team = () => {
  return (
    <section className="team-section" id="quienes-somos">
      <div className="container">
        {/* Header */}
        <div className="team-header">
          <h2 className="team-heading">
            Quienes somos
          </h2>
          <p className="team-subheading">
            Conocé a las personas detrás de cada línea de código.
            Ingeniería con propósito, diseño con intención.
          </p>
        </div>

        {/* 3-column grid */}
        <div className="team-grid">
          {teamMembers.map((member) => (
            <Card key={member.name} variant="default" size="default">
              <CardHeader>
                {/* Avatar */}
                <div className="team-card__avatar">{member.initials}</div>
              </CardHeader>

              <CardBody>
                <CardTitle>{member.name}</CardTitle>
                <span className="team-card__role">{member.role}</span>
                <CardDescription className="team-card__bio">
                  {member.description}
                </CardDescription>
              </CardBody>

              <CardFooter>
                <a
                  href={member.portfolio}
                  className="team-card__link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ver portfolio de ${member.name}`}
                >
                  Ver Perfil →
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

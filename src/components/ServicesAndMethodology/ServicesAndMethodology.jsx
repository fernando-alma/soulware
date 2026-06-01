import React from 'react';
import { Code, TrendingUp, CheckCircle, RefreshCw, ArrowRight } from 'lucide-react';
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardDescription,
} from '../Card/Card';
import './Services.scss';

const services = [
  {
    icon: <Code size={32} />,
    title: "Software a Medida & Arquitectura",
    desc: "Desarrollo integral de sistemas escalables y seguros, logrando documentación técnica exhaustiva."
  },
  {
    icon: <TrendingUp size={32} />,
    title: "Evolución Ágil y Trazabilidad",
    desc: "Operamos con ciclos de desarrollo cortos y entregas de valor continuo. Priorizamos la comunicación y la trazabilidad total."
  },
  {
    icon: <CheckCircle size={32} />,
    title: "Quality Assurance (QA) & Testing",
    desc: "Pruebas rigurosas que garantizan la estabilidad del software y un despliegue sin fallas."
  },
  {
    icon: <RefreshCw size={32} />,
    title: "Integración de IA & Automatizaciones",
    desc: "Potenciamos tus plataformas mediante Machine Learning y ChatBots inteligentes para optimizar tus flujos operativos."
  }
];

const methodologySteps = [
  { step: "1", title: "Discovery / Relevamiento" },
  { step: "2", title: "Arquitectura / Diseño Técnico" },
  { step: "3", title: "Sprints / Desarrollo Scrum" },
  { step: "4", title: "Quality Assurance (QA) / Trazabilidad" },
  { step: "5", title: "Entrega + Documentación" },
];

const ServicesAndMethodology = () => {
  return (
    <section className="services-methodology bg-b-dots-radial" id="servicios">
      <div className="container">
        <h2 className="section-title">Servicios de Ingeniería de Software que Impulsan tu Negocio</h2>

        {/* ── Servicios — grid 4 columnas ── */}
        <div className="services-grid">
          {services.map((srv, idx) => (
            <Card key={idx} variant="default" size="compact" className="service-card-item">
              <CardHeader>
                <div className="service-icon">{srv.icon}</div>
              </CardHeader>
              <CardBody>
                <CardTitle className="service-title">{srv.title}</CardTitle>
                <CardDescription>{srv.desc}</CardDescription>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* ── Metodología — flowchart original ── */}
        <div className="methodology-section">
          <h3 className="methodology-title">Metodología de Trabajo</h3>
          <div className="flowchart">
            {methodologySteps.map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="flow-step">
                  <div className="step-number">{step.step}</div>
                  <div className="step-title">{step.title}</div>
                </div>
                {idx < methodologySteps.length - 1 && (
                  <div className="flow-arrow">
                    <ArrowRight size={24} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesAndMethodology;

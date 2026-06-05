import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Code, TrendingUp, CheckCircle, RefreshCw, ArrowRight,
  Server, Mail, Palette, BarChart2, FileText, Handshake,
  ChevronLeft, ChevronRight
} from 'lucide-react';
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardDescription,
} from '../Card/Card';
import './Services.scss';

// ── Servicios principales (grid 4 columnas) ──────────────────────────────────
const coreServices = [
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

// ── Servicios adicionales (carrusel infinite loop) ────────────────────────────
const REAL_SERVICES = [
  {
    icon: <Server size={32} />,
    title: "Hosting",
    desc: "Servidores de alta velocidad y máxima disponibilidad para garantizar que tu plataforma esté siempre online."
  },
  {
    icon: <Mail size={32} />,
    title: "Correos Corporativos",
    desc: "Comunicación profesional y segura con dominios personalizados que potencian la credibilidad de tu marca."
  },
  {
    icon: <Palette size={32} />,
    title: "Diseño Gráfico",
    desc: "Identidades visuales impactantes e interfaces intuitivas que cautivan a tus usuarios desde el primer segundo."
  },
  {
    icon: <BarChart2 size={32} />,
    title: "Marketing Digital",
    desc: "Estrategias personalizadas basadas en datos para escalar tu presencia en línea y maximizar tus conversiones."
  },
  {
    icon: <FileText size={32} />,
    title: "Content Management",
    desc: "Gestión y actualización dinámica de contenidos para mantener tu sitio web siempre fresco y optimizado."
  },
  {
    icon: <Handshake size={32} />,
    title: "Acompañamiento",
    desc: "Soporte constante y mantenimiento técnico especializado mediante planes mensuales o anuales para asegurar el óptimo rendimiento de tus desarrollos."
  }
];

const CARD_GAP    = 24;   // px — debe coincidir con el gap del SCSS
const AUTO_SPEED  = 2800; // ms entre pasos automáticos

// ── Infinite Loop Carousel ────────────────────────────────────────────────────
//
// Técnica:
//   [clonesAl final] [items reales] [clonesAl inicio]
//   - Se arranca posicionado en los items reales (offset inicial = clones × STEP).
//   - Cuando se llega al bloque de clones del inicio o del final, se salta sin
//     transición al item real equivalente, logrando el efecto infinito.
//
const ServicesCarousel = () => {
  const viewportRef   = useRef(null);    // div.carousel-viewport
  const trackRef      = useRef(null);    // div.carousel-track
  const intervalRef   = useRef(null);

  // Cuántas tarjetas caben visibles al mismo tiempo
  const [visibleCount, setVisibleCount] = useState(3);
  const [cardWidth, setCardWidth]       = useState(280);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isHovered, setIsHovered]       = useState(false);

  // El índice apunta al item REAL activo (0-based dentro de REAL_SERVICES)
  // Arrancamos en el primer item real, que dentro de la lista extendida está
  // en posición visibleCount (porque hay visibleCount clones al inicio).
  const [trackIndex, setTrackIndex]     = useState(0);

  const COUNT       = REAL_SERVICES.length;

  // Lista extendida: [últimos N clones] + [items reales] + [primeros N clones]
  // donde N = visibleCount garantiza que nunca se ve el vacío
  const extended = [
    ...REAL_SERVICES.slice(-visibleCount),  // clones del final al inicio
    ...REAL_SERVICES,
    ...REAL_SERVICES.slice(0, visibleCount), // clones del inicio al final
  ];

  // STEP en px = ancho de tarjeta + gap
  const STEP = cardWidth + CARD_GAP;

  // El offset real del track (en px) es:
  // clones-al-inicio × STEP + trackIndex × STEP
  const offsetPx = (visibleCount + trackIndex) * STEP;

  // ── Medir el viewport para calcular cuántas tarjetas caben ─────────────────
  useEffect(() => {
    if (!viewportRef.current) return;
    const measure = () => {
      const vw = viewportRef.current.offsetWidth;
      // Queremos que quepan entre 3 y 4 tarjetas con gap
      // Calculamos el ancho de tarjeta óptimo: vw dividido entre visible + fracción
      const cols = vw >= 1100 ? 3 : vw >= 720 ? 2 : 1;
      const cw   = Math.floor((vw - CARD_GAP * (cols - 1)) / cols);
      setVisibleCount(cols);
      setCardWidth(cw);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(viewportRef.current);
    return () => ro.disconnect();
  }, []);

  // ── Navegación ──────────────────────────────────────────────────────────────
  const goNext = useCallback(() => {
    setIsTransitioning(true);
    setTrackIndex(prev => prev + 1);
  }, []);

  const goPrev = useCallback(() => {
    setIsTransitioning(true);
    setTrackIndex(prev => prev - 1);
  }, []);

  // ── Gestión del infinite loop: salto silencioso al final de la transición ──
  // Se dispara cuando la transición CSS termina
  const handleTransitionEnd = useCallback(() => {
    // Si llegamos al clon del final → saltar al item real del inicio sin transición
    if (trackIndex >= COUNT) {
      setIsTransitioning(false);
      setTrackIndex(0);
    }
    // Si llegamos al clon del inicio → saltar al item real del final sin transición
    if (trackIndex < 0) {
      setIsTransitioning(false);
      setTrackIndex(COUNT - 1);
    }
  }, [trackIndex, COUNT]);

  // Re-habilitar transición en el siguiente frame tras el salto silencioso
  useEffect(() => {
    if (!isTransitioning) {
      const raf = requestAnimationFrame(() => {
        requestAnimationFrame(() => setIsTransitioning(true));
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isTransitioning]);

  // ── Autoplay ────────────────────────────────────────────────────────────────
  useEffect(() => {
    if (isHovered) {
      clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(goNext, AUTO_SPEED);
    return () => clearInterval(intervalRef.current);
  }, [isHovered, goNext]);

  return (
    <div className="carousel-section">
      <h3 className="methodology-title" style={{ marginBottom: '2rem' }}>
        Servicios Complementarios
      </h3>

      <div
        ref={viewportRef}
        className="carousel-viewport"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          ref={trackRef}
          className="carousel-track"
          style={{
            transform:  `translateX(-${offsetPx}px)`,
            transition: isTransitioning ? 'transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
            gap:        `${CARD_GAP}px`,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extended.map((srv, idx) => (
            <div
              key={idx}
              className="carousel-card"
              style={{ width: `${cardWidth}px`, minWidth: `${cardWidth}px` }}
              aria-hidden={idx < visibleCount || idx >= visibleCount + COUNT}
            >
              <div className="carousel-card__icon">{srv.icon}</div>
              <h4 className="carousel-card__title">{srv.title}</h4>
              <p className="carousel-card__desc">{srv.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Botones de navegación */}
      <div className="carousel-controls">
        <button className="carousel-btn" onClick={goPrev} aria-label="Anterior">
          <ChevronLeft size={22} />
        </button>
        <button className="carousel-btn" onClick={goNext} aria-label="Siguiente">
          <ChevronRight size={22} />
        </button>
      </div>
    </div>
  );
};

// ── Metodología ───────────────────────────────────────────────────────────────
const methodologySteps = [
  { step: "1", title: "Discovery / Relevamiento" },
  { step: "2", title: "Arquitectura / Diseño Técnico" },
  { step: "3", title: "Sprints / Desarrollo Scrum" },
  { step: "4", title: "Quality Assurance (QA) / Trazabilidad" },
  { step: "5", title: "Entrega + Documentación" },
];

// ── Componente principal ──────────────────────────────────────────────────────
const ServicesAndMethodology = () => {
  return (
    <section className="services-methodology bg-b-dots-radial" id="servicios">
      <div className="container">
        <h2 className="section-title">Servicios de Ingeniería de Software que Impulsan tu Negocio</h2>

        {/* Servicios principales — grid 4 columnas */}
        <div className="services-grid">
          {coreServices.map((srv, idx) => (
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

        {/* Carrusel de servicios complementarios */}
        <ServicesCarousel />

        {/* Metodología — flowchart */}
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

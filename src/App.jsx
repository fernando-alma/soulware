import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  Code2, 
  Briefcase, 
  Zap, 
  Users, 
  TrendingUp,
  MessageSquare,
  Plus,
  Minus,
  Moon,
  Sun,
  Menu,
  X
} from 'lucide-react';
import './index.css';
import './App.css'; 

function App() {
  const [openFaq, setOpenFaq] = useState(null);
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    // Check local storage or system preference on load
    const savedMode = localStorage.getItem('theme');
    if (savedMode === 'light') {
      setIsLightMode(true);
      document.body.classList.add('light-mode');
    }
  }, []);

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
    if (!isLightMode) {
      document.body.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    }
  };

  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  const faqs = [
    {
      question: "¿Cómo garantizan la calidad en un desarrollo a medida?",
      answer: "Implementamos QA continuo, metodologías ágiles (Scrum) y revisiones de código estrictas para asegurar un producto robusto, escalable y libre de deuda técnica desde el día 1."
    },
    {
      question: "¿Cuál es el tiempo de entrega promedio para un proyecto software?",
      answer: "Depende de la complejidad, pero gracias a nuestra Software Factory orientada a componentes, logramos MVPs operativos en 4 a 8 semanas para que puedas validar rápidamente tu mercado."
    },
    {
      question: "¿Qué tecnologías utilizan en su Stack de desarrollo?",
      answer: "Utilizamos un stack moderno y escalable: React, Node.js, Python, AWS y bases de datos relacionales/NoSQL optimizadas para alto rendimiento y seguridad."
    },
    {
      question: "¿Ofrecen servicios de Project Management si ya tengo un equipo?",
      answer: "Sí. Si ya tienes desarrolladores, nuestros Project Managers senior pueden liderar tu equipo, implementando procesos ágiles para destrabar cuellos de botella y acelerar los releases."
    }
  ];

  return (
    <>
      <Navbar isLightMode={isLightMode} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <LogoMarquee />
        <AboutUs />
        <Services />
        <Benefits />
        <Pricing />
        <Portfolio />
        <Testimonials />
        <FAQ faqs={faqs} openFaq={openFaq} toggleFaq={toggleFaq} />
        <ContactForm />
      </main>
      <Footer />
      <FloatingChat />
    </>
  );
}

const Navbar = ({ isLightMode, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="navbar">
      <div className="container nav-content">
        <div className="logo-container">
          <img src="/ISOLOGO TRANSPARENTE (2).png" alt="Soulware Logo" className="logo-icon-img" />
          <span className="logo-text">Soulware</span>
        </div>
        <nav className={`nav-links ${isMenuOpen ? 'mobile-open' : ''}`}>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>Esencia</a>
          <a href="#pricing" onClick={() => setIsMenuOpen(false)}>Servicios</a>
          <a href="#portfolio" onClick={() => setIsMenuOpen(false)}>Proyectos</a>
          <a href="#faq" onClick={() => setIsMenuOpen(false)}>FAQ</a>
        </nav>
        <div className="nav-cta" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Alternar Tema">
            {isLightMode ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <a href="#contact" className="btn-primary desktop-cta" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem', textDecoration: 'none', display: 'inline-block' }}>
            Hablemos
          </a>
          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} color="#FFF" /> : <Menu size={24} color="#FFF" />}
          </button>
        </div>
      </div>
    </header>
  );
};

const Hero = () => (
  <section className="hero">
    <div className="container hero-content">
      <h1 className="hero-title">
        Desarrollo de Software y Gestión para <span className="text-gradient">Empresas que Lideran</span>
      </h1>
      <p className="hero-subtitle">
        Construimos soluciones tecnológicas escalables y lideramos proyectos con precisión quirúrgica. Sin jerga aburrida, solo resultados que impactan el ROI.
      </p>
      <div className="hero-actions">
        <button className="btn-primary">
          Inicia tu proyecto <ChevronRight size={20} />
        </button>
        <button className="btn-secondary">
          Explorar Servicios
        </button>
      </div>
    </div>
  </section>
);

const LogoMarquee = () => (
  <div className="marquee-wrapper">
    <div className="marquee-content">
      {[...Array(2)].map((_, i) => (
        <div key={i} className="marquee-group">
          <span className="marquee-logo">Microsoft</span>
          <span className="marquee-logo">AWS</span>
          <span className="marquee-logo">Google Cloud</span>
          <span className="marquee-logo">Stripe</span>
          <span className="marquee-logo">Vercel</span>
          <span className="marquee-logo">Docker</span>
        </div>
      ))}
    </div>
  </div>
);

const AboutUs = () => (
  <section id="about" className="about">
    <div className="container about-grid">
      <div className="about-text">
        <h2 className="section-title" style={{ textAlign: 'left' }}>
          La Fuerza Detrás de <span className="text-gradient">Soulware</span>
        </h2>
        <p>
          En Soulware, no somos solo codificadores; somos arquitectos de soluciones B2B. El logo que nos representa simboliza liderazgo, solidez y fiabilidad. Enfocamos nuestro poder técnico en resolver problemas complejos y transformar operaciones bloqueadas en flujos de trabajo de alta velocidad.
        </p>
      </div>
      <div className="about-visual">
        <div className="glass-card mockup-card neon-border">
          <div className="mockup-header">
            <span className="dot" style={{ background: '#FF5F56' }}></span>
            <span className="dot" style={{ background: '#FFBD2E' }}></span>
            <span className="dot" style={{ background: '#27C93F' }}></span>
          </div>
          <div className="mockup-body">
            <code style={{color: '#00FFFF'}}>
              import {'{'} Soulware {'}'} from '@future/tech';<br/><br/>
              const success = Soulware.build({'{\n'}
              &nbsp;&nbsp;scalable: true,<br/>
              &nbsp;&nbsp;agile: true,<br/>
              &nbsp;&nbsp;roiMultiplier: 10<br/>
              {'});\n'}<br/>
              console.log(success); // "Dominio del Mercado"
            </code>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Services = () => (
  <section id="services" className="services">
    <div className="container">
      <h2 className="section-title">Nuestros Pilares</h2>
      <p className="section-subtitle">Dos enfoques intensos para llevar tu visión digital a la realidad corporativa, sin fricciones.</p>
      <div className="services-grid">
        <div className="service-card">
          <div className="service-icon"><Code2 size={40} /></div>
          <h3>Software Factory</h3>
          <p>Creamos aplicaciones web y móviles robustas, arquitecturas cloud-native y sistemas escalables que crecen con tu demanda de negocio.</p>
          <ul className="service-features">
            <li>✔ Arquitectura Escalable</li>
            <li>✔ Desarrollo Web/App Custom</li>
            <li>✔ Integraciones API y Microservicios</li>
            <li>✔ Automatizaciones (RPA/AI)</li>
          </ul>
        </div>
        <div className="service-card">
          <div className="service-icon"><Briefcase size={40} /></div>
          <h3>Gestión de Proyectos</h3>
          <p>Tomamos las riendas. Liderazgo técnico ágil (Scrum/Kanban) para garantizar tiempos, presupuestos y una alineación impecable de equipos.</p>
          <ul className="service-features">
            <li>✔ Scrum Masters / PMs as a Service</li>
            <li>✔ Auditoría de Procesos Técnicos</li>
            <li>✔ Rescue Projects (Recuperación)</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const Benefits = () => (
  <section className="benefits">
    <div className="container">
      <h2 className="section-title">Por qué elegir a <span className="text-gradient">Soulware</span></h2>
      <div className="benefits-grid">
        <div className="benefit-item">
          <Zap className="benefit-icon" />
          <h4>Entregas Ágiles</h4>
          <p>Iteraciones rápidas y MVPs que llegan al mercado antes que tu competencia.</p>
        </div>
        <div className="benefit-item">
          <Users className="benefit-icon" />
          <h4>Equipo Senior</h4>
          <p>Sin juniors en entrenamiento a costa tuya. Solos perfiles experimentados liderando el código.</p>
        </div>
        <div className="benefit-item">
          <TrendingUp className="benefit-icon" />
          <h4>Escalabilidad Nativa</h4>
          <p>Sistemas preparados (Cloud/AWS) para escalar de miles a millones de peticiones.</p>
        </div>
      </div>
    </div>
  </section>
);

const Portfolio = () => (
  <section id="portfolio" className="portfolio">
    <div className="container">
      <h2 className="section-title">Soluciones Entregadas</h2>
      <div className="portfolio-grid">
        {[1, 2, 3].map((item) => (
          <div key={item} className="portfolio-card">
            <div className="portfolio-img-placeholder">
              <span>Proyecto Alpha {item}</span>
            </div>
            <div className="portfolio-info">
              <h4>Plataforma FinTech {item}</h4>
              <p>Desarrollo full-stack y arquitectura serverless.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="testimonials">
    <div className="container">
      <h2 className="section-title">Casos de Éxito</h2>
      <div className="testimonials-grid">
        <div className="testimonial-card">
          <p className="quote">"Soulware tomó nuestro proyecto a la deriva y en 3 meses teníamos una versión estable en producción."</p>
          <div className="author">
            <div className="author-avatar">C</div>
            <div>
              <strong>Carlos R.</strong>
              <span>CEO, Finanzas Digitales</span>
            </div>
          </div>
        </div>
        <div className="testimonial-card">
          <p className="quote">"Su servicio de Project Management organizó nuestro caos interno. Ahora entregamos features 2x más rápido."</p>
          <div className="author">
            <div className="author-avatar">M</div>
            <div>
              <strong>María G.</strong>
              <span>CTO, SaaS Platform</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FAQ = ({ faqs, openFaq, toggleFaq }) => (
  <section id="faq" className="faq">
    <div className="container faq-container">
      <h2 className="section-title">Preguntas Frecuentes</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`faq-item ${openFaq === index ? 'open' : ''}`}
            onClick={() => toggleFaq(index)}
          >
            <div className="faq-question">
              <h4>{faq.question}</h4>
              {openFaq === index ? <Minus className="faq-icon" /> : <Plus className="faq-icon" />}
            </div>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <div className="container footer-grid">
      <div className="footer-brand">
        <div className="logo-container">
          <img src="/ISOLOGO TRANSPARENTE (2).png" alt="Soulware Logo" className="logo-icon-img" />
          <span className="logo-text">Soulware</span>
        </div>
        <p>Potenciando negocios con software de clase mundial.</p>
      </div>
      <div className="footer-links">
        <h4>Navegación</h4>
        <a href="#about">Empresa</a>
        <a href="#pricing">Servicios</a>
        <a href="#portfolio">Proyectos</a>
      </div>
      <div className="footer-links">
        <h4>Legal</h4>
        <a href="#">Términos de Servicio</a>
        <a href="#">Privacidad</a>
      </div>
    </div>
  </footer>
);

const Pricing = () => (
  <section id="pricing" className="pricing">
    <div className="container">
      <h2 className="section-title">Servicios Core</h2>
      <p className="section-subtitle">Soluciones empaquetadas o a medida para escalar tu negocio sin fricción técnica.</p>
      <div className="pricing-grid">
        <div className="pricing-card">
          <h3>Landing Pages</h3>
          <div className="price">USD 650</div>
          <ul className="service-features" style={{marginBottom: '2rem'}}>
            <li>✔ Diseño UI/UX Premium B2B</li>
            <li>✔ Copywriting estratégico</li>
            <li>✔ Animaciones Interactívas Fluidas</li>
            <li>✔ Formularios al CRM</li>
          </ul>
          <button className="btn-secondary w-full" style={{marginTop: 'auto'}}>Solicitar Cotización</button>
        </div>
        <div className="pricing-card">
          <h3>Páginas Institucionales</h3>
          <div className="price">USD 850</div>
          <ul className="service-features" style={{marginBottom: '2rem'}}>
            <li>✔ Hasta 5 vistas personalizadas</li>
            <li>✔ Arquitectura Escalable</li>
            <li>✔ SEO Técnico Avanzado</li>
            <li>✔ Panel Administrativo CMS</li>
          </ul>
          <button className="btn-secondary w-full" style={{marginTop: 'auto'}}>Solicitar Cotización</button>
        </div>
        <div className="pricing-card">
          <h3>E-Commerce</h3>
          <div className="price">USD 900</div>
          <p className="price-subtitle">Hasta 200 productos</p>
          <ul className="service-features" style={{marginBottom: '2rem'}}>
            <li>✔ Pasarelas de Pago Integradas</li>
            <li>✔ Gestión de Stock Automatizada</li>
            <li>✔ Panel Analítico de Ventas</li>
            <li>✔ Optimizada para Conversión</li>
          </ul>
          <button className="btn-secondary w-full" style={{marginTop: 'auto'}}>Solicitar Cotización</button>
        </div>
        <div className="pricing-card">
          <h3>Software a Medida</h3>
          <div className="price">A medida</div>
          <ul className="service-features" style={{marginBottom: '2rem'}}>
            <li>✔ Sistemas ERP/CRM a Medida</li>
            <li>✔ Cloud Infra (AWS/GCP) y WebApps</li>
            <li>✔ Automatizaciones de Backend</li>
            <li>✔ Sprints Ágiles Dedicados</li>
          </ul>
          <button className="btn-primary w-full" style={{marginTop: 'auto'}}>Agendar Discovery</button>
        </div>
      </div>
    </div>
  </section>
);

const ContactForm = () => (
  <section id="contact" className="contact-section" style={{paddingBottom: '4rem'}}>
    <div className="container">
      <div className="contact-wrapper">
        <div className="contact-text">
          <h2 className="section-title" style={{textAlign: 'left'}}>Hagamos <span className="text-gradient">Sistema</span></h2>
          <p style={{color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '1.5rem'}}>
            Completa el formulario para iniciar nuestra consola de comunicación. Nuestro equipo evalúa tu requerimiento y te contactaremos para ejecutar un script de Discovery B2B de 15 minutos en donde mapearemos soluciones factibles y retornos de investigación (ROI).
          </p>
          <ul className="service-features">
            <li>✔ Respuestas en menos de 2 horas.</li>
            <li>✔ Propuestas modulares directas.</li>
            <li>✔ Acuerdos de Confidencialidad nativos.</li>
          </ul>
        </div>
        <div className="contact-form-container">
          <div className="mockup-card terminal-form-card" style={{animation: 'none', padding: '2rem', borderRadius: '16px'}}>
            <div className="mockup-header" style={{borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem', marginBottom: '1.5rem'}}>
              <span className="dot" style={{ background: '#FF5F56' }}></span>
              <span className="dot" style={{ background: '#FFBD2E' }}></span>
              <span className="dot" style={{ background: '#27C93F' }}></span>
              <span className="terminal-title">~/soulware/contacto.exe</span>
            </div>
            <form className="terminal-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>&gt; Nombre completo *</label>
                <input type="text" placeholder="Ej: Ing. Turing" required />
              </div>
              <div className="form-group">
                <label>&gt; Correo corporativo *</label>
                <input type="email" placeholder="lider@tuempresa.com" required />
              </div>
              <div className="form-group">
                <label>&gt; Requerimiento Principal *</label>
                <select required>
                  <option value="" disabled selected>Elegir un Servicio Core...</option>
                  <option>Landing Page Corporativa</option>
                  <option>Sitio Institucional Completo</option>
                  <option>E-Commerce Escalable</option>
                  <option>Desarrollo a Medida Web/App</option>
                  <option>Gestión de Proyectos (Project Management)</option>
                  <option>No estoy seguro / Consultoría general</option>
                </select>
              </div>
              <div className="form-group">
                <label>&gt; Input Data (Mensaje) *</label>
                <textarea rows="4" placeholder="Describe el contexto actual de las operaciones que se buscan solucionar o digitalizar..." required></textarea>
              </div>
              <button type="submit" className="btn-primary terminal-btn block mt-2" style={{width: '100%', marginTop: '1rem'}}>
                [EJECUTAR ENVÍO AL SISTEMA]
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FloatingChat = () => (
  <button className="floating-chat" aria-label="Abrir chat">
    <MessageSquare size={24} />
  </button>
);

export default App;

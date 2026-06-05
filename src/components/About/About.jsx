import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import './About.scss';

// ─────────────────────────────────────────────────────────────────────────────
// Google Places API — Configuration
// Reemplaza estos valores con tus credenciales reales:
//   VITE_GOOGLE_PLACES_API_KEY  → en tu archivo .env.local
//   VITE_GOOGLE_PLACE_ID        → en tu archivo .env.local
//
// Ejemplo en .env.local:
//   VITE_GOOGLE_PLACES_API_KEY=AIzaSy...tuKey
//   VITE_GOOGLE_PLACE_ID=ChIJ...tuPlaceId
// ─────────────────────────────────────────────────────────────────────────────
const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_PLACES_API_KEY || '';
const GOOGLE_PLACE_ID = import.meta.env.VITE_GOOGLE_PLACE_ID || '';

// Testimonios de fallback (se usan cuando la API no está configurada o falla)
const fallbackTestimonials = [
  {
    name: "Juan Pérez",
    role: "CEO, TechLogistics",
    text: "El nivel de profesionalismo de Soulware superó nuestras expectativas. Transformaron nuestra operación manual en un sistema automatizado en tiempo récord.",
    rating: 5,
    avatar: "J",
  },
  {
    name: "María Gómez",
    role: "Directora de Innovación",
    text: "Tener un Project Manager de su equipo ordenó nuestro caos interno. La trazabilidad y calidad del código son inmejorables.",
    rating: 5,
    avatar: "M",
  },
  {
    name: "Carlos Ruiz",
    role: "Founder, Fintech Startup",
    text: "La seguridad y escalabilidad eran críticos para nosotros. Soulware nos entregó una arquitectura robusta lista para crecer.",
    rating: 5,
    avatar: "C",
  },
];

// ── Hook: fetch de reseñas desde Google Places API ───────────────────────────
const useGoogleReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Si no hay credenciales configuradas, usar datos de fallback inmediatamente
    if (!GOOGLE_API_KEY || !GOOGLE_PLACE_ID) {
      setReviews(fallbackTestimonials);
      return;
    }

    const fetchReviews = async () => {
      setLoading(true);
      setError(null);

      try {
        // Google Places API — Place Details endpoint
        // NOTA: En producción, esta petición DEBE hacerse desde el backend (server/)
        // para proteger tu API Key. No expongas la key en el frontend en producción.
        const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${GOOGLE_PLACE_ID}&fields=reviews&language=es&key=${GOOGLE_API_KEY}`;

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();

        if (data.status !== 'OK' || !data.result?.reviews?.length) {
          throw new Error(data.error_message || 'No se encontraron reseñas');
        }

        // Mapear las reseñas de Google al formato interno
        const mapped = data.result.reviews
          .filter(r => r.rating >= 4) // solo reseñas 4★ y 5★
          .slice(0, 6)
          .map(r => ({
            name: r.author_name,
            role: r.author_url ? 'Cliente verificado de Google' : 'Cliente',
            text: r.text,
            rating: r.rating,
            avatar: r.author_name?.charAt(0)?.toUpperCase() || '?',
            photoUrl: r.profile_photo_url || null,
          }));

        setReviews(mapped.length > 0 ? mapped : fallbackTestimonials);
      } catch (err) {
        console.warn('[Soulware] Error al cargar reseñas de Google Places:', err.message);
        setError(err.message);
        setReviews(fallbackTestimonials); // fallback silencioso
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  return { reviews, loading, error };
};

// ── StarRating ────────────────────────────────────────────────────────────────
const StarRating = ({ rating = 5 }) => (
  <div className="stars">
    {[1, 2, 3, 4, 5].map(s => (
      <Star
        key={s}
        size={16}
        fill={s <= rating ? 'currentColor' : 'none'}
        color="currentColor"
        style={{ opacity: s <= rating ? 1 : 0.3 }}
      />
    ))}
  </div>
);

// ── Componente principal ──────────────────────────────────────────────────────
const About = () => {
  const { reviews, loading } = useGoogleReviews();

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
              Nuestras soluciones se construyen sobre cimientos sólidos de <strong>arquitectura, escalabilidad, ciberseguridad y trazabilidad</strong>.
              Utilizamos metodologías ágiles para asegurar que cada iteración responda al cambio, garantizando siempre la integridad de los sistemas.
            </p>
            <p>
              No escribimos código de forma aislada; cada decisión técnica y arquitectónica responde directamente a un objetivo
              de negocio medible, garantizando así el retorno de la inversión de nuestros clientes.
            </p>
          </div>
        </div>

        <div className="testimonials-section">
          <h3>La opinión de quienes confían en nosotros</h3>

          {loading ? (
            <div className="testimonials-loading">
              <p>Cargando reseñas…</p>
            </div>
          ) : (
            <div className="testimonials-grid">
              {reviews.map((testi, idx) => (
                <div key={idx} className="testimonial-card">
                  <StarRating rating={testi.rating} />
                  <p className="quote">"{testi.text}"</p>
                  <div className="author">
                    {testi.photoUrl ? (
                      <img
                        src={testi.photoUrl}
                        alt={testi.name}
                        className="avatar avatar--photo"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="avatar">{testi.avatar}</div>
                    )}
                    <div className="author-info">
                      <strong>{testi.name}</strong>
                      <span>{testi.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;

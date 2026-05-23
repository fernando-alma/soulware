import React from 'react';
import { FaWhatsapp, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './SocialLinks.scss';

/**
 * SocialLinks — bloque de íconos de redes sociales.
 * Estilo: icono blanco sobre fondo transparente, sin relleno de bloque.
 * Hover: opacidad 0.7 + scale suave.
 *
 * Props:
 *   size     – tamaño del ícono en px (default 28)
 *   centered – añade la clase .social-links--centered para centrar (default true)
 */
const socialItems = [
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    href: 'https://wa.me/5492615000000', // ← reemplazar con el número real
    icon: FaWhatsapp,
  },
  {
    id: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/soulware.ar', // ← reemplazar con el handle real
    icon: FaInstagram,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/soulware-ar', // ← reemplazar con la URL real
    icon: FaLinkedinIn,
  },
];

const SocialLinks = ({ size = 28, centered = true }) => {
  return (
    <div
      className={`social-links${centered ? ' social-links--centered' : ''}`}
      role="list"
      aria-label="Redes sociales de Soulware"
    >
      {socialItems.map(({ id, label, href, icon: Icon }) => (
        <a
          key={id}
          href={href}
          className={`social-links__item social-links__item--${id}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          role="listitem"
        >
          <Icon size={size} aria-hidden="true" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;

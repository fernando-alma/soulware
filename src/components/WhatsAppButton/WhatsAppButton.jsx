import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.scss';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5492615407274"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
};

export default WhatsAppButton;

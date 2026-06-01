import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { useTheme } from '../../context/ThemeContext';
import logoSvg from '../../assets/header/ISOLOGO-TRANSPARENTE-negro.svg';
import './Navbar.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <div className="logo">
          <img
            src={logoSvg}
            alt="Soulware isologo"
            className={`logo-img${theme === 'dark' ? ' logo-img--dark' : ''}`}
          />
          <h2>Soulware</h2>
        </div>
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <a href="#inicio" onClick={() => setIsOpen(false)}>Inicio</a>
          <a href="#servicios" onClick={() => setIsOpen(false)}>Servicios</a>
          <a href="#portfolio" onClick={() => setIsOpen(false)}>Portfolio</a>
          <a
            href="#quienes-somos"
            onClick={(e) => handleSmoothScroll(e, 'quienes-somos')}
          >
            Nosotros
          </a>
          <a href="#blog" onClick={() => setIsOpen(false)}>Blog</a>
          <a href="#contacto" onClick={() => setIsOpen(false)}>Contacto</a>
        </div>
        <div className="nav-right">
          <ThemeToggle />
          <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

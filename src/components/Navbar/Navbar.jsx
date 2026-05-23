import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './Navbar.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <div className="logo">
          <h2>Soulware</h2>
        </div>
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <a href="#inicio" onClick={() => setIsOpen(false)}>Inicio</a>
          <a href="#servicios" onClick={() => setIsOpen(false)}>Servicios</a>
          <a href="#portfolio" onClick={() => setIsOpen(false)}>Portfolio</a>
          <a href="#nosotros" onClick={() => setIsOpen(false)}>Nosotros</a>
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

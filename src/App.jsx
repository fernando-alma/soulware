import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import WebDev from './components/WebDev/WebDev';
import CreativePricing from './components/Pricing/CreativePricing';
import ServicesAndMethodology from './components/ServicesAndMethodology/ServicesAndMethodology';
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About/About';
import Team from './components/Team/Team';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';
import { ThemeProvider } from './context/ThemeContext';
import './index.scss';

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <Hero />
        <WebDev />
        <CreativePricing />
        <ServicesAndMethodology />
        <Team />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </ThemeProvider>
  );
}

export default App;

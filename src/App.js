import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div className="min-h-screen bg-black text-gray-100 font-mono">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero activeSection={activeSection} />
      {activeSection === 'about' && <About />}
      {activeSection === 'experience' && <Experience />}
      {activeSection === 'contact' && <Contact />}
      <Footer />
    </div>
  );
}
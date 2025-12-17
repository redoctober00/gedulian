import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Antigravity from './antigravity';
import Waves from './waves';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div className="min-h-screen bg-black text-gray-100 font-mono relative">
      {/* Global Antigravity effect */}
      {/* <div className="fixed inset-0 z-0 pointer-events-none">
        <Antigravity
          count={100}
          magnetRadius={10}
          ringRadius={3}
          waveSpeed={0.4}
          waveAmplitude={1}
          particleSize={1.5}
          lerpSpeed={0.05}
          color={'#360625ff'}
          particleVariance={1}
          hideDelay={1500}
        />
      </div> */}

      <Waves
  lineColor="#311c2fff"
  backgroundColor="rgba(0, 0, 0, 0.12)"
  waveSpeedX={0.02}
  waveSpeedY={0.01}
  waveAmpX={40}
  waveAmpY={20}
  friction={0.9}
  tension={0.01}
  maxCursorMove={120}
  xGap={12}
  yGap={36}
/>
      <div className="relative z-10">
        <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
        <Hero activeSection={activeSection} />
        {activeSection === 'about' && <About />}
        {activeSection === 'experience' && <Experience />}
        {activeSection === 'contact' && <Contact />}
        <Footer />
      </div>
    </div>
  );
}
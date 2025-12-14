import React from 'react';
import Shuffle from '../shuffle';

export default function Navigation({ activeSection, setActiveSection }) {
  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm border-b border-purple-900/30 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold flex items-center shrink-0">
          <span className="text-rose-400">&lt;</span>
          <Shuffle 
            text="EARL"
            className="text-white"
            tag="span"
            triggerOnHover={true}
            duration={0.5}
            stagger={0.02}
            loop={true}
            loopDelay={3}
            shuffleTimes={3}
            scrambleCharset="!@#$%^&*()_+ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
          />
          <span className="text-rose-400">/&gt;</span>
        </div>
        <div className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide ml-4 -mr-6 pr-6 md:mr-0 md:pr-0 md:overflow-visible">
          {['about', 'experience', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`uppercase text-sm tracking-wider transition-colors whitespace-nowrap ${
                activeSection === section
                  ? 'text-rose-400'
                  : 'text-gray-400 hover:text-rose-500'
              }`}
            >
              {section}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

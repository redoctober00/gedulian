import React from 'react';

export default function Navigation({ activeSection, setActiveSection }) {
  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm border-b border-purple-900/30 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">
          <span className="text-rose-400">&lt;</span>
          <span className="text-white">EARL</span>
          <span className="text-rose-400">/&gt;</span>
        </div>
        <div className="flex gap-6">
          {['about', 'experience', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`uppercase text-sm tracking-wider transition-colors ${
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

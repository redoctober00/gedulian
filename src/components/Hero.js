import React from 'react';
import m from '../assets/m.png';
import umaapoy from '../assets/umaapoy.mp4';
export default function Hero({ activeSection }) {
  const sectionContent = {

    about: {
      title: "Gedulian",
      subtitle: "Developer",
      description: "I'm a student who build real projects. From Web to Cloud, I also like making small Unity games and learning new tools as I go."
    },
    experience: {
      title: "Projects",
      subtitle: "Check Out",
      description: "Latest projects showcasing full-stack capstone web development, game development, and cloud technologies."
    },
    contact: {
      title: "Let's Connect",
      subtitle: "Looking for internship",
      description: "I'm open to internship opportunities and eager to discuss projects or ideas, especially those involving cloud technologies, networks, or system development."
    }
  };
        
  const content = sectionContent[activeSection] || sectionContent.about;

  return (
    <section className="pt-32 pb-20 px-6">
      
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Section */}
          <div className="relative">
            <div className="absolute -top-8 -left-4 w-32 h-32 bg-red-900/10 blur-3xl"></div>
            <div className="absolute -bottom-8 -right-4 w-32 h-32 bg-purple-900/10 blur-3xl"></div>
            <h1 className="text-6xl md:text-8xl font-bold mb-4 relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-900 to-rose-700">
                {content.title}
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-100 to-purple-200">
                {content.subtitle}
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl relative">
              {content.description}
            </p>
          </div>

          {/* Image Section - Only visible in about section */}
          {activeSection === 'about' && (
            <div className="flex-shrink-0">
              <img 
                src={m} 
                alt="Profile" 
                className="w-50 h-50 md:w-64 md:h-80 rounded-full object-cover object-top border-4 border-rose-900/30 shadow-lg"
              />
            </div>
          )}

          {/* Video Section - Only visible in experience section */}
          {activeSection === 'experience' && (
            <div className="flex-shrink-0 flex flex-col items-center w-full md:w-auto">
              <video 
                src={umaapoy} 
                autoPlay
                loop
                muted
                playsInline
                controls
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg aspect-video rounded-lg object-cover border-4 border-rose-900/30 shadow-lg"
              />
              <p className="mt-3 text-gray-400 text-sm">"grabe mag code is earl oh umaapoy yung ano niya 'no?"</p>
            </div>
          )}
        </div>
      </div>
    </section>
  
  );
}
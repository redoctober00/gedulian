import React from 'react';

export default function Hero({ activeSection }) {
  const sectionContent = {

    about: {
      title: "Gedulian",
      subtitle: "Developer",
      description: "I'm a student who build real projects. From Web to Cloud, I also like making small Unity games and learning new tools as I go."
    },
    experience: {
      title: "Projects",
      subtitle: "My Experiences",
      description: "Check out my latest projects showcasing full-stack capstone web development, game development, and cloud technologies."
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
      </div>
    </section>
  
  );
}
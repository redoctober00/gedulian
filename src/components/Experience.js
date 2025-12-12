import React from 'react';
import { BookCheck,ExternalLink, Github, Video } from 'lucide-react';

export default function Experience() {
  const projects = [
    {
      title: "Online Appoitnment and Service Management System",
      description: "A full-stack web application capstone to help appointment scheduling and service management for KCS Auto Repair Shop located in #56-A Kanlaon S.",
      tech: ["PHP", "JS" , "MySQL", "HTML", "CSS"],
      websiteLink: "https://kcsautorepairshop.com/",
      githubLink: "https://github.com/redoctober00/kcs-public",
      image: "https://media.discordapp.net/attachments/1317140929554939907/1448957040884973629/KCS.png?ex=693d25e6&is=693bd466&hm=e0d562a7911fb3057846e1d9a2edbafe54aa945d1459891364c9f5116c1342db&=&format=webp&quality=lossless&width=1663&height=800",
      videoLink: null
    },
    {
    title: "2D Action Platformer Demo",
    description: "A Unity-based featuring player combat, enemy AI, boss encounters, dialogue triggers, animations, and audio effects.",
    tech: ["Unity", "C#", "Animation System",],
    websiteLink: null,
    githubLink: "https://github.com/redoctober00/Game-Development",
    image: "https://media.discordapp.net/attachments/1317140929554939907/1448957040490840157/game.png?ex=693d25e6&is=693bd466&hm=592f5bc722b38083d353c4a731b41ed5bfac289de13c9aa2b461994d4c9de34c&=&format=webp&quality=lossless&width=1424&height=800",
    videoLink: "https://drive.google.com/file/d/1e6ou_q0LB7h4B_grUEbFzLey7clI-JgE/view?usp=sharing"
  },
    {
    title: "Huawei Cloud",
    description: "Hands-on work with Huawei Cloud services, including setting up and managing ECS instances, configuring databases, linux configuration, and working with cloud-based resources.",
    tech: ["CLoud", "Linux Server Setup",],
    websiteLink: null,
    githubLink: null,
    image: "https://media.discordapp.net/attachments/1317140929554939907/1448957040084123689/cloud.png?ex=693d25e6&is=693bd466&hm=d6c7e4c2ab7b90ff5d61fb3045244689016c1eb8d6b3e901c13b229e82a5a1a4&=&format=webp&quality=lossless&width=1328&height=606",
    videoLink: null
  }
  
  ];

  return (
    <section className="py-20 px-6 border-t border-purple-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <BookCheck className="w-6 h-6 text-rose-100" />
          <h2 className="text-3xl font-bold text-rose-100">Works</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-rose-900/10 to-transparent border border-rose-100/30 rounded-lg hover:border-rose-100/50 transition-all group"
            >
              {project.image && (
                <div className="w-full h-48 overflow-hidden rounded-t-lg bg-gray-900">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
              
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs text-purple-300 bg-purple-900/20 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 mt-4">
                  {project.websiteLink && (
                    <a
                      href={project.websiteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 bg-purple-900/30 border border-purple-500/30 rounded hover:bg-purple-900/50 hover:border-purple-400/50 transition-all text-sm text-purple-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Website</span>
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 bg-purple-900/30 border border-purple-500/30 rounded hover:bg-purple-900/50 hover:border-purple-400/50 transition-all text-sm text-purple-300"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                  )}
                  {project.videoLink && (
                    <a
                      href={project.videoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 bg-purple-900/30 border border-purple-500/30 rounded hover:bg-purple-900/50 hover:border-purple-400/50 transition-all text-sm text-purple-300"
                    >
                      <Video className="w-4 h-4" />
                      <span>Video</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

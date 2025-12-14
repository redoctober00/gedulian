import React from 'react';
import kcs from '../assets/KCS.png';
import cloud from '../assets/cloud.png';
import game from '../assets/game.png';
import { BookCheck, ExternalLink, Github, Video } from 'lucide-react';

export default function Experience() {
  const projects = [
    {
      title: "Online Appointment and Service Management System",
      description: "A full-stack web application capstone project to help appointment scheduling and service management for KCS Auto Repair Shop located in #56-A Kanlaon S.",
      tech: ["PHP", "JS", "MySQL", "HTML", "CSS"],
      websiteLink: "https://kcsautorepairshop.com/",
      githubLink: "https://github.com/redoctober00/kcs-public",
      image: kcs,
      videoLink: null
    },
    {
      title: "2D Action Platformer Demo",
      description: "A Unity-based game featuring player combat, enemy AI, boss encounters, dialogue triggers, animations, and audio effects.",
      tech: ["Unity", "C#", "Animation System"],
      websiteLink: null,
      githubLink: "https://github.com/redoctober00/Game-Development",
      image: game,
      videoLink: "https://drive.google.com/file/d/1e6ou_q0LB7h4B_grUEbFzLey7clI-JgE/view?usp=sharing"
    },
    {
      title: "Huawei Cloud",
      description: "Hands-on work with Huawei Cloud services, including setting up and managing ECS instances, configuring databases, Linux configuration, and working with cloud-based resources.",
      tech: ["Cloud", "Linux Server Setup"],
      websiteLink: null,
      githubLink: null,
      image: cloud,
      videoLink: null
    }
  ];

  return (
    <section className="py-20 px-6 border-t border-rose-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <BookCheck className="w-6 h-6 text-rose-100" />
          <h2 className="text-3xl font-bold text-rose-100">Works</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-rose-100/10 to-transparent border border-rose-100/30 rounded-lg hover:border-rose-100/50 transition-all group overflow-hidden"
            >
              {project.image && (
                <div className="w-full h-48 overflow-hidden rounded-t-lg bg-gray-900">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-gray-800 text-gray-400">Image not found</div>';
                    }}
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs text-rose-100 bg-rose-100/20 px-2 py-1 rounded"
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
                      className="flex items-center gap-2 px-3 py-2 bg-rose-100/30 border border-rose-100/30 rounded hover:bg-rose-100/50 hover:border-rose-100/50 transition-all text-sm text-rose-100"
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
                      className="flex items-center gap-2 px-3 py-2 bg-rose-100/30 border border-rose-100/30 rounded hover:bg-rose-100/50 hover:border-rose-100/50 transition-all text-sm text-rose-100"
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
                      className="flex items-center gap-2 px-3 py-2 bg-rose-100/30 border border-rose-100/30 rounded hover:bg-rose-100/50 hover:border-rose-100/50 transition-all text-sm text-rose-100"
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
import React from 'react';
import { User } from 'lucide-react';
import Lanyard from '../lanyard';

export default function About() {
  const skills = [
    "Java", "C#", "JavaScript","Three.js", "PHP", "Python", "HTML", "CSS", "SQL","MongoDB",
    "React", "Huawei Cloud", "Unity", "Git", "GitHub", 
  ];

  return (
    <section className="py-20 px-6 border-t border-rose-100/30 relative overflow-hidden">
      {/* Lanyard background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
      </div>
  
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <User className="w-6 h-6 text-rose-100" />
          <h2 className="text-3xl font-bold text-white">ME?</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-300 mb-6 leading-relaxed">
             A Fourth year Information Technology student from STI College Fairview with experience in building applications
             that solve real-world problems, game developing and many more with a strong
             foundation in Java and C#.
            </p>
            
          </div>
          <div>
            <h3 className="text-xl font-bold text-g-rose-500 mb-4">SKILLS</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-rose-100/20 border border-rose-100/30 text-rose-100 text-sm rounded hover:bg-rose-100/30 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { User } from 'lucide-react';

export default function About() {
  const skills = [
    "Java", "C#", "JavaScript","Three.js", "PHP", "Python", "HTML", "CSS", "SQL","MongoDB",
    "React", "Huawei Cloud", "Unity", "Git", "GitHub", 
  ];

  return (
    <section className="py-20 px-6 border-t border-rose-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <User className="w-6 h-6 text-rose-100" />
          <h2 className="text-3xl font-bold text-white">ABOUT</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-300 mb-6 leading-relaxed">
             Fourth year Information Technology student from STI College Fairview with experience in building applications
             that solve real-world problems, game developing and many more with a strong
             foundation in Java and C#.
            </p>
            
          </div>
          <div>
            <h3 className="text-xl font-bold text-g-rose-100 mb-4">SKILLS</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-purple-900/20 border border-rose-200/30 text-rose-300 text-sm rounded hover:bg-rose-900/30 transition-colors"
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

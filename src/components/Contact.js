import React from 'react';
import { Github, Linkedin, Send, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 px-6 border-t border-purple-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Send className="w-6 h-6 text-rose-100" />
          <h2 className="text-3xl font-bold text-rose-100">CONTACT</h2>
        </div>
        <div className="max-w-2xl">
          <p className="text-gray-300 mb-8 text-lg">
            Currently looking for internship opportunities. Feel free to reach out via
            email!
          </p>
          <div className="flex flex-col gap-4 mb-8">
            <a
              href="mailto:johnearlgedulian@gmail.com"
              className="text-rose-100 hover:text-rose-300 transition-colors text-lg"
            >
              johnearlgedulian@gmail.com
            </a>
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com/redoctober00"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-rose-100/20 border border-rose-500/30 rounded-lg hover:bg-rose-900/30 hover:border-rose-400/50 transition-all"
            >
              <Github className="w-6 h-6 text-rose-100" /> 
            </a>
            <a
              href="https://www.linkedin.com/in/john-earl-gedulian-ba982a368/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-rose-100/20 border border-rose-500/30 rounded-lg hover:bg-rose-900/30 hover:border-rose-400/50 transition-all"
            >
              <Linkedin className="w-6 h-6 text-rose-100" />
            </a>
            <a
              href="mailto:johnearlgedulian@gmail.com"
              className="p-3 bg-rose-100/20 border border-rose-500/30 rounded-lg hover:bg-rose-900/30 hover:border-rose-400/50 transition-all"
            >
              <Mail className="w-6 h-6 text-rose-100" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

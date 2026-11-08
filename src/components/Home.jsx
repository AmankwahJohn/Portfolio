import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import myPhoto from '../assets/my_photo.png';

export default function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-28 pb-16 px-6 max-w-4xl mx-auto text-center bg-[#0a0a0a] text-zinc-100">
      <div className="flex flex-col items-center gap-8 w-full">
        
        {/* Larger Rectangular Profile Picture */}
        <div className="relative w-64 h-60 sm:w-80 sm:h-100 rounded-3xl p-2 bg-gradient-to-br from-black-300/200 to-black-300/200  shadow-2xl overflow-hidden group">
          <div className="w-full h-full rounded-xl overflow-hidden bg-[#121212] relative">
            <img 
              src={myPhoto} 
              alt="John Adjei Amankwah" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-white text-xs font-semibold tracking-wide uppercase">
          <span>Project Manager and Aspiring AI/ML Engineer</span>
        </div>

        {/* Greeting & Statement with Highlighted & Normal Text */}
        <div className="flex flex-col items-center gap-4 max-w-2xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-400">John Adjei Amankwah</span>
          </h1>

          <p className="text-lg text-zinc-400 leading-relaxed">
            As a Co-Founder & CEO of Vekta(Startup), I love working on projects that actually solve real life problems.
            I learn and adapt very quickly to new technologies and environments, and I am always eager to take on new challenges.
            Also, I am an aspiring AI/ML Engineer with a strong passion for leveraging technology to create innovative solutions.
          </p>
        </div>

        {/* Action Links with Brand Icons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a 
            href="#projects" 
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20"
          >
            Explore Projects <ArrowRight className="w-4 h-4" />
          </a>

          <a 
            href="https://github.com/AmankwahJohn" 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#18181b] border border-[#27272a] text-zinc-300 font-medium hover:text-white hover:border-zinc-700 transition-all"
          >
            <FaGithub className="w-4 h-4 text-white" /> GitHub
          </a>

          <a 
            href="https://linkedin.com/in/john-amankwah-125128352" 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#18181b] border border-[#27272a] text-zinc-300 font-medium hover:text-white hover:border-zinc-700 transition-all"
          >
            <FaLinkedin className="w-4 h-4 text-blue-400" /> LinkedIn
          </a>

          <a 
            href="/resume.pdf" 
            download 
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#18181b] border border-[#27272a] text-zinc-300 font-medium hover:text-white hover:border-zinc-700 transition-all"
          >
            <FileText className="w-4 h-4 text-blue-400" /> Resume
          </a>
        </div>

      </div>
    </section>
  );
}
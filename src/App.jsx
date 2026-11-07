
import Navbar from "./components/navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/about.jsx";
import Experience from "./components/experience.jsx";
import Skills from "./components/skills.jsx";
import { FaGithub, FaLinkedin, FaInstagram, FaSnapchatGhost, FaWhatsapp } from "react-icons/fa";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 selection:bg-blue-500 selection:text-white">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Sections */}
      <Home />
      <About />
      <Experience />
      <Skills />
      
      {/* Footer */}
      <footer className="py-14 px-6 bg-white border-t border-zinc-200 text-center flex flex-col items-center gap-6 text-zinc-800">
        
        {/* Brand Logo & Name */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-600 font-extrabold text-lg">
            J
          </div>
          <h3 className="font-bold text-lg text-zinc-900">John</h3>
          <p className="text-xs text-zinc-500 font-medium">Project Manager and Aspiring AI/ML Engineer</p>
        </div>

       

        {/* Social Media Icons */}
        <div className="flex items-center gap-4 pt-2">
          <a 
            href="https://github.com/AmankwahJohn" 
            target="_blank" 
            rel="noreferrer" 
            className="p-3 rounded-full bg-zinc-100 border border-zinc-300 text-zinc-700 hover:bg-zinc-200 hover:text-black transition-all"
            aria-label="GitHub"
          >
            <FaGithub className="w-4 h-4 text-zinc-900" />
          </a>

          <a 
            href="https://linkedin.com/in/john-amankwah-125128352" 
            target="_blank" 
            rel="noreferrer" 
            className="p-3 rounded-full bg-zinc-100 border border-zinc-300 text-zinc-700 hover:bg-zinc-200 hover:text-black transition-all"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-4 h-4 text-blue-600" />
          </a>

          <a 
            href="https://www.instagram.com/amankwahjohn_20?srtk=MWowc3M3bzExa3NmMw%3D%3D&utm_source=qr" 
            target="_blank" 
            rel="noreferrer" 
            className="p-3 rounded-full bg-zinc-100 border border-zinc-300 text-zinc-700 hover:bg-zinc-200 hover:text-black transition-all"
            aria-label="Instagram"
          >
            <FaInstagram className="w-4 h-4 text-pink-600" />
          </a>

          <a 
            href="https://snapchat.com/t/msKDYax5" 
            target="_blank" 
            rel="noreferrer" 
            className="p-3 rounded-full bg-zinc-100 border border-zinc-300 text-zinc-700 hover:bg-zinc-200 hover:text-black transition-all"
            aria-label="Snapchat"
          >
            <FaSnapchatGhost className="w-4 h-4 text-yellow-500" />
          </a>

          <a 
            href="https://wa.me/AmankwahJohn?s=p" 
            target="_blank" 
            rel="noreferrer" 
            className="p-3 rounded-full bg-zinc-100 border border-zinc-300 text-zinc-700 hover:bg-zinc-200 hover:text-black transition-all"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="w-4 h-4 text-emerald-600" />
          </a>
        </div>

        {/* Copyright Text */}
        <p className="text-xs text-zinc-500 pt-2 font-medium">
          © {new Date().getFullYear()} John Adjei Amankwah. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
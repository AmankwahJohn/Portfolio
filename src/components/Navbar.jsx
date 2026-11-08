import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact Me', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[#27272a]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <a href="#home" className="flex items-center gap-2.5 font-bold text-lg text-white group">
          <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 font-extrabold text-base group-hover:bg-blue-600/20 transition-all">
            J
          </div>
          <span>Johnny</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isContact = link.name === 'Contact Me';

            return (
              <a
                key={link.name}
                href={link.href}
                className={
                  isContact
                    ? "px-5 py-2 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20"
                    : "text-zinc-400 hover:text-white transition-colors"
                }
              >
                {link.name}
              </a>
            );
          })}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-xl bg-[#18181b] border border-[#27272a] text-zinc-300 hover:text-white focus:outline-none"
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#121212] border-b border-[#27272a] px-6 py-6 flex flex-col gap-4 shadow-2xl">
          {navLinks.map((link) => {
            const isContact = link.name === 'Contact Me';

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={
                  isContact
                    ? "text-center px-4 py-2.5 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-500 transition-all"
                    : "text-zinc-400 hover:text-white text-base font-medium py-1 transition-colors"
                }
              >
                {link.name}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
}

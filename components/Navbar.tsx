'use client';
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from 'framer-motion';
import { useState } from 'react';
import { GithubIcon, LinkedInIcon } from './social-icons';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navItems = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Achievements', id: 'achievements' },
  { name: 'Projects', id: 'projects' },
  { name: 'Services', id: 'services' },
  { name: 'Contact', id: 'contact' },
];

const socialLinks = {
  github: 'https://github.com/Hariharan1893',
  linkedin: 'https://www.linkedin.com/in/hariharanr18/',
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50);
  });

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ease-out ${
        isScrolled ? 'backdrop-blur-2xl bg-[#0d0319]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 group"
          >
            <span
              onClick={() => handleScroll('hero')}
              className="cursor-pointer font-semibold text-[#ffffff] text-lg"
            >
              Hariharan R
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-6 px-4 py-2 rounded-full border border-white/5 shadow-md">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  className="text-[#d1c1e8]/80 hover:text-[#7b61ff] transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </div>

            <div className="h-6 w-px bg-white/10 mx-2" />

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-[#7b61ff]/10 transition-colors group"
              >
                <GithubIcon className="h-5 w-5 text-[#d1c1e8]" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-[#7b61ff]/10 transition-colors group"
              >
                <LinkedInIcon className="h-5 w-5 text-[#d1c1e8]" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/5 hover:bg-[#7b61ff]/10 transition-colors"
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6 text-[#d1c1e8]" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-[#d1c1e8]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ clipPath: 'circle(0% at 100% 50%)' }}
              animate={{ clipPath: 'circle(120% at 100% 50%)' }}
              exit={{ clipPath: 'circle(0% at 100% 50%)' }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="fixed top-16 right-0 w-3/4 max-w-xs h-screen z-50 p-6 flex flex-col space-y-6
                 bg-[#0d0319] shadow-lg border-l border-white/10"
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  className="block px-4 py-2 text-[#d1c1e8]/80 hover:text-[#7b61ff] hover:bg-white/5 
                    rounded-lg transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

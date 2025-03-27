'use client';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-[#d1c1e8] py-8 mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-4"
      >
        {/* Social Icons */}
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/hariharanr18/"
            target="_blank"
            className="text-[#d1c1e8] hover:text-[#7b61ff] transition text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Hariharan1893"
            target="_blank"
            className="text-[#d1c1e8] hover:text-[#7b61ff] transition text-2xl"
          >
            <FaGithub />
          </a>

          <a
            href="mailto:hariramesh1893@gmail.com"
            className="text-[#d1c1e8] hover:text-[#7b61ff] transition text-2xl"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-[#d1c1e8]/80">
          &copy; {new Date().getFullYear()} Hariharan R. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}

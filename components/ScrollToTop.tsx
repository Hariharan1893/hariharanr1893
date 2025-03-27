'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpIcon } from '@heroicons/react/24/outline';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? [-10, 0, -10] : 50,
      }}
      transition={{
        duration: 0.6,
        repeat: Infinity,
        repeatType: 'reverse',
      }}
      className={`fixed bottom-8 right-7 bg-[#7b61ff] text-white p-3 rounded-full shadow-lg 
                 hover:bg-[#5a3ec8] transition-all ${
                   isVisible ? 'block' : 'hidden'
                 }`}
      aria-label="Scroll to top"
    >
      <ArrowUpIcon className="h-6 w-6" />
    </motion.button>
  );
}

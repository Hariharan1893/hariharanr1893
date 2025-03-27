'use client';
import { ParticleCanvas } from '@/hooks/particle';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';

export default function Hero() {
  const { scrollY } = useScroll();
  const [showTypewriter, setShowTypewriter] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTypewriter(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const y = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <section
      id="hero"
      className="min-h-screen relative overflow-hidden bg-background text-foreground"
    >
      <ParticleCanvas />
      <div className="max-w-7xl mx-auto px-6 pt-32">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative group text-center lg:ml-10 lg:text-left lg:w-1/2"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="-mt-10 text-4xl md:text-7xl font-bold bg-gradient-to-r from-[#7b61ff] via-[#a855f7] to-[#ff69b4] bg-clip-text text-transparent mb-6"
            >
              {showTypewriter && (
                <Typewriter
                  words={['Java Developer', 'Web Developer', 'Freelancer']}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              )}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="text-lg md:text-xl text-[#d1c1e8]/80 mb-8 leading-relaxed"
            >
              Tech-savvy developer skilled in Java, Spring Boot, SQL, and
              Next.js. Building innovative solutions, collaborating, and making
              an impact in tech.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6"
            >
              <a
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    });
                  }
                }}
                className="px-8 py-4 cursor-pointer rounded-full bg-[#7b61ff] text-white font-semibold shadow-lg 
                hover:bg-[#5a3ec8] transition-all text-center"
              >
                Hire Me
              </a>

              <a
                href="/resume/resume.pdf"
                download
                className="px-8 py-4 rounded-full border border-white/10 text-[#d1c1e8] 
                hover:border-[#a855f7]/30 hover:text-[#a855f7] transition-all text-center"
              >
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Image Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
            className="-mt-10 w-70 h-70 lg:mt-10 lg:w-1/2 lg:h-1/2 p-5 relative flex justify-center"
            style={{ y }}
          >
            <div className="relative w-full md:w-3/4 lg:w-auto h-auto group">
              {/* Animated Border */}
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'mirror',
                }}
                className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#7b61ff]/30 via-[#a855f7]/30 to-[#ff69b4]/30 opacity-50"
              />

              {/* Floating Animation */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative w-full h-auto rounded-3xl overflow-hidden border border-white/10 bg-surface backdrop-blur-sm"
              >
                <Image
                  src="/page-hero3.png"
                  alt="Avatar"
                  width={400}
                  height={400}
                  className="object-cover scale-110 group-hover:scale-100 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Location Text */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="absolute bottom-6 left-6"
                >
                  <div className="text-lg font-bold text-[#d1c1e8]">
                    Based in
                    <motion.span
                      className="block bg-gradient-to-r from-[#7b61ff] to-[#a855f7] bg-clip-text text-transparent"
                      animate={{ backgroundPosition: ['0% 50%', '100% 50%'] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: 'mirror',
                      }}
                      style={{ backgroundSize: '200% 200%' }}
                    >
                      Puducherry
                    </motion.span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

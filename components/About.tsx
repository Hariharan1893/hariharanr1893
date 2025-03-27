'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutMe() {
  return (
    <section
      id="about"
      className="min-h-screen relative overflow-hidden bg-background text-foreground py-20"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#7b61ff]/10 via-transparent to-[#ff69b4]/5 opacity-30 blur-2xl" />

      <div className="mt-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative w-70 h-70 md:w-3/4 md:h-3/4 lg:w-1/2 lg:h-1/2"
          >
            <div className="relative w-full h-auto group">
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
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative w-full h-auto rounded-3xl overflow-hidden border border-white/10 bg-surface backdrop-blur-md shadow-lg"
              >
                <Image
                  src="/Coding-bro.svg"
                  alt="About Me"
                  width={500}
                  height={500}
                  className="object-cover scale-110 group-hover:scale-100 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative group text-center lg:text-left lg:w-1/2"
          >
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#7b61ff] via-[#a855f7] to-[#ff69b4] bg-clip-text text-transparent mb-6"
            >
              About Me
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg md:text-xl text-[#d1c1e8]/80 mb-8 leading-relaxed"
            >
              I am a passionate
              <span className="font-semibold text-[#a855f7]">
                {' '}
                Full-Stack Developer{' '}
              </span>
              with a love for building innovative, scalable, and
              high-performance web applications. Proficient in
              <span className="font-semibold text-[#ff69b4]">
                {' '}
                Java, SQL, Next.js, and Spring Boot
              </span>
              , I specialize in crafting seamless digital experiences.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-lg md:text-xl text-[#d1c1e8]/80 mb-8 leading-relaxed"
            >
              With a keen eye for detail and a growth-oriented mindset, I
              continuously strive to push the boundaries of technology. My
              journey is driven by a deep enthusiasm for coding, learning, and
              contributing to the developer community.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              onClick={() => {
                const contactSection = document.getElementById('projects');
                if (contactSection) {
                  contactSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                }
              }}
              whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
              className="relative overflow-hidden px-8 py-4 rounded-full bg-surface border border-white/10 hover:border-[#a855f7]/30 transition-all shadow-lg"
            >
              <span className="text-[#d1c1e8] hover:text-[#a855f7] transition-colors">
                View My Projects
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#7b61ff]/10 to-[#ff69b4]/10 opacity-0 hover:opacity-100 transition-opacity" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

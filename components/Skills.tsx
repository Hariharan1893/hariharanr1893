'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const skills = [
  'html',
  'css',
  'figma',
  'graphql',
  'java',
  'js',
  'mongodb',
  'mysql',
  'nextjs',
  'spring',
  'tailwindcss',
  'ts',
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative w-full overflow-hidden bg-[#0d0319] py-10 min-h-[40vh] flex flex-col items-center justify-center text-white"
    >
      <div className="text-center mb-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-4xl font-bold bg-gradient-to-r from-[#7b61ff] via-[#a855f7] to-[#ff69b4] bg-clip-text text-transparent mb-2"
        >
          My Tech Stack
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
          className="text-lg text-gray-300"
        >
          A collection of technologies I use to build amazing applications.
        </motion.p>
      </div>

      <div className="w-full overflow-hidden">
        <motion.div
          className="flex space-x-10 w-max"
          animate={{
            x: [0, '-50%'],
          }}
          transition={{
            duration: 40,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'loop',
          }}
        >
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="w-28 h-28 flex-shrink-0 flex items-center justify-center"
            >
              <Image
                src={`/${skill}.svg`}
                alt={skill}
                width={100}
                height={100}
                className="object-contain hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

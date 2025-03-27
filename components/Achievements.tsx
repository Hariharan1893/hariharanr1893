'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const achievements = [
  {
    id: 1,
    title: 'KochiHackathon 2025 - 2nd Place',
    images: [
      '/achievements/kochihackathon1.png',
      '/achievements/kochihackathon2.png',
    ],
    description:
      'Thrilled to secure 2nd place at KochiHackathon 2025 by Netstratum Technologies—an exhilarating journey of innovation and growth, with inspiring insights from Mamadou Alpha Barry!',
  },
  {
    id: 2,
    title: 'Technuxes Hackathon 2024',
    images: ['/achievements/kingsclg1.png', '/achievements/kingsclg2.png'],
    description:
      'Proud to have participated in the 12-hour Technuxes Hackathon 2024 at Kings Engineering College, Chennai, where we developed an AI-powered interview platform to streamline startup recruitment.',
  },
  {
    id: 3,
    title: 'Zoholics India 2024',
    images: [
      '/achievements/zoholics1.png',
      '/achievements/zoholics2.png',
      '/achievements/zoholics3.png',
    ],
    description:
      'Honored to represent Lernexia Solutions at Zoholics Events India 2024, engaging in insightful discussions on AI and innovation with industry leaders like Mr. Rajendran Dandapani and Mr. Ramprakash Ramamoorthy.',
  },
  {
    id: 4,
    title: 'Full Stack Workshop - PTU',
    images: ['/achievements/pec.png'],
    description:
      'Successfully completed a 2-day "Full Stack Development including DevOps" workshop at Puducherry Technological University in collaboration with Capgemini!',
  },
];

export default function Achievements() {
  const [imageIndices, setImageIndices] = useState<number[]>(
    achievements.map(() => 0),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndices((prevIndices) =>
        prevIndices.map(
          (index, i) => (index + 1) % achievements[i].images.length,
        ),
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="achievements"
      className="min-h-screen w-full py-20 bg-gradient-to-b from-[#0d0319] to-[#1a082a] text-white overflow-hidden"
    >
      <div className="flex justify-center align-middle">
        <div className="max-w-7xl mx-auto px-6">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold bg-gradient-to-r from-[#7b61ff] via-[#a855f7] to-[#ff69b4] bg-clip-text text-transparent text-center mb-4"
          >
            Achievements & Milestones
          </motion.h1>

          {/* Subtitle */}
          <p className="text-center text-gray-400 text-lg max-w-2xl mx-auto mb-16">
            A showcase of notable accomplishments, awards, and recognitions in
            AI, research, and open-source contributions.
          </p>

          {/* Grid with Animated Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-25">
            {achievements.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  rotate: index % 2 === 0 ? -5 : 5,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: index % 2 === 0 ? -5 : 5,
                }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                whileHover={{
                  scale: 1.1,
                  rotate: 0,
                  boxShadow: '0px 15px 40px rgba(255, 105, 180, 0.5)',
                }}
                className="relative bg-gradient-to-r from-[#2a1246] to-[#3a1a5a] p-6 rounded-3xl shadow-2xl flex flex-col items-center w-full h-auto transition-all duration-300 ease-in-out cursor-pointer border border-[#7b61ff] hover:shadow-pink-500"
              >
                {/* Animated Image */}
                <div className="relative w-full h-52 overflow-hidden rounded-xl">
                  <Image
                    src={item.images[imageIndices[index]]}
                    alt="Achievement"
                    layout="fill"
                    objectFit="contain"
                    className="object-center rounded-xl shadow-lg"
                  />
                </div>

                {/* Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-gray-300 text-center text-lg font-semibold max-w-sm mt-4"
                >
                  {item.title}
                </motion.h1>

                {/* Description */}
                <p className="mt-4 text-gray-400 text-center text-sm max-w-xs">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  FaCode,
  FaServer,
  FaPaintBrush,
  FaSearch,
  FaTools,
  FaCloud,
} from 'react-icons/fa';

const services = [
  {
    id: 1,
    title: 'Web Development',
    icon: <FaCode />,
    description:
      'High-performance web applications built using modern frameworks like Next.js.',
  },
  {
    id: 2,
    title: 'API Integration',
    icon: <FaServer />,
    description:
      'Seamlessly connecting and integrating APIs for enhanced functionality.',
  },
  {
    id: 3,
    title: 'UI/UX Design',
    icon: <FaPaintBrush />,
    description:
      'Crafting visually stunning and user-friendly digital experiences.',
  },
  {
    id: 4,
    title: 'SEO Services',
    icon: <FaSearch />,
    description:
      'Optimizing websites for higher search rankings and better visibility.',
  },
  {
    id: 5,
    title: 'Website Management',
    icon: <FaTools />,
    description:
      'Ensuring smooth operations, regular updates, and security maintenance.',
  },
  {
    id: 6,
    title: 'Hosting Services',
    icon: <FaCloud />,
    description: 'Reliable hosting solutions to keep your website online 24/7.',
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative min-h-screen w-full py-20 bg-gradient-to-b from-[#0d0319] to-[#1a082a] text-white flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 gap-12"
    >
      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <Image
          src="/page-service.svg"
          alt="Services"
          width={500}
          height={500}
          className="w-full max-w-md md:max-w-lg"
        />
      </motion.div>

      {/* Services List */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2"
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#7b61ff] via-[#a855f7] to-[#ff69b4] bg-clip-text text-transparent mb-8 text-center md:text-left">
          Services I Provide
        </h1>

        <div className="space-y-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 group cursor-pointer"
            >
              {/* Icon */}
              <div className="text-4xl text-[#a855f7] group-hover:text-[#ff69b4] transition-all">
                {service.icon}
              </div>
              {/* Text */}
              <div>
                <h2 className="text-lg font-semibold text-gray-300 group-hover:text-white">
                  {service.title}
                </h2>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

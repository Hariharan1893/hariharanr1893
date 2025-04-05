'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaEye } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'DentaBot',
    category: 'web',
    image: '/projects/Dentabot.png',
    liveUrl: 'https://dentabot.vercel.app/',
    githubUrl: 'https://github.com/Hariharan1893/DentaBot.git',
    description:
      'DentaBot is an AI-powered chatbot designed to assist dental students, professionals, and patients with instant responses to their dental-related queries.',
  },
  {
    id: 2,
    title: 'CodeBuddy',
    category: 'web',
    image: '/projects/Codebuddy.png',
    liveUrl: 'https://yourcodebuddy-one.vercel.app/',
    githubUrl: 'https://github.com/Hariharan1893/codebuddy.git',
    description:
      'Code-Buddy is a web-based AI-powered coding assistant that helps users with coding queries, explanations.',
  },
  {
    id: 3,
    title: 'NutriCookAI API',
    category: 'backend',
    image: '/projects/nutricookai.png',
    githubUrl: 'https://github.com/Hariharan1893/NutriCookAI.git',
    description:
      'A lightweight, AI-powered recipe suggestion API that generates personalized meal ideas based on given ingredients, cuisine preferences, and dietary restrictions.',
  },
  {
    id: 4,
    title: 'RapidSOS API',
    category: 'backend',
    image: '/projects/rapidsos.png',
    githubUrl: 'https://github.com/Hariharan1893/RapidSOS-API.git',
    description:
      'A Spring Boot REST API designed for managing users and their emergency contacts efficiently. This API enables users to send SOS alerts via SMS and email to all registered emergency contacts.',
  },
  {
    id: 5,
    title: 'ClipLinker - URL Shortener Service',
    category: 'backend',
    image: '/projects/cliplinker.png',
    githubUrl: 'https://github.com/Hariharan1893/ClipLinker-API.git',
    description:
      'This project is a URL shortener service that generates shortened URLs for long URLs and provides analytics such as click count and expiry times.',
  },
  {
    id: 6,
    title: 'DtPix Studios - Portfolio Landing page',
    category: 'web',
    image: '/projects/DtpixStudios.png',
    liveUrl: 'https://dtpixstudios.vercel.app/',
    githubUrl: 'https://github.com/Hariharan1893/DtpixStudios.git',
    description:
      "DtPix Studios is a visually captivating and responsive single-page landing site built to showcase a creative agency's services, values, and client trust.",
  },
  {
    id: 7,
    title: 'AWS S3 File Management API',
    category: 'backend',
    image: '/projects/s3-file-mng.png',
    githubUrl: 'https://github.com/Hariharan1893/S3-File-Management.git',
    description:
      'A simple Spring Boot application for managing file uploads, retrievals, and deletions using AWS S3 and MySQL.',
  },
  {
    id: 8,
    title: 'Email Auto Responder API',
    category: 'backend',
    image: '/projects/email-responder.png',
    githubUrl: 'https://github.com/Hariharan1893/Auto-Email-Responder-Api.git',
    description:
      'An intelligent, lightweight Spring Boot API that automatically replies to incoming emails based on message keywords using FreeMarker HTML templates.',
  },
];

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      className="min-h-screen w-full py-20 bg-gradient-to-b from-[#0d0319] to-[#1a082a] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold bg-gradient-to-r from-[#7b61ff] via-[#a855f7] to-[#ff69b4] bg-clip-text text-transparent text-center mb-8"
        >
          Projects Showcase
        </motion.h1>

        {/* Filters */}
        <div className="flex justify-center space-x-6 mb-12">
          {['all', 'web', 'backend'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                filter === cat
                  ? 'bg-[#7b61ff] text-white'
                  : 'bg-gray-700 text-gray-300'
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1  md:grid-cols-1 lg:grid-cols-3 gap-12">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative group bg-gradient-to-r from-[#2a1246] to-[#3a1a5a] p-6 rounded-3xl shadow-lg flex flex-col items-center w-full h-auto border border-[#7b61ff] hover:shadow-pink-500"
            >
              {/* Cover Image */}
              <div className="relative w-full h-56 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="contain"
                  className="object-center"
                />
              </div>

              {/* Project Title */}
              <h2 className="text-lg font-semibold text-center text-gray-300 mt-4">
                {project.title}
              </h2>

              {/* Project Description */}
              <p className="text-gray-400 text-sm text-center mt-2 px-4">
                {project.description}
              </p>

              {/* Action Icons */}
              <div className="flex space-x-4 mt-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaEye className="text-white text-xl hover:text-[#ff69b4] transition-all duration-300" />
                  </a>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-white text-xl hover:text-[#a855f7] transition-all duration-300" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
    title: 'JobQuest API',
    category: 'backend',
    image: '/projects/JobQuest.png',
    githubUrl: 'https://github.com/Hariharan1893/JobQuest-RestAPI.git',
    description:
      'Spring Boot REST API built for managing job postings, including operations to create, search, and retrieve job posts. It uses MongoDB for data storage.',
  },
  {
    id: 4,
    title: 'Inventory Service API',
    category: 'backend',
    image: '/projects/InventoryService.png',
    githubUrl:
      'https://github.com/Hariharan1893/Inventory-Service-with-Springboot-GraphQL.git',
    description:
      'This API provides GraphQL-based CRUD operations for managing products, including support for queries, mutations, and pagination.',
  },
  {
    id: 5,
    title: 'Event Management API',
    category: 'backend',
    image: '/projects/EventManagement.png',
    githubUrl: 'https://github.com/Hariharan1893/Event-Management-Api.git',
    description:
      'Spring Boot application that provides APIs to manage events, venues, categories, and event attendees.',
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

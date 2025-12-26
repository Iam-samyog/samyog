import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Frontend',
      image: '/img/shopco.png',
      description: 'A modern e-commerce experience initialized with a focus on ease of use and minimalist design. The platform handles complex cart logic, user sessions, and sleek payments integration.',
      challenge: 'Building a consistent state management system for the cart across sessions while maintaining high performance.',
      solution: 'Implemented Redux Toolkit for centralized state and persisted data via local storage with a sync mechanism.',
      technologies: ['React', 'Tailwind CSS', 'Redux', 'Stripe'],
      link: 'https://shopco-eight-beta.vercel.app/',
      github: 'https://github.com/Iam-samyog/E-commerceshop'
    },
    {
      id: 2,
      title: 'Quickspace',
      category: 'Frontend',
      image: '/img/quickspace.png',
      description: 'A B2B solutions provider website designed to build trust and showcase corporate services. The focus was on information architecture and loading speed.',
      challenge: 'Presenting a large amount of service data without overwhelming the user.',
      solution: 'Designed a modular component system with lazy-loading visuals and a clean tab-based navigation.',
      technologies: ['React','Tailwind CSS', 'Framer Motion'],
      link: 'https://quickspace-seven.vercel.app/',
      github: 'https://github.com/Iam-samyog/Quickspace'
    },
    {
      id: 3,
      title: 'Informat News',
      category: 'Frontend',
      image: '/img/Informat.png',
      description: 'A minimalist news aggregator connecting to external APIs to serve real-time updates. Prioritizes reading experience with a distraction-free UI.',
      challenge: 'Handling API rate limits and ensuring data consistency.',
      solution: 'Used caching strategies and optimistic UI updates to ensure the interface remains responsive.',
      technologies: ['React', 'Tailwind', 'News API'],
      link: 'https://informat-chi.vercel.app/',
      github: 'https://github.com/Iam-samyog/Informat-Modern-Newspaper-Website'
    },
    {
      id: 4,
      title: 'Luminaria Blog',
      category: 'Django',
      image: "/img/LuminariaBlog.png",
      description: 'A robust blogging platform featuring rich text editing, user profiles, and comment systems.',
      technologies: ['Django', 'PostgreSQL', 'Python'],
      link: 'https://github.com/Iam-samyog/Luminaria-',
      github: 'https://github.com/Iam-samyog/Luminaria-'
    },
    {
        id: 5,
        title: 'FoodieX',
        category: 'Django',
        image: '/img/FoodieX.png',
        description: 'Recipe gathering social platform.',
        technologies: ['Django', 'Python', 'JS'],
        link: 'https://github.com/Iam-samyog/FoodieX',
        github: 'https://github.com/Iam-samyog/FoodieX',
      },
      {
        id: 6,
        title: 'Quizo',
        category: 'Django',
        image: '/img/quizo.png',
        description: 'Real-time quiz application.',
        technologies: ['Django', 'Python', 'JS'],
        link: 'https://github.com/Iam-samyog/Quizo',
        github: 'https://github.com/Iam-samyog/Quizo'
      },
  ];

  const categories = ['all', 'Frontend', 'Django'];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-32 bg-black text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-mono font-bold mb-4 tracking-tight">/Projects</h2>
            <p className="text-gray-500 max-w-md">
              Details of my projects and their implementation. 
            </p>
          </motion.div>

           <div className="flex gap-4 mt-8 md:mt-0 font-mono text-sm">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`transition-colors ${
                  activeFilter === category 
                    ? 'text-white border-b border-white' 
                    : 'text-gray-600 hover:text-white'
                }`}
              >
                {category.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-32">
          {filteredProjects.slice(0, 5).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Image Section */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                   <div className="overflow-hidden rounded-lg bg-gray-900 border border-white/10 aspect-video relative group-hover:border-white/20 transition-colors">
                     <img 
                       src={project.image} 
                       alt={project.title} 
                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                     />
                   </div>
                </div>

                {/* Content Section */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                   <div className="flex items-center gap-4 mb-6">
                     <span className="text-blue-500 font-mono text-xs tracking-wider uppercase">0{index + 1}</span>
                     <div className="h-px bg-white/10 flex-grow" />
                     <span className="text-gray-500 font-mono text-xs tracking-wider uppercase">{project.category}</span>
                   </div>
                   
                   <h3 className="text-3xl font-bold mb-6">{project.title}</h3>
                   <p className="text-gray-400 leading-relaxed mb-6">
                     {project.description}
                   </p>

                   {project.challenge && (
                     <div className="mb-6 border-l-2 border-white/10 pl-4">
                       <h4 className="text-sm font-bold text-gray-300 mb-1">The Challenge</h4>
                       <p className="text-sm text-gray-500">{project.challenge}</p>
                     </div>
                   )}

                   <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8 font-mono text-xs text-gray-500">
                     {project.technologies.map((tech) => (
                       <span key={tech}>// {tech}</span>
                     ))}
                   </div>
                   
                   <div className="flex gap-6">
                     <a 
                       href={project.link}
                       target="_blank"
                       className="text-white hover:text-blue-400 transition-colors flex items-center gap-2 text-sm font-medium"
                     >
                       Live Demo 
                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                     </a>
                     <a 
                       href={project.github}
                       target="_blank"
                       className="text-gray-500 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium"
                     >
                       Source Code
                     </a>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-32 flex justify-center">
            <a 
              href="https://github.com/Iam-samyog" 
              target="_blank" 
              className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 rounded-full text-white font-medium hover:bg-white/5 transition-all group"
            >
                View More Projects
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
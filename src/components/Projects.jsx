import React, { useState, useEffect } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visible, setVisible] = useState(false);
  
  // Use this to simulate the "on mount" animation
  useEffect(() => {
    setVisible(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Website',
      category: 'Frontend',
      image: '/img/shopco.png',
      description: 'A  e-commerce website frontend made  with React, and Tailwind CSS.',
      technologies: ['React', 'Tailwind CSS'],
      link: 'https://shopco-eight-beta.vercel.app/',
      github: 'https://github.com/Iam-samyog/E-commerceshop'
    },
    {
      id: 2,
      title: 'Quickspace Website',
      category: 'Frontend',
      image: '/img/quickspace.png',
      description: 'A commercial website for the solution companies',
      technologies: ['React','Tailwind CSS'],
      link: 'https://quickspace-seven.vercel.app/',
      github: 'https://github.com/Iam-samyog/Quickspace'
    },
    {
      id: 3,
      title: 'Informat',
      category: 'Frontend',
      image: '/img/Informat.png',
      description: 'A modern newspaper design with minimalist aesthetics.',
      technologies: ['React', 'Tailwind CSS','API Integration'],
      link: 'https://informat-chi.vercel.app/',
      github: 'https://github.com/Iam-samyog/Informat-Modern-Newspaper-Website'
    },
    {
      id: 4,
      title: 'Acenda Travel Website',
      category: 'Frontend',
      image: '/img/Acenda.png',
      description: 'A travel website with booking and itinerary features.',
      
      technologies: ['React', 'Tailwind CSS'],
      link: 'https://acenda-five.vercel.app/',
      github: 'https://github.com/Iam-samyog/Acenda'
    },
   {
      id: 5,
      title: 'Quizo',
      category: 'Django',
      image: '/img/quizo.png',
      description: 'A quiz website with user authentication and quiz ',
      technologies: ['HTML', 'Python', 'Django','JavaScript'],
      link: 'https://github.com/Iam-samyog/Quizo',
      github: 'https://github.com/Iam-samyog/Quizo'
    },
    {
      id: 6,
      title: 'FoodieX',
      category: 'Django',
      image: '/img/FoodieX.png',
      description: 'A food receipe finder website with user authentication and receipes.',
   
      technologies: ['HTML', 'Python', 'Django','JavaScript'],
      link: 'https://github.com/Iam-samyog/FoodieX',
      github: 'https://github.com/Iam-samyog/FoodieX',

    },
    
     {
      id: 7,
      title: 'Todos',
      category: 'Django',
      image: "/img/todo's.png",
      description: 'A Todos website that has CRUD operation.',
      technologies: ['HTML', 'Python', 'Django'],
      link: 'https://github.com/Iam-samyog/Todo-s',
      github: 'https://github.com/Iam-samyog/Todo-s'
    },
  ];

  const categories = ['all', 'Frontend', 'Django'];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto max-w-[1350px] px-4">
        <div
          className={`text-center mb-16 transition-all duration-500 transform ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">My Projects</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div
          className={`flex justify-center flex-wrap gap-4 mb-12 transition-all duration-500 transform delay-200 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full capitalize transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                activeFilter === category 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.slice(0,6).map((project, index) => (
            <div
              key={project.id}
              className={`bg-gray-900 rounded-xl overflow-hidden border border-gray-700 group hover:border-blue-500 transition-all duration-500 transform ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-blue-900/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 transition-transform duration-300 hover:scale-110 active:scale-90"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                    </svg>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-800 transition-transform duration-300 hover:scale-110 active:scale-90"
                  >
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-400">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gray-800 text-sm rounded-full text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div
          className={`text-center mt-12 transition-all duration-500 transform delay-600 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <a
            href="https://github.com/Iam-samyog?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-gray-700 rounded-full font-medium inline-flex items-center gap-2 hover:bg-gray-600 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View More Projects
          </a>
        </div>
        
      </div>
    </section>
  );
};

export default Projects;
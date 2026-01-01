import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'JavaScript', category: 'Frontend' },
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'Django', category: 'Backend' },
  { name: 'Python', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'TailwindCSS', category: 'Styling' },
  { name: 'Framer Motion', category: 'Animation' },
  { name: 'Git', category: 'Tools' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'Figma', category: 'Design' },
  { name: 'RESTAPI', category: 'API Dev' },
  { name: 'Redis', category: 'Database' },
  { name: 'Firebase', category: 'Database' },
  { name: 'OAuth', category: 'Authentication' },
  { name: 'Vercel', category: 'Deployment' },
  { name: 'Render', category: 'Deployment' },
  { name: 'SimpleJWT', category: 'Security' },
  { name: 'C/C++', category: 'Programming' },


  

];

const Skills = () => {
  // Duplicate skills for seamless loop
  const marqueeSkills = [...skills, ...skills, ...skills];

  return (
    <section id="skills" className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 mb-16 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Expertise</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A curated stack of technologies I use to build scalable, high-performance applications.
          </p>
        </motion.div>
      </div>

      {/* Infinite Marquee */}
      <div className="relative w-full overflow-hidden py-10 bg-white/5 border-y border-white/5 backdrop-blur-sm">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
        
        <motion.div 
          className="flex space-x-12 whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 20 
          }}
        >
          {marqueeSkills.map((skill, index) => (
            <div key={index} className="flex items-center space-x-2 text-2xl font-bold text-gray-500 hover:text-white transition-colors cursor-default">
              <span className="text-blue-500">#</span>
              <span>{skill.name}</span>
            </div>
          ))}
        </motion.div>
      </div>

       {/* Floating Badges Grid */}
       <div className="container mx-auto px-4 mt-20 max-w-5xl">
         <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-gray-300 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all cursor-pointer shadow-lg backdrop-blur-md"
              >
                {skill.name}
              </motion.div>
            ))}
         </div>
       </div>

    </section>
  );
};

export default Skills;
import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      role: 'Student Technical Assistant',
      company: 'UTA Office of Information Technology',
      period: 'Nov 2025 – Present',
      location: 'Arlington, TX',
      description: 'Develop web content using HTML, CSS, and CMS platforms while conducting QA testing for WCAG 2.1 accessibility compliance. Provide technical support across university digital platforms.',
      skills: ['HTML/CSS', 'CMS', 'WCAG 2.1', 'QA Testing']
    },
    {
      role: 'ACM Create Member',
      company: 'Association for Computing Machinery @ UT Arlington',
      period: 'Sep 2025 – Nov 2025',
      location: 'Arlington, TX',
      description: 'Architected frontend for "Meowricks" campus mapping app. Implemented real-time polling with 10-second updates and engineered custom SVG markers with intelligent clustering.',
      skills: ['React', 'Google Maps API', 'RESTful API', 'Data Visualization']
    }
  ];

  const education = [
    {
      school: 'University of Texas at Arlington',
      degree: 'Bachelor of Science in Computer Science (Honors)',
      year: 'Expected May 2029',
      details: 'GPA: 4.0/4.0',
      current: true
    },
    {
      school: 'Global School of Science',
      degree: 'High School Diploma',
      year: 'Graduated 2025',
      details: 'GPA: 3.83/4.0'
    },
    {
      school: 'United School',
      degree: 'Secondary Education',
      year: 'Graduated 2023',
      details: 'GPA: 3.85/4.0'
    }
  ];

  return (
    <section id="experience" className="py-24 bg-[#050505] text-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Experience Column */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-12 flex items-center gap-3"
            >
              <span className="text-blue-500 font-mono text-xl">01.</span> Experience
            </motion.h2>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative pl-8 border-l border-white/10 hover:border-blue-500/50 transition-colors group"
                >
                  <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 bg-black border border-white/20 rounded-full group-hover:border-blue-500 group-hover:bg-blue-500 transition-colors" />
                  
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{exp.role}</h3>
                  <div className="text-sm font-mono text-gray-500 mb-4">{exp.company} | {exp.period}</div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map(skill => (
                      <span key={skill} className="text-[10px] font-mono px-2 py-1 bg-white/5 rounded text-gray-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Roadmap Column */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-12 flex items-center gap-3"
            >
              <span className="text-blue-500 font-mono text-xl">02.</span> Education
            </motion.h2>

            <div className="space-y-8 relative border-l border-white/10 ml-3 pl-8 md:pl-12 py-2">
               {/* Vertical Line Gradient Overlay for aesthetic */}
               <div className="absolute top-0 bottom-0 left-[-1px] w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-transparent opacity-50" />

               {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="relative"
                  >
                     {/* Timeline Node */}
                     <div className="absolute top-1 left-[-45px] md:left-[-61px] w-6 h-6 rounded-full bg-[#050505] border border-blue-500/50 flex items-center justify-center z-10">
                        <div className={`w-2 h-2 rounded-full ${edu.current ? 'bg-blue-400 animate-pulse' : 'bg-gray-500'}`} />
                     </div>

                     <div className="bg-white/5 border border-white/5 p-6 rounded-xl hover:bg-white/10 transition-colors group">
                        <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2 gap-2">
                           <h3 className="font-bold text-lg text-white group-hover:text-blue-400 transition-colors">{edu.school}</h3>
                           {edu.current && (
                              <span className="self-start sm:self-auto text-[10px] uppercase font-bold bg-blue-500/20 text-blue-400 px-2 py-1 rounded tracking-wider">Present</span>
                           )}
                        </div>
                        <div className="text-sm text-gray-400 mb-2">{edu.degree}</div>
                        <div className="flex items-center gap-4 text-xs font-mono text-gray-500">
                           <span>{edu.year}</span>
                           {edu.details && (
                              <>
                                 <span className="w-1 h-1 rounded-full bg-gray-600" />
                                 <span className="text-gray-300">{edu.details}</span>
                              </>
                           )}
                        </div>
                     </div>
                  </motion.div>
               ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;

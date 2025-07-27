import React, { useState, useEffect } from 'react';

const Skills = () => {
  const [visible, setVisible] = useState(false);
  
  // Use this to simulate the "on mount" animation
  useEffect(() => {
    setVisible(true);
  }, []);

  const skills = [
    { name: 'JavaScript', percentage: 85, color: 'from-yellow-400 to-yellow-600' },
    { name: 'React', percentage: 90, color: 'from-blue-400 to-blue-600' },
    { name: 'Django', percentage: 90, color: 'from-green-400 to-green-600' },
    { name: 'HTML/CSS', percentage: 95, color: 'from-red-400 to-red-600' },
    { name: 'Tailwind CSS', percentage: 85, color: 'from-teal-400 to-teal-600' },
    { name: 'Python', percentage: 95, color: 'from-green-500 to-green-700' },
  ];

  const technicalSkills = [
    'JavaScript','Django', 'React', 'Next.js', 'Python', 'SQL', 
    'Bootstrap', 'Tailwind CSS', 'SASS', 
    'Git', 'GitHub', 'Figma'
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto max-w-[1250px] px-4">
        <div
          className={`text-center mb-16 transition-all duration-500 transform ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">My Skills</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div
            className={`transition-all duration-500 transform ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">Technical Skills</h3>
            
            {skills.map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.percentage}%</span>
                </div>
                <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                    style={{ 
                      width: visible ? `${skill.percentage}%` : '0%',
                      transitionDelay: `${300 + (index * 100)}ms` 
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div
            className={`transition-all duration-500 transform ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">Technologies I Work With</h3>
            
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{ 
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'scale(1)' : 'scale(0.8)',
                    transitionDelay: `${100 + (index * 50)}ms`,
                    transitionProperty: 'opacity, transform'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            <div
              className={`mt-12 transition-all duration-500 transform ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '800ms' }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">My Development Approach</h3>
              <p className="text-gray-300 leading-relaxed">
            I’m passionate about building software that blends clean, maintainable code with great user experiences. For me, development begins with truly understanding the problem, then crafting solutions that are scalable, efficient, and future-ready. I enjoy turning ideas into polished, reliable applications while constantly learning and refining my craft to deliver my very best work.


              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
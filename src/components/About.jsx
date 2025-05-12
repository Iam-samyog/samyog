// src/components/About.jsx
import { motion } from 'framer-motion';
import React from 'react';


const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto max-w-[1350px] px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="md:w-1/2 relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl blur opacity-20"></div>
            <div className="relative overflow-hidden rounded-xl border border-gray-700 bg-gray-900 p-1">
              <img
                src="https://media1.tenor.com/m/JwRNTvlcBF4AAAAC/mario-super-mario.gif"
                alt="About Me"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </motion.div>
  {/* // src="" */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">Web Developer & Designer</h3>
            <p className="mb-6 text-gray-300 leading-relaxed">
              Hi there! I'm a passionate web developer and designer with a keen eye for creating 
              beautiful, functional websites. With over X years of experience in the field, 
              I specialize in building modern web applications using the latest technologies.
            </p>
            <p className="mb-6 text-gray-300 leading-relaxed">
              My journey in web development began when I discovered my passion for coding during 
              high school. Since then, I've worked on numerous projects, ranging from small business 
              websites to complex web applications.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <span className="text-blue-500 mr-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </span>
                <span>Name: Samyog Maharjan</span>
              </div>
              <div className="flex items-center">
                <span className="text-blue-500 mr-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </span>
                <span>Email: msamyog37@gmail.com</span>
              </div>
              <div className="flex items-center">
                <span className="text-blue-500 mr-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </span>
                <span>Location: Kathmandu,Nepal</span>
              </div>
              <div className="flex items-center">
                <span className="text-blue-500 mr-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </span>
                <span>Freelance: Available</span>
              </div>
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full font-medium inline-block hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
            >
              Download CV
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
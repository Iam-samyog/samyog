// src/components/Hero.jsx
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';

const Hero = () => {
  const typedRef = useRef(null);
  const typedElementRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Developer', 'Designer', 'Genius'],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
    };

    typedRef.current = new Typed(typedElementRef.current, options);

    return () => {
      if (typedRef.current) {
        typedRef.current.destroy();
      }
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex  items-center justify-center overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 w-full h-full">
        {[...Array(20)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute bg-blue-500 rounded-full opacity-20"
            style={{
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 3 + 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative mb-4 inline-block"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full blur opacity-30"></div>
            <img
              src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGJ4d3pvMTl6cnUzZG10YjAwY2MycHphbXg5cHJ2ZWRkeHV2ejB6NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/t9l9pJgTZw2lnXUuIS/giphy.gif"
              alt="Profile"
              className="w-50 h-50 rounded-full border-4 border-blue-500 relative"
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl font-light mb-2"
          >
            Hello, I'm
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl py-3 font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500"
          >
            Samyog Maharjan
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-2xl md:text-3xl font-light mb-8"
          >
            I'm a <span ref={typedElementRef} className="font-medium text-blue-400"></span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
            >
              Contact Me
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-transparent border border-blue-500 rounded-full font-medium hover:bg-blue-500/10 transition-all duration-300"
            >
              View My Work
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12"
          >
            <motion.a
              href="#about"
              animate={{ 
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
              className="inline-block"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
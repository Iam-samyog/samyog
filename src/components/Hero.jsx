// src/components/Hero.jsx
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';

const Hero = () => {
  const typedRef = useRef(null);
  const typedElementRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Software Engineer', 'Tech Enthusiast', 'Problem-Solver'],
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
              x: [0, Math.random() * 200 - 50],
              y: [0, Math.random() * 200 - 50],
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
  <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen space-y-8 lg:space-y-0 lg:space-x-4 xl:space-x-8">
    {/* Introduction Text Section */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full lg:w-1/2 text-center lg:text-left 
        lg:pr-0 xl:pr-4 xl:ml-[100px]
        px-4 sm:px-8 md:px-12 
        order-2 lg:order-1"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-lg font-semibold text-white sm:text-xl md:text-3xl  mb-2"
      >
        Hello, I'm
      </motion.h2>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 
          py-3 font-bold mb-4 
          text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500"
      >
        Samyog Maharjan
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-light mb-6 sm:mb-8"
      >
        I'm a <span ref={typedElementRef} className="font-medium text-blue-400"></span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start"
      >
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base 
            bg-gradient-to-r from-purple-500 to-blue-500 
            rounded-full font-medium 
            hover:shadow-lg hover:shadow-blue-500/30 
            transition-all duration-300"
        >
          Contact Me
        </motion.a>
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base 
            bg-transparent border border-blue-500 
            rounded-full font-medium 
            hover:bg-blue-500/10 
            transition-all duration-300"
        >
          View My Work
        </motion.a>
      </motion.div>
    </motion.div>

    {/* Profile Image Section */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2 
        px-4 sm:px-8 md:px-12 lg:pl-0 lg:pr-4"
    >
      <div className="relative inline-block">
        <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full blur opacity-30"></div>
        <img
          src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXRhZXNqNno2cmFzOXJwbzJqZmg2Zmh4cXJuMWVwbTE5Y2JubTY2ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8ArzbGWLVNQzRv1aAL/giphy.gif"
          alt="Profile"
          className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 
            lg:w-80 lg:h-80 xl:w-116 xl:h-116
            rounded-full border-6 sm:border-8 border-black
            relative z-10"
        />
        {/*https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXRhZXNqNno2cmFzOXJwbzJqZmg2Zmh4cXJuMWVwbTE5Y2JubTY2ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8ArzbGWLVNQzRv1aAL/giphy.gif */}
      </div>
    </motion.div>
  </div>

  {/* Downward Arrow - Centered Below Both Sections */}
  <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2">
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
        className="w-6 h-6 sm:w-8 sm:h-8"
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
  </div>
</div>
    </section>

  );
};

export default Hero;

// src/App.jsx
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion } from 'framer-motion';
import { Analytics } from "@vercel/analytics/next"

function App() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <motion.div
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        >
          Loading...
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900  text-white overflow-hidden">
      

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Analytics />

      <Contact />
      <Footer />
      </div>
   
  );
}

export default App;
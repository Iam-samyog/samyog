import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'Home', href: '#home' },
    { title: 'About', href: '#about' },
    { title: 'Skills', href: '#skills' },
    { title: 'Projects', href: '#projects' },
    { title: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav 
      className={`fixed left-0 right-0 z-50 flex justify-center transition-all duration-300 ${
        scrolled ? 'top-4' : 'top-0 py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div 
        className={`${
          scrolled 
            ? 'glass-nav bg-black/50 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]' 
            : 'w-full container mx-auto px-6 bg-transparent'
        } flex justify-between items-center transition-all duration-500 max-w-[1200px] gap-8`}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl font-bold text-white font-mono tracking-tighter cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Samyog
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-1">
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              className="relative px-4 py-2 text-gray-300 text-sm font-medium transition-colors duration-300 group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                {link.title}
              </span>
              <span className="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out origin-center" />
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button - Styled Cleaner */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white focus:outline-none p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          className="absolute top-20 left-4 right-4 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl md:hidden"
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col py-4">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className="py-3 px-6 text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300 flex items-center space-x-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <span>{link.title}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
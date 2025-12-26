// src/components/Footer.jsx
import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/iam-samyog',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/samyog-maharjan-406588370/',
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/Iam.samyog',
    },
  ];

  return (
    <footer className="bg-black py-12 border-t border-white/5">
     <div className="container mx-auto px-4 text-center">
        
        {/* Spotlight Text Container */}
        <div 
          className="mb-8 relative group flex justify-center py-4"
          onMouseMove={handleMouseMove}
        >
           {/* Base Layer (Dim) */}
           <h2 className="text-[12vw] leading-none font-bold text-white/5 select-none pointer-events-none">
             SAMYOG
           </h2>
           
           {/* Glow Layer (Revealed by Mask) */}
           <motion.div
             className="absolute inset-0 pointer-events-none flex justify-center py-4"
             style={{
               maskImage: useMotionTemplate`radial-gradient(
                 300px circle at ${mouseX}px ${mouseY}px,
                 black 0%,
                 transparent 100%
               )`,
               WebkitMaskImage: useMotionTemplate`radial-gradient(
                 300px circle at ${mouseX}px ${mouseY}px,
                 black 0%,
                 transparent 100%
               )`,
             }}
           >
             <h2 className="text-[12vw] leading-none font-bold text-white select-none">
               SAMYOG
             </h2>
           </motion.div>
        </div>
        
        <div className="flex justify-center gap-8 mb-8 text-sm uppercase tracking-widest text-gray-400">
           {socialLinks.map((link) => (
             <a 
               key={link.name} 
               href={link.url}
               target="_blank"
               rel="noopener noreferrer"
               className="hover:text-white transition-colors border-b border-transparent hover:border-white pb-1"
             >
               {link.name}
             </a>
           ))}
        </div>

        <p className="text-gray-600 text-xs">
          &copy; {currentYear} Samyog Maharjan. All rights reserved.
        </p>
     </div>
    </footer>
  );
};

export default Footer;
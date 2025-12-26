import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Terminal = () => {
  const [lines, setLines] = useState([
    { text: "initialising_system...", type: "cmd" },
    { text: "loading_modules... [OK]", type: "cmd" },
  ]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  // The focused "Ideology" script to type out
  const script = [
    { cmd: "whoami", output: "Samyog Maharjan" },
    { cmd: "cat ideology.txt", output: "I engineer scalable systems with a focus on clean architecture and performance." },
    { cmd: "cat experience.txt", output: ">> Student Tech Assistant [Nov 2025 - Present]\n>> ACM Create Member [Sep 2025 - Nov 2025]" },
    { cmd: "cat education.txt", output: "University of Texas at Arlington\nBS Computer Science (Honors) | GPA: 4.0 | Exp. May 2029" },
  ];

  // Blinking cursor effect
  useEffect(() => {
    const timer = setInterval(() => setShowCursor(prev => !prev), 530);
    return () => clearInterval(timer);
  }, []);

  // Typing logic
  useEffect(() => {
    let timeout;
    
    const processScript = async () => {
       if (currentLineIndex >= script.length) return;

       const currentStep = script[currentLineIndex];
       
       // 1. Type the command
       if (charIndex < currentStep.cmd.length) {
          timeout = setTimeout(() => {
             setCharIndex(prev => prev + 1);
          }, 50 + Math.random() * 50); // Random typing speed
       } 
       // 2. Once command typed, show output after delay
       else if (charIndex === currentStep.cmd.length) {
           timeout = setTimeout(() => {
               // Add the completed command and its output to history
               setLines(prev => [
                   ...prev, 
                   { text: `> ${currentStep.cmd}`, type: 'input' },
                   { text: currentStep.output, type: 'output' }
               ]);
               // Reset for next step
               setCharIndex(0);
               setCurrentLineIndex(prev => prev + 1);
           }, 400); // Delay before execution
       }
    };

    processScript();
    return () => clearTimeout(timeout);
  }, [charIndex, currentLineIndex, script]);

  // Determine what to display in the "active" typing line
  const getCurrentTypingLine = () => {
      if (currentLineIndex >= script.length) return ""; // Finished
      return script[currentLineIndex].cmd.substring(0, charIndex);
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-[#0c0c0c] rounded-xl overflow-hidden border border-white/10 shadow-2xl font-mono text-sm md:text-base">
      {/* Terminal Title Bar */}
      <div className="bg-[#1a1a1a] px-4 py-2 flex items-center justify-between border-b border-white/5">
         <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
         </div>
         <div className="text-xs text-gray-500 font-medium">samyog@portfolio: ~</div>
         <div className="w-10" /> {/* Spacer for centering */}
      </div>

      {/* Terminal Body */}
      <div className="p-6 h-[400px] text-gray-300 overflow-y-auto font-mono leading-relaxed relative">
         {/* History */}
         {lines.map((line, i) => (
            <div key={i} className={`mb-2 ${line.type === 'output' ? 'text-gray-400 pl-4 border-l-2 border-blue-500/30' : line.type === 'input' ? 'text-white font-bold' : 'text-gray-600 italic'}`}>
               {line.text}
            </div>
         ))}

         {/* Active Line */}
         {currentLineIndex < script.length && (
             <div className="text-white font-bold mt-2">
                <span className="text-blue-500 mr-2">➜</span>
                <span className="text-pink-500 mr-2">~</span>
                {getCurrentTypingLine()}
                <span className={`inline-block w-2.5 h-4 bg-white ml-1 align-middle ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
             </div>
         )}
         
         {/* Final Cursor if done */}
         {currentLineIndex >= script.length && (
            <div className="text-white font-bold mt-2">
                <span className="text-blue-500 mr-2">➜</span>
                <span className="text-pink-500 mr-2">~</span>
                <span className={`inline-block w-2.5 h-4 bg-white ml-1 align-middle ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
             </div>
         )}
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#050505]">
      
      {/* Background Highlights */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-purple-900/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
               <span className="font-mono text-blue-500 text-sm tracking-widest uppercase mb-4 block">
                  // Software Engineer
               </span>
               <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6 leading-[0.9] uppercase">
                  <span className="block text-white">Samyog</span>
                  <span className="block text-gray-500">Maharjan.</span>
               </h1>
               <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-10">
                  Building digital products & systems. I engineer scalable applications with a focus on performance, clean architecture, and intuitive user experiences.
               </p>
               
               <div className="flex flex-wrap gap-6 items-center">
                  <a href="#projects" className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors">
                     View Work
                  </a>
                  <a href="/cv/Dumps.pdf" target="_blank" className="px-8 py-4 text-white border border-white/20 rounded-full hover:bg-white/5 transition-colors font-medium flex items-center gap-2">
                     Download Resume
                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                  </a>
               </div>
            </motion.div>
          </div>

          {/* Right Side - Terminal */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
             <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="w-full"
             >
                <Terminal />
             </motion.div>
          </div>

        </div>
      </div>

      {/* Decorative Technical Elements */}
      <div className="absolute top-1/2 right-[-10%] -translate-y-1/2 w-[600px] h-[600px] opacity-20 pointer-events-none hidden lg:block">
         <motion.div 
           animate={{ rotate: 360 }}
           transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
           className="w-full h-full border border-dashed border-white/20 rounded-full flex items-center justify-center"
         >
            <div className="w-[80%] h-[80%] border border-white/10 rounded-full" />
         </motion.div>
      </div>

    </section>
  );
};

export default Hero;

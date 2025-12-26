import { motion } from 'framer-motion';
import Card from './ui/Card';

const About = () => {
  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-900/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-900/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm md:text-base uppercase tracking-widest text-blue-400 mb-4 font-semibold">
            About Me
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Designing the Future, One Line at a Time.
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bio Card - Large */}
          <motion.div 
             className="md:col-span-2"
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
          >
            <Card className="h-full flex flex-col justify-center">
              <h4 className="text-2xl font-bold text-white mb-4">Who am I?</h4>
              <p className="text-gray-400 leading-relaxed mb-6 text-lg">
                I'm a passionate Full Stack Developer based in Kathmandu, Nepal. I specialize in building high-quality websites and applications that are not only functional but also visually stunning. 
                With a strong foundation in both frontend and backend technologies, I bridge the gap between design and engineering.
              </p>
              <div className="flex gap-4">
                <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-2">
                  <span className="block text-2xl font-bold text-white">3+</span>
                  <span className="text-xs text-gray-400 uppercase tracking-wider">Years Exp</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-2">
                  <span className="block text-2xl font-bold text-white">20+</span>
                  <span className="text-xs text-gray-400 uppercase tracking-wider">Projects</span>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Profile Image Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:row-span-2 h-full"
          >
             <Card className="h-full p-0 overflow-hidden relative group min-h-[400px]">
                <img 
                  src="https://media1.tenor.com/m/JwRNTvlcBF4AAAAC/mario-super-mario.gif" 
                  alt="Creative" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-white font-semibold text-lg">"Code is poetry."</p>
                  <p className="text-gray-400 text-sm mt-1">- My Philosophy</p>
                </div>
             </Card>
          </motion.div>

           {/* Tech Stack / Interests */}
           <motion.div 
             className="md:col-span-2"
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.4 }}
          >
            <Card className="h-full">
              <h4 className="text-xl font-bold text-white mb-6">Technical Focus</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                    Frontend Engineering
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
                    Backend Architecture
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-3" />
                    UI/UX Design
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                    Database Design
                  </li>
                </ul>
                <ul className="space-y-3">
                   <li className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3" />
                    Cloud Computing
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3" />
                    Data Structures & Algorithms
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3" />
                    SWE Tools & DevOps
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3" />
                    AI & ML Engineering
                  </li>
                </ul>
              </div>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
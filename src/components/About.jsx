import { motion } from 'framer-motion';


const About = () => {
  return (
    <section id="about" className="py-12 md:py-20 bg-gray-800">
      <div className="container mx-auto max-w-[1350px] px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            About Me
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="w-full md:w-1/2 relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl blur opacity-20"></div>
            <div className="relative overflow-hidden rounded-xl border border-gray-700 bg-gray-900 p-1">
              <img
                src="https://media1.tenor.com/m/JwRNTvlcBF4AAAAC/mario-super-mario.gif"
                alt="About Me"
                className="w-full h-auto rounded-lg"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
            className="w-full md:w-1/2 mt-8 md:mt-0"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 md:mb-4 text-blue-400">
              Web Developer & Designer
            </h3>
            <p className="mb-4 md:mb-6 text-gray-300 text-sm sm:text-base leading-relaxed">
              I am a passionate full-stack web developer who loves building
              meaningful and user-friendly web applications. Using Python Django
              and React, I enjoy bringing ideas to life—turning simple concepts
              into real, working products that people can use and enjoy.
            </p>
            <p className="mb-4 md:mb-6 text-gray-300 text-sm sm:text-base leading-relaxed">
              What drives me most is the creative process and the constant
              learning that comes with development. I’m excited by the challenge
              of solving problems through code and continuously improving my
              skills to create smarter, cleaner, and more impactful digital
              experiences.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
              <div className="flex items-center text-sm sm:text-base">
                <span className="text-blue-500 mr-2 flex-shrink-0">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span className="break-words">Name: Samyog Maharjan</span>
              </div>
              <div className="flex items-center text-sm sm:text-base">
                <span className="text-blue-500 mr-2 flex-shrink-0">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span className="break-all">Email: msamyog37@gmail.com</span>
              </div>
              <div className="flex items-center text-sm sm:text-base">
                <span className="text-blue-500 mr-2 flex-shrink-0">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span className="break-words">Location: Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center text-sm sm:text-base">
                <span className="text-blue-500 mr-2 flex-shrink-0">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span>Freelance: Available</span>
              </div>
            </div>

            <motion.a
              href="/cv/Samyog-Maharjan-cv (15).pdf"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-sm sm:text-base font-medium inline-block hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
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
import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    if (import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (!import.meta.env.VITE_EMAILJS_SERVICE_ID || 
        !import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 
        !import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
      console.error('EmailJS environment variables are missing');
      setIsSubmitting(false);
      setSubmitStatus('error');
      return;
    }
    
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID, 
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then((result) => {
        setIsSubmitting(false);
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitStatus(null), 5000);
      })
      .catch((error) => {
        setIsSubmitting(false);
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus(null), 5000);
      });
  };

  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        
        <div className="text-center mb-16">
           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
           >
             Let's Work Together
           </motion.h2>
           <p className="text-gray-400 text-lg">Have a project in mind? Send me a message.</p>
        </div>

        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl"
        >
          <form ref={form} onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                  required
                />
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                  required
                />
              </div>
            </div>
            
            <div className="relative">
               <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                  required
                />
            </div>

            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows="4"
                className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors resize-none"
                required
              ></textarea>
            </div>

            <div className="flex justify-between items-center pt-4">
               <div>
                  {submitStatus === 'success' && <span className="text-green-400">Message sent!</span>}
                  {submitStatus === 'error' && <span className="text-red-400">Failed to send.</span>}
               </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </motion.div>

        {/* <div className="mt-16 text-center">
           <a href="mailto:msamyog37@gmail.com" className="text-gray-400 hover:text-white transition-colors text-xl">
             msamyog37@gmail.com
           </a>
        </div> */}

      </div>
    </section>
  );
};

export default Contact;
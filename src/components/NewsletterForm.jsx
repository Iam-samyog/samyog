import { motion } from 'framer-motion';
import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setMessage('Please enter your email address');
      return;
    }

    setIsSubmitting(true);
    setMessage('');

    try {
      // Method 1: Direct redirect to Substack subscribe page with email pre-filled
      const subscribeUrl = `https://samybyte.substack.com/subscribe?utm_source=menu&simple=true&next=https%3A%2F%2Fsamybyte.substack.com%2F&email=${encodeURIComponent(email)}`;
      
      // Open in new tab
      window.open(subscribeUrl, '_blank');
      
      setMessage('Redirected to subscription page!');
      setEmail('');
    } catch (error) {
      setMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className=" bg-gray-900 text-white p-2 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-md w-full"
      >
        <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
        <p className="text-gray-400 mb-4">
          Subscribe to my newsletter to receive updates on my latest projects and tech articles.
        </p>
        
        <div className="flex flex-col sm:flex-row">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            disabled={isSubmitting}
            className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg sm:rounded-l-lg sm:rounded-r-none mb-2 sm:mb-0 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow disabled:opacity-50"
          />
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg sm:rounded-r-lg sm:rounded-l-none hover:bg-blue-600 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </button>
        </div>
        
        {message && (
          <p className={`mt-3 text-sm ${message.includes('wrong') ? 'text-red-400' : 'text-green-400'}`}>
            {message}
          </p>
        )}
      </motion.div>
    </div>
  );
}
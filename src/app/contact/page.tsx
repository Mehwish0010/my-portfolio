"use client";
import React from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <section className='ml-10 mr-10'>
    <div className="relative min-h-screen bg-gray-900 text-white flex items-center justify-center">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800 opacity-80"></div>

      {/* Container */}
      <div className="relative container mx-auto px-6 py-16 z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-bold mb-4 text-teal-700">Contact Me</h1>
          <p className="text-xl max-w-2xl mx-auto">
            {`Feel free to reach out for collaboration or just a friendly chat. I'm always excited to connect!`}
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="max-w-lg mx-auto bg-gray-800 bg-opacity-90 p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <form action="https://formspree.io/f/{your_form_id}" method="POST">
            {/* Name Field */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                className="w-full p-3 bg-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>

            {/* Email Field */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                className="w-full p-3 bg-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>

            {/* Message Field */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                rows={4}
                className="w-full p-3 bg-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-400 to-blue-500 py-3 rounded font-semibold text-white hover:from-green-500 hover:to-blue-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </motion.div>

   
      </div>
    </div>
    </section>
  );
};

export default ContactPage;

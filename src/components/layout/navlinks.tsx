// components/HamburgerMenu.js

"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold text-teal-500">
        MyPortfolio
      </div>

      {/* Hamburger Icon */}
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <span className="block w-8 h-1 bg-white mb-1 transform transition duration-500 ease-in-out" style={{ transform: isOpen ? 'rotate(45deg) translate(4px, 4px)' : 'rotate(0)' }} />
          <span className="block w-8 h-1 bg-white mb-1 transition duration-500 ease-in-out" style={{ opacity: isOpen ? 0 : 1 }} />
          <span className="block w-8 h-1 bg-white transform transition duration-500 ease-in-out" style={{ transform: isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'rotate(0)' }} />
        </button>
      </div>

      {/* Links Section */}
      <nav className={`lg:flex lg:items-center lg:space-x-6 ${isOpen ? 'block' : 'hidden'}`}>
        <motion.a href="/" className="block text-lg p-2" whileHover={{ scale: 1.1 }}>
          Home
        </motion.a>
        <motion.a href="/about" className="block text-lg p-2" whileHover={{ scale: 1.1 }}>
          About
        </motion.a>
        <motion.a href="/projects" className="block text-lg p-2" whileHover={{ scale: 1.1 }}>
          Projects
        </motion.a>
        <motion.a href="/contact" className="block text-lg p-2" whileHover={{ scale: 1.1 }}>
          Contact
        </motion.a>
      </nav>
    </header>
  );
};

export default HamburgerMenu;

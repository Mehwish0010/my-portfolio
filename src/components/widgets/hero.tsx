"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Pic from "@/components/assets/images/vecteezy_business-woman-isolated-illustration_24344086.png"; // replace with your image path

const HeroSection = () => {
  return (
    <section className="px-4 md:px-10 lg:px-10">
      <motion.div
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-800 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Background Elements */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url(/your-background.jpg)" }} // replace with your background image
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        ></motion.div>

        {/* Main Content */}
        <div className="relative z-10 text-center">
          {/* Picture Animation */}
          <motion.div
            className="mx-auto mb-8 w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-teal-700 shadow-lg"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          >
            <Image src={Pic} alt="Profile Picture" width={160} height={160} objectFit="cover" />
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-white"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
          >
            Welcome to my Portfolio
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-gray-300 mb-6 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.9, ease: "easeOut" }}
          >
            Where Creativity Meets Code.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
          >
            <a
              href="#contact"
              className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-teal-700 to-blue-500 rounded-lg text-white font-semibold hover:from-green-500 hover:to-blue-600 transition duration-300"
            >
              About me
            </a>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-10 right-10 bg-teal-700 w-6 h-6 sm:w-8 sm:h-8 rounded-full"
          animate={{ y: [0, -10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
            delay: 0.2,
          }}
        ></motion.div>
        <motion.div
          className="absolute bottom-20 left-10 bg-blue-500 w-5 h-5 sm:w-6 sm:h-6 rounded-full"
          animate={{ y: [0, -15, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2.5,
            ease: "easeInOut",
            delay: 0.5,
          }}
        ></motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;



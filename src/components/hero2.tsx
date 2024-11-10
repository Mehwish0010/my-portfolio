"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Pic from "@/components/assets/images/vecteezy_business-woman-isolated-illustration_24344086.png";
import TypeAnimation from './widgets/animations';

const Hero2 = () => {
  return (
    <section className="bg-black px-10  sm:px-10 ml-10 mr-10 text-white min-h-screen flex items-center justify-center">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-10 space-y-10 lg:space-y-0">
        
        {/* Intro Div (Left Side) */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center lg:text-left max-w-lg"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
           {` Hello, I'm `}<br/>
            <span className='text-teal-700 text-5xl sm:text-6xl'>Mehwish</span>
            <span className='text-5xl sm:text-6xl text-white'> Fatima</span>
          </h1>
          <p className="text-sm sm:text-base">
            <TypeAnimation text="
              I am a passionate and innovative developer, dedicated to building high-quality, user-centric applications.
              With expertise in Next.js and animation libraries, I aim to create memorable digital experiences."
            />
          </p>
          <motion.button
            className="mt-4 border-teal-700 bg-teal-700 px-4 sm:px-5 py-2 sm:py-3 rounded-full"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Picture Div (Right Side) */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center items-center"
        >
          <Image
            src={Pic}
            alt="Profile pic"
            className="w-48 sm:w-64 md:w-80 lg:w-full rounded-lg shadow-4xl"
            height={500}
            width={400}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero2;

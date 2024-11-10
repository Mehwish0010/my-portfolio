"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Pic from "@/components/assets/images/chatgptgirl.webp";

const AboutPage = () => {
  // Skills data with percentage values
  const skills = [
    { name: 'HTML', percentage: 90 },
    { name: 'CSS', percentage: 85 },
    { name: 'JavaScript', percentage: 80 },
    { name: 'React', percentage: 75 },
    { name: 'Next.js', percentage: 80 },
    { name: 'Python', percentage: 85 },
  ];

  return (
    <section className="min-h-screen bg-gray-900 ml-10 mr-10 text-white flex flex-col items-center px-6 py-12">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-teal-500">About Me</h1>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-4xl w-full">
        {/* Left Section: Intro */}
        <motion.div
          className="flex-1 text-left lg:mr-6"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-semibold mb-4">{`Hello, I'm`}
            <br/><span className='text-teal-700'>Mehwish</span>Fatima </h2>
          <p className="text-lg leading-relaxed mb-6">
            I’m a dedicated and passionate developer with a love for creating dynamic, user-friendly applications. With
            expertise in modern web technologies, I enjoy turning ideas into engaging digital experiences.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            My journey in the tech industry has equipped me with strong skills in frontend and backend development, and I
            am always excited to learn new tools and frameworks to enhance my capabilities.
          </p>
        </motion.div>

        {/* Right Section: Image */}
        <motion.div
          className="flex-1 lg:ml-6 flex justify-center items-center"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image src={Pic} alt="My Profile Picture" className="w-80 h-auto rounded-lg shadow-2xl" />
        </motion.div>
      </div>

      {/* Skills Section */}
      <div className="w-full max-w-4xl mt-10">
        <h2 className="text-3xl font-semibold mb-6 text-teal-500 text-center">My Skills</h2>
        <div className="flex flex-col space-y-4">
          {skills.map((skill, index) => (
            <div key={index} className="relative bg-gray-700 rounded-lg overflow-hidden w-full h-10">
              <motion.div
                className="absolute top-0 left-0 h-full bg-teal-500"
                style={{ width: `${skill.percentage}%` }}
                initial={{ width: 0 }}
                animate={{ width: `${skill.percentage}%` }}
                transition={{ duration: 1.5, delay: 0.2 * index }}
              ></motion.div>
              <div className="absolute top-0 left-4 h-full flex items-center font-semibold">{skill.name}</div>
              <div className="absolute top-0 right-4 h-full flex items-center font-semibold">{skill.percentage}%</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPage;


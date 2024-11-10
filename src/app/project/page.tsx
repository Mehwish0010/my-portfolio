"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Pic1 from "@/components/assets/images/resume.jpg";
import Pic2 from "@/components/assets/images/shopping.png"; 
import Pic3 from "@/components/assets/images/edu.jpeg";
import Pic4 from "@/components/assets/images/card.png";

const ProjectPage = () => {
  const projects = [
    {
      id: 1,
      title: 'Interactive Static Resume',
      description: 'A static resume made with HTML, CSS, and TypeScript.',
      image: <Image src={Pic1} alt="Interactive Static Resume" width={400} height={250} className="w-full h-48 object-cover rounded-lg" />,
      link: 'http://static-interactive-resume-builder-chi.vercel.app',
    },
    {
      id: 2,
      title: 'E-commerce Website',
      description: 'A Clothing Store Wesite.',
      image: <Image src={Pic2} alt="Project Two" width={400} height={250} className="w-full h-48 object-cover rounded-lg" />,
      link: 'http://nextjs-assignment-6xmj.vercel.app',
    },
    {
      id: 3,
      title: 'Educational Website',
      description: 'Our new course launch website.',
      image: <Image src={Pic3} alt="Project Three" width={400} height={250} className="w-full h-48 object-cover rounded-lg" />,
      link: 'https://github.com/your-project-link',
    },
    {
      id: 4,
      title: 'Dynamic Student-Card Generator',
      description: 'Created dynamic student-card by python and generative AI.',
      image: <Image src={Pic4} alt="Project Four" width={400} height={250} className="w-full h-48 object-cover rounded-lg" />,
      link: 'https://github.com/Mehwish0010/ID_Card-by-Colab-and-Python..git',
    },
  ];

  return (
    <section className='ml-10 mr-10'>
      <div className="container mx-auto px-4 py-12 bg-black text-white">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl text-teal-500 font-bold mb-4">My Projects</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Explore some of the exciting projects I’ve worked on, each reflecting my skills and creativity.
          </p>
        </motion.div>

        {/* Project Cards Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 * project.id }}
            >
              <div className="mb-4">
                {project.image}
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-teal-300">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="text-teal-300 hover:text-teal-500 hover:underline font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;

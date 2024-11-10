"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Reviews = [
  {
    id: 1,
    name: 'Uzair Sheikh',
    title: 'Excellent Developer',
    content: 'The work was delivered on time and exceeded my expectations. Highly recommended!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Syed Mansoor Ali',
    title: 'Professional and Reliable',
    content: 'Very professional approach and great attention to detail. Will definitely work together again!',
    rating: 4,
  },
  {
    id: 3,
    name: 'Abdul Basit',
    title: 'Top-notch Service',
    content: 'Fantastic work! Always available and very knowledgeable. A pleasure to work with.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Hramain Fatima',
    title: 'Creative and Skilled',
    content: 'Great creativity and skill in delivering the project. The end result was outstanding!',
    rating: 5,
  },
];

const ReviewsPage = () => {
  return (
    <section className='mr-10 ml-10'>
    <div className="container mx-auto px-20 py-12 bg-gray-900 text-white">
      {/* Header Section */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold mb-4 text-teal-700">Client Reviews</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Read what my clients have to say about my work.
        </p>
      </motion.div>

      {/* Review Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {Reviews.map((review) => (
          <motion.div
            key={review.id}
            className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 * review.id }}
          >
            <h3 className="text-2xl font-semibold mb-2">{review.name}</h3>
            <p className="text-gray-400 text-sm mb-1">{review.title}</p>
            <p className="text-gray-300 mb-4">{review.content}</p>
            <div className="flex items-center">
              <p className="font-semibold text-yellow-400">
                {'★'.repeat(review.rating)}
              </p>
              <p className="ml-2 text-gray-500">{5 - review.rating > 0 && '☆'.repeat(5 - review.rating)}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default ReviewsPage;

'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';

export default function Hero() {
  const solutions = [
    'Custom Website Design & Development',
    'Website Maintenance & Support',
    'SEO & Performance Optimization',
    'UI/UX Design',
  ];

  return (
    <section
      id="hero"
      aria-label="Hero Section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0f172a] via-[#0b1220] to-[#0f172a] text-white"
    >
      {/* Background Decorative Blobs */}
      <motion.div
        className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl top-0 left-0"
        animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl bottom-0 right-0"
        animate={{ y: [0, -40, 0], x: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Logo */}
      

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            We Build
          </span>
        </motion.h1>

        {/* Typing Animation */}
        <div className="text-2xl md:text-5xl font-bold mb-8 h-16 flex items-center justify-center">
          <TypeAnimation
            sequence={solutions.flatMap((text) => [text, 1500])}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="bg-white bg-clip-text text-transparent"
          />
        </div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300 mb-10"
        >
          We create modern, user-friendly digital experiences that connect with your
          audience, build trust, and convert visitors into loyal customers.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="#contact"
              className="inline-block px-8 py-3 rounded-full text-lg font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
            >
              Get Started
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="#projects"
              className="inline-block px-8 py-3 rounded-full text-lg font-semibold border-2 border-cyan-400 hover:bg-cyan-400/10 transition-all"
            >
              View Projects
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
        >
          
        </motion.div>
      </div>
    </section>
  );
}

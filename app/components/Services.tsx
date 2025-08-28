'use client';

import { motion } from 'framer-motion';
import { FaGlobe, FaLaptopCode, FaBolt, FaPencilRuler } from 'react-icons/fa';


export default function Services() {
  const services = [
    {
      icon: FaGlobe,
      title: 'Custom Web Development',
      description: 'Scalable and high-performance websites tailored to your business needs.',
    },
    {
      icon: FaLaptopCode,
      title: 'Creative Web Design',
      description: 'Visually stunning and user-friendly web designs for an exceptional experience.',
    },
   {
  icon: FaPencilRuler,
  title: 'UI / UX Design',
  description: 'Crafting intuitive, engaging, and user-friendly designs with wireframes, prototypes, and polished interfaces.',
},

    {
      icon: FaBolt,
      title: 'Performance Optimization',
      description: 'Faster load times and better SEO for an optimized web presence.',
    },
  ];

  return (
    <section
      id="services"
      className="py-20 relative bg-gradient-to-b from-[#0f172a] via-[#0b1220] to-[#0f172a] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-14 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-lg">
            Our Services
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            We provide top-tier web solutions to enhance your online presence and drive business growth.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative group rounded-2xl overflow-hidden p-[1px] bg-gradient-to-r from-cyan-400/30 via-blue-600/30 to-purple-500/30 hover:from-cyan-400/60 hover:to-purple-500/60 transition-all duration-500"
            >
              <div className="flex flex-col items-center justify-center text-center h-full p-8 rounded-2xl bg-[#1a1f2b]/80 backdrop-blur-xl border border-white/10 transition group-hover:scale-[1.02] duration-500">
                {/* Icon */}
                <div className="p-4 mb-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30 group-hover:rotate-6 transition-transform duration-500">
                  <service.icon className="w-10 h-10 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Neon Blobs */}
      <div className="absolute -left-24 top-40 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -right-24 bottom-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
    </section>
  );
}

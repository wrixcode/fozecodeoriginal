'use client';

import { motion } from 'framer-motion';
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
} from 'react-icons/si';

export default function Technologies() {
  const technologies = [
    { icon: SiReact, name: 'React' },
    { icon: SiNextdotjs, name: 'Next.js' },
    { icon: SiTailwindcss, name: 'Tailwind' },
    { icon: SiTypescript, name: 'TypeScript' },
    { icon: SiNodedotjs, name: 'Node.js' },
    { icon: SiExpress, name: 'Express' },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-950 via-[#0b1220] to-blue-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Technologies We Master
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We use cutting-edge technologies to build modern, scalable, and performant applications.
          </p>
        </motion.div>

        <div className="relative overflow-hidden w-full">
          <div className="flex tech-slider">
            {[...technologies, ...technologies, ...technologies].map((tech, index) => (
              <motion.div
                key={`${tech.name}-${index}`}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center mx-6 min-w-[120px]"
              >
                <tech.icon className="w-16 h-16 text-cyan-400 mb-4" />
                <span className="text-white">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

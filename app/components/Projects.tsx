'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

type Project = {
  id: number;
  title: string;
  type: string;
  imageUrl: string;
  projectUrl: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Triplora',
    type: 'travel agency website',
    imageUrl: '/pr2.png',
    projectUrl: 'https://triplora.vercel.app/',
  },
  {
    id: 2,
    title: 'Vistara Interiors',
    type: 'interior design website',
    imageUrl: '/pr3.png',
    projectUrl: 'https://vistarainterior.vercel.app/',
  },
  {
    id: 3,
    title: 'chcenterozhukur',
    type: 'clinic website',
    imageUrl: '/pr4.png',
    projectUrl: 'https://chcenterozhukur.vercel.app/',
  },

];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-20 bg-gradient-to-b from-[#0f172a] via-[#0b1220] to-[#0f172a] min-h-screen text-white"
      aria-label="Website Projects"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Recent Website Projects
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            A showcase of websites we have crafted, each tailored to client needs and styles.
          </p>
        </motion.div>

        {/* Smaller image cards with overlay text */}
        <motion.div
          className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {projects.map(({ id, title, type, imageUrl, projectUrl }) => (
            <motion.a
              key={id}
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block cursor-pointer overflow-hidden rounded-3xl shadow-lg shadow-cyan-700/30 hover:shadow-blue-700/40 transition-shadow max-h-[300px]"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {/* Image container with reduced height */}
              <div className="relative w-full  h-[300px] sm:h-[280px] md:h-[250px] rounded-3xl">
                <Image
                  src={imageUrl}
                  alt={title}
                  fill
                  className="object-cover rounded-3xl transition-transform duration-500 hover:scale-105"
                  priority
                />
              </div>

              {/* Top overlay text */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm px-6 py-3 rounded-t-3xl">
                <h3 className="text-xl font-bold text-white">{title}</h3>
                <p className="text-cyan-400 text-sm mt-1">{type}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Decorative glow blobs */}
      <div className="absolute -top-40 -left-20 w-72 h-72 bg-cyan-500/30 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute -bottom-36 -right-20 w-72 h-72 bg-blue-600/30 blur-3xl rounded-full pointer-events-none" />
    </section>
  );
}

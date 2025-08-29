'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  const stats = [
    { icon: FaRocket, label: 'Projects Completed', value: '20+' },
    { icon: FaLightbulb, label: 'Years Experience', value: '2+' },
    { icon: FaUsers, label: 'Happy Clients', value: '98+' },
  ];

  const process = [
    { title: 'Discovery', text: 'We understand your goals, target audience, and brand through research and discussion.' },
    { title: 'Design', text: 'We create clean, user-friendly designs that reflect your brand and engage users.' },
    { title: 'Development', text: 'Our team builds fast, responsive, and functional websites using the latest technologies.' },
    { title: 'Deployment', text: 'We launch your website, handle setup, and provide ongoing support.' },
  ];

  return (
    <section
      id="about"
      className="py-20 relative bg-gradient-to-b from-[#0f172a] via-[#0b1220] to-[#0f172a] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-14 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-lg">
              Why Choose Fozecode?
            </h1>
            <p className="text-gray-400 mb-8 leading-relaxed">
              At Fozecode, we craft websites and digital experiences that help your business grow.  
              Our process is smooth, transparent, and future-ready — we don’t just build websites, we create solutions that strengthen your brand.
            </p>

            {/* Process Steps */}
            <div className="space-y-5 mb-10">
              {process.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-lg bg-[#1a1f2b]/70 backdrop-blur-md border border-white/10 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-400/20 transition"
                >
                  <h2 className="text-lg font-semibold text-cyan-400 mb-1">{step.title}</h2>
                  <p className="text-gray-300 text-sm leading-relaxed">{step.text}</p>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map(({ icon: Icon, label, value }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="p-4 rounded-xl bg-[#1a1f2b]/80 backdrop-blur-md border border-white/10 text-center hover:scale-105 transition-transform"
                >
                  <Icon className="w-8 h-8 mx-auto mb-2 text-cyan-400" />
                  <div className="text-2xl font-bold text-center text-white">{value}</div>
                  <div className="text-sm text-center text-gray-400">{label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Vision + Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex flex-col items-center"
          >
            <div className="rounded-2xl p-[1px] bg-gradient-to-r from-cyan-500/30 via-blue-600/30 to-purple-500/30 mb-8 w-full max-w-md">
              <div className="w-full h-full rounded-2xl bg-[#0d1117]/90 p-10 flex flex-col items-center justify-center text-center backdrop-blur-md border border-white/10">
                <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  Our Vision
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  To be the leading force in creating digital experiences that inspire,
                  innovate, and deliver exceptional value to our clients.
                </p>
              </div>
            </div>

            {/* Interactive Image */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: 'spring', stiffness: 150 }}
              className="rounded-3xl overflow-hidden shadow-lg cursor-pointer"
              style={{ perspective: 800 }}
            >
              <Image
                src="/aboutfoze.png" // Replace with your image path
                alt="Fozecode team or office"
                width={400}
                height={300}
                className="rounded-3xl object-cover"
                draggable={false}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Neon Blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-600/20 blur-3xl rounded-full pointer-events-none" />
    </section>
  );
}

// Remember to import these icons near the top:
import { FaRocket, FaLightbulb, FaUsers } from 'react-icons/fa';

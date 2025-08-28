'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function TermsAndConditions() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#0f172a] via-[#0b1220] to-[#0f172a] text-white py-24 px-6 sm:px-12 lg:px-24 ">
      
      {/* Back to Home Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 max-w-7xl mx-auto"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/40 transition"
          aria-label="Back to Home"
          onClick={(e) => {
            e.preventDefault();
            window.history.back(); // navigate back without routing if possible
          }}
        >
          ← Back Home
        </Link>
      </motion.div>

      {/* Content Container */}
      <motion.article
        className="max-w-4xl mx-auto bg-[#1a1f2b]/70 backdrop-blur-md rounded-3xl p-12 shadow-lg border border-cyan-600/30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-extrabold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          Terms and Conditions
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
          <p className="text-gray-300 leading-relaxed">
            By accessing or using the services provided by Fozecode, you agree to be bound by these Terms and Conditions. If you do not agree to all of these terms, please do not use our website or services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Use of Services</h2>
          <p className="text-gray-300 leading-relaxed">
            You agree to use our services only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else’s use and enjoyment.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
          <p className="text-gray-300 leading-relaxed">
            All content, design, logos, and software used on the site are owned by Fozecode or its licensors and are protected by intellectual property laws.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
          <p className="text-gray-300 leading-relaxed">
            Fozecode shall not be liable for any damages arising from the use or inability to use our services, including but not limited to loss of data or profits.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
          <p className="text-gray-300 leading-relaxed">
            Our Privacy Policy governs the collection and use of personal information. By using our services, you consent to the collection and use of your data as described in the Privacy Policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
          <p className="text-gray-300 leading-relaxed">
            We reserve the right to update or change our Terms and Conditions at any time. Updates will be posted on this page with the effective date.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-300">
            For any questions about these Terms and Conditions, please contact us at:
            <br />
            <a href="mailto:fozecode@gmail.com" className="text-cyan-400 hover:underline">fozecode@gmail.com</a>
            <br />
            Phone: <a href="tel:+918129780845" className="text-cyan-400 hover:underline">+91 8129780845</a>
          </p>
        </section>

        <p className="text-gray-400 text-sm mt-10 text-center">
          Last Updated: July 17, 2024
        </p>
      </motion.article>

      {/* Decorative glow blobs */}
      <div className="absolute -top-32 -left-24 w-80 h-80 bg-cyan-500/20 blur-3xl rounded-full pointer-events-none animate-pulse" />
      <div className="absolute -bottom-36 -right-24 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full pointer-events-none animate-pulse" />
    </section>
  );
}

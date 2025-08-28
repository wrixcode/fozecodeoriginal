'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PrivacyPolicy() {
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
            window.history.back(); // Navigate back without routing if possible
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
          Privacy Policy
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="text-gray-300 leading-relaxed">
            At Fozecode, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          <p className="text-gray-300 mb-4">
            We may collect personal information that you voluntarily provide when contacting us, subscribing to our newsletter, or requesting information about our services.
          </p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Name, email address, phone number, and company details</li>
            <li>Information provided in contact forms or project inquiries</li>
            <li>Usage data through cookies and similar tracking technologies</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <p className="text-gray-300 mb-4">
            We use the information we collect for various purposes, including:
          </p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Providing, maintaining, and improving our services</li>
            <li>Responding to your inquiries and fulfilling your requests</li>
            <li>Sending administrative information and marketing communications</li>
            <li>Analyzing usage patterns to enhance user experience</li>
            <li>Protecting against fraudulent or unauthorized activity</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Cookies and Tracking Technologies</h2>
          <p className="text-gray-300 leading-relaxed">
            We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
          <p className="text-gray-300 leading-relaxed">
            We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage. However, no method of transmission over the Internet or electronic storage is 100% secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Third-Party Disclosure</h2>
          <p className="text-gray-300 leading-relaxed">
            We do not sell, trade, or otherwise transfer your personal information to outside parties unless we provide you with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
          <p className="text-gray-300 mb-4">
            Depending on your location, you may have certain rights regarding your personal information, including:
          </p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>The right to access and receive a copy of your personal data</li>
            <li>The right to rectify or update your personal data</li>
            <li>The right to erase your personal data</li>
            <li>The right to restrict processing of your personal data</li>
            <li>The right to object to processing of your personal data</li>
            <li>The right to data portability</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
          <p className="text-gray-300 leading-relaxed">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the Last Updated date below.
          </p>
          <p className="text-gray-400 mt-6 text-sm">Last Updated: July 17, 2024</p>
        </section>
      </motion.article>

      {/* Decorative glow blobs */}
      <div className="absolute -top-32 -left-24 w-80 h-80 bg-cyan-500/20 blur-3xl rounded-full pointer-events-none animate-pulse" />
      <div className="absolute -bottom-36 -right-24 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full pointer-events-none animate-pulse" />
    </section>
  );
}

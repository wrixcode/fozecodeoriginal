'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import Link from 'next/link';

type FAQItem = {
  question: string;
  answer: string;
};

const faqItems: FAQItem[] = [
  {
    question: 'What services does Fozecode offer?',
    answer:
      'We offer custom web development, creative web design, ecommerce solutions, and performance optimization tailored to your business needs.',
  },
  {
    question: 'How can I get a free consultation?',
    answer:
      'You can schedule a free consultation by contacting us through our contact page or sending us an email at fozecode@gmail.com.',
  },
  {
    question: 'What technologies do you use for development?',
    answer:
      'We specialize in Next.js, React, Tailwind CSS, TypeScript, Node.js, Express, and other modern technologies to build scalable and performant applications.',
  },
  {
    question: 'Can you help with SEO and performance optimization?',
    answer:
      'Absolutely! We focus on performance optimization such as faster load times and SEO best practices to improve your site ranking and user experience.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Project timelines vary depending on scope, but typically range from a few weeks to several months. We provide clear estimates after initial discussions.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="relative py-20 bg-gradient-to-b from-[#0f172a] via-[#0b1220] to-[#0f172a] min-h-screen text-white"
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back to Home Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
            aria-label="Back to Home"
          >
            ← Home
          </Link>
        </motion.div>

        <h1 className="text-5xl font-extrabold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 text-center">
          Frequently Asked Questions
        </h1>

        <div className="space-y-4">
          {faqItems.map(({ question, answer }, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#1a1f2b]/80 backdrop-blur-md rounded-2xl border border-cyan-600/30 overflow-hidden"
              >
                <button
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${index}`}
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center w-full px-6 py-4 cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  <span className="text-lg font-semibold">{question}</span>
                  <span className="ml-2 text-cyan-400">
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      id={`faq-content-${index}`}
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: 'auto' },
                        collapsed: { opacity: 0, height: 0 },
                      }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="px-6 pb-6 text-gray-300 overflow-hidden"
                    >
                      <p>{answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* Background glow blobs */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-cyan-500/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-blue-600/20 blur-3xl rounded-full pointer-events-none" />
    </section>
  );
}

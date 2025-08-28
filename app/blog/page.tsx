'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

type BlogPost = {
  id: number;
  title: string;
  content: string;
  date: string;
  tags: string[];
};

const dummyPosts: BlogPost[] = [
  {
    id: 1,
    title: 'How to Build a Modern Website in 2025',
    content: `A step-by-step guide to creating a sleek, responsive, and performant website using latest technologies like Next.js and Tailwind CSS. 
      
In today's digital landscape, building a modern website means focusing on performance, accessibility, and user experience...`,
    date: 'August 25, 2025',
    tags: ['Web Development', 'Next.js', 'Tailwind CSS'],
  },
  {
    id: 2,
    title: 'Top 5 Performance Optimization Tips',
    content: `Boost your site speed and SEO with these proven optimization best practices including lazy loading, caching, and code splitting.

Improving performance not only enhances user experience but also boosts search engine rankings...`,
    date: 'July 10, 2025',
    tags: ['Performance', 'SEO', 'Optimization'],
  },
  {
    id: 3,
    title: 'Why React and Next.js are a Perfect Match',
    content: `Exploring the strengths of React and Next.js together for building powerful, SEO-friendly, and fast web applications.

React provides component-based architecture, while Next.js adds server-side rendering and static site generation...`,
    date: 'June 15, 2025',
    tags: ['React', 'Next.js', 'Frontend'],
  },
  {
    id: 4,
    title: 'How Tailwind CSS Speeds Up Your UI Workflow',
    content: `Learn how using utility-first CSS frameworks like Tailwind can dramatically improve your development speed.

Tailwind’s utility classes allow you to rapidly prototype and build consistent UIs with less custom CSS...`,
    date: 'May 5, 2025',
    tags: ['CSS', 'Tailwind', 'UI Design'],
  },
  {
    id: 5,
    title: 'Introduction to TypeScript for JavaScript Developers',
    content: `Understand the benefits of adding static typing to your JavaScript projects with an easy introduction to TypeScript.

TypeScript helps catch mistakes early and improves developer experience with intelligent code completion...`,
    date: 'April 20, 2025',
    tags: ['TypeScript', 'JavaScript', 'Programming'],
  },
];

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    setPosts(dummyPosts);
  }, []);

  return (
    <section
      className="relative py-20 bg-gradient-to-b from-[#0f172a] via-[#0b1220] to-[#0f172a] min-h-screen text-white"
      aria-label="Blog page"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back to Home Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
            aria-label="Back to Home"
          >
            ← Home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Our Blog
          </h1>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto leading-relaxed">
            Stay updated with the latest trends, tips, and tutorials in web development, UI/UX,
            and digital business growth.
          </p>
        </motion.div>

        {/* Posts */}
        <div className="space-y-20">
          {posts.map(({ id, title, content, date, tags }) => (
            <motion.article
              key={id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: id * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1a1f2b]/85 backdrop-blur-md rounded-2xl p-8"
            >
              <h2 className="text-3xl font-semibold mb-4 hover:text-cyan-400 transition-colors">
                {title}
              </h2>
              <time className="block text-gray-500 mb-6">{date}</time>
              <div className="prose prose-invert max-w-none text-gray-300 whitespace-pre-line mb-6">
                {content}
              </div>
              <div className="flex flex-wrap gap-2" aria-label="Tags">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-cyan-400/20 text-cyan-400 rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Decorative glow blobs */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-cyan-500/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-blue-600/20 blur-3xl rounded-full pointer-events-none" />
    </section>
  );
}

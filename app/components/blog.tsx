'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  slug: string;
};

const dummyPosts: BlogPost[] = [
  {
    id: 1,
    title: 'How to Build a Modern Website in 2025',
    excerpt: 'A step-by-step guide to creating a sleek, responsive, and performant website using latest technologies.',
    date: 'August 25, 2025',
    tags: ['Web Development', 'Next.js', 'Tailwind'],
    slug: 'how-to-build-a-modern-website-2025',
  },
  {
    id: 2,
    title: 'Top 5 Performance Optimization Tips',
    excerpt: 'Boost your site speed and SEO with these proven optimization best practices.',
    date: 'July 10, 2025',
    tags: ['Performance', 'SEO', 'Optimization'],
    slug: 'top-5-performance-optimization-tips',
  },
  {
    id: 3,
    title: 'Why React and Next.js are a Perfect Match',
    excerpt: 'Exploring the strengths of React and Next.js together for creating dynamic web apps.',
    date: 'June 15, 2025',
    tags: ['React', 'Next.js', 'Frontend'],
    slug: 'react-nextjs-perfect-match',
  },
];

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  // Simulate fetching posts (replace with real API call)
  useEffect(() => {
    // In actual use, fetch your posts from CMS or API here
    setPosts(dummyPosts);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-[#0f172a] via-[#0b1220] to-[#0f172a] min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page header */}
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
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Stay updated with the latest trends, tips, and tutorials in the digital world.
          </p>
        </motion.div>

        {/* Blog posts grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map(({ id, title, excerpt, date, tags, slug }) => (
            <motion.article
              key={id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: id * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1a1f2b]/80 backdrop-blur-md rounded-2xl p-6 flex flex-col hover:shadow-lg hover:shadow-cyan-500/30 transition-shadow cursor-pointer"
            >
              <Link href={`/blog/${slug}`} className="flex flex-col flex-grow">
                <h2 className="text-xl font-semibold mb-2 hover:text-cyan-400 transition-colors">
                  {title}
                </h2>
                <p className="text-gray-400 flex-grow">{excerpt}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gradient-to-r from-cyan-500 to-blue-600  rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <time className="mt-4 block text-gray-500 text-sm">{date}</time>
              </Link>
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

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
  title: 'Why Every Business Needs a Website in 2025',
  content: `In today’s digital world, most people search online before they decide to buy a product or service. If your business doesn’t have a website, you’re missing out on potential customers.

A website gives your business:
- 24/7 visibility – customers can find you anytime.
- More trust – people see your business as professional.
- Wider reach – you’re not limited to just local customers.
- More sales – online visitors can quickly turn into paying customers.

Think of a website as your online shop or office that never closes. It builds trust, attracts customers, and helps your business grow.`,
  date: 'April 5, 2025',
  tags: ['Business Growth', 'Website Benefits', 'Digital Marketing'],
},
{
  id: 2,
  title: 'How a Website Builds Trust With Customers',
  content: `When people hear about your business, the first thing they do is search online. If they don’t find a website, they might think your business is not real or not professional.

A good website shows:
- Who you are and what you do.
- Real customer reviews and testimonials.
- Contact details so customers can easily reach you.
- A professional design that reflects your brand.

Having a website is like having a digital business card — it proves your business is genuine and makes customers feel confident in choosing you.`,
  date: 'April 10, 2025',
  tags: ['Customer Trust', 'Business Website', 'Branding'],
},
{
  id: 3,
  title: 'How a Website Can Help You Get More Customers',
  content: `Imagine if your shop was open only a few hours a day. You would lose sales, right? A website works differently — it’s always open, day and night.

With a website, people can:
- Discover your business through Google searches.
- Learn about your products and services anytime.
- Contact you directly from the site.
- Share your website with others, spreading word-of-mouth online.

The more people can find you online, the more chances you have to turn visitors into real customers.`,
  date: 'April 15, 2025',
  tags: ['Leads', 'Sales', 'Business Growth'],
},
{
  id: 4,
  title: 'Why Mobile-Friendly Websites Matter',
  content: `Most people use their phones to search online. If your website doesn’t work well on mobile, customers may leave and choose a competitor.

A mobile-friendly website means:
- Easy to read on any device.
- Faster loading speed.
- A smoother customer experience.

Simply put, a website that looks great on both computers and phones keeps customers happy and more likely to do business with you.`,
  date: 'April 18, 2025',
  tags: ['Mobile Friendly', 'Customer Experience', 'Business Growth'],
}

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

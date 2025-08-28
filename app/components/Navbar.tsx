'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { 
  X, 
  AlignRight, 
  Info, 
  Code, 
  Briefcase, 
  Phone, 
  BookOpen,   // Blog
  HelpCircle  // FAQ
} from 'lucide-react';

import Image from 'next/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Scroll detection for navbar background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu opens
  useEffect(() => {
    if (mobileMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';

      if (scrollY) {
        const parsedScrollY = parseInt(scrollY.replace('px', '')) * -1;
        window.scrollTo(0, isNaN(parsedScrollY) ? 0 : parsedScrollY);
      }
    }

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const menuItems = [
    { name: 'About', href: '/#about', icon: Info },
    { name: 'Services', href: '/#services', icon: Code },
    { name: 'Projects', href: '/#projects', icon: Briefcase },
    { name: 'Contact', href: '/#contact', icon: Phone },
    {name: 'Blog', href: '/blog', icon: BookOpen},
     {name: 'faq', href: '/faq', icon: HelpCircle},
  ];

  const menuVariants = {
    closed: { x: "100%" },
    open: {
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 30, staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    closed: { x: 50, opacity: 0 },
    open: { x: 0, opacity: 1 },
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.6, transition: { duration: 0.3 } },
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0d1117]/95 shadow-lg backdrop-blur-md border-b border-gray-800' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-14">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" aria-label="Fozecode Home" className="flex items-center gap-2">
            <Image src="/lgofoze.png" width={180} height={180} alt="Fozecodelogo" />
           
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map(({ name, href }) => (
              <Link
                key={name}
                href={href}
                className={`transition-colors text-gray-300 hover:text-cyan-400 ${
                  pathname === href ? 'text-white font-semibold' : ''
                }`}
              >
                {name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open mobile menu"
          >
            <AlignRight size={26} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={fadeInVariants}
              className="fixed inset-0 bg-black z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            className="fixed top-0 right-0  w-[280px] bg-black/30 backdrop-blur-lg text-white h-full shadow-2xl z-50 md:hidden m overflow-y-auto border border-cyan-400/20"
            >
              {/* Header */}
              <div className="p-5 flex justify-between items-center border-b border-gray-800">
                
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white p-1 hover:bg-gray-800 rounded-full transition-colors"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Links */}
              <div className="px-5 py-6 space-y-2">
                {menuItems.map(({ name, href, icon: Icon }) => (
                  <motion.div key={name} variants={itemVariants}>
                    <Link
                      href={href}
                      className="flex items-center gap-3 p-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="p-2 rounded-lg border border-gray-600 group-hover:border-cyan-400 transition-colors">
                        <Icon size={18} />
                      </span>
                      <span className="font-medium">{name}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
             
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

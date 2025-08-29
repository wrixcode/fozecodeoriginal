'use client'
import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const whatsappNumber = '919946972210'; // International format, no +
const prefillText = "Hello! I'm interested in your services.";
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(prefillText)}`;

export default function WhatsAppChatButton() {
  const [show, setShow] = useState(false);

  // Show after short delay for "catch" effect
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.7, y: 150 }}
          animate={{ opacity: 1, scale: 1.1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 600,
            damping: 20,
            duration: 0.8
          }}
          exit={{ opacity: 0, scale: 0.5, y: 100 }}
          whileHover={{ scale: 1.16, rotate: -5, boxShadow: '0 8px 40px #25D36660' }}
          whileTap={{ scale: 0.97, rotate: 2 }}
          className="fixed z-50 bottom-60 right-6 bg-[#25D366] hover:bg-[#1da851] rounded-full shadow-2xl w-12 h-12 flex items-center justify-center transition-colors focus:outline-none"
          style={{
            boxShadow: '0 2px 22px 0 rgba(25, 211, 102, 0.25)'
          }}
          aria-label="Chat with us on WhatsApp"
        >
          <FaWhatsapp className="text-white text-3xl drop-shadow-md" />
          {/* Notification pulse */}
          <span className="absolute -top-2 -right-2 w-2 h-2 bg-red-500 rounded-full animate-ping" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}

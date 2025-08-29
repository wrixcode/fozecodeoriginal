'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const data = new FormData();
    data.append("access_key", "d984a31e-c78c-4009-a732-601b5b6ecc7f");
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("message", formData.message);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: data,
    });

    const result = await response.json();
    setLoading(false);

    if (result.success) {
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-b from-[#0f172a] via-[#0b1220] to-[#0f172a] text-white flex items-center justify-center relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl w-full grid md:grid-cols-2 gap-14"
      >
        {/* Left Side - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="p-8 rounded-2xl bg-[#1a1f2b]/80 backdrop-blur-xl border border-white/10 shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Contact Information
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Get in touch with us for any inquiries, collaborations, or support.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-cyan-400 w-6 h-6" />
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-gray-400">fozecode@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaPhone className="text-cyan-400 w-6 h-6" />
              <div>
                <h3 className="text-lg font-semibold">Phone</h3>
                <p className="text-gray-400">+91 9946972210</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-cyan-400 w-6 h-6" />
              <div>
                <h3 className="text-lg font-semibold">Location</h3>
                <p className="text-gray-400">Malappuram, Kerala</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="p-8 rounded-2xl bg-[#1a1f2b]/80 backdrop-blur-xl border border-white/10 shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Send Us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full bg-transparent border-b border-gray-600 text-white py-3 px-2 outline-none focus:border-cyan-400 transition"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full bg-transparent border-b border-gray-600 text-white py-3 px-2 outline-none focus:border-cyan-400 transition"
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows={5}
                className="w-full bg-transparent border-b border-gray-600 text-white py-3 px-2 outline-none focus:border-cyan-400 transition"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(0,255,255,0.4)" }}
              whileTap={{ scale: 0.95 }}
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 py-3 rounded-lg text-lg font-semibold hover:shadow-lg transition disabled:opacity-50"
            >
              {loading ? "Sending..." : <> Send Message <FaPaperPlane /> </>}
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
      <ToastContainer position="top-right" autoClose={3000} theme="dark" />
    </section>
  );
}

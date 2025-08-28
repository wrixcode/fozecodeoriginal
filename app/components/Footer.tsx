import { FaFacebookF, FaWhatsapp, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#0f172a] via-[#0b1220] to-black text-white py-16 px-6 overflow-hidden">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Branding */}
          <div>
            <div className="text-2xl font-bold flex items-center gap-3">
              {/* <Image src="/logofozer.png" width={32} height={32} alt="Fozecode Logo" /> */}
              <span className="tracking-wide">Fozecode</span>
            </div>
            <p className="mt-4 text-gray-400 leading-relaxed max-w-sm">
              Crafting digital experiences that make an impact with innovation and technology.
            </p>
            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              {[
                {
                  href: "https://www.facebook.com/fozecode",
                  icon: <FaFacebookF size={18} />,
                },
                {
                  href: "https://wa.me/918129780845?text=Hello%20there!",
                  icon: <FaWhatsapp size={18} />,
                },
                {
                  href: "https://www.instagram.com/fozecode.tech?igsh=MWppczkwbnVkeHQzYw==",
                  icon: <FaInstagram size={18} />,
                },
                {
                  href: "https://www.linkedin.com/company/fozecode",
                  icon: <FaLinkedinIn size={18} />,
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800/80 backdrop-blur-lg rounded-full hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Quick Links
            </h4>
            <ul className="space-y-3 text-gray-400">
              {["About", "Services", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Contact
            </h4>
            <p className="text-gray-400 mb-2">
              Email:{" "}
              <a
                href="mailto:fozecode@gmail.com"
                className="hover:text-white hover:underline"
              >
                fozecode@gmail.com
              </a>
            </p>
            <p className="text-gray-400">
              Phone:{" "}
              <a
                href="tel:8129780845"
                className="hover:text-white hover:underline"
              >
                +91 8129780845
              </a>
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Fozecode. All rights reserved.</p>
          <div className="mt-3 flex justify-center space-x-6">
            <Link
              href="/privacy-policy"
              className="hover:text-cyan-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-cyan-400 transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>

      {/* Background Glow Effect */}
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full" />
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-600/20 blur-3xl rounded-full" />
    </footer>
  );
}

import type { Metadata} from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { AOSProvider } from "./components/AOSProvider";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import CustomCursor from "./components/CustomCursor";
import BackToTop from "./components/BackToTop";
import WhatsAppChatButton from "./wpbutton/page";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


export const metadata: Metadata = {
    metadataBase: new URL("https://fozecode.tech"),
    title: "fozecode Development Agency",
    description: "Fozecode specializes in creating modern, high-performance websites using Next.js, Three.js, and Tailwind CSS. Top-rated web development agency in Kerala.",
    icons: {
        icon: '/sser.png',
        shortcut: '/favicon-16x16.png',
        apple: '/apple-touch-icon.png',
    }
}




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Canonical Link */}
        <link rel="canonical" href="https://fozecode.tech" />

        {/* Viewport for Mobile SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Fozecode",
              url: "https://fozecode.tech",
              logo: "https://fozecode.tech/fozexd.svg",
              sameAs: [
                "https://facebook.com/fozecode",
                "https://instagram.com/fozecode",
                "https://linkedin.com/company/fozecode",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9876543210",
                contactType: "customer service",
                areaServed: "IN",
                availableLanguage: ["English", "Malayalam"],
              },
            }),
          }}
        />
      </head>
      <body className={`${poppins.className} antialiased`}>
        <AOSProvider>
          <Navbar />
          {children}
          <Footer />
          <Chatbot />
          <CustomCursor />
          <BackToTop />
          <WhatsAppChatButton/>
        </AOSProvider>
      </body>
    </html>
  );
}

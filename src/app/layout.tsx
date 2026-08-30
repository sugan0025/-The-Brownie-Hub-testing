import type { Metadata } from "next";
import { Fraunces, Work_Sans, IBM_Plex_Mono } from "next/font/google";
import Script from "next/script";
import Navbar from "../components/Navbar";
import CartDrawer from "../components/CartDrawer";
import OrderModal from "../components/OrderModal";
import WorkshopModal from "../components/WorkshopModal";
import ToastContainer from "../components/ToastContainer";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The Brownie Hub | Artisanal Brownies & Baking Workshops in Chennai",
    template: "%s | The Brownie Hub Chennai",
  },
  description:
    "Handcrafted small-batch veg and egg brownies baked fresh daily in Chennai. Build your custom assorted box (4/6/12) and book hands-on offline baking workshops at our kitchen.",
  keywords: [
    "The Brownie Hub",
    "The Brownie Hub Chennai",
    "Best brownies in Chennai",
    "Eggless brownies Chennai",
    "Custom brownie box Chennai",
    "Fudge brownies online order Chennai",
    "Nutella stuffed brownie Chennai",
    "Salted caramel brownie",
    "Baking classes Chennai",
    "Brownie making workshop Chennai",
    "Hands-on baking masterclass Chennai",
    "Corporate gift brownies Chennai",
    "Biscoff brownies Chennai",
    "Red velvet brownie Chennai",
    "Artisanal bakery Chennai",
  ],
  authors: [{ name: "The Brownie Hub" }],
  creator: "The Brownie Hub",
  publisher: "The Brownie Hub",
  metadataBase: new URL("https://thebrowniehub.netlify.app"),
  alternates: {
    canonical: "https://thebrowniehub.netlify.app",
  },
  openGraph: {
    title: "The Brownie Hub | Artisanal Brownies & Baking Masterclasses in Chennai",
    description:
      "Fudge you can eat, and learn to make. Small-batch veg and egg brownies, customizable boxes, and live workshops.",
    url: "https://thebrowniehub.netlify.app",
    siteName: "The Brownie Hub",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Brownie Hub | Artisanal Brownies & Baking Workshops in Chennai",
    description:
      "Small-batch veg & egg brownies baked daily in Chennai. Order assorted boxes or book baking masterclasses.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preload" href="/images/brownies/hero.png" as="image" />
        
        {/* Google Analytics - The Brownie Hub */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GWTWBBBDQ2"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GWTWBBBDQ2');
          `}
        </Script>

        {/* Structured Microdata: Bakery & Course */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Bakery",
                "name": "The Brownie Hub",
                "url": "https://thebrowniehub.netlify.app",
                "telephone": "+917200015490",
                "priceRange": "₹₹",
                "servesCuisine": "Artisanal Brownies, Desserts, Bakery",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Chennai",
                  "addressRegion": "Tamil Nadu",
                  "postalCode": "600001",
                  "addressCountry": "IN",
                },
                "sameAs": [
                  "https://instagram.com/thebrowniehubb",
                  "https://wa.me/917200015490",
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "Course",
                "name": "The Brownie Hub Baking Workshops",
                "description": "Hands-on, small-batch baking masterclasses in Chennai: Brownie Basics, Flavour Lab, and Kids Baking.",
                "provider": {
                  "@type": "Organization",
                  "name": "The Brownie Hub",
                  "sameAs": "https://thebrowniehub.netlify.app",
                },
              },
            ]),
          }}
        />

        {/* ===== PREMIUM ANIMATION LIBS (CDN) ===== */}
        <Script src="https://unpkg.com/gsap@3.15.0/dist/gsap.min.js" strategy="afterInteractive" />
        <Script src="https://unpkg.com/gsap@3.15.0/dist/ScrollTrigger.min.js" strategy="afterInteractive" />
        <Script src="https://unpkg.com/lenis@1.3.26/dist/lenis.min.js" strategy="afterInteractive" />
        <Script src="https://unpkg.com/three@0.168.0/build/three.min.js" strategy="afterInteractive" />
      </head>
      <body className={`${fraunces.variable} ${workSans.variable} ${ibmPlexMono.variable}`}>
        {/* ===== PARTICLES CANVAS ===== */}
        <canvas id="particles-canvas"></canvas>

        {/* ===== NAVBAR ===== */}
        <Navbar />

        {/* ===== CART DRAWER ===== */}
        <CartDrawer />

        {/* ===== CHECKOUT ORDER MODAL ===== */}
        <OrderModal />

        {/* ===== WORKSHOP RESERVATION MODAL ===== */}
        <WorkshopModal />

        {/* ===== PAGE CONTENT ===== */}
        {children}

        {/* ===== TOAST CONTAINER ===== */}
        <ToastContainer />

        {/* ===== FOOTER ===== */}
        <Footer />

        {/* ===== FLOATING WHATSAPP BUTTON ===== */}
        <FloatingWhatsApp />

        {/* ===== MASTER CLIENT ENGINE ===== */}
        <Script src="/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}

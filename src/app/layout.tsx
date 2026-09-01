import type { Metadata } from "next";
import { Fraunces, Work_Sans, IBM_Plex_Mono } from "next/font/google";
import Script from "next/script";
import Navbar from "../components/Navbar";
import CartDrawer from "../components/CartDrawer";
import OrderModal from "../components/OrderModal";
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
    default: "The Brownie Hub | Artisanal Belgian Brownies in Chennai",
    template: "%s | The Brownie Hub Chennai",
  },
  description:
    "Handcrafted small-batch veg and egg brownies baked fresh daily in Chennai. Build your custom assorted gift box (4/6/12) with fast 60–90 min hyper-fresh delivery across Chennai.",
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
  metadataBase: new URL("https://the-brownie-hub.vercel.app"),
  alternates: {
    canonical: "https://the-brownie-hub.vercel.app",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "The Brownie Hub | Artisanal Belgian Brownies & Baking Workshops in Chennai",
    description:
      "Handcrafted small-batch Belgian chocolate brownies, customizable keepsake gift boxes, and offline baking masterclasses in Chennai.",
    url: "https://the-brownie-hub.vercel.app",
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
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
                "url": "https://the-brownie-hub.vercel.app",
                "telephone": "+919500415490",
                "email": "thebrowniehub3@gmail.com",
                "priceRange": "₹₹",
                "servesCuisine": "Artisanal Belgian Brownies, Gourmet Desserts, Bakery",
                "openingHours": "Mo-Su 10:00-22:00",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Chennai",
                  "addressRegion": "Tamil Nadu",
                  "postalCode": "600001",
                  "addressCountry": "IN",
                },
                "sameAs": [
                  "https://instagram.com/thebrowniehubb",
                  "https://wa.me/919500415490",
                ],
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

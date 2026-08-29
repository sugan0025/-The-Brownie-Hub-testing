import type { Metadata } from "next";
import { Playfair_Display, Inter, Dancing_Script } from "next/font/google";
import Script from "next/script";
import Navbar from "../components/Navbar";
import CartDrawer from "../components/CartDrawer";
import OrderModal from "../components/OrderModal";
import ToastContainer from "../components/ToastContainer";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
});

export const metadata: Metadata = {
  title: {
    default: "The Rolling Oven | Homemade Bakery in Sathyamangalam, Erode",
    template: "%s | The Rolling Oven"
  },
  description: "Freshly baked homemade treats, custom birthday cakes, cupcakes, brownies, cookies, donuts, and desserts made with love. Handcrafted daily in Sathyamangalam, Erode, Tamil Nadu.",
  keywords: [
    "The Rolling Oven",
    "The Rolling Oven Bakery",
    "Homemade Bakery Tamil Nadu",
    "Bakery in Sathyamangalam",
    "Best bakery in Erode",
    "Custom cakes Sathyamangalam",
    "Birthday cakes Erode",
    "Best cupcakes Sathyamangalam",
    "Chocolate lava cake Tamil Nadu",
    "Fresh donuts Sathyamangalam",
    "Authentic croissants Erode",
    "Tiramisu dessert Tamil Nadu",
    "Homemade cookies Sathyamangalam",
    "Blueberry muffins Erode",
    "Eggless cakes Sathyamangalam",
    "Online bakery delivery Erode",
    "Fresh dessert shop near me",
    "Bakery shop Gobichettipalayam",
    "Coimbatore dessert catering"
  ],
  authors: [{ name: "The Rolling Oven" }],
  creator: "The Rolling Oven",
  publisher: "The Rolling Oven",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://the-rolling-oven.vercel.app/',
  },
  openGraph: {
    title: 'The Rolling Oven | Homemade Bakery in Sathyamangalam, Erode',
    description: 'Freshly baked homemade treats, custom cakes, cupcakes, and desserts. Handcrafted daily in Sathyamangalam, Erode, Tamil Nadu.',
    url: 'https://the-rolling-oven.vercel.app',
    siteName: 'The Rolling Oven',
    images: [
      {
        url: 'https://the-rolling-oven.vercel.app/images/logo.jpeg',
        width: 800,
        height: 600,
        alt: 'The Rolling Oven Bakery Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Rolling Oven | Homemade Bakery in Sathyamangalam, Erode',
    description: 'Freshly baked homemade treats, custom cakes, cupcakes, and desserts in Tamil Nadu.',
    images: ['https://the-rolling-oven.vercel.app/images/logo.jpeg'],
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
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/lucide/0.263.1/lucide.min.css"
        />
        
        {/* Google Analytics - The Rolling Oven */}
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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Bakery",
              "name": "The Rolling Oven",
              "image": "https://the-rolling-oven.vercel.app/images/logo.jpeg",
              "url": "https://the-rolling-oven.vercel.app",
              "email": "therollingoven26@gmail.com",
              "priceRange": "₹₹",
              "servesCuisine": "Bakery, Desserts, Pastries",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Sathyamangalam",
                "addressRegion": "Tamil Nadu",
                "postalCode": "638401",
                "addressCountry": "IN"
              },
              "areaServed": [
                "Sathyamangalam",
                "Erode",
                "Gobichettipalayam",
                "Coimbatore",
                "Tamil Nadu"
              ],
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                  ],
                  "opens": "09:00",
                  "closes": "20:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Sunday",
                  "opens": "10:00",
                  "closes": "18:00"
                }
              ],
              "sameAs": [
                "https://www.instagram.com/the_rolling_oven_26"
              ]
            })
          }}
        />
      </head>
      <body className={`${playfair.variable} ${inter.variable} ${dancingScript.variable}`}>

        {/* ===== PARTICLES CANVAS ===== */}
        <canvas id="particles-canvas"></canvas>

        {/* ===== NAVBAR ===== */}
        <Navbar />

        {/* ===== CART DRAWER ===== */}
        <CartDrawer />

        {/* ===== CHECKOUT MODAL ===== */}
        <OrderModal />

        {/* ===== PAGE CONTENT ===== */}
        {children}

        {/* ===== TOAST CONTAINER ===== */}
        <ToastContainer />

        {/* ===== FOOTER ===== */}
        <Footer />

        {/* ===== FLOATING WHATSAPP BUTTON ===== */}
        <FloatingWhatsApp />

        <Script src="/main.js" strategy="lazyOnload" type="module" />
      </body>
    </html>
  );
}

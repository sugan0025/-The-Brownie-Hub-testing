import React from 'react';
import HeroSection from '../components/home/HeroSection';
import TrustBarSection from '../components/home/TrustBarSection';
import BentoShowcaseSection from '../components/home/BentoShowcaseSection';
import BoxBuilderSection from '../components/home/BoxBuilderSection';
import MenuSection from '../components/home/MenuSection';
import AboutSection from '../components/home/AboutSection';
import FaqSection from '../components/home/FaqSection';
import ContactSection from '../components/home/ContactSection';

export default function HomePage() {
  return (
    <main>
      {/* 1. Hero — Brownie Tower + Atmospheric Lighting */}
      <HeroSection />

      {/* 2. Trust Bar — 4 Key Luxury Pillars */}
      <TrustBarSection />

      {/* 3. Master Bento Showcase — Bestsellers */}
      <BentoShowcaseSection />

      {/* 4. Custom Box Builder — Interactive Box Simulator */}
      <BoxBuilderSection />

      {/* 5. Complete Menu — Signature Items & Packs */}
      <MenuSection />

      {/* 6. About Us — The Story of 4 MBA Students */}
      <AboutSection />

      {/* 7. FAQ — Dark Luxury Accordion */}
      <FaqSection />

      {/* 8. Contact — Direct Kitchen Connection & WhatsApp Ordering */}
      <ContactSection />
    </main>
  );
}

import React from 'react';
import HeroSection from '../components/home/HeroSection';
import TrustBarSection from '../components/home/TrustBarSection';
import BentoShowcaseSection from '../components/home/BentoShowcaseSection';
import BoxBuilderSection from '../components/home/BoxBuilderSection';
import MenuSection from '../components/home/MenuSection';
import FaqSection from '../components/home/FaqSection';
import ContactSection from '../components/home/ContactSection';

export default function HomePage() {
  return (
    <main>
      {/* 1. Hero — Exact Reference Layout (Brownie Tower + Atmospheric Lighting) */}
      <HeroSection />

      {/* 2. Trust Bar — 4 Key Luxury Pillars */}
      <TrustBarSection />

      {/* 3. Master Bento Showcase — Exact Reference Layout */}
      <BentoShowcaseSection />

      {/* 4. Custom Box Builder — Interactive Magnetic Box Simulator */}
      <BoxBuilderSection />

      {/* 5. Complete Menu — 100% Eggless & Farm Egg Bento & Curated Boxes */}
      <MenuSection />

      {/* 6. FAQ — Dark Luxury Accordion */}
      <FaqSection />

      {/* 7. Contact — Direct Kitchen Connection & WhatsApp Ordering */}
      <ContactSection />
    </main>
  );
}

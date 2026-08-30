import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import MenuSection from '../../components/home/MenuSection';
import TrustBarSection from '../../components/home/TrustBarSection';

export const metadata: Metadata = {
  title: 'Artisanal Brownie Menu | 100% Eggless & Farm Egg | The Brownie Hub Chennai',
  description: 'Explore our handcrafted brownie menu in Chennai. Single-origin Belgian dark chocolate, salted caramel, walnut crackle, Nutella stuffed, and curated gift boxes.',
  openGraph: {
    title: 'The Brownie Hub — Complete Artisanal Menu',
    description: '10 Handcrafted brownie flavors strictly separated into 100% Eggless and Pasture-Raised Egg lines.',
    images: ['/images/brownies/hero.png'],
  },
};

export default function MenuPage() {
  return (
    <main style={{ paddingTop: '105px', minHeight: '100vh' }}>
      <div className="wrap" style={{ paddingBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <Link
            href="/"
            className="menu-back-home-btn magnetic-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 22px',
              borderRadius: 'var(--radius-pill)',
              border: '1px solid rgba(201, 134, 60, 0.45)',
              background: 'rgba(25, 12, 6, 0.85)',
              color: 'var(--cream)',
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontWeight: 600,
              boxShadow: '0 4px 18px rgba(0,0,0,0.5)',
              transition: 'all 0.25s ease',
            }}
          >
            <span style={{ fontSize: '1.2rem', color: 'var(--caramel-bright)' }}>&larr;</span>
            <span>Back to Home</span>
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--cream-muted)' }}>
            <Link href="/" style={{ color: 'var(--cream-muted)', textDecoration: 'none' }}>Home</Link>
            <span style={{ opacity: 0.5 }}>/</span>
            <span style={{ color: 'var(--caramel-bright)', fontWeight: 600 }}>Artisanal Menu</span>
          </div>
        </div>
      </div>
      <MenuSection />
      <TrustBarSection />
    </main>
  );
}

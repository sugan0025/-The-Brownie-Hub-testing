import React from 'react';
import type { Metadata } from 'next';
import FoundersSection from '../../components/home/FoundersSection';
import TrustBarSection from '../../components/home/TrustBarSection';

export const metadata: Metadata = {
  title: 'Our Story & Master Bakers | The Brownie Hub Chennai',
  description: 'Meet the 4 founders and pastry engineers behind Chennai’s premier small-batch brownie bakery. Single-origin Belgian couverture and French butter standards.',
  openGraph: {
    title: 'About Us — The Brownie Hub Chennai',
    description: 'Learn our journey, artisanal standards, and meet our master bakers.',
    images: ['/images/brownies/hero.png'],
  },
};

export default function AboutPage() {
  return (
    <main style={{ paddingTop: '80px' }}>
      <FoundersSection />
      <TrustBarSection />
    </main>
  );
}

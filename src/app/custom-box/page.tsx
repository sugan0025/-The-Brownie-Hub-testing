import React from 'react';
import type { Metadata } from 'next';
import BoxBuilderSection from '../../components/home/BoxBuilderSection';
import TrustBarSection from '../../components/home/TrustBarSection';

export const metadata: Metadata = {
  title: 'Custom Keepsake Brownie Box Atelier',
  description: 'Assemble your custom assorted gift box with 4 fresh artisanal brownie squares. Hand-wrapped with golden satin ribbon and dispatched fresh across Chennai.',
  openGraph: {
    title: 'Craft Your Custom Keepsake Box — The Brownie Hub',
    description: 'Pick and choose your favorite brownie squares for immediate Chennai delivery.',
    images: ['/images/brownies/pack-4-classic.jpg'],
  },
};

export default function CustomBoxPage() {
  return (
    <main style={{ paddingTop: '80px' }}>
      <BoxBuilderSection />
      <TrustBarSection />
    </main>
  );
}

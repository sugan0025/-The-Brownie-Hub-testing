import React from 'react';
import type { Metadata } from 'next';
import BoxBuilderSection from '../../components/home/BoxBuilderSection';
import TrustBarSection from '../../components/home/TrustBarSection';

export const metadata: Metadata = {
  title: 'Custom Magnetic Brownie Box Builder | The Brownie Hub Chennai',
  description: 'Assemble your custom assorted gift box with 4, 6, or 12 brownie squares. Hand-wrapped with golden satin ribbon and dispatched fresh across Chennai.',
  openGraph: {
    title: 'Craft Your Custom Magnetic Box — The Brownie Hub',
    description: 'Pick box size and choose your favorite brownie squares for immediate Chennai delivery.',
    images: ['/images/brownies/luxury-box-mockup.jpg'],
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

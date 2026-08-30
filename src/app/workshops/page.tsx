import React from 'react';
import type { Metadata } from 'next';
import WorkshopSection from '../../components/home/WorkshopSection';
import FaqSection from '../../components/home/FaqSection';
import TrustBarSection from '../../components/home/TrustBarSection';

export const metadata: Metadata = {
  title: 'Hands-On Baking Masterclasses & Workshops | The Brownie Hub Chennai',
  description: 'Learn small-batch fudgy brownie craft, Belgian chocolate tempering, and cookie chemistry in our live Chennai studio. Limited 8 seats per batch.',
  openGraph: {
    title: 'Baking Masterclasses — The Brownie Hub Chennai',
    description: 'Master small-batch brownie baking and chocolate science in hands-on workshops.',
    images: ['/images/brownies/hero.png'],
  },
};

export default function WorkshopsPage() {
  return (
    <main style={{ paddingTop: '80px' }}>
      <WorkshopSection />
      <TrustBarSection />
      <FaqSection />
    </main>
  );
}

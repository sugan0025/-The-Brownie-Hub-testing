import React from 'react';
import type { Metadata } from 'next';
import ContactSection from '../../components/home/ContactSection';
import FaqSection from '../../components/home/FaqSection';
import TrustBarSection from '../../components/home/TrustBarSection';

export const metadata: Metadata = {
  title: 'Contact Us & Studio Location | The Brownie Hub Chennai',
  description: 'Get in touch with The Brownie Hub in Anna Nagar & T. Nagar, Chennai. WhatsApp orders, bulk corporate gifting inquiries, and masterclass bookings.',
  openGraph: {
    title: 'Contact The Brownie Hub — Chennai',
    description: 'Reach our baking studio via WhatsApp, phone, or visit us in Chennai.',
    images: ['/images/brownies/hero.png'],
  },
};

export default function ContactPage() {
  return (
    <main style={{ paddingTop: '80px' }}>
      <ContactSection />
      <TrustBarSection />
      <FaqSection />
    </main>
  );
}

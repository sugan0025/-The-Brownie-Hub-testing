import React from 'react';
import type { Metadata } from 'next';
import ContactSection from '../../components/home/ContactSection';
import FaqSection from '../../components/home/FaqSection';
import TrustBarSection from '../../components/home/TrustBarSection';

export const metadata: Metadata = {
  title: 'Contact Kitchen & Direct WhatsApp Order',
  description: 'Get in touch with The Brownie Hub in Chennai. WhatsApp orders, bulk celebration gifting inquiries, and fresh delivery across Chennai.',
  openGraph: {
    title: 'Contact The Brownie Hub — Chennai',
    description: 'Reach our bakery kitchen via WhatsApp or phone in Chennai.',
    images: ['/images/brownies/pack-4-classic.jpg'],
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

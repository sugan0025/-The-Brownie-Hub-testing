import React from 'react';
import type { Metadata } from 'next';
import BentoShowcaseSection from '../../components/home/BentoShowcaseSection';
import TrustBarSection from '../../components/home/TrustBarSection';

export const metadata: Metadata = {
  title: 'Customer Reviews & Stories | 4.9★ Rated | The Brownie Hub Chennai',
  description: 'Read reviews from over 10,000+ happy brownie lovers across Chennai. Verified reviews for our Belgian chocolate fudge brownies and gift boxes.',
  openGraph: {
    title: 'Customer Reviews — The Brownie Hub',
    description: 'Loved by 10,000+ brownie lovers in Chennai. Rated 4.9/5 stars.',
    images: ['/images/brownies/hero.png'],
  },
};

export default function ReviewsPage() {
  return (
    <main style={{ paddingTop: '80px' }}>
      <section className="menu-bento-section">
        <div className="wrap">
          <div className="sec-head center">
            <span className="section-eyebrow">
              <span className="dash">&mdash;</span> VERIFIED REVIEWS &amp; TESTIMONIALS <span className="dash">&mdash;</span>
            </span>
            <h1 className="section-title">Loved by 10,000+ Dessert Enthusiasts</h1>
            <p className="section-desc">
              From birthday gifts and corporate hampers to weekend cravings and masterclass graduates &mdash; here is what our customers say about our handcrafted brownies.
            </p>
          </div>
        </div>
      </section>
      <BentoShowcaseSection />
      <TrustBarSection />
    </main>
  );
}

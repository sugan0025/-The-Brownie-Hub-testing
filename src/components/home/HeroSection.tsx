'use client';

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Lazy-load Three.js particles to avoid SSR issues
const HeroParticles = dynamic(() => import('./HeroParticles'), {
  ssr: false,
  loading: () => null,
});

export default function HeroSection() {
  return (
    <section className="hero-section" id="hero">
      {/* Three.js Floating Golden Ember Particle System */}
      <Suspense fallback={null}>
        <HeroParticles />
      </Suspense>

      {/* Ambient Dark Espresso Atmosphere */}
      <div className="hero-atmosphere" aria-hidden="true"></div>

      <div className="hero-container hero-layout">
        {/* ─── LEFT: Typography & CTAs ─── */}
        <div className="hero-content" data-reveal>
          {/* Eyebrow Pill Badge */}
          <div className="hero-pill-badge">
            <span className="heart-icon">♡</span>
            <span>HANDCRAFTED WITH LOVE</span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-headline">
            Premium Brownies,<br />
            Made to <span className="gold-serif">Delight</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtext">
            Fudgy, rich &amp; irresistible brownies crafted with the finest ingredients for every chocolate lover.
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta-row">
            <a href="#builder" className="btn-hero-order magnetic-btn" id="hero-order-cta">
              <span>Order Now</span>
              <span className="arrow-icon">&rarr;</span>
            </a>
            <a href="/menu" className="btn-hero-explore magnetic-btn" id="hero-explore-cta">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
              </svg>
              <span>Explore Menu</span>
            </a>
          </div>

          {/* Social Proof Row */}
          <div className="hero-social-proof">
            <div className="rating-stars-badge">
              <span className="star-icon">★</span>
              <span className="star-icon">★</span>
              <span className="star-icon">★</span>
              <span className="star-icon">★</span>
              <span className="star-icon">★</span>
              <span className="rating-score-num">4.9/5</span>
            </div>
            <div className="social-proof-text">
              <span className="social-proof-label">Loved by <strong data-counter="10000" data-suffix="+">10,000+</strong></span>
              <span className="social-proof-sub">Brownie Lovers</span>
            </div>
          </div>
        </div>

        {/* ─── RIGHT: Brownie Visual ─── */}
        <div className="hero-visual" data-reveal>
          {/* Subtle Ambient Back-Glow */}
          <div className="hero-visual-glow" aria-hidden="true"></div>

          {/* Brownie Foreground Container (Animated Molten Chocolate Drip Flow) */}
          <div className="hero-brownie-wrapper">
            <img
              src="/images/brownies/hero-molten-flow.webp"
              alt="The Brownie Hub Handcrafted Fudgy Brownie Stack with Molten Drip"
              className="hero-brownie-img"
              loading="eager"
            />
          </div>

          {/* Floating Glass Badge */}
          <div className="hero-premium-glass-badge glass-card">
            <div className="badge-leaf-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e8b66e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
              </svg>
            </div>
            <div className="badge-text-group">
              <span className="badge-percent">100%</span>
              <span className="badge-label">Premium<br />Ingredients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

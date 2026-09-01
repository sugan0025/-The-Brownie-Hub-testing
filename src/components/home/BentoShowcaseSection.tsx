'use client';

import React from 'react';
import Link from 'next/link';

export default function BentoShowcaseSection() {
  const bestsellers = [
    {
      id: 'signature-classic-brownie',
      name: 'Signature Classic Brownie',
      desc: 'Dense, rich & gooey dark chocolate with crinkle crust',
      price: 69,
      badge: 'Bestseller',
      image: '/images/brownies/classic-fudge.jpg',
      dietary: 'veg',
    },
    {
      id: 'double-chocolate-brownie',
      name: 'Double Chocolate Brownie',
      desc: 'Extra dark fudge loaded with hand-cut couverture chunks',
      price: 99,
      badge: 'Chocoholic Favorite',
      image: '/images/brownies/double-chocolate.jpg',
      dietary: 'veg',
    },
    {
      id: 'pack-4-classic-brownies',
      name: 'Pack of 4 Classic Brownies',
      desc: '4 freshly baked Signature Classics in a luxury keepsake box',
      price: 256,
      badge: 'Value Pack',
      image: '/images/brownies/pack-4-classic.jpg',
      dietary: 'veg',
    },
    {
      id: 'pack-4-double-chocolate-brownies',
      name: 'Pack of 4 Double Chocolate Brownies',
      desc: '4 decadent Double Chocolate Brownies packed with chunks',
      price: 376,
      badge: 'Chocoholic Box',
      image: '/images/brownies/pack-4-double-chocolate.jpg',
      dietary: 'veg',
    },
    /* [UPCOMING / ARCHIVED ITEMS KEPT SAFE IN CODE]
    {
      id: 'walnut-crackle-veg',
      name: 'Walnut Crackle Brownie',
      desc: 'Slow-roasted California walnuts in dark cocoa',
      price: 89,
      badge: 'Nutty Favorite',
      image: '/images/brownies/walnut-crackle.jpg',
      dietary: 'veg',
    },
    {
      id: 'salted-caramel-swirl-veg',
      name: 'Salted Caramel Swirl',
      desc: 'House amber caramel & Maldon fleur de sel',
      price: 109,
      badge: 'Signature',
      image: '/images/brownies/salted-caramel.jpg',
      dietary: 'veg',
    },
    {
      id: 'nutella-stuffed-veg',
      name: 'Nutella Stuffed Brownie',
      desc: 'Warm molten hazelnut chocolate core',
      price: 119,
      badge: 'Decadent',
      image: '/images/brownies/nutella-stuffed.jpg',
      dietary: 'veg',
    },
    {
      id: 'biscoff-crunch-nonveg',
      name: 'Lotus Biscoff Crunch',
      desc: 'Spiced Belgian cookie butter & caramelized crumbs',
      price: 99,
      badge: 'Trending',
      image: '/images/brownies/biscoff-crunch.jpg',
      dietary: 'nonveg',
    },
    */
  ];

  const stats = [
    {
      value: 10000,
      suffix: '+',
      label: 'Happy Brownie Cravings Satisfied',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e8b66e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
    },
    {
      value: 100,
      suffix: '%',
      label: 'Pure Belgian Couverture & Butter',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e8b66e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      value: 4,
      suffix: ' Founders',
      label: 'MBA Dream Turned Online Brownie Shop',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e8b66e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      ),
    },
    {
      value: 4.9,
      suffix: '★',
      label: 'Average Customer Rating Across Chennai',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e8b66e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bento-master-section" id="bestsellers">
      <div className="bento-widescreen-wrap">
        {/* ══════════════ 1. MOST LOVED BROWNIES (FULL WIDTH SPOTLIGHT) ══════════════ */}
        <div className="bento-bestsellers-box glass-card" data-reveal>
          <div className="bento-bestsellers-header">
            <div>
              <span className="bento-eyebrow">
                <span className="dash">&mdash;</span> OUR BEST SELLERS <span className="dash">&mdash;</span>
              </span>
              <h2 className="bento-title">Most Loved Brownies</h2>
            </div>
            <div className="bento-carousel-arrows">
              <button
                className="carousel-nav-btn magnetic-btn"
                id="bestseller-prev"
                aria-label="Previous Bestseller"
                suppressHydrationWarning
              >
                &larr;
              </button>
              <button
                className="carousel-nav-btn magnetic-btn"
                id="bestseller-next"
                aria-label="Next Bestseller"
                suppressHydrationWarning
              >
                &rarr;
              </button>
            </div>
          </div>

          {/* 6 Bestseller Cards Carousel Grid */}
          <div className="bento-bestseller-cards-grid" id="bestsellers-grid">
            {bestsellers.map((item, i) => (
              <div key={item.id} className="bestseller-card glass-card tilt-card" data-reveal data-reveal-delay={i * 80}>
                <Link href={`/product/${item.id}`} className="bestseller-img-container" aria-label={`View ${item.name} details`}>
                  <img src={item.image} alt={item.name} loading="lazy" />
                  {item.badge && <span className="bestseller-badge-gold">{item.badge}</span>}
                  <button
                    className="card-heart-btn"
                    aria-label="Save to favorites"
                    onClick={(e) => e.preventDefault()}
                    suppressHydrationWarning
                  >
                    ♡
                  </button>
                  <div className="brownie-shimmer-overlay" aria-hidden="true"></div>
                </Link>
                <div className="bestseller-card-info">
                  <Link href={`/product/${item.id}`} style={{ textDecoration: 'none' }}>
                    <h4 className="bestseller-product-name">{item.name}</h4>
                  </Link>
                  <p className="bestseller-product-desc">{item.desc}</p>
                  <div className="bestseller-price-row">
                    <span className="bestseller-product-price">₹{item.price}</span>
                    <button
                      className="bestseller-add-circle-btn add-cart-btn"
                      data-name={item.name}
                      data-price={item.price}
                      data-dietary={item.dietary}
                      data-image={item.image}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        if (typeof window !== 'undefined' && (window as any).tbhAddToCart) {
                          (window as any).tbhAddToCart(item.name, item.price, null, false, item.image);
                        }
                      }}
                      title={`Add ${item.name} to Cart`}
                      aria-label={`Add ${item.name}`}
                      suppressHydrationWarning
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════════ 2. LUXURY REVIEWS + STATS STRIP ══════════════ */}
        <div className="bento-split-row">
          {/* Customer Review Card */}
          <div className="bento-review-card glass-card" id="reviews" data-reveal>
            <div className="review-card-top">
              <span className="review-quote-mark">❝</span>
              <div className="review-gold-stars">★★★★★</div>
            </div>
            <p className="review-quote-text">
              &ldquo;The brownies are out of this world! Super rich, fudgy, and made with authentic Belgian couverture. The custom magnetic box arrived warm in under an hour in Chennai!&rdquo;
            </p>
            <div className="review-author-row">
              <div className="review-avatar-circle">
                <span>PS</span>
              </div>
              <div className="review-author-meta">
                <strong className="review-author-name">Priya S.</strong>
                <span className="review-author-tag">
                  Verified Chennai Foodie <span className="gold-tick">✓</span>
                </span>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="bento-stats-strip glass-card" id="stats-bar" data-reveal>
            {stats.map((st, i) => (
              <div key={i} className="bento-stat-unit">
                <div className="bento-stat-icon-wrap">{st.icon}</div>
                <span
                  className="bento-stat-num"
                  data-counter={st.value}
                  data-suffix={st.suffix}
                  data-decimals={st.value % 1 !== 0 ? 1 : 0}
                >
                  {st.value.toLocaleString('en-IN')}{st.suffix}
                </span>
                <span className="bento-stat-text">{st.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

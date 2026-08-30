'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { INDIVIDUAL_BROWNIES, CURATED_BOXES } from '../../lib/products';

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState<'all' | 'veg' | 'nonveg' | 'boxes'>('all');

  const filteredBrownies = INDIVIDUAL_BROWNIES.filter((b) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'veg') return b.dietary === 'veg';
    if (activeTab === 'nonveg') return b.dietary === 'nonveg';
    return false;
  });

  return (
    <section className="menu-bento-section" id="menu">
      <div className="wrap">
        {/* Section Header */}
        <div className="sec-head center" data-reveal>
          <span className="section-eyebrow">
            <span className="dash">&mdash;</span> ARTISANAL SMALL-BATCH CREATIONS <span className="dash">&mdash;</span>
          </span>
          <h2 className="section-title">The Complete Brownie Catalog</h2>
          <p className="section-desc">
            Engineered with single-origin Belgian couverture and churned butter. Strictly marked the way Indian food safety standards require &mdash; glowing green dot for 100% Eggless and copper dot for Farm Fresh Eggs.
          </p>

          {/* Magic UI Dynamic Filter Tabs */}
          <div className="menu-filter-pill-tabs" data-reveal>
            <button
              className={`filter-pill-btn magnetic-btn ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              ✨ All Varieties (10)
            </button>
            <button
              className={`filter-pill-btn magnetic-btn ${activeTab === 'veg' ? 'active' : ''}`}
              onClick={() => setActiveTab('veg')}
            >
              <span className="dietary-dot veg"></span> 100% Eggless Line (5)
            </button>
            <button
              className={`filter-pill-btn magnetic-btn ${activeTab === 'nonveg' ? 'active' : ''}`}
              onClick={() => setActiveTab('nonveg')}
            >
              <span className="dietary-dot nonveg"></span> Contains Farm Eggs (5)
            </button>
            <button
              className={`filter-pill-btn magnetic-btn ${activeTab === 'boxes' ? 'active' : ''}`}
              onClick={() => setActiveTab('boxes')}
            >
              🎁 Curated Gift Boxes (3)
            </button>
          </div>
        </div>

        {/* ─── SPOTLIGHT BENTO GRID (Brownies) ─── */}
        {activeTab !== 'boxes' && (
          <div className="menu-spotlight-bento-grid">
            {filteredBrownies.map((b, i) => (
              <div
                key={b.id}
                className={`menu-spotlight-card glass-card tilt-card ${b.isPopular ? 'border-beam-card' : ''}`}
                data-reveal
                data-reveal-delay={i * 80}
              >
                {/* Image Container with Shimmer & Badges */}
                <Link href={`/product/${b.id}`} className="menu-spotlight-img-wrap" style={{ textDecoration: 'none' }} aria-label={`View ${b.name} details`}>
                  <img src={b.image} alt={b.name} loading="lazy" className="spotlight-still-img" />
                  <img
                    src={`/videos/brownies/${b.image.split('/').pop()?.replace('.jpg', '.webp')}`}
                    alt={`${b.name} video preview`}
                    loading="lazy"
                    className="spotlight-hover-clip"
                  />
                  <div className="card-clip-badge">
                    <span className="clip-dot"></span> Preview
                  </div>
                  <div className="brownie-shimmer-overlay" aria-hidden="true"></div>

                  {b.badge && <span className="menu-spotlight-badge">{b.badge}</span>}

                  <div className="menu-dietary-indicator-chip glass-card">
                    <span className={`dietary-dot ${b.dietary}`}></span>
                    <span>{b.dietary === 'veg' ? '100% Veg' : 'Farm Egg'}</span>
                  </div>

                  <button className="menu-card-heart-btn" aria-label={`Save ${b.name} to favorites`} onClick={(e) => e.preventDefault()}>
                    ♡
                  </button>
                </Link>

                {/* Card Content & Flavor Story */}
                <div className="menu-spotlight-body">
                  <div className="menu-spotlight-top">
                    <Link href={`/product/${b.id}`} style={{ textDecoration: 'none' }}>
                      <h3 className="menu-spotlight-name">{b.name}</h3>
                    </Link>
                    <span className="menu-spotlight-price">₹{b.price}</span>
                  </div>

                  <p className="menu-spotlight-tagline">{b.tagline}</p>

                  {/* Flavor Notes Pill Chips */}
                  <div className="menu-flavor-notes-chips">
                    {b.flavorNotes.split('·').map((note, idx) => (
                      <span key={idx} className="flavor-note-chip">
                        {note.trim()}
                      </span>
                    ))}
                  </div>

                  <p className="menu-spotlight-desc">{b.description}</p>

                  {/* Add to Cart / Add to Box Button */}
                  <div className="menu-spotlight-footer">
                    <button
                      className="btn-gold magnetic-btn add-cart-btn"
                      data-name={b.name}
                      data-price={b.price}
                      data-dietary={b.dietary}
                      data-image={b.image}
                      style={{ width: '100%' }}
                    >
                      <span>+ Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ─── CURATED GIFT BOXES TAB ─── */}
        {activeTab === 'boxes' && (
          <div className="curated-boxes-grid">
            {CURATED_BOXES.map((box, i) => (
              <div
                key={box.id}
                className="curated-box-spotlight-card glass-card tilt-card border-beam-card"
                data-reveal
                data-reveal-delay={i * 100}
              >
                <Link href={`/product/${box.id}`} className="curated-box-img-wrap" style={{ textDecoration: 'none' }} aria-label={`View ${box.name} details`}>
                  <img src={box.image} alt={box.name} loading="lazy" className="spotlight-still-img" />
                  <img
                    src="/videos/brownies/luxury-box-mockup.webp"
                    alt={`${box.name} video preview`}
                    loading="lazy"
                    className="spotlight-hover-clip"
                  />
                  <div className="card-clip-badge">
                    <span className="clip-dot"></span> Preview
                  </div>
                  <div className="brownie-shimmer-overlay" aria-hidden="true"></div>
                  {box.badge && <span className="curated-badge-gold">{box.badge}</span>}
                  <span className="curated-piece-count-pill">{box.pieceCount} Brownies</span>
                </Link>

                <div className="curated-box-body">
                  <div className="curated-box-header">
                    <Link href={`/product/${box.id}`} style={{ textDecoration: 'none' }}>
                      <h3>{box.name}</h3>
                    </Link>
                    <div className="curated-price-stack">
                      <span className="curated-sale-price">₹{box.price}</span>
                      <span className="curated-orig-price">₹{box.originalPrice}</span>
                    </div>
                  </div>

                  <p className="curated-box-tagline">{box.tagline}</p>
                  <p className="curated-box-desc">{box.description}</p>

                  <div className="curated-includes-list">
                    <span className="curated-includes-title">What&apos;s Inside:</span>
                    {box.includes.map((item, idx) => (
                      <div key={idx} className="curated-include-row">
                        <span className="gold-check">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    className="btn-gold magnetic-btn add-cart-btn"
                    data-name={box.name}
                    data-price={box.price}
                    data-image={box.image}
                    data-is-box="true"
                    style={{ width: '100%', marginTop: 'auto' }}
                  >
                    <span>Add Curated Box &bull; ₹{box.price}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

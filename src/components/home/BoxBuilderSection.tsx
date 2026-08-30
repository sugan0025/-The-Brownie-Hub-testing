'use client';

import React from 'react';
import { BOX_BUILDER_TIERS, INDIVIDUAL_BROWNIES } from '../../lib/products';

export default function BoxBuilderSection() {
  return (
    <section className="builder-section" id="builder">
      <div className="builder-wrapper">
        <div className="sec-head center" data-reveal>
          <span className="section-eyebrow">
            <span className="dash">&mdash;</span> ASSORTED GIFT BOX SIMULATOR <span className="dash">&mdash;</span>
          </span>
          <h2 className="section-title">Craft Your Custom Magnetic Box</h2>
          <p className="section-desc">
            Select your box tier and drop in your favorite handcrafted brownie squares.
            We&apos;ll bake, wrap with golden satin ribbon in a matte-black keepsake box, and dispatch hyper-fresh across Chennai.
          </p>
        </div>

        <div className="builder-container" data-reveal>
          {/* ─── LEFT: Flavor Selection & Tier Controls ─── */}
          <div className="builder-controls glass-card">
            {/* Step 1: Select Box Size */}
            <div className="builder-step">
              <div className="builder-step-label">
                <span className="builder-step-num glass-card">1</span>
                <span>Choose Box Tier</span>
              </div>
              <div className="tier-pills" id="builder-tier-selector">
                {BOX_BUILDER_TIERS.map((tier) => (
                  <div
                    key={tier.size}
                    className={`tier-pill glass-card magnetic-btn ${tier.size === 6 ? 'active' : ''}`}
                    data-size={tier.size}
                    data-price={tier.price}
                    data-name={tier.name}
                  >
                    <div className="tier-pill-title">{tier.name}</div>
                    <div className="tier-pill-price">₹{tier.price}</div>
                    <div className="tier-pill-save">Save ₹{tier.savings}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 2: Dietary Filter & Flavors */}
            <div className="builder-step">
              <div className="builder-step-label">
                <span className="builder-step-num glass-card">2</span>
                <span>Select Brownie Flavors</span>
              </div>

              <div className="filter-tabs" id="builder-dietary-filter">
                <button className="filter-tab active magnetic-btn" data-filter="all" suppressHydrationWarning>All Flavors (10)</button>
                <button className="filter-tab magnetic-btn" data-filter="veg" suppressHydrationWarning>🌱 100% Eggless (5)</button>
                <button className="filter-tab magnetic-btn" data-filter="nonveg" suppressHydrationWarning>🥚 Contains Egg (5)</button>
              </div>

              {/* 2-Column Responsive Flavor Options Grid */}
              <div className="builder-flavor-grid" id="builder-flavor-list">
                {INDIVIDUAL_BROWNIES.map((b) => (
                  <div
                    key={b.id}
                    className="flavor-pick-card glass-card tilt-card"
                    data-id={b.id}
                    data-name={b.name}
                    data-dietary={b.dietary}
                    data-price={b.price}
                    data-image={b.image}
                  >
                    <div className="flavor-pick-thumb">
                      <img src={b.image} alt={b.name} loading="lazy" />
                      <div className="brownie-shimmer-overlay" aria-hidden="true"></div>
                    </div>
                    <div className="flavor-pick-info">
                      <div className="flavor-title-row">
                        <span className={`dietary-dot ${b.dietary}`}></span>
                        <h5 className="flavor-name-text">{b.name}</h5>
                      </div>
                      <span className="flavor-tagline-text">{b.tagline}</span>
                      <div className="flavor-bottom-row">
                        <span className="flavor-unit-price">₹{b.price}</span>
                        <button
                          className="flavor-add-badge magnetic-btn"
                          title={`Add ${b.name} to Box`}
                          aria-label={`Add ${b.name}`}
                          suppressHydrationWarning
                        >
                          + Add
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ─── RIGHT: Live 3D Magnetic Box Simulator ─── */}
          <div className="builder-summary-card glass-card" id="builder-box-card">
            {/* Box Header with Gold Ribbon Decor */}
            <div className="box-simulator-ribbon-header">
              <span className="ribbon-gold-tag">🎀 LUXURY MAGNETIC KEEPSAKE BOX</span>
            </div>

            <div className="builder-summary-head">
              <div>
                <h3 id="builder-box-title">Box of 6</h3>
                <span className="builder-box-sub">Matte black packaging with gold foil seal &amp; satin ribbon</span>
              </div>
              <span className="mono-font" id="builder-box-badge" style={{ fontSize: '0.92rem', color: '#f7d58b', fontWeight: 'bold' }}>
                0 / 6 Selected
              </span>
            </div>

            {/* Capacity Progress Bar */}
            <div className="builder-capacity-meter">
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'rgba(253, 245, 232, 0.75)' }}>
                <span>Box Filling Progress</span>
                <span id="builder-slots-text" style={{ color: 'var(--caramel-bright)', fontWeight: '600' }}>0 of 6 slots filled</span>
              </div>
              <div className="builder-progress-bar">
                <div className="builder-progress-fill" id="builder-progress-fill" style={{ width: '0%' }}></div>
              </div>
            </div>

            {/* Luxury Recessed Velvet Slots Grid */}
            <div className="slots-grid" id="builder-slots-grid">
              {/* Populated dynamically by main.js with pop-in drop animations */}
            </div>

            {/* Pricing & Checkout Actions */}
            <div className="builder-total-row">
              <div>
                <span style={{ fontSize: '0.75rem', color: 'rgba(253, 245, 232, 0.65)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Total Box Price
                </span>
                <div className="builder-total-price" id="builder-price-display">
                  ₹489
                </div>
              </div>
              <button
                className="btn-outline btn-sm magnetic-btn"
                id="builder-clear-btn"
                style={{ padding: '8px 18px', fontSize: '0.82rem' }}
                suppressHydrationWarning
              >
                Clear All
              </button>
            </div>

            <div className="builder-actions">
              <button
                className="btn-gold magnetic-btn"
                id="builder-add-cart-btn"
                style={{ width: '100%', padding: '14px 20px', fontSize: '0.95rem' }}
                disabled
                suppressHydrationWarning
              >
                <span>Pick 6 Brownies to Pack Box</span>
              </button>

              <a
                href="#"
                id="builder-whatsapp-btn"
                className="btn-whatsapp-cart magnetic-btn"
                style={{ width: '100%', justifyContent: 'center' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z" />
                </svg>
                <span>Order Custom Box on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

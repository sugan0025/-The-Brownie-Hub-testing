'use client';

import React from 'react';
import { BOX_BUILDER_TIERS, INDIVIDUAL_BROWNIES } from '../../lib/products';

export default function BoxBuilderSection() {
  return (
    <section className="builder-section" id="builder">
      <div className="builder-wrapper">
        <div className="sec-head center" data-reveal>
          <span className="section-eyebrow">
            <span className="dash">&mdash;</span> BESPOKE CONFECTIONERY ATELIER <span className="dash">&mdash;</span>
          </span>
          <h2 className="section-title">Craft Your Signature Keepsake Box</h2>
          <p className="section-desc">
            Handpick 4 freshly baked artisanal brownie squares. Wrapped in our matte-black magnetic keepsake box with a gold foil emblem &amp; satin ribbon, delivered hyper-fresh across Chennai.
          </p>
        </div>

        <div className="builder-container" data-reveal>
          {/* ─── LEFT: Flavor Selection, Tier & Packaging Perks ─── */}
          <div className="builder-controls glass-card">
            {/* Step 1: Flavors & 1-Click Packs */}
            <div className="builder-step">
              <div className="builder-step-label">
                <span className="builder-step-num">1</span>
                <div>
                  <span className="builder-step-heading">Select 4 Brownie Squares</span>
                  <span className="builder-step-sub">Click &quot;+ Drop in Box&quot; or choose a fast 1-click combo</span>
                </div>
              </div>

              {/* 1-Click Quick Fill Presets */}
              <div className="builder-quick-presets">
                <span className="presets-label">⚡ Fast Combos:</span>
                <button type="button" className="btn-preset-pack" data-preset="classic">
                  🍫 4x Classic (₹256)
                </button>
                <button type="button" className="btn-preset-pack" data-preset="double">
                  ✨ 4x Double Choco (₹376)
                </button>
                <button type="button" className="btn-preset-pack" data-preset="combo">
                  🏆 2+2 Combo (₹316)
                </button>
              </div>

              {/* 2-Column Responsive Flavor Options Grid */}
              <div className="builder-flavor-grid" id="builder-flavor-list">
                {INDIVIDUAL_BROWNIES.map((b) => (
                  <div
                    key={b.id}
                    className="flavor-pick-card"
                    data-id={b.id}
                    data-name={b.name}
                    data-dietary={b.dietary}
                    data-price={b.price}
                    data-image={b.image}
                  >
                    <div className="flavor-pick-thumb">
                      <img src={b.image} alt={b.name} loading="lazy" />
                      <span className="flavor-thumb-tag">100% Eggless</span>
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
                          className="flavor-add-btn"
                          title={`Add ${b.name} to Box`}
                          aria-label={`Add ${b.name}`}
                          type="button"
                          suppressHydrationWarning
                        >
                          + Drop in Box
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 2: Artisanal Packaging Highlights */}
            <div className="builder-step builder-perks-step">
              <div className="builder-step-label">
                <span className="builder-step-num">2</span>
                <div>
                  <span className="builder-step-heading">Included With Every Keepsake Box</span>
                  <span className="builder-step-sub">Artisanal gifting standards for an unforgettable unboxing</span>
                </div>
              </div>

              <div className="builder-perks-grid">
                <div className="builder-perk-item">
                  <span className="perk-icon">🎀</span>
                  <div>
                    <strong>Satin Gold Ribbon</strong>
                    <p>Hand-tied luxury ribbon with gold foil emblem seal</p>
                  </div>
                </div>
                <div className="builder-perk-item">
                  <span className="perk-icon">🧊</span>
                  <div>
                    <strong>Parchment Compartments</strong>
                    <p>Individually sealed slots keeping each square ultra-fresh</p>
                  </div>
                </div>
                <div className="builder-perk-item">
                  <span className="perk-icon">⚡</span>
                  <div>
                    <strong>Same-Day Dispatch</strong>
                    <p>Baked fresh to order and dispatched across Chennai</p>
                  </div>
                </div>
                <div className="builder-perk-item">
                  <span className="perk-icon">💌</span>
                  <div>
                    <strong>Gift Message Note</strong>
                    <p>Complimentary personalized golden card upon checkout</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ─── RIGHT: Live Magnetic Box Simulator ─── */}
          <div className="builder-summary-card" id="builder-box-card">
            {/* Box Header with Gold Ribbon Decor */}
            <div className="box-simulator-ribbon-header">
              <span className="ribbon-gold-tag">✨ ARTISANAL GIFT TRAY SIMULATOR</span>
            </div>

            <div className="builder-summary-head">
              <div className="builder-head-text">
                <h3 id="builder-box-title">Pack of 4 Box</h3>
                <span className="builder-box-sub">Matte black velvet tray &amp; embossed gold ribbon</span>
              </div>
              <span className="builder-box-badge" id="builder-box-badge">
                0 / 4 Selected
              </span>
            </div>

            {/* Capacity Progress Bar */}
            <div className="builder-capacity-meter">
              <div className="builder-meter-labels">
                <span>Box Filling Status</span>
                <span id="builder-slots-text">0 of 4 slots filled</span>
              </div>
              <div className="builder-progress-bar">
                <div className="builder-progress-fill" id="builder-progress-fill" style={{ width: '0%' }}></div>
              </div>
            </div>

            {/* 4 Recessed Velvet Slots Grid (2x2) */}
            <div className="slots-grid-4" id="builder-slots-grid">
              {/* Populated dynamically by main.js with 4 slots */}
            </div>

            {/* Pricing & Checkout Actions */}
            <div className="builder-total-row">
              <div>
                <span className="total-label">Total Custom Box Price</span>
                <div className="builder-total-price" id="builder-price-display">
                  ₹0
                </div>
              </div>
              <button
                className="btn-clear-selection"
                id="builder-clear-btn"
                type="button"
                suppressHydrationWarning
              >
                Clear Tray
              </button>
            </div>

            <div className="builder-actions">
              <button
                className="btn-pack-box"
                id="builder-add-cart-btn"
                type="button"
                disabled
                suppressHydrationWarning
              >
                <span>Pick 4 Brownies to Pack Box</span>
              </button>

              <a
                href="#"
                id="builder-whatsapp-btn"
                className="btn-whatsapp-box"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z" />
                </svg>
                <span>Direct Order on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

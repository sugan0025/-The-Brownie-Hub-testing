'use client';

import React from 'react';

export default function ContactSection() {
  return (
    <section className="contact-section" id="contact" data-reveal>
      <div className="wrap">
        <div className="contact-grid">
          {/* Left Column: Direct Info */}
          <div className="contact-info" data-reveal>
            <span className="section-eyebrow">DIRECT KITCHEN CONNECTION</span>
            <h2 className="section-title">Order, Inquire, or Say Hello</h2>
            <p className="contact-desc">
              Whether you need 25 assorted gift boxes for a family wedding, want to book a private masterclass, or simply want a fresh box today — we&apos;re always baking.
            </p>

            <div className="contact-items">
              <div className="contact-item glass-card">
                <div className="contact-icon-circle">📍</div>
                <div>
                  <strong>Chennai Kitchen &amp; Studio</strong>
                  <span>Tamil Nadu, India</span>
                </div>
              </div>

              <div className="contact-item glass-card">
                <div className="contact-icon-circle whatsapp-glow">💬</div>
                <div>
                  <strong>WhatsApp Quick Order</strong>
                  <a href="https://wa.me/917200015490" target="_blank" rel="noopener noreferrer" className="contact-link">
                    +91 72000 15490 (Instant Response)
                  </a>
                </div>
              </div>

              <div className="contact-item glass-card">
                <div className="contact-icon-circle">✉️</div>
                <div>
                  <strong>Email Us</strong>
                  <a href="mailto:hi@thebrowniehub.com" className="contact-link">
                    hi@thebrowniehub.com
                  </a>
                </div>
              </div>

              <div className="contact-item glass-card">
                <div className="contact-icon-circle">📸</div>
                <div>
                  <strong>Instagram</strong>
                  <a href="https://instagram.com/thebrowniehubb" target="_blank" rel="noopener noreferrer" className="contact-link">
                    @thebrowniehubb
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Inquiry Form */}
          <div className="contact-form-card glass-card" data-reveal>
            <h3>Send a Quick Inquiry</h3>
            <form id="contact-form" className="contact-form">
              {/* Anti-spam honeypot (matches order/workshop forms) */}
              <input
                type="text"
                name="b_website"
                id="contact-b-website"
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="form-group">
                <input type="text" id="contact-name" name="name" placeholder="Your Name" required className="form-input glass-card" />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div className="form-group">
                  <input type="tel" id="contact-phone" name="phone" placeholder="WhatsApp Number" required className="form-input glass-card" />
                </div>
                <div className="form-group">
                  <input type="email" id="contact-email" name="email" placeholder="Email Address" required className="form-input glass-card" />
                </div>
              </div>
              <div className="form-group">
                <select
                  id="contact-type"
                  name="inquiry_type"
                  className="form-input glass-card contact-select"
                  required
                  defaultValue=""
                  data-lenis-prevent="true"
                >
                  <option value="" disabled style={{ background: '#190d06', color: 'rgba(245,237,228,0.6)' }}>
                    What can we help with?
                  </option>
                  <option value="Place an Order" style={{ background: '#190d06', color: '#f5ede4' }}>
                    Custom Brownie Box / Immediate Order
                  </option>
                  <option value="Corporate Gifting" style={{ background: '#190d06', color: '#f5ede4' }}>
                    Corporate Gifting &amp; Luxury Hampers
                  </option>
                  <option value="Party & Bulk Orders" style={{ background: '#190d06', color: '#f5ede4' }}>
                    Party, Wedding &amp; Bulk Orders
                  </option>
                  <option value="General Inquiry" style={{ background: '#190d06', color: '#f5ede4' }}>
                    General Inquiry &amp; Kitchen Feedback
                  </option>
                </select>
              </div>
              <div className="form-group">
                <textarea id="contact-message" name="message" placeholder="Tell us more... (min. 10 characters)" rows={4} required minLength={10} className="form-input glass-card"></textarea>
              </div>
              <button type="submit" className="btn-gold magnetic-btn" id="contact-submit-btn" style={{ width: '100%' }}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

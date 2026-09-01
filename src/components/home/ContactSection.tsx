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
              Whether you need 25 assorted gift boxes for a family wedding, corporate celebration hampers, or simply want a fresh box today — we&apos;re always baking.
            </p>

            <div className="contact-items">
              <div className="contact-item glass-card">
                <div className="contact-icon-circle location-glow">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e8b66e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <strong>Chennai Kitchen &amp; Studio</strong>
                  <span>Tamil Nadu, India</span>
                </div>
              </div>

              <div className="contact-item glass-card">
                <div className="contact-icon-circle whatsapp-glow">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#25D366">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2Z" />
                    <path d="M17.5 14.33C17.2 14.18 15.73 13.45 15.45 13.35C15.18 13.25 14.98 13.2 14.78 13.5C14.58 13.8 14.01 14.48 13.83 14.68C13.66 14.88 13.48 14.9 13.18 14.75C12.88 14.6 11.91 14.28 10.77 13.26C9.88 12.47 9.28 11.49 9.11 11.19C8.93 10.89 9.09 10.73 9.24 10.58C9.37 10.45 9.54 10.22 9.69 10.05C9.84 9.87 9.89 9.75 9.99 9.55C10.09 9.35 10.04 9.17 9.96 9.02C9.89 8.87 9.29 7.4 9.04 6.8C8.8 6.22 8.55 6.3 8.36 6.29L7.79 6.28C7.59 6.28 7.27 6.35 7 6.65C6.73 6.95 5.96 7.67 5.96 9.15C5.96 10.62 7.04 12.05 7.19 12.25C7.34 12.45 9.3 15.46 12.3 16.76C13.01 17.07 13.57 17.26 14 17.4C14.71 17.62 15.37 17.59 15.88 17.51C16.45 17.43 17.64 16.79 17.89 16.09C18.14 15.39 18.14 14.79 18.06 14.68C17.99 14.56 17.8 14.48 17.5 14.33Z" fill="white" />
                  </svg>
                </div>
                <div>
                  <strong>WhatsApp Quick Order</strong>
                  <a href="https://wa.me/919500415490" target="_blank" rel="noopener noreferrer" className="contact-link">
                    +91 95004 15490 (Instant Response)
                  </a>
                </div>
              </div>

              <div className="contact-item glass-card">
                <div className="contact-icon-circle email-glow">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e8b66e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <strong>Email Us</strong>
                  <a href="mailto:thebrowniehub3@gmail.com" className="contact-link">
                    thebrowniehub3@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-item glass-card">
                <div className="contact-icon-circle instagram-glow">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="url(#insta-grad-contact)" strokeWidth="2" />
                    <circle cx="12" cy="12" r="4" stroke="url(#insta-grad-contact)" strokeWidth="2" />
                    <circle cx="17.5" cy="6.5" r="1" fill="#e1306c" />
                    <defs>
                      <linearGradient id="insta-grad-contact" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#f58529" />
                        <stop offset="0.5" stopColor="#dd2a7b" />
                        <stop offset="1" stopColor="#8134af" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
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

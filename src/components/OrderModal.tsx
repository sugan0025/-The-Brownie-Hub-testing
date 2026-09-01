'use client';

import React from 'react';

export default function OrderModal() {
  return (
    <div className="modal-overlay" id="order-modal-overlay">
      <div className="modal glass-card" id="order-modal" data-lenis-prevent="true">
        {/* Close Button */}
        <button className="modal-close" id="order-modal-close" aria-label="Close order modal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        {/* Modal Title & Subtitle */}
        <h3 className="form-title" style={{ fontFamily: 'var(--font-heading), serif', fontSize: '1.75rem', fontWeight: 700, color: 'var(--cream)', marginBottom: '4px' }}>
          Complete Your Order
        </h3>
        <p className="modal-subtitle" style={{ color: 'var(--cream-muted)', fontSize: '0.9rem', marginBottom: '20px' }}>
          We'll prepare your freshly baked items with love.
        </p>

        <form className="contact-form" id="order-form">
          {/* Anti-spam Honeypot */}
          <input
            type="text"
            name="b_website"
            id="order-hp"
            className="hp-field"
            tabIndex={-1}
            autoComplete="off"
            style={{ display: 'none' }}
          />

          {/* Form Input Groups with Floating Labels */}
          <div className="form-group">
            <input type="text" id="order-name" className="form-input" placeholder=" " required />
            <label htmlFor="order-name" className="form-label">Your Name</label>
          </div>

          <div className="form-group">
            <input type="email" id="order-email" className="form-input" placeholder=" " required />
            <label htmlFor="order-email" className="form-label">Email Address</label>
          </div>

          <div className="form-group">
            <input type="tel" id="order-phone" className="form-input" placeholder=" " required />
            <label htmlFor="order-phone" className="form-label">Phone Number</label>
          </div>

          {/* Delivery Details */}
          <div className="form-group">
            <input type="text" id="order-address" className="form-input" placeholder=" " required />
            <label htmlFor="order-address" className="form-label">Delivery Address (Door / Street / Area)</label>
          </div>

          <div className="form-group">
            <input type="text" id="order-pincode" className="form-input" defaultValue="600001" placeholder=" " required />
            <label htmlFor="order-pincode" className="form-label">Pincode (e.g. 600001)</label>
          </div>

          <div className="form-group">
            <textarea id="order-notes" className="form-input form-textarea" placeholder=" " rows={2}></textarea>
            <label htmlFor="order-notes" className="form-label">Special Instructions (Optional)</label>
          </div>

          {/* Payment Method Selection (Only Cash on Delivery - COD) */}
          <div className="payment-method-group" style={{ marginTop: '1rem', marginBottom: '1.25rem' }}>
            <h4 className="payment-method-title" style={{ color: 'var(--caramel-bright)', fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.75rem' }}>
              Select Payment Method
            </h4>
            <div className="payment-options">
              <label className="payment-option" style={{ cursor: 'pointer', position: 'relative', display: 'block' }}>
                <input type="radio" name="payment_method" value="cod" defaultChecked />
                <span className="payment-option-content" style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '14px 18px', background: 'rgba(201, 134, 60, 0.16)', border: '1px solid var(--caramel)', borderRadius: '12px', color: 'var(--cream)', boxShadow: '0 0 20px rgba(201, 134, 60, 0.2), inset 0 0 0 1px var(--caramel)' }}>
                  <span className="payment-icon" style={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    💵
                  </span>
                  <span className="payment-text" style={{ fontWeight: 600, fontSize: '0.98rem' }}>
                    Cash on Delivery
                  </span>
                </span>
              </label>
            </div>
          </div>

          {/* Order Summary Box */}
          <div className="order-summary-box" id="order-summary-box">
            {/* Populated dynamically by renderOrderSummary in main.js */}
          </div>

          {/* Submit CTA Button */}
          <button type="submit" className="btn btn-primary btn-full magnetic-btn" id="submit-order-btn">
            <span>Confirm & Send Order</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}

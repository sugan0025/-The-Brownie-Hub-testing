'use client';

import React from 'react';

export default function OrderModal() {
  return (
    <>
      {/* Background Dimming Backdrop Overlay */}
      <div className="modal-overlay" id="order-modal-overlay" aria-hidden="true"></div>

      {/* Luxury Rolling Oven Style Order & Cart Modal */}
      <div
        className="modal-dialog rolling-order-modal"
        id="order-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="order-modal-title"
        data-lenis-prevent="true"
      >
        <button
          className="modal-close-btn rolling-close-btn"
          id="order-modal-close-btn"
          aria-label="Close Order Modal"
        >
          ✕
        </button>

        {/* Step 1: Complete Your Order (Form + Embedded Order Summary) */}
        <div id="order-form-step">
          {/* Header matching Rolling Oven screenshot */}
          <div className="rolling-modal-header">
            <h2 id="order-modal-title" className="rolling-modal-title">
              Complete Your Order
            </h2>
            <p className="rolling-modal-subtitle">
              We&apos;ll prepare your freshly baked items with love.
            </p>
          </div>

          <form id="order-checkout-form" className="rolling-order-form">
            {/* Anti-spam honeypot */}
            <input
              type="text"
              name="b_website"
              id="order-b-website"
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />

            {/* Input Stack matching Rolling Oven exact field order with floating labels */}
            <div className="rolling-fields-stack">
              <div className="rolling-field-group">
                <input
                  type="text"
                  id="order-customer-name"
                  name="customer_name"
                  required
                  placeholder=" "
                  className="rolling-input"
                />
                <label htmlFor="order-customer-name" className="rolling-label">Your Name</label>
              </div>

              <div className="rolling-field-group">
                <input
                  type="email"
                  id="order-customer-email"
                  name="customer_email"
                  required
                  placeholder=" "
                  className="rolling-input"
                />
                <label htmlFor="order-customer-email" className="rolling-label">Email Address</label>
              </div>

              <div className="rolling-field-group">
                <input
                  type="tel"
                  id="order-customer-phone"
                  name="customer_phone"
                  required
                  placeholder=" "
                  className="rolling-input"
                />
                <label htmlFor="order-customer-phone" className="rolling-label">Phone Number</label>
              </div>

              <div className="rolling-field-group">
                <input
                  type="text"
                  id="order-delivery-address"
                  name="delivery_address"
                  required
                  placeholder=" "
                  className="rolling-input"
                />
                <label htmlFor="order-delivery-address" className="rolling-label">Delivery Address (Door / Street / Area)</label>
              </div>

              <div className="rolling-field-group">
                <input
                  type="text"
                  id="order-pincode"
                  name="pincode"
                  required
                  defaultValue="600001"
                  placeholder=" "
                  className="rolling-input"
                />
                <label htmlFor="order-pincode" className="rolling-label">Pincode (e.g. 600001)</label>
              </div>

              <div className="rolling-field-group">
                <textarea
                  id="order-instructions"
                  name="special_instructions"
                  rows={2}
                  placeholder=" "
                  className="rolling-input rolling-textarea"
                />
                <label htmlFor="order-instructions" className="rolling-label">Special Instructions (Optional)</label>
              </div>
            </div>

            {/* ══════════ ORDER SUMMARY (Exact Rolling Oven Style) ══════════ */}
            <div className="rolling-summary-card">
              <h4 className="rolling-summary-heading">Order Summary</h4>

              {/* Dynamic Items Container inside Modal */}
              <div className="rolling-modal-items" id="order-modal-items-list">
                {/* Dynamically filled by renderModalOrderSummary() in main.js */}
              </div>

              {/* Total Row */}
              <div className="rolling-total-row">
                <span>Total</span>
                <span className="mono-font rolling-total-amount" id="order-modal-total">₹0</span>
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="rolling-payment-section">
              <div className="rolling-payment-label">Payment Mode:</div>
              <div className="payment-tabs">
                <div className="payment-tab active" data-payment="UPI / QR Code">
                  📱 UPI / GPay / PhonePe
                </div>
                <div className="payment-tab" data-payment="WhatsApp Pay / COD">
                  💬 WhatsApp Pay / COD
                </div>
              </div>
              <input type="hidden" name="payment_method" id="order-payment-method" value="UPI / QR Code" />
            </div>

            {/* UPI QR Display Container */}
            <div className="upi-qr-box" id="upi-payment-box">
              <div style={{ fontSize: '0.84rem', color: 'var(--cream-muted)', marginBottom: '8px' }}>
                Scan to pay via any UPI App (GPay, PhonePe, Paytm):
              </div>
              <div
                style={{
                  width: '130px',
                  height: '130px',
                  margin: '0 auto 10px',
                  background: 'rgba(253, 245, 232, 0.06)',
                  border: '1.5px dashed rgba(201, 134, 60, 0.4)',
                  borderRadius: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '8px',
                }}
              >
                <div style={{ fontSize: '2rem' }}>📱</div>
                <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--caramel-bright)' }}>UPI QR READY</span>
                <span style={{ fontSize: '0.65rem', color: 'var(--cream-muted)' }}>Instant Confirmation</span>
              </div>
              <div className="mono-font" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--caramel-bright)' }}>
                thebrowniehub@upi
              </div>
            </div>

            {/* Action Buttons Stack */}
            <div className="rolling-action-stack">
              <button
                type="submit"
                className="rolling-send-order-btn magnetic-btn"
                id="order-submit-btn"
              >
                <span>Confirm &amp; Send Order &rarr;</span>
              </button>

              <button
                type="button"
                className="btn-whatsapp-cart magnetic-btn rolling-wa-checkout-btn"
                id="order-modal-wa-btn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z" />
                </svg>
                <span>Instant 1-Click WhatsApp Order</span>
              </button>
            </div>

            <div className="rolling-trust-note">
              🛵 Freshly baked in Chennai &bull; Delivered warm in 60&ndash;90 mins &bull; Safe &amp; Contactless
            </div>
          </form>
        </div>

        {/* Step 2: Success Confirmation View */}
        <div id="order-success-step" style={{ display: 'none', textAlign: 'center', padding: '24px 0' }}>
          <div style={{ fontSize: '3.5rem', marginBottom: '14px' }}>🎉</div>
          <span className="section-eyebrow mono-font">Order Placed Successfully</span>
          <h3 style={{ fontSize: '1.85rem', marginBottom: '8px', fontFamily: 'var(--font-heading)', color: 'var(--cream)' }}>
            Thank You for Ordering!
          </h3>
          <p style={{ fontSize: '0.92rem', color: 'var(--cream-muted)', maxWidth: '420px', margin: '0 auto 20px' }}>
            Your artisanal brownie order has been received by our kitchen in Chennai. We are preparing your fresh box!
          </p>

          <div
            className="glass-card"
            style={{
              padding: '18px 24px',
              maxWidth: '380px',
              margin: '0 auto 24px',
              textAlign: 'left',
              borderRadius: 'var(--radius-md)',
              border: '1px solid rgba(201, 134, 60, 0.3)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.86rem', color: 'var(--cream-muted)' }}>Order ID:</span>
              <strong className="mono-font" style={{ color: 'var(--caramel-bright)' }} id="success-order-id">TBH-000000</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '0.86rem', color: 'var(--cream-muted)' }}>Amount:</span>
              <strong className="mono-font" style={{ color: 'var(--caramel-bright)' }} id="success-order-amount">₹0</strong>
            </div>
          </div>

          <a
            href="#"
            id="success-whatsapp-link"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold magnetic-btn"
            style={{ display: 'inline-flex', padding: '14px 28px' }}
          >
            💬 Open Order Confirmation in WhatsApp &rarr;
          </a>
        </div>
      </div>
    </>
  );
}

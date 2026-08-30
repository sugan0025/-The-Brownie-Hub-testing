'use client';

import React from 'react';

export default function CartDrawer() {
  return (
    <>
      {/* Background Dimming Backdrop Overlay */}
      <div className="cart-overlay" id="cart-overlay" aria-hidden="true"></div>

      {/* Luxury Cart Drawer (Rolling Oven Style) */}
      <aside className="cart-drawer" id="cart-drawer" aria-label="Shopping Cart">
        {/* Drawer Header */}
        <div className="cart-header">
          <div className="cart-header-title-box">
            <div className="cart-header-icon-wrap">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
            </div>
            <div>
              <h3>Your Brownie Box</h3>
              <span className="cart-header-count-label" id="cart-header-count">0 items selected</span>
            </div>
          </div>
          <button className="cart-close-circle-btn" id="cart-close-btn" aria-label="Close Cart">
            ✕
          </button>
        </div>

        {/* Chennai Free Delivery Progress Bar */}
        <div className="cart-delivery-progress-wrap" id="cart-delivery-progress-box">
          <div className="cart-delivery-msg" id="cart-delivery-msg">
            <span>🛵 Add ₹500 more for <strong>FREE Delivery</strong> across Chennai!</span>
          </div>
          <div className="cart-delivery-track">
            <div className="cart-delivery-fill" id="cart-delivery-fill" style={{ width: '0%' }}></div>
          </div>
        </div>

        {/* Drawer Scrollable Body */}
        <div className="cart-body" id="cart-body">
          {/* Empty State */}
          <div className="cart-empty-state" id="cart-empty-state">
            <div className="cart-empty-icon-wrap">🍫</div>
            <h4>Your Box is Empty</h4>
            <p>Fill your cravings with our handcrafted Belgian couverture brownies or build a custom assorted box.</p>
            <a href="#builder" className="btn-gold btn-sm magnetic-btn" id="cart-empty-builder-btn">
              Craft a Custom Box &rarr;
            </a>
          </div>

          {/* Dynamic Items Container */}
          <div className="cart-items-container" id="cart-items-container"></div>

          {/* Gifting & Delivery Instructions Note Field */}
          <div className="cart-order-note-box" id="cart-note-section" style={{ display: 'none' }}>
            <label htmlFor="cart-gift-note" className="cart-note-label">
              <span>🎁 Gift Message / Delivery Instructions:</span>
            </label>
            <textarea
              id="cart-gift-note"
              className="cart-note-textarea"
              placeholder="E.g., 'Happy Birthday Rahul! Please leave at the security gate.'"
              rows={2}
            ></textarea>
          </div>
        </div>

        {/* Drawer Footer with Bill Breakdown & Dual Checkout */}
        <div className="cart-footer" id="cart-footer" style={{ display: 'none' }}>
          <div className="cart-bill-breakdown">
            <div className="cart-bill-row">
              <span>Item Subtotal:</span>
              <span className="mono-font" id="cart-subtotal-display">₹0</span>
            </div>
            <div className="cart-bill-row">
              <span>Chennai Express Delivery:</span>
              <span className="cart-delivery-cost-label" id="cart-delivery-fee-display">FREE</span>
            </div>
            <div className="cart-bill-row total-row">
              <span>Total to Pay:</span>
              <span className="cart-grand-total mono-font" id="cart-total-display">₹0</span>
            </div>
          </div>

          <div className="cart-cta-column">
            <button className="btn-gold cart-main-checkout-btn magnetic-btn" id="cart-checkout-btn">
              <span>Proceed to Delivery Checkout</span>
              <span className="arrow-icon">&rarr;</span>
            </button>

            <button className="btn-whatsapp-cart magnetic-btn" id="cart-whatsapp-checkout-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z" />
              </svg>
              <span>Instant 1-Click WhatsApp Order</span>
            </button>
          </div>

          <p className="cart-footer-guarantee">
            🛵 Freshly baked in Chennai · Delivered warm in 60&ndash;90 mins · Safe &amp; Contactless
          </p>
        </div>
      </aside>
    </>
  );
}

'use client';

import React from 'react';

export default function CartDrawer() {
  return (
    <>
      {/* Background Dimming Backdrop Overlay */}
      <div className="cart-overlay" id="cart-overlay" aria-hidden="true"></div>

      {/* Luxury Cart Drawer (The Rolling Oven Style) */}
      <aside className="cart-sidebar cart-drawer" id="cart-sidebar" data-lenis-prevent="true" aria-label="Shopping Cart">
        {/* Drawer Header */}
        <div className="cart-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '1.4rem' }}>🍫</span>
            <div>
              <h3 style={{ margin: 0, fontSize: '1.25rem', color: 'var(--cream)', fontWeight: 700 }}>Your Brownie Box</h3>
              <span className="cart-header-count-label" id="cart-header-count" style={{ fontSize: '0.78rem', color: 'var(--cream-muted)' }}>
                0 items selected
              </span>
            </div>
          </div>
          <button className="cart-close-btn cart-close-circle-btn" id="cart-close-btn" aria-label="Close cart">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
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

        {/* Scrollable Items Body */}
        <div className="cart-items cart-body" id="cart-items">
          {/* Empty State */}
          <div className="cart-empty" id="cart-empty-state">
            <span className="cart-empty-icon">🍫</span>
            <p>Your cart is empty</p>
            <span className="cart-empty-sub">Add some freshly baked brownies!</span>
          </div>

          {/* Dynamic Items Container */}
          <div className="cart-items-container" id="cart-items-container"></div>
        </div>

        {/* Drawer Footer with Totals & 2-Button Checkout */}
        <div className="cart-footer" id="cart-footer" style={{ display: 'none' }}>
          <div className="cart-total" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <span style={{ fontSize: '1rem', color: 'var(--cream-muted)' }}>Total Amount</span>
            <span className="cart-total-price mono-font" id="cart-total-price" style={{ fontSize: '1.45rem', fontWeight: 700, color: 'var(--caramel-bright)' }}>
              ₹0
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {/* 1. Primary WhatsApp Direct Order Button (Rolling Oven Style) */}
            <button className="btn btn-whatsapp btn-full magnetic-btn" id="whatsapp-order-btn" type="button" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '14px', borderRadius: '12px', background: '#25D366', color: '#ffffff', border: 'none', fontWeight: 700, fontSize: '0.98rem', cursor: 'pointer' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z" />
              </svg>
              <span>Order via WhatsApp</span>
            </button>

            {/* 2. Secondary Cash on Delivery Online Form Checkout (Rolling Oven Style) */}
            <button className="btn btn-primary btn-full magnetic-btn" id="place-order-btn" type="button" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '13px', borderRadius: '12px', background: 'linear-gradient(135deg, var(--caramel), var(--caramel-dark))', color: '#140a05', border: '1px solid rgba(255, 235, 175, 0.4)', fontWeight: 700, fontSize: '0.94rem', cursor: 'pointer' }}>
              <span>Checkout Online (COD)</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </div>

          <p style={{ textAlign: 'center', margin: '14px 0 0', fontSize: '0.76rem', color: 'var(--cream-muted)' }}>
            🛵 Cash on Delivery (COD) Available &bull; 100% Belgian Chocolate
          </p>
        </div>
      </aside>
    </>
  );
}

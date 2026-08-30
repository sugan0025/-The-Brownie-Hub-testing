import React from 'react';

export default function Footer() {
  return (
    <footer id="footer" className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-brand-name">The Brownie Hub</div>
            <p className="footer-brand-desc">
              Handcrafted small-batch veg and egg brownies baked daily in Chennai, Tamil Nadu.
              Bespoke assorted gift boxes, corporate catering, and weekend offline baking masterclasses.
            </p>
            <div style={{ marginTop: '20px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href="https://instagram.com/thebrowniehubb"
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill-instagram magnetic-btn"
                aria-label="Instagram @thebrowniehubb"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="6" stroke="url(#ig-grad-ft)" strokeWidth="2" />
                  <circle cx="12" cy="12" r="4.5" stroke="url(#ig-grad-ft)" strokeWidth="2" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="#f58529" />
                  <defs>
                    <linearGradient id="ig-grad-ft" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#f58529"/>
                      <stop offset="0.5" stopColor="#dd2a7b"/>
                      <stop offset="1" stopColor="#8134af"/>
                    </linearGradient>
                  </defs>
                </svg>
                <span>@thebrowniehubb</span>
              </a>
              <a
                href="https://wa.me/917200015490"
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill-whatsapp magnetic-btn"
                aria-label="WhatsApp +91 72000 15490"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2Z" fill="#25D366"/>
                  <path d="M17.5 14.33C17.2 14.18 15.73 13.45 15.45 13.35C15.18 13.25 14.98 13.2 14.78 13.5C14.58 13.8 14.01 14.48 13.83 14.68C13.66 14.88 13.48 14.9 13.18 14.75C12.88 14.6 11.91 14.28 10.77 13.26C9.88 12.47 9.28 11.49 9.11 11.19C8.93 10.89 9.09 10.73 9.24 10.58C9.37 10.45 9.54 10.22 9.69 10.05C9.84 9.87 9.89 9.75 9.99 9.55C10.09 9.35 10.04 9.17 9.96 9.02C9.89 8.87 9.29 7.4 9.04 6.8C8.8 6.22 8.55 6.3 8.36 6.29L7.79 6.28C7.59 6.28 7.27 6.35 7 6.65C6.73 6.95 5.96 7.67 5.96 9.15C5.96 10.62 7.04 12.05 7.19 12.25C7.34 12.45 9.3 15.46 12.3 16.76C13.01 17.07 13.57 17.26 14 17.4C14.71 17.62 15.37 17.59 15.88 17.51C16.45 17.43 17.64 16.79 17.89 16.09C18.14 15.39 18.14 14.79 18.06 14.68C17.99 14.56 17.8 14.48 17.5 14.33Z" fill="white"/>
                </svg>
                <span>+91 72000 15490</span>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#builder">Custom Box Builder</a></li>
              <li><a href="#menu">Brownie Menu</a></li>
              <li><a href="#workshops">Baking Workshops</a></li>
              <li><a href="#founders">About the Founders</a></li>
              <li><a href="#faq">Storage &amp; FAQ</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Signatures</h4>
            <ul className="footer-links">
              <li><a href="#menu">Salted Caramel Swirl (Veg)</a></li>
              <li><a href="#menu">Nutella Stuffed (Veg)</a></li>
              <li><a href="#menu">Biscoff Crunch (Egg)</a></li>
              <li><a href="#menu">Double Chocolate (Egg)</a></li>
              <li><a href="#menu">Red Velvet Swirl (Egg)</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Kitchen &amp; Timings</h4>
            <p style={{ color: 'var(--cream-muted)', fontSize: '0.86rem', lineHeight: '1.6' }}>
              📍 <strong style={{ color: 'var(--cream)' }}>Kitchen:</strong> Chennai, Tamil Nadu, India<br />
              ⏰ <strong style={{ color: 'var(--cream)' }}>Order Delivery:</strong> 10:00 AM – 09:00 PM<br />
              🎓 <strong style={{ color: 'var(--cream)' }}>Workshops:</strong> Saturday &amp; Sunday Batches<br />
              ✉️ <strong style={{ color: 'var(--cream)' }}>Inquiries:</strong> hi@thebrowniehub.com
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <div>&copy; 2026 The Brownie Hub (Chennai). All rights reserved.</div>
          <div style={{ display: 'flex', gap: '20px', fontSize: '0.82rem', flexWrap: 'wrap' }}>
            <span>100% Pure Butter &amp; Couverture</span>
            <span>Veg &amp; Eggless Separate Lines</span>
            <span>Pan-Chennai Delivery</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

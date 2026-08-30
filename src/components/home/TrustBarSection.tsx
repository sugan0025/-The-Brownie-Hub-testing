import React from 'react';

export default function TrustBarSection() {
  const items = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e8b66e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
      ),
      label: 'Premium Ingredients',
      desc: 'Only the finest & fresh ingredients',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e8b66e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="3" />
          <path d="M6 8h.01" /><path d="M10 8h.01" /><path d="M14 8h.01" /><path d="M18 8h.01" />
          <rect x="6" y="12" width="12" height="5" rx="1" />
        </svg>
      ),
      label: 'Baked to Perfection',
      desc: 'Every brownie is baked with precision',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e8b66e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13" rx="2" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      ),
      label: 'Fast Delivery',
      desc: 'Quick & safe delivery at your doorstep',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e8b66e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      ),
      label: 'Made with Love',
      desc: 'Every bite is filled with love & happiness',
    },
  ];

  return (
    <section className="trust-strip-section" id="trust-bar" data-reveal>
      <div className="wrap">
        <div className="trust-strip-container glass-card">
          {items.map((item, i) => (
            <div key={i} className="trust-strip-item" data-reveal data-reveal-delay={i * 100}>
              <div className="trust-strip-icon-box">
                {item.icon}
              </div>
              <div className="trust-strip-text">
                <strong className="trust-strip-label">{item.label}</strong>
                <span className="trust-strip-desc">{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

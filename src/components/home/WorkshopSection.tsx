import React from 'react';
import { WORKSHOPS } from '../../lib/workshops';

export default function WorkshopSection() {
  const levelGradients: Record<string, string> = {
    'Beginner': 'linear-gradient(135deg, #e8b66e 0%, #c9863c 100%)',
    'Intermediate': 'linear-gradient(135deg, #c9863c 0%, #8c531d 100%)',
    'Family Friendly': 'linear-gradient(135deg, #f7d58b 0%, #e8b66e 100%)',
  };

  return (
    <section className="workshops-section" id="workshops">
      <div className="wrap">
        <div className="sec-head" data-reveal>
          <span className="section-eyebrow">OFFLINE MASTERCLASSES · CHENNAI KITCHEN</span>
          <h2 className="section-title">Sessions on How We Make It</h2>
          <p className="section-desc">
            Small-batch, hands-on masterclasses at our Chennai kitchen — you leave with the master recipe, 
            the professional technique, and a freshly baked assorted box you made yourself.
          </p>
        </div>

        <div className="workshops-grid">
          {WORKSHOPS.map((ws, i) => (
            <div className="workshop-card glass-card tilt-card" key={ws.id} data-reveal data-reveal-delay={i * 150}>
              {/* Gradient header */}
              <div className="workshop-gradient-bar" style={{ background: levelGradients[ws.level] || levelGradients['Beginner'] }}></div>
              
              <div className="workshop-card-body">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="workshop-level">{ws.level}</span>
                  {ws.badge && <span className="workshop-seats-badge shimmer-badge">{ws.badge}</span>}
                </div>

                <h3>{ws.name}</h3>
                <p className="workshop-desc">{ws.description}</p>

                {/* Stat chips */}
                <div className="workshop-chips">
                  <span className="workshop-chip glass-card">⏱ {ws.duration}</span>
                  <span className="workshop-chip glass-card">📅 {ws.frequency}</span>
                </div>

                <div className="workshop-syllabus">
                  <strong>Core Syllabus:</strong>
                  <ul>
                    {ws.syllabus.map((syl, j) => (
                      <li key={j}>{syl}</li>
                    ))}
                  </ul>
                </div>

                {/* What you'll leave with */}
                <div className="workshop-takeaway">
                  ✨ <em>You&apos;ll leave with: the master recipe, pro technique, and a fresh box you baked yourself.</em>
                </div>

                <div className="workshop-meta">
                  <div>
                    <span className="workshop-price">₹{ws.price.toLocaleString('en-IN')}</span>
                    <span className="workshop-price-suffix">/ person</span>
                  </div>
                  <button
                    className="btn-gold magnetic-btn workshop-book-btn"
                    data-id={ws.id}
                    data-name={ws.name}
                    data-price={ws.price}
                    data-level={ws.level}
                  >
                    Reserve Seat &rarr;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Inquiry — dark glass, not white */}
        <div className="corporate-inquiry-bar glass-card" data-reveal>
          <div className="corporate-inquiry-text">
            💡 <strong>Private &amp; Corporate Batches:</strong> Looking for a team-building baking event or birthday party session?
          </div>
          <a
            href="https://wa.me/917200015490?text=Hi%20The%20Brownie%20Hub!%20I'd%20like%20to%20inquire%20about%20a%20private%20baking%20workshop."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline magnetic-btn"
          >
            Inquire on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

'use client';

import React from 'react';

export default function AboutSection() {
  return (
    <section className="about-section" id="about" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Ambient background glow */}
      <div
        className="about-bg-glow"
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '750px',
          height: '500px',
          background: 'radial-gradient(ellipse at center, rgba(201, 134, 60, 0.12) 0%, rgba(68, 30, 11, 0.05) 50%, transparent 75%)',
          filter: 'blur(90px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="section-container" style={{ position: 'relative', zIndex: 1, maxWidth: '1080px', margin: '0 auto', padding: '0 24px' }}>
        {/* Section Header */}
        <div className="section-header" data-reveal style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="section-pill-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(201, 134, 60, 0.12)', border: '1px solid rgba(201, 134, 60, 0.3)', borderRadius: '999px', fontSize: '0.82rem', fontWeight: '600', letterSpacing: '1.5px', color: '#e8b66e', marginBottom: '16px' }}>
            <span>🎓 OUR STORY</span>
          </div>
          <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: '700', color: '#fff4ea', letterSpacing: '-0.5px' }}>
            Welcome to <span className="gold-serif" style={{ color: '#e8b66e', fontStyle: 'italic', fontFamily: 'serif' }}>The Brownie Hub</span> 🍫
          </h2>
          <p className="section-subtitle" style={{ color: 'rgba(255, 244, 234, 0.7)', fontSize: '1.05rem', maxWidth: '640px', margin: '12px auto 0' }}>
            Where every bite tells the story of a dream.
          </p>
        </div>

        {/* Story Card Grid */}
        <div
          className="about-card glass-card"
          data-reveal
          style={{
            background: 'linear-gradient(145deg, rgba(38, 20, 12, 0.7) 0%, rgba(20, 10, 5, 0.85) 100%)',
            border: '1px solid rgba(201, 134, 60, 0.25)',
            borderRadius: '24px',
            padding: 'clamp(28px, 5vw, 48px)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), inset 0 1px 1px rgba(255, 235, 175, 0.15)',
            backdropFilter: 'blur(16px)',
          }}
        >
          {/* Main Story Paragraphs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', fontSize: '1.08rem', lineHeight: '1.8', color: 'rgba(255, 244, 234, 0.88)' }}>
            <p style={{ fontSize: '1.18rem', fontWeight: '500', color: '#fff4ea' }}>
              <strong>The Brownie Hub</strong> is a small dream started by four MBA students with a big love for brownies. What began as an idea among friends has now turned into our very own online brownie shop, where we bring freshly baked, rich, and delicious brownies straight to you.
            </p>

            <p>
              We believe that a great brownie should be <span style={{ color: '#e8b66e', fontWeight: '600' }}>fresh, rich, indulgent, and made with care</span>. That’s why every brownie we prepare is freshly baked with attention to taste, quality, and hygiene. From the first bite to the last, we want every box to feel like a little moment of happiness.
            </p>

            <p>
              And the best part? You don’t have to spend a fortune to enjoy a delicious brownie. We keep our prices affordable because we want everyone to experience the joy of a freshly baked, premium-tasting brownie.
            </p>

            {/* Quote Pill / Banner */}
            <div
              style={{
                marginTop: '12px',
                padding: '20px 24px',
                background: 'rgba(201, 134, 60, 0.08)',
                borderLeft: '4px solid #e8b66e',
                borderRadius: '0 16px 16px 0',
              }}
            >
              <p style={{ fontStyle: 'italic', fontSize: '1.15rem', color: '#f7d58b', margin: 0, fontWeight: '500' }}>
                &ldquo;Freshly baked. Richly made. Happily shared.&rdquo;
              </p>
              <p style={{ margin: '8px 0 0', fontSize: '0.95rem', color: 'rgba(255, 244, 234, 0.75)' }}>
                We are just getting started, but our passion is already baked into every brownie we make. ❤️
              </p>
            </div>

            {/* Feature Highlights Row */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '16px',
                marginTop: '20px',
                paddingTop: '24px',
                borderTop: '1px solid rgba(201, 134, 60, 0.15)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '1.6rem' }}>🎓</span>
                <div>
                  <h4 style={{ margin: 0, fontSize: '0.98rem', color: '#fff4ea', fontWeight: '600' }}>4 MBA Students</h4>
                  <p style={{ margin: 0, fontSize: '0.82rem', color: 'rgba(255, 244, 234, 0.65)' }}>Dream turned to reality</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '1.6rem' }}>🛵</span>
                <div>
                  <h4 style={{ margin: 0, fontSize: '0.98rem', color: '#fff4ea', fontWeight: '600' }}>Baked Daily Fresh</h4>
                  <p style={{ margin: 0, fontSize: '0.82rem', color: 'rgba(255, 244, 234, 0.65)' }}>Hygiene &amp; perfection</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '1.6rem' }}>💸</span>
                <div>
                  <h4 style={{ margin: 0, fontSize: '0.98rem', color: '#fff4ea', fontWeight: '600' }}>Affordable Luxury</h4>
                  <p style={{ margin: 0, fontSize: '0.82rem', color: 'rgba(255, 244, 234, 0.65)' }}>Starting at only ₹69</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '1.6rem' }}>🍫</span>
                <div>
                  <h4 style={{ margin: 0, fontSize: '0.98rem', color: '#fff4ea', fontWeight: '600' }}>Pure Indulgence</h4>
                  <p style={{ margin: 0, fontSize: '0.82rem', color: 'rgba(255, 244, 234, 0.65)' }}>100% Belgian Chocolate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

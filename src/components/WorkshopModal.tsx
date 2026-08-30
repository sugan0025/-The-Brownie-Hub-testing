'use client';

import React from 'react';

export default function WorkshopModal() {
  return (
    <>
      <div className="modal-overlay" id="workshop-modal-overlay"></div>
      <div
        className="modal-dialog"
        id="workshop-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="workshop-modal-title"
      >
        <button className="modal-close-btn" id="workshop-modal-close-btn" aria-label="Close Modal">
          ✕
        </button>

        {/* Step 1: Reservation Form */}
        <div id="workshop-form-step">
          <div style={{ marginBottom: '20px' }}>
            <span className="section-eyebrow mono-font" id="workshop-modal-badge">Baking Masterclass</span>
            <h3 id="workshop-modal-title" style={{ fontSize: '1.6rem', fontFamily: 'var(--font-heading)', color: 'var(--cream)' }}>Reserve Your Kitchen Seat</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--cream-muted)' }}>
              Join our small-batch hands-on masterclass in Chennai. Limited to 6–8 seats per batch.
            </p>
          </div>

          <form id="workshop-booking-form">
            <input type="hidden" id="ws-input-id" name="workshop_id" value="brownie-basics" />
            <input type="hidden" id="ws-input-name" name="workshop_name" value="Brownie Basics" />
            <input type="hidden" id="ws-input-unit-price" value="1499" />
            
            {/* Honeypot */}
            <input
              type="text"
              name="b_website"
              id="ws-b-website"
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="form-group">
              <label htmlFor="ws-select-slot">Select Batch Date & Time *</label>
              <select id="ws-select-slot" name="selected_slot" required>
                <option value="2026-09-05 (10:30 AM – 12:30 PM)">Saturday, Sep 5 — 10:30 AM to 12:30 PM (3 seats left)</option>
                <option value="2026-09-06 (03:30 PM – 05:30 PM)">Sunday, Sep 6 — 03:30 PM to 05:30 PM (5 seats left)</option>
                <option value="2026-09-12 (10:30 AM – 12:30 PM)">Saturday, Sep 12 — 10:30 AM to 12:30 PM (6 seats left)</option>
              </select>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '12px' }}>
              <div className="form-group">
                <label htmlFor="ws-seats-count">Number of Seats *</label>
                <select id="ws-seats-count" name="seats">
                  <option value="1">1 Seat (Solo Chef)</option>
                  <option value="2">2 Seats (Duo / Couple)</option>
                  <option value="3">3 Seats</option>
                  <option value="4">4 Seats (Group)</option>
                </select>
              </div>

              <div className="form-group">
                <label>Total Fee</label>
                <div
                  className="mono-font"
                  id="ws-calculated-total"
                  style={{
                    padding: '12px 14px',
                    background: 'rgba(253, 245, 232, 0.05)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: 'var(--radius-sm)',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    color: 'var(--caramel-bright)',
                  }}
                >
                  ₹1,499
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="ws-attendee-name">Attendee Name *</label>
              <input
                type="text"
                id="ws-attendee-name"
                name="attendee_name"
                required
                placeholder="Your Full Name"
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div className="form-group">
                <label htmlFor="ws-attendee-phone">WhatsApp Number *</label>
                <input
                  type="tel"
                  id="ws-attendee-phone"
                  name="attendee_phone"
                  required
                  placeholder="For ticket pass"
                />
              </div>

              <div className="form-group">
                <label htmlFor="ws-attendee-email">Email Address *</label>
                <input
                  type="email"
                  id="ws-attendee-email"
                  name="attendee_email"
                  required
                  placeholder="For recipe guide"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="ws-notes">Dietary Preference or Questions</label>
              <input
                type="text"
                id="ws-notes"
                name="special_notes"
                placeholder="e.g. 100% Eggless workstation required"
              />
            </div>

            {/* UPI QR Display for Workshop Fee */}
            <div className="upi-qr-box">
              <div style={{ fontSize: '0.82rem', color: 'var(--cream-muted)', marginBottom: '6px' }}>
                Workshop Fee Payment via UPI:
              </div>
              <div className="mono-font" style={{ fontWeight: 700, color: 'var(--caramel-bright)', fontSize: '0.9rem' }}>
                thebrowniehub@upi
              </div>
              <span style={{ fontSize: '0.72rem', color: 'var(--cream-subtle)' }}>
                Seat confirmed instantly upon WhatsApp verification
              </span>
            </div>

            <button
              type="submit"
              className="btn-gold magnetic-btn"
              id="ws-submit-btn"
              style={{ width: '100%', marginTop: '8px' }}
            >
              Reserve Seat & Get WhatsApp Pass
            </button>
          </form>
        </div>

        {/* Step 2: Success Pass Confirmation */}
        <div id="workshop-success-step" style={{ display: 'none', textAlign: 'center', padding: '20px 0' }}>
          <div style={{ fontSize: '3.5rem', marginBottom: '14px' }}>🎟️</div>
          <span className="section-eyebrow mono-font">Seat Reserved Successfully</span>
          <h3 style={{ fontSize: '1.75rem', marginBottom: '8px', fontFamily: 'var(--font-heading)', color: 'var(--cream)' }}>You&apos;re Booked for the Masterclass!</h3>
          <p style={{ fontSize: '0.92rem', color: 'var(--cream-muted)', maxWidth: '400px', margin: '0 auto 18px' }}>
            We have reserved your apron and workstation. Your confirmation pass is ready.
          </p>

          <div
            style={{
              background: 'rgba(253, 245, 232, 0.04)',
              border: '2px dashed var(--caramel)',
              borderRadius: 'var(--radius-md)',
              padding: '18px',
              maxWidth: '380px',
              margin: '0 auto 24px',
              textAlign: 'left',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.82rem', color: 'var(--cream-muted)' }}>Booking ID:</span>
              <strong className="mono-font" style={{ color: 'var(--caramel-bright)' }} id="ws-success-id">TBH-WS-000000</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.82rem', color: 'var(--cream-muted)' }}>Workshop:</span>
              <strong style={{ color: 'var(--cream)' }} id="ws-success-workshop">Brownie Basics</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '0.82rem', color: 'var(--cream-muted)' }}>Seats:</span>
              <strong style={{ color: 'var(--cream)' }} id="ws-success-seats">1 Seat</strong>
            </div>
          </div>

          <a
            href="#"
            id="ws-whatsapp-pass-link"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold magnetic-btn"
            style={{ display: 'inline-flex' }}
          >
            💬 Receive Workshop Ticket Pass on WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}

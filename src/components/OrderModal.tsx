export default function OrderModal() {
  return (
    <div className="modal-overlay" id="order-modal-overlay">
      <div className="modal glass-card" id="order-modal" data-lenis-prevent="true">
        <button className="modal-close" id="order-modal-close" aria-label="Close order modal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
        <h3 className="form-title">Complete Your Order</h3>
        <p className="modal-subtitle">We'll prepare your freshly baked items with love.</p>
        <form className="contact-form" id="order-form">
          {/* Anti-spam Honeypot */}
          <input
            type="text"
            name="b_website"
            id="order-hp"
            className="hp-field"
            tabIndex={-1}
            autoComplete="off"
            style={{ display: "none" }}
          />

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
            <input type="text" id="order-pincode" className="form-input" placeholder=" " required />
            <label htmlFor="order-pincode" className="form-label">Pincode (e.g. 638401)</label>
          </div>

          <div className="form-group">
            <textarea id="order-notes" className="form-input form-textarea" placeholder=" " rows={2}></textarea>
            <label htmlFor="order-notes" className="form-label">Special Instructions (Optional)</label>
          </div>
          <div className="order-summary-box" id="order-summary-box"></div>
          <button type="submit" className="btn btn-primary btn-full" id="submit-order-btn">
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

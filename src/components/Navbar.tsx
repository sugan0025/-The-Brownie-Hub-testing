export default function Navbar() {
  return (
    <>
      <nav id="main-nav" className="navbar">
        <div className="nav-container">
          <a href="/" className="nav-brand" id="nav-home-link">
            <img src="/images/logo.jpeg" alt="The Rolling Oven" className="nav-logo" />
            <span className="nav-brand-text">The Rolling Oven</span>
          </a>
          <ul className="nav-links">
            <li><a href="/#hero" className="nav-link active" data-nav="home">Home</a></li>
            <li><a href="/#showcase" className="nav-link" data-nav="bakes">Our Bakes</a></li>
            <li><a href="/#about" className="nav-link" data-nav="about">About</a></li>
            <li><a href="/#contact" className="nav-link" data-nav="contact">Contact</a></li>
          </ul>
          <button className="nav-cta" id="nav-order-btn" style={{ display: 'none' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            <span>Order Now</span>
            <span className="cart-badge" id="cart-badge" style={{ display: 'none' }}>0</span>
          </button>
          <button className="mobile-menu-btn" id="mobile-menu-btn" aria-label="Toggle menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      {/* ===== MOBILE MENU OVERLAY ===== */}
      <div className="mobile-menu-overlay" id="mobile-menu-overlay">
        <ul className="mobile-nav-links">
          <li><a href="/#hero" className="mobile-nav-link">Home</a></li>
          <li><a href="/#showcase" className="mobile-nav-link">Our Bakes</a></li>
          <li><a href="/#about" className="mobile-nav-link">About</a></li>
          <li><a href="/#contact" className="mobile-nav-link">Contact</a></li>
        </ul>
      </div>
    </>
  );
}

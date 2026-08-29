export default function HeroSection() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-glow hero-glow-1"></div>
      <div className="hero-glow hero-glow-2"></div>
      <div className="hero-glow hero-glow-3"></div>
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          <span>Freshly Baked Daily</span>
        </div>
        <img src="/images/logo.jpeg" alt="The Rolling Oven Logo" className="hero-logo" />
        <h1 className="hero-title">
          <span className="title-line">Your Cravings,</span>
          <span className="title-line title-accent">Our Creations</span>
        </h1>
        <p className="hero-subtitle">
          Freshly baked treats, made with love — crafted from the finest ingredients, delivered with warmth straight from our oven to your table.
        </p>
        <div className="hero-actions">
          <a href="#showcase" className="btn btn-primary" id="explore-btn">
            <span>Explore Our Bakes</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
          <a href="#about" className="btn btn-glass" id="story-btn">
            <span>Our Story</span>
          </a>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number" data-target="500">0</span><span className="stat-suffix">+</span>
            <span className="stat-label">Happy Customers</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number" data-target="50">0</span><span className="stat-suffix">+</span>
            <span className="stat-label">Unique Recipes</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number" data-target="7">0</span>
            <span className="stat-label">Categories</span>
          </div>
        </div>
      </div>
      <div className="scroll-indicator" id="scroll-indicator">
        <span>Scroll to explore</span>
        <div className="scroll-arrow">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}

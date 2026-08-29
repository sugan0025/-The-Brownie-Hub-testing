export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-visual">
          <div className="about-image-frame">
            <img src="/images/logo.jpeg" alt="The Rolling Oven Bakery Story - Fresh Baking Daily" className="about-image" loading="lazy" />
            <div className="about-frame-accent"></div>
          </div>
          <div className="about-float-card">
            <span className="float-emoji">🍰</span>
            <div>
              <strong>Est. 2026</strong>
              <span>Family Recipe</span>
            </div>
          </div>
        </div>
        <div className="about-content">
          <span className="section-tag">Our Story</span>
          <h2 className="section-title">Baked with Love, <span className="text-accent">Served with Heart</span></h2>
          <p>
            At Rolling Oven, we turn simple ingredients into delicious moments. Our menu brings together classic bakery favourites with creative new flavours. Roll in with a craving, roll out with happiness!
          </p>
          <div className="about-features">
            <div className="feature-item">
              <div className="feature-icon">🌾</div>
              <div>
                <strong>Premium Ingredients</strong>
                <span>Locally sourced, always fresh</span>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🏠</div>
              <div>
                <strong>Home Baked</strong>
                <span>Made in small batches daily</span>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">💝</div>
              <div>
                <strong>Made with Love</strong>
                <span>Every creation is special</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

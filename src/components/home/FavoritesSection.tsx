export default function FavoritesSection() {
  return (
    <section id="products" className="products-section">
      <div className="section-header">
        <span className="section-tag">Menu Highlights</span>
        <h2 className="section-title">Today's <span className="text-accent">Favorites</span></h2>
      </div>
      <div className="carousel-wrapper">
        <button className="carousel-btn carousel-prev" id="carousel-prev" aria-label="Previous product">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        <div className="carousel-stage" id="carousel-stage" suppressHydrationWarning></div>
        <button className="carousel-btn carousel-next" id="carousel-next" aria-label="Next product">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>
    </section>
  );
}

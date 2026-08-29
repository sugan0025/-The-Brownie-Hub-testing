export default function ShowcaseSection() {
  return (
    <section id="showcase" className="showcase-section">
      <div className="section-header">
        <span className="section-tag">Our Signature Collection</span>
        <h2 className="section-title">Handcrafted with <span className="text-accent">Passion</span></h2>
        <p className="section-desc">
          Each creation tells a story of dedication, quality ingredients, and the art of baking perfected over generations.
        </p>
      </div>
      <div className="category-row" id="category-row" suppressHydrationWarning></div>
    </section>
  );
}

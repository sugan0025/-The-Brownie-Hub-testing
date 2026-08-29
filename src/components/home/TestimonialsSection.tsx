export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="section-header">
        <span className="section-tag">Customer Love</span>
        <h2 className="section-title">What Our <span className="text-accent">Customers</span> Say</h2>
      </div>
      <div className="testimonials-track">
        <div className="testimonial-card">
          <div className="testimonial-stars">★★★★★</div>
          <p className="testimonial-text">
            "The chocolate cake was absolutely divine! Every layer was perfection. My family couldn't stop raving about it."
          </p>
          <div className="testimonial-author">
            <div className="author-avatar">J</div>
            <div>
              <strong>Joheesvara</strong>
              <span>Regular Customer</span>
            </div>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-stars">★★★★★</div>
          <p className="testimonial-text">
            "The croissants are flaky, buttery perfection. Better than anything I've had in a café. Absolutely recommend!"
          </p>
          <div className="testimonial-author">
            <div className="author-avatar">A</div>
            <div>
              <strong>Asvika</strong>
              <span>Gift Orders</span>
            </div>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-stars">★★★★★</div>
          <p className="testimonial-text">
            "Best cupcakes in the city! The red velvet is to die for. I order them for every celebration now."
          </p>
          <div className="testimonial-author">
            <div className="author-avatar">L</div>
            <div>
              <strong>Lakshmi Shankar</strong>
              <span>Birthday Orders</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

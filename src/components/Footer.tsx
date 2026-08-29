export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <img src="/images/logo.jpeg" alt="The Rolling Oven Bakery Logo" className="footer-logo" loading="lazy" />
          <p className="footer-tagline">Your Cravings, Our Creations</p>
          <p className="footer-desc">
            Sathyamangalam, Erode, Tamil Nadu<br />
            therollingoven26@gmail.com
          </p>
        </div>
        <div className="footer-links-group">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="/" className="footer-nav-link">Home</a></li>
            <li><a href="/#showcase" className="footer-nav-link">Our Bakes</a></li>
            <li><a href="/#about" className="footer-nav-link">About Us</a></li>
            <li><a href="/#contact" className="footer-nav-link">Contact</a></li>
          </ul>
        </div>
        <div className="footer-links-group">
          <h4 className="footer-heading">Our Bakes</h4>
          <ul className="footer-links">
            <li><a href="/category/cupcakes" className="footer-nav-link">Cupcakes</a></li>
            <li><a href="/category/cookies" className="footer-nav-link">Cookies</a></li>
            <li><a href="/category/muffins" className="footer-nav-link">Muffins</a></li>
            <li><a href="/category/croissants" className="footer-nav-link">Croissants</a></li>
            <li><a href="/category/donuts" className="footer-nav-link">Donuts</a></li>
            <li><a href="/category/chocolava" className="footer-nav-link">Chocolava</a></li>
            <li><a href="/category/tiramisu" className="footer-nav-link">Tiramisu</a></li>
          </ul>
        </div>
        <div className="footer-links-group">
          <h4 className="footer-heading">Hours</h4>
          <ul className="footer-links footer-hours">
            <li><span>Mon - Sat</span><span>9 AM – 8 PM</span></li>
            <li><span>Sunday</span><span>10 AM – 6 PM</span></li>
            <li><span>Orders</span><span>Fresh Daily</span></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 The Rolling Oven. All rights reserved. Made with ❤️ in Tamil Nadu</p>
      </div>
    </footer>
  );
}

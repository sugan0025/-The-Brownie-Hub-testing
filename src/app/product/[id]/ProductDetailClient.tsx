'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BrownieItem, CuratedBox } from '../../../lib/products';

interface Props {
  product: BrownieItem | CuratedBox;
  isBox: boolean;
  relatedItems: BrownieItem[];
}

export default function ProductDetailClient({ product, isBox, relatedItems }: Props) {
  const [qty, setQty] = useState(1);
  const [addedAnimation, setAddedAnimation] = useState(false);

  const price = product.price;
  const totalPrice = price * qty;
  const isVeg = product.dietary === 'veg';

  const brownie = !isBox ? (product as BrownieItem) : null;
  const box = isBox ? (product as CuratedBox) : null;

  const handleMinus = () => {
    if (qty > 1) setQty(qty - 1);
  };

  const handlePlus = () => {
    if (qty < 20) setQty(qty + 1);
  };

  const handleAddToCart = () => {
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 800);

    // Call window.tbhAddToCart exposed by main.js, or dispatch event
    if (typeof (window as any).tbhAddToCart === 'function') {
      for (let i = 0; i < qty; i++) {
        (window as any).tbhAddToCart(
          product.name,
          product.price,
          box ? box.includes : null,
          isBox,
          product.image
        );
      }
      // Open cart drawer
      const drawer = document.getElementById('cart-drawer');
      const overlay = document.getElementById('cart-overlay');
      if (drawer) drawer.classList.add('open');
      if (overlay) overlay.classList.add('open');
    } else {
      // Fallback: trigger cart button directly
      const btn = document.createElement('button');
      btn.className = 'add-cart-btn';
      btn.dataset.name = product.name;
      btn.dataset.price = String(product.price);
      btn.dataset.image = product.image;
      btn.dataset.isBox = String(isBox);
      btn.style.display = 'none';
      document.body.appendChild(btn);
      btn.click();
      btn.remove();
    }
  };

  const handleWhatsAppOrder = () => {
    const utmStored = typeof window !== 'undefined' ? localStorage.getItem('tbh_utm_params') : null;
    let utmSource = 'website_product_page';
    if (utmStored) {
      try {
        const p = JSON.parse(utmStored);
        if (p.utm_source) utmSource = p.utm_source;
      } catch (e) {}
    }

    const msg =
      `🍫 *DIRECT ORDER: ${product.name.toUpperCase()}*\n` +
      `------------------------------------\n` +
      `• *Item:* ${product.name}\n` +
      `• *Quantity:* ${qty}\n` +
      `• *Price:* ₹${totalPrice}\n` +
      `• *Delivery:* Chennai, Tamil Nadu\n` +
      `• *Ref:* UTM_Source=${utmSource}\n` +
      `------------------------------------\n` +
      `Please confirm my order & send payment details!`;

    window.open(`https://wa.me/917200015490?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <>
      <div className="product-showcase-grid">
        {/* ─── LEFT: Product Visual Showcase ─── */}
        <div className="product-visual-column">
          <div className="product-hero-image-card glass-card">
            <img src={product.image} alt={product.name} className="product-main-photo" />
            <div className="brownie-shimmer-overlay" aria-hidden="true"></div>

            {product.badge && <span className="product-badge-ribbon">{product.badge}</span>}

            <div className="product-dietary-badge glass-card">
              <span className={`dietary-dot ${isVeg ? 'veg' : 'nonveg'}`}></span>
              <span>{isVeg ? '100% Eggless' : 'Contains Farm Egg'}</span>
            </div>
          </div>

          {/* Quick Assurance Badges */}
          <div className="product-perks-row">
            <div className="product-perk-item glass-card">
              <span className="perk-icon">🛵</span>
              <span>60-90 Min Chennai Delivery</span>
            </div>
            <div className="product-perk-item glass-card">
              <span className="perk-icon">🍫</span>
              <span>Belgian Couverture</span>
            </div>
            <div className="product-perk-item glass-card">
              <span className="perk-icon">❄️</span>
              <span>7-Day Refrigerated Shelf Life</span>
            </div>
          </div>
        </div>

        {/* ─── RIGHT: Product Intel & Purchase Actions ─── */}
        <div className="product-details-column glass-card">
          <div className="product-header-block">
            <h1 className="product-detail-title">{product.name}</h1>
            <p className="product-detail-tagline">{product.tagline}</p>

            <div className="product-rating-row">
              <div className="rating-stars-badge">
                <span className="star-icon">★</span>
                <span className="star-icon">★</span>
                <span className="star-icon">★</span>
                <span className="star-icon">★</span>
                <span className="star-icon">★</span>
                <span className="rating-score-num">4.9/5</span>
              </div>
              <span className="review-count-text">(184 verified reviews in Chennai)</span>
            </div>
          </div>

          <div className="product-price-block">
            <span className="product-currency">₹</span>
            <span className="product-price-number mono-font">{product.price}</span>
            <span className="product-piece-unit">/ {isBox ? `${box?.pieceCount} pieces` : 'square (approx 85g)'}</span>
          </div>

          <p className="product-detail-desc">{product.description}</p>

          {/* Ingredients & Flavor Profile */}
          {brownie && (
            <div className="product-attributes-box">
              <div className="attribute-line">
                <strong className="attr-label">Tasting Notes:</strong>
                <span className="attr-value">{brownie.flavorNotes}</span>
              </div>
              <div className="attribute-line">
                <strong className="attr-label">Ingredients:</strong>
                <span className="attr-value">{brownie.ingredients}</span>
              </div>
              <div className="attribute-line">
                <strong className="attr-label">Serving Suggestion:</strong>
                <span className="attr-value">Warm in microwave for 15 seconds for a decadent molten center. Serve with vanilla bean gelato.</span>
              </div>
            </div>
          )}

          {box && (
            <div className="product-attributes-box">
              <div className="attribute-line">
                <strong className="attr-label">Box Includes:</strong>
                <div className="box-includes-chips">
                  {box.includes.map((inc, i) => (
                    <span key={i} className="box-include-chip glass-card">{inc}</span>
                  ))}
                </div>
              </div>
              <div className="attribute-line">
                <strong className="attr-label">Packaging:</strong>
                <span className="attr-value">Luxury rigid magnetic keepsake box finished with hand-tied golden satin ribbon.</span>
              </div>
            </div>
          )}

          {/* Quantity & CTA Row */}
          <div className="product-action-section">
            <div className="product-stepper-wrap">
              <span className="stepper-label">Quantity:</span>
              <div className="product-pill-stepper glass-card">
                <button className="stepper-btn" onClick={handleMinus} aria-label="Decrease quantity">−</button>
                <span className="stepper-count mono-font">{qty}</span>
                <button className="stepper-btn" onClick={handlePlus} aria-label="Increase quantity">+</button>
              </div>
            </div>

            <div className="product-buttons-row">
              <button
                className={`btn-gold product-add-cart-btn magnetic-btn ${addedAnimation ? 'pulse-gold' : ''}`}
                onClick={handleAddToCart}
                id="product-detail-add-btn"
              >
                <span>Add to Box &bull; ₹{totalPrice}</span>
                <span className="arrow-icon">&rarr;</span>
              </button>

              <button
                className="btn-whatsapp-detail magnetic-btn"
                onClick={handleWhatsAppOrder}
                id="product-detail-wa-btn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z" />
                </svg>
                <span>Instant 1-Click WhatsApp Order</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ─── BOTTOM: Frequently Paired With ─── */}
      <div className="product-related-section">
        <div className="related-section-header">
          <span className="section-eyebrow">&mdash; PAIR WITH &mdash;</span>
          <h3 className="related-section-title">You Might Also Love</h3>
        </div>

        <div className="related-cards-grid">
          {relatedItems.map((rel) => (
            <div key={rel.id} className="bestseller-card glass-card tilt-card">
              <Link href={`/product/${rel.id}`} className="bestseller-img-container">
                <img src={rel.image} alt={rel.name} loading="lazy" />
                {rel.badge && <span className="bestseller-badge-gold">{rel.badge}</span>}
              </Link>
              <div className="bestseller-card-info">
                <Link href={`/product/${rel.id}`} style={{ textDecoration: 'none' }}>
                  <h4 className="bestseller-product-name">{rel.name}</h4>
                </Link>
                <p className="bestseller-product-desc">{rel.tagline}</p>
                <div className="bestseller-price-row">
                  <span className="bestseller-product-price">₹{rel.price}</span>
                  <Link href={`/product/${rel.id}`} className="btn-gold btn-sm" style={{ padding: '6px 14px', fontSize: '0.78rem' }}>
                    View &rarr;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

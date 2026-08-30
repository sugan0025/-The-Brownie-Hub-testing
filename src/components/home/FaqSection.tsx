'use client';

import React from 'react';

export default function FaqSection() {
  const faqs = [
    {
      q: 'How long do your brownies stay fresh & how should I store them?',
      a: 'Our brownies stay moist and fresh for up to 7 days at cool room temperature in an airtight box, or up to 14 days refrigerated. Pro tip: Microwave any brownie for 10–15 seconds before eating for molten, oven-fresh gooeyness!',
    },
    {
      q: 'Are the veg (eggless) brownies prepared separately?',
      a: 'Yes, 100%! We maintain dedicated bowls, whisks, and baking trays for our 100% Eggless line. Every box is sealed with official green/brown dietary security labels.',
    },
    {
      q: 'Where do you deliver in Chennai & what are the delivery times?',
      a: 'We deliver all across Chennai including Adyar, OMR, Velachery, T. Nagar, Anna Nagar, Nungambakkam, Kilpauk, and surrounding suburbs. Orders placed before 4:00 PM are baked and dispatched the very same day.',
    },
    {
      q: 'Do I need prior baking experience to attend your workshops?',
      a: 'Not at all! "Brownie Basics" and "Kids & Family Baking" are designed from scratch for absolute beginners. We provide all ingredients, aprons, tools, and step-by-step guidance. You take home what you bake.',
    },
    {
      q: 'Do you offer custom corporate gifting or bulk event orders?',
      a: 'Yes! We customize magnetic gift boxes with your corporate logo, custom sleeves, and bespoke ribboning for festive gifting (Diwali, New Year) and weddings. Message us on WhatsApp for bulk pricing tier catalogs.',
    },
  ];

  return (
    <section className="faq-section" id="faq" data-reveal>
      <div className="wrap">
        <div className="sec-head center" data-reveal>
          <span className="section-eyebrow">GOT QUESTIONS?</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-desc">Everything you need to know about our fresh bake batches, delivery, and kitchen masterclasses.</p>
        </div>

        <div className="faq-grid">
          {faqs.map((faq, i) => (
            <div className={`faq-item glass-card ${i === 0 ? 'open' : ''}`} key={i} data-reveal data-reveal-delay={i * 80}>
              <div className="faq-question">
                <span>{faq.q}</span>
                <svg className="faq-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
              <div className="faq-answer">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

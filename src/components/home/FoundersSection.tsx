import React from 'react';

export default function FoundersSection() {
  const founders = [
    {
      initials: 'SK',
      name: 'Chef Sugan',
      role: 'Head Pastry Alchemist & Founder',
      bio: 'Obsessed with cocoa emulsion, fat crystallization, and creating the ultimate zero-compromise eggless fudge recipe.',
    },
    {
      initials: 'AR',
      name: 'Ananya Ramesh',
      role: 'Master of Swirls & Quality',
      bio: 'Leads our artisanal caramel reductions, stuffed cores, and ensures zero batch leaves the oven without perfect crinkle.',
    },
    {
      initials: 'DK',
      name: 'Dinesh Kumar',
      role: 'Kitchen Operations & Sourcing',
      bio: 'Procures single-origin Belgian couverture, pasture-raised eggs, and manages hyper-fresh pan-Chennai deliveries.',
    },
    {
      initials: 'MR',
      name: 'Meera Raghavan',
      role: 'Workshop Lead & Community',
      bio: 'Brings kitchen magic to life in our weekend masterclasses, teaching baking science with warmth and joyful clarity.',
    },
  ];

  return (
    <section id="founders" className="founders-section" data-reveal>
      <div className="wrap">
        <div className="sec-head center" data-reveal>
          <span className="section-eyebrow">WHO&apos;S BEHIND THE OVEN</span>
          <h2 className="section-title">The Founders</h2>
          <p className="section-desc">Four people, one kitchen in Chennai, and a shared habit of not stopping at &ldquo;good enough.&rdquo;</p>
        </div>

        <div className="founders-grid">
          {founders.map((founder, i) => (
            <div className="founder-card glass-card tilt-card" key={i} data-reveal data-reveal-delay={i * 100}>
              <div className="founder-avatar-circle glass-card">
                <span>{founder.initials}</span>
              </div>
              <h4 className="founder-name">{founder.name}</h4>
              <div className="founder-role">{founder.role}</div>
              <p className="founder-bio">{founder.bio}</p>
            </div>
          ))}
        </div>

        <div className="artisanal-promise-banner" data-reveal>
          <div>
            <h3 className="artisanal-promise-title">Our Artisanal Promise</h3>
            <p className="artisanal-promise-desc">
              We never use compound chocolate, vegetable oil fillers, or artificial essence.
              Every batch is baked with pure butter, Belgian cocoa, and genuine passion.
            </p>
          </div>
          <a href="#menu" className="btn-gold magnetic-btn">
            Taste the Difference &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}

import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { CATEGORIES, CATEGORY_SLUGS, getCategoryBySlug } from '../../../lib/products';

// Pre-render all 7 category pages at build time (SSG)
export function generateStaticParams() {
  return CATEGORY_SLUGS.map((slug) => ({ slug }));
}

// Dynamic SEO metadata for each category
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};

  const priceRange = `₹${Math.min(...category.items.map(i => i.price))} – ₹${Math.max(...category.items.map(i => i.price))}`;

  const categoryKeywords: Record<string, string[]> = {
    cupcakes: [
      "Cupcakes Sathyamangalam", "Best cupcakes Erode", "Red velvet cupcakes Tamil Nadu",
      "Vanilla buttercream cupcakes", "Chocolate cupcakes delivery", "Custom birthday cupcakes",
      "Eggless cupcakes Sathyamangalam", "Online cupcake order Erode"
    ],
    cookies: [
      "Cookies Sathyamangalam", "Chocolate chip cookies Erode", "Butter cookies Tamil Nadu",
      "Shortbread cookies", "Almond macaroons Erode", "Fresh baked cookies near me",
      "Homemade cookies Sathyamangalam"
    ],
    muffins: [
      "Blueberry muffins Sathyamangalam", "Chocolate chip muffins Erode", "Banana nut muffin Tamil Nadu",
      "Fresh breakfast muffins", "Bakery muffins near me"
    ],
    donuts: [
      "Donuts Sathyamangalam", "Glazed donuts Erode", "Chocolate frosted donuts Tamil Nadu",
      "Strawberry donuts", "Fresh donuts near me", "Donut delivery Erode"
    ],
    chocolava: [
      "Chocolate lava cake Sathyamangalam", "Molten choco lava Erode", "Dark chocolate lava cake Tamil Nadu",
      "Warm dessert delivery", "Best lava cake near me"
    ],
    tiramisu: [
      "Tiramisu dessert Sathyamangalam", "Classic Italian tiramisu Erode", "Coffee mascarpone dessert Tamil Nadu",
      "Authentic tiramisu cup", "Gourmet desserts Sathyamangalam"
    ],
    croissants: [
      "Butter croissants Sathyamangalam", "French croissants Erode", "Chocolate croissants Tamil Nadu",
      "Pistachio cream croissant", "Fresh laminated pastries Erode"
    ]
  };

  const specificKeywords = categoryKeywords[slug] || [];

  return {
    title: `${category.name} — Fresh ${category.name} in Sathyamangalam, Erode | The Rolling Oven`,
    description: `${category.description} Starting from ${priceRange}. Order fresh, handcrafted ${category.name.toLowerCase()} online from The Rolling Oven, Sathyamangalam, Erode, Tamil Nadu.`,
    keywords: [
      category.name,
      `${category.name} Sathyamangalam`,
      `${category.name} Erode`,
      "The Rolling Oven",
      "Homemade Bakery Tamil Nadu",
      ...specificKeywords
    ],
    alternates: {
      canonical: `https://the-rolling-oven.vercel.app/category/${slug}`,
    },
    openGraph: {
      title: `${category.name} — Handcrafted at The Rolling Oven`,
      description: `${category.tagline} Starting from ${priceRange}. Order online for delivery in Sathyamangalam & Erode.`,
      url: `https://the-rolling-oven.vercel.app/category/${slug}`,
      images: [
        {
          url: `https://the-rolling-oven.vercel.app${category.mainImage}`,
          width: 800,
          height: 600,
          alt: `${category.name} from The Rolling Oven`,
        },
      ],
    },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  // JSON-LD ItemList & Product structured data
  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${category.name} — The Rolling Oven`,
    description: category.description,
    url: `https://the-rolling-oven.vercel.app/category/${slug}`,
    numberOfItems: category.items.length,
    itemListElement: category.items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Product',
        name: item.name,
        image: `https://the-rolling-oven.vercel.app${item.image}`,
        offers: {
          '@type': 'Offer',
          price: item.price,
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
        },
      },
    })),
  };

  // JSON-LD BreadcrumbList structured data for Google Search appearance
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://the-rolling-oven.vercel.app',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Our Bakes',
        item: 'https://the-rolling-oven.vercel.app/#showcase',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: category.name,
        item: `https://the-rolling-oven.vercel.app/category/${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <main className="category-page">
        {/* ===== FROSTED PASTRY AMBIENT BACKGROUND ===== */}
        <div className="category-frosted-bg-wrapper" aria-hidden="true">
          <div
            className="category-frosted-art"
            style={{ backgroundImage: `url('${category.mainImage}')` }}
          />
          <div className="category-frosted-glass-overlay" />
        </div>

        {/* Hero Banner */}
        <section className="category-hero">
          <a href="/" className="back-btn" id="back-to-home">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
            <span>Back to Home</span>
          </a>
          <div className="category-hero-content">
            <span className="category-badge">{category.badge}</span>
            <h1>{category.name}</h1>
            <p>{category.description}</p>
          </div>
        </section>

        {/* Product Grid */}
        <section className="category-products">
          <div className="category-grid" id="category-product-grid">
            {category.items.map((item) => (
              <div className="sub-product-card" key={item.name}>
                <div className="sub-product-img-wrap">
                  <img
                    src={item.image}
                    alt={`${item.name} — Fresh ${category.name} from The Rolling Oven, Sathyamangalam`}
                    loading="lazy"
                  />
                </div>
                <div className="sub-product-body">
                  <h4>{item.name}</h4>
                  <div className="sub-product-footer">
                    <span className="sub-product-price">₹{item.price}</span>
                    <button
                      className="card-btn sub-add-btn"
                      data-name={item.name}
                      data-price={item.price}
                      data-image={item.image}
                      data-category={category.name}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Browse Other Categories */}
        <section className="category-browse">
          <h2 className="section-title">Browse More <span className="text-accent">Treats</span></h2>
          <div className="category-browse-grid">
            {CATEGORY_SLUGS.filter(s => s !== slug).map(s => {
              const cat = CATEGORIES[s];
              return (
                <a href={`/category/${s}`} className="browse-card" key={s}>
                  <img src={cat.mainImage} alt={cat.name} loading="lazy" />
                  <span>{cat.name}</span>
                </a>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}

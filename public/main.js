// ============================================
// Dear programmer:
// When I wrote this code, only God and
// I knew how it worked.
// Now, only God knows it!
//
// Therefore, if you are trying to optimize
// this routine and it fails (most surely),
// please increase this counter as a
// warning for the next person.
//
// total_hours_wasted_here = 32
// hours_of_sleep_sacrificed_to_the_oven_gods = 48
// ============================================
// THE ROLLING OVEN — Complete E-Commerce System
// Cart, Email, Product Pages, Interactions, GA4 Tracking
// ============================================

// ============================================
// PRODUCT DATA — All 7 Categories
// ============================================
const CATEGORIES = {
  cupcakes: {
    name: 'Cupcakes',
    tagline: 'Fluffy, moist, and topped with our signature buttercream swirl.',
    description: 'Our fresh cupcakes are baked fresh daily in small batches. Each flavor is crafted with premium ingredients and topped with hand-piped buttercream.',
    badge: 'Bestseller',
    mainImage: '/images/products/cupcakes/Cupcake front image.png',
    basePrice: 149,
    items: [
      { name: 'Vanilla Cupcake', image: '/images/products/cupcakes/Vanilla_Cupcake.png', price: 149 },
      { name: 'Chocolate Cupcake', image: '/images/products/cupcakes/Chocolate_Cupcake.png', price: 159 },
      { name: 'Red Velvet Cupcake', image: '/images/products/cupcakes/Red_Velvet_Cupcake.png', price: 179 },
      { name: 'Strawberry Cupcake', image: '/images/products/cupcakes/Strawberry_Cupcake.png', price: 169 },
      { name: 'Banana Cupcake', image: '/images/products/cupcakes/Banana_Cupcake.png', price: 159 },
      { name: 'Carrot Cupcake', image: '/images/products/cupcakes/Carrot_Cupcake.png', price: 169 },
      { name: 'Lemon Cupcake', image: '/images/products/cupcakes/Lemon_Cupcake.png', price: 159 },
      { name: 'Peanut Butter Cupcake', image: '/images/products/cupcakes/Peanut_Butter_Cupcake.png', price: 179 },
    ],
  },
  cookies: {
    name: 'Cookies',
    tagline: 'Crispy edges, chewy centers — cookie perfection.',
    description: 'From classic chocolate chip to gourmet macaroons, our cookies are baked to golden perfection with the finest butter and real vanilla.',
    badge: 'Popular',
    mainImage: '/images/products/cookies/Chocolate_chip_cookies.png',
    basePrice: 99,
    items: [
      { name: 'Chocolate Chip Cookies', image: '/images/products/cookies/Chocolate_chip_cookies.png', price: 99 },
      { name: 'Butter Cookies', image: '/images/products/cookies/Butter_cookies.png', price: 89 },
      { name: 'Oatmeal Raisin Cookies', image: '/images/products/cookies/Oatmeal_raisin_cookies.png', price: 99 },
      { name: 'Peanut Butter Cookies', image: '/images/products/cookies/Peanut_butter_cookies.png', price: 109 },
      { name: 'Double Chocolate Cookies', image: '/images/products/cookies/Double_chocolate_cookies.png', price: 119 },
      { name: 'M&M Cookies', image: '/images/products/cookies/M&M_cookies.png', price: 109 },
      { name: 'Snickerdoodle Cookies', image: '/images/products/cookies/Snickerdoodle_Cookie.png', price: 99 },
      { name: 'Red Velvet Cookies', image: '/images/products/cookies/Red_velvet_cookies.png', price: 119 },
      { name: 'Almond Cookies', image: '/images/products/cookies/Almond_cookies.png', price: 109 },
      { name: 'Macadamia Nut Cookies', image: '/images/products/cookies/Macadamia_nut_cookies.png', price: 129 },
      { name: 'Shortbread Cookies', image: '/images/products/cookies/Shortbread_Cookie.png', price: 89 },
      { name: 'Biscotti', image: '/images/products/cookies/Biscotti.png', price: 99 },
      { name: 'Macaroons', image: '/images/products/cookies/Macaroons.png', price: 149 },
      { name: 'Cranberry White Chocolate Cookies', image: '/images/products/cookies/Cranberry_white_chocolate_cookies.png', price: 119 },
    ],
  },
  muffins: {
    name: 'Muffins',
    tagline: 'Warm, fluffy, and bursting with flavor.',
    description: 'Our muffins are baked until golden with a perfectly domed top. Made with real fruit, premium chocolate, and fragrant spices.',
    badge: 'Fresh Daily',
    mainImage: '/images/products/muffins/Blueberry_Muffin.png',
    basePrice: 129,
    items: [
      { name: 'Blueberry Muffin', image: '/images/products/muffins/Blueberry_Muffin.png', price: 129 },
      { name: 'Chocolate Chip Muffin', image: '/images/products/muffins/Chocolate_Chip_Muffin.png', price: 139 },
      { name: 'Banana Nut Muffin', image: '/images/products/muffins/Banana_Nut_Muffin.png', price: 129 },
      { name: 'Double Chocolate Muffin', image: '/images/products/muffins/Double_Chocolate_Muffin.png', price: 149 },
      { name: 'Apple Cinnamon Muffin', image: '/images/products/muffins/Apple_Cinnamon_Muffin.png', price: 129 },
      { name: 'Lemon Poppy Seed Muffin', image: '/images/products/muffins/Lemon_Poppy_Seed_Muffin.png', price: 129 },
    ],
  },
  donuts: {
    name: 'Donuts',
    tagline: 'Glazed, frosted, and irresistibly soft.',
    description: 'Our donuts are hand-rolled and fried to airy perfection, then glazed or frosted with our signature toppings.',
    badge: 'Handmade',
    mainImage: '/images/products/donuts/Classic_Glazed_Donut.png',
    basePrice: 119,
    items: [
      { name: 'Classic Glazed Donut', image: '/images/products/donuts/Classic_Glazed_Donut.png', price: 119 },
      { name: 'Chocolate Frosted Donut', image: '/images/products/donuts/Chocolate_Frosted_Donut.png', price: 139 },
      { name: 'Strawberry Donut', image: '/images/products/donuts/Strawberry_Donut.png', price: 139 },
      { name: 'Sprinkle Donut', image: '/images/products/donuts/Sprinkle_Donut.png', price: 129 },
    ],
  },
  chocolava: {
    name: 'Chocolava',
    tagline: 'Molten chocolate magic in every bite.',
    description: 'Our signature chocolava cakes feature a rich, gooey chocolate center that flows out when you break the crust. Pure indulgence.',
    badge: 'Premium',
    badgeClass: 'premium',
    mainImage: '/images/products/chocolava/Classic_Chocolava.png',
    basePrice: 249,
    items: [
      { name: 'Classic Chocolava', image: '/images/products/chocolava/Classic_Chocolava.png', price: 249 },
      { name: 'Dark Chocolate Lava', image: '/images/products/chocolava/Dark_Chocolate_Lava_Cake.png', price: 279 },
      { name: 'White Chocolate Lava', image: '/images/products/chocolava/White_Chocolate_Lava_Cake.png', price: 269 },
    ],
  },
  tiramisu: {
    name: 'Tiramisu',
    tagline: 'Layers of coffee-soaked bliss.',
    description: 'Our tiramisu is made with mascarpone, espresso-soaked ladyfingers, and dusted with premium cocoa. An Italian classic, perfected.',
    badge: 'Signature',
    mainImage: '/images/products/tiramisu/tiramisu.png',
    basePrice: 349,
    items: [
      { name: 'Classic Tiramisu', image: '/images/products/tiramisu/tiramisu.png', price: 349 },
      { name: 'Chocolate Tiramisu', image: '/images/products/tiramisu/Chocolate_Tiramisu.png', price: 379 },
      { name: 'Mango Tiramisu', image: '/images/products/tiramisu/Mango_Tiramisu.png', price: 369 },
    ],
  },
  croissants: {
    name: 'Croissants',
    tagline: 'Flaky, buttery, and baked to golden perfection.',
    description: 'Our croissants are laminated with premium French butter, folded 27 layers for the ultimate flaky crunch.',
    badge: 'Handcrafted',
    mainImage: '/images/products/croissants/Butter_Croissant.png',
    basePrice: 149,
    items: [
      { name: 'Butter Croissant', image: '/images/products/croissants/Butter_Croissant.png', price: 149 },
      { name: 'Chocolate Croissant', image: '/images/products/croissants/Chocolate_Croissant.png', price: 179 },
      { name: 'Almond Croissant', image: '/images/products/croissants/Almond_Croissant.png', price: 189 },
      { name: 'Pistachio Croissant', image: '/images/products/croissants/Pistachio_Croissant.png', price: 199 },
      { name: 'Raspberry Croissant', image: '/images/products/croissants/Raspberry_Croissant.png', price: 189 },
      { name: 'Matcha Croissant', image: '/images/products/croissants/Matcha_Croissant.png', price: 199 },
      { name: 'Matcha Cream Croissant', image: '/images/products/croissants/Matcha_Cream_Croissant.png', price: 209 },
      { name: 'Tiramisu Croissant', image: '/images/products/croissants/Tiramisu_Croissant.png', price: 209 },
      { name: 'Berries & Cream Croissant', image: '/images/products/croissants/Berries_and_Cream_Croissant.png', price: 199 },
      { name: 'Lavender Croissant', image: '/images/products/croissants/Lavender_Croissant.png', price: 189 },
      { name: 'Garlic Butter Croissant', image: '/images/products/croissants/Garlic_Butter_Croissant.png', price: 169 },
      { name: 'Ube Croissant', image: '/images/products/croissants/Ube_Croissant.png', price: 199 },
      { name: 'Smoked Salmon Croissant', image: '/images/products/croissants/Smoked_Salmon_Croissant.png', price: 229 },
      { name: 'Gold Sprinkles Croissant', image: '/images/products/croissants/Gold_Sprinkles_Croissant.png', price: 219 },
      { name: 'Prosciutto Gruyère Croissant', image: '/images/products/croissants/Prosciutto_Gruyere_Croissant.png', price: 239 },
    ],
  },
};

// Today's Favorites picks (one from each category with real images)
const TODAYS_FAVORITES = [
  { ...CATEGORIES.cupcakes.items[2], category: 'cupcakes', categoryName: 'Cupcakes', badge: 'Bestseller', desc: 'Fluffy, moist, topped with our signature cream cheese frosting.' },
  { ...CATEGORIES.cookies.items[0], category: 'cookies', categoryName: 'Cookies', badge: 'Popular', desc: 'Classic chocolate chip with a gooey center and crispy edges.' },
  { ...CATEGORIES.muffins.items[0], category: 'muffins', categoryName: 'Muffins', badge: 'Fresh Daily', desc: 'Bursting with fresh blueberries and a golden crumbly top.' },
  { ...CATEGORIES.croissants.items[3], category: 'croissants', categoryName: 'Croissants', badge: 'Handcrafted', desc: 'Flaky buttery layers with a rich pistachio cream filling.' },
  { ...CATEGORIES.chocolava.items[0], category: 'chocolava', categoryName: 'Chocolava', badge: 'Premium', badgeClass: 'premium', desc: 'Molten chocolate center that flows out with pure indulgence.' },
  { ...CATEGORIES.tiramisu.items[0], category: 'tiramisu', categoryName: 'Tiramisu', badge: 'Signature', desc: 'Coffee-soaked mascarpone layers dusted with premium cocoa.' },
  { ...CATEGORIES.donuts.items[0], category: 'donuts', categoryName: 'Donuts', badge: 'Handmade', desc: 'Hand-rolled, fried to perfection, with our signature glaze.' },
];

// ============================================
// CART STATE (persisted in localStorage)
// ============================================
let cart = JSON.parse(localStorage.getItem('tro_cart') || '[]');

function saveCart() {
  localStorage.setItem('tro_cart', JSON.stringify(cart));
}

function updateCartBadge() {
  const badge = document.getElementById('cart-badge');
  const navBtn = document.getElementById('nav-order-btn');
  if (!badge) return;
  const total = cart.reduce((sum, item) => sum + item.qty, 0);
  if (total > 0) {
    badge.style.display = 'flex';
    badge.textContent = total;
    if (navBtn) navBtn.style.display = 'flex';
  } else {
    badge.style.display = 'none';
    if (navBtn) navBtn.style.display = 'none';
  }
}

function addToCart(name, price, image, category) {
  const existing = cart.find(item => item.name === name);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ name, price, image, category, qty: 1 });
  }
  saveCart();
  updateCartBadge();
  renderCart();

  // Google Analytics Tracking
  if (typeof gtag !== 'undefined') {
    gtag('event', 'add_to_cart', {
      currency: 'INR',
      value: price,
      items: [{ item_name: name, item_category: category, price: price, quantity: 1 }]
    });
  }

  showToast('success', 'Added to Cart!', `${name} — ₹${price}`);
}

function removeFromCart(index) {
  const item = cart[index];
  cart.splice(index, 1);
  saveCart();
  updateCartBadge();
  renderCart();

  // Google Analytics Tracking: remove_from_cart
  if (typeof gtag !== 'undefined' && item) {
    gtag('event', 'remove_from_cart', {
      currency: 'INR',
      value: item.price * item.qty,
      items: [{ item_name: item.name, item_category: item.category, price: item.price, quantity: item.qty }]
    });
  }

  showToast('error', 'Removed', `${item.name} removed from cart`);
}

function changeQty(index, delta) {
  cart[index].qty += delta;
  if (cart[index].qty <= 0) {
    removeFromCart(index);
    return;
  }
  saveCart();
  updateCartBadge();
  renderCart();
}

function getCartTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function renderCart() {
  const container = document.getElementById('cart-items');
  const emptyEl = document.getElementById('cart-empty');
  const footerEl = document.getElementById('cart-footer');
  const totalEl = document.getElementById('cart-total-price');

  if (cart.length === 0) {
    container.innerHTML = `<div class="cart-empty" id="cart-empty">
      <span class="cart-empty-icon">🧁</span>
      <p>Your cart is empty</p>
      <span class="cart-empty-sub">Add some delicious treats!</span>
    </div>`;
    footerEl.style.display = 'none';
    return;
  }

  footerEl.style.display = 'block';
  totalEl.textContent = `₹${getCartTotal()}`;

  container.innerHTML = cart.map((item, i) => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name} - Fresh Bakery Item in Tamil Nadu" loading="lazy" class="cart-item-img" />
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-category">${item.category}</div>
        <div class="cart-item-price">₹${item.price * item.qty}</div>
      </div>
      <div class="cart-item-actions">
        <div class="cart-qty-controls">
          <button class="cart-qty-btn" onclick="changeQty(${i}, -1)">−</button>
          <span class="cart-qty-num">${item.qty}</span>
          <button class="cart-qty-btn" onclick="changeQty(${i}, 1)">+</button>
        </div>
        <button class="cart-remove-btn" onclick="removeFromCart(${i})">Remove</button>
      </div>
    </div>
  `).join('');
}

// Make cart functions global
window.changeQty = changeQty;
window.removeFromCart = removeFromCart;

// ============================================
// TOAST SYSTEM
// ============================================
function showToast(type, title, message) {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');

  if (type === 'success' && title.includes('Cart')) {
    toast.className = `toast premium-toast ${type}`;
    toast.innerHTML = `
      <div class="premium-cart-anim">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="cart-svg">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        <div class="cart-item-drop">✨</div>
      </div>
      <div class="toast-text"><strong>${title}</strong><span>${message}</span></div>
    `;
  } else {
    const icons = { success: '✅', error: '❌', info: 'ℹ️' };
    toast.className = `toast ${type}`;
    toast.innerHTML = `
      <span class="toast-icon">${icons[type] || '🔔'}</span>
      <div class="toast-text"><strong>${title}</strong><span>${message}</span></div>
    `;
  }

  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3200);
}




// ============================================
// SECURE BACKEND API INTEGRATION
// ============================================
async function sendOrderEmail(orderData) {
  const payload = {
    customer_name: orderData.name,
    customer_email: orderData.email,
    customer_phone: orderData.phone,
    delivery_address: orderData.address,
    pincode: orderData.pincode,
    special_instructions: orderData.notes || 'None',
    order_type: 'Cart Checkout',
    items: orderData.items.map(i => ({ name: i.name, qty: i.qty, price: i.price })),
    total_amount: orderData.total.toString(),
    // Attach UTM Parameters if they exist in session
    utm_source: sessionStorage.getItem('utm_source') || null,
    utm_medium: sessionStorage.getItem('utm_medium') || null,
    utm_campaign: sessionStorage.getItem('utm_campaign') || null,
    // Anti-spam Honeypot
    b_website: orderData.b_website || null,
  };

  const response = await fetch('/api/order', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.error('Order API Error:', errorData);
    throw new Error('Failed to process order via API');
  }

  return response.json();
}

async function sendContactForm(formData) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });

  if (!response.ok) throw new Error('Failed to send inquiry');
  return response.json();
}

async function sendFeedback(formData) {
  const response = await fetch('/api/feedback', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });

  if (!response.ok) throw new Error('Failed to submit feedback');
  return response.json();
}

// ============================================
// RENDER SHOWCASE BELT (horizontal category row)
// ============================================
function renderShowcase() {
  const row = document.getElementById('category-row');
  if (!row) return;
  const categoryKeys = Object.keys(CATEGORIES);

  const html = categoryKeys.map(key => {
    const cat = CATEGORIES[key];
    return `
      <a href="/category/${key}" class="showcase-card">
        <div class="showcase-card-img-wrap">
          <img src="${cat.mainImage}" alt="${cat.name}" class="showcase-card-img" loading="lazy" />
        </div>
        <div class="showcase-card-name">${cat.name}</div>
      </a>
    `;
  }).join('');

  // Duplicate multiple times to ensure seamless infinite scroll even on 4K screens
  row.innerHTML = `
    <div class="marquee-group">${html}</div>
    <div class="marquee-group">${html}</div>
    <div class="marquee-group">${html}</div>
    <div class="marquee-group">${html}</div>
  `;
}

// ============================================
// RENDER TODAY'S FAVORITES (3D Carousel)
// ============================================
let currentCarouselIndex = 0;

function renderFavorites() {
  const stage = document.getElementById('carousel-stage');
  if (!stage) return;

  // We'll use all 7 favorites
  stage.innerHTML = TODAYS_FAVORITES.map((item, i) => `
    <div class="product-card" data-index="${i}">
      <div class="card-glow"></div>
      <div class="card-image-wrapper" data-category="${item.category}">
        <div class="card-badge ${item.badgeClass || ''}">${item.badge}</div>
        <img src="${item.image}" alt="${item.name} - Fresh Bakery Item in Tamil Nadu" loading="lazy" loading="lazy" />
      </div>
      <div class="card-content">
        <div class="card-category">${item.categoryName}</div>
        <h3 class="card-title">${item.name}</h3>
        <p class="card-desc">${item.desc}</p>
        <div class="card-footer">
          <span class="card-price">₹${item.price}</span>
          <button class="card-btn add-to-cart-btn"
            data-name="${item.name}"
            data-price="${item.price}"
            data-image="${item.image}"
            data-category="${item.categoryName}">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  `).join('');

  updateCarousel();

  document.getElementById('carousel-prev').addEventListener('click', () => {
    currentCarouselIndex = (currentCarouselIndex - 1 + TODAYS_FAVORITES.length) % TODAYS_FAVORITES.length;
    updateCarousel();
  });

  document.getElementById('carousel-next').addEventListener('click', () => {
    currentCarouselIndex = (currentCarouselIndex + 1) % TODAYS_FAVORITES.length;
    updateCarousel();
  });

  // Add to cart buttons
  stage.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      addToCart(btn.dataset.name, parseInt(btn.dataset.price), btn.dataset.image, btn.dataset.category);
    });
  });

  // Click image to navigate to category page (real links)
  stage.querySelectorAll('.card-image-wrapper').forEach(wrap => {
    wrap.addEventListener('click', () => {
      window.location.href = '/category/' + wrap.dataset.category;
    });
  });
}

function updateCarousel() {
  const cards = document.querySelectorAll('#carousel-stage .product-card');
  const total = cards.length;
  if (total === 0) return;

  cards.forEach(c => c.className = 'product-card'); // reset

  const centerIndex = currentCarouselIndex;
  const prevIndex = (currentCarouselIndex - 1 + total) % total;
  const nextIndex = (currentCarouselIndex + 1) % total;

  cards[centerIndex].classList.add('active');
  cards[prevIndex].classList.add('prev');
  cards[nextIndex].classList.add('next');

  // Allow clicking next/prev cards to navigate carousel
  cards[prevIndex].onclick = () => { currentCarouselIndex = prevIndex; updateCarousel(); };
  cards[nextIndex].onclick = () => { currentCarouselIndex = nextIndex; updateCarousel(); };
  cards[centerIndex].onclick = null; // center handles its own clicks (add to cart, image)
}

// ============================================
// CATEGORY PAGE — Wire up add-to-cart buttons
// ============================================
function initCategoryPage() {
  const grid = document.getElementById('category-product-grid');
  if (!grid) return;

  // Google Analytics: view_item_list
  if (typeof gtag !== 'undefined') {
    const heading = document.querySelector('.category-hero h1')?.textContent || 'Category';
    gtag('event', 'view_item_list', {
      item_list_name: heading,
    });
  }

  grid.querySelectorAll('.sub-add-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      addToCart(btn.dataset.name, parseInt(btn.dataset.price), btn.dataset.image, btn.dataset.category);
    });
  });
}

// ============================================
// PARTICLE SYSTEM
// ============================================
class ParticleSystem {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
    this.mouse = { x: 0, y: 0 };
    this.resize();
    this.init();
    window.addEventListener('resize', () => this.resize());
    window.addEventListener('mousemove', (e) => { this.mouse.x = e.clientX; this.mouse.y = e.clientY; });
  }
  resize() { this.canvas.width = window.innerWidth; this.canvas.height = window.innerHeight; }
  init() {
    const count = Math.min(60, Math.floor(window.innerWidth / 25));
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width, y: Math.random() * this.canvas.height,
        size: Math.random() * 3 + 0.5, speedX: (Math.random() - 0.5) * 0.3,
        speedY: -Math.random() * 0.4 - 0.1, opacity: Math.random() * 0.5 + 0.1,
        hue: Math.random() * 30 + 25, pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.005,
      });
    }
  }
  update() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (const p of this.particles) {
      p.x += p.speedX; p.y += p.speedY; p.pulse += p.pulseSpeed;
      const dx = this.mouse.x - p.x, dy = this.mouse.y - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 150) { p.x -= dx * 0.002; p.y -= dy * 0.002; }
      if (p.y < -10) { p.y = this.canvas.height + 10; p.x = Math.random() * this.canvas.width; }
      if (p.x < -10) p.x = this.canvas.width + 10;
      if (p.x > this.canvas.width + 10) p.x = -10;
      const curOp = p.opacity * (0.5 + 0.5 * Math.sin(p.pulse));
      const size = p.size * (0.8 + 0.2 * Math.sin(p.pulse));
      const grad = this.ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, size * 4);
      grad.addColorStop(0, `hsla(${p.hue},60%,70%,${curOp * 0.5})`);
      grad.addColorStop(1, `hsla(${p.hue},60%,70%,0)`);
      this.ctx.fillStyle = grad;
      this.ctx.beginPath(); this.ctx.arc(p.x, p.y, size * 4, 0, Math.PI * 2); this.ctx.fill();
      this.ctx.fillStyle = `hsla(${p.hue},70%,80%,${curOp})`;
      this.ctx.beginPath(); this.ctx.arc(p.x, p.y, size, 0, Math.PI * 2); this.ctx.fill();
    }
  }
  animate() { this.update(); requestAnimationFrame(() => this.animate()); }
}

// ============================================
// SCROLL & UI INTERACTIONS
// ============================================
function initScrollAnimations() {
  const navbar = document.getElementById('main-nav');
  const scrollIndicator = document.getElementById('scroll-indicator');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    navbar.classList.toggle('scrolled', scrollY > 80);
    if (scrollIndicator) scrollIndicator.style.opacity = Math.max(0, 1 - scrollY / 300);
  });

  // Active nav link & dynamic URL hash update on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          const href = link.getAttribute('href');
          if (href === `#${id}` || href === `/#${id}`) link.classList.add('active');
        });

        // Dynamically update URL hash as user scrolls without cluttering browser history
        if ((window.location.pathname === '/' || window.location.pathname === '') && window.location.hash !== `#${id}`) {
          if (id === 'hero') {
            history.replaceState(null, null, window.location.pathname);
          } else {
            history.replaceState(null, null, `#${id}`);
          }
        }
      }
    });
  }, { rootMargin: '-30% 0px -60% 0px' });
  sections.forEach(s => observer.observe(s));

  // Reveal animations
  const reveals = document.querySelectorAll('.section-header, .product-card, .about-container, .testimonial-card, .contact-container, .feature-item, .contact-method');
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('reveal', 'visible'); revealObs.unobserve(entry.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  reveals.forEach((el, i) => { el.classList.add('reveal'); el.style.transitionDelay = `${(i % 4) * 0.1}s`; revealObs.observe(el); });
}

function initStatCounters() {
  document.querySelectorAll('.stat-number[data-target]').forEach(el => {
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const target = parseInt(el.dataset.target);
        const start = performance.now();
        const animate = (now) => {
          const progress = Math.min((now - start) / 2000, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.floor(target * eased);
          if (progress < 1) requestAnimationFrame(animate); else el.textContent = target;
        };
        requestAnimationFrame(animate);
        obs.unobserve(el);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
  });
}

function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const overlay = document.getElementById('mobile-menu-overlay');
  if (!menuBtn || !overlay) return;

  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = overlay.classList.contains('active') ? 'hidden' : '';
  });

  overlay.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      menuBtn.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
      // If on product page, go home first
      if (document.getElementById('product-page').style.display !== 'none') {
        navigateHome();
      }
    });
  });
}

const BAKERY_WHATSAPP_NUMBER = '916383645415';

function getWhatsAppCartMessage(cartItems, total) {
  let text = `👋 *Hello The Rolling Oven!* I would like to place an order:\n\n`;
  text += `🧁 *Order Items:*\n`;
  cartItems.forEach(item => {
    text += `• ${item.name} × ${item.qty} (₹${item.price * item.qty})\n`;
  });
  text += `\n💰 *Total Amount:* ₹${total}\n\n`;
  text += `📍 *Delivery Area:* Sathyamangalam / Erode\n`;
  text += `Please confirm availability and delivery details!`;
  return encodeURIComponent(text);
}

function getWhatsAppCheckoutMessage(orderData) {
  let text = `👋 *Hello The Rolling Oven!* I just placed an order on your website:\n\n`;
  text += `📋 *Order Summary:*\n`;
  orderData.items.forEach(item => {
    text += `• ${item.name} × ${item.qty} (₹${item.price * item.qty})\n`;
  });
  text += `\n💰 *Total:* ₹${orderData.total}\n\n`;
  text += `👤 *Customer Details:*\n`;
  text += `• Name: ${orderData.name}\n`;
  text += `• Phone: ${orderData.phone}\n`;
  text += `• Address: ${orderData.address}\n`;
  text += `• Pincode: ${orderData.pincode}\n`;
  if (orderData.notes && orderData.notes.trim()) {
    text += `• Instructions: ${orderData.notes}\n`;
  }
  text += `\nPlease confirm my delivery time. Thank you!`;
  return encodeURIComponent(text);
}

function initCart() {
  const closeBtn = document.getElementById('cart-close-btn');
  const overlay = document.getElementById('cart-overlay');
  const sidebar = document.getElementById('cart-sidebar');

  function openCart() {
    sidebar.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function closeCart() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Cart button in nav opens cart
  const cartIconBtn = document.querySelector('.nav-cta');
  if (cartIconBtn) {
    if (cartIconBtn.querySelector('.cart-badge')) {
      cartIconBtn.addEventListener('click', (e) => {
        if (e.currentTarget.getAttribute('href') === '#') {
          e.preventDefault();
          openCart();
        }
      });
    }
  }

  window.openCart = openCart;

  closeBtn.addEventListener('click', closeCart);
  overlay.addEventListener('click', closeCart);

  // 1-Click WhatsApp Order Button in Cart (Saves to Supabase DB & Opens WhatsApp)
  const waBtn = document.getElementById('whatsapp-order-btn');
  if (waBtn) {
    waBtn.addEventListener('click', async () => {
      if (cart.length === 0) return;
      const total = getCartTotal();
      const itemsSnapshot = [...cart];
      const msg = getWhatsAppCartMessage(itemsSnapshot, total);

      const orderData = {
        name: 'WhatsApp Direct Customer',
        email: 'whatsapp-order@the-rolling-oven.com',
        phone: 'WhatsApp Order',
        address: 'Direct WhatsApp Checkout',
        pincode: '638401',
        notes: 'Order placed via 1-Click WhatsApp Button in Cart',
        b_website: null,
        items: itemsSnapshot,
        total: total,
        isDirectOrder: true
      };

      // Asynchronously log order into Supabase DB
      try {
        sendOrderEmail({
          ...orderData,
          order_type: 'WhatsApp Direct Checkout'
        });
      } catch (err) {
        console.warn('Background Supabase logging:', err);
      }

      // Google Analytics Tracking
      if (typeof gtag !== 'undefined') {
        gtag('event', 'purchase', {
          transaction_id: 'WA_' + Math.floor(Math.random() * 1000000),
          value: total,
          currency: 'INR',
          items: itemsSnapshot.map(i => ({ item_name: i.name, price: i.price, quantity: i.qty }))
        });
        gtag('event', 'whatsapp_order_click', {
          currency: 'INR',
          value: total
        });
      }

      // Clear cart & notify user
      cart = [];
      saveCart();
      updateCartBadge();
      renderCart();
      closeCart();

      showToast('success', 'Order Logged! 💬', 'Opening WhatsApp to complete your order...');
      window.open(`https://wa.me/${BAKERY_WHATSAPP_NUMBER}?text=${msg}`, '_blank');
    });
  }

  // Place order button in cart opens online checkout modal
  document.getElementById('place-order-btn').addEventListener('click', () => {
    if (cart.length === 0) return;
    closeCart();
    openOrderModal();
  });

  // Order Now button in nav opens order modal directly
  const orderBtn = document.getElementById('nav-order-btn');
  if (orderBtn) {
    orderBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openOrderModal();
    });
  }
}

function openOrderModal() {
  const overlay = document.getElementById('order-modal-overlay');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Render order summary
  const summaryBox = document.getElementById('order-summary-box');
  if (summaryBox) {
    summaryBox.style.display = 'block';
    summaryBox.innerHTML = `
      <strong style="display:block;margin-bottom:8px;color:var(--cream);">Order Summary</strong>
      ${cart.map(item => `<div class="order-line"><span>${item.name} × ${item.qty}</span><span>₹${item.price * item.qty}</span></div>`).join('')}
      <div class="order-line total"><span>Total</span><span>₹${getCartTotal()}</span></div>
    `;
  }
}

function closeOrderModal() {
  document.getElementById('order-modal-overlay').classList.remove('active');
  document.body.style.overflow = '';
}

function initOrderModal() {
  document.getElementById('order-modal-close').addEventListener('click', closeOrderModal);
  document.getElementById('order-modal-overlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeOrderModal();
  });

  document.getElementById('order-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = document.getElementById('submit-order-btn');

    // Prevent double submission immediately
    if (btn.disabled) return;
    const original = btn.innerHTML;
    btn.innerHTML = '<span>Processing Order...</span>';
    btn.disabled = true;

    // Check honeypot
    const hpVal = document.getElementById('order-hp')?.value || '';
    if (hpVal.trim().length > 0) {
      // Bot detected - simulate instant success
      closeOrderModal();
      document.getElementById('order-form').reset();
      btn.innerHTML = original;
      btn.disabled = false;
      return;
    }

    const orderData = {
      name: document.getElementById('order-name').value,
      email: document.getElementById('order-email').value,
      phone: document.getElementById('order-phone').value,
      address: document.getElementById('order-address').value,
      pincode: document.getElementById('order-pincode').value,
      notes: document.getElementById('order-notes').value,
      b_website: hpVal,
      items: [...cart],
      total: getCartTotal(),
      isDirectOrder: false
    };

    try {
      await sendOrderEmail(orderData);

      // Google Analytics Tracking
      if (typeof gtag !== 'undefined') {
        gtag('event', 'purchase', {
          transaction_id: 'ORDER_' + Math.floor(Math.random() * 1000000),
          value: orderData.total === 'TBD' ? 0 : orderData.total,
          currency: 'INR',
          items: orderData.items.map(i => ({ item_name: i.name, price: i.price, quantity: i.qty }))
        });
        gtag('event', 'generate_lead', {
          currency: 'INR',
          value: orderData.total === 'TBD' ? 0 : orderData.total
        });
      }

      cart = [];
      saveCart();
      updateCartBadge();
      renderCart();
      closeOrderModal();
      document.getElementById('order-form').reset();
      
      // Notify user & trigger WhatsApp confirmation
      showToast('success', 'Order Confirmed! 🎉', 'Opening WhatsApp to confirm delivery details with the bakery...');
      const waMsg = getWhatsAppCheckoutMessage(orderData);
      setTimeout(() => {
        window.open(`https://wa.me/${BAKERY_WHATSAPP_NUMBER}?text=${waMsg}`, '_blank');
      }, 1200);

    } catch (err) {
      console.error(err);
      showToast('error', 'Error Processing Order', 'Please try again or contact us directly on WhatsApp.');
    } finally {
      btn.innerHTML = original;
      btn.disabled = false;
    }
  });
}

function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  if (!contactForm) return;

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = document.getElementById('submit-inquiry');

    // Prevent double submission immediately
    if (btn.disabled) return;
    const original = btn.innerHTML;
    btn.innerHTML = '<span>Sending...</span>';
    btn.disabled = true;

    // Check honeypot
    const hpVal = document.getElementById('contact-hp')?.value || '';
    if (hpVal.trim().length > 0) {
      contactForm.reset();
      btn.innerHTML = original;
      btn.disabled = false;
      return;
    }

    const formData = {
      name: document.getElementById('form-name').value,
      email: document.getElementById('form-email').value,
      phone: document.getElementById('form-phone').value,
      product: document.getElementById('form-product').value,
      message: document.getElementById('form-message').value,
      b_website: hpVal,
    };

    try {
      await sendContactForm(formData);

      // Google Analytics event for inquiry
      if (typeof gtag !== 'undefined') {
        gtag('event', 'generate_lead', {
          event_category: 'Contact',
          event_label: formData.product,
        });
      }

      showToast('success', 'Inquiry Sent! ✨', 'We\'ll get back to you soon.');
      contactForm.reset();
    } catch (err) {
      console.error(err);
      showToast('error', 'Error Sending Inquiry', 'Please try again or call us directly.');
    } finally {
      btn.innerHTML = original;
      btn.disabled = false;
    }
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (!href || href === '#') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      e.preventDefault();
      try {
        const target = document.querySelector(href);
        if (target) window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
      } catch (err) { }
    });
  });
}

// ============================================
// FEEDBACK MODAL
// ============================================
function initFeedbackModal() {
  const overlay = document.getElementById('feedback-modal-overlay');
  if (!overlay) return;

  document.getElementById('open-feedback-btn')?.addEventListener('click', () => {
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  const close = () => {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  document.getElementById('feedback-modal-close')?.addEventListener('click', close);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });

  document.getElementById('feedback-form')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = document.getElementById('submit-feedback-btn');
    const original = btn.innerHTML;
    btn.innerHTML = '<span>Submitting...</span>';
    btn.disabled = true;

    const formData = {
      name: document.getElementById('feedback-name').value,
      rating: parseInt(document.getElementById('feedback-rating').value),
      message: document.getElementById('feedback-message').value
    };

    try {
      await sendFeedback(formData);
      showToast('success', 'Thank You!', 'Your review has been submitted.');
      e.target.reset();
      close();
    } catch (err) {
      console.error(err);
      showToast('error', 'Oops!', 'Something went wrong. Please try again.');
    } finally {
      btn.innerHTML = original;
      btn.disabled = false;
    }
  });
}

// ============================================
// PREMIUM ORDER SUCCESS OVERLAY
// ============================================
function showOrderSuccess(orderData) {
  // Create the full-screen overlay
  const overlay = document.createElement('div');
  overlay.id = 'order-success-overlay';
  overlay.innerHTML = `
    <div class="order-success-content">
      <div class="success-checkmark">
        <svg viewBox="0 0 52 52" class="success-svg">
          <circle class="success-circle" cx="26" cy="26" r="25" fill="none"/>
          <path class="success-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
        </svg>
      </div>
      <h2 class="success-title">Order Placed Successfully!</h2>
      <p class="success-subtitle">${orderData.isDirectOrder
      ? 'We\'ll reach out to you with pricing details shortly.'
      : `Your order of <strong>₹${orderData.total}</strong> has been confirmed.`
    }</p>
      <p class="success-detail">A confirmation email is on its way to <strong>${orderData.email}</strong></p>
      <div class="success-divider"></div>
      <p class="success-tagline">Thank you for choosing The Rolling Oven 🧁</p>
    </div>
  `;
  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';

  // Trigger entrance animation
  requestAnimationFrame(() => {
    overlay.classList.add('active');
  });

  // Auto-fade after 4 seconds
  setTimeout(() => {
    overlay.classList.add('fade-out');
    setTimeout(() => {
      overlay.remove();
      document.body.style.overflow = '';
    }, 800);
  }, 4000);

  // Click to dismiss early
  overlay.addEventListener('click', () => {
    overlay.classList.add('fade-out');
    setTimeout(() => {
      overlay.remove();
      document.body.style.overflow = '';
    }, 800);
  });
}

// ============================================
// LENIS SMOOTH SCROLL
// ============================================
function initLenisScroll() {
  // Respect reduced motion preferences
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const script = document.createElement('script');
  script.src = 'https://unpkg.com/lenis@1.1.14/dist/lenis.min.js';
  script.onload = () => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Store globally so smooth scroll nav can use it
    window.__lenis = lenis;
  };
  document.head.appendChild(script);
}

// ============================================
// INITIALIZE
// ============================================
function initApp() {
  // Particles
  const particleCanvas = document.getElementById('particles-canvas');
  if (particleCanvas) { new ParticleSystem(particleCanvas).animate(); }

  // Render content (only on homepage)
  renderShowcase();
  renderFavorites();

  // Init interactions
  initScrollAnimations();
  initStatCounters();
  initMobileMenu();
  initCart();
  initOrderModal();
  initContactForm();
  initSmoothScroll();
  initFeedbackModal();
  initLenisScroll();
  initTracking();

  // Category page specific
  initCategoryPage();

  // Restore cart badge on load
  updateCartBadge();
  renderCart();
}


if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

// ============================================
// DIGITAL MARKETING & UTM TRACKING
// ============================================
function initTracking() {
  const params = new URLSearchParams(window.location.search);
  const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
  let hasUTM = false;

  utmParams.forEach(param => {
    const value = params.get(param);
    if (value) {
      sessionStorage.setItem(param, value);
      hasUTM = true;
    }
  });

  if (hasUTM) {
    console.log('UTM parameters captured and stored in session.');
  }
}

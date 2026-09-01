// ============================================
// THE BROWNIE HUB (CHENNAI) — MASTER CLIENT ENGINE v7.0
// Aceternity & Magic UI Aesthetics, Ambient Golden Particle Flow,
// 3D Floating Crust Dynamics, Custom Box Simulator, Cart & GA4 Telemetry
// ============================================

(function () {
  'use strict';

  // --- 1. BRAND CONFIG & PHONE ---
  const BAKERY_PHONE = '917200015490';
  const GA4_ID = 'G-GWTWBBBDQ2';

  // --- 2. STATE MANAGEMENT ---
  const state = {
    cart: [],
    builder: {
      size: 4,
      name: 'Pack of 4 Box',
      price: 0,
      savings: 20,
      slots: [], // array of objects: { name, dietary, image }
      activeFilter: 'all',
    },
    utm: {},
  };

  // --- 2b. SENSORY WEB AUDIO ENGINE (Zero Network / 0ms Latency) ---
  function playPopAudio() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      if (!window._tbhAudioCtx) {
        window._tbhAudioCtx = new AudioCtx();
      }
      const ctx = window._tbhAudioCtx;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      const now = ctx.currentTime;
      osc.frequency.setValueAtTime(480, now);
      osc.frequency.exponentialRampToValueAtTime(840, now + 0.07);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.07);
    } catch (e) {}
  }

  function playSuccessChime() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      if (!window._tbhAudioCtx) {
        window._tbhAudioCtx = new AudioCtx();
      }
      const ctx = window._tbhAudioCtx;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      [523.25, 659.25].forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        const startTime = ctx.currentTime + idx * 0.12;
        osc.frequency.setValueAtTime(freq, startTime);
        gain.gain.setValueAtTime(0.14, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.35);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(startTime);
        osc.stop(startTime + 0.35);
      });
    } catch (e) {}
  }

  // --- 3. UTM ATTRIBUTION CAPTURE ---
  function initUtmCapture() {
    const urlParams = new URLSearchParams(window.location.search);
    const keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
    let found = false;
    const captured = {};

    keys.forEach((key) => {
      const val = urlParams.get(key);
      if (val) {
        captured[key] = val;
        found = true;
      }
    });

    if (found) {
      try {
        localStorage.setItem('tbh_utm_params', JSON.stringify(captured));
        state.utm = captured;
      } catch (e) {}
    } else {
      try {
        const stored = localStorage.getItem('tbh_utm_params');
        if (stored) state.utm = JSON.parse(stored);
      } catch (e) {}
    }
  }

  // --- 4. GA4 SAFE TELEMETRY DISPATCHER ---
  function trackGA4(eventName, params = {}) {
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, {
        ...params,
        ...state.utm,
        send_to: GA4_ID,
      });
    }
  }

  // --- 5. TOAST NOTIFICATIONS ---
  function showToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast-item';
    toast.textContent = message;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(12px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }

  // --- 6a. [REMOVED] Golden beam engine — replaced by Three.js HeroParticles React component ---

  // --- 6b. DIRECTIONAL BEZIER AROMA & COCOA PARTICLE ENGINE ---
  function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouse = { x: -1000, y: -1000, radius: 120 };

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    let brownieAnchor = null;

    function updateBrownieAnchor() {
      const el = document.querySelector('.hero-brownie-wrapper');
      if (!el) {
        brownieAnchor = null;
        return;
      }
      const rect = el.getBoundingClientRect();
      if (rect.width < 10 || rect.bottom <= 0 || rect.top >= height) {
        brownieAnchor = null;
        return;
      }
      brownieAnchor = {
        cx: rect.left + rect.width * 0.52,
        cy: rect.top + rect.height * 0.42,
        w: rect.width,
        h: rect.height,
      };
    }

    updateBrownieAnchor();
    window.addEventListener('resize', updateBrownieAnchor);
    window.addEventListener('scroll', updateBrownieAnchor, { passive: true });

    function createAromaParticle(initialT = Math.random()) {
      const rand = Math.random();
      let layer = 'mid';
      let size = 1.5;
      let maxOpacity = 0.45;
      let rgb = '201, 134, 60';
      let isFlake = false;

      if (rand < 0.35) {
        // Layer 1: Background cocoa dust
        layer = 'bg';
        size = Math.random() * 1.2 + 0.8;
        maxOpacity = Math.random() * 0.25 + 0.15;
        rgb = Math.random() > 0.5 ? '247, 213, 139' : '180, 110, 50';
      } else if (rand < 0.85) {
        // Layer 2: Midground warm glowing amber / gold specks
        layer = 'mid';
        size = Math.random() * 1.8 + 1.8;
        maxOpacity = Math.random() * 0.35 + 0.55;
        rgb = Math.random() > 0.4 ? '247, 213, 139' : '232, 182, 110';
      } else {
        // Layer 3: Foreground brownie crust flakes
        layer = 'fg';
        size = Math.random() * 1.6 + 2.2;
        maxOpacity = Math.random() * 0.3 + 0.45;
        rgb = '65, 28, 12';
        isFlake = true;
      }

      let originX, originY, spreadX, spreadY;
      if (brownieAnchor) {
        originX = brownieAnchor.cx;
        originY = brownieAnchor.cy;
        spreadX = brownieAnchor.w * 0.38;
        spreadY = brownieAnchor.h * 0.32;
      } else {
        originX = width * 0.72;
        originY = height * 0.55;
        spreadX = width * 0.12;
        spreadY = height * 0.16;
      }
      const p0x = originX + (Math.random() - 0.5) * spreadX;
      const p0y = originY + (Math.random() - 0.3) * spreadY;

      const p1x = p0x + (Math.random() - 0.4) * 220;
      const p1y = p0y - (180 + Math.random() * 220);

      const p2x = p1x + (Math.random() - 0.3) * 280;
      const p2y = Math.max(-40, p1y - (160 + Math.random() * 200));

      const speed = Math.random() * 0.0016 + 0.0012;

      return {
        p0: { x: p0x, y: p0y },
        p1: { x: p1x, y: p1y },
        p2: { x: p2x, y: p2y },
        t: initialT,
        speed: speed,
        size: size,
        layer: layer,
        isFlake: isFlake,
        rgb: rgb,
        maxOpacity: maxOpacity,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.015,
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: Math.random() * 0.02 + 0.008,
        lastX: null,
        lastY: null,
      };
    }

    const count = width > 768 ? 75 : 32;
    const particles = [];
    for (let i = 0; i < count; i++) {
      particles.push(createAromaParticle(Math.random()));
    }

    let isVisible = true;
    document.addEventListener('visibilitychange', () => {
      isVisible = !document.hidden;
    });

    function animate() {
      if (!isVisible) {
        requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.t += p.speed;
        p.rotation += p.rotSpeed;
        p.wobble += p.wobbleSpeed;

        if (p.t >= 1) {
          particles[i] = createAromaParticle(0);
          continue;
        }

        const t = p.t;
        const mt = 1 - t;
        let curX = mt * mt * p.p0.x + 2 * mt * t * p.p1.x + t * t * p.p2.x;
        let curY = mt * mt * p.p0.y + 2 * mt * t * p.p1.y + t * t * p.p2.y;

        curX += Math.sin(p.wobble) * 0.8;

        const dx = mouse.x - curX;
        const dy = mouse.y - curY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          curX -= (dx / dist) * force * 2;
          curY -= (dy / dist) * force * 2;
        }

        let alpha = p.maxOpacity;
        if (t < 0.2) {
          alpha = p.maxOpacity * (t / 0.2);
        } else if (t > 0.7) {
          alpha = p.maxOpacity * ((1 - t) / 0.3);
        }
        alpha = Math.max(0, Math.min(1, alpha));

        if (!p.isFlake && p.lastX !== null) {
          ctx.save();
          ctx.strokeStyle = `rgba(${p.rgb}, ${alpha * 0.4})`;
          ctx.lineWidth = p.size * 0.8;
          ctx.lineCap = 'round';
          ctx.beginPath();
          ctx.moveTo(p.lastX, p.lastY);
          ctx.lineTo(curX, curY);
          ctx.stroke();
          ctx.restore();
        }
        p.lastX = curX;
        p.lastY = curY;

        ctx.save();
        ctx.translate(curX, curY);

        if (p.isFlake) {
          ctx.rotate(p.rotation);
          ctx.fillStyle = `rgba(${p.rgb}, ${alpha})`;
          ctx.beginPath();
          ctx.moveTo(-p.size, -p.size * 0.6);
          ctx.lineTo(p.size * 0.8, -p.size * 0.8);
          ctx.lineTo(p.size, p.size * 0.7);
          ctx.lineTo(-p.size * 0.5, p.size * 0.9);
          ctx.closePath();
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${p.rgb}, ${alpha})`;
          if (p.layer === 'mid') {
            ctx.shadowColor = `rgba(${p.rgb}, 0.6)`;
            ctx.shadowBlur = p.size * 3;
          }
          ctx.fill();
        }

        ctx.restore();
      }

      requestAnimationFrame(animate);
    }

  }

  // --- TOAST NOTIFICATION CONTROLLER (The Rolling Oven 1:1) ---
  function showToast(type, title, message = '') {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    // Clear previous toasts so only one appears
    container.innerHTML = '';

    const toast = document.createElement('div');

    if (type === 'success' && title && title.includes('Cart')) {
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
        <div class="toast-text">
          <strong>${title}</strong>
          <span>${message}</span>
        </div>
      `;
    } else {
      const icons = { success: '✅', error: '❌', info: 'ℹ️' };
      toast.className = `toast ${type}`;
      toast.innerHTML = `
        <span class="toast-icon">${icons[type] || '🍫'}</span>
        <div class="toast-text">
          <strong>${title}</strong>
          <span>${message}</span>
        </div>
      `;
    }

    container.appendChild(toast);
    setTimeout(() => {
      toast.remove();
    }, 3200);
  }

  // --- 7. CART MANAGEMENT (The Rolling Oven 1:1) ---
  function loadCart() {
    try {
      const saved = localStorage.getItem('tbh_cart');
      if (saved) {
        state.cart = JSON.parse(saved);
      }
    } catch (e) {
      state.cart = [];
    }
    updateCartBadge();
    renderCart();
  }

  function updateCartBadge() {
    const badge = document.getElementById('cart-badge');
    const navBtn = document.getElementById('nav-order-btn');
    const total = state.cart.reduce((sum, item) => sum + item.qty, 0);
    if (badge) {
      if (total > 0) {
        badge.style.display = 'flex';
        badge.textContent = String(total);
      } else {
        badge.style.display = 'none';
      }
    }
    if (navBtn) {
      if (total > 0) {
        navBtn.style.display = 'inline-flex';
      } else {
        navBtn.style.display = 'none';
      }
    }
  }

  function saveCart() {
    try {
      localStorage.setItem('tbh_cart', JSON.stringify(state.cart));
    } catch (e) {}
    updateCartBadge();
    renderCart();
  }

  let lastAddToCartTime = 0;
  function addToCart(name, price, breakdown = null, isBox = false, image = null) {
    const now = Date.now();
    if (now - lastAddToCartTime < 180) {
      return; // Debounce dual click events
    }
    lastAddToCartTime = now;
    const existingIndex = state.cart.findIndex(
      (item) => item.name === name && JSON.stringify(item.breakdown || []) === JSON.stringify(breakdown || [])
    );

    if (existingIndex > -1) {
      state.cart[existingIndex].qty += 1;
    } else {
      state.cart.push({
        id: `item_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
        name: name,
        price: Number(price) || 0,
        qty: 1,
        breakdown: breakdown || [],
        isBox: isBox,
        image: image || '/images/brownies/classic-fudge.jpg',
      });
    }

    saveCart();
    playPopAudio();
    updateCartBadge();

    // Show Rolling Oven Premium Animated Toast
    showToast('success', 'Added to Cart!', `${name} — ₹${price}`);

    trackGA4('add_to_cart', {
      currency: 'INR',
      value: price,
      items: [{ item_name: name, price: price, quantity: 1 }],
      custom_breakdown: breakdown ? breakdown.join(', ') : undefined,
    });
  }

  function updateCartQty(index, delta) {
    if (!state.cart[index]) return;
    state.cart[index].qty += delta;
    if (state.cart[index].qty <= 0) {
      const removed = state.cart.splice(index, 1)[0];
      showToast('info', 'Removed', `Removed "${removed.name}" from your box.`);
      trackGA4('remove_from_cart', {
        currency: 'INR',
        value: removed.price,
        items: [{ item_name: removed.name, price: removed.price, quantity: 1 }],
      });
    }
    saveCart();
    updateCartBadge();
  }

  function calculateCartTotal() {
    return state.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  }

  function calculateTotalItemCount() {
    return state.cart.reduce((sum, item) => sum + item.qty, 0);
  }

  function renderCart() {
    const container = document.getElementById('cart-items');
    const footerEl = document.getElementById('cart-footer');
    const totalEl = document.getElementById('cart-total-price');

    if (!container) return;

    if (state.cart.length === 0) {
      container.innerHTML = `
        <div class="cart-empty" id="cart-empty">
          <span class="cart-empty-icon">🍫</span>
          <p>Your cart is empty</p>
          <span class="cart-empty-sub">Add some freshly baked brownies!</span>
        </div>
      `;
      if (footerEl) footerEl.style.display = 'none';
      return;
    }

    if (footerEl) footerEl.style.display = 'block';
    if (totalEl) totalEl.textContent = `₹${calculateCartTotal()}`;

    container.innerHTML = state.cart
      .map(
        (item, i) => `
      <div class="cart-item">
        <img src="${item.image || '/images/brownies/classic-fudge.jpg'}" alt="${item.name}" class="cart-item-img" />
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-category">${item.isBox ? 'Artisanal Box' : 'Artisanal Brownie'}</div>
          <div class="cart-item-price">₹${item.price * item.qty}</div>
        </div>
        <div class="cart-item-actions">
          <div class="cart-qty-controls">
            <button class="cart-qty-btn" onclick="updateCartQty(${i}, -1)" title="Decrease quantity" aria-label="Decrease quantity">−</button>
            <span class="cart-qty-num">${item.qty}</span>
            <button class="cart-qty-btn" onclick="updateCartQty(${i}, 1)" title="Increase quantity" aria-label="Increase quantity">+</button>
          </div>
          <button class="cart-remove-btn" onclick="updateCartQty(${i}, -999)" title="Remove ${item.name}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
            <span>Remove</span>
          </button>
        </div>
      </div>
    `
      )
      .join('');
  }

  // Expose global cart API
  window.tbhAddToCart = addToCart;
  window.addToCart = addToCart;
  window.updateCartQty = updateCartQty;

  // --- 8. CART SIDEBAR CONTROLLER (The Rolling Oven 1:1) ---
  function initCartDrawer() {
    const closeBtn = document.getElementById('cart-close-btn');
    const overlay = document.getElementById('cart-overlay');
    const sidebar = document.getElementById('cart-sidebar');

    function openCart() {
      if (sidebar) {
        sidebar.classList.add('active');
        sidebar.classList.add('open');
      }
      if (overlay) {
        overlay.classList.add('active');
        overlay.classList.add('open');
      }
      document.body.style.overflow = 'hidden';
      trackGA4('view_cart', {
        currency: 'INR',
        value: calculateCartTotal(),
      });
    }

    function closeCart() {
      if (sidebar) {
        sidebar.classList.remove('active');
        sidebar.classList.remove('open');
      }
      if (overlay) {
        overlay.classList.remove('active');
        overlay.classList.remove('open');
      }
      document.body.style.overflow = '';
    }

    window.openCart = openCart;
    window.openCartDrawer = openCart;

    if (closeBtn) closeBtn.addEventListener('click', closeCart);
    if (overlay) overlay.addEventListener('click', closeCart);

    // 1-Click WhatsApp Order Button in Cart Sidebar
    const waBtn = document.getElementById('whatsapp-order-btn');
    if (waBtn) {
      waBtn.addEventListener('click', () => {
        if (state.cart.length === 0) return;
        const subtotal = calculateCartTotal();
        const isFreeDelivery = subtotal >= 500;
        const deliveryFee = isFreeDelivery ? 0 : 49;
        const grandTotal = subtotal + deliveryFee;

        const itemsList = state.cart
          .map((i) => `• *${i.name}* × ${i.qty} (₹${i.price * i.qty}) 🟢`)
          .join('\n');

        const waText =
          `🍫 *NEW ORDER — THE BROWNIE HUB* 🍫\n` +
          `━━━━━━━━━━━━━━━━━━━━━━━━\n` +
          `👋 *Hello The Brownie Hub!* I would like to place an order from your online store:\n\n` +
          `📦 *ORDER ITEMS:*\n${itemsList}\n\n` +
          `━━━━━━━━━━━━━━━━━━━━━━━━\n` +
          `💰 *Item Subtotal:* ₹${subtotal}\n` +
          `🚚 *Chennai Delivery:* ${isFreeDelivery ? 'FREE (Orders ₹500+)' : '₹49'}\n` +
          `💳 *Payment Mode:* 💵 *Cash on Delivery (COD)*\n` +
          `🏷️ *TOTAL PAYABLE:* *₹${grandTotal}*\n` +
          `━━━━━━━━━━━━━━━━━━━━━━━━\n` +
          `📍 *Delivery City:* Chennai, Tamil Nadu\n` +
          `━━━━━━━━━━━━━━━━━━━━━━━━\n` +
          `✨ *Freshly baked with 100% Belgian Couverture & Pure Butter.*\n` +
          `❤️ *Please confirm availability and delivery time!* 🛵`;

        state.cart = [];
        saveCart();
        updateCartBadge();
        closeCart();

        showToast('success', 'Order Logged! 💬', 'Opening WhatsApp to complete your order...');
        window.open(`https://wa.me/${BAKERY_PHONE}?text=${encodeURIComponent(waText)}`, '_blank');
      });
    }

    // Place order button in cart opens online checkout modal
    const placeOrderBtn = document.getElementById('place-order-btn');
    if (placeOrderBtn) {
      placeOrderBtn.addEventListener('click', () => {
        if (state.cart.length === 0) return;
        closeCart();
        openOrderModal();
      });
    }
  }

  // --- 9. BESTSELLERS CAROUSEL CONTROLLER ---
  function initBestsellersCarousel() {
    const grid = document.getElementById('bestsellers-grid');
    const prevBtn = document.getElementById('bestseller-prev');
    const nextBtn = document.getElementById('bestseller-next');

    if (!grid || !prevBtn || !nextBtn) return;

    function getScrollStep() {
      const card = grid.querySelector('.bestseller-card');
      return card ? card.offsetWidth + 16 : 260;
    }

    function updateArrowStates() {
      const atStart = grid.scrollLeft <= 6;
      const atEnd = grid.scrollLeft >= grid.scrollWidth - grid.clientWidth - 6;
      prevBtn.disabled = atStart;
      nextBtn.disabled = atEnd;
    }

    prevBtn.addEventListener('click', () => {
      grid.scrollBy({ left: -getScrollStep(), behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
      grid.scrollBy({ left: getScrollStep(), behavior: 'smooth' });
    });

    grid.addEventListener('scroll', updateArrowStates, { passive: true });
    window.addEventListener('resize', updateArrowStates);
    setTimeout(updateArrowStates, 300);
  }

  // --- 10. CUSTOM BOX BUILDER CONTROLLER (4-PACK SIMULATOR) ---
  function initBoxBuilder() {
    const flavorCards = document.querySelectorAll('#builder-flavor-list .flavor-pick-card');
    const slotsGrid = document.getElementById('builder-slots-grid');
    const boxCard = document.getElementById('builder-box-card');
    const boxTitle = document.getElementById('builder-box-title');
    const boxBadge = document.getElementById('builder-box-badge');
    const slotsText = document.getElementById('builder-slots-text');
    const progressFill = document.getElementById('builder-progress-fill');
    const priceDisplay = document.getElementById('builder-price-display');
    const addCartBtn = document.getElementById('builder-add-cart-btn');
    const whatsappBtn = document.getElementById('builder-whatsapp-btn');
    const clearBtn = document.getElementById('builder-clear-btn');

    function calculateBoxPrice() {
      const count = state.builder.slots.length;
      if (count === 0) return 0;

      const flavorPrices = {
        'Signature Classic Brownie': 69,
        'Double Chocolate Brownie': 99,
      };

      let sum = 0;
      state.builder.slots.forEach((s) => {
        sum += flavorPrices[s.name] || 69;
      });

      // Apply ₹20 pack discount when box is full (4 items)
      if (count === state.builder.size) {
        sum = Math.max(0, sum - 20);
      }
      return sum;
    }

    function renderBuilderSlots() {
      if (!slotsGrid) return;

      const size = state.builder.size;
      const count = state.builder.slots.length;
      const remaining = size - count;
      const pct = Math.round((count / size) * 100);
      const computedPrice = calculateBoxPrice();
      state.builder.price = computedPrice;

      if (boxTitle) boxTitle.textContent = state.builder.name;
      if (boxBadge) boxBadge.textContent = `${count} / ${size} Selected`;
      if (slotsText) slotsText.textContent = `${count} of ${size} slots filled`;
      if (progressFill) progressFill.style.width = `${pct}%`;
      if (priceDisplay) priceDisplay.textContent = `₹${computedPrice}`;

      if (boxCard) {
        if (count === size) {
          boxCard.classList.add('border-beam-card');
        } else {
          boxCard.classList.remove('border-beam-card');
        }
      }

      if (addCartBtn) {
        if (count === size) {
          addCartBtn.removeAttribute('disabled');
          addCartBtn.classList.add('pulse-gold');
          addCartBtn.innerHTML = `<span>Pack &amp; Add Box to Cart &bull; ₹${computedPrice} &rarr;</span>`;
          addCartBtn.style.opacity = '1';
          addCartBtn.style.cursor = 'pointer';
        } else {
          addCartBtn.setAttribute('disabled', 'true');
          addCartBtn.classList.remove('pulse-gold');
          addCartBtn.innerHTML = `<span>Pick ${remaining} more brownie${remaining > 1 ? 's' : ''} to pack box</span>`;
          addCartBtn.style.opacity = '0.65';
          addCartBtn.style.cursor = 'not-allowed';
        }
      }

      // Update WhatsApp link with pre-filled flavor breakdown
      if (whatsappBtn) {
        const counts = {};
        state.builder.slots.forEach((s) => {
          const label = `${s.name} (${s.dietary === 'veg' ? 'Veg' : 'Egg'})`;
          counts[label] = (counts[label] || 0) + 1;
        });
        const breakdownStr = Object.entries(counts).map(([f, c]) => `${c}x ${f}`).join(', ') || 'Custom Assorted';
        const msg = `Hi The Brownie Hub! I would like to order a ${state.builder.name} (₹${computedPrice}) with: ${breakdownStr}. Please confirm delivery in Chennai!`;
        whatsappBtn.href = `https://wa.me/${BAKERY_PHONE}?text=${encodeURIComponent(msg)}`;
      }

      // Generate visual slots with image thumbnails for 4 slots (2x2 grid)
      let html = '';
      for (let i = 0; i < size; i++) {
        if (i < count) {
          const slot = state.builder.slots[i];
          const isVeg = slot.dietary === 'veg';
          html += `
            <div class="slot-item filled">
              <img src="${slot.image}" alt="${slot.name}" class="slot-item-thumb" />
              <div style="display:flex;align-items:center;gap:4px;width:100%;justify-content:center;padding:0 4px;">
                <span class="dietary-dot ${isVeg ? 'veg' : 'nonveg'}" style="width:7px;height:7px;flex-shrink:0;"></span>
                <span class="slot-item-name">${slot.name}</span>
              </div>
              <button class="slot-item-remove btn-slot-remove" data-index="${i}" title="Remove" aria-label="Remove brownie">✕</button>
            </div>
          `;
        } else {
          html += `
            <div class="slot-item">
              <span class="slot-num">${i + 1}</span>
              <span class="slot-placeholder">+ Drop Flavor</span>
            </div>
          `;
        }
      }
      slotsGrid.innerHTML = html;
    }

    // Step 2: Flavor Picker Cards
    flavorCards.forEach((card) => {
      card.addEventListener('click', () => {
        if (state.builder.slots.length >= state.builder.size) {
          showToast('info', 'Box is Full', `Your ${state.builder.name} is full (${state.builder.size}/${state.builder.size})! Click "Pack & Add Box" or remove a slot.`);
          return;
        }

        const name = card.dataset.name;
        const dietary = card.dataset.dietary;
        const image = card.dataset.image || '/images/brownies/classic-fudge.jpg';

        state.builder.slots.push({
          name: name,
          dietary: dietary,
          image: image,
        });

        playPopAudio();
        renderBuilderSlots();
        showToast('success', 'Flavor Added', `Dropped ${name} into slot ${state.builder.slots.length}! 📦`);
      });
    });

    // Remove slot
    document.addEventListener('click', (e) => {
      const removeBtn = e.target.closest('.btn-slot-remove');
      if (removeBtn) {
        const idx = parseInt(removeBtn.dataset.index, 10);
        state.builder.slots.splice(idx, 1);
        playPopAudio();
        renderBuilderSlots();
      }
    });

    // Clear Selection
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        state.builder.slots = [];
        playPopAudio();
        renderBuilderSlots();
        showToast('info', 'Cleared', 'Cleared custom box selection.');
      });
    }

    // 1-Click Quick Fill Presets
    document.addEventListener('click', (e) => {
      const presetBtn = e.target.closest('.btn-preset-pack');
      if (presetBtn) {
        const preset = presetBtn.dataset.preset;
        let flavorList = [];
        if (preset === 'classic') {
          flavorList = [
            { name: 'Signature Classic Brownie', dietary: 'veg', image: '/images/brownies/classic-fudge.jpg' },
            { name: 'Signature Classic Brownie', dietary: 'veg', image: '/images/brownies/classic-fudge.jpg' },
            { name: 'Signature Classic Brownie', dietary: 'veg', image: '/images/brownies/classic-fudge.jpg' },
            { name: 'Signature Classic Brownie', dietary: 'veg', image: '/images/brownies/classic-fudge.jpg' },
          ];
        } else if (preset === 'double') {
          flavorList = [
            { name: 'Double Chocolate Brownie', dietary: 'veg', image: '/images/brownies/double-chocolate.jpg' },
            { name: 'Double Chocolate Brownie', dietary: 'veg', image: '/images/brownies/double-chocolate.jpg' },
            { name: 'Double Chocolate Brownie', dietary: 'veg', image: '/images/brownies/double-chocolate.jpg' },
            { name: 'Double Chocolate Brownie', dietary: 'veg', image: '/images/brownies/double-chocolate.jpg' },
          ];
        } else if (preset === 'combo') {
          flavorList = [
            { name: 'Signature Classic Brownie', dietary: 'veg', image: '/images/brownies/classic-fudge.jpg' },
            { name: 'Signature Classic Brownie', dietary: 'veg', image: '/images/brownies/classic-fudge.jpg' },
            { name: 'Double Chocolate Brownie', dietary: 'veg', image: '/images/brownies/double-chocolate.jpg' },
            { name: 'Double Chocolate Brownie', dietary: 'veg', image: '/images/brownies/double-chocolate.jpg' },
          ];
        }

        state.builder.slots = [];
        for (let i = 0; i < state.builder.size; i++) {
          state.builder.slots.push({ ...flavorList[i % flavorList.length] });
        }
        playPopAudio();
        renderBuilderSlots();
        showToast('success', 'Preset Selected', `Auto-packed your box with ${presetBtn.textContent.trim()}! 🎁`);
      }
    });

    // Add Custom Box to Cart
    if (addCartBtn) {
      addCartBtn.addEventListener('click', () => {
        if (state.builder.slots.length < state.builder.size) {
          showToast('info', 'Fill All Slots', `Please fill all ${state.builder.size} slots before adding to cart.`);
          return;
        }

        const counts = {};
        state.builder.slots.forEach((s) => {
          const label = `${s.name} (${s.dietary === 'veg' ? 'Veg' : 'Egg'})`;
          counts[label] = (counts[label] || 0) + 1;
        });
        const breakdownList = Object.entries(counts).map(([f, c]) => `${c}x ${f}`);

        addToCart(
          `Custom ${state.builder.name}`,
          state.builder.price,
          breakdownList,
          true,
          '/images/brownies/luxury-box-mockup.jpg'
        );

        trackGA4('customize_box', {
          box_size: state.builder.size,
          flavors_count: state.builder.slots.length,
          selected_flavors: state.builder.slots.map((s) => s.name).join(', '),
          value: state.builder.price,
          currency: 'INR',
        });

        // Open Cart Drawer
        const drawer = document.getElementById('cart-drawer');
        const overlay = document.getElementById('cart-overlay');
        if (drawer) drawer.classList.add('open');
        if (overlay) overlay.classList.add('open');

        // Reset builder slots
        state.builder.slots = [];
        renderBuilderSlots();
      });
    }

    renderBuilderSlots();
  }

  // --- 11. MENU & BESTSELLERS ADD-TO-CART CONTROLLER ---
  function initMenuActions() {
    document.addEventListener('click', (e) => {
      const addBtn = e.target.closest('.add-cart-btn, .bestseller-add-circle-btn, [data-action="add-to-cart"], .btn-cart-add');
      if (addBtn) {
        e.preventDefault();
        e.stopPropagation();
        const name = addBtn.dataset.name;
        const price = Number(addBtn.dataset.price) || 0;
        const isBox = addBtn.dataset.isBox === 'true';
        const image = addBtn.dataset.image || '/images/brownies/classic-fudge.jpg';

        if (name) {
          addToCart(name, price, null, isBox, image);

          // Instant visual feedback on button matching Rolling Oven v2
          const originalHtml = addBtn.innerHTML;
          addBtn.innerHTML = '<span>✓</span>';
          addBtn.style.background = 'linear-gradient(135deg, #2b8a3e, #40c057)';
          addBtn.style.color = '#ffffff';
          setTimeout(() => {
            addBtn.innerHTML = originalHtml;
            addBtn.style.background = '';
            addBtn.style.color = '';
          }, 1000);
        }
      }
    });
  }

  // --- 12. COMPLETE YOUR ORDER MODAL CONTROLLER (The Rolling Oven 1:1) ---
  function openOrderModal() {
    const overlay = document.getElementById('order-modal-overlay');
    if (overlay) {
      overlay.classList.add('active');
      overlay.classList.add('open');
    }
    document.body.style.overflow = 'hidden';

    // Render order summary inside modal
    const summaryBox = document.getElementById('order-summary-box');
    if (summaryBox) {
      summaryBox.style.display = 'block';

      if (state.cart.length === 0) {
        summaryBox.innerHTML = `<div style="text-align:center; padding: 20px; color: #a1a1aa;">Your cart is empty. Pick your favorite brownies first! 🍫</div>`;
        const btn = document.getElementById('submit-order-btn');
        if (btn) btn.style.display = 'none';
        return;
      }

      const btn = document.getElementById('submit-order-btn');
      if (btn) btn.style.display = 'inline-flex';

      const subtotal = calculateCartTotal();
      const isFreeDelivery = subtotal >= 500;
      const deliveryFee = isFreeDelivery ? 0 : 49;
      const grandTotal = subtotal + deliveryFee;

      summaryBox.innerHTML = `
        <strong style="display:block;margin-bottom:8px;color:var(--cream,#fff4ea);font-weight:700;">Order Summary</strong>
        ${state.cart
          .map(
            (item, i) => `
          <div class="order-line" style="display:flex; justify-content:space-between; align-items:flex-start; padding: 6px 0;">
            <span style="display: flex; align-items: center; gap: 8px;">
              <button type="button" onclick="removeModalItem(${i})" title="Remove Item" style="background:transparent; border:none; color:#a1a1aa; padding:0; display:flex; align-items:center; cursor:pointer; margin-top:2px; transition: color 0.2s;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
              </button>
              <span>${item.name} <span style="color:rgba(255,244,234,0.65); font-size: 0.88em;">× ${item.qty}</span></span>
            </span>
            <span style="font-weight:600; color:var(--cream,#fff4ea);">₹${item.price * item.qty}</span>
          </div>
        `
          )
          .join('')}
        <div class="order-line" style="display:flex; justify-content:space-between; font-size:0.85rem; color:rgba(255,244,234,0.7); margin-top:4px;">
          <span>Chennai Delivery</span>
          <span>${isFreeDelivery ? '<strong style="color:#51cf66;">FREE</strong>' : '₹49'}</span>
        </div>
        <div class="order-line total" style="display:flex; justify-content:space-between; border-top:1px solid rgba(201,134,60,0.25); margin-top:8px; padding-top:10px; font-weight:700; color:var(--caramel-bright,#e8b66e); font-size:1.15rem;">
          <span>Total</span>
          <span>₹${grandTotal}</span>
        </div>
      `;
    }

    trackGA4('begin_checkout', {
      currency: 'INR',
      value: calculateCartTotal(),
      items: state.cart.map((i) => ({ item_name: i.name, price: i.price, quantity: i.qty })),
    });
  }

  window.openRollingOrderModal = openOrderModal;
  window.openOrderModal = openOrderModal;

  // Global helper to remove item from modal and redraw
  window.removeModalItem = function (index) {
    if (!state.cart[index]) return;
    const removed = state.cart.splice(index, 1)[0];
    saveCart();
    updateCartBadge();
    showToast('info', 'Removed', `${removed.name} removed from order.`);

    openOrderModal();

    if (state.cart.length === 0) {
      setTimeout(() => {
        closeOrderModal();
      }, 900);
    }
  };

  function closeOrderModal() {
    const overlay = document.getElementById('order-modal-overlay');
    if (overlay) {
      overlay.classList.remove('active');
      overlay.classList.remove('open');
    }
    document.body.style.overflow = '';
  }

  function initOrderModal() {
    const navOrderBtn = document.getElementById('nav-order-btn');
    const closeBtn = document.getElementById('order-modal-close');
    const overlay = document.getElementById('order-modal-overlay');
    const orderForm = document.getElementById('order-form');
    const submitBtn = document.getElementById('submit-order-btn');

    if (navOrderBtn) {
      navOrderBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openOrderModal();
      });
    }

    if (closeBtn) closeBtn.addEventListener('click', closeOrderModal);
    if (overlay) {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeOrderModal();
      });
    }

    if (orderForm) {
      orderForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        if (state.cart.length === 0) {
          showToast('error', 'Cart Empty', 'Please select at least 1 brownie first!');
          return;
        }

        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.textContent = 'Preparing Order... ⏳';
        }

        const customerName = document.getElementById('order-name')?.value || 'Customer';
        const customerEmail = document.getElementById('order-email')?.value || 'customer@thebrowniehub.com';
        const customerPhone = document.getElementById('order-phone')?.value || '';
        const deliveryAddress = document.getElementById('order-address')?.value || 'Chennai';
        const pincode = document.getElementById('order-pincode')?.value || '600001';
        const specialInstructions = document.getElementById('order-notes')?.value || '';
        const honeypot = document.getElementById('order-hp')?.value || '';
        const paymentMethod = 'Cash on Delivery (COD)';

        const subtotal = calculateCartTotal();
        const isFreeDelivery = subtotal >= 500;
        const deliveryFee = isFreeDelivery ? 0 : 49;
        const grandTotal = subtotal + deliveryFee;

        const payload = {
          customer_name: customerName,
          customer_phone: customerPhone,
          customer_email: customerEmail,
          delivery_address: deliveryAddress,
          pincode: pincode,
          special_instructions: specialInstructions,
          payment_method: paymentMethod,
          order_type: 'The Brownie Hub Web COD Order',
          items: state.cart.map((item) => ({
            name: item.name,
            qty: item.qty,
            price: item.price,
            breakdown: item.breakdown || [],
          })),
          total_amount: grandTotal,
          utm_source: state.utm.utm_source || '',
          utm_medium: state.utm.utm_medium || '',
          utm_campaign: state.utm.utm_campaign || '',
          b_website: honeypot,
        };

        try {
          const res = await fetch('/api/order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
          });

          const data = await res.json();
          const orderId = (data && data.order_id) || `TBH-${Date.now().toString().slice(-6)}`;
          const finalTotal = (data && data.verified_total) || grandTotal;

          const itemsText = state.cart
            .map((i) => {
              const bd = i.breakdown && i.breakdown.length > 0 ? `\n    ↳ [${i.breakdown.join(', ')}]` : '';
              return `• *${i.name}* × ${i.qty} — ₹${i.price * i.qty} 🟢${bd}`;
            })
            .join('\n');

          const waMessage =
            `🍫 *NEW ORDER — THE BROWNIE HUB* 🍫\n` +
            `━━━━━━━━━━━━━━━━━━━━━━━━\n` +
            `🆔 *Order ID:* ${orderId}\n` +
            `👤 *Customer Name:* ${customerName}\n` +
            `📞 *Phone Number:* ${customerPhone}\n` +
            `📍 *Delivery Address:* ${deliveryAddress}\n` +
            `📮 *Pincode:* ${pincode} (Chennai)\n\n` +
            `━━━━━━━━━━━━━━━━━━━━━━━━\n` +
            `📦 *ORDER ITEMS:*\n${itemsText}\n\n` +
            `━━━━━━━━━━━━━━━━━━━━━━━━\n` +
            `💰 *Subtotal:* ₹${subtotal}\n` +
            `🚚 *Chennai Delivery:* ${isFreeDelivery ? 'FREE (Orders ₹500+)' : '₹49'}\n` +
            `💳 *Payment Mode:* 💵 *Cash on Delivery (COD)*\n` +
            `🏷️ *FINAL AMOUNT TO PAY:* *₹${finalTotal}*\n` +
            `━━━━━━━━━━━━━━━━━━━━━━━━\n` +
            `📝 *Special Note:* ${specialInstructions || 'None'}\n` +
            `━━━━━━━━━━━━━━━━━━━━━━━━\n` +
            `✨ *Freshly baked with 100% Belgian Couverture.*\n` +
            `❤️ *Please confirm delivery timing!* 🛵`;

          trackGA4('purchase', {
            transaction_id: orderId,
            value: finalTotal,
            currency: 'INR',
            payment_type: paymentMethod,
            items: state.cart.map((i) => ({ item_name: i.name, price: i.price, quantity: i.qty })),
          });

          // Reset cart & update badge
          state.cart = [];
          saveCart();
          updateCartBadge();
          closeOrderModal();

          showToast('success', 'Order Confirmed! 💬', 'Opening WhatsApp to complete delivery...');

          const waTargetUrl = `https://wa.me/${BAKERY_PHONE}?text=${encodeURIComponent(waMessage)}`;
          setTimeout(() => {
            window.open(waTargetUrl, '_blank');
          }, 800);
        } catch (err) {
          console.error('Order submission error:', err);
          showToast('error', 'Network Error', 'Opening WhatsApp directly...');
          const fallbackWa = `https://wa.me/${BAKERY_PHONE}?text=${encodeURIComponent('Hi The Brownie Hub! I would like to place an order via Cash on Delivery.')}`;
          window.open(fallbackWa, '_blank');
        } finally {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = `<span>Confirm & Send Order</span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`;
          }
        }
      });
    }
  }

  // --- 13. 1-CLICK WHATSAPP CART CHECKOUT ---
  function initWhatsAppCheckout() {
    const waCheckoutBtns = document.querySelectorAll('#whatsapp-order-btn, #cart-whatsapp-checkout-btn');
    if (!waCheckoutBtns || waCheckoutBtns.length === 0) return;

    waCheckoutBtns.forEach((waBtn) => {
      waBtn.addEventListener('click', async () => {
      if (state.cart.length === 0) {
        showToast('Your cart is empty!');
        return;
      }

      const subtotal = calculateCartTotal();
      const isFreeDelivery = subtotal >= 500;
      const deliveryFee = isFreeDelivery ? 0 : 49;
      const grandTotal = subtotal + deliveryFee;

      const itemsList = state.cart
        .map((i) => {
          const bd = i.breakdown && i.breakdown.length > 0 ? `\n    ↳ [${i.breakdown.join(', ')}]` : '';
          return `• *${i.name}* × ${i.qty} (₹${i.price * i.qty}) 🟢${bd}`;
        })
        .join('\n');

      const giftNoteElem = document.getElementById('cart-gift-note');
      const giftNote = giftNoteElem && giftNoteElem.value.trim() ? giftNoteElem.value.trim() : '';
      const giftNoteStr = giftNote ? `\n📝 *Special Note:* ${giftNote}` : '';

      const utmParts = [];
      if (state.utm.utm_source) utmParts.push(`Source=${state.utm.utm_source}`);
      if (state.utm.utm_campaign) utmParts.push(`Campaign=${state.utm.utm_campaign}`);
      if (state.utm.utm_medium) utmParts.push(`Medium=${state.utm.utm_medium}`);
      const utmInfo = utmParts.length > 0 ? `\n*Ref:* ${utmParts.join(' | ')}` : '';

      const waText =
        `🍫 *NEW ORDER — THE BROWNIE HUB* 🍫\n` +
        `━━━━━━━━━━━━━━━━━━━━━━━━\n` +
        `👋 *Hello The Brownie Hub!* I would like to place an order from your online store:\n\n` +
        `📦 *ORDER ITEMS:*\n${itemsList}\n\n` +
        `━━━━━━━━━━━━━━━━━━━━━━━━\n` +
        `💰 *Item Subtotal:* ₹${subtotal}\n` +
        `🚚 *Chennai Delivery:* ${isFreeDelivery ? 'FREE (Orders ₹500+)' : '₹49'}\n` +
        `💳 *Payment Mode:* 💵 *Cash on Delivery (COD)*\n` +
        `🏷️ *TOTAL PAYABLE:* *₹${grandTotal}*\n` +
        `━━━━━━━━━━━━━━━━━━━━━━━━\n` +
        `📍 *Delivery City:* Chennai, Tamil Nadu${giftNoteStr}${utmInfo}\n` +
        `━━━━━━━━━━━━━━━━━━━━━━━━\n` +
        `✨ *Freshly baked with 100% Belgian Couverture & Pure Butter.*\n` +
        `❤️ *Please confirm availability and delivery time!* 🛵`;

      trackGA4('whatsapp_order_click', {
        value: grandTotal,
        items_count: calculateTotalItemCount(),
        currency: 'INR',
      });

      try {
        fetch('/api/order', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            customer_name: 'WhatsApp Direct Shopper',
            customer_phone: 'WhatsApp Chat',
            customer_email: 'whatsapp@thebrowniehub.com',
            delivery_address: 'Direct WhatsApp Delivery',
            pincode: '600001',
            order_type: 'WhatsApp Direct 1-Click Checkout',
            payment_method: 'Cash on Delivery (COD)',
            special_instructions: giftNote,
            items: state.cart.map((i) => ({ name: i.name, qty: i.qty, price: i.price, breakdown: i.breakdown || [] })),
            total_amount: grandTotal,
            utm_source: state.utm.utm_source || 'whatsapp_1click',
            utm_medium: state.utm.utm_medium || '',
            utm_campaign: state.utm.utm_campaign || '',
          }),
        });
      } catch (e) {}

      window.open(`https://wa.me/${BAKERY_PHONE}?text=${encodeURIComponent(waText)}`, '_blank');
    });
  });
}

  // --- 14. WORKSHOPS (RETIRED) ---
  function initWorkshopModal() {
    // Workshops discontinued per brand instruction
  }

  // --- 15. CONTACT & INQUIRY FORM CONTROLLER ---
  function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('contact-submit-btn');

    if (!contactForm) return;

    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending Message... ⏳';
      }

      const formData = new FormData(contactForm);
      const payload = {
        name: formData.get('name'),
        phone: formData.get('phone'),
        email: formData.get('email'),
        inquiry_type: formData.get('inquiry_type') || 'General Inquiry',
        message: formData.get('message'),
        b_website: formData.get('b_website') || '',
        utm_source: state.utm.utm_source || '',
      };

      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        const data = await res.json();
        if (res.ok && data.success) {
          contactForm.reset();
          showToast('Thank you! Your message was sent to our Chennai kitchen.');
          trackGA4('contact_inquiry_sent', { type: payload.inquiry_type });
        } else {
          showToast(`Error: ${data.error || 'Failed to send inquiry.'}`);
        }
      } catch (err) {
        showToast('Network error while sending message.');
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Send Message';
        }
      }
    });
  }

  // --- 16. FAQ ACCORDION & SCROLL SPY ---
  function initFaqAndNavScroll() {
    document.querySelectorAll('.faq-question').forEach((item) => {
      item.addEventListener('click', () => {
        const parent = item.parentElement;
        const wasOpen = parent.classList.contains('open');

        document.querySelectorAll('.faq-item').forEach((f) => f.classList.remove('open'));

        if (!wasOpen) {
          parent.classList.add('open');
        }
      });
    });

    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileDrawer = document.getElementById('mobile-nav-drawer');

    if (mobileBtn && mobileDrawer) {
      mobileBtn.addEventListener('click', () => {
        mobileDrawer.classList.toggle('open');
      });

      document.querySelectorAll('.mobile-link').forEach((link) => {
        link.addEventListener('click', () => {
          mobileDrawer.classList.remove('open');
        });
      });
    }

    // --- 16b. PRECISION SCROLL SPY WITH DYNAMIC URL HASH & UTM PRESERVATION ---
    const trackedSections = [
      { id: 'hero', hash: '' },
      { id: 'bestsellers', hash: 'bestsellers' },
      { id: 'builder', hash: 'builder' },
      { id: 'menu', hash: 'menu' },
      { id: 'about', hash: 'about' },
      { id: 'faq', hash: 'faq' },
      { id: 'contact', hash: 'contact' },
    ];

    let lastActiveHash = null;
    let scrollSpyTimeout = null;

    function updateActiveNavOnScroll() {
      if (window.location.pathname !== '/' && window.location.pathname !== '') return;

      const scrollPos = window.scrollY + 180;
      let currentSectionId = 'hero';

      trackedSections.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const elTop = rect.top + window.scrollY;
          if (scrollPos >= elTop) {
            currentSectionId = id;
          }
        }
      });

      // Update active nav link classes
      const navLinks = document.querySelectorAll('.capsule-nav-links .capsule-link, .mobile-drawer-links .mobile-link');
      navLinks.forEach((link) => {
        const href = link.getAttribute('href') || '';
        const cleanHref = href.replace(/^\/?#?/, '').replace(/^\//, '');
        const targetId = currentSectionId === 'hero' ? '' : currentSectionId;

        if (cleanHref === targetId) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });

      // Dynamically update URL Hash in browser address bar, preserving UTM search query
      const targetHash = currentSectionId === 'hero' ? '' : `#${currentSectionId}`;
      if (targetHash !== lastActiveHash) {
        lastActiveHash = targetHash;
        clearTimeout(scrollSpyTimeout);
        scrollSpyTimeout = setTimeout(() => {
          const searchParams = window.location.search || '';
          const newUrl = `${window.location.pathname}${searchParams}${targetHash}`;
          if (window.location.hash !== targetHash) {
            window.history.replaceState(null, '', newUrl);
          }
        }, 100);
      }
    }

    window.addEventListener('scroll', updateActiveNavOnScroll, { passive: true });
    setTimeout(updateActiveNavOnScroll, 300);
  }

  // --- 17. PREMIUM ANIMATION SYSTEMS ---

  // --- 17a. SCROLL REVEAL (GSAP ScrollTrigger with Instant Visibility Guard) ---
  function initScrollReveals() {
    // Guarantee instant visibility so page navigation never displays an empty screen
    document.querySelectorAll('[data-reveal]').forEach((el) => {
      el.classList.add('revealed');
    });

    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      return;
    }

    try {
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.refresh();
    } catch (e) {}
  }

  // --- 17b. LENIS SMOOTH SCROLL (Per smooth-scrolling-ui skill) ---
  function initLenisSmooth() {
    if (typeof Lenis === 'undefined') return;

    // 1. Accessibility: Respect OS-level prefers-reduced-motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      console.log('ℹ️ Smooth scrolling disabled: prefers-reduced-motion is active.');
      return;
    }

    // 2. Premium Lenis Instance with Butter-Smooth Easing
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential luxury ease-out
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.05,
      touchMultiplier: 1.8,
      infinite: false,
      autoRaf: false, // Synchronized via GSAP ticker below to eliminate RAF double-stepping
    });
    window.lenis = lenis;

    // 3. Flawless Synchronization with GSAP Ticker & ScrollTrigger
    if (typeof gsap !== 'undefined') {
      lenis.on('scroll', () => {
        if (typeof ScrollTrigger !== 'undefined') {
          ScrollTrigger.update();
        }
      });
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    } else {
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }

    // 4. Smooth Anchor Scrolling for both #section and /#section
    document.querySelectorAll('a[href^="#"], a[href^="/#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        const rawHref = anchor.getAttribute('href') || '';
        const hash = rawHref.startsWith('/#') ? rawHref.substring(1) : rawHref;
        if (hash && hash.length > 1 && (window.location.pathname === '/' || window.location.pathname === '')) {
          const target = document.querySelector(hash);
          if (target) {
            e.preventDefault();
            lenis.scrollTo(target, {
              offset: -75,
              duration: 1.35,
              easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            });
            const searchParams = window.location.search || '';
            window.history.replaceState(null, '', `${window.location.pathname}${searchParams}${hash}`);
          }
        }
      });
    });

    // 5. Protect inner scroll containers (Box Builder, Modals, Selects)
    document.querySelectorAll('.builder-flavor-grid, [data-lenis-prevent="true"]').forEach((container) => {
      container.addEventListener(
        'wheel',
        (e) => {
          e.stopPropagation();
        },
        { passive: false }
      );
    });
  }

  // --- 17c. THREE.JS 3D BROWNIE ---
  function initHero3D() {
    if (typeof THREE === 'undefined') return;
    const canvas = document.getElementById('hero-3d-canvas');
    if (!canvas) return;

    try {
      const parent = canvas.parentElement;
      const w = parent.offsetWidth || 480;
      const h = parent.offsetHeight || 420;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100);
      camera.position.set(0, 1.5, 5);

      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0);

      // Lighting
      const ambientLight = new THREE.AmbientLight(0x8c531d, 0.6);
      scene.add(ambientLight);

      const pointLight = new THREE.PointLight(0xe8b66e, 1.8, 15);
      pointLight.position.set(2, 3, 3);
      scene.add(pointLight);

      const pointLight2 = new THREE.PointLight(0xc9863c, 0.8, 10);
      pointLight2.position.set(-2, 1, 2);
      scene.add(pointLight2);

      // Create 3 stacked brownie layers
      const brownieMat = new THREE.MeshStandardMaterial({
        color: 0x3a1c07,
        roughness: 0.82,
        metalness: 0.05,
      });
      const topMat = new THREE.MeshStandardMaterial({
        color: 0x1a0d06,
        roughness: 0.6,
        metalness: 0.1,
      });

      const layerGeo = new THREE.BoxGeometry(2, 0.45, 2);
      layerGeo.translate(0, 0, 0);

      const group = new THREE.Group();

      const layer1 = new THREE.Mesh(layerGeo, brownieMat);
      layer1.position.y = 0;
      group.add(layer1);

      const layer2 = new THREE.Mesh(layerGeo, brownieMat);
      layer2.position.y = 0.5;
      layer2.scale.set(0.92, 1, 0.92);
      group.add(layer2);

      const layer3 = new THREE.Mesh(layerGeo, topMat);
      layer3.position.y = 1.0;
      layer3.scale.set(0.84, 0.8, 0.84);
      group.add(layer3);

      // Chocolate chips (small spheres)
      const chipGeo = new THREE.SphereGeometry(0.08, 8, 8);
      const chipMat = new THREE.MeshStandardMaterial({ color: 0x1a0d06, roughness: 0.4 });
      const chipPositions = [
        [0.4, 1.25, 0.3], [-0.3, 1.25, -0.2], [0.1, 1.25, 0.5],
        [-0.5, 1.25, 0.4], [0.3, 1.25, -0.4], [-0.2, 1.22, 0.1],
      ];
      chipPositions.forEach(pos => {
        const chip = new THREE.Mesh(chipGeo, chipMat);
        chip.position.set(pos[0], pos[1], pos[2]);
        group.add(chip);
      });

      group.position.y = -0.3;
      scene.add(group);

      // Mouse tracking for interactive tilt
      let mouseX = 0, mouseY = 0;
      document.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
      });

      // Mark 3D as active, hide fallback image
      const heroVisual = canvas.closest('.hero-visual');
      if (heroVisual) heroVisual.classList.add('hero-3d-active');

      // Animation loop
      function animate() {
        requestAnimationFrame(animate);

        // Slow auto rotation + mouse tilt
        group.rotation.y += 0.003;
        group.rotation.x = mouseY * 0.12;
        group.rotation.z = mouseX * 0.05;

        // Gentle float
        group.position.y = -0.3 + Math.sin(Date.now() * 0.001) * 0.08;

        renderer.render(scene, camera);
      }
      animate();

      // Handle resize
      window.addEventListener('resize', () => {
        const nw = parent.offsetWidth || 480;
        const nh = parent.offsetHeight || 420;
        camera.aspect = nw / nh;
        camera.updateProjectionMatrix();
        renderer.setSize(nw, nh);
      });

    } catch (err) {
      console.warn('3D brownie init failed, using fallback image:', err);
    }
  }

  // --- 17d. MAGNETIC HOVER ---
  function initMagneticHover() {
    document.querySelectorAll('.magnetic-btn').forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0, 0)';
        btn.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
        setTimeout(() => { btn.style.transition = ''; }, 400);
      });
    });
  }

  // --- 17e. 3D TILT CARDS ---
  function initTiltCards() {
    document.querySelectorAll('.tilt-card').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) scale(1.02)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(800px) rotateY(0) rotateX(0) scale(1)';
      });
    });
  }

  // --- 17f. ANIMATED COUNTERS ---
  function initAnimatedCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseFloat(el.dataset.counter);
          const suffix = el.dataset.suffix || '';
          const prefix = el.dataset.prefix || '';
          const duration = 2000;
          const start = Date.now();

          function update() {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out quad
            const eased = 1 - (1 - progress) * (1 - progress);
            const current = target * eased;

            if (target >= 100) {
              el.textContent = prefix + Math.round(current).toLocaleString('en-IN') + suffix;
            } else {
              el.textContent = prefix + current.toFixed(1) + suffix;
            }

            if (progress < 1) {
              requestAnimationFrame(update);
            } else {
              // Final value
              if (target >= 100) {
                el.textContent = prefix + Math.round(target).toLocaleString('en-IN') + suffix;
              } else {
                el.textContent = prefix + target + suffix;
              }
            }
          }
          update();
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.3 });

    counters.forEach(el => observer.observe(el));
  }

  // --- 17g. NAVBAR SCROLL BEHAVIOR ---
  function initNavbarScroll() {
    const nav = document.querySelector('.nav-capsule');
    if (!nav) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 80) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    });
  }

  // --- 18. DOM READY INITIALIZER (SAFE PATTERN) ---
  function bootApp() {
    // Core functionality
    initUtmCapture();
    // initHeroSmokeCanvas() — removed, replaced by Three.js HeroParticles
    initParticles();
    loadCart();
    initCartDrawer();
    initBestsellersCarousel();
    initBoxBuilder();
    initMenuActions();
    initOrderModal();
    initWhatsAppCheckout();
    initContactForm();
    initFaqAndNavScroll();

    // Premium animation systems
    initNavbarScroll();
    initScrollReveals();
    initLenisSmooth();
    initHero3D();
    initMagneticHover();
    initTiltCards();
    initAnimatedCounters();

    console.log('🍫 The Brownie Hub Master Client Engine v10.0 Active — GSAP + Lenis + Three.js');
  }

  // Safe boot: works whether DOM is still loading or already loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootApp);
  } else {
    bootApp();
  }

  // Automatic Next.js Navigation Route Change Watcher
  let lastNavPath = window.location.pathname;
  setInterval(() => {
    if (window.location.pathname !== lastNavPath) {
      lastNavPath = window.location.pathname;
      setTimeout(bootApp, 60);
    }
  }, 200);

  window.addEventListener('popstate', () => {
    setTimeout(bootApp, 60);
  });
})();

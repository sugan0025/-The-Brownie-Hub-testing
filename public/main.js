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
      size: 6,
      name: 'Box of 6',
      price: 489,
      savings: 45,
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

  // --- 7. CART MANAGEMENT ---
  function loadCart() {
    try {
      const saved = localStorage.getItem('tbh_cart');
      if (saved) {
        state.cart = JSON.parse(saved);
      }
    } catch (e) {
      state.cart = [];
    }
    renderCart();
  }

  function saveCart() {
    try {
      localStorage.setItem('tbh_cart', JSON.stringify(state.cart));
    } catch (e) {}
    renderCart();
  }

  function addToCart(name, price, breakdown = null, isBox = false, image = null) {
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
    showToast(`Added to Cart! ${name} — ₹${price} 🍫`);

    // Bounce navbar cart badge
    const badge = document.getElementById('cart-count-badge');
    if (badge) {
      badge.classList.remove('bounce-badge');
      void badge.offsetWidth;
      badge.classList.add('bounce-badge');
    }

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
      showToast(`Removed "${removed.name}" from box.`);
      trackGA4('remove_from_cart', {
        currency: 'INR',
        value: removed.price,
        items: [{ item_name: removed.name, price: removed.price, quantity: 1 }],
      });
    }
    saveCart();
  }

  function calculateCartTotal() {
    return state.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  }

  function calculateTotalItemCount() {
    return state.cart.reduce((sum, item) => sum + item.qty, 0);
  }

  function renderCart() {
    const badge = document.getElementById('cart-count-badge');
    const headerCount = document.getElementById('cart-header-count');
    const totalDisplay = document.getElementById('cart-total-display');
    const subtotalDisplay = document.getElementById('cart-subtotal-display');
    const deliveryFeeDisplay = document.getElementById('cart-delivery-fee-display');
    const itemsContainer = document.getElementById('cart-items-container');
    const emptyState = document.getElementById('cart-empty-state');
    const footer = document.getElementById('cart-footer');
    const deliveryFill = document.getElementById('cart-delivery-fill');
    const deliveryMsg = document.getElementById('cart-delivery-msg');
    const noteSection = document.getElementById('cart-note-section');

    const totalCount = calculateTotalItemCount();
    const subtotal = calculateCartTotal();
    const freeDeliveryThreshold = 500;
    const isFreeDelivery = subtotal >= freeDeliveryThreshold;
    const deliveryFee = isFreeDelivery ? 0 : 49;
    const grandTotal = subtotal + deliveryFee;

    if (badge) badge.textContent = String(totalCount);
    if (headerCount) headerCount.textContent = `${totalCount} item${totalCount === 1 ? '' : 's'} selected`;
    if (subtotalDisplay) subtotalDisplay.textContent = `₹${subtotal}`;
    if (deliveryFeeDisplay) {
      deliveryFeeDisplay.textContent = isFreeDelivery ? 'FREE' : '₹49';
      deliveryFeeDisplay.style.color = isFreeDelivery ? '#51cf66' : 'var(--cream-muted)';
    }
    if (totalDisplay) totalDisplay.textContent = `₹${grandTotal}`;

    // Update Chennai Free Delivery Progress Meter
    if (deliveryFill && deliveryMsg) {
      if (subtotal === 0) {
        deliveryFill.style.width = '0%';
        deliveryMsg.innerHTML = '<span>🛵 Add ₹500 more for <strong>FREE Delivery</strong> across Chennai!</span>';
      } else if (isFreeDelivery) {
        deliveryFill.style.width = '100%';
        deliveryMsg.innerHTML = '<span>🎉 You unlocked <strong>FREE Delivery</strong> across Chennai!</span>';
      } else {
        const remaining = freeDeliveryThreshold - subtotal;
        const pct = Math.min(99, Math.round((subtotal / freeDeliveryThreshold) * 100));
        deliveryFill.style.width = `${pct}%`;
        deliveryMsg.innerHTML = `<span>🛵 Add <strong>₹${remaining}</strong> more for <strong>FREE Delivery</strong> across Chennai!</span>`;
      }
    }

    if (!itemsContainer) return;

    if (state.cart.length === 0) {
      if (emptyState) emptyState.style.display = 'block';
      if (footer) footer.style.display = 'none';
      if (noteSection) noteSection.style.display = 'none';
      itemsContainer.innerHTML = '';
      return;
    }

    if (emptyState) emptyState.style.display = 'none';
    if (footer) footer.style.display = 'block';
    if (noteSection) noteSection.style.display = 'block';

    itemsContainer.innerHTML = state.cart
      .map((item, idx) => {
        const imageSrc = item.image || '/images/brownies/classic-fudge.jpg';
        const breakdownHtml =
          item.breakdown && item.breakdown.length > 0
            ? `<div class="cart-item-tags">
                ${item.breakdown.map((b) => `<span class="cart-tag-chip">${b}</span>`).join('')}
               </div>`
            : '';

        return `
          <div class="cart-item-card">
            <img src="${imageSrc}" alt="${item.name}" class="cart-item-thumb" loading="lazy" />
            <div class="cart-item-info">
              <div class="cart-item-title-row">
                <h4 class="cart-item-title">${item.name}</h4>
                <button class="cart-item-delete-btn btn-cart-delete" data-index="${idx}" title="Remove item" aria-label="Remove item">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                  </svg>
                </button>
              </div>

              ${breakdownHtml}

              <div class="cart-item-bottom-row">
                <div class="cart-pill-stepper">
                  <button class="stepper-btn btn-cart-minus" data-index="${idx}" aria-label="Decrease quantity">−</button>
                  <span class="stepper-val mono-font">${item.qty}</span>
                  <button class="stepper-btn btn-cart-plus" data-index="${idx}" aria-label="Increase quantity">+</button>
                </div>
                <span class="cart-item-price mono-font">₹${item.price * item.qty}</span>
              </div>
            </div>
          </div>
        `;
      })
      .join('');
  }

  // Expose global cart API
  window.tbhAddToCart = addToCart;

  // --- 8. CART DRAWER TOGGLE ---
  function initCartDrawer() {
    const toggleBtn = document.getElementById('cart-toggle-btn');
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    const closeBtn = document.getElementById('cart-close-btn');
    const emptyBuilderBtn = document.getElementById('cart-empty-builder-btn');

    function openCart() {
      if (drawer) drawer.classList.add('open');
      if (overlay) overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
      trackGA4('view_cart', {
        currency: 'INR',
        value: calculateCartTotal(),
      });
    }

    function closeCart() {
      if (drawer) drawer.classList.remove('open');
      if (overlay) overlay.classList.remove('open');
      document.body.style.overflow = '';
    }

    if (toggleBtn) toggleBtn.addEventListener('click', openCart);
    if (closeBtn) closeBtn.addEventListener('click', closeCart);
    if (overlay) overlay.addEventListener('click', closeCart);
    if (emptyBuilderBtn) {
      emptyBuilderBtn.addEventListener('click', () => {
        closeCart();
      });
    }

    document.addEventListener('click', (e) => {
      const minusBtn = e.target.closest('.btn-cart-minus');
      const plusBtn = e.target.closest('.btn-cart-plus');
      const deleteBtn = e.target.closest('.btn-cart-delete');

      if (minusBtn) {
        const idx = parseInt(minusBtn.dataset.index, 10);
        updateCartQty(idx, -1);
      } else if (plusBtn) {
        const idx = parseInt(plusBtn.dataset.index, 10);
        updateCartQty(idx, 1);
      } else if (deleteBtn) {
        const idx = parseInt(deleteBtn.dataset.index, 10);
        updateCartQty(idx, -999);
      }
    });
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

  // --- 10. CUSTOM BOX BUILDER CONTROLLER (SIMULATOR) ---
  function initBoxBuilder() {
    const tierPills = document.querySelectorAll('#builder-tier-selector .tier-pill');
    const filterTabs = document.querySelectorAll('#builder-dietary-filter .filter-tab');
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

    const tierPrices = { 4: 329, 6: 489, 12: 929 };

    function renderBuilderSlots() {
      if (!slotsGrid) return;

      const size = state.builder.size;
      const count = state.builder.slots.length;
      const remaining = size - count;
      const pct = Math.round((count / size) * 100);

      if (boxTitle) boxTitle.textContent = state.builder.name;
      if (boxBadge) boxBadge.textContent = `${count} / ${size} Selected`;
      if (slotsText) slotsText.textContent = `${count} of ${size} slots filled`;
      if (progressFill) progressFill.style.width = `${pct}%`;
      if (priceDisplay) priceDisplay.textContent = `₹${state.builder.price}`;

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
          addCartBtn.innerHTML = `<span>Pack &amp; Add Box to Cart &bull; ₹${state.builder.price} &rarr;</span>`;
          addCartBtn.style.opacity = '1';
        } else {
          addCartBtn.setAttribute('disabled', 'true');
          addCartBtn.classList.remove('pulse-gold');
          addCartBtn.innerHTML = `<span>Pick ${remaining} more brownie${remaining > 1 ? 's' : ''} to pack box</span>`;
          addCartBtn.style.opacity = '0.65';
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
        const msg = `Hi The Brownie Hub! I would like to order a ${state.builder.name} (₹${state.builder.price}) with: ${breakdownStr}. Please confirm delivery in Chennai!`;
        whatsappBtn.href = `https://wa.me/${BAKERY_PHONE}?text=${encodeURIComponent(msg)}`;
      }

      // Generate visual slots with image thumbnails
      let html = '';
      for (let i = 0; i < size; i++) {
        if (i < count) {
          const slot = state.builder.slots[i];
          const isVeg = slot.dietary === 'veg';
          html += `
            <div class="slot-item filled">
              <img src="${slot.image}" alt="${slot.name}" class="slot-item-thumb" />
              <div style="display:flex;align-items:center;gap:4px;width:100%;justify-content:center;">
                <span class="dietary-dot ${isVeg ? 'veg' : 'nonveg'}" style="width:7px;height:7px;flex-shrink:0;"></span>
                <span class="slot-item-name">${slot.name}</span>
              </div>
              <button class="slot-item-remove btn-slot-remove" data-index="${i}" title="Remove" aria-label="Remove brownie">✕</button>
            </div>
          `;
        } else {
          html += `
            <div class="slot-item">
              <span style="font-size:0.75rem;font-weight:700;color:var(--caramel-bright);background:rgba(201,134,60,0.18);width:26px;height:26px;border-radius:50%;display:flex;align-items:center;justify-content:center;">${i + 1}</span>
              <span style="font-size:0.68rem;opacity:0.65;color:var(--cream-muted);">+ Drop Flavor</span>
            </div>
          `;
        }
      }
      slotsGrid.innerHTML = html;
    }

    // Step 1: Tier Selector
    tierPills.forEach((pill) => {
      pill.addEventListener('click', () => {
        tierPills.forEach((p) => p.classList.remove('active'));
        pill.classList.add('active');

        const size = parseInt(pill.dataset.size, 10);
        state.builder.size = size;
        state.builder.name = pill.dataset.name || `Box of ${size}`;
        state.builder.price = tierPrices[size] || 489;
        state.builder.slots = [];

        renderBuilderSlots();
        trackGA4('select_box_tier', { box_size: size, price: state.builder.price });
      });
    });

    // Step 2: Dietary Filter Tabs
    filterTabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        filterTabs.forEach((t) => t.classList.remove('active'));
        tab.classList.add('active');

        const filter = tab.dataset.filter;
        state.builder.activeFilter = filter;

        flavorCards.forEach((card) => {
          const dietary = card.dataset.dietary;
          if (filter === 'all' || dietary === filter) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });

    // Step 3: Flavor Picker Cards
    flavorCards.forEach((card) => {
      card.addEventListener('click', () => {
        if (state.builder.slots.length >= state.builder.size) {
          showToast(`Your ${state.builder.name} is full (${state.builder.size}/${state.builder.size})! Click "Add to Cart" or remove a slot.`);
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
        showToast(`Dropped ${name} into slot ${state.builder.slots.length}! 📦`);
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
        showToast('Cleared custom box selection.');
      });
    }

    // 1-Click Quick Fill Presets
    document.addEventListener('click', (e) => {
      const presetBtn = e.target.closest('.btn-preset-pack');
      if (presetBtn) {
        const preset = presetBtn.dataset.preset;
        let flavorList = [];
        if (preset === 'bestseller') {
          flavorList = [
            { name: 'Classic Fudge', dietary: 'veg', image: '/images/brownies/classic-fudge.jpg' },
            { name: 'Salted Caramel Swirl', dietary: 'veg', image: '/images/brownies/salted-caramel.jpg' },
            { name: 'Nutella Lava Heart', dietary: 'nonveg', image: '/images/brownies/nutella-stuffed.jpg' },
            { name: 'Walnut Crackle', dietary: 'veg', image: '/images/brownies/walnut-crackle.jpg' },
          ];
        } else if (preset === 'chocoholic') {
          flavorList = [
            { name: 'Double Chocolate Truffle', dietary: 'nonveg', image: '/images/brownies/double-chocolate.jpg' },
            { name: 'Classic Fudge', dietary: 'veg', image: '/images/brownies/classic-fudge.jpg' },
            { name: 'Belgian Choco-Chip Burst', dietary: 'nonveg', image: '/images/brownies/choco-chip.jpg' },
            { name: 'Nutella Lava Heart', dietary: 'nonveg', image: '/images/brownies/nutella-stuffed.jpg' },
          ];
        } else if (preset === 'nutty') {
          flavorList = [
            { name: 'Walnut Crackle', dietary: 'veg', image: '/images/brownies/walnut-crackle.jpg' },
            { name: 'Lotus Biscoff Crunch', dietary: 'veg', image: '/images/brownies/biscoff-crunch.jpg' },
            { name: 'Salted Caramel Swirl', dietary: 'veg', image: '/images/brownies/salted-caramel.jpg' },
          ];
        }

        state.builder.slots = [];
        for (let i = 0; i < state.builder.size; i++) {
          state.builder.slots.push({ ...flavorList[i % flavorList.length] });
        }
        playPopAudio();
        renderBuilderSlots();
        showToast(`Auto-packed your ${state.builder.name} with ${presetBtn.textContent.trim()}! 🎁`);
      }
    });

    // Add Custom Box to Cart
    if (addCartBtn) {
      addCartBtn.addEventListener('click', () => {
        if (state.builder.slots.length < state.builder.size) {
          showToast(`Please fill all ${state.builder.size} slots before adding to cart.`);
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

  // --- 11. MENU SECTION ADD-TO-CART CONTROLLER ---
  function initMenuActions() {
    document.addEventListener('click', (e) => {
      const addBtn = e.target.closest('.add-cart-btn');
      if (addBtn) {
        const name = addBtn.dataset.name;
        const price = Number(addBtn.dataset.price) || 0;
        const isBox = addBtn.dataset.isBox === 'true';
        const image = addBtn.dataset.image || '/images/brownies/classic-fudge.jpg';

        addToCart(name, price, null, isBox, image);

        // Instant visual feedback on button matching Rolling Oven v2
        const originalHtml = addBtn.innerHTML;
        addBtn.innerHTML = '<span>Added! ✓</span>';
        addBtn.style.background = 'linear-gradient(135deg, #2b8a3e, #40c057)';
        setTimeout(() => {
          addBtn.innerHTML = originalHtml;
          addBtn.style.background = '';
        }, 1200);
      }
    });
  }

  // --- 12. CHECKOUT & ORDER MODAL CONTROLLER ---
  function initOrderModal() {
    const modal = document.getElementById('order-modal');
    const overlay = document.getElementById('order-modal-overlay');
    const closeBtn = document.getElementById('order-modal-close-btn');
    const openCheckoutBtn = document.getElementById('cart-checkout-btn');
    const itemCountSpan = document.getElementById('order-modal-item-count');
    const totalSpan = document.getElementById('order-modal-total');
    const orderForm = document.getElementById('order-checkout-form');
    const formStep = document.getElementById('order-form-step');
    const successStep = document.getElementById('order-success-step');
    const submitBtn = document.getElementById('order-submit-btn');
    const paymentTabs = document.querySelectorAll('.payment-tab');
    const paymentMethodInput = document.getElementById('order-payment-method');

    function renderModalOrderSummary() {
      const itemsList = document.getElementById('order-modal-items-list');
      const totalSpan = document.getElementById('order-modal-total');

      const subtotal = calculateCartTotal();
      if (totalSpan) totalSpan.textContent = `₹${subtotal}`;

      if (!itemsList) return;

      if (state.cart.length === 0) {
        itemsList.innerHTML = '<div style="text-align:center;padding:12px;color:var(--cream-muted);font-size:0.88rem;">Your box is empty. Pick brownies from our menu!</div>';
        return;
      }

      let html = '';
      state.cart.forEach((item) => {
        const hasBreakdown = item.breakdown && item.breakdown.length > 0;
        const breakdownStr = hasBreakdown ? ` (${item.breakdown.join(', ')})` : '';

        html += `
          <div class="rolling-item-line">
            <span class="rolling-item-name-qty">${item.name} &times; ${item.qty}${breakdownStr}</span>
            <span class="rolling-item-price">₹${item.price * item.qty}</span>
          </div>
        `;
      });
      itemsList.innerHTML = html;
    }

    function openModal() {
      if (state.cart.length === 0) {
        showToast('Your box is empty! Pick your favorite brownies first 🍫');
        return;
      }

      const drawer = document.getElementById('cart-drawer');
      const cartOverlay = document.getElementById('cart-overlay');
      if (drawer) drawer.classList.remove('open');
      if (cartOverlay) cartOverlay.classList.remove('open');

      renderModalOrderSummary();

      if (formStep) formStep.style.display = 'block';
      if (successStep) successStep.style.display = 'none';

      if (modal) modal.classList.add('open');
      if (overlay) overlay.classList.add('open');
      document.body.style.overflow = 'hidden';

      trackGA4('begin_checkout', {
        currency: 'INR',
        value: calculateCartTotal(),
        items: state.cart.map((i) => ({ item_name: i.name, price: i.price, quantity: i.qty })),
      });
    }

    window.openRollingOrderModal = openModal;

    function closeModal() {
      if (modal) modal.classList.remove('open');
      if (overlay) overlay.classList.remove('open');
      document.body.style.overflow = '';
    }

    if (openCheckoutBtn) openCheckoutBtn.addEventListener('click', openModal);
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (overlay) overlay.addEventListener('click', closeModal);

    // Stepper buttons inside Rolling Modal
    document.addEventListener('click', (e) => {
      const modalMinus = e.target.closest('.btn-modal-minus');
      const modalPlus = e.target.closest('.btn-modal-plus');

      if (modalMinus) {
        const idx = parseInt(modalMinus.dataset.index, 10);
        updateCartQty(idx, -1);
        renderModalOrderSummary();
      } else if (modalPlus) {
        const idx = parseInt(modalPlus.dataset.index, 10);
        updateCartQty(idx, 1);
        renderModalOrderSummary();
      }
    });

    // WhatsApp Direct Order inside Rolling Modal
    const modalWaBtn = document.getElementById('order-modal-wa-btn');
    if (modalWaBtn) {
      modalWaBtn.addEventListener('click', () => {
        if (state.cart.length === 0) {
          showToast('Please add items to your cart first!');
          return;
        }
        const name = document.getElementById('order-customer-name')?.value || 'Foodie';
        const address = document.getElementById('order-delivery-address')?.value || 'Chennai';
        const phone = document.getElementById('order-customer-phone')?.value || '';
        const instructions = document.getElementById('order-instructions')?.value || '';

        const itemsText = state.cart
          .map((i) => {
            const bd = i.breakdown && i.breakdown.length > 0 ? ` (${i.breakdown.join(', ')})` : '';
            return `${i.qty}x ${i.name}${bd}`;
          })
          .join(', ');

        const grandTotal = calculateCartTotal() >= 500 ? calculateCartTotal() : calculateCartTotal() + 49;
        const msg = `Hi The Brownie Hub! I'd like to place an order:%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Address:* ${encodeURIComponent(address)}%0A*Items:* ${encodeURIComponent(itemsText)}%0A*Total:* ₹${grandTotal}${instructions ? `%0A*Note:* ${encodeURIComponent(instructions)}` : ''}%0A%0APlease confirm delivery in Chennai!`;

        window.open(`https://wa.me/${BAKERY_PHONE}?text=${msg}`, '_blank');
      });
    }

    paymentTabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        paymentTabs.forEach((t) => t.classList.remove('active'));
        tab.classList.add('active');
        const mode = tab.dataset.payment;
        if (paymentMethodInput) paymentMethodInput.value = mode;

        const upiBox = document.getElementById('upi-payment-box');
        if (upiBox) {
          upiBox.style.display = mode.includes('UPI') ? 'block' : 'none';
        }
      });
    });

    if (orderForm) {
      orderForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.textContent = 'Processing Order... ⏳';
        }

        const formData = new FormData(orderForm);
        const customerName = formData.get('customer_name');
        const customerPhone = formData.get('customer_phone');
        const customerEmail = formData.get('customer_email');
        const deliveryAddress = formData.get('delivery_address');
        const pincode = formData.get('pincode');
        const specialInstructions = formData.get('special_instructions');
        const paymentMethod = formData.get('payment_method') || 'UPI / QR Code';
        const honeypot = formData.get('b_website');

        const payload = {
          customer_name: customerName,
          customer_phone: customerPhone,
          customer_email: customerEmail,
          delivery_address: deliveryAddress,
          pincode: pincode,
          special_instructions: specialInstructions || '',
          payment_method: paymentMethod,
          order_type: 'The Brownie Hub Direct Web Order',
          items: state.cart.map((item) => ({
            name: item.name,
            qty: item.qty,
            price: item.price,
            breakdown: item.breakdown || [],
          })),
          total_amount: calculateCartTotal(),
          utm_source: state.utm.utm_source || '',
          utm_medium: state.utm.utm_medium || '',
          utm_campaign: state.utm.utm_campaign || '',
          b_website: honeypot || '',
        };

        try {
          const res = await fetch('/api/order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
          });

          const data = await res.json();

          if (res.ok && data.success) {
            const orderId = data.order_id || `TBH-${Date.now().toString().slice(-6)}`;
            const finalTotal = data.verified_total || payload.total_amount;

            const orderIdElem = document.getElementById('success-order-id');
            const orderAmountElem = document.getElementById('success-order-amount');
            const whatsappLink = document.getElementById('success-whatsapp-link');

            if (orderIdElem) orderIdElem.textContent = orderId;
            if (orderAmountElem) orderAmountElem.textContent = `₹${finalTotal}`;

            const itemsText = state.cart
              .map((i) => {
                const bd = i.breakdown && i.breakdown.length > 0 ? `\n    (${i.breakdown.join(', ')})` : '';
                return `• ${i.name} (x${i.qty}) - ₹${i.price * i.qty}${bd}`;
              })
              .join('\n');

            const waMessage =
              `🍫 *NEW ORDER CONFIRMATION — THE BROWNIE HUB*\n` +
              `------------------------------------\n` +
              `*Order ID:* ${orderId}\n` +
              `*Customer:* ${customerName}\n` +
              `*Phone:* ${customerPhone}\n` +
              `*Delivery Address:* ${deliveryAddress} (PIN: ${pincode})\n` +
              `*Payment Mode:* ${paymentMethod}\n\n` +
              `*Items Ordered:*\n${itemsText}\n\n` +
              `*Total Amount:* ₹${finalTotal}\n` +
              `*Notes:* ${specialInstructions || 'None'}\n` +
              `------------------------------------\n` +
              `Please confirm my order & dispatch status!`;

            if (whatsappLink) {
              whatsappLink.href = `https://wa.me/${BAKERY_PHONE}?text=${encodeURIComponent(waMessage)}`;
            }

            trackGA4('purchase', {
              transaction_id: orderId,
              value: finalTotal,
              currency: 'INR',
              payment_type: paymentMethod,
              items: state.cart.map((i) => ({ item_name: i.name, price: i.price, quantity: i.qty })),
            });

            state.cart = [];
            saveCart();

            playSuccessChime();
            if (formStep) formStep.style.display = 'none';
            if (successStep) successStep.style.display = 'block';
            showToast('Order confirmed! 🎉 Opening WhatsApp sync...');

            // Automatically open WhatsApp after 1.2s delay matching Rolling Oven v2
            const waTargetUrl = `https://wa.me/${BAKERY_PHONE}?text=${encodeURIComponent(waMessage)}`;
            setTimeout(() => {
              window.open(waTargetUrl, '_blank');
            }, 1200);
          } else {
            showToast(`Error: ${data.error || 'Failed to place order.'}`);
          }
        } catch (err) {
          console.error('Order submission error:', err);
          showToast('Network error while placing order. Please try WhatsApp checkout.');
        } finally {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Confirm Order & Complete';
          }
        }
      });
    }
  }

  // --- 13. 1-CLICK WHATSAPP CART CHECKOUT ---
  function initWhatsAppCheckout() {
    const waCheckoutBtn = document.getElementById('cart-whatsapp-checkout-btn');
    if (!waCheckoutBtn) return;

    waCheckoutBtn.addEventListener('click', async () => {
      if (state.cart.length === 0) {
        showToast('Your cart is empty!');
        return;
      }

      const total = calculateCartTotal();
      const itemsList = state.cart
        .map((i) => {
          const bd = i.breakdown && i.breakdown.length > 0 ? `\n    ↳ [${i.breakdown.join(', ')}]` : '';
          return `• ${i.name} (x${i.qty}) - ₹${i.price * i.qty}${bd}`;
        })
        .join('\n');

      const giftNoteElem = document.getElementById('cart-gift-note');
      const giftNote = giftNoteElem && giftNoteElem.value.trim() ? giftNoteElem.value.trim() : '';
      const giftNoteStr = giftNote ? `\n*Gift / Delivery Note:* ${giftNote}` : '';

      const utmParts = [];
      if (state.utm.utm_source) utmParts.push(`Source=${state.utm.utm_source}`);
      if (state.utm.utm_campaign) utmParts.push(`Campaign=${state.utm.utm_campaign}`);
      if (state.utm.utm_medium) utmParts.push(`Medium=${state.utm.utm_medium}`);
      const utmInfo = utmParts.length > 0 ? `\n*Ref:* ${utmParts.join(' | ')}` : '';

      const waText =
        `🍫 *1-CLICK WHATSAPP ORDER — THE BROWNIE HUB*\n` +
        `------------------------------------\n` +
        `Hello! I'd like to place an order from your online store:\n\n` +
        `*Items Ordered:*\n${itemsList}\n\n` +
        `*Total Amount:* ₹${total}\n` +
        `*Delivery Location:* Chennai, Tamil Nadu${giftNoteStr}${utmInfo}\n` +
        `------------------------------------\n` +
        `Please confirm my order & send your UPI payment QR!`;

      trackGA4('whatsapp_order_click', {
        value: total,
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
            payment_method: 'WhatsApp Pay / UPI',
            special_instructions: giftNote,
            items: state.cart.map((i) => ({ name: i.name, qty: i.qty, price: i.price, breakdown: i.breakdown || [] })),
            total_amount: total,
            utm_source: state.utm.utm_source || 'whatsapp_1click',
            utm_medium: state.utm.utm_medium || '',
            utm_campaign: state.utm.utm_campaign || '',
          }),
        });
      } catch (e) {}

      window.open(`https://wa.me/${BAKERY_PHONE}?text=${encodeURIComponent(waText)}`, '_blank');
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

  // --- 17h. INTERACTIVE 3D CRUST PARALLAX ---
  function init3DCrustParallax() {
    const heroVisual = document.querySelector('.hero-visual');
    const crustElements = document.querySelectorAll('.floating-crust-3d');
    if (!heroVisual || crustElements.length === 0) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;

    window.addEventListener('mousemove', (e) => {
      const rect = heroVisual.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      targetX = (e.clientX - centerX) / (window.innerWidth * 0.5);
      targetY = (e.clientY - centerY) / (window.innerHeight * 0.5);
    }, { passive: true });

    function renderParallax() {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      crustElements.forEach((el) => {
        const depth = parseFloat(el.dataset.depth || '25');
        const moveX = currentX * depth * 0.45;
        const moveY = currentY * depth * 0.45;
        const rotX = -currentY * depth * 0.25;
        const rotY = currentX * depth * 0.25;

        const img = el.querySelector('img');
        if (img) {
          img.style.transform = `translate3d(${moveX}px, ${moveY}px, ${depth}px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
        }
      });

      requestAnimationFrame(renderParallax);
    }
    requestAnimationFrame(renderParallax);
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
    init3DCrustParallax();
    initMagneticHover();
    initTiltCards();
    initAnimatedCounters();

    console.log('🍫 The Brownie Hub Master Client Engine v10.0 Active — GSAP + Lenis + Three.js + 3D Crust');
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

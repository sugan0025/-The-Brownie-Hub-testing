'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  t: number;               // Parametric progress along path (0 -> 1)
  speed: number;           // Flow velocity
  streamType: 'arc' | 'orbit'; // Main S-curve river or ambient brownie orbit
  offsetDist: number;      // Perpendicular displacement from stream
  orbitRadiusX: number;    // For orbital particles: X-radius
  orbitRadiusY: number;    // For orbital particles: Y-radius
  orbitAngle: number;      // For orbital particles: current angle
  orbitSpeed: number;      // Orbital angular velocity
  size: number;            // Current radius
  baseSize: number;        // Rest radius
  type: 'bokeh' | 'ember' | 'spark';
  color: string;           // Core hex/rgb
  glowColor: string;       // Halo rgba
  alpha: number;           // Current opacity
  maxAlpha: number;        // Peak opacity
  twinkleSpeed: number;    // Twinkle rate
  phase: number;           // Harmonic phase
  sparkleStar: boolean;    // Whether this spark flashes a 4-point starburst
}

export default function HeroParticles() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || 750;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resizeCanvas() {
      if (!container || !canvas || !ctx) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || 750;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resizeCanvas();

    // ─── Luxury Color Palette ───
    const PALETTE = [
      { core: '#FFFFFF', glow: 'rgba(255, 245, 215, 0.9)' },  // Pure Diamond Hot Spark
      { core: '#FFF4D0', glow: 'rgba(255, 230, 160, 0.8)' },  // Champagne Luster
      { core: '#F7D58B', glow: 'rgba(247, 213, 139, 0.7)' },  // Radiant Warm Gold
      { core: '#E8B66E', glow: 'rgba(232, 182, 110, 0.65)' }, // Rich Amber Glow
      { core: '#C9863C', glow: 'rgba(201, 134, 60, 0.55)' },  // Caramel Bronze
      { core: '#FF9E2C', glow: 'rgba(255, 158, 44, 0.45)' },  // Molten Honey
    ];

    // Helper: Dynamic brownie position tracking
    function getBrownieAnchor() {
      const brownieWrapper = document.querySelector('.hero-brownie-wrapper');
      if (brownieWrapper && container) {
        const rect = brownieWrapper.getBoundingClientRect();
        const heroRect = container.getBoundingClientRect();
        return {
          cx: rect.left - heroRect.left + rect.width * 0.52,
          cy: rect.top - heroRect.top + rect.height * 0.54,
          w: rect.width,
          h: rect.height,
        };
      }
      return {
        cx: width * 0.7,
        cy: height * 0.52,
        w: width * 0.36,
        h: height * 0.54,
      };
    }

    // ─── S-Curve Streamline Evaluation ───
    function evaluateStream(t: number, streamIdx: number, time: number) {
      const b = getBrownieAnchor();

      // P0: Origin behind lower-left base of brownie
      const p0x = b.cx - b.w * 0.32;
      const p0y = b.cy + b.h * 0.22;

      // P1: Mid-ascent curving gracefully behind the brownie crown & right shoulder
      const p1x = b.cx + b.w * 0.36;
      const p1y = b.cy - b.h * 0.35;

      // P2: Upper crest billowing upward-right towards the top right corner
      const p2x = Math.max(b.cx + b.w * 0.7, width * 0.84);
      const p2y = height * 0.18;

      // P3: Dispersal tail softly cascading down the right atmosphere
      const p3x = width * 0.98;
      const p3y = height * 0.48;

      const mt = 1 - t;
      const mt2 = mt * mt;
      const mt3 = mt2 * mt;
      const t2 = t * t;
      const t3 = t2 * t;

      let x = mt3 * p0x + 3 * mt2 * t * p1x + 3 * mt * t2 * p2x + t3 * p3x;
      let y = mt3 * p0y + 3 * mt2 * t * p1y + 3 * mt * t2 * p2y + t3 * p3y;

      // Tangent and normal vectors
      const dx = 3 * mt2 * (p1x - p0x) + 6 * mt * t * (p2x - p1x) + 3 * t2 * (p3x - p2x);
      const dy = 3 * mt2 * (p1y - p0y) + 6 * mt * t * (p2y - p1y) + 3 * t2 * (p3y - p2y);
      const len = Math.sqrt(dx * dx + dy * dy) || 1;
      const nx = -dy / len;
      const ny = dx / len;

      // Harmonic ribbon undulation
      const waveFreq = 2.4 + streamIdx * 0.6;
      const waveSpeed = 1.2 + streamIdx * 0.35;
      const waveOffset = Math.sin(t * waveFreq - time * waveSpeed + streamIdx * 1.6) * (20 + streamIdx * 10);

      return {
        x: x + nx * waveOffset,
        y: y + ny * waveOffset,
        nx,
        ny,
      };
    }

    // ─── Particle System Initialization (180 Particles) ───
    const PARTICLE_COUNT = 180;
    const particles: Particle[] = [];

    function resetParticle(p: Particle, initialSpawn = false) {
      const b = getBrownieAnchor();
      const isOrbit = Math.random() < 0.28; // 28% halo orbit around brownie, 72% sweeping stream

      p.streamType = isOrbit ? 'orbit' : 'arc';
      p.t = initialSpawn ? Math.random() : 0;
      p.speed = 0.06 + Math.random() * 0.11; // 9-16s path duration

      // Orbit properties
      p.orbitRadiusX = b.w * (0.35 + Math.random() * 0.45);
      p.orbitRadiusY = b.h * (0.28 + Math.random() * 0.4);
      p.orbitAngle = initialSpawn ? Math.random() * Math.PI * 2 : Math.random() * Math.PI * 2;
      p.orbitSpeed = (Math.random() > 0.5 ? 1 : -1) * (0.2 + Math.random() * 0.4);

      p.offsetDist = (Math.random() - 0.5) * (35 + Math.random() * 65);

      const r = Math.random();
      if (r < 0.18) {
        // Atmospheric Major Bokeh Disc (Large out-of-focus camera lens orbs)
        p.type = 'bokeh';
        p.baseSize = 16 + Math.random() * 26; // 16px to 42px
        p.maxAlpha = 0.14 + Math.random() * 0.22;
        const pal = PALETTE[Math.floor(Math.random() * 4)];
        p.color = pal.core;
        p.glowColor = pal.glow;
        p.sparkleStar = false;
      } else if (r < 0.72) {
        // Glowing Amber Aroma Embers (Medium radiant cores)
        p.type = 'ember';
        p.baseSize = 4.5 + Math.random() * 5.5; // 4.5px to 10px
        p.maxAlpha = 0.6 + Math.random() * 0.35;
        const pal = PALETTE[Math.floor(Math.random() * PALETTE.length)];
        p.color = pal.core;
        p.glowColor = pal.glow;
        p.sparkleStar = Math.random() < 0.25;
      } else {
        // Diamond Dust Sparks & Glitter
        p.type = 'spark';
        p.baseSize = 1.8 + Math.random() * 2.2;
        p.maxAlpha = 0.8 + Math.random() * 0.2;
        p.color = PALETTE[0].core;
        p.glowColor = PALETTE[0].glow;
        p.sparkleStar = Math.random() < 0.6;
      }

      p.size = p.baseSize;
      p.alpha = 0;
      p.twinkleSpeed = 2 + Math.random() * 4;
      p.phase = Math.random() * Math.PI * 2;
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const p: Particle = {
        t: 0,
        speed: 0.1,
        streamType: 'arc',
        offsetDist: 0,
        orbitRadiusX: 100,
        orbitRadiusY: 80,
        orbitAngle: 0,
        orbitSpeed: 0.3,
        size: 6,
        baseSize: 6,
        type: 'ember',
        color: PALETTE[0].core,
        glowColor: PALETTE[0].glow,
        alpha: 0,
        maxAlpha: 0.7,
        twinkleSpeed: 2,
        phase: 0,
        sparkleStar: false,
      };
      resetParticle(p, true);
      particles.push(p);
    }

    // ─── Interactive Mouse Convective & Magnetic Force ───
    const mouse = { x: -1000, y: -1000, vx: 0, vy: 0, radius: 140 };
    let lastMouseX = -1000, lastMouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const heroRect = container.getBoundingClientRect();
      const curX = e.clientX - heroRect.left;
      const curY = e.clientY - heroRect.top;
      mouse.vx = curX - lastMouseX;
      mouse.vy = curY - lastMouseY;
      lastMouseX = curX;
      lastMouseY = curY;
      mouse.x = curX;
      mouse.y = curY;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // ─── Starburst Glint Helper ───
    function drawStarGlint(c: CanvasRenderingContext2D, x: number, y: number, r: number, a: number) {
      c.save();
      c.globalAlpha = a;
      c.strokeStyle = 'rgba(255, 255, 255, 0.9)';
      c.lineWidth = 0.8;
      c.beginPath();
      // Horizontal cross
      c.moveTo(x - r * 2.8, y);
      c.lineTo(x + r * 2.8, y);
      // Vertical cross
      c.moveTo(x, y - r * 2.8);
      c.lineTo(x, y + r * 2.8);
      c.stroke();
      c.restore();
    }

    // ─── Animation Loop ───
    let animId: number;
    let lastTime = performance.now();
    let isVisible = true;

    const handleVisibility = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibility);
    window.addEventListener('resize', resizeCanvas);

    function render(now: number) {
      animId = requestAnimationFrame(render);
      if (!isVisible || !ctx) return;

      const dt = Math.min((now - lastTime) / 1000, 0.08);
      lastTime = now;
      const time = now * 0.001;
      const b = getBrownieAnchor();

      // Clear Canvas
      ctx.clearRect(0, 0, width, height);

      // ─── 1. VOLUMETRIC GOLDEN AURORA / BACKDROP BLOOM (Behind Brownie) ───
      ctx.save();
      ctx.globalCompositeOperation = 'screen';

      // Breathing ambient golden flare behind right shoulder
      const flareX = b.cx + b.w * 0.26;
      const flareY = b.cy - b.h * 0.16;
      const flarePulse = 1 + Math.sin(time * 1.2) * 0.08;
      const flareRadius = Math.max(160, b.w * 0.75) * flarePulse;

      const auroraGrad = ctx.createRadialGradient(flareX, flareY, 0, flareX, flareY, flareRadius);
      auroraGrad.addColorStop(0, 'rgba(255, 220, 140, 0.28)');
      auroraGrad.addColorStop(0.28, 'rgba(247, 180, 80, 0.18)');
      auroraGrad.addColorStop(0.55, 'rgba(201, 120, 40, 0.09)');
      auroraGrad.addColorStop(0.85, 'rgba(120, 50, 15, 0.03)');
      auroraGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = auroraGrad;
      ctx.beginPath();
      ctx.arc(flareX, flareY, flareRadius, 0, Math.PI * 2);
      ctx.fill();

      // ─── 2. SILKY GOLDEN SMOKE RIBBON WAVES ───
      const ribbonLayers = [
        { idx: 0, width: 85, color: 'rgba(247, 213, 139, 0.15)', blur: 24 },
        { idx: 1, width: 120, color: 'rgba(232, 160, 70, 0.11)', blur: 36 },
        { idx: 2, width: 50, color: 'rgba(255, 235, 175, 0.22)', blur: 16 },
      ];

      ribbonLayers.forEach((layer) => {
        ctx.beginPath();
        const steps = 42;
        let first = true;

        for (let s = 0; s <= steps; s++) {
          const t = s / steps;
          const pt = evaluateStream(t, layer.idx, time);

          // Mouse deflection on ribbon
          const dx = pt.x - mouse.x;
          const dy = pt.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          let mx = 0, my = 0;
          if (dist < mouse.radius && dist > 1) {
            const force = (1 - dist / mouse.radius) * 20;
            mx = (dx / dist) * force;
            my = (dy / dist) * force;
          }

          const px = pt.x + mx;
          const py = pt.y + my;

          if (first) {
            ctx.moveTo(px, py);
            first = false;
          } else {
            ctx.lineTo(px, py);
          }
        }

        ctx.strokeStyle = layer.color;
        ctx.lineWidth = layer.width;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.filter = `blur(${layer.blur}px)`;
        ctx.stroke();
        ctx.filter = 'none';
      });

      ctx.restore();

      // ─── 3. MULTI-TIER PARTICLES (Bokeh, Embers, Diamond Sparks) ───
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const p = particles[i];
        p.t += p.speed * dt;

        if (p.t >= 1) {
          resetParticle(p, false);
        }

        let px = 0, py = 0;

        if (p.streamType === 'arc') {
          // Follow sweeping S-curve river
          const streamPt = evaluateStream(p.t, i % 3, time);
          p.phase += p.twinkleSpeed * dt;
          const wobble = Math.sin(p.phase) * 8;
          px = streamPt.x + streamPt.nx * (p.offsetDist + wobble);
          py = streamPt.y + streamPt.ny * (p.offsetDist + wobble);
        } else {
          // Ambient Halo Orbit around the brownie
          p.orbitAngle += p.orbitSpeed * dt;
          p.phase += p.twinkleSpeed * dt;
          const wobble = Math.sin(p.phase * 0.8) * 6;
          px = b.cx + Math.cos(p.orbitAngle) * (p.orbitRadiusX + wobble);
          py = b.cy + Math.sin(p.orbitAngle) * (p.orbitRadiusY + wobble) - b.h * 0.1;
        }

        // Fluid Mouse Magnetism & Repulsion
        const mdx = px - mouse.x;
        const mdy = py - mouse.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < mouse.radius && mdist > 1) {
          // Combination of gentle push + magnetic orbital swirl
          const pushForce = (1 - mdist / mouse.radius) * 26;
          const swirlForce = (1 - mdist / mouse.radius) * 14;
          px += (mdx / mdist) * pushForce - (mdy / mdist) * swirlForce;
          py += (mdy / mdist) * pushForce + (mdx / mdist) * swirlForce;
        }

        // Lifecycle Alpha Envelope
        if (p.t < 0.14) {
          p.alpha = p.maxAlpha * (p.t / 0.14);
        } else if (p.t > 0.74) {
          p.alpha = p.maxAlpha * (1 - (p.t - 0.74) / 0.26);
        } else {
          p.alpha = p.maxAlpha;
        }

        // Shimmer / Twinkle factor
        const twinkle = 0.75 + Math.sin(p.phase * 2.2) * 0.25;
        const drawAlpha = Math.max(0, Math.min(1, p.alpha * twinkle));

        if (drawAlpha <= 0.01) continue;

        // ─── Render by Type ───
        if (p.type === 'bokeh') {
          // Large Out-of-Focus Bokeh Disc with Soft Caustic Edge
          const grad = ctx.createRadialGradient(px, py, 0, px, py, p.size);
          grad.addColorStop(0, p.glowColor.replace(/[\d\.]+\)$/, `${drawAlpha * 0.95})`));
          grad.addColorStop(0.5, p.glowColor.replace(/[\d\.]+\)$/, `${drawAlpha * 0.5})`));
          grad.addColorStop(0.82, p.glowColor.replace(/[\d\.]+\)$/, `${drawAlpha * 0.25})`));
          grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(px, py, p.size, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.type === 'ember') {
          // Warm Radiant Ember with Concentric Golden Halo
          const haloSize = p.size * 2.4;
          const grad = ctx.createRadialGradient(px, py, 0, px, py, haloSize);
          grad.addColorStop(0, p.color);
          grad.addColorStop(0.32, p.glowColor.replace(/[\d\.]+\)$/, `${drawAlpha * 0.75})`));
          grad.addColorStop(0.7, p.glowColor.replace(/[\d\.]+\)$/, `${drawAlpha * 0.2})`));
          grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(px, py, haloSize, 0, Math.PI * 2);
          ctx.fill();

          // Intense Hot Core
          ctx.fillStyle = p.color;
          ctx.globalAlpha = drawAlpha;
          ctx.beginPath();
          ctx.arc(px, py, p.size * 0.55, 0, Math.PI * 2);
          ctx.fill();
          ctx.globalAlpha = 1;

          // Occasional Starburst glint
          if (p.sparkleStar && twinkle > 0.92) {
            drawStarGlint(ctx, px, py, p.size * 1.5, drawAlpha * 0.85);
          }
        } else {
          // Diamond Dust Spark
          ctx.fillStyle = p.color;
          ctx.globalAlpha = drawAlpha;
          ctx.beginPath();
          ctx.arc(px, py, p.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.globalAlpha = 1;

          if (p.sparkleStar && twinkle > 0.88) {
            drawStarGlint(ctx, px, py, p.size * 2.2, drawAlpha);
          }
        }
      }

      ctx.restore();
    }

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="hero-particles-container"
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
        overflow: 'hidden',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          background: 'transparent',
        }}
      />
    </div>
  );
}

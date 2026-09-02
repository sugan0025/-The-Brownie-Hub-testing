'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  isOrbit: boolean;       // true: orbits around the dessert, false: ambient atmospheric drift
  angle: number;          // Orbital angle or phase (0 to 2*PI)
  speed: number;          // Orbital or drift velocity
  radiusOffsetX: number;  // Radial variation X
  radiusOffsetY: number;  // Radial variation Y
  verticalOffset: number; // Wave amplitude
  x: number;              // Current X position (for ambient)
  y: number;              // Current Y position (for ambient)
  vx: number;             // X drift velocity
  vy: number;             // Y drift velocity
  size: number;           // Current size
  baseSize: number;       // Base size
  type: 'bokeh' | 'ember' | 'spark';
  color: string;          // Core color
  glowColor: string;      // Glow color
  alpha: number;          // Current opacity
  maxAlpha: number;       // Peak opacity
  twinkleSpeed: number;   // Twinkle rate
  phase: number;          // Phase offset
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

    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas();
    });
    resizeObserver.observe(container);

    // Muted, Luxury Warm Amber Palette
    const PALETTE = [
      { core: '#FFF6E0', glow: 'rgba(255, 235, 175, 0.45)' }, // Warm Champagne
      { core: '#F7D58B', glow: 'rgba(247, 213, 139, 0.35)' }, // Soft Gold
      { core: '#E8B66E', glow: 'rgba(232, 182, 110, 0.3)' },  // Warm Amber
      { core: '#C9863C', glow: 'rgba(201, 134, 60, 0.25)' },  // Caramel Honey
      { core: '#B86E2A', glow: 'rgba(184, 110, 42, 0.2)' },   // Deep Bronze
    ];

    // Helper: Dynamic brownie / dessert anchor tracking
    function getDessertAnchor() {
      const isMobile = width <= 960;
      const visualEl =
        document.querySelector('.hero-transparent-video-container') ||
        document.querySelector('.hero-transparent-video-wrapper') ||
        document.querySelector('.hero-visual');

      if (visualEl && container) {
        const rect = visualEl.getBoundingClientRect();
        const heroRect = container.getBoundingClientRect();

        // Exact center coordinates inside the hero container
        const cx = isMobile
          ? width * 0.5
          : rect.left - heroRect.left + rect.width * 0.5;
        const cy = rect.top - heroRect.top + rect.height * 0.48;

        return {
          cx: Math.max(0, Math.min(width, cx)),
          cy: Math.max(100, Math.min(height, cy)),
          w: Math.max(rect.width, 260),
          h: Math.max(rect.height, 220),
          isMobile,
        };
      }

      // Proportional fallback based on mobile vs desktop layout
      return {
        cx: isMobile ? width * 0.5 : width * 0.72,
        cy: isMobile ? height * 0.76 : height * 0.50,
        w: isMobile ? width * 0.82 : width * 0.42,
        h: isMobile ? 300 : 440,
        isMobile,
      };
    }

    const ORBIT_COUNT = 55;   // Halo ring particles orbiting the dessert
    const AMBIENT_COUNT = 35; // Atmospheric drifting sparkles across the hero
    const TOTAL_PARTICLES = ORBIT_COUNT + AMBIENT_COUNT;

    const particles: Particle[] = [];

    function initParticle(isOrbit: boolean, initialAngle?: number): Particle {
      const angle = initialAngle !== undefined ? initialAngle : Math.random() * Math.PI * 2;
      const r = Math.random();

      let type: 'bokeh' | 'ember' | 'spark' = 'ember';
      let baseSize = 3.5;
      let maxAlpha = 0.35;

      if (r < 0.22) {
        type = 'bokeh';
        baseSize = 8 + Math.random() * 12;
        maxAlpha = 0.12 + Math.random() * 0.12;
      } else if (r < 0.72) {
        type = 'ember';
        baseSize = 3.0 + Math.random() * 3.0;
        maxAlpha = 0.35 + Math.random() * 0.25;
      } else {
        type = 'spark';
        baseSize = 1.6 + Math.random() * 1.6;
        maxAlpha = 0.45 + Math.random() * 0.3;
      }

      const pal = PALETTE[Math.floor(Math.random() * PALETTE.length)];

      return {
        isOrbit,
        angle,
        speed: (0.16 + Math.random() * 0.22) * (Math.random() > 0.1 ? 1 : -0.8),
        radiusOffsetX: (Math.random() - 0.5) * 36,
        radiusOffsetY: (Math.random() - 0.5) * 28,
        verticalOffset: (Math.random() - 0.5) * 20,
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 12,
        vy: -8 - Math.random() * 16, // Gentle upward atmospheric drift
        size: baseSize,
        baseSize,
        type,
        color: pal.core,
        glowColor: pal.glow,
        alpha: maxAlpha * 0.5,
        maxAlpha,
        twinkleSpeed: 1.2 + Math.random() * 2.2,
        phase: Math.random() * Math.PI * 2,
      };
    }

    // 1. Initialize Orbit Particles
    for (let i = 0; i < ORBIT_COUNT; i++) {
      const initialAngle = (i / ORBIT_COUNT) * Math.PI * 2 + (Math.random() - 0.5) * 0.15;
      particles.push(initParticle(true, initialAngle));
    }

    // 2. Initialize Ambient Atmosphere Particles
    for (let i = 0; i < AMBIENT_COUNT; i++) {
      particles.push(initParticle(false));
    }

    // Mouse Interaction
    const mouse = { x: -1000, y: -1000, radius: 120 };
    const handleMouseMove = (e: MouseEvent) => {
      const heroRect = container.getBoundingClientRect();
      mouse.x = e.clientX - heroRect.left;
      mouse.y = e.clientY - heroRect.top;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let animId: number;
    let lastTime = performance.now();
    let isVisible = true;

    const handleVisibility = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibility);

    function render(now: number) {
      animId = requestAnimationFrame(render);
      if (!isVisible || !ctx) return;

      const dt = Math.min((now - lastTime) / 1000, 0.08);
      lastTime = now;
      const b = getDessertAnchor();

      // Clear Canvas
      ctx.clearRect(0, 0, width, height);

      // Adaptive Ring Proportions
      const ringTilt = b.isMobile ? -0.08 : -0.15;
      const cosTilt = Math.cos(ringTilt);
      const sinTilt = Math.sin(ringTilt);

      const ringRadiusX = b.isMobile
        ? Math.min(width * 0.44, 185)
        : Math.min(b.w * 0.46, 270);
      const ringRadiusY = b.isMobile
        ? ringRadiusX * 0.46
        : ringRadiusX * 0.44;

      const ringCenterX = b.cx;
      const ringCenterY = b.cy;

      // ─── 1. AMBIENT HALO GLOW (Centered directly on the dessert) ───
      ctx.save();
      ctx.globalCompositeOperation = 'screen';

      const haloGrad = ctx.createRadialGradient(
        ringCenterX,
        ringCenterY,
        ringRadiusY * 0.3,
        ringCenterX,
        ringCenterY,
        ringRadiusX * 1.25
      );
      haloGrad.addColorStop(0, 'rgba(232, 182, 110, 0.06)');
      haloGrad.addColorStop(0.5, 'rgba(201, 134, 60, 0.025)');
      haloGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = haloGrad;
      ctx.beginPath();
      ctx.arc(ringCenterX, ringCenterY, ringRadiusX * 1.25, 0, Math.PI * 2);
      ctx.fill();

      // Subtle translucent orbital guide track
      ctx.strokeStyle = 'rgba(247, 213, 139, 0.035)';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.ellipse(ringCenterX, ringCenterY, ringRadiusX, ringRadiusY, ringTilt, 0, Math.PI * 2);
      ctx.stroke();

      ctx.restore();

      // ─── 2. PARTICLE SIMULATION ───
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';

      for (let i = 0; i < TOTAL_PARTICLES; i++) {
        const p = particles[i];
        p.phase += p.twinkleSpeed * dt;

        let px = 0;
        let py = 0;
        let depthFactor = 1.0;

        if (p.isOrbit) {
          // --- ORBITAL PARTICLES ---
          p.angle += p.speed * dt;
          if (p.angle > Math.PI * 2) p.angle -= Math.PI * 2;
          if (p.angle < 0) p.angle += Math.PI * 2;

          const rx = ringRadiusX + p.radiusOffsetX + Math.sin(p.phase * 0.6) * 6;
          const ry = ringRadiusY + p.radiusOffsetY + Math.cos(p.phase * 0.6) * 5;
          const rawX = Math.cos(p.angle) * rx;
          const rawY = Math.sin(p.angle) * ry;

          px = ringCenterX + (rawX * cosTilt - rawY * sinTilt);
          py = ringCenterY + (rawX * sinTilt + rawY * cosTilt) + Math.sin(p.phase) * p.verticalOffset;

          // Depth: particles in front (sin(p.angle) > 0) are brighter and larger
          depthFactor = 0.72 + Math.sin(p.angle) * 0.28;
        } else {
          // --- AMBIENT ATMOSPHERIC DRIFT PARTICLES ---
          p.x += p.vx * dt + Math.sin(p.phase * 0.5) * 0.4;
          p.y += p.vy * dt;

          if (p.y < -20) {
            p.y = height + 20;
            p.x = Math.random() * width;
          }
          if (p.x < -20) p.x = width + 20;
          if (p.x > width + 20) p.x = -20;

          px = p.x;
          py = p.y;
          depthFactor = 0.75 + Math.sin(p.phase * 0.8) * 0.25;
        }

        // Mouse displacement
        const dx = px - mouse.x;
        const dy = py - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius && dist > 1) {
          const force = (1 - dist / mouse.radius) * 14;
          px += (dx / dist) * force;
          py += (dy / dist) * force;
        }

        const twinkle = 0.8 + Math.sin(p.phase * 1.8) * 0.2;
        const currentAlpha = p.maxAlpha * depthFactor * twinkle;
        const currentSize = p.baseSize * depthFactor;

        if (currentAlpha <= 0.01) continue;

        if (p.type === 'bokeh') {
          const grad = ctx.createRadialGradient(px, py, 0, px, py, currentSize);
          grad.addColorStop(0, p.glowColor.replace(/[\d\.]+\)$/, `${currentAlpha * 0.8})`));
          grad.addColorStop(0.6, p.glowColor.replace(/[\d\.]+\)$/, `${currentAlpha * 0.3})`));
          grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(px, py, currentSize, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.type === 'ember') {
          const haloSize = currentSize * 2.2;
          const grad = ctx.createRadialGradient(px, py, 0, px, py, haloSize);
          grad.addColorStop(0, p.color);
          grad.addColorStop(0.4, p.glowColor.replace(/[\d\.]+\)$/, `${currentAlpha * 0.7})`));
          grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(px, py, haloSize, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = p.color;
          ctx.globalAlpha = currentAlpha;
          ctx.beginPath();
          ctx.arc(px, py, currentSize * 0.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.globalAlpha = 1;
        } else {
          ctx.fillStyle = p.color;
          ctx.globalAlpha = currentAlpha;
          ctx.beginPath();
          ctx.arc(px, py, currentSize * 0.7, 0, Math.PI * 2);
          ctx.fill();
          ctx.globalAlpha = 1;
        }
      }

      ctx.restore();
    }

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
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

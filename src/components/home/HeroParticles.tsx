'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  angle: number;         // Current orbital angle around the ring (0 to 2*PI)
  speed: number;         // Orbital velocity (radians/sec)
  radiusOffsetX: number; // Slight radial variation X
  radiusOffsetY: number; // Slight radial variation Y
  verticalOffset: number;// Z/Y vertical wave amplitude
  size: number;          // Particle radius
  baseSize: number;      // Base radius
  type: 'bokeh' | 'ember' | 'spark';
  color: string;         // Core color
  glowColor: string;     // Halo color
  alpha: number;         // Current opacity
  maxAlpha: number;      // Peak opacity (toned down for subtle elegance)
  twinkleSpeed: number;  // Subtle breathing twinkle
  phase: number;         // Phase offset for breathing
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

    // Muted, Luxury Warm Amber Palette (Subtle & Elegant, not harsh or blinding)
    const PALETTE = [
      { core: '#FFF6E0', glow: 'rgba(255, 235, 175, 0.45)' }, // Warm Champagne
      { core: '#F7D58B', glow: 'rgba(247, 213, 139, 0.35)' }, // Soft Gold
      { core: '#E8B66E', glow: 'rgba(232, 182, 110, 0.3)' },  // Warm Amber
      { core: '#C9863C', glow: 'rgba(201, 134, 60, 0.25)' },  // Caramel Honey
      { core: '#B86E2A', glow: 'rgba(184, 110, 42, 0.2)' },   // Deep Bronze
    ];

    // Helper: Dynamic brownie position tracking
    function getBrownieAnchor() {
      const brownieWrapper = document.querySelector('.hero-brownie-wrapper');
      if (brownieWrapper && container) {
        const rect = brownieWrapper.getBoundingClientRect();
        const heroRect = container.getBoundingClientRect();
        return {
          cx: rect.left - heroRect.left + rect.width * 0.5,
          cy: rect.top - heroRect.top + rect.height * 0.5,
          w: rect.width,
          h: rect.height,
        };
      }
      return {
        cx: width * 0.68,
        cy: height * 0.52,
        w: width * 0.35,
        h: height * 0.52,
      };
    }

    // ─── Orbital Ring Parameters ───
    const PARTICLE_COUNT = 90; // Balanced count for clean, high-end minimalism
    const RING_TILT = -0.22;   // ~ -12.5 deg 3D perspective tilt
    const cosTilt = Math.cos(RING_TILT);
    const sinTilt = Math.sin(RING_TILT);

    const particles: Particle[] = [];

    function initParticle(initialAngle?: number): Particle {
      const angle = initialAngle !== undefined ? initialAngle : Math.random() * Math.PI * 2;
      const r = Math.random();

      let type: 'bokeh' | 'ember' | 'spark' = 'ember';
      let baseSize = 4;
      let maxAlpha = 0.35;

      if (r < 0.2) {
        // Soft background bokeh circle (subdued, out-of-focus)
        type = 'bokeh';
        baseSize = 10 + Math.random() * 14;
        maxAlpha = 0.12 + Math.random() * 0.12;
      } else if (r < 0.75) {
        // Glowing Amber Ring Embers
        type = 'ember';
        baseSize = 3.5 + Math.random() * 3.5;
        maxAlpha = 0.35 + Math.random() * 0.25;
      } else {
        // Delicate Diamond Sparkles
        type = 'spark';
        baseSize = 1.8 + Math.random() * 1.6;
        maxAlpha = 0.45 + Math.random() * 0.25;
      }

      const pal = PALETTE[Math.floor(Math.random() * PALETTE.length)];

      return {
        angle,
        speed: (0.15 + Math.random() * 0.2) * (Math.random() > 0.1 ? 1 : -0.8), // Smooth orbital drift (18-30s per loop)
        radiusOffsetX: (Math.random() - 0.5) * 45,
        radiusOffsetY: (Math.random() - 0.5) * 35,
        verticalOffset: (Math.random() - 0.5) * 24,
        size: baseSize,
        baseSize,
        type,
        color: pal.core,
        glowColor: pal.glow,
        alpha: maxAlpha * 0.5,
        maxAlpha,
        twinkleSpeed: 1.2 + Math.random() * 2,
        phase: Math.random() * Math.PI * 2,
      };
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // Distribute evenly around the ring on initial load
      const initialAngle = (i / PARTICLE_COUNT) * Math.PI * 2 + (Math.random() - 0.5) * 0.2;
      particles.push(initParticle(initialAngle));
    }

    // ─── Mouse Interaction ───
    const mouse = { x: -1000, y: -1000, radius: 120 };
    const handleMouseMove = (e: MouseEvent) => {
      const heroRect = container.getBoundingClientRect();
      mouse.x = e.clientX - heroRect.left;
      mouse.y = e.clientY - heroRect.top;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

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

      // Base Elliptical Ring Radii
      const ringRadiusX = Math.max(160, b.w * 0.56);
      const ringRadiusY = Math.max(90, b.h * 0.3);
      const ringCenterX = b.cx;
      const ringCenterY = b.cy - b.h * 0.04;

      // ─── 1. SUBTLE AMBIENT RING GLOW (Very soft, muted halo) ───
      ctx.save();
      ctx.globalCompositeOperation = 'screen';

      // Soft subtle halo around brownie
      const haloGrad = ctx.createRadialGradient(
        ringCenterX,
        ringCenterY,
        ringRadiusY * 0.4,
        ringCenterX,
        ringCenterY,
        ringRadiusX * 1.3
      );
      haloGrad.addColorStop(0, 'rgba(232, 182, 110, 0.06)');
      haloGrad.addColorStop(0.5, 'rgba(201, 134, 60, 0.03)');
      haloGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = haloGrad;
      ctx.beginPath();
      ctx.arc(ringCenterX, ringCenterY, ringRadiusX * 1.3, 0, Math.PI * 2);
      ctx.fill();

      // Delicate translucent orbital ring track
      ctx.strokeStyle = 'rgba(247, 213, 139, 0.04)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.ellipse(ringCenterX, ringCenterY, ringRadiusX, ringRadiusY, RING_TILT, 0, Math.PI * 2);
      ctx.stroke();

      ctx.restore();

      // ─── 2. PARTICLES FORMING THE RING ───
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const p = particles[i];

        // Orbit around the ring
        p.angle += p.speed * dt;
        if (p.angle > Math.PI * 2) p.angle -= Math.PI * 2;
        if (p.angle < 0) p.angle += Math.PI * 2;

        p.phase += p.twinkleSpeed * dt;

        // Un-tilted orbital point
        const rx = ringRadiusX + p.radiusOffsetX + Math.sin(p.phase * 0.6) * 8;
        const ry = ringRadiusY + p.radiusOffsetY + Math.cos(p.phase * 0.6) * 6;
        const rawX = Math.cos(p.angle) * rx;
        const rawY = Math.sin(p.angle) * ry;

        // Apply 3D tilt rotation: [x', y'] = [x*cos - y*sin, x*sin + y*cos]
        let px = ringCenterX + (rawX * cosTilt - rawY * sinTilt);
        let py = ringCenterY + (rawX * sinTilt + rawY * cosTilt) + Math.sin(p.phase) * p.verticalOffset;

        // Mouse interaction (gentle displacement)
        const dx = px - mouse.x;
        const dy = py - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius && dist > 1) {
          const force = (1 - dist / mouse.radius) * 16;
          px += (dx / dist) * force;
          py += (dy / dist) * force;
        }

        // Depth perception: particles in front (lower half of ring) are slightly brighter & larger
        // sin(p.angle) > 0 is front, sin(p.angle) < 0 is behind
        const depthFactor = 0.75 + Math.sin(p.angle) * 0.25; // 0.5 (back) to 1.0 (front)

        // Subtle breathing twinkle
        const twinkle = 0.8 + Math.sin(p.phase * 1.8) * 0.2;
        const currentAlpha = p.maxAlpha * depthFactor * twinkle;
        const currentSize = p.baseSize * depthFactor;

        if (currentAlpha <= 0.01) continue;

        if (p.type === 'bokeh') {
          // Soft Out-of-Focus Bokeh Disc
          const grad = ctx.createRadialGradient(px, py, 0, px, py, currentSize);
          grad.addColorStop(0, p.glowColor.replace(/[\d\.]+\)$/, `${currentAlpha * 0.8})`));
          grad.addColorStop(0.6, p.glowColor.replace(/[\d\.]+\)$/, `${currentAlpha * 0.3})`));
          grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(px, py, currentSize, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.type === 'ember') {
          // Warm Glowing Amber Ring Ember
          const haloSize = currentSize * 2.2;
          const grad = ctx.createRadialGradient(px, py, 0, px, py, haloSize);
          grad.addColorStop(0, p.color);
          grad.addColorStop(0.4, p.glowColor.replace(/[\d\.]+\)$/, `${currentAlpha * 0.7})`));
          grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(px, py, haloSize, 0, Math.PI * 2);
          ctx.fill();

          // Core Point
          ctx.fillStyle = p.color;
          ctx.globalAlpha = currentAlpha;
          ctx.beginPath();
          ctx.arc(px, py, currentSize * 0.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.globalAlpha = 1;
        } else {
          // Delicate Diamond Spark
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

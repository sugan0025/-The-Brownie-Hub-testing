'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  t: number;             // Parametric position along stream (0 to 1)
  speed: number;         // Progression rate per second
  streamIndex: number;   // Which harmonic sub-stream it follows
  offsetDist: number;    // Distance from central streamline
  offsetAngle: number;   // Angle offset around stream normal
  size: number;          // Current radius
  baseSize: number;      // Base radius
  type: 'bokeh' | 'ember' | 'spark';
  color: string;         // Hex color
  glowColor: string;     // Glow aura color
  alpha: number;         // Current opacity
  maxAlpha: number;      // Peak opacity
  twinkleSpeed: number;  // Twinkle oscillation rate
  phase: number;         // Phase offset for harmonic wave
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

    // Palette matching user reference: Champagne Gold, Amber Caramel, Molten Glow
    const PALETTE = [
      { core: '#FFF6DF', glow: 'rgba(255, 235, 175, 0.8)' }, // Hot Diamond Spark
      { core: '#F7D58B', glow: 'rgba(247, 213, 139, 0.65)' }, // Champagne Gold
      { core: '#E8B66E', glow: 'rgba(232, 182, 110, 0.6)' },  // Warm Amber
      { core: '#C9863C', glow: 'rgba(201, 134, 60, 0.5)' },   // Caramel Bronze
      { core: '#B86E2A', glow: 'rgba(184, 110, 42, 0.4)' },   // Deep Chocolate Gold
    ];

    // Helper: Dynamic brownie position tracking
    function getBrownieAnchor() {
      const brownieWrapper = document.querySelector('.hero-brownie-wrapper');
      if (brownieWrapper && container) {
        const rect = brownieWrapper.getBoundingClientRect();
        const heroRect = container.getBoundingClientRect();
        return {
          cx: rect.left - heroRect.left + rect.width * 0.5,
          cy: rect.top - heroRect.top + rect.height * 0.52,
          w: rect.width,
          h: rect.height,
        };
      }
      return {
        cx: width * 0.68,
        cy: height * 0.52,
        w: width * 0.35,
        h: height * 0.55,
      };
    }

    // ─── Streamline Spline Evaluation (Matching Reference S-Curve) ───
    // Evaluates a point along the sweeping golden chocolate river
    function evaluateStream(t: number, streamIdx: number, time: number) {
      const b = getBrownieAnchor();

      // P0: Origin behind / under the brownie plate
      const p0x = b.cx - b.w * 0.28;
      const p0y = b.cy + b.h * 0.25;

      // P1: Mid lift swooping around the right shoulder of the brownie
      const p1x = b.cx + b.w * 0.38;
      const p1y = b.cy - b.h * 0.32;

      // P2: Upper crest billowing towards the top right (near navbar / cart)
      const p2x = Math.max(b.cx + b.w * 0.65, width * 0.82);
      const p2y = height * 0.22;

      // P3: Sweeping tail cascading down the right atmosphere
      const p3x = width * 0.98;
      const p3y = height * 0.52;

      // Cubic Bezier interpolation: B(t) = (1-t)^3 P0 + 3(1-t)^2 t P1 + 3(1-t)t^2 P2 + t^3 P3
      const mt = 1 - t;
      const mt2 = mt * mt;
      const mt3 = mt2 * mt;
      const t2 = t * t;
      const t3 = t2 * t;

      let x = mt3 * p0x + 3 * mt2 * t * p1x + 3 * mt * t2 * p2x + t3 * p3x;
      let y = mt3 * p0y + 3 * mt2 * t * p1y + 3 * mt * t2 * p2y + t3 * p3y;

      // Derivative for stream tangent & normal vectors
      const dx = 3 * mt2 * (p1x - p0x) + 6 * mt * t * (p2x - p1x) + 3 * t2 * (p3x - p2x);
      const dy = 3 * mt2 * (p1y - p0y) + 6 * mt * t * (p2y - p1y) + 3 * t2 * (p3y - p2y);
      const len = Math.sqrt(dx * dx + dy * dy) || 1;
      const nx = -dy / len; // Normal vector X
      const ny = dx / len;  // Normal vector Y

      // Harmonic ribbon undulation (sine wave ripple)
      const waveFreq = 2.8 + streamIdx * 0.7;
      const waveSpeed = 1.4 + streamIdx * 0.3;
      const waveOffset = Math.sin(t * waveFreq - time * waveSpeed + streamIdx * 1.5) * (18 + streamIdx * 8);

      return {
        x: x + nx * waveOffset,
        y: y + ny * waveOffset,
        nx,
        ny,
      };
    }

    // ─── Particle Initialization ───
    const PARTICLE_COUNT = 160;
    const particles: Particle[] = [];

    function resetParticle(p: Particle, initialSpawn = false) {
      p.t = initialSpawn ? Math.random() : 0;
      p.speed = 0.07 + Math.random() * 0.12; // Flows through in 8-14s
      p.streamIndex = Math.floor(Math.random() * 3);
      p.offsetDist = (Math.random() - 0.5) * (30 + Math.random() * 55);
      p.offsetAngle = Math.random() * Math.PI * 2;

      const r = Math.random();
      if (r < 0.16) {
        // Atmospheric Soft Bokeh Disc (out-of-focus background orbs)
        p.type = 'bokeh';
        p.baseSize = 14 + Math.random() * 18;
        p.maxAlpha = 0.12 + Math.random() * 0.22;
        p.color = PALETTE[Math.floor(Math.random() * 3)].core;
        p.glowColor = PALETTE[Math.floor(Math.random() * 3)].glow;
      } else if (r < 0.75) {
        // Glowing Amber Aroma Embers
        p.type = 'ember';
        p.baseSize = 4.5 + Math.random() * 4.5;
        p.maxAlpha = 0.55 + Math.random() * 0.35;
        const col = PALETTE[Math.floor(Math.random() * PALETTE.length)];
        p.color = col.core;
        p.glowColor = col.glow;
      } else {
        // Bright Diamond Sparks
        p.type = 'spark';
        p.baseSize = 2 + Math.random() * 2;
        p.maxAlpha = 0.75 + Math.random() * 0.25;
        p.color = PALETTE[0].core;
        p.glowColor = PALETTE[0].glow;
      }

      p.size = p.baseSize;
      p.alpha = 0;
      p.twinkleSpeed = 2 + Math.random() * 3.5;
      p.phase = Math.random() * Math.PI * 2;
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const p: Particle = {
        t: 0,
        speed: 0.1,
        streamIndex: 0,
        offsetDist: 0,
        offsetAngle: 0,
        size: 5,
        baseSize: 5,
        type: 'ember',
        color: PALETTE[0].core,
        glowColor: PALETTE[0].glow,
        alpha: 0,
        maxAlpha: 0.7,
        twinkleSpeed: 2,
        phase: 0,
      };
      resetParticle(p, true);
      particles.push(p);
    }

    // ─── Mouse Interaction ───
    const mouse = { x: -1000, y: -1000, radius: 130 };
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

      // Clear frame
      ctx.clearRect(0, 0, width, height);

      // ─── 1. RENDER FLOWING SILK RIBBON WAVES (The Luminous Golden Smoke) ───
      ctx.save();
      ctx.globalCompositeOperation = 'screen';

      const ribbonLayers = [
        { idx: 0, width: 75, alpha: 0.14, color: 'rgba(232, 182, 110, 0.18)' },
        { idx: 1, width: 110, alpha: 0.09, color: 'rgba(201, 134, 60, 0.15)' },
        { idx: 2, width: 45, alpha: 0.18, color: 'rgba(255, 235, 175, 0.22)' },
      ];

      ribbonLayers.forEach((layer) => {
        ctx.beginPath();
        const steps = 40;
        let first = true;

        for (let s = 0; s <= steps; s++) {
          const t = s / steps;
          const pt = evaluateStream(t, layer.idx, time);

          // Taper envelope (thinner at origin & tail, wide at crest)
          const taper = Math.sin(t * Math.PI);
          const currentWidth = layer.width * taper;

          // Mouse deflection
          const dx = pt.x - mouse.x;
          const dy = pt.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          let mx = 0, my = 0;
          if (dist < mouse.radius && dist > 1) {
            const force = (1 - dist / mouse.radius) * 22;
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
        ctx.filter = `blur(${Math.max(12, layer.width * 0.35)}px)`;
        ctx.stroke();
        ctx.filter = 'none';
      });

      ctx.restore();

      // ─── 2. RENDER FLOWING PARTICLES & BOKEH DISCS ───
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const p = particles[i];
        p.t += p.speed * dt;

        if (p.t >= 1) {
          resetParticle(p, false);
        }

        // Get position on streamline
        const streamPt = evaluateStream(p.t, p.streamIndex, time);

        // Perpendicular offset + gentle turbulence
        p.phase += p.twinkleSpeed * dt;
        const wobble = Math.sin(p.phase) * 6;
        let px = streamPt.x + streamPt.nx * (p.offsetDist + wobble);
        let py = streamPt.y + streamPt.ny * (p.offsetDist + wobble);

        // Mouse convective deflection
        const mdx = px - mouse.x;
        const mdy = py - mouse.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < mouse.radius && mdist > 1) {
          const force = (1 - mdist / mouse.radius) * 28;
          px += (mdx / mdist) * force;
          py += (mdy / mdist) * force;
        }

        // Lifecycle alpha fade (fade in -> peak -> fade out)
        if (p.t < 0.15) {
          p.alpha = p.maxAlpha * (p.t / 0.15);
        } else if (p.t > 0.72) {
          p.alpha = p.maxAlpha * (1 - (p.t - 0.72) / 0.28);
        } else {
          p.alpha = p.maxAlpha;
        }

        // Twinkle factor
        const twinkle = 0.75 + Math.sin(p.phase * 2) * 0.25;
        const drawAlpha = Math.max(0, Math.min(1, p.alpha * twinkle));

        if (drawAlpha <= 0.01) continue;

        if (p.type === 'bokeh') {
          // Soft Out-of-Focus Bokeh Orb with radial gradient
          const grad = ctx.createRadialGradient(px, py, 0, px, py, p.size);
          grad.addColorStop(0, p.glowColor.replace(/[\d\.]+\)$/, `${drawAlpha * 0.85})`));
          grad.addColorStop(0.4, p.glowColor.replace(/[\d\.]+\)$/, `${drawAlpha * 0.4})`));
          grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(px, py, p.size, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.type === 'ember') {
          // Warm Glowing Amber Ember (Halo + Core)
          const grad = ctx.createRadialGradient(px, py, 0, px, py, p.size * 2.2);
          grad.addColorStop(0, p.color);
          grad.addColorStop(0.35, p.glowColor.replace(/[\d\.]+\)$/, `${drawAlpha * 0.7})`));
          grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(px, py, p.size * 2.2, 0, Math.PI * 2);
          ctx.fill();

          // Bright Core Point
          ctx.fillStyle = p.color;
          ctx.globalAlpha = drawAlpha;
          ctx.beginPath();
          ctx.arc(px, py, p.size * 0.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.globalAlpha = 1;
        } else {
          // Sharp Diamond Spark with Specular Cross Glow
          ctx.fillStyle = p.color;
          ctx.globalAlpha = drawAlpha;
          ctx.beginPath();
          ctx.arc(px, py, p.size, 0, Math.PI * 2);
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

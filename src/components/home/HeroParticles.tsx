'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Particle {
  p0x: number;
  p0y: number;
  p1x: number;
  p1y: number;
  p2x: number;
  p2y: number;
  x: number;
  y: number;
  z: number;
  t: number;
  speed: number;
  size: number;
  baseSize: number;
  color: THREE.Color;
  alpha: number;
  maxAlpha: number;
  wobbleSpeed: number;
  wobbleAmp: number;
  phase: number;
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

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || 750;

    // 1. Three.js Scene & Orthographic Camera (1:1 with screen pixels)
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(0, width, height, 0, -100, 100);
    camera.position.z = 10;

    // 2. WebGL Renderer with crystal-clear transparency
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setSize(width, height);
      renderer.setClearColor(0x000000, 0);
    } catch (e) {
      console.warn('WebGL init failed for hero particles:', e);
      return;
    }

    // 3. Procedural Glowing Circular Ember Texture
    function createEmberTexture(): THREE.Texture {
      const tCanvas = document.createElement('canvas');
      tCanvas.width = 64;
      tCanvas.height = 64;
      const ctx = tCanvas.getContext('2d')!;

      const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      grad.addColorStop(0.18, 'rgba(255, 242, 190, 0.95)');
      grad.addColorStop(0.42, 'rgba(247, 213, 139, 0.65)');
      grad.addColorStop(0.72, 'rgba(201, 134, 60, 0.22)');
      grad.addColorStop(1, 'rgba(160, 75, 20, 0)');

      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 64, 64);

      const texture = new THREE.CanvasTexture(tCanvas);
      texture.needsUpdate = true;
      return texture;
    }

    const emberTexture = createEmberTexture();

    // 4. Curated Luxury Chocolate & Gold Palette
    const PALETTE = [
      new THREE.Color('#FFF4D0'), // Bright hot spark
      new THREE.Color('#F7D58B'), // Radiant champagne gold
      new THREE.Color('#E8B66E'), // Warm amber
      new THREE.Color('#C9863C'), // Rich caramel
      new THREE.Color('#B86E2A'), // Deep bronze gold
    ];

    // Helper: get brownie visual bounding box
    function getBrownieCenter() {
      const brownieWrapper = document.querySelector('.hero-brownie-wrapper');
      if (brownieWrapper) {
        const rect = brownieWrapper.getBoundingClientRect();
        const heroRect = container.getBoundingClientRect();
        return {
          cx: rect.left - heroRect.left + rect.width * 0.52,
          cy: rect.top - heroRect.top + rect.height * 0.55,
          w: rect.width,
          h: rect.height,
        };
      }
      return {
        cx: width * 0.72,
        cy: height * 0.58,
        w: width * 0.35,
        h: height * 0.5,
      };
    }

    // 5. Particle System with Curved Bezier Aroma Trajectory
    const PARTICLE_COUNT = 100;
    const particles: Particle[] = [];

    function resetParticle(p: Particle, initialSpawn = false) {
      const b = getBrownieCenter();

      // P0: Start near brownie stack (concentrated around chocolate base & plate)
      const p0x = b.cx + (Math.random() - 0.45) * (b.w * 0.65);
      const p0y = b.cy + (Math.random() - 0.1) * (b.h * 0.4);

      // P1: Mid control point curving gracefully upward and outward
      const curveDir = Math.random() > 0.3 ? 1 : -0.5; // Predominantly curves up-right
      const p1x = p0x + curveDir * (60 + Math.random() * 140);
      const p1y = p0y - (140 + Math.random() * 180);

      // P2: Atmospheric dispersal point (rising past top of hero)
      const p2x = p1x + (Math.random() - 0.2) * 160;
      const p2y = Math.min(-20, p1y - (140 + Math.random() * 200));

      p.p0x = p0x;
      p.p0y = p0y;
      p.p1x = p1x;
      p.p1y = p1y;
      p.p2x = p2x;
      p.p2y = p2y;

      p.t = initialSpawn ? Math.random() : 0;
      p.speed = 0.08 + Math.random() * 0.14; // Completes curve in 4-8 seconds
      p.z = (Math.random() - 0.5) * 40;

      // Sizing tiers matching reference image
      const rand = Math.random();
      if (rand < 0.45) {
        // Micro-dust / fine twinkling embers
        p.baseSize = 3 + Math.random() * 2.5;
        p.maxAlpha = 0.25 + Math.random() * 0.3;
        p.color = PALETTE[Math.floor(Math.random() * PALETTE.length)].clone();
      } else if (rand < 0.85) {
        // Aroma embers with glowing halos
        p.baseSize = 6.5 + Math.random() * 4.5;
        p.maxAlpha = 0.6 + Math.random() * 0.3;
        p.color = PALETTE[Math.floor(Math.random() * 3)].clone();
      } else {
        // Bright hot sparks
        p.baseSize = 11 + Math.random() * 5;
        p.maxAlpha = 0.8 + Math.random() * 0.2;
        p.color = PALETTE[0].clone();
      }

      p.size = p.baseSize;
      p.alpha = 0;
      p.wobbleSpeed = 1.2 + Math.random() * 1.8;
      p.wobbleAmp = 6 + Math.random() * 14;
      p.phase = Math.random() * Math.PI * 2;

      // Compute initial position
      const mt = 1 - p.t;
      p.x = mt * mt * p.p0x + 2 * mt * p.t * p.p1x + p.t * p.t * p.p2x;
      p.y = mt * mt * p.p0y + 2 * mt * p.t * p.p1y + p.t * p.t * p.p2y;
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const p: Particle = {
        p0x: 0,
        p0y: 0,
        p1x: 0,
        p1y: 0,
        p2x: 0,
        p2y: 0,
        x: 0,
        y: 0,
        z: 0,
        t: 0,
        speed: 0.1,
        size: 8,
        baseSize: 8,
        color: PALETTE[0],
        alpha: 0,
        maxAlpha: 0.8,
        wobbleSpeed: 1,
        wobbleAmp: 10,
        phase: 0,
      };
      resetParticle(p, true);
      particles.push(p);
    }

    // 6. Geometry & Buffers for THREE.Points
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const colors = new Float32Array(PARTICLE_COUNT * 3);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions[i * 3] = particles[i].x;
      positions[i * 3 + 1] = particles[i].y;
      positions[i * 3 + 2] = particles[i].z;

      colors[i * 3] = particles[i].color.r;
      colors[i * 3 + 1] = particles[i].color.g;
      colors[i * 3 + 2] = particles[i].color.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 14,
      map: emberTexture,
      transparent: true,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      depthTest: false,
    });

    const pointCloud = new THREE.Points(geometry, material);
    scene.add(pointCloud);

    // 7. Interactive Mouse Convective Currents
    const mouse = { x: -1000, y: -1000, radius: 100 };
    const handleMouseMove = (e: MouseEvent) => {
      const heroRect = container.getBoundingClientRect();
      mouse.x = e.clientX - heroRect.left;
      mouse.y = e.clientY - heroRect.top;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // 8. Resize Handler
    const handleResize = () => {
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || 750;

      camera.right = width;
      camera.top = height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // 9. Animation Loop (Curved Bezier Stream Physics)
    let animId: number;
    let lastTime = performance.now();
    let isVisible = true;

    const handleVisibility = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibility);

    function animate(now: number) {
      animId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const dt = Math.min((now - lastTime) / 1000, 0.08);
      lastTime = now;

      const posAttr = geometry.attributes.position as THREE.BufferAttribute;
      const colAttr = geometry.attributes.color as THREE.BufferAttribute;
      const posArray = posAttr.array as Float32Array;
      const colArray = colAttr.array as Float32Array;

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const p = particles[i];
        p.t += p.speed * dt;

        // Respawn when stream completes
        if (p.t >= 1) {
          resetParticle(p, false);
        }

        // Evaluate Quadratic Bezier curve: (1-t)^2 P0 + 2(1-t)t P1 + t^2 P2
        const t = p.t;
        const mt = 1 - t;
        let bx = mt * mt * p.p0x + 2 * mt * t * p.p1x + t * t * p.p2x;
        let by = mt * mt * p.p0y + 2 * mt * t * p.p1y + t * t * p.p2y;

        // Organic harmonic stream turbulence
        p.phase += p.wobbleSpeed * dt;
        bx += Math.sin(p.phase + t * 4) * p.wobbleAmp;
        by += Math.cos(p.phase * 0.7 + t * 3) * (p.wobbleAmp * 0.35);

        // Mouse convective air deflection
        const dx = bx - mouse.x;
        const dy = by - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius && dist > 1) {
          const force = (1 - dist / mouse.radius) * 2.2;
          bx += (dx / dist) * force;
          by += (dy / dist) * force;
        }

        p.x = bx;
        p.y = by;

        // Smooth lifecycle alpha envelope
        if (t < 0.16) {
          p.alpha = p.maxAlpha * (t / 0.16);
        } else if (t > 0.7) {
          p.alpha = p.maxAlpha * (1 - (t - 0.7) / 0.3);
        } else {
          p.alpha = p.maxAlpha;
        }

        // Subtle twinkling pulse
        const pulse = 1 + Math.sin(p.phase * 2.5) * 0.18;
        const currentAlpha = Math.max(0, Math.min(1, p.alpha * pulse));

        // Update position buffer
        posArray[i * 3] = p.x;
        posArray[i * 3 + 1] = p.y;
        posArray[i * 3 + 2] = p.z;

        // Update color buffer with baked alpha for additive glow
        colArray[i * 3] = p.color.r * currentAlpha;
        colArray[i * 3 + 1] = p.color.g * currentAlpha;
        colArray[i * 3 + 2] = p.color.b * currentAlpha;
      }

      posAttr.needsUpdate = true;
      colAttr.needsUpdate = true;

      renderer.render(scene, camera);
    }

    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibility);

      geometry.dispose();
      material.dispose();
      emberTexture.dispose();
      renderer.dispose();
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

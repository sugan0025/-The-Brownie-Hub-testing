'use client';

import React from 'react';

/**
 * TransparentHeroVideo
 * True native alpha transparency video:
 * - High-definition WebM with VP9 8-bit Alpha Channel (yuva420p)
 * - Lossless Animated WebP 32-bit RGBA transparency fallback
 * - 0% checkerboard, 0% halo/white border, 100% exact dessert, lighting, shadows & texture preservation
 */
export default function TransparentHeroVideo() {
  return (
    <div
      className="hero-transparent-video-container"
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
    >
      <video
        className="hero-transparent-canvas"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        disableRemotePlayback
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
        aria-label="The Brownie Hub artisanal dessert with warm chocolate dripping in real time"
      >
        <source src="/videos/chocolate-flow-transparent.webm" type="video/webm" />
        <img
          src="/videos/chocolate-flow-transparent.webp"
          alt="The Brownie Hub artisanal dessert with warm chocolate dripping in real time"
          className="hero-transparent-canvas"
          loading="eager"
          onContextMenu={(e) => e.preventDefault()}
          onDragStart={(e) => e.preventDefault()}
        />
      </video>
      {/* Invisible Interactive Click/Long-Press Shield */}
      <div
        className="hero-video-anti-save-shield"
        aria-hidden="true"
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
      />
    </div>
  );
}

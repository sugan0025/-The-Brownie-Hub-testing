'use client';

import React, { useEffect, useRef } from 'react';

/**
 * TransparentHeroVideo
 * Renders the chocolate flow video on a WebGL Canvas, using a GPU fragment shader
 * to key out the baked-in grey/white checkerboard pattern in real-time at 60+ FPS.
 * Fallback to 2D Canvas with pixel processing if WebGL is unavailable.
 */
export default function TransparentHeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    let animId: number;
    let gl: WebGLRenderingContext | null = null;
    let program: WebGLProgram | null = null;
    let texture: WebGLTexture | null = null;

    try {
      gl = canvas.getContext('webgl', { alpha: true, premultipliedAlpha: false });
    } catch {
      gl = null;
    }

    if (gl) {
      // --- WebGL GPU Hardware-Accelerated Chroma/Luma Keying ---
      const vsSource = `
        attribute vec2 a_position;
        attribute vec2 a_texCoord;
        varying vec2 v_texCoord;
        void main() {
          gl_Position = vec4(a_position, 0.0, 1.0);
          v_texCoord = a_texCoord;
        }
      `;

      // Fragment shader: Identifies neutral grey/white checkerboard pixels and keys them out
      const fsSource = `
        precision mediump float;
        uniform sampler2D u_video;
        varying vec2 v_texCoord;

        void main() {
          vec4 color = texture2D(u_video, v_texCoord);
          float r = color.r;
          float g = color.g;
          float b = color.b;

          // Difference between color channels (saturation indicator)
          float maxDiff = max(abs(r - g), max(abs(g - b), abs(r - b)));
          float minVal = min(r, min(g, b));

          // Checkerboard pattern is neutral grey (0.7-0.85) or white (0.9-1.0) with very low saturation (< 0.09)
          if (minVal > 0.68 && maxDiff < 0.09) {
            // Smoothly feather edge between 0.68 and 0.82
            float alpha = smoothstep(0.82, 0.68, minVal);
            gl_FragColor = vec4(color.rgb, alpha * color.a);
          } else {
            gl_FragColor = color;
          }
        }
      `;

      const createShader = (type: number, source: string) => {
        const shader = gl!.createShader(type);
        if (!shader) return null;
        gl!.shaderSource(shader, source);
        gl!.compileShader(shader);
        return shader;
      };

      const vs = createShader(gl.VERTEX_SHADER, vsSource);
      const fs = createShader(gl.FRAGMENT_SHADER, fsSource);

      if (vs && fs) {
        program = gl.createProgram();
        if (program) {
          gl.attachShader(program, vs);
          gl.attachShader(program, fs);
          gl.linkProgram(program);
          gl.useProgram(program);

          // Geometry: Quad
          const positionBuffer = gl.createBuffer();
          gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
          gl.bufferData(
            gl.ARRAY_BUFFER,
            new Float32Array([
              -1, -1,
               1, -1,
              -1,  1,
              -1,  1,
               1, -1,
               1,  1,
            ]),
            gl.STATIC_DRAW
          );

          const positionLocation = gl.getAttribLocation(program, 'a_position');
          gl.enableVertexAttribArray(positionLocation);
          gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

          // Texture coords (inverted Y for WebGL texture coordinate system)
          const texCoordBuffer = gl.createBuffer();
          gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
          gl.bufferData(
            gl.ARRAY_BUFFER,
            new Float32Array([
              0, 1,
              1, 1,
              0, 0,
              0, 0,
              1, 1,
              1, 0,
            ]),
            gl.STATIC_DRAW
          );

          const texCoordLocation = gl.getAttribLocation(program, 'a_texCoord');
          gl.enableVertexAttribArray(texCoordLocation);
          gl.vertexAttribPointer(texCoordLocation, 2, gl.FLOAT, false, 0, 0);

          texture = gl.createTexture();
          gl.bindTexture(gl.TEXTURE_2D, texture);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

          gl.enable(gl.BLEND);
          gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        }
      }

      const renderWebGL = () => {
        if (video.readyState >= 2 && gl && program && texture) {
          if (canvas.width !== video.videoWidth || canvas.height !== video.videoHeight) {
            canvas.width = video.videoWidth || 800;
            canvas.height = video.videoHeight || 600;
            gl.viewport(0, 0, canvas.width, canvas.height);
          }

          gl.bindTexture(gl.TEXTURE_2D, texture);
          gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, video);
          gl.clearColor(0, 0, 0, 0);
          gl.clear(gl.COLOR_BUFFER_BIT);
          gl.drawArrays(gl.TRIANGLES, 0, 6);
        }
        animId = requestAnimationFrame(renderWebGL);
      };

      video.play().catch(() => {});
      animId = requestAnimationFrame(renderWebGL);
    } else {
      // --- Fallback: 2D Canvas pixel processing ---
      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      if (!ctx) return;

      const render2D = () => {
        if (video.readyState >= 2 && !video.paused && !video.ended) {
          if (canvas.width !== video.videoWidth || canvas.height !== video.videoHeight) {
            canvas.width = video.videoWidth || 800;
            canvas.height = video.videoHeight || 600;
          }

          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const d = frame.data;
          const len = d.length;

          for (let i = 0; i < len; i += 4) {
            const r = d[i];
            const g = d[i + 1];
            const b = d[i + 2];
            const maxDiff = Math.max(Math.abs(r - g), Math.abs(g - b), Math.abs(r - b));
            const minVal = Math.min(r, g, b);

            if (minVal > 175 && maxDiff < 22) {
              if (minVal > 210) {
                d[i + 3] = 0;
              } else {
                d[i + 3] = Math.max(0, Math.min(255, ((210 - minVal) / 35) * 255));
              }
            }
          }
          ctx.putImageData(frame, 0, 0);
        }
        animId = requestAnimationFrame(render2D);
      };

      video.play().catch(() => {});
      animId = requestAnimationFrame(render2D);
    }

    return () => {
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="hero-transparent-video-container">
      <video
        ref={videoRef}
        src="/videos/chocolate-flow.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        style={{ display: 'none' }}
      />
      <canvas
        ref={canvasRef}
        className="hero-transparent-canvas"
        aria-label="The Brownie Hub artisanal dessert with warm chocolate dripping in real time"
      />
    </div>
  );
}

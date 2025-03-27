'use client';
import { useCanvas } from './useCanvas';
import { useCallback, useRef } from 'react';

class Particle {
  x: number;
  y: number;
  velocity: { x: number; y: number };
  radius: number;
  color: string;

  constructor(ctx: CanvasRenderingContext2D) {
    this.x = Math.random() * ctx.canvas.width;
    this.y = Math.random() * ctx.canvas.height;
    this.velocity = {
      x: (Math.random() - 0.5) * 1.5,
      y: (Math.random() - 0.5) * 1.5,
    };
    this.radius = Math.random() * 1.2 + 0.5;
    this.color = `rgba(180, 140, 255, 0.15)`; // Soft glow effect
  }

  update(ctx: CanvasRenderingContext2D) {
    this.x += this.velocity.x;
    this.y += this.velocity.y;

    if (this.x < 0 || this.x > ctx.canvas.width) this.velocity.x *= -1;
    if (this.y < 0 || this.y > ctx.canvas.height) this.velocity.y *= -1;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

export function ParticleCanvas() {
  const particles = useRef<Particle[]>([]);

  const draw = useCallback((ctx: CanvasRenderingContext2D) => {
    // Initialize particles
    if (particles.current.length === 0) {
      particles.current = Array.from({ length: 60 }, () => new Particle(ctx));
    }

    // Set background fill to match the site
    ctx.fillStyle = 'rgba(12, 10, 20, 0.05)'; // Adjust for better blending
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // Update and draw particles
    particles.current.forEach((particle) => {
      particle.update(ctx);
      particle.draw(ctx);
    });

    // Connection lines with a subtle effect
    ctx.strokeStyle = 'rgba(180, 140, 255, 0.05)'; // Soft glow effect for links
    for (let i = 0; i < particles.current.length; i++) {
      for (let j = i; j < particles.current.length; j++) {
        const dx = particles.current[i].x - particles.current[j].x;
        const dy = particles.current[i].y - particles.current[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 80) {
          ctx.beginPath();
          ctx.moveTo(particles.current[i].x, particles.current[i].y);
          ctx.lineTo(particles.current[j].x, particles.current[j].y);
          ctx.stroke();
        }
      }
    }
  }, []);

  const canvasRef = useCanvas(draw);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
    />
  );
}

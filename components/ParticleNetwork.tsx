"use client";
import { useRef, useEffect } from "react";
interface Particle { x: number; y: number; vx: number; vy: number; size: number; opacity: number; }
export default function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current; if (!canvas) return;
    const ctx = canvas.getContext("2d"); if (!ctx) return;
    let animId: number, particles: Particle[] = [], mouse = { x: -1000, y: -1000 };
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = window.innerWidth * dpr; canvas.height = window.innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const w = window.innerWidth, h = window.innerHeight, count = Math.min(Math.floor((w * h) / 12000), 150);
      particles = [];
      for (let i = 0; i < count; i++) particles.push({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4, size: Math.random() * 1.5 + 0.5, opacity: Math.random() * 0.5 + 0.2 });
    };
    const draw = () => {
      const w = window.innerWidth, h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        const dx = p.x - mouse.x, dy = p.y - mouse.y, dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200) { const force = (200 - dist) / 200; p.vx += (dx / (dist || 1)) * force * 0.8; p.vy += (dy / (dist || 1)) * force * 0.8; }
        p.vx *= 0.98; p.vy *= 0.98;
        p.x += p.vx + (Math.random() - 0.5) * 0.1; p.y += p.vy + (Math.random() - 0.5) * 0.1;
        if (p.x < -10) p.x = w + 10; if (p.x > w + 10) p.x = -10; if (p.y < -10) p.y = h + 10; if (p.y > h + 10) p.y = -10;
      }
      const maxDist = 140;
      for (let i = 0; i < particles.length; i++) for (let j = i + 1; j < particles.length; j++) { const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y, dist = Math.sqrt(dx * dx + dy * dy); if (dist < maxDist) { const alpha = (1 - dist / maxDist) * 0.15; ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y); ctx.strokeStyle = `rgba(192,132,252,${alpha})`; ctx.lineWidth = 0.5; ctx.stroke(); } }
      for (const p of particles) { ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctx.fillStyle = `rgba(192,132,252,${p.opacity})`; ctx.fill(); }
      animId = requestAnimationFrame(draw);
    };
    const onMouseMove = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const onMouseLeave = () => { mouse.x = -1000; mouse.y = -1000; };
    window.addEventListener("resize", resize); window.addEventListener("mousemove", onMouseMove); canvas.addEventListener("mouseleave", onMouseLeave);
    resize(); draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); window.removeEventListener("mousemove", onMouseMove); canvas.removeEventListener("mouseleave", onMouseLeave); };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }} />;
}

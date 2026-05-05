"use client";
import { useRef, useEffect } from "react";
export default function AuroraBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current; if (!canvas) return;
    const ctx = canvas.getContext("2d"); if (!ctx) return;
    let animId: number, time = 0;
    const resize = () => { const dpr = Math.min(window.devicePixelRatio, 1.5); canvas.width = window.innerWidth * dpr; canvas.height = window.innerHeight * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); };
    const draw = () => {
      const w = window.innerWidth, h = window.innerHeight; time += 0.003; ctx.clearRect(0, 0, w, h);
      const blobs = [
        { x: w * 0.3 + Math.sin(time * 0.7) * w * 0.15, y: h * 0.4 + Math.cos(time * 0.5) * h * 0.2, rx: w * 0.35, ry: h * 0.35, color: "192,132,252" },
        { x: w * 0.7 + Math.cos(time * 0.6) * w * 0.1, y: h * 0.6 + Math.sin(time * 0.8) * h * 0.15, rx: w * 0.25, ry: h * 0.25, color: "139,92,246" },
        { x: w * 0.5 + Math.sin(time * 0.4) * w * 0.08, y: h * 0.5 + Math.cos(time * 0.3) * h * 0.1, rx: w * 0.3, ry: h * 0.3, color: "167,139,250" },
      ];
      for (const blob of blobs) { const g = ctx.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, Math.max(blob.rx, blob.ry)); g.addColorStop(0, `rgba(${blob.color},0.08)`); g.addColorStop(0.5, `rgba(${blob.color},0.03)`); g.addColorStop(1, "rgba(0,0,0,0)"); ctx.beginPath(); ctx.ellipse(blob.x, blob.y, blob.rx, blob.ry, 0, 0, Math.PI * 2); ctx.fillStyle = g; ctx.fill(); }
      animId = requestAnimationFrame(draw);
    };
    window.addEventListener("resize", resize); resize(); draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }} />;
}

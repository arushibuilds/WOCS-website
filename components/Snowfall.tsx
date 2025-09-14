"use client";
import { useEffect, useRef } from "react";

export default function Snowfall() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mql.matches) return;

    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    let raf = 0, W = 0, H = 0;

    const flakes = Array.from({ length: 140 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: 0.5 + Math.random() * 1.8,
      s: 0.3 + Math.random() * 0.8,   // speed
      w: Math.random() * 0.8,         // sway
      c: Math.random() < 0.12 ? "frost" : "white",
    }));

    const resize = () => { 
      W = canvas.width = window.innerWidth; 
      H = canvas.height = window.innerHeight; 
    };
    
    resize(); 
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      for (const f of flakes) {
        const x = (f.x * W + Math.sin((f.y + performance.now()/5000) * 6) * 12 * f.w);
        const y = (f.y * H);
        ctx.beginPath();
        ctx.arc(x, y, f.r, 0, Math.PI * 2);
        ctx.fillStyle = f.c === "white" ? "rgba(255,255,255,0.9)" : "rgba(154,215,255,0.95)";
        ctx.fill();

        f.y += f.s / H * 60;
        if (f.y > 1) { 
          f.y = -0.02; 
          f.x = Math.random(); 
        }
      }
      raf = requestAnimationFrame(draw);
    };
    
    raf = requestAnimationFrame(draw);

    return () => { 
      cancelAnimationFrame(raf); 
      window.removeEventListener("resize", resize); 
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="fixed inset-0 -z-10 pointer-events-none opacity-80"
      style={{ filter: "drop-shadow(0 0 2px rgba(255,255,255,0.4))" }}
    />
  );
}
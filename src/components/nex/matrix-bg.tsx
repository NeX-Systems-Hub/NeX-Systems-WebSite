'use client';

import { useEffect, useRef } from 'react';

export function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let columns: number;
    let drops: number[];
    const fontSize = 14;
    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF<>/{}[];:';
    const maxSpeed = 0.5;

    const resize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.floor(canvas.width / fontSize);
      drops = Array(columns).fill(0).map(() => Math.random() * -100);
    };

    const draw = () => {
      if (!canvas || !ctx) return;
      ctx.fillStyle = 'rgba(5, 5, 5, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < columns; i++) {
        if (drops[i] < 0) {
          drops[i] += maxSpeed + Math.random() * 0.5;
          continue;
        }

        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Varying brightness for depth effect
        const brightness = Math.random();
        if (brightness > 0.95) {
          ctx.fillStyle = '#ffffff'; // bright white for head
          ctx.font = `${fontSize}px "JetBrains Mono", monospace`;
        } else if (brightness > 0.7) {
          ctx.fillStyle = '#00ff41';
          ctx.font = `${fontSize}px "JetBrains Mono", monospace`;
        } else {
          ctx.fillStyle = 'rgba(0, 255, 65, 0.4)';
          ctx.font = `${fontSize - 2}px "JetBrains Mono", monospace`;
        }

        ctx.fillText(char, x, y);

        // Reset drop to top randomly
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i] += maxSpeed + Math.random() * 0.5;
      }
    };

    resize();
    // Initialize drops at random positions for immediate visual
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * canvas.height / fontSize;
    }

    animationId = window.requestAnimationFrame(function loop() {
      draw();
      animationId = window.requestAnimationFrame(loop);
    });

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.15 }}
    />
  );
}

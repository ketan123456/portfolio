"use client";

import { useEffect, useRef } from "react";

type Point = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
};

export default function TechBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let frame = 0;
    let points: Point[] = [];
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);

      const count = Math.max(32, Math.floor(width / 28));
      points = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.16,
        vy: (Math.random() - 0.5) * 0.16,
        radius: Math.random() * 1.4 + 0.35,
      }));
    };

    const draw = () => {
      const { width, height } = canvas.getBoundingClientRect();
      context.clearRect(0, 0, width, height);

      points.forEach((point, index) => {
        if (!reduceMotion) {
          point.x += point.vx;
          point.y += point.vy;
          if (point.x < 0 || point.x > width) point.vx *= -1;
          if (point.y < 0 || point.y > height) point.vy *= -1;
        }

        context.beginPath();
        context.fillStyle = index % 4 === 0 ? "#7338ff" : "#6cecff";
        context.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
        context.fill();

        for (let otherIndex = index + 1; otherIndex < points.length; otherIndex++) {
          const other = points[otherIndex];
          const distance = Math.hypot(point.x - other.x, point.y - other.y);
          if (distance < 115) {
            context.beginPath();
            context.strokeStyle = `rgba(90, 205, 235, ${
              (1 - distance / 115) * 0.15
            })`;
            context.lineWidth = 0.65;
            context.moveTo(point.x, point.y);
            context.lineTo(other.x, other.y);
            context.stroke();
          }
        }
      });

      if (!reduceMotion) frame = window.requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return <canvas ref={canvasRef} className="tech-background" aria-hidden />;
}

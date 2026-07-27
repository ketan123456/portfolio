"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  pad?: number;
};

export default function CountUp({
  value,
  prefix = "",
  suffix = "",
  pad = 0,
}: CountUpProps) {
  const ref = useRef<HTMLElement>(null);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const startedAt = performance.now();
        const animate = (time: number) => {
          const progress = Math.min(1, (time - startedAt) / 1400);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplayValue(Math.round(value * eased));
          if (progress < 1) frame = window.requestAnimationFrame(animate);
        };
        frame = window.requestAnimationFrame(animate);
        observer.disconnect();
      },
      { threshold: 0.45 },
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <strong ref={ref}>
      {prefix}
      {String(displayValue).padStart(pad, "0")}
      {suffix}
    </strong>
  );
}

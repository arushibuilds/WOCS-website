'use client';

import { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export default function AnimatedCounter({
  value,
  duration = 2000,
  suffix = '',
  prefix = '',
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const hasStarted = useRef(false);

  useEffect(() => {
    // Use Intersection Observer to trigger animation when element is visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted.current) {
            hasStarted.current = true;
            
            const startTime = Date.now();
            const animationFrame = setInterval(() => {
              const elapsed = Date.now() - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const currentCount = Math.floor(value * progress);
              
              setCount(currentCount);
              
              if (progress === 1) {
                clearInterval(animationFrame);
                setCount(value);
              }
            }, 16); // ~60fps
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`counter-${value}`);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [value, duration]);

  return (
    <span id={`counter-${value}`}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

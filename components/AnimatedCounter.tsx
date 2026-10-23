'use client';

import { useState, useEffect, useLayoutEffect, useRef } from 'react';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

// useLayoutEffect warns during server rendering; fall back to useEffect there.
const useIsomorphicLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;

export default function AnimatedCounter({
  value,
  duration = 2000,
  suffix = '',
  prefix = '',
}: AnimatedCounterProps) {
  // Render the real value on the server so crawlers, link previews and
  // no-JS visitors never see "0+". The count-up only starts in the browser.
  const [count, setCount] = useState(value);
  const ref = useRef<HTMLSpanElement>(null);

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setCount(value);
      return;
    }

    setCount(0);
    let frame = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();

        let startTime: number | null = null;
        const tick = (now: number) => {
          // Start the clock on the first frame: rAF timestamps can be slightly
          // earlier than performance.now(), which would give negative progress.
          if (startTime === null) startTime = now;
          const progress = Math.min(Math.max((now - startTime) / duration, 0), 1);
          setCount(Math.floor(value * progress));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
        // Frames are paused in background tabs and some headless renderers;
        // make sure the counter never gets stuck below its real value.
        fallback = setTimeout(() => {
          cancelAnimationFrame(frame);
          setCount(value);
        }, duration + 500);
      },
      { threshold: 0.1 }
    );
    let fallback: ReturnType<typeof setTimeout> | undefined;
    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      clearTimeout(fallback);
    };
  }, [value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

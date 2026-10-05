'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';

const IMAGES = [1, 2, 3, 4, 6, 7, 8, 9, 10, 12, 13].map((n) => `/${n}.jpeg`);
const INTERVAL_MS = 5000;
const SLIDE_MS = 700;
const MAX_VISIBLE = 3;

function useVisibleCount() {
  const [count, setCount] = useState(MAX_VISIBLE);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setCount(w >= 1024 ? 3 : w >= 640 ? 2 : 1);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return count;
}

export default function Testimonials() {
  const visible = useVisibleCount();
  const total = IMAGES.length;
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);

  // Clone the first cards at the end so the loop looks seamless.
  const slides = [...IMAGES, ...IMAGES.slice(0, MAX_VISIBLE)];

  // Advance one card every 5 seconds.
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setAnimate(true);
      setIndex((i) => i + 1);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, [paused]);

  // After sliding onto the clones, jump back to the real start without animating.
  useEffect(() => {
    if (index < total) return;
    const id = setTimeout(() => {
      setAnimate(false);
      setIndex(index - total);
    }, SLIDE_MS);
    return () => clearTimeout(id);
  }, [index, total]);

  // Re-enable the transition once the instant jump has been painted.
  useEffect(() => {
    if (animate) return;
    const id = requestAnimationFrame(() =>
      requestAnimationFrame(() => setAnimate(true))
    );
    return () => cancelAnimationFrame(id);
  }, [animate]);

  const goTo = useCallback((i: number) => {
    setAnimate(true);
    setIndex(i);
  }, []);

  const active = index % total;

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="testimonials-heading">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="text-center space-y-4">
          <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold">
            What Participants <span className="text-[var(--frost)]">Said Last Year</span>
          </h2>
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
            Contributors from WOCS 2025 share their open source journeys in their own words.
          </p>
        </div>

        <div
          className="overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="flex"
            style={{
              transform: `translateX(-${(index * 100) / visible}%)`,
              transition: animate ? `transform ${SLIDE_MS}ms ease-in-out` : 'none',
            }}
          >
            {slides.map((src, i) => (
              <div
                key={`${src}-${i}`}
                className="shrink-0 px-2 sm:px-3"
                style={{ width: `${100 / visible}%` }}
                aria-hidden={i >= total}
              >
                <div className="panel rounded-2xl overflow-hidden h-[28rem] relative bg-white">
                  <Image
                    src={src}
                    alt="LinkedIn post from a WOCS 2025 participant"
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2" role="tablist" aria-label="Testimonials">
          {IMAGES.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all ${
                i === active ? 'w-6 bg-[var(--frost)]' : 'w-2 bg-[var(--muted)]/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

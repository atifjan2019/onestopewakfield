'use client';

import { useState, useEffect, useCallback } from 'react';
import TestimonialCard from './TestimonialCard';

export default function TestimonialSlider({ testimonials }) {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState(null);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  // Touch swipe handling
  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
    }
    setTouchStart(null);
  };

  return (
    <>
      <div className="relative overflow-hidden w-full">
        <div
          className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-0 md:gap-6 transition-transform duration-500 ease-out md:!transform-none"
          style={{ transform: `translateX(-${current * 100}%)` }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {testimonials.map((t) => (
            <div key={t.name} className="w-full shrink-0 px-1 md:w-auto md:px-0">
              <TestimonialCard text={t.text} name={t.name} rating={t.rating} />
            </div>
          ))}
        </div>
      </div>

      {/* Dots (Mobile only) */}
      <div className="flex md:hidden items-center justify-center gap-2 mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? 'w-6 h-2 bg-accent'
                : 'w-2 h-2 bg-black/15 hover:bg-black/30'
            }`}
            aria-label={`Go to review ${i + 1}`}
          />
        ))}
      </div>
    </>
  );
}

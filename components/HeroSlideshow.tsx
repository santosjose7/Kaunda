"use client";
import { useEffect, useState } from "react";
import { heroSlides } from "@/lib/data";

const INTERVAL = 5000;

export default function HeroSlideshow() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (paused || reduced) return;
    const id = setInterval(() => setActive((i) => (i + 1) % heroSlides.length), INTERVAL);
    return () => clearInterval(id);
  }, [paused, reduced, active]);

  return (
    <div
      className="slides"
      role="group"
      aria-roledescription="carousel"
      aria-label="Photos of our completed work"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {heroSlides.map((s, i) => (
        <div key={s.src} className={`slide ${i === active ? "is-active" : ""}`} aria-hidden={i !== active}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={s.src}
            alt={s.alt}
            style={{ objectPosition: s.focus }}
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "auto"}
          />
        </div>
      ))}
      <div className="slide-dots">
        {heroSlides.map((s, i) => (
          <button
            key={s.src}
            type="button"
            className={i === active ? "is-active" : ""}
            aria-label={`Show photo ${i + 1} of ${heroSlides.length}`}
            aria-current={i === active}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </div>
  );
}

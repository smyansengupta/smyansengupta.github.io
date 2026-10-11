"use client";

import { useEffect, useState } from "react";

export default function ScrollDownButton() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      setIsVisible(y < 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    const next = document.querySelector("#projects");
    if (next) {
      next.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Scroll to next section"
      className={`corner-btn corner-btn--cue ${isVisible ? "is-visible" : ""}`}
    >
      <span className="corner-arrow">↓</span>
      <span className="corner-label">Scroll</span>
    </button>
  );
}



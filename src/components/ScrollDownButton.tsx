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
    const next = document.querySelector("#experience");
    if (next) {
      next.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Scroll to next section"
      className={`fixed left-1/2 -translate-x-1/2 bottom-6 z-40 rounded-full border border-gray-700 bg-black/70 backdrop-blur px-5 py-3 text-sm font-medium text-white shadow-lg transition-all duration-200 hover:bg-black/90 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-gray-600 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
      }`}
    >
      ↓
    </button>
  );
}



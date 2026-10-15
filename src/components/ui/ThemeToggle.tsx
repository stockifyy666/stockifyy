"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("theme");
    let isDark = false;
    if (saved === "dark") isDark = true;
    else isDark = false; // default always light
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  if (!mounted) return <div className="w-12 h-6" />;

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none ${
        dark ? "bg-[#986300]" : "bg-[#E8DDC8]"
      }`}
    >
      {/* Sliding knob */}
      <span className={`absolute flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-md transition-transform duration-300 ${
        dark ? "translate-x-[22px]" : "translate-x-[2px]"
      }`}>
        {dark ? (
          /* Moon */
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#986300" strokeWidth="2.5" strokeLinecap="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        ) : (
          /* Sun */
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#986300" strokeWidth="2.5" strokeLinecap="round">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </svg>
        )}
      </span>
    </button>
  );
}

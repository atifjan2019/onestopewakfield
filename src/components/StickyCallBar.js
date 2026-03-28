"use client";

import { useState, useEffect } from "react";
import { PHONE_NUMBER, PHONE_HREF } from "@/data/services";

export default function StickyCallBar() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide if the user scrolls within 250px of the bottom (footer area)
      const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 250;
      setIsVisible(!nearBottom);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check on mount
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 lg:hidden p-4 transition-all duration-300 ease-in-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"}`}>
      <div className="glass-panel mx-auto max-w-md rounded-2xl shadow-[0_10px_40px_rgba(227,30,36,0.3)] border border-white/10 p-2 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[shimmer_2s_infinite]"></div>
        <a
          href={PHONE_HREF}
          className="relative z-10 flex items-center justify-center gap-3 py-4 inset-0 bg-gradient-to-r from-accent to-accent-hover rounded-xl text-white font-black text-lg shadow-lg active:scale-95 transition-transform"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
          <svg className="w-6 h-6 animate-pulse-slow" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
          Let's Fix Your Tyres
        </a>
      </div>
    </div>
  );
}

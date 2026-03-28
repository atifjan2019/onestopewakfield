"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { services } from "@/data/services";
import { areas } from "@/data/areas";
import { PHONE_NUMBER, PHONE_HREF } from "@/data/services";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-primary/80 backdrop-blur-md border-b border-border shadow-2xl" : "bg-transparent"
      }`}
    >
      {/* Top bar */}
      <div className={`hidden md:block transition-all duration-300 ${scrolled ? "h-0 overflow-hidden opacity-0" : "bg-primary-light/50 border-b border-border"}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs font-medium text-text-muted">
          <span>Serving Wakefield & surrounding areas — 24/7 Emergency available</span>
          <a href={PHONE_HREF} className="text-accent hover:text-accent-hover transition-colors font-bold tracking-wide flex items-center gap-1">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            {PHONE_NUMBER}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-4">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-hover text-white font-extrabold text-xl shadow-[0_0_15px_rgba(227,30,36,0.5)] group-hover:scale-105 transition-transform duration-300">
            OS
          </div>
          <div className="text-white flex flex-col justify-center">
            <div className="text-xl font-black tracking-tight leading-none group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-text-muted transition-all duration-300">
              One Stop Tyres
            </div>
            <div className="text-xs text-accent font-bold tracking-widest uppercase mt-1">Wakefield</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/" className="text-text-light hover:text-white transition-colors font-medium text-sm relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-accent after:transition-all after:duration-300">
            Home
          </Link>

          {/* Services dropdown */}
          <div className="relative group">
            <button className="text-text-light hover:text-white transition-colors font-medium text-sm flex items-center gap-1 py-2">
              Services
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
              <div className="bg-black border border-white/10 rounded-2xl p-2 w-[280px] shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none"></div>
                <div className="relative z-10 flex flex-col gap-1">
                  {services.map((s) => (
                    <Link key={s.slug} href={`/${s.slug}`} className="block px-4 py-3 text-sm text-text-light hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200 group/link">
                      <div className="font-semibold">{s.name}</div>
                      <div className="text-xs text-text-muted mt-0.5 opacity-0 group-hover/link:opacity-100 transition-opacity">Expert service</div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Areas dropdown */}
          <div className="relative group">
            <button className="text-text-light hover:text-white transition-colors font-medium text-sm flex items-center gap-1 py-2">
              Areas
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
              <div className="bg-black border border-white/10 rounded-2xl p-2 w-[220px] shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none"></div>
                <div className="relative z-10 grid grid-cols-1 gap-1">
                  {areas.map((a) => (
                    <Link key={a.slug} href={`/areas/${a.slug}`} className="block px-4 py-2.5 text-sm font-medium text-text-light hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200">
                      {a.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Link href="/about" className="text-text-light hover:text-white transition-colors font-medium text-sm relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-accent after:transition-all after:duration-300">
            About
          </Link>
          <Link href="/contact" className="text-text-light hover:text-white transition-colors font-medium text-sm relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-accent after:transition-all after:duration-300">
            Contact
          </Link>

          <a
            href={PHONE_HREF}
            className="group relative inline-flex items-center justify-center gap-2 px-6 py-2.5 font-bold text-white transition-all duration-300 bg-accent rounded-full hover:bg-accent-hover shadow-[0_0_20px_rgba(227,30,36,0.3)] hover:shadow-[0_0_30px_rgba(227,30,36,0.5)] hover:-translate-y-0.5"
          >
            <svg className="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            Call Now
          </a>
        </nav>

        {/* Mobile menu button */}
        <div className="flex items-center gap-4 lg:hidden">
          <a href={PHONE_HREF} className="bg-accent text-white font-bold p-2.5 rounded-xl shadow-[0_0_15px_rgba(227,30,36,0.4)]">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white p-2 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav dropdown */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-black border border-white/10 mt-2 p-4 mx-4 mb-4 rounded-2xl shadow-2xl">
          <nav className="flex flex-col gap-2">
            <Link href="/" onClick={() => setMobileOpen(false)} className="text-white py-3 px-4 rounded-xl hover:bg-white/10 font-bold transition-colors">
              Home
            </Link>

            <div className="rounded-xl overflow-hidden">
              <button onClick={() => setServicesOpen(!servicesOpen)} className="w-full text-white py-3 px-4 hover:bg-white/5 font-bold text-left flex items-center justify-between transition-colors">
                Services
                <svg className={`w-5 h-5 transition-transform duration-300 ${servicesOpen ? "rotate-180 text-accent" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`transition-all duration-300 ease-in-out ${servicesOpen ? "max-h-[500px] opacity-100 pb-2" : "max-h-0 opacity-0 hidden"}`}>
                <div className="pl-6 pr-4 flex flex-col gap-1 border-l-2 border-accent/30 ml-4 mt-1">
                  {services.map((s) => (
                    <Link key={s.slug} href={`/${s.slug}`} onClick={() => setMobileOpen(false)} className="text-text-muted py-2 font-medium hover:text-accent transition-colors">
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden">
              <button onClick={() => setAreasOpen(!areasOpen)} className="w-full text-white py-3 px-4 hover:bg-white/5 font-bold text-left flex items-center justify-between transition-colors">
                Areas We Cover
                <svg className={`w-5 h-5 transition-transform duration-300 ${areasOpen ? "rotate-180 text-accent" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`transition-all duration-300 ease-in-out ${areasOpen ? "max-h-[400px] opacity-100 pb-2" : "max-h-0 opacity-0 hidden"}`}>
                <div className="pl-6 pr-4 flex flex-col gap-1 border-l-2 border-accent/30 ml-4 mt-1">
                  {areas.map((a) => (
                    <Link key={a.slug} href={`/areas/${a.slug}`} onClick={() => setMobileOpen(false)} className="text-text-muted py-2 font-medium hover:text-accent transition-colors">
                      {a.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/about" onClick={() => setMobileOpen(false)} className="text-white py-3 px-4 rounded-xl hover:bg-white/10 font-bold transition-colors">
              About
            </Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="text-white py-3 px-4 rounded-xl hover:bg-white/10 font-bold transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </div>
      
      {/* Spacer to prevent layout shift initially if we want, currently header is fixed so not strictly necessary here, layout.tsx handles it */}
    </header>
  );
}

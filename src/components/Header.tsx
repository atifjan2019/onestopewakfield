"use client";

import Link from "next/link";
import { useState } from "react";
import { services } from "@/data/services";
import { areas } from "@/data/areas";
import { PHONE_NUMBER, PHONE_HREF } from "@/data/services";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);

  return (
    <header className="bg-black sticky top-0 z-50 shadow-lg">
      {/* Top bar */}
      <div className="bg-neutral-900 hidden md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm text-white/80">
          <span>Serving Wakefield & surrounding areas — Same day service available</span>
          <a href={PHONE_HREF} className="font-semibold text-accent hover:text-accent-hover transition-colors">
            📞 {PHONE_NUMBER}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white font-extrabold text-lg">
            OS
          </div>
          <div className="text-white">
            <div className="text-lg font-bold leading-tight">One Stop Tyres</div>
            <div className="text-xs text-white/60 leading-tight">Wakefield</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex">
          <Link href="/" className="text-white/90 hover:text-accent transition-colors font-medium text-sm">
            Home
          </Link>

          {/* Services dropdown */}
          <div className="relative group">
            <button className="text-white/90 hover:text-accent transition-colors font-medium text-sm flex items-center gap-1">
              Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-white rounded-lg shadow-xl border border-neutral-200 p-2 min-w-[240px]">
                {services.map((s) => (
                  <Link key={s.slug} href={`/${s.slug}`} className="block px-4 py-2 text-sm text-neutral-800 hover:bg-neutral-100 rounded-md transition-colors">
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Areas dropdown */}
          <div className="relative group">
            <button className="text-white/90 hover:text-accent transition-colors font-medium text-sm flex items-center gap-1">
              Areas
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-white rounded-lg shadow-xl border border-neutral-200 p-2 min-w-[200px]">
                {areas.map((a) => (
                  <Link key={a.slug} href={`/areas/${a.slug}`} className="block px-4 py-2 text-sm text-neutral-800 hover:bg-neutral-100 rounded-md transition-colors">
                    {a.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/about" className="text-white/90 hover:text-accent transition-colors font-medium text-sm">
            About
          </Link>
          <Link href="/contact" className="text-white/90 hover:text-accent transition-colors font-medium text-sm">
            Contact
          </Link>

          <a
            href={PHONE_HREF}
            className="bg-accent hover:bg-accent-hover text-white font-bold px-5 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-accent/30 text-sm"
          >
            📞 Call Now
          </a>
        </nav>

        {/* Mobile menu button */}
        <div className="flex items-center gap-3 lg:hidden">
          <a href={PHONE_HREF} className="bg-accent text-white font-bold px-4 py-2 rounded-lg text-sm">
            📞 Call
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white p-2"
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

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-white/10 bg-neutral-900">
          <nav className="flex flex-col p-4 gap-1">
            <Link href="/" onClick={() => setMobileOpen(false)} className="text-white py-2 px-3 rounded-md hover:bg-black font-medium">
              Home
            </Link>

            <button onClick={() => setServicesOpen(!servicesOpen)} className="text-white py-2 px-3 rounded-md hover:bg-black font-medium text-left flex items-center justify-between">
              Services
              <svg className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="ml-4 flex flex-col gap-1">
                {services.map((s) => (
                  <Link key={s.slug} href={`/${s.slug}`} onClick={() => setMobileOpen(false)} className="text-white/80 py-1.5 px-3 text-sm hover:text-accent">
                    {s.name}
                  </Link>
                ))}
              </div>
            )}

            <button onClick={() => setAreasOpen(!areasOpen)} className="text-white py-2 px-3 rounded-md hover:bg-black font-medium text-left flex items-center justify-between">
              Areas We Cover
              <svg className={`w-4 h-4 transition-transform ${areasOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {areasOpen && (
              <div className="ml-4 flex flex-col gap-1">
                {areas.map((a) => (
                  <Link key={a.slug} href={`/areas/${a.slug}`} onClick={() => setMobileOpen(false)} className="text-white/80 py-1.5 px-3 text-sm hover:text-accent">
                    {a.name}
                  </Link>
                ))}
              </div>
            )}

            <Link href="/about" onClick={() => setMobileOpen(false)} className="text-white py-2 px-3 rounded-md hover:bg-black font-medium">
              About
            </Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="text-white py-2 px-3 rounded-md hover:bg-black font-medium">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

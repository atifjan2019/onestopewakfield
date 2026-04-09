import Link from "next/link";
import { services } from "@/data/services";
import { areas } from "@/data/areas";
import { PHONE_NUMBER, PHONE_HREF, BUSINESS_NAME } from "@/data/services";

export default function Footer() {
  return (
    <footer className="relative bg-primary border-t border-border overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-accent/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="inline-flex items-center group">
              <img
                src="/logo.png"
                alt="One Stop Tyres Wakefield"
                className="h-12 w-auto drop-shadow-[0_0_8px_rgba(227,30,36,0.4)]"
              />
            </Link>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              Fast, reliable tyre services across Wakefield and surrounding areas. Premium quality fitting, no hidden fees.
            </p>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-border text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 group"
            >
              <svg className="w-5 h-5 text-accent group-hover:animate-pulse" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              {PHONE_NUMBER}
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent"></span>
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/${s.slug}`} className="text-text-muted hover:text-white text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-accent group-hover:w-3 transition-all duration-300"></span>
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent"></span>
              Areas We Cover
            </h3>
            <ul className="space-y-3">
              <li>
                <span className="text-accent text-sm font-bold flex items-center gap-2">
                  <span className="w-3 h-[1px] bg-accent"></span>
                  Wakefield
                </span>
              </li>
              {areas.map((a) => (
                <li key={a.slug}>
                  <Link href={`/areas/${a.slug}`} className="text-text-muted hover:text-white text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-accent group-hover:w-3 transition-all duration-300"></span>
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent"></span>
              Company
            </h3>
            <ul className="space-y-3 mb-8">
              <li>
                <Link href="/" className="text-text-muted hover:text-white text-sm transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-text-muted hover:text-white text-sm transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="text-text-muted hover:text-white text-sm transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link href="/book" className="text-text-muted hover:text-white text-sm transition-colors">Book Online</Link>
              </li>
              <li>
                <Link href="/sitemap-page" className="text-text-muted hover:text-white text-sm transition-colors">Sitemap</Link>
              </li>
            </ul>

            <div className="glass-panel rounded-xl p-5 border-l-2 border-l-accent">
              <h3 className="text-white font-bold text-sm mb-3">Operating Hours</h3>
              <ul className="space-y-2 text-xs text-text-muted">
                <li className="flex justify-between"><span>Mon – Sat</span> <span className="text-white">9:00am – 6:00pm</span></li>
                <li className="flex justify-between"><span>Sunday</span> <span className="text-white">9:00am – 5:00pm</span></li>
                <li className="flex justify-between pt-2 mt-2 border-t border-white/10">
                  <span className="text-accent font-bold">24/7</span> 
                  <span className="text-white">Emergency Callouts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.
          </p>
          <p className="text-xs text-text-muted">
            Developed with <span className="text-red-500">❤️</span> by{" "}
            <a
              href="https://webspires.co.uk/?utm_source=onestopwakefield"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="font-bold text-white hover:text-accent transition-colors"
            >
              Webspires
            </a>
          </p>
          <div className="flex items-center gap-4 text-sm font-medium">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-white/20">•</span>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

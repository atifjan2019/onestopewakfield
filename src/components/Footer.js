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
                <Link href="/areas" className="text-accent text-sm font-bold flex items-center gap-2 hover:brightness-125 transition-all">
                  <span className="w-3 h-[1px] bg-accent"></span>
                  Wakefield
                </Link>
              </li>
              <li>
                <Link href="/areas/leeds" className="text-accent text-sm font-bold flex items-center gap-2 hover:brightness-125 transition-all">
                  <span className="w-3 h-[1px] bg-accent"></span>
                  Leeds
                </Link>
              </li>
              <li>
                <Link href="/areas/dewsbury" className="text-accent text-sm font-bold flex items-center gap-2 hover:brightness-125 transition-all">
                  <span className="w-3 h-[1px] bg-accent"></span>
                  Dewsbury
                </Link>
              </li>
              <li className="pt-2">
                <Link href="/areas" className="inline-flex items-center gap-2 text-white hover:text-accent font-semibold text-sm transition-colors group">
                  View All Service Areas
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </li>
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
              <li>
                <a href="https://g.page/review..." target="_blank" rel="noopener noreferrer" className="text-accent hover:text-white font-bold flex items-center gap-1 text-sm transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Leave a Review
                </a>
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

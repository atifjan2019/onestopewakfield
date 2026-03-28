import Link from "next/link";
import { services } from "@/data/services";
import { areas } from "@/data/areas";
import { PHONE_NUMBER, PHONE_HREF, BUSINESS_NAME } from "@/data/services";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white font-extrabold text-lg">
                OS
              </div>
              <div>
                <div className="text-lg font-bold leading-tight">One Stop Tyres</div>
                <div className="text-xs text-white/60 leading-tight">Wakefield</div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Fast, reliable tyre services across Wakefield and surrounding areas. Same-day service, no hidden fees.
            </p>
            <a
              href={PHONE_HREF}
              className="mt-4 inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-bold px-5 py-2.5 rounded-lg transition-colors text-sm"
            >
              📞 {PHONE_NUMBER}
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/${s.slug}`} className="text-white/70 hover:text-accent text-sm transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="font-bold text-lg mb-4">Areas We Cover</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-accent text-sm font-semibold">Wakefield</span>
              </li>
              {areas.map((a) => (
                <li key={a.slug}>
                  <Link href={`/areas/${a.slug}`} className="text-white/70 hover:text-accent text-sm transition-colors">
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/70 hover:text-accent text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/70 hover:text-accent text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-accent text-sm transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>

            <h3 className="font-bold text-lg mt-6 mb-3">Opening Hours</h3>
            <ul className="space-y-1 text-sm text-white/70">
              <li>Mon – Fri: 8:00am – 6:00pm</li>
              <li>Saturday: 8:00am – 4:00pm</li>
              <li>Sunday: Emergency calls only</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>© {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.</p>
          <p>Serving Wakefield, Leeds, Dewsbury, Castleford & surrounding areas</p>
        </div>
      </div>
    </footer>
  );
}

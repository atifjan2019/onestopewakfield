import Link from "next/link";
import { services } from "@/data/services";
import { areas } from "@/data/areas";

export const metadata = {
  title: "Sitemap | One Stop Tyres Wakefield",
  description:
    "Browse the full sitemap of One Stop Tyres Wakefield. Find links to all our tyre services, service areas across West Yorkshire, and key pages.",
  alternates: { canonical: "/sitemap-page" },
};

const mainPages = [
  {
    name: "Home",
    href: "/",
    description: "Fast, reliable tyre services across Wakefield.",
  },
  {
    name: "About Us",
    href: "/about",
    description: "Learn about our team and values.",
  },
  {
    name: "Contact",
    href: "/contact",
    description: "Get in touch or request a free quote.",
  },
  {
    name: "Book Online",
    href: "/book",
    description: "Reserve your tyre fitting appointment.",
  },
];

function SectionIcon({ type }) {
  if (type === "main") {
    return (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    );
  }
  if (type === "services") {
    return (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    );
  }
  if (type === "areas") {
    return (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    );
  }
  return null;
}

function ArrowIcon() {
  return (
    <svg
      className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-accent"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>
  );
}

export default function SitemapPage() {
  const totalPages = mainPages.length + services.length + areas.length;

  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-8 md:py-16 px-4 md:px-6 overflow-hidden min-h-[420px] flex flex-col items-center justify-center bg-gradient-to-b from-surface to-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="mx-auto max-w-7xl relative z-10 w-full text-center">
          <nav className="mb-8 flex justify-center">
            <ol className="flex items-center gap-2 text-sm font-bold text-text-muted">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-black/20">/</li>
              <li className="text-accent">Sitemap</li>
            </ol>
          </nav>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-text leading-[1.3em] mb-4 md:mb-6 tracking-tight">
              Site <span className="text-gradient-accent">Map.</span>
            </h1>
            <p className="text-text-muted text-lg md:text-2xl font-medium leading-relaxed">
              Browse every page on our website. Find the service or area you
              need in seconds.
            </p>
          </div>

          {/* Stats pill */}
          <div className="mt-8 inline-flex items-center gap-3 bg-white border border-black/5 shadow-sm rounded-full px-6 py-3">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse-slow"></div>
            <span className="text-text-muted text-sm font-bold">
              <span className="text-text">{totalPages}</span> pages indexed
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 md:py-16 relative z-10 bg-surface border-t border-black/5">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Pages */}
            <div className="bg-white rounded-3xl p-8 md:p-10 border-t-4 border-t-accent border border-black/5 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center border border-accent/20 text-accent">
                  <SectionIcon type="main" />
                </div>
                <div>
                  <h2 className="text-xl font-black text-text">Main Pages</h2>
                  <p className="text-text-muted text-xs font-bold">
                    {mainPages.length} pages
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                {mainPages.map((page) => (
                  <Link
                    key={page.href}
                    href={page.href}
                    className="group flex items-center justify-between p-4 rounded-2xl hover:bg-surface transition-all duration-300"
                  >
                    <div className="flex-1 min-w-0">
                      <span className="text-text font-bold group-hover:text-accent transition-colors block">
                        {page.name}
                      </span>
                      <span className="text-text-muted text-sm block mt-0.5 truncate">
                        {page.description}
                      </span>
                    </div>
                    <ArrowIcon />
                  </Link>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="bg-white rounded-3xl p-8 md:p-10 border-t-4 border-t-black/10 border border-black/5 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center border border-black/8 text-text-muted">
                  <SectionIcon type="services" />
                </div>
                <div>
                  <h2 className="text-xl font-black text-text">
                    Our Services
                  </h2>
                  <p className="text-text-muted text-xs font-bold">
                    {services.length} services
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/${service.slug}`}
                    className="group flex items-center justify-between p-4 rounded-2xl hover:bg-surface transition-all duration-300"
                  >
                    <div className="flex-1 min-w-0">
                      <span className="text-text font-bold group-hover:text-accent transition-colors block">
                        {service.name}
                      </span>
                      <span className="text-text-muted text-sm block mt-0.5 truncate">
                        {service.shortDesc}
                      </span>
                    </div>
                    <ArrowIcon />
                  </Link>
                ))}
              </div>
            </div>

            {/* Areas */}
            <div className="bg-white rounded-3xl p-8 md:p-10 border-t-4 border-t-black/10 border border-black/5 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center border border-black/8 text-text-muted">
                  <SectionIcon type="areas" />
                </div>
                <div>
                  <h2 className="text-xl font-black text-text">
                    Areas We Serve
                  </h2>
                  <p className="text-text-muted text-xs font-bold">
                    {areas.length} locations
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                {areas.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/areas/${area.slug}`}
                    className="group flex items-center justify-between p-4 rounded-2xl hover:bg-surface transition-all duration-300"
                  >
                    <div className="flex-1 min-w-0">
                      <span className="text-text font-bold group-hover:text-accent transition-colors block">
                        {area.name}
                      </span>
                      <span className="text-text-muted text-sm block mt-0.5 truncate">
                        {area.intro}
                      </span>
                    </div>
                    <ArrowIcon />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* XML Sitemap link */}
          <div className="mt-12 text-center">
            <div className="bg-white border border-black/5 shadow-sm inline-flex items-center gap-4 rounded-2xl px-8 py-5">
              <svg
                className="w-5 h-5 text-accent shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
              <div className="text-left">
                <p className="text-text font-bold text-sm">
                  Looking for the XML sitemap?
                </p>
                <a
                  href="/sitemap.xml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent text-sm font-bold hover:underline"
                >
                  View sitemap.xml →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

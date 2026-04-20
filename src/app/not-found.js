import Link from "next/link";

export const metadata = {
  title: "Page Not Found | One Stop Tyres Wakefield",
  description: "The page you're looking for doesn't exist. Head back to One Stop Tyres Wakefield for tyre fitting, mobile service, and emergency repairs.",
};

export default function NotFound() {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/5 blur-[150px] rounded-full pointer-events-none animate-blob"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 blur-[120px] rounded-full pointer-events-none animate-blob" style={{ animationDelay: "2s" }}></div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Large 404 */}
        <div className="relative mb-8">
          <span className="text-[180px] md:text-[240px] lg:text-[280px] font-black leading-none text-black/[0.03] select-none block">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              {/* Tyre icon */}
              <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-6 relative">
                <div className="absolute inset-0 rounded-full border-4 border-black/8"></div>
                <div className="absolute inset-3 rounded-full border-4 border-black/5"></div>
                <div className="absolute inset-6 rounded-full border-4 border-accent/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-accent/15 border-2 border-accent/30 shadow-[0_0_30px_rgba(227,30,36,0.1)]"></div>
                </div>
                {/* Tread marks */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-3 bg-black/8 rounded-full"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-3 bg-black/8 rounded-full"></div>
                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1 w-3 bg-black/8 rounded-full"></div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 h-1 w-3 bg-black/8 rounded-full"></div>
                {/* Diagonal treads */}
                <div className="absolute top-[14%] left-[14%] w-1 h-3 bg-black/8 rounded-full rotate-[-45deg]"></div>
                <div className="absolute top-[14%] right-[14%] w-1 h-3 bg-black/8 rounded-full rotate-[45deg]"></div>
                <div className="absolute bottom-[14%] left-[14%] w-1 h-3 bg-black/8 rounded-full rotate-[45deg]"></div>
                <div className="absolute bottom-[14%] right-[14%] w-1 h-3 bg-black/8 rounded-full rotate-[-45deg]"></div>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-text tracking-tight">
                Wrong <span className="text-gradient-accent">Turn.</span>
              </h1>
            </div>
          </div>
        </div>

        <p className="text-text-muted text-lg md:text-xl font-medium leading-relaxed mb-10 max-w-lg mx-auto">
          Looks like this road leads nowhere. The page you&apos;re looking for has been moved, removed, or never existed.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-br from-accent to-accent-hover text-white font-black text-lg rounded-2xl shadow-[0_0_20px_rgba(227,30,36,0.2)] hover:shadow-[0_0_40px_rgba(227,30,36,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-surface hover:bg-accent/5 text-text font-bold text-lg rounded-2xl border border-black/8 hover:border-accent/20 transition-all"
          >
            <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Contact Us
          </Link>
        </div>

        {/* Helpful links */}
        <div className="bg-surface rounded-2xl p-6 md:p-8 max-w-md mx-auto border border-black/5">
          <h2 className="text-text font-bold text-sm mb-4 flex items-center justify-center gap-2">
            <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Quick Links
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              { name: "Tyre Fitting", href: "/tyre-fitting-wakefield" },
              { name: "Mobile Fitting", href: "/mobile-tyre-fitting-wakefield" },
              { name: "Book Online", href: "/book" },
              { name: "Our Services", href: "/sitemap-page" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text-muted hover:text-accent text-sm font-medium py-2 px-3 rounded-xl hover:bg-white transition-all text-center"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import { PHONE_NUMBER, PHONE_HREF } from "@/data/services";
import Link from "next/link";


export default function CTABlock({ heading, subtext }) {
  return (
    <section className="relative py-8 md:py-16 px-6 overflow-hidden bg-[#1a1a1a] my-12 rounded-3xl border border-white/5 max-w-7xl mx-auto shadow-2xl">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNHYtbDItMiAyaDJsMi0ydi1oLTJ2MmgtNHYtMmgtdjJoLTRzIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiLz48L2c+PC9zdmc+')] opacity-50 mix-blend-overlay"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-accent/20 blur-[150px] rounded-full pointer-events-none animate-blob"></div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight drop-shadow-lg">
          {heading}
        </h2>
        {subtext && (
          <p className="text-white/60 mb-10 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            {subtext}
          </p>
        )}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href={PHONE_HREF}
            className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-accent to-accent-hover text-white font-bold px-6 py-3 md:px-8 md:py-4 rounded-xl text-sm md:text-base transition-all duration-300 shadow-[0_0_20px_rgba(227,30,36,0.3)] hover:shadow-[0_0_40px_rgba(227,30,36,0.5)] hover:-translate-y-1"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
            <svg className="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            {PHONE_NUMBER}
          </a>
          <Link
            href="/contact"
            className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-bold px-6 py-3 md:px-8 md:py-4 rounded-xl text-sm md:text-base transition-all duration-300 text-center flex items-center justify-center"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
}

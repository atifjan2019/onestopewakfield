import Link from "next/link";
import { areas } from "@/data/areas";
import CTABlock from "@/components/CTABlock";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata = {
  title: "Areas We Cover | Mobile Tyre Fitting | One Stop Tyres Wakefield",
  description: "View all areas covered by One Stop Tyres Wakefield. We provide fast, reliable, same-day mobile tyre fitting across West Yorkshire.",
  alternates: { canonical: "/areas" },
};

export default function AreasPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Areas We Cover - One Stop Tyres Wakefield",
    description: "Areas covered by our mobile tyre fitting service.",
  };

  return (
    <div className="bg-white min-h-screen pt-20">
      <SchemaMarkup schema={schema} />

      {/* Hero */}
      <section className="relative py-8 md:py-16 px-4 md:px-6 overflow-hidden flex flex-col items-center justify-center text-center bg-gradient-to-b from-surface to-white">
        <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-accent/5 blur-[100px] md:blur-[150px] rounded-full pointer-events-none animate-pulse-slow"></div>
        <div className="mx-auto max-w-7xl relative z-10 w-full">
          <nav className="mb-8 flex justify-center">
            <ol className="flex items-center gap-2 text-sm font-bold text-text-muted">
              <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li className="text-black/20">/</li>
              <li className="text-accent">Areas We Cover</li>
            </ol>
          </nav>
          
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-text leading-[1.1] mb-4 md:mb-6 tracking-tight">
              Service <span className="text-gradient-accent">Areas.</span>
            </h1>
            <p className="text-text-muted text-lg md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed">
              Our mobile tyre fitting fleet covers Wakefield, Leeds, and the surrounding regions of West Yorkshire. We come directly to your home, workplace, or roadside.
            </p>
          </div>
        </div>
      </section>

      {/* Areas Archive List */}
      <section className="py-8 md:py-16 bg-surface border-t border-black/5">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {areas.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="bg-white text-center text-text hover:text-accent font-bold px-4 py-4 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:border-accent/20 hover:shadow-md border border-black/5 shadow-sm"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <CTABlock
          heading="Don't See Your Area?"
          subtext="We cover almost all of West Yorkshire. Give us a call, and we can dispatch a van to your location."
        />
      </section>
    </div>
  );
}

import Link from "next/link";
import { notFound } from "next/navigation";
import { services, PHONE_NUMBER, PHONE_HREF } from "@/data/services";
import { areas } from "@/data/areas";
import CTABlock from "@/components/CTABlock";
import SchemaMarkup from "@/components/SchemaMarkup";
import ServiceIcon from "@/components/ServiceIcon";

export async function generateStaticParams() {
  return areas.map((a) => ({ area: a.slug }));
}

export async function generateMetadata({ params }) {
  const { area: slug } = await params;
  const area = areas.find((a) => a.slug === slug);
  if (!area) return {};
  return {
    title: area.metaTitle,
    description: area.metaDescription,
    alternates: { canonical: `/areas/${area.slug}` },
  };
}

export default async function AreaPage({ params }) {
  const { area: slug } = await params;
  const area = areas.find((a) => a.slug === slug);
  if (!area) notFound();

  const nearbyAreaData = area.nearbyAreas
    .map((slug) => areas.find((a) => a.slug === slug))
    .filter(Boolean);

  const areaSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "One Stop Tyres Wakefield",
    telephone: "+4401924000000",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Wakefield",
      addressRegion: "West Yorkshire",
      addressCountry: "GB",
    },
    areaServed: {
      "@type": "City",
      name: area.name,
    },
  };

  return (
    <div className="bg-primary min-h-screen pt-20">
      <SchemaMarkup schema={areaSchema} />

      {/* Hero */}
      <section className="relative py-8 md:py-16 px-4 md:px-6 overflow-hidden min-h-[500px] flex flex-col items-center justify-center">
        <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-accent/10 blur-[100px] md:blur-[150px] rounded-full pointer-events-none animate-pulse-slow"></div>
        <div className="mx-auto max-w-7xl relative z-10 w-full text-center">
          <nav className="mb-8 flex justify-center">
            <ol className="flex items-center gap-2 text-sm font-bold text-text-muted">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li className="text-white/30">/</li>
              <li><span className="text-white/60">Areas</span></li>
              <li className="text-white/30">/</li>
              <li className="text-accent">{area.name}</li>
            </ol>
          </nav>
          
          <div className="max-w-4xl mx-auto">

            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-4 md:mb-6 tracking-tight">
              Tyre Fitting in {area.name} <br className="hidden md:block"/>
              <span className="text-gradient-accent">Fast & Reliable.</span>
            </h1>
            <p className="text-text-muted text-lg md:text-2xl font-medium max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed">{area.intro}</p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
              <a
                href={PHONE_HREF}
                className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 font-black text-white text-base md:text-sm md:text-base transition-all duration-300 bg-gradient-to-r from-accent to-accent-hover rounded-2xl shadow-[0_0_30px_rgba(227,30,36,0.4)] hover:shadow-[0_0_50px_rgba(227,30,36,0.6)] hover:-translate-y-1"
              >
                <svg className="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Call Now — {PHONE_NUMBER}
              </a>
              <Link
                href="/book"
                className="w-full sm:w-auto glass-panel glass-panel-hover text-white font-bold px-6 py-3 md:px-8 md:py-4 rounded-2xl text-sm md:text-base transition-all duration-300 text-center"
              >
                Book Online
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="py-8 md:py-16 bg-surface-dark border-t border-border/50">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 md:mb-6">
              Services in {area.name}.
            </h2>
            <p className="text-text-muted text-base md:text-lg max-w-2xl mx-auto">
              Our mobile fleet brings the garage to your driveway, workplace, or roadside in {area.name}.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}`}
                className="glass-panel group relative overflow-hidden rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 block"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 group-hover:bg-accent/10 group-hover:border-accent/30 transition-all duration-300">
                  <ServiceIcon name={s.icon} className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors mb-4">{s.name}</h3>
                <p className="text-text-muted leading-relaxed">{s.shortDesc}</p>
                <div className="absolute top-8 right-8 text-white/5 group-hover:text-accent/10 transition-colors pointer-events-none">
                  <ServiceIcon name={s.icon} className="w-24 h-24" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-8 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]"></div>
        <div className="mx-auto max-w-7xl px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4 md:mb-6">
                Why {area.name} Chooses Us.
              </h2>
              <p className="text-text-muted text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                We're not just another garage—we're West Yorkshire's premier mobile tyre solution. 
              </p>
              <div className="space-y-4">
                {area.whyChooseUs.map((point) => (
                  <div key={point} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center border border-accent/30 mt-1">
                      <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <span className="text-text-light font-medium text-lg pt-1">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
               <div className="glass-panel rounded-3xl p-8 border-accent/30 bg-accent/5 relative overflow-hidden shadow-[0_0_50px_rgba(227,30,36,0.1)]">
                 <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 blur-[40px] rounded-full"></div>
                 <h3 className="text-2xl font-black text-white mb-4 relative z-10">Local Fast Response</h3>
                 <p className="text-text-muted relative z-10 mb-8">Because we have drivers dedicated to the {area.name} area, you'll never wait hours for a simple tyre change or repair.</p>
                 <a href={PHONE_HREF} className="w-full relative z-10 block text-center bg-white text-black font-black py-4 rounded-xl hover:bg-neutral-200 transition-colors shadow-lg shadow-white/10">Dispatch a Van to {area.name}</a>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      {nearbyAreaData.length > 0 && (
        <section className="py-8 md:py-16 bg-surface-dark border-t border-border/50">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-text-light mb-4">
                Also Serving Nearby
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {nearbyAreaData.map((nearby) => (
                <Link
                  key={nearby.slug}
                  href={`/areas/${nearby.slug}`}
                  className="glass-panel text-text-muted hover:text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 hover:border-accent/40"
                >
                  {nearby.name}
                </Link>
              ))}
              <Link
                href="/"
                className="glass-panel border-accent/40 bg-accent/10 text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 hover:bg-accent hover:border-accent shadow-[0_0_15px_rgba(227,30,36,0.2)]"
              >
                Wakefield (HQ)
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <CTABlock
        heading={`Stranded in ${area.name}?`}
        subtext={`Our mobile fleet is actively patrolling West Yorkshire. Call us for immediate dispatch.`}
      />
    </div>
  );
}

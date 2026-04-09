import Link from "next/link";
import { notFound } from "next/navigation";
import { services, PHONE_NUMBER, PHONE_HREF } from "@/data/services";
import { areas } from "@/data/areas";
import CTABlock from "@/components/CTABlock";
import SchemaMarkup from "@/components/SchemaMarkup";
import ServiceIcon from "@/components/ServiceIcon";

export async function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({ params }) {
  const { service: slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/${service.slug}` },
  };
}

export default async function ServicePage({ params }) {
  const { service: slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.intro,
    provider: {
      "@type": "LocalBusiness",
      name: "One Stop Tyres Wakefield",
      telephone: PHONE_NUMBER,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Wakefield",
        addressRegion: "West Yorkshire",
        addressCountry: "GB",
      },
    },
    areaServed: {
      "@type": "City",
      name: "Wakefield",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `How much does ${service.name.toLowerCase()} cost in Wakefield?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `The cost for ${service.name.toLowerCase()} varies depending on your vehicle and specific requirements. We guarantee highly competitive, upfront pricing with zero hidden fees. Call us for a fast quote.`
        }
      },
      {
        "@type": "Question",
        "name": `Do you offer same-day ${service.name.toLowerCase()}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes, we specialize in rapid, same-day dispatch across Wakefield, Leeds, and surrounding areas. Our mobile units are actively patrolling.`
        }
      },
      {
        "@type": "Question",
        "name": `Can you perform ${service.name.toLowerCase()} at my home or workplace address?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Absolutely. Our fully equipped vans essentially bring the garage directly to you. We can safely operate on your driveway, workplace car park, or even safely at the roadside.`
        }
      }
    ]
  };

  const relatedServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <div className="bg-primary min-h-screen pt-20">
      <SchemaMarkup schema={serviceSchema} />
      <SchemaMarkup schema={faqSchema} />

      {/* Hero */}
      <section className="relative py-8 md:py-16 px-6 overflow-hidden min-h-[500px] flex flex-col items-center justify-center">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 blur-[150px] rounded-full pointer-events-none animate-pulse-slow"></div>
        <div className="mx-auto max-w-7xl relative z-10 text-center w-full">
          <nav className="mb-8 flex justify-center">
            <ol className="flex items-center gap-2 text-sm font-bold text-text-muted">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li className="text-white/30">/</li>
              <li className="text-accent">{service.name}</li>
            </ol>
          </nav>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight">
            {service.name.split(' ').map((word, i, arr) => (
              i === arr.length - 1 ? <span key={i} className="text-gradient-accent">{word}</span> : <span key={i}>{word} </span>
            ))}
            <br className="hidden md:block"/>
            <span className="text-2xl md:text-4xl text-text-muted font-bold mt-4 block tracking-normal">in Wakefield & Beyond.</span>
          </h1>
          
          <p className="text-text-light text-xl md:text-2xl font-medium max-w-3xl mx-auto mb-12 leading-relaxed">{service.intro}</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href={PHONE_HREF}
              className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 font-black text-white text-sm md:text-base transition-all duration-300 bg-gradient-to-r from-accent to-accent-hover rounded-2xl shadow-[0_0_30px_rgba(227,30,36,0.4)] hover:shadow-[0_0_50px_rgba(227,30,36,0.6)] hover:-translate-y-1"
            >
              <svg className="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Get Quoted Now
            </a>
            <Link
              href="/contact"
              className="w-full sm:w-auto glass-panel glass-panel-hover text-white font-bold px-6 py-3 md:px-8 md:py-4 rounded-2xl text-sm md:text-base transition-all duration-300 text-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-8 md:py-16 bg-surface-dark border-t border-border/50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Our Process.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
            <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-[2px] bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
            {service.steps.map((step, i) => (
              <div key={step.title} className="glass-panel rounded-3xl p-8 relative z-10 hover:-translate-y-2 transition-transform duration-300 text-center group">
                <div className="w-16 h-16 mx-auto rounded-full bg-accent text-white font-black text-2xl flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(227,30,36,0.4)] group-hover:scale-110 transition-transform">
                  {i + 1}
                </div>
                <h3 className="font-bold text-white text-xl mb-4 group-hover:text-accent transition-colors">{step.title}</h3>
                <p className="text-text-muted leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-8 md:py-16 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="flex flex-col md:flex-row-reverse items-center gap-16">
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Why Us for {service.name}?
              </h2>
              <p className="text-text-muted text-lg leading-relaxed mb-8">
                We're committed to delivering high-performance service on site, efficiently, without compromising quality.
              </p>
              <div className="space-y-4">
                {service.benefits.map((b) => (
                  <div key={b} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center border border-accent/30 mt-1 shadow-[0_0_10px_rgba(227,30,36,0.2)]">
                      <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <span className="text-text-light font-medium text-lg pt-1">{b}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
               <div className="glass-panel rounded-3xl p-10 relative overflow-hidden text-center border-accent/20">
                 <ServiceIcon name={service.icon} className="w-40 h-40 mx-auto text-accent mb-8 opacity-20" />
                 <h3 className="text-3xl font-black text-white mb-4 relative z-10">Premium Experience</h3>
                 <p className="text-text-muted relative z-10 text-lg">Every {service.name.toLowerCase()} starts with a free, no-obligation assessment. We arrive with the toolset to complete the job right.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas We Cover */}
      <section className="py-8 md:py-16 bg-surface-dark border-t border-border/50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Coverage Areas.
            </h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              We provide {service.name.toLowerCase()} services across all of the following regions.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {areas.map((a) => (
              <Link
                key={a.slug}
                href={`/areas/${a.slug}`}
                className="glass-panel text-text-muted hover:text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 hover:border-accent/40"
              >
                {a.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-8 md:py-16 relative">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-6">
              More Solutions.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {relatedServices.map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}`}
                className="glass-panel group relative overflow-hidden rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 text-center block"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 group-hover:bg-accent/10 transition-all duration-300">
                  <ServiceIcon name={s.icon} className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">{s.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 md:py-16 bg-surface-dark border-t border-border/50">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-text-muted">Common questions regarding our {service.name.toLowerCase()} service.</p>
          </div>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, idx) => (
              <div key={idx} className="glass-panel p-6 md:p-8 rounded-2xl border-accent/20 text-left">
                <h3 className="font-bold text-white text-lg mb-3 flex items-start gap-3">
                  <span className="text-accent text-xl mt-0.5">Q.</span> {faq.name}
                </h3>
                <p className="text-text-muted leading-relaxed pl-8">
                  <span className="text-white/40 font-bold mr-2 absolute -ml-8">A.</span> {faq.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABlock
        heading={`Book Your ${service.name} Now.`}
        subtext="Immediate availability. Transparent pricing. Done anywhere."
      />
    </div>
  );
}

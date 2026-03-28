import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, PHONE_NUMBER, PHONE_HREF } from "@/data/services";
import { areas } from "@/data/areas";
import CTABlock from "@/components/CTABlock";
import SchemaMarkup from "@/components/SchemaMarkup";

export async function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ service: string }> }): Promise<Metadata> {
  const { service: slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/${service.slug}` },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ service: string }> }) {
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
      telephone: "+4401924000000",
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

  const relatedServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <SchemaMarkup schema={serviceSchema} />

      {/* Hero */}
      <section className="bg-primary">
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-20">
          <nav className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-text-light/60">
              <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li>/</li>
              <li className="text-accent">{service.name}</li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-light leading-tight mb-4">
            {service.name} in Wakefield —{" "}
            <span className="text-accent">{service.tagline}</span>
          </h1>
          <p className="text-text-light/80 text-lg max-w-3xl mb-8">{service.intro}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={PHONE_HREF}
              className="bg-accent hover:bg-accent-hover text-primary font-extrabold px-8 py-4 rounded-lg text-lg transition-all duration-200 hover:shadow-xl hover:shadow-accent/30 text-center inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Call Now — {PHONE_NUMBER}
            </a>
            <Link
              href="/contact"
              className="border-2 border-text-light/30 hover:border-accent text-text-light font-bold px-8 py-4 rounded-lg text-lg transition-all duration-200 hover:bg-accent/10 text-center"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20 bg-surface">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-text text-center mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {service.steps.map((step, i) => (
              <div key={step.title} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent text-primary font-extrabold text-xl mb-4">
                  {i + 1}
                </div>
                <h3 className="font-bold text-text text-lg mb-2">{step.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-text text-center mb-10">
            Why Choose Us for {service.name}?
          </h2>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 bg-surface rounded-lg p-4">
                  <svg className="w-6 h-6 text-success shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-text">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Areas We Cover */}
      <section className="py-16 md:py-20 bg-primary-light">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-text-light text-center mb-6">
            Areas We Cover from Wakefield
          </h2>
          <p className="text-text-light/70 text-center max-w-2xl mx-auto mb-10">
            We provide {service.name.toLowerCase()} services across Wakefield and all surrounding areas.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {areas.map((a) => (
              <Link
                key={a.slug}
                href={`/areas/${a.slug}`}
                className="bg-primary hover:bg-accent text-text-light hover:text-primary font-medium px-5 py-2.5 rounded-full text-sm transition-all duration-200"
              >
                {a.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 md:py-20 bg-surface">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-text text-center mb-10">
            Related Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {relatedServices.map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}`}
                className="bg-white border border-border rounded-xl p-6 hover:shadow-lg hover:border-accent/30 transition-all duration-300 text-center group"
              >
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-text group-hover:text-accent transition-colors">{s.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABlock
        heading={`Call Now for ${service.name} in Wakefield`}
        subtext="Same-day availability. No hidden fees. Just reliable tyre service."
      />
    </>
  );
}

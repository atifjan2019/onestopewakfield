import Link from "next/link";
import { services, PHONE_NUMBER, PHONE_HREF } from "@/data/services";
import { areas } from "@/data/areas";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import CTABlock from "@/components/CTABlock";
import SchemaMarkup from "@/components/SchemaMarkup";

const testimonials = [
  { text: "Called at 9am, they were at my house by 10. New tyres fitted and balanced, brilliant service. Won't go anywhere else in Wakefield.", name: "Mark T., Wakefield", rating: 5 },
  { text: "Had a blowout on the A638 and these lads sorted me out within the hour. Friendly, fast, and fair price. Highly recommend.", name: "Sarah K., Ossett", rating: 5 },
  { text: "Best tyre fitting service in the area. No messing about, just honest work at honest prices. Used them three times now.", name: "James R., Normanton", rating: 5 },
  { text: "Mobile fitting is a game changer. They came to my workplace, swapped two tyres while I was in a meeting. Can't beat that.", name: "Lisa M., Dewsbury", rating: 5 },
];

const trustSignals = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Same-Day Service",
    desc: "Need tyres today? We've got you covered with same-day availability.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: "Local Coverage",
    desc: "Based in Wakefield, covering Leeds, Dewsbury, Castleford & beyond.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "No Hidden Fees",
    desc: "The price we quote is the price you pay. No surprises, guaranteed.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    title: "5-Star Rated",
    desc: "Trusted by drivers across Wakefield with top-rated Google reviews.",
  },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "One Stop Tyres Wakefield",
  description: "Professional tyre fitting, mobile tyre service, emergency repairs, and wheel balancing in Wakefield and surrounding areas.",
  telephone: "+4401924000000",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Wakefield",
    addressRegion: "West Yorkshire",
    addressCountry: "GB",
  },
  areaServed: [
    { "@type": "City", name: "Wakefield" },
    ...areas.map((a) => ({ "@type": "City", name: a.name })),
  ],
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "16:00" },
  ],
  priceRange: "££",
};

export default function Home() {
  return (
    <>
      <SchemaMarkup schema={localBusinessSchema} />

      {/* Hero */}
      <section className="bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-900 to-black opacity-90" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(227,30,36,0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(227,30,36,0.2) 0%, transparent 50%)' }} />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
              Tyre Fitting in Wakefield —{" "}
              <span className="text-accent">Fast, Reliable & Local</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl">
              Same-day tyre fitting, mobile service, and emergency repairs across Wakefield and surrounding areas. No hidden fees, just honest work done fast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={PHONE_HREF}
                className="bg-accent hover:bg-accent-hover text-white font-extrabold px-8 py-4 rounded-lg text-lg transition-all duration-200 hover:shadow-xl hover:shadow-accent/30 text-center inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Call Now
              </a>
              <Link
                href="/contact"
                className="border-2 border-white/30 hover:border-accent text-white font-bold px-8 py-4 rounded-lg text-lg transition-all duration-200 hover:bg-accent/10 text-center"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-20 bg-surface">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-text mb-3">Our Services</h2>
            <p className="text-text-muted max-w-xl mx-auto">
              From routine tyre fitting to emergency roadside repairs, we cover it all across Wakefield.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <ServiceCard
                key={s.slug}
                icon={s.icon}
                title={s.name}
                description={s.shortDesc}
                href={`/${s.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-text mb-3">Why Choose One Stop Tyres?</h2>
            <p className="text-text-muted max-w-xl mx-auto">
              We get the job done right, fast, and at a fair price. Every time.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustSignals.map((t) => (
              <div key={t.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
                  {t.icon}
                </div>
                <h3 className="font-bold text-text text-lg mb-2">{t.title}</h3>
                <p className="text-text-muted text-sm">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas We Cover */}
      <section className="py-16 md:py-20 bg-black">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">Areas We Cover</h2>
            <p className="text-white/70 max-w-xl mx-auto">
              Based in Wakefield, we provide fast tyre services across West Yorkshire.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <div className="bg-accent rounded-xl p-4 text-center">
              <span className="font-bold text-white text-lg">Wakefield</span>
              <p className="text-white/70 text-xs mt-1">Our Home Base</p>
            </div>
            {areas.map((a) => (
              <Link
                key={a.slug}
                href={`/areas/${a.slug}`}
                className="bg-neutral-900 hover:bg-accent/20 border border-white/10 rounded-xl p-4 text-center transition-all duration-200 group"
              >
                <span className="font-bold text-white group-hover:text-accent text-lg transition-colors">{a.name}</span>
                <p className="text-white/50 text-xs mt-1">Tyre Services</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 md:py-20 bg-surface">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent font-bold px-4 py-2 rounded-full text-sm mb-4">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              5.0 Stars on Google
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-text mb-3">What Our Customers Say</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} text={t.text} name={t.name} rating={t.rating} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CTABlock
        heading="Need Tyres Now? Call Us."
        subtext="Same-day service across Wakefield and surrounding areas. No hidden fees."
      />
    </>
  );
}

import Link from "next/link";
import { services, PHONE_NUMBER, PHONE_HREF } from "@/data/services";
import { areas } from "@/data/areas";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import CTABlock from "@/components/CTABlock";
import SchemaMarkup from "@/components/SchemaMarkup";

const testimonials = [
  { text: "Called at 9am, they were at my house by 10. New tyres fitted and balanced, brilliant service. Won't go anywhere else in Wakefield.", name: "Mark T.", rating: 5 },
  { text: "Had a blowout on the A638 and these lads sorted me out within the hour. Friendly, fast, and fair price. Highly recommend.", name: "Sarah K.", rating: 5 },
  { text: "Best tyre fitting service in the area. No messing about, just honest work at honest prices. Used them three times now.", name: "James R.", rating: 5 },
  { text: "Mobile fitting is a game changer. They came to my workplace, swapped two tyres while I was in a meeting. Can't beat that.", name: "Lisa M.", rating: 5 },
];

const trustSignals = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Same-Day Service",
    desc: "Need tyres today? We've got you covered with rapid same-day availability.",
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
    streetAddress: "Cinema House, 160 Doncaster Road, Belle Vue",
    addressLocality: "Wakefield",
    postalCode: "WF1 5HL",
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
    <div className="bg-primary min-h-screen">
      <SchemaMarkup schema={localBusinessSchema} />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] md:min-h-[90vh] min-h-[70vh] flex items-center justify-center overflow-hidden pt-12 md:pt-20 pb-12 md:pb-16">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
        <div className="absolute top-1/4 left-1/4 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-accent/20 rounded-full blur-[100px] md:blur-[150px] animate-blob mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-red-900/40 rounded-full blur-[80px] md:blur-[120px] animate-blob mix-blend-screen pointer-events-none" style={{ animationDelay: "2s" }}></div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 w-full text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-accent/30 text-accent font-bold text-sm mb-8 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            24/7 Emergency Callouts Available
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-6 md:mb-8 tracking-tighter drop-shadow-2xl animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Tyre Fitting in Wakefield <br className="hidden md:block" />
            <span className="text-gradient-accent">Fast & Local.</span>
          </h1>
          
          <p className="text-text-light text-base md:text-2xl mb-8 md:mb-12 max-w-3xl mx-auto font-medium leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Same-day fitting, mobile service, and emergency repairs across West Yorkshire. Premium service, no hidden fees.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <a
              href={PHONE_HREF}
              className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 font-black text-white text-base md:text-sm md:text-base transition-all duration-300 bg-gradient-to-r from-accent to-accent-hover rounded-2xl hover:shadow-[0_0_40px_rgba(227,30,36,0.6)] hover:-translate-y-1"
            >
              <svg className="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Call Now
            </a>
            <Link
              href="/book"
              className="w-full sm:w-auto glass-panel glass-panel-hover text-white font-bold px-6 py-3 md:px-8 md:py-4 rounded-2xl text-sm md:text-base transition-all duration-300 text-center"
            >
              Book Online
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
          <span className="text-xs font-bold tracking-widest uppercase writing-vertical-rl text-white">Scroll</span>
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-8 md:py-16 relative z-20 bg-surface-dark border-t border-border/50">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-10 md:mb-16 md:flex md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4 md:mb-6 tracking-tight">Expert Tyre Services.</h2>
              <p className="text-text-muted text-base md:text-xl font-medium">
                From routine fitting to emergency roadside repairs, we deliver high-performance automotive care directly to you.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      <section className="py-8 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 md:mb-6 tracking-tight">Why One Stop Tyres?</h2>
            <p className="text-text-muted text-base md:text-lg font-medium max-w-2xl mx-auto">
              We engineer our entire process for speed, safety, and transparency.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustSignals.map((t, idx) => (
              <div key={t.title} className="glass-panel rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-[40px] group-hover:bg-accent/20 transition-colors"></div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-transparent flex items-center justify-center text-accent mb-6 border border-accent/20 shadow-inner group-hover:scale-110 transition-transform duration-300">
                  {t.icon}
                </div>
                <h3 className="font-bold text-white text-xl mb-3">{t.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-8 md:py-16 bg-surface-dark border-t border-border/50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white font-bold px-5 py-2.5 rounded-full text-sm mb-6 shadow-lg backdrop-blur-md">
              <svg className="w-5 h-5 text-amber-400 drop-shadow-[0_0_5px_rgba(251,191,36,0.8)]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              5.0 Stars Rated
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">Driver Approved.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} text={t.text} name={t.name} rating={t.rating} />
            ))}
          </div>
        </div>
      </section>

      {/* Areas Expansion */}
      <section className="py-8 md:py-16 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/3">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Our Reach.</h2>
              <p className="text-text-muted text-lg mb-8">
                Based in Wakefield, our fleet covers the entire region providing lightning-fast response times.
              </p>
              <Link href="/areas" className="inline-flex items-center gap-2 text-white font-bold hover:text-accent transition-colors group">
                View Coverage Map
                <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="w-full md:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <Link href="/areas/wakefield" className="glass-panel group relative overflow-hidden rounded-2xl p-6 border-accent/30 bg-accent/10 hover:bg-accent/20 transition-colors pointer-events-none">
                <div className="relative z-10">
                  <span className="block font-black text-white text-xl group-hover:text-accent transition-colors">Wakefield</span>
                  <span className="text-accent text-xs font-bold uppercase tracking-widest mt-1 block">HQ</span>
                </div>
              </Link>
              {areas.slice(0, 5).map((a) => (
                <Link
                  key={a.slug}
                  href={`/areas/${a.slug}`}
                  className="glass-panel group relative overflow-hidden rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="relative z-10 block font-bold text-text-light group-hover:text-white transition-colors">{a.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CTABlock
        heading="Need Tyres Now? Call Us."
        subtext="Our rapid response team is standing by to get you back on the road."
      />
    </div>
  );
}

import Link from "next/link";
import { notFound } from "next/navigation";
import { PHONE_NUMBER, PHONE_HREF } from "@/data/services";
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
    .map((s) => areas.find((a) => a.slug === s))
    .filter(Boolean);

  const areaSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "One Stop Tyres Wakefield",
    telephone: PHONE_NUMBER,
    url: "https://www.onestoptyreswakefield.co.uk",
    logo: "https://www.onestoptyreswakefield.co.uk/logo.png",
    image: "https://www.onestoptyreswakefield.co.uk/og-image.jpg",
    geo: {
      "@type": "GeoCoordinates",
      "latitude": "53.6830",
      "longitude": "-1.4977"
    },
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
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "09:00", closes: "18:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "09:00", closes: "17:00" },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "50",
      bestRating: "5"
    }
  };

  const tyreServices = [
    {
      slug: "tyre-fitting-wakefield",
      icon: "wrench",
      title: `Tyre Fitting in ${area.name}`,
      solves: "Worn, damaged, or unsafe tyres preventing legal, safe driving.",
      when: "When tread depth drops below 1.6mm or the tyre is structurally compromised.",
    },
    {
      slug: "mobile-tyre-fitting-wakefield",
      icon: "van",
      title: `Mobile Tyre Fitting in ${area.name}`,
      solves: `Tyres replaced at your home, workplace, or roadside in ${area.name} without visiting a garage.`,
      when: `Mobile tyre fitting in ${area.name} is ideal when you cannot or should not drive the vehicle.`,
    },
    {
      slug: "emergency-tyre-repair-wakefield",
      icon: "siren",
      title: `Emergency Tyre Repair in ${area.name}`,
      solves: "Sudden blowouts, roadside flat tyres, and urgent tyre failures.",
      when: `When you are stranded and need fast, on-site assistance in ${area.name}.`,
    },
    {
      slug: "puncture-repair-wakefield",
      icon: "bandage",
      title: `Puncture Repair in ${area.name}`,
      solves: "Nail, screw, or sharp-object punctures within the safe repair zone.",
      when: "When a puncture is found early and the damage is within safe, repairable limits.",
    },
    {
      slug: "wheel-balancing-wakefield",
      icon: "scale",
      title: `Wheel Balancing in ${area.name}`,
      solves: "Steering vibrations, pulling to one side, and uneven tyre wear.",
      when: "After new tyre fitting, or when you notice vibration above 50 mph.",
    },
    {
      slug: "tyre-replacement-wakefield",
      icon: "refresh",
      title: `Tyre Replacement in ${area.name}`,
      solves: "Full tyre swap using budget, mid-range, or premium tyre brands.",
      when: "When repair is not possible or the tyre has worn beyond legal limits.",
    },
  ];

  const tyreProblems = [
    {
      problem: `Flat Tyre in ${area.name}`,
      risk: "Unsafe to drive — risk of rim damage, loss of control, and breakdown.",
      solution: "Emergency tyre repair or on-site replacement.",
      service: "Emergency Tyre Repair",
      serviceSlug: "emergency-tyre-repair-wakefield",
    },
    {
      problem: `Emergency Breakdown in ${area.name}`,
      risk: "Stranded at roadside, vulnerable to oncoming traffic.",
      solution: "Rapid dispatch for roadside tyre replacement.",
      service: "Emergency Tyre Repair",
      serviceSlug: "emergency-tyre-repair-wakefield",
    },
    {
      problem: "Worn Tyres Needing Replacement",
      risk: "Illegal tread depth below 1.6mm — MOT failure and safety risk.",
      solution: "Full tyre replacement from our stock of budget to premium tyres.",
      service: "Tyre Replacement",
      serviceSlug: "tyre-replacement-wakefield",
    },
    {
      problem: `Tyres Needed at Home or Work in ${area.name}`,
      risk: "Inconvenience of visiting a garage during work or family hours.",
      solution: "Mobile tyre fitting delivered to your exact address.",
      service: "Mobile Tyre Fitting",
      serviceSlug: "mobile-tyre-fitting-wakefield",
    },
    {
      problem: "Vibration or Uneven Tyre Wear",
      risk: "Premature tyre wear, poor fuel economy, and unsafe handling.",
      solution: "Precision wheel balancing and alignment check.",
      service: "Wheel Balancing",
      serviceSlug: "wheel-balancing-wakefield",
    },
    {
      problem: `Sudden Puncture in ${area.name}`,
      risk: "Rapid tyre deflation leading to blowout if not addressed promptly.",
      solution: "BS AU 159 puncture repair if repairable, or replacement if not.",
      service: "Puncture Repair",
      serviceSlug: "puncture-repair-wakefield",
    },
  ];

  const comparisons = [
    {
      type: "Same-Day",
      bestFor: "Planned tyre replacement or fitting at short notice",
      where: `Home, workplace, or garage visit in ${area.name}`,
      speed: "Booked slot within the day",
      useCase: "Tyre worn out or upcoming long journey",
      limitation: "Subject to same-day availability and tyre stock",
      highlight: false,
    },
    {
      type: "Mobile",
      bestFor: "Convenience — no garage visit needed",
      where: `Any location across ${area.name}`,
      speed: "Flexible scheduling, typically within hours",
      useCase: `Fitting tyres at home or work in ${area.name}`,
      limitation: "For planned or short-notice jobs, not immediate emergencies",
      highlight: true,
    },
    {
      type: "Emergency",
      bestFor: "Breakdown, blowout, or roadside incident",
      where: "Roadside, car park, or wherever you are stranded",
      speed: "Immediate response — priority dispatch",
      useCase: "Sudden flat tyre or blowout on the road",
      limitation: "Response time depends on current demand and location",
      highlight: false,
    },
  ];

  const diagnostics = [
    {
      title: "Puncture Repair",
      icon: "bandage",
      slug: "puncture-repair-wakefield",
      desc: "A puncture can only be repaired safely if the damage is within the central 75% of the tread and no wider than 6mm. Sidewall damage cannot be repaired. All repairs are carried out to British Standard BS AU 159.",
      trigger: "Small nail or screw in tread area, slow puncture.",
    },
    {
      title: "Tyre Replacement",
      icon: "refresh",
      slug: "tyre-replacement-wakefield",
      desc: "Replacement is required if tread depth is below the legal 1.6mm minimum, the sidewall is damaged or bulging, the tyre has suffered a blowout, or a safe repair is not possible.",
      trigger: "Tread worn, sidewall damage, blowout, or failed repair.",
    },
    {
      title: "Wheel Balancing",
      icon: "scale",
      slug: "wheel-balancing-wakefield",
      desc: "Wheel balancing corrects weight distribution around the wheel and tyre. If you feel vibration through the steering wheel or seat above 50 mph, your wheels likely need balancing. Included with every tyre replacement.",
      trigger: "Vibration at speed, wobble in the steering wheel.",
    },
    {
      title: "Wheel Alignment",
      icon: "wrench",
      slug: "tyre-fitting-wakefield",
      desc: "Wheel alignment (tracking) corrects the angle of your tyres against the road. Misalignment causes rapid uneven tyre wear and the car pulling to one side. Separate from balancing — check after hitting a kerb or pothole.",
      trigger: "Car pulling to one side, uneven or rapid tyre wear.",
    },
  ];

  const faqs = [
    {
      q: `Do you offer mobile tyre fitting in ${area.name}?`,
      a: `Yes, we offer mobile tyre fitting in ${area.name}. Our van comes directly to your home, workplace, or roadside so you never need to drive on a damaged or unsafe tyre.`,
    },
    {
      q: `Can I get same-day tyre fitting in ${area.name}?`,
      a: `Same-day tyre fitting in ${area.name} is available on most days. Call us in the morning for the best chance of a same-day appointment. We carry a wide range of tyre sizes on our vans.`,
    },
    {
      q: `Do you repair punctures in ${area.name}?`,
      a: `We carry out puncture repairs in ${area.name} to British Standard BS AU 159. If the damage falls within the safe repair zone, we will fix the puncture rather than replace the tyre, saving you money.`,
    },
    {
      q: `Can tyres be fitted at home in ${area.name}?`,
      a: `Yes, tyres can be fitted at your home in ${area.name}. Our mobile service covers driveways, car parks, and residential streets. No ramp or garage visit required.`,
    },
    {
      q: `Do you cover roadside emergencies in ${area.name}?`,
      a: `We respond to roadside emergencies across ${area.name}. If you have a blowout, flat tyre, or breakdown, call us and we will dispatch a technician with the equipment to repair or replace on the spot.`,
    },
    {
      q: `What areas near ${area.name} do you cover?`,
      a: `Beyond ${area.name}, we cover the wider West Yorkshire region including ${nearbyAreaData.map((a) => a.name).join(", ")}${nearbyAreaData.length > 0 ? "," : ""} and Wakefield. Call us to confirm coverage for your specific location.`,
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <div className="bg-primary min-h-screen pt-20">
      <SchemaMarkup schema={areaSchema} />
      <SchemaMarkup schema={faqSchema} />

      {/* ── Section 1: HERO ── */}
      <section className="relative py-8 md:py-16 px-4 md:px-6 overflow-hidden min-h-[520px] flex flex-col items-center justify-center">
        <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-accent/10 blur-[100px] md:blur-[150px] rounded-full pointer-events-none animate-pulse-slow" />
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
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-3 md:mb-4 tracking-tight">
              Tyre Fitting in {area.name}
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-accent mb-6 md:mb-8">
              Mobile, Same-Day &amp; Emergency Tyre Services in {area.name}
            </h2>
            <p className="text-text-muted text-lg md:text-xl max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed">
              We provide fast and reliable tyre fitting in {area.name}, covering home, workplace, and roadside situations. Whether you need urgent tyre replacement, puncture repair, or mobile tyre fitting in {area.name}, our local team is ready to respond quickly.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mb-8">
              <a
                href={PHONE_HREF}
                className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 font-black text-white text-base transition-all duration-300 bg-gradient-to-r from-accent to-accent-hover rounded-2xl shadow-[0_0_30px_rgba(227,30,36,0.4)] hover:shadow-[0_0_50px_rgba(227,30,36,0.6)] hover:-translate-y-1"
              >
                <svg className="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Call Now — {PHONE_NUMBER}
              </a>
              <Link
                href="/book"
                className="w-full sm:w-auto glass-panel glass-panel-hover text-white font-bold px-6 py-3 md:px-8 md:py-4 rounded-2xl text-base transition-all duration-300 text-center"
              >
                Book Online
              </Link>
            </div>

            <p className="text-sm text-text-muted font-medium">
              Serving {area.name} and nearby locations across West Yorkshire.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 2: SERVICES ── */}
      <section className="py-8 md:py-16 bg-surface-dark border-t border-border/50">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 md:mb-6">
              Tyre Services in {area.name}
            </h2>
            <p className="text-text-muted text-base md:text-lg max-w-2xl mx-auto">
              Our tyre services in {area.name} cover everything from urgent breakdown repairs to planned tyre replacement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {tyreServices.map((svc) => (
              <Link
                key={svc.slug}
                href={`/${svc.slug}`}
                className="glass-panel group relative overflow-hidden rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 block"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent mb-5 group-hover:scale-110 group-hover:bg-accent/10 group-hover:border-accent/30 transition-all duration-300">
                  <ServiceIcon name={svc.icon} className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors mb-2">{svc.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed mb-3">{svc.solves}</p>
                <p className="text-text-muted/70 text-xs leading-relaxed italic">{svc.when}</p>
                <span className="inline-block mt-4 text-accent text-xs font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: COMMON TYRE PROBLEMS ── */}
      <section className="py-8 md:py-16 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 md:mb-6">
              Common Tyre Problems in {area.name}
            </h2>
            <p className="text-text-muted text-base md:text-lg max-w-2xl mx-auto">
              Drivers in {area.name} often face tyre issues that require quick and reliable solutions. Here are the most common situations we handle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {tyreProblems.map((item) => (
              <div key={item.problem} className="glass-panel rounded-3xl p-6 border border-white/5 flex flex-col">
                <h3 className="text-base font-bold text-white mb-4">{item.problem}</h3>
                <div className="space-y-3 mb-5 flex-1">
                  <div className="flex gap-2 text-sm">
                    <span className="text-accent font-semibold shrink-0 w-16">Risk:</span>
                    <span className="text-text-muted">{item.risk}</span>
                  </div>
                  <div className="flex gap-2 text-sm">
                    <span className="text-white/60 font-semibold shrink-0 w-16">Solution:</span>
                    <span className="text-text-muted">{item.solution}</span>
                  </div>
                </div>
                <Link
                  href={`/${item.serviceSlug}`}
                  className="inline-flex items-center gap-1 text-accent text-xs font-bold uppercase tracking-wider hover:gap-2 transition-all"
                >
                  {item.service} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: SAME-DAY vs MOBILE vs EMERGENCY ── */}
      <section className="py-8 md:py-16 bg-surface-dark border-t border-border/50">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 md:mb-6">
              Same-Day, Mobile &amp; Emergency
            </h2>
            <p className="text-text-muted text-base md:text-lg max-w-2xl mx-auto">
              Not sure which service you need? Here is a clear breakdown.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {comparisons.map((col) => (
              <div
                key={col.type}
                className={`glass-panel rounded-3xl p-8 flex flex-col gap-4 ${col.highlight ? "border-accent/40 bg-accent/5 shadow-[0_0_30px_rgba(227,30,36,0.1)]" : ""}`}
              >
                <h3 className={`text-xl font-black mb-2 ${col.highlight ? "text-accent" : "text-white"}`}>{col.type}</h3>
                {[
                  { label: "Best for", value: col.bestFor },
                  { label: "Where", value: col.where },
                  { label: "Speed", value: col.speed },
                  { label: "Use case", value: col.useCase },
                  { label: "Limitation", value: col.limitation },
                ].map((row) => (
                  <div key={row.label}>
                    <span className="text-xs font-bold text-white/40 uppercase tracking-wider block mb-1">{row.label}</span>
                    <span className="text-text-muted text-sm">{row.value}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: REPAIR vs REPLACE vs BALANCE ── */}
      <section className="py-8 md:py-16 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 md:mb-6">
              Repair, Replace or Balance?
            </h2>
            <p className="text-text-muted text-base md:text-lg max-w-2xl mx-auto">
              Not all tyre problems require the same solution. Here is how to understand what your vehicle needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {diagnostics.map((item) => (
              <div key={item.title} className="glass-panel rounded-3xl p-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                    <ServiceIcon name={item.icon} className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-white mb-2">{item.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed mb-3">{item.desc}</p>
                    <p className="text-xs text-white/40 italic mb-4">When needed: {item.trigger}</p>
                    <Link href={`/${item.slug}`} className="text-accent text-xs font-bold uppercase tracking-wider hover:underline">
                      Learn more →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 6: WHY CHOOSE US ── */}
      <section className="py-8 md:py-16 bg-surface-dark border-t border-border/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]" />
        <div className="mx-auto max-w-7xl px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 md:mb-8">
                Why Drivers in {area.name} Choose Us.
              </h2>
              <div className="space-y-4">
                {[
                  `Local coverage across ${area.name} and surrounding areas`,
                  `Mobile service to home, work, or roadside in ${area.name}`,
                  "Fast response times with priority dispatch available",
                  "Same-day availability for most tyre services",
                  "Trusted by local drivers throughout West Yorkshire",
                  ...area.whyChooseUs,
                ].map((point) => (
                  <div key={point} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center border border-accent/30 mt-1">
                      <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <span className="text-text-light font-medium text-base pt-1">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <div className="glass-panel rounded-3xl p-8 border-accent/30 bg-accent/5 relative overflow-hidden shadow-[0_0_50px_rgba(227,30,36,0.1)]">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 blur-[40px] rounded-full" />
                <h3 className="text-2xl font-black text-white mb-4 relative z-10">Local Fast Response</h3>
                <p className="text-text-muted relative z-10 mb-8">
                  Because we have drivers dedicated to the {area.name} area, you will never wait hours for a simple tyre change or repair.
                </p>
                <a href={PHONE_HREF} className="w-full relative z-10 block text-center bg-white text-black font-black py-4 rounded-xl hover:bg-neutral-200 transition-colors shadow-lg shadow-white/10">
                  Dispatch a Van to {area.name}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 7: LOCAL COVERAGE ── */}
      <section className="py-8 md:py-16 border-t border-border/50">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Local Coverage in &amp; Around {area.name}
            </h2>
            <p className="text-text-muted max-w-xl mx-auto">
              Our tyre service covers {area.name} and all nearby locations. We come to your home, workplace, or roadside — no garage visit needed.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="glass-panel rounded-2xl p-6 mb-6 text-center">
              <span className="text-xs font-bold text-white/40 uppercase tracking-wider block mb-2">Primary Area</span>
              <span className="text-2xl font-black text-accent">{area.name}</span>
              <div className="flex flex-wrap justify-center gap-6 mt-4 text-sm text-text-muted">
                <span>Home visits</span>
                <span className="text-white/20">|</span>
                <span>Workplace</span>
                <span className="text-white/20">|</span>
                <span>Roadside</span>
              </div>
            </div>

            {nearbyAreaData.length > 0 && (
              <div>
                <span className="text-xs font-bold text-white/40 uppercase tracking-wider block mb-3 text-center">Also Covering Nearby</span>
                <div className="flex flex-wrap justify-center gap-3">
                  {nearbyAreaData.map((nearby) => (
                    <Link
                      key={nearby.slug}
                      href={`/areas/${nearby.slug}`}
                      className="glass-panel text-text-muted hover:text-white font-bold px-5 py-2 rounded-xl transition-all duration-300 hover:border-accent/40 text-sm"
                    >
                      {nearby.name}
                    </Link>
                  ))}
                  <Link
                    href="/"
                    className="glass-panel border-accent/40 bg-accent/10 text-white font-bold px-5 py-2 rounded-xl transition-all duration-300 hover:bg-accent hover:border-accent shadow-[0_0_15px_rgba(227,30,36,0.2)] text-sm"
                  >
                    Wakefield (HQ)
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Section 8: INTERNAL LINK HUB ── */}
      <section className="py-8 md:py-16 bg-surface-dark border-t border-border/50">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div>
              <h3 className="text-sm font-bold text-white/40 uppercase tracking-wider mb-4">Our Services</h3>
              <ul className="space-y-3">
                {[
                  { name: "Tyre Fitting", slug: "tyre-fitting-wakefield" },
                  { name: "Mobile Tyre Fitting", slug: "mobile-tyre-fitting-wakefield" },
                  { name: "Emergency Tyre Repair", slug: "emergency-tyre-repair-wakefield" },
                  { name: "Puncture Repair", slug: "puncture-repair-wakefield" },
                  { name: "Wheel Balancing", slug: "wheel-balancing-wakefield" },
                  { name: "Tyre Replacement", slug: "tyre-replacement-wakefield" },
                ].map((svc) => (
                  <li key={svc.slug}>
                    <Link href={`/${svc.slug}`} className="text-text-muted hover:text-accent transition-colors text-sm flex items-center gap-2 font-medium">
                      <span className="text-accent">→</span> {svc.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {nearbyAreaData.length > 0 && (
              <div>
                <h3 className="text-sm font-bold text-white/40 uppercase tracking-wider mb-4">Nearby Areas</h3>
                <ul className="space-y-3">
                  {nearbyAreaData.map((nearby) => (
                    <li key={nearby.slug}>
                      <Link href={`/areas/${nearby.slug}`} className="text-text-muted hover:text-accent transition-colors text-sm flex items-center gap-2 font-medium">
                        <span className="text-accent">→</span> Tyre Fitting in {nearby.name}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link href="/" className="text-text-muted hover:text-accent transition-colors text-sm flex items-center gap-2 font-medium">
                      <span className="text-accent">→</span> Tyre Fitting in Wakefield (HQ)
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Section 9: FAQ ── */}
      <section className="py-8 md:py-16 border-t border-border/50">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 md:mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-text-muted text-base md:text-lg max-w-2xl mx-auto">
              Common questions about tyre fitting and mobile tyre services in {area.name}.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="glass-panel rounded-2xl p-6">
                <h3 className="text-base font-bold text-white mb-3">{faq.q}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 10: CTA ── */}
      <CTABlock
        heading={`Need Tyres in ${area.name} Today?`}
        subtext={`Call now or book online for fast tyre fitting, mobile service, or emergency tyre repair in ${area.name}.`}
      />
    </div>
  );
}

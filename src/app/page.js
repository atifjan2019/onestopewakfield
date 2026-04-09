import Link from "next/link";
import { services, PHONE_NUMBER, PHONE_HREF } from "@/data/services";
import { areas } from "@/data/areas";
import ServiceCard from "@/components/ServiceCard";
import TestimonialSlider from "@/components/TestimonialSlider";
import CTABlock from "@/components/CTABlock";
import SchemaMarkup from "@/components/SchemaMarkup";

/* ─── TESTIMONIALS ─── */
const testimonials = [
  { text: "Called at 9am, they were at my house by 10. New tyres fitted and balanced, brilliant service. Won't go anywhere else in Wakefield.", name: "Mark T.", rating: 5 },
  { text: "Had a blowout on the A638 and these lads sorted me out within the hour. Friendly, fast, and fair price. Highly recommend.", name: "Sarah K.", rating: 5 },
  { text: "Best tyre fitting service in the area. No messing about, just honest work at honest prices. Used them three times now.", name: "James R.", rating: 5 },
  { text: "Mobile fitting is a game changer. They came to my workplace, swapped two tyres while I was in a meeting. Can't beat that.", name: "Lisa M.", rating: 5 },
];

/* ─── TRUST STRIP ─── */
const trustStrip = [
  { label: "Same-Day Service", icon: "clock" },
  { label: "No Hidden Fees", icon: "shield" },
  { label: "Local Wakefield Team", icon: "pin" },
  { label: "Top-Rated Reviews", icon: "star" },
];

/* ─── INTENT ROUTER CARDS ─── */
const intentCards = [
  { headline: "Need Tyres Fitted?", desc: "Same-day tyre fitting at our Wakefield workshop or at your location.", href: "/tyre-fitting-wakefield", icon: "wrench" },
  { headline: "Need Mobile Fitting?", desc: "We come to your home, workplace, or roadside across Wakefield.", href: "/mobile-tyre-fitting-wakefield", icon: "van" },
  { headline: "Emergency Tyre Issue?", desc: "Rapid local call-out for breakdowns and urgent tyre problems.", href: "/emergency-tyre-repair-wakefield", icon: "siren" },
  { headline: "Got a Puncture?", desc: "Safe, honest puncture assessment and BS AU 159 repair.", href: "/puncture-repair-wakefield", icon: "bandage" },
  { headline: "Vibration or Pull?", desc: "Precision wheel balancing to restore smooth, safe driving.", href: "/wheel-balancing-wakefield", icon: "scale" },
  { headline: "Need New Tyres?", desc: "Budget to premium tyres, supplied and fitted across Wakefield.", href: "/tyre-replacement-wakefield", icon: "refresh" },
];

/* ─── PROBLEM MODULES ─── */
const problems = [
  {
    title: "Flat Tyre or Puncture?",
    situation: "You've found a flat tyre on your driveway, at work, or at the roadside.",
    risk: "Driving on a flat damages the wheel rim and risks a dangerous blowout.",
    path: "If the puncture is in the central tread band, a BS AU 159 repair may save the tyre. Sidewall or shoulder damage requires replacement.",
    links: [
      { label: "Puncture Repair", href: "/puncture-repair-wakefield" },
      { label: "Tyre Replacement", href: "/tyre-replacement-wakefield" },
    ],
  },
  {
    title: "Treads Wearing Thin?",
    situation: "Your tyres look smooth, or you've been warned at an MOT that tread depth is borderline.",
    risk: "The UK legal minimum is 1.6mm. Below that you risk a £2,500 fine per tyre, three penalty points, and significantly longer braking distances.",
    path: "Book a tyre replacement. We confirm the correct size by registration or measurement and fit the right tyre for your vehicle.",
    links: [{ label: "Tyre Replacement", href: "/tyre-replacement-wakefield" }],
  },
  {
    title: "Need Tyres Fitted Same-Day?",
    situation: "Your car failed its MOT, you're leaving on a trip, or you simply can't wait.",
    risk: "Delaying replacement increases the risk of a blowout or failed roadside check.",
    path: "We specialise in same-day tyre fitting across Wakefield. Call with your registration or tyre size and we confirm availability immediately.",
    links: [{ label: "Tyre Fitting", href: "/tyre-fitting-wakefield" }],
  },
  {
    title: "Can't Bring the Car to Us?",
    situation: "You're stuck at home with a flat, at work without time to leave, or the car isn't driveable.",
    risk: "Attempting to drive on a damaged tyre is unsafe and can cause further damage.",
    path: "Our mobile tyre fitting service brings the workshop to your home, workplace, or any safe accessible location in Wakefield.",
    links: [{ label: "Mobile Tyre Fitting", href: "/mobile-tyre-fitting-wakefield" }],
  },
  {
    title: "Tyre Issue on the Road?",
    situation: "Blowout, rapid deflation, or flat on the A61, A638, M1, or M62 near Wakefield.",
    risk: "Roadside danger from traffic and exposure. A stranded vehicle needs urgent attention.",
    path: "Call us immediately. Our emergency tyre repair service dispatches a technician to your location with replacement tyres and repair equipment.",
    links: [{ label: "Emergency Repair", href: "/emergency-tyre-repair-wakefield" }],
  },
  {
    title: "Vibration, Pulling, or Uneven Wear?",
    situation: "The steering wheel vibrates at speed, the car drifts to one side, or tyres are wearing unevenly.",
    risk: "These indicate wheel balance or alignment issues. Ignoring them accelerates tyre wear and compromises handling.",
    path: "Start with wheel balancing. If symptoms persist, alignment (tracking) may be needed.",
    links: [{ label: "Wheel Balancing", href: "/wheel-balancing-wakefield" }],
  },
  {
    title: "Tyre Pressure Warning Light?",
    situation: "Your dashboard TPMS light is on, or you've noticed slow pressure loss over days.",
    risk: "Low pressure increases fuel consumption, accelerates wear, and reduces grip. A faulty TPMS valve may mask real pressure loss.",
    path: "We check your tyre pressure, inspect for slow punctures, and can service TPMS valves where needed.",
    links: [{ label: "Puncture Repair", href: "/puncture-repair-wakefield" }],
  },
];

/* ─── PROCESS STEPS ─── */
const processSteps = [
  { step: "01", title: "Tell Us What You Need", desc: "Call 01924 929966 or book online. Tell us your situation, vehicle registration, or tyre size." },
  { step: "02", title: "We Find the Right Path", desc: "We route you to the right service — workshop fitting, mobile attendance, emergency call-out, or puncture assessment." },
  { step: "03", title: "Confirm Your Tyres", desc: "We identify the correct fitment by registration or size, confirm load index and speed rating, and present budget, mid-range, or premium options." },
  { step: "04", title: "Book or Dispatch", desc: "For planned fitting, choose a time that works. For mobile or emergency needs, we dispatch to your location." },
  { step: "05", title: "Fit, Repair, or Replace", desc: "Our technicians complete the job — fitting, repairing, replacing, and balancing — with professional equipment." },
  { step: "06", title: "Safety Check & Go", desc: "Every job includes a final pressure check and visual inspection before you drive away." },
];

/* ─── FAQ DATA ─── */
const faqs = [
  { q: "How much does tyre fitting cost in Wakefield?", a: "The cost depends on the tyre specification for your vehicle and the tier chosen — budget, mid-range, or premium. We provide upfront pricing with no hidden fees. Call us on 01924 929966 or book online for a fast quote." },
  { q: "Can you fit tyres same day in Wakefield?", a: "Yes. We offer same-day tyre fitting at our Wakefield workshop and through our mobile fleet, subject to stock and availability. Call us early in the day for the best same-day availability." },
  { q: "Do you offer mobile tyre fitting in Wakefield?", a: "Yes. Our mobile tyre fitting service covers Wakefield and surrounding West Yorkshire areas. We come to your home, workplace, or any safe accessible location with a fully equipped fitting van." },
  { q: "Can a puncture be repaired, or does it need replacing?", a: "It depends on the location and severity. A puncture in the central tread band may be safely repairable to BS AU 159 standard. Sidewall damage, shoulder punctures, or run-flat tyre damage generally requires replacement. Our technicians assess every puncture before recommending the safest option." },
  { q: "Do you cover WF1 to WF6 postcodes?", a: "Yes. We cover all Wakefield postcodes — WF1, WF2, WF3, WF4, WF5, and WF6 — for both workshop and mobile services." },
  { q: "Can you fit tyres at my home or workplace?", a: "Yes. Our mobile tyre fitting service operates at homes, workplaces, and any safe accessible location across Wakefield and West Yorkshire." },
  { q: "Do you cover the M1 near Wakefield?", a: "Yes. Our mobile fleet regularly attends locations near M1 junctions 39, 40, and 41, and M62 junctions 29, 30, and 31. Call us directly if you've broken down near a motorway junction in the Wakefield area." },
  { q: "Can you remove a locking wheel nut without the key?", a: "Yes. If your locking wheel nut key is lost, damaged, or broken, we can remove the locking nut safely without damaging the wheel, allowing tyre replacement or other work to proceed." },
  { q: "What tyre size does my car need?", a: "Give us your vehicle registration and we can look up the correct specifications — size, load index, and speed rating — instantly. Alternatively, the tyre size is printed on the sidewall of your current tyres (e.g. 205/55 R16 91V)." },
  { q: "What is the legal tyre tread depth in the UK?", a: "The UK legal minimum is 1.6mm across the central three-quarters of the tread width, around the entire circumference. Driving below this is illegal and carries a fine of up to £2,500 and three penalty points per tyre." },
  { q: "Do you fit van tyres in Wakefield?", a: "Yes. We fit tyres for vans and light commercial vehicles, ensuring the correct load index and speed rating for your vehicle's requirements." },
  { q: "Do you fit EV tyres?", a: "Yes, we can fit tyres for electric vehicles. EV tyres are designed for the increased weight and instant torque of electric drivetrains, with lower rolling resistance and reduced road noise." },
  { q: "Is wheel balancing included with tyre fitting?", a: "Wheel balancing is included with every tyre replacement. For standalone fitting where you supply the tyre, contact us to confirm what's included in your quote." },
  { q: "Do I need wheel alignment after hitting a pothole?", a: "Not always, but it's worth checking. Pothole impacts can knock wheel alignment out of specification, causing the car to pull to one side and causing uneven tyre wear. Start with a wheel balance check — if the issue persists, alignment adjustment may be needed." },
  { q: "Do you offer budget and premium tyres?", a: "Yes. We supply and fit tyres across budget, mid-range, and premium tiers. Budget tyres meet all legal requirements and suit lower-mileage drivers. Premium tyres offer advanced wet grip, shorter braking distances, and longer wear life." },
  { q: "What is the difference between mobile tyre fitting and emergency tyre repair?", a: "Mobile tyre fitting is a scheduled or on-demand service where we come to your chosen location to fit pre-arranged tyres. Emergency tyre repair is an urgent call-out for drivers stranded due to a blowout, flat, or sudden tyre failure. Both operate at your location, but emergency repair prioritises urgent attendance." },
];

/* ─── FEATURED AREAS ─── */
const featuredAreas = [
  { name: "Leeds", slug: "leeds" },
  { name: "Dewsbury", slug: "dewsbury" },
  { name: "Castleford", slug: "castleford" },
  { name: "Pontefract", slug: "pontefract" },
  { name: "Normanton", slug: "normanton" },
  { name: "Ossett", slug: "ossett" },
  { name: "Batley", slug: "batley" },
  { name: "Horbury", slug: "horbury" },
];

/* ─── SCHEMA: AutoRepair (LocalBusiness) ─── */
const autoRepairSchema = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "One Stop Tyres Wakefield",
  description: "Tyre fitting, mobile tyre fitting, emergency tyre repair, puncture repair, wheel balancing, and tyre replacement in Wakefield, West Yorkshire.",
  telephone: "+441924929966",
  url: "https://www.onestoptyreswakefield.co.uk",
  logo: "https://www.onestoptyreswakefield.co.uk/logo.png",
  image: "https://www.onestoptyreswakefield.co.uk/og-image.jpg",
  priceRange: "££",
  geo: {
    "@type": "GeoCoordinates",
    latitude: "53.6830",
    longitude: "-1.4977",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Cinema House, 160 Doncaster Road, Belle Vue",
    addressLocality: "Wakefield",
    addressRegion: "West Yorkshire",
    postalCode: "WF1 5HL",
    addressCountry: "GB",
  },
  areaServed: [
    { "@type": "City", name: "Wakefield" },
    ...areas.map((a) => ({ "@type": "City", name: a.name })),
  ],
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "09:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "09:00", closes: "17:00" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "50",
    bestRating: "5",
  },
  review: testimonials.map((t) => ({
    "@type": "Review",
    author: { "@type": "Person", name: t.name },
    reviewRating: { "@type": "Rating", ratingValue: t.rating, bestRating: "5" },
    reviewBody: t.text,
  })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Tyre Services",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.name,
        description: s.shortDesc,
        url: `https://www.onestoptyreswakefield.co.uk/${s.slug}`,
        provider: { "@type": "AutoRepair", name: "One Stop Tyres Wakefield" },
        areaServed: { "@type": "City", name: "Wakefield" },
      },
    })),
  },
};

/* ─── SCHEMA: FAQPage ─── */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

/* ─── METADATA ─── */
export const metadata = {
  title: "Tyre Fitting Wakefield | Mobile, Emergency & Same-Day | One Stop Tyres",
  description: "Same-day tyre fitting, mobile fitting & emergency tyre repair in Wakefield. No hidden fees. Budget to premium tyres supplied & fitted. Call 01924 929966.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Tyre Fitting Wakefield | Mobile, Emergency & Same-Day | One Stop Tyres",
    description: "Same-day tyre fitting, mobile fitting & emergency tyre repair in Wakefield. No hidden fees. Budget to premium tyres supplied & fitted. Call 01924 929966.",
    url: "https://www.onestoptyreswakefield.co.uk",
    siteName: "One Stop Tyres Wakefield",
    locale: "en_GB",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "One Stop Tyres Wakefield — Tyre Fitting, Mobile Service & Emergency Repair" }],
  },
};

/* ─── INLINE SVG ICON HELPER ─── */
function TrustIcon({ type }) {
  const icons = {
    clock: <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />,
    shield: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />,
    pin: <><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></>,
    star: <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />,
  };
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">{icons[type]}</svg>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HOMEPAGE
   ═══════════════════════════════════════════════════════════════ */
export default function Home() {
  return (
    <div className="bg-primary min-h-screen">
      <SchemaMarkup schema={autoRepairSchema} />
      <SchemaMarkup schema={faqSchema} />

      {/* ═══ SECTION 1 — HERO / ENTITY CONFIRMATION ═══ */}
      <section className="relative min-h-[90vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden pt-12 md:pt-20 pb-12 md:pb-16">
        <div className="absolute inset-0 bg-[url('/images/2.jpeg')] bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/80 to-primary"></div>
        <div className="absolute top-1/4 left-1/4 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-accent/20 rounded-full blur-[100px] md:blur-[150px] animate-blob mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-red-900/40 rounded-full blur-[80px] md:blur-[120px] animate-blob mix-blend-screen pointer-events-none" style={{ animationDelay: "2s" }}></div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 w-full text-center">
          {/* Emergency badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-accent/30 text-accent font-bold text-sm mb-8 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            24/7 Emergency Callouts Available
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-6 md:mb-8 tracking-tighter drop-shadow-2xl animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Tyre Fitting, Mobile Service{" "}
            <br className="hidden md:block" />
            <span className="text-gradient-accent">& Emergency Repair in Wakefield</span>
          </h1>

          <p className="text-text-light text-base md:text-2xl mb-8 md:mb-12 max-w-3xl mx-auto font-medium leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Same-day tyre fitting at our Wakefield workshop or at your door. Mobile service and emergency call-outs across West Yorkshire. No hidden fees.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <a href={PHONE_HREF} className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 font-black text-white text-base md:text-base transition-all duration-300 bg-gradient-to-r from-accent to-accent-hover rounded-2xl hover:shadow-[0_0_40px_rgba(227,30,36,0.6)] hover:-translate-y-1">
              <svg className="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Call Now
            </a>
            <Link href="/book" className="w-full sm:w-auto glass-panel glass-panel-hover text-white font-bold px-6 py-3 md:px-8 md:py-4 rounded-2xl text-sm md:text-base transition-all duration-300 text-center">
              Book Online
            </Link>
            <Link href="/emergency-tyre-repair-wakefield" className="w-full sm:w-auto text-accent font-bold px-6 py-3 text-sm md:text-base transition-all duration-300 text-center hover:underline underline-offset-4">
              Emergency? Get Help Now →
            </Link>
          </div>

          {/* Trust Strip */}
          <div className="mt-10 md:mt-14 flex flex-wrap items-center justify-center gap-4 md:gap-8 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            {trustStrip.map((t) => (
              <div key={t.label} className="flex items-center gap-2 text-text-muted text-sm">
                <span className="text-accent"><TrustIcon type={t.icon} /></span>
                <span>{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 2 — QUICK INTENT ROUTER ═══ */}
      <section className="py-10 md:py-20 relative z-20 bg-surface-dark border-t border-border/50">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-10 md:mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 md:mb-6 tracking-tight">What Do You Need?</h2>
            <p className="text-text-muted text-base md:text-xl font-medium max-w-2xl mx-auto">
              Choose your situation below and we&apos;ll route you to the right service.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {intentCards.map((c) => (
              <ServiceCard key={c.href} icon={c.icon} title={c.headline} description={c.desc} href={c.href} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 3 — PROBLEM CLUSTER ═══ */}
      <section className="py-10 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 md:mb-6 tracking-tight">Common Tyre Situations We Solve Every Day</h2>
            <p className="text-text-muted text-base md:text-lg font-medium max-w-2xl mx-auto">
              Whatever tyre issue you&apos;re facing, we have the right service path to get you back on the road safely.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problems.map((p) => (
              <div key={p.title} className="glass-panel rounded-2xl p-6 md:p-8 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-[40px] group-hover:bg-accent/10 transition-colors"></div>
                <h3 className="font-bold text-white text-xl mb-3">{p.title}</h3>
                <div className="space-y-3 text-sm leading-relaxed">
                  <p className="text-text-light"><span className="text-accent font-semibold">Situation:</span> {p.situation}</p>
                  <p className="text-text-muted"><span className="text-amber-400 font-semibold">Risk:</span> {p.risk}</p>
                  <p className="text-text-light"><span className="text-green-400 font-semibold">Right path:</span> {p.path}</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  {p.links.map((l) => (
                    <Link key={l.href} href={l.href} className="inline-flex items-center gap-1 text-accent text-sm font-bold hover:underline underline-offset-4">
                      {l.label} →
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 4 — CORE SERVICE SYSTEM ═══ */}
      <section className="py-10 md:py-20 bg-surface-dark border-t border-border/50">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-10 md:mb-16 md:flex md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4 md:mb-6 tracking-tight">Our Tyre Services</h2>
              <p className="text-text-muted text-base md:text-xl font-medium">
                From routine fitting to emergency roadside repairs, we deliver professional tyre care for every situation.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((s) => (
              <ServiceCard key={s.slug} icon={s.icon} title={s.name} description={s.shortDesc} href={`/${s.slug}`} />
            ))}
          </div>

          {/* Supporting services mention */}
          <div className="glass-panel rounded-2xl p-6 md:p-8">
            <h3 className="font-bold text-white text-lg mb-4">Additional Support</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-text-muted">
              <div>
                <span className="text-white font-semibold">Wheel Alignment</span>
                <p className="mt-1">Tracking adjustment for pulling, drift, or uneven wear after pothole impacts.</p>
              </div>
              <div>
                <span className="text-white font-semibold">Tyres by Registration</span>
                <p className="mt-1">Tell us your reg and we find the correct tyre specification instantly.</p>
              </div>
              <div>
                <span className="text-white font-semibold">Locking Wheel Nut Removal</span>
                <p className="mt-1">Lost your key? We remove locking nuts safely without wheel damage.</p>
              </div>
              <div>
                <span className="text-white font-semibold">TPMS Valve Service</span>
                <p className="mt-1">Valve replacement and sensor checks to keep your pressure monitoring accurate.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 5 — PROCESS CLUSTER ═══ */}
      <section className="py-10 md:py-20 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 md:mb-6 tracking-tight">How It Works</h2>
            <p className="text-text-muted text-base md:text-lg font-medium max-w-2xl mx-auto">
              From your first call to driving away — here&apos;s what to expect.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((s) => (
              <div key={s.step} className="glass-panel rounded-2xl p-6 md:p-8 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
                <div className="absolute top-4 right-4 text-5xl font-black text-white/5 group-hover:text-accent/10 transition-colors">{s.step}</div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-transparent flex items-center justify-center text-accent border border-accent/20 mb-5 group-hover:scale-110 transition-transform">
                  <span className="font-black text-sm">{s.step}</span>
                </div>
                <h3 className="font-bold text-white text-lg mb-2">{s.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/book" className="inline-flex items-center gap-3 bg-gradient-to-r from-accent to-accent-hover text-white font-bold px-8 py-4 rounded-2xl text-base transition-all duration-300 hover:shadow-[0_0_40px_rgba(227,30,36,0.5)] hover:-translate-y-1">
              Book Your Service
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 6 — TYRE CHOICE / DECISION SUPPORT ═══ */}
      <section className="py-10 md:py-20 bg-surface-dark border-t border-border/50">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 md:mb-6 tracking-tight">Choosing the Right Tyres</h2>
            <p className="text-text-muted text-base md:text-lg font-medium max-w-2xl mx-auto">
              Not sure what tyres you need? We help you choose the right fit for your vehicle, driving style, and budget.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Tyre Tiers */}
            <div className="glass-panel rounded-2xl p-6 md:p-8">
              <h3 className="font-bold text-white text-xl mb-6">Budget, Mid-Range & Premium</h3>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="w-2 rounded-full bg-green-500 shrink-0"></div>
                  <div>
                    <span className="text-white font-semibold block">Budget Tyres</span>
                    <p className="text-text-muted text-sm mt-1">Reliable, meets all legal requirements. Ideal for lower-mileage drivers and city driving. Best value per mile.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 rounded-full bg-amber-400 shrink-0"></div>
                  <div>
                    <span className="text-white font-semibold block">Mid-Range Tyres</span>
                    <p className="text-text-muted text-sm mt-1">Balanced performance and value. Good wet grip, reasonable wear life. Suitable for most everyday drivers.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 rounded-full bg-accent shrink-0"></div>
                  <div>
                    <span className="text-white font-semibold block">Premium Tyres</span>
                    <p className="text-text-muted text-sm mt-1">Top-tier wet grip, shorter braking distances, lower road noise, and longer wear. From leading manufacturers.</p>
                  </div>
                </div>
              </div>
              <Link href="/tyre-replacement-wakefield" className="inline-flex items-center gap-2 text-accent font-bold text-sm mt-6 hover:underline underline-offset-4">
                View Tyre Replacement Service →
              </Link>
            </div>

            {/* Fitment & Labels */}
            <div className="space-y-6">
              <div className="glass-panel rounded-2xl p-6 md:p-8">
                <h3 className="font-bold text-white text-xl mb-4">Tyres by Registration or Size</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  Tell us your vehicle registration and we look up the correct tyre specifications — size, load index, and speed rating — instantly. If you know your tyre size (printed on the sidewall, e.g. 205/55 R16 91V), call or book with that and we&apos;ll match it directly.
                </p>
              </div>

              <div className="glass-panel rounded-2xl p-6 md:p-8">
                <h3 className="font-bold text-white text-xl mb-4">Vehicle-Specific Fitment</h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2 text-text-light"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Car Tyres</div>
                  <div className="flex items-center gap-2 text-text-light"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Van Tyres</div>
                  <div className="flex items-center gap-2 text-text-light"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> 4x4 Tyres</div>
                  <div className="flex items-center gap-2 text-text-light"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> EV Tyres</div>
                  <div className="flex items-center gap-2 text-text-light"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Run-Flat Tyres</div>
                  <div className="flex items-center gap-2 text-text-light"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> All-Season Tyres</div>
                </div>
              </div>

              <div className="glass-panel rounded-2xl p-6 md:p-8">
                <h3 className="font-bold text-white text-xl mb-4">Understanding Tyre Labels</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  EU tyre labels rate every tyre on three criteria: <span className="text-white font-semibold">wet grip</span> (A–E), <span className="text-white font-semibold">rolling resistance</span> (A–E, affects fuel economy), and <span className="text-white font-semibold">external noise</span> (measured in dB). We help you understand what these mean for your safety and running costs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 7 — SAME-DAY VS MOBILE VS EMERGENCY ═══ */}
      <section className="py-10 md:py-20 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 md:mb-6 tracking-tight">Same-Day, Mobile & Emergency — What&apos;s the Difference?</h2>
            <p className="text-text-muted text-base md:text-lg font-medium max-w-2xl mx-auto">
              Three different services for three different situations. Here&apos;s how to choose the right one.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Same-Day */}
            <div className="glass-panel rounded-2xl p-6 md:p-8 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/10 rounded-full blur-[30px] group-hover:bg-green-500/20 transition-colors"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 mb-4"></div>
              <h3 className="font-bold text-white text-xl mb-4">Same-Day Tyre Fitting</h3>
              <ul className="space-y-2 text-sm text-text-muted">
                <li><span className="text-white font-semibold">Who:</span> Drivers who need tyres today and can visit us</li>
                <li><span className="text-white font-semibold">Where:</span> Our Wakefield workshop</li>
                <li><span className="text-white font-semibold">Solves:</span> Time pressure, urgent replacement needs</li>
                <li><span className="text-white font-semibold">Expect:</span> Call, visit, fitted while you wait</li>
              </ul>
              <Link href="/tyre-fitting-wakefield" className="inline-flex items-center gap-2 text-accent font-bold text-sm mt-5 hover:underline underline-offset-4">
                Learn More →
              </Link>
            </div>
            {/* Mobile */}
            <div className="glass-panel rounded-2xl p-6 md:p-8 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-[30px] group-hover:bg-blue-500/20 transition-colors"></div>
              <div className="w-3 h-3 rounded-full bg-blue-500 mb-4"></div>
              <h3 className="font-bold text-white text-xl mb-4">Mobile Tyre Fitting</h3>
              <ul className="space-y-2 text-sm text-text-muted">
                <li><span className="text-white font-semibold">Who:</span> Drivers who can&apos;t get to us or prefer home/work fitting</li>
                <li><span className="text-white font-semibold">Where:</span> Your home, workplace, or chosen location</li>
                <li><span className="text-white font-semibold">Solves:</span> Convenience, non-driveable vehicles</li>
                <li><span className="text-white font-semibold">Expect:</span> Scheduled or urgent van dispatch</li>
              </ul>
              <Link href="/mobile-tyre-fitting-wakefield" className="inline-flex items-center gap-2 text-accent font-bold text-sm mt-5 hover:underline underline-offset-4">
                Learn More →
              </Link>
            </div>
            {/* Emergency */}
            <div className="glass-panel rounded-2xl p-6 md:p-8 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 border border-accent/20">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-full blur-[30px] group-hover:bg-accent/20 transition-colors"></div>
              <div className="w-3 h-3 rounded-full bg-accent mb-4 animate-pulse"></div>
              <h3 className="font-bold text-white text-xl mb-4">Emergency Tyre Repair</h3>
              <ul className="space-y-2 text-sm text-text-muted">
                <li><span className="text-white font-semibold">Who:</span> Stranded drivers with urgent tyre failure</li>
                <li><span className="text-white font-semibold">Where:</span> Your location — roadside, car park, driveway</li>
                <li><span className="text-white font-semibold">Solves:</span> Breakdowns, blowouts, sudden flats</li>
                <li><span className="text-white font-semibold">Expect:</span> Urgent dispatch, on-site repair or replace</li>
              </ul>
              <Link href="/emergency-tyre-repair-wakefield" className="inline-flex items-center gap-2 text-accent font-bold text-sm mt-5 hover:underline underline-offset-4">
                Get Emergency Help →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 8 — REPAIR / REPLACEMENT / BALANCING / ALIGNMENT ═══ */}
      <section className="py-10 md:py-20 bg-surface-dark border-t border-border/50">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 md:mb-6 tracking-tight">Repair, Replace, Balance or Align?</h2>
            <p className="text-text-muted text-base md:text-lg font-medium max-w-2xl mx-auto">
              Understanding the difference helps you choose the right service and avoid unnecessary costs.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="glass-panel rounded-2xl p-6 md:p-8">
              <h3 className="font-bold text-white text-xl mb-4">Puncture Repair vs Tyre Replacement</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-3">
                A puncture can be safely repaired to <span className="text-white font-semibold">BS AU 159 standard</span> if the damage is within the central tread band and the penetrating object is within the safe size range.
              </p>
              <p className="text-text-muted text-sm leading-relaxed mb-3">
                <span className="text-amber-400 font-semibold">Sidewall damage</span>, shoulder punctures, and run-flat tyres generally cannot be safely repaired — replacement is the only safe option.
              </p>
              <p className="text-text-muted text-sm leading-relaxed">
                We assess every puncture before recommending repair or replacement. We never repair a tyre that isn&apos;t safe to repair.
              </p>
              <div className="mt-4 flex gap-4">
                <Link href="/puncture-repair-wakefield" className="text-accent text-sm font-bold hover:underline underline-offset-4">Puncture Repair →</Link>
                <Link href="/tyre-replacement-wakefield" className="text-accent text-sm font-bold hover:underline underline-offset-4">Tyre Replacement →</Link>
              </div>
            </div>
            <div className="glass-panel rounded-2xl p-6 md:p-8">
              <h3 className="font-bold text-white text-xl mb-4">Wheel Balancing vs Wheel Alignment</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-3">
                <span className="text-white font-semibold">Wheel balancing</span> corrects weight imbalances in the tyre-wheel assembly. Symptoms include steering vibration, especially at speed.
              </p>
              <p className="text-text-muted text-sm leading-relaxed mb-3">
                <span className="text-white font-semibold">Wheel alignment (tracking)</span> adjusts the angles at which wheels point. Symptoms include the car pulling to one side and uneven tyre wear.
              </p>
              <p className="text-text-muted text-sm leading-relaxed">
                After hitting a pothole, check balancing first. If pulling or uneven wear persists, alignment may be needed.
              </p>
              <Link href="/wheel-balancing-wakefield" className="inline-flex items-center gap-2 text-accent text-sm font-bold mt-4 hover:underline underline-offset-4">Wheel Balancing →</Link>
            </div>
            <div className="glass-panel rounded-2xl p-6 md:p-8">
              <h3 className="font-bold text-white text-xl mb-4">Legal Tread Depth</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-3">
                The UK legal minimum is <span className="text-white font-semibold">1.6mm</span> across the central three-quarters of the tread width, around the entire circumference.
              </p>
              <p className="text-text-muted text-sm leading-relaxed mb-3">
                Driving below this limit is illegal: up to <span className="text-amber-400 font-semibold">£2,500 fine and 3 penalty points per tyre</span>. Braking distances on a wet road can be double that of a new tyre.
              </p>
              <Link href="/tyre-replacement-wakefield" className="text-accent text-sm font-bold hover:underline underline-offset-4">Book a Replacement →</Link>
            </div>
            <div className="glass-panel rounded-2xl p-6 md:p-8">
              <h3 className="font-bold text-white text-xl mb-4">Locking Wheel Nuts & TPMS</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-3">
                If your <span className="text-white font-semibold">locking wheel nut key</span> is missing, lost, or damaged, we can remove the locking nuts safely without wheel damage so tyre work can proceed.
              </p>
              <p className="text-text-muted text-sm leading-relaxed">
                <span className="text-white font-semibold">TPMS sensors and valves</span> may need replacing when fitting new tyres. A faulty valve can trigger false dashboard warnings or fail to alert you to real pressure loss.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 9 — PROOF / TRUST SYSTEM ═══ */}
      <section className="py-10 md:py-20 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          {/* Layer 1 — Operational Proof */}
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 md:mb-6 tracking-tight">Why Wakefield Drivers Choose Us</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              { title: "Local Wakefield Workshop", desc: "Cinema House, 160 Doncaster Rd, Belle Vue, WF1 5HL. Multiple bays, large stock, state-of-the-art lifts." },
              { title: "Same-Day Availability", desc: "Most services available same-day. Call early for today's availability or book a time that suits you." },
              { title: "No Hidden Fees", desc: "The price we quote is the price you pay. Upfront quotes before any work begins. No surprise charges." },
              { title: "Mobile Fleet Coverage", desc: "Fully equipped vans covering Wakefield and surrounding West Yorkshire. Home, work, or roadside." },
              { title: "BS AU 159 Repairs", desc: "Every puncture repair assessed and completed to British Standard. If it's not safe to repair, we tell you." },
              { title: "Transparent Pricing", desc: "Budget, mid-range, and premium tyre options. We explain the differences so you choose what's right." },
            ].map((p) => (
              <div key={p.title} className="glass-panel rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-[30px] group-hover:bg-accent/10 transition-colors"></div>
                <h3 className="font-bold text-white text-lg mb-2">{p.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Layer 2 — Testimonials */}
          <div className="mb-16">
            <div className="mb-10 flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white font-bold px-5 py-2.5 rounded-full text-sm mb-6 shadow-lg backdrop-blur-md">
                <svg className="w-5 h-5 text-amber-400 drop-shadow-[0_0_5px_rgba(251,191,36,0.8)]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                What Our Customers Say
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">Driver Approved.</h2>
            </div>
            <TestimonialSlider testimonials={testimonials} />
          </div>
        </div>
      </section>

      {/* ═══ SECTION 10 — WORKSHOP + CAPABILITY ═══ */}
      <section className="py-10 md:py-20 bg-surface-dark border-t border-border/50">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 md:mb-6 tracking-tight">Our Workshop & Mobile Capability</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            {/* Workshop */}
            <div className="glass-panel rounded-2xl p-6 md:p-8">
              <h3 className="font-bold text-white text-xl mb-4">Wakefield Workshop</h3>
              <ul className="space-y-3 text-sm text-text-muted">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></span> Cinema House, 160 Doncaster Road, Belle Vue, Wakefield WF1 5HL</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></span> Multiple fitting bays with state-of-the-art lifts</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></span> Large tyre stock — budget, mid-range, and premium</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></span> Mon–Sat 9am–6pm, Sunday 9am–5pm</li>
              </ul>
              <Link href="/contact" className="inline-flex items-center gap-2 text-accent font-bold text-sm mt-5 hover:underline underline-offset-4">
                Get Directions →
              </Link>
            </div>
            {/* Mobile */}
            <div className="glass-panel rounded-2xl p-6 md:p-8">
              <h3 className="font-bold text-white text-xl mb-4">Mobile Fleet</h3>
              <ul className="space-y-3 text-sm text-text-muted">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></span> Fully equipped mobile fitting vans</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></span> Covering Wakefield and the wider West Yorkshire region</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></span> Home, workplace, and roadside attendance</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></span> 24/7 emergency call-out availability</li>
              </ul>
              <Link href="/mobile-tyre-fitting-wakefield" className="inline-flex items-center gap-2 text-accent font-bold text-sm mt-5 hover:underline underline-offset-4">
                Mobile Fitting Service →
              </Link>
            </div>
          </div>
          {/* Workshop gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl overflow-hidden glass-panel border border-accent/20 group aspect-video">
              <img src="/images/gallery/shop-1.jpg" alt="One Stop Tyres Wakefield workshop exterior on Doncaster Road" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="rounded-2xl overflow-hidden glass-panel border border-accent/20 group aspect-video">
              <img src="/images/gallery/shop-2.jpg" alt="Inside the fully equipped tyre fitting workshop with lifts and bays" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="rounded-2xl overflow-hidden glass-panel border border-accent/20 group aspect-video">
              <img src="/images/gallery/shop-3.jpg" alt="Multiple tyre fitting bays at One Stop Tyres Wakefield" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 11 — LOCAL COVERAGE SUMMARY ═══ */}
      <section className="py-10 md:py-20 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 md:mb-6 tracking-tight">Covering Wakefield & West Yorkshire</h2>
            <p className="text-text-muted text-base md:text-lg font-medium max-w-3xl">
              Based in Wakefield, we serve drivers across the city and surrounding areas — from our workshop or direct to your location.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-panel rounded-2xl p-6 md:p-8">
              <h3 className="font-bold text-white text-lg mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent"></span> Wakefield & Nearby
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Wakefield city centre, WF1–WF6 postcodes, Ossett, Horbury, Stanley, Sandal, Normanton, Outwood, and Lofthouse. Near Pinderfields Hospital, Trinity Walk, and Calder Park.
              </p>
            </div>
            <div className="glass-panel rounded-2xl p-6 md:p-8">
              <h3 className="font-bold text-white text-lg mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent"></span> Surrounding Towns
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Leeds, Dewsbury, Castleford, Pontefract, Batley, Morley, Rothwell, Garforth, and many more. Our mobile fleet reaches across the region.
              </p>
            </div>
            <div className="glass-panel rounded-2xl p-6 md:p-8">
              <h3 className="font-bold text-white text-lg mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent"></span> Major Routes
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Accessible from M1 (J39, J40, J41), M62 (J29, J30, J31), A61, A638, A642, and A650. Broken down near a junction? Call us for emergency attendance.
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link href="/areas" className="inline-flex items-center gap-2 text-white font-bold hover:text-accent transition-colors group">
              View All Service Areas
              <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 12 — FEATURED AREA PAGES ═══ */}
      <section className="py-10 md:py-20 bg-surface-dark border-t border-border/50">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 md:mb-6 tracking-tight">Tyre Services Near You</h2>
            <p className="text-text-muted text-base md:text-lg font-medium max-w-2xl mx-auto">
              We cover over 150 locations across West Yorkshire. Here are some of our most popular service areas.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Wakefield HQ */}
            <Link href="/contact" className="glass-panel group relative overflow-hidden rounded-2xl p-6 border-accent/30 bg-accent/10 hover:bg-accent/20 transition-colors">
              <div className="relative z-10">
                <span className="block font-black text-white text-xl group-hover:text-accent transition-colors">Wakefield</span>
                <span className="text-accent text-xs font-bold uppercase tracking-widest mt-1 block">HQ</span>
              </div>
            </Link>
            {/* Featured areas */}
            {featuredAreas.map((a) => (
              <Link key={a.slug} href={`/areas/${a.slug}`} className="glass-panel group relative overflow-hidden rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative z-10 block font-bold text-text-light group-hover:text-white transition-colors">{a.name}</span>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/areas" className="inline-flex items-center gap-2 glass-panel glass-panel-hover text-white font-bold px-6 py-3 rounded-xl text-sm transition-all duration-300">
              View All 150+ Service Areas
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 13 — FAQ CLUSTER ═══ */}
      <section className="py-10 md:py-20 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 md:mb-6 tracking-tight">Frequently Asked Questions</h2>
            <p className="text-text-muted text-base md:text-lg font-medium max-w-2xl mx-auto">
              Quick answers to the questions Wakefield drivers ask us most.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {faqs.map((f, i) => (
              <details key={i} className="glass-panel rounded-2xl overflow-hidden group">
                <summary className="cursor-pointer p-5 md:p-6 font-bold text-white text-sm md:text-base flex items-start justify-between gap-4 hover:text-accent transition-colors list-none [&::-webkit-details-marker]:hidden">
                  <span>{f.q}</span>
                  <svg className="w-5 h-5 text-accent shrink-0 transform group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 md:px-6 pb-5 md:pb-6 text-text-muted text-sm leading-relaxed border-t border-border/50 pt-4">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 14 — FINAL CTA / CONTACT CLOSURE ═══ */}
      <CTABlock
        heading="Ready to Get Moving?"
        subtext="Whether it's a routine fitting, a mobile appointment, or an emergency call-out — we're here. Based in Wakefield. Covering West Yorkshire. Same-day availability. No hidden fees."
      />
    </div>
  );
}

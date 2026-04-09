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
  { label: "Upfront Pricing", icon: "shield" },
  { label: "Local Wakefield Team", icon: "pin" },
  { label: "Rated by Local Drivers", icon: "star" },
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
  { step: "02", title: "We Find the Right Path", desc: "We route you to the right service: workshop fitting, mobile attendance, emergency call-out, or puncture assessment." },
  { step: "03", title: "Confirm Your Tyres", desc: "We identify the correct fitment by registration or size, confirm load index and speed rating, and present budget, mid-range, or premium options." },
  { step: "04", title: "Book or Dispatch", desc: "For planned fitting, choose a time that works. For mobile or emergency needs, we dispatch to your location." },
  { step: "05", title: "Fit, Repair, or Replace", desc: "Our technicians complete the job - fitting, repairing, replacing, and balancing - with professional equipment." },
  { step: "06", title: "Safety Check & Go", desc: "Every job includes a final pressure check and visual inspection before you drive away." },
];

/* ─── FAQ DATA ─── */
const faqs = [
  { q: "Can you fit tyres the same day in Wakefield, and does availability depend on tyre size or time of day?", a: "Yes, we offer same-day tyre fitting at our Wakefield workshop and via our mobile fleet. Availability depends on stock for your specific tyre size and the time you call — we recommend calling early for the best chance of a same-day slot." },
  { q: "Do you offer mobile tyre fitting in Wakefield at home or work, and does access or parking affect availability?", a: "Yes, our mobile tyre fitting service comes to you at home, work, or any accessible location. As long as our van can safely park near your vehicle with enough space to work securely, we can fit your tyres on-site." },
  { q: "How does your emergency tyre repair service work in Wakefield, and does it cover the M1 and M62?", a: "If you have a blowout or sudden flat, call us immediately. We dispatch a fully equipped van to your location, including the hard shoulders of the M1 (J39-J41) and M62 (J29-J31), prioritising urgent attendance to get you to safety." },
  { q: "Can a puncture be repaired or does it always need replacing, and how do you decide which is safe?", a: "A puncture can often be repaired to BS AU 159 standards if it's within the central tread band and meets safety criteria. However, sidewall damage, shoulder punctures, or damage to run-flat tyres cannot be repaired safely, meaning a replacement is required. We assess every tyre first." },
  { q: "Is wheel balancing included when you fit new tyres, or is it a separate service?", a: "Digital wheel balancing is fully included with every new tyre we supply and fit. If you need balancing as a standalone service (for instance, to cure a vibration on existing tyres), we offer that too." },
  { q: "What is the difference between wheel balancing and wheel alignment, and which do I need after a pothole?", a: "Wheel balancing ensures weight is evenly distributed around the wheel, preventing vibration at speed. Wheel alignment corrects the angle of the wheels, preventing pulling and uneven tyre wear. After hitting a pothole, check balancing first; if the car pulls to one side, you may need alignment." },
  { q: "How do I find the right tyre size for my car - can you look it up by registration?", a: "Yes, simply give us your vehicle registration number and our system instantly finds the correct tyre size, load index, and speed rating for your exact model. You can also find your size stamped on the sidewall of your current tyres." },
  { q: "What is the legal minimum tyre tread depth in the UK, and what happens if I'm caught below it?", a: "The legal minimum tread depth is 1.6mm across the central three-quarters of the tyre. Driving on unroadworthy tyres below this limit drastically increases braking distance and risks a £2,500 fine plus 3 penalty points per tyre." },
  { q: "Do you fit van tyres in Wakefield, and does load index affect which tyre I need?", a: "Yes, we regularly supply and fit van and light commercial tyres. The load index is critical for vans, as fitting a tyre that cannot support the vehicle's laden weight is illegal and highly dangerous." },
  { q: "Can you fit tyres for electric vehicles, and are EV tyres different from standard car tyres?", a: "Yes, we fit tyres for electric vehicles. EV-specific tyres are designed to handle the heavier weight of battery packs and the instant torque of electric motors, whilst offering lower rolling resistance to maximise battery range." },
  { q: "What's the difference between budget, mid-range, and premium tyres for everyday driving?", a: "Budget tyres are a cost-effective, legal option for lower-mileage or city driving. Mid-range tyres offer a solid balance of wear life and wet grip. Premium tyres use advanced compounds for the shortest braking distances, lowest road noise, and highest durability." },
  { q: "Do you cover all WF1 to WF6 postcodes in Wakefield for mobile and emergency services?", a: "Yes, our mobile tyre fitters cover the entire Wakefield immediate area, across all WF1, WF2, WF3, WF4, WF5, and WF6 postcodes, expanding outwards across West Yorkshire." },
  { q: "Can you remove a locking wheel nut if the key is missing, lost, or broken?", a: "Yes. If your locking wheel nut key is missing, damaged, or broken, we carry specialist removal equipment to safely extract the locking nut without damaging your alloys, allowing the tyre replacement to go ahead." },
  { q: "What's the difference between mobile tyre fitting and emergency tyre repair - when should I call which?", a: "Mobile tyre fitting is for scheduled convenience. We come replacing worn-out tyres at a time that suits you. Emergency tyre repair is a rapid-response service for when you are unexpectedly stranded by a blowout or flat tyre and need immediate help." },
  { q: "Do you service TPMS valves when fitting new tyres, and can a faulty TPMS cause wrong pressure readings?", a: "We can inspect your Tyre Pressure Monitoring System (TPMS) during fitting. A faulty or damaged TPMS sensor can cause dashboard warning lights, give inaccurate readings, and even slowly leak air." },
  { q: "How much does tyre fitting cost in Wakefield, and do you provide upfront quotes before any work?", a: "The total cost depends on your tyre size and whether you choose budget, mid-range, or premium. We believe in upfront pricing. The quote we give you includes the tyre, fitting, new valve, balancing, and old tyre disposal. [VERIFY IF TRUE]" },
  { q: "Do you offer wheel alignment (tracking) in Wakefield, or is it only available alongside other services?", a: "We provide wheel alignment check assessments alongside tyre replacements if uneven wear indicates a tracking issue. This is an additional supporting service to ensure your new tyres don't wear out prematurely." }
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
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "One Stop Tyres Wakefield - Tyre Fitting, Mobile Service & Emergency Repair" }],
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
      <section className="relative min-h-[90vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden pt-28 md:pt-20 pb-12 md:pb-16">
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
            Emergency Callouts Available
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-6 md:mb-8 tracking-tighter drop-shadow-2xl animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Tyre Fitting, Mobile Service{" "}
            <br className="hidden md:block" />
            <span className="text-gradient-accent">& Emergency Repair in Wakefield</span>
          </h1>

          <p className="text-text-light text-base md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto font-medium leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Same-day tyre fitting at our Doncaster Road workshop. Mobile fitting at your home, work, or roadside. Emergency repair for breakdowns. Budget to premium tyres supplied and fitted across Wakefield and West Yorkshire.
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
              If you already know what you need, start here. Choose your situation and we'll point you to the right service.
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
              Not sure which situation fits yours? These are the tyre problems Wakefield drivers face most, and the right path for each.
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
          <div className="mb-10 md:mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 md:mb-6 tracking-tight">Our Tyre Services</h2>
            <p className="text-text-muted text-base md:text-xl font-medium max-w-3xl">
              Each of these situations maps to one of our core services. Here's the full list of what we provide across Wakefield and West Yorkshire. Each service has a dedicated page with full details, pricing guidance, and booking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {services.map((s) => (
              <Link key={s.slug} href={`/${s.slug}`} className="glass-panel glass-panel-hover rounded-xl p-5 flex items-center justify-between group">
                <div>
                  <h3 className="font-bold text-white text-lg group-hover:text-accent transition-colors">{s.name}</h3>
                  <p className="text-text-muted text-sm mt-1">{s.shortDesc}</p>
                </div>
                <svg className="w-5 h-5 text-accent transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>

          {/* Supporting services mention */}
          <div className="glass-panel rounded-2xl p-6 md:p-8 border border-white/5 bg-white/[0.02]">
            <h3 className="font-bold text-white text-lg mb-4">Additional Supporting Services</h3>
            <p className="text-text-muted text-sm mb-6 max-w-3xl">
              We also support wheel alignment checks, locking wheel nut removal, and TPMS valve servicing as part of broader tyre work. These are not standalone bookable services but are available alongside fitting, replacement, or repair.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-text-muted">
              <div>
                <span className="text-white font-semibold flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Wheel Alignment</span>
                <p className="mt-1 pl-3.5">Tracking adjustment for pulling, drift, or uneven wear after pothole impacts.</p>
              </div>
              <div>
                <span className="text-white font-semibold flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Tyres by Registration</span>
                <p className="mt-1 pl-3.5">Tell us your reg and we find the correct tyre specification instantly.</p>
              </div>
              <div>
                <span className="text-white font-semibold flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Locking Wheel Nut Removal</span>
                <p className="mt-1 pl-3.5">Lost your key? We remove locking nuts safely without wheel damage.</p>
              </div>
              <div>
                <span className="text-white font-semibold flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> TPMS Valve Service</span>
                <p className="mt-1 pl-3.5">Valve replacement and sensor checks to keep your pressure monitoring accurate.</p>
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
              You've seen what we offer. Here's exactly how it works from the moment you contact us.
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
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 md:mb-6 tracking-tight">Choosing the Right Tyres for Your Vehicle</h2>
            <p className="text-text-muted text-base md:text-lg font-medium max-w-2xl mx-auto">
              Before we fit your tyres, we make sure you're getting the right ones. Here's how to choose the right tier and type for your vehicle, your driving, and your budget.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Find Your Tyres */}
            <div className="glass-panel rounded-2xl p-6 md:p-8">
              <h3 className="font-bold text-white text-xl mb-4">Find Your Tyres by Registration or Size</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-4">
                Tell us your vehicle registration and we look up the correct tyre specifications (size, load index, and speed rating) instantly. Alternatively, if you know your tyre size (printed on the sidewall, e.g. 205/55 R16 91V), call or book with that and we'll match it directly.
              </p>
              <p className="text-text-muted text-sm leading-relaxed">
                Getting the correct fitment matters for your safety, vehicle legality, and manufacturer warranty. We make sure it's 100% correct before any tyre goes on your car.
              </p>
            </div>

            {/* Understanding Specs */}
            <div className="glass-panel rounded-2xl p-6 md:p-8">
              <h3 className="font-bold text-white text-xl mb-4">Understanding Load Index, Speed Rating & Tyre Labels</h3>
              <div className="space-y-4">
                <p className="text-text-muted text-sm leading-relaxed">
                  <span className="text-white font-semibold">Load Index & Speed Rating:</span> It's vital we match or exceed your vehicle manufacturer's original specifications. This is especially critical for vans and heavily loaded vehicles where an insufficient load index is dangerous and illegal.
                </p>
                <p className="text-text-muted text-sm leading-relaxed">
                  <span className="text-white font-semibold">EU Tyre Labels:</span> Every tyre we sell is rated on <span className="text-white font-semibold">wet grip</span> (A–E for braking safety), <span className="text-white font-semibold">rolling resistance</span> (A–E, affects fuel economy/range), and <span className="text-white font-semibold">external noise</span> (dB). We explain these so you know what you are buying.
                </p>
              </div>
            </div>

            {/* Tyre Tiers */}
            <div className="glass-panel rounded-2xl p-6 md:p-8">
              <h3 className="font-bold text-white text-xl mb-6">Budget, Mid-Range & Premium - What's the Difference?</h3>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="w-2 rounded-full bg-green-500 shrink-0 mt-1.5"></div>
                  <div>
                    <span className="text-white font-semibold block">Budget Tyres</span>
                    <p className="text-text-muted text-sm mt-1">Reliable, meets all legal requirements. Ideal for lower-mileage drivers and city driving. Best value per mile.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 rounded-full bg-amber-400 shrink-0 mt-1.5"></div>
                  <div>
                    <span className="text-white font-semibold block">Mid-Range Tyres</span>
                    <p className="text-text-muted text-sm mt-1">Balanced performance and value. Good wet grip, reasonable wear life. Suitable for most everyday drivers.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 rounded-full bg-accent shrink-0 mt-1.5"></div>
                  <div>
                    <span className="text-white font-semibold block">Premium Tyres</span>
                    <p className="text-text-muted text-sm mt-1">Top-tier wet grip, shortest braking distances, lowest road noise, and longest wear. Perfect for high-mileage drivers.</p>
                  </div>
                </div>
              </div>
              <Link href="/tyre-replacement-wakefield" className="inline-flex items-center gap-2 text-accent font-bold text-sm mt-6 hover:underline underline-offset-4">
                View Tyre Replacement Service →
              </Link>
            </div>

            {/* Vehicle-Specific Fitment */}
            <div className="glass-panel rounded-2xl p-6 md:p-8">
              <h3 className="font-bold text-white text-xl mb-4">Tyres for Cars, Vans, 4x4s & Electric Vehicles</h3>
              <div className="space-y-4">
                <p className="text-text-muted text-sm leading-relaxed">
                  We supply and fit standard <span className="text-white">car tyres</span>, reinforced <span className="text-white">van tyres</span> (with proper commercial load indexes), and rugged <span className="text-white">4x4 tyres</span>. 
                </p>
                <p className="text-text-muted text-sm leading-relaxed">
                  We can also fit specific <span className="text-white">EV tyres</span> designed for the increased weight and instant torque of electric vehicles, offering lower rolling resistance to maximise battery range. 
                </p>
                <p className="text-text-muted text-sm leading-relaxed">
                  If your vehicle requires <span className="text-white">run-flat tyres</span>, we supply and safely fit them. We also offer seasonal options including <span className="text-white">summer, winter, and all-season tyres</span>.
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
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 md:mb-6 tracking-tight">Same-Day, Mobile or Emergency - Which Do You Need?</h2>
            <p className="text-text-muted text-base md:text-lg font-medium max-w-2xl mx-auto">
              Once you know what tyres you need, the next decision is how you'd like them fitted. We offer three routes, each designed for a different level of urgency and location.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Same-Day */}
            <div className="glass-panel rounded-2xl p-6 md:p-8 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/10 rounded-full blur-[30px] group-hover:bg-green-500/20 transition-colors"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 mb-4"></div>
              <h3 className="font-bold text-white text-xl mb-4">Same-Day Workshop Fitting</h3>
              <p className="text-text-muted text-sm mb-4">Come to our Wakefield workshop today for a quick turnaround while you wait.</p>
              <ul className="space-y-2 text-sm text-text-muted">
                <li className="flex gap-2"><span className="text-white font-semibold">Best for:</span> Quick replacement without waiting for delivery</li>
                <li className="flex gap-2"><span className="text-white font-semibold">Location:</span> Our Doncaster Road workshop</li>
              </ul>
              <Link href="/tyre-fitting-wakefield" className="inline-flex items-center gap-2 text-accent font-bold text-sm mt-5 hover:underline underline-offset-4">
                Workshop Fitting →
              </Link>
            </div>
            {/* Mobile */}
            <div className="glass-panel rounded-2xl p-6 md:p-8 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-[30px] group-hover:bg-blue-500/20 transition-colors"></div>
              <div className="w-3 h-3 rounded-full bg-blue-500 mb-4"></div>
              <h3 className="font-bold text-white text-xl mb-4">Mobile Tyre Fitting</h3>
              <p className="text-text-muted text-sm mb-4">We come to your home, workplace, or chosen location. Scheduled or on-demand.</p>
              <ul className="space-y-2 text-sm text-text-muted">
                <li className="flex gap-2"><span className="text-white font-semibold">Best for:</span> Convenience, or if your car isn't driveable</li>
                <li className="flex gap-2"><span className="text-white font-semibold">Location:</span> Anywhere across West Yorkshire</li>
              </ul>
              <Link href="/mobile-tyre-fitting-wakefield" className="inline-flex items-center gap-2 text-accent font-bold text-sm mt-5 hover:underline underline-offset-4">
                Mobile Fitting →
              </Link>
            </div>
            {/* Emergency */}
            <div className="glass-panel rounded-2xl p-6 md:p-8 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 border border-accent/20">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-full blur-[30px] group-hover:bg-accent/20 transition-colors"></div>
              <div className="w-3 h-3 rounded-full bg-accent mb-4 animate-pulse"></div>
              <h3 className="font-bold text-white text-xl mb-4">Emergency Tyre Repair</h3>
              <p className="text-text-muted text-sm mb-4">Urgent dispatch for breakdowns, blowouts, and stranded vehicles requiring immediate priority attendance.</p>
              <ul className="space-y-2 text-sm text-text-muted">
                <li className="flex gap-2"><span className="text-white font-semibold">Best for:</span> Roadside emergencies, sudden flat tyres</li>
                <li className="flex gap-2"><span className="text-white font-semibold">Location:</span> Roadside, motorways, car parks</li>
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
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 md:mb-6 tracking-tight">Repair, Replace, Balance or Align - Understanding the Difference</h2>
            <p className="text-text-muted text-base md:text-lg font-medium max-w-2xl mx-auto">
              Some tyre issues overlap. This section clarifies the most common diagnostic questions so you can understand what's happening with your tyres before you call.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="glass-panel rounded-2xl p-6 md:p-8">
              <h3 className="font-bold text-white text-xl mb-4">Puncture Repair vs Tyre Replacement</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-3">
                A puncture can be safely repaired to <span className="text-white font-semibold">BS AU 159 standard</span> if the damage is within the central tread band and the penetrating object is small enough.
              </p>
              <p className="text-text-muted text-sm leading-relaxed mb-3">
                <span className="text-amber-400 font-semibold">Sidewall damage</span>, shoulder punctures, and damage to run-flat tyres generally cannot be safely repaired. A full replacement is required.
              </p>
              <p className="text-text-muted text-sm leading-relaxed">
                We assess every puncture. We never repair a tyre that isn't safe to repair.
              </p>
              <div className="mt-4 flex gap-4">
                <Link href="/puncture-repair-wakefield" className="text-accent text-sm font-bold hover:underline underline-offset-4">Puncture Repair →</Link>
                <Link href="/tyre-replacement-wakefield" className="text-accent text-sm font-bold hover:underline underline-offset-4">Tyre Replacement →</Link>
              </div>
            </div>
            
            <div className="glass-panel rounded-2xl p-6 md:p-8">
              <h3 className="font-bold text-white text-xl mb-4">Wheel Balancing vs Wheel Alignment</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-3">
                <span className="text-white font-semibold">Wheel balancing</span> corrects weight distribution in the tyre-wheel assembly. Symptoms include steering vibration, especially at speed.
              </p>
              <p className="text-text-muted text-sm leading-relaxed mb-3">
                <span className="text-white font-semibold">Wheel alignment (tracking)</span> adjusts the angles at which wheels point. Symptoms include the car pulling to one side and uneven tyre wear.
              </p>
              <p className="text-text-muted text-sm leading-relaxed">
                After hitting a pothole, start with wheel balancing. If pulling persists, alignment may be needed (available alongside fitting).
              </p>
              <Link href="/wheel-balancing-wakefield" className="inline-flex items-center gap-2 text-accent text-sm font-bold mt-4 hover:underline underline-offset-4">Wheel Balancing →</Link>
            </div>
            
            <div className="glass-panel rounded-2xl p-6 md:p-8">
              <h3 className="font-bold text-white text-xl mb-4">Legal Tread Depth & Safety</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-3">
                The UK legal minimum is <span className="text-white font-semibold">1.6mm</span> across the central three-quarters of the tread width, around the entire circumference.
              </p>
              <p className="text-text-muted text-sm leading-relaxed mb-3">
                Driving below this limit is illegal: up to <span className="text-amber-400 font-semibold">£2,500 fine and 3 penalty points per tyre</span>. Braking distances on a wet road can be drastically worse holding less grip.
              </p>
              <Link href="/tyre-replacement-wakefield" className="text-accent text-sm font-bold hover:underline underline-offset-4">Book a Replacement →</Link>
            </div>
            
            <div className="glass-panel rounded-2xl p-6 md:p-8">
              <h3 className="font-bold text-white text-xl mb-4">TPMS & Locking Wheel Nuts</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-3">
                <span className="text-white font-semibold">Locking wheel nuts:</span> If your key is missing or damaged, we provide a specialist removal service safely unlocking the wheel so tyre work can proceed.
              </p>
              <p className="text-text-muted text-sm leading-relaxed">
                <span className="text-white font-semibold">TPMS:</span> Tyre Pressure Monitoring System sensors and valves can be serviced when fitting new tyres. A faulty valve can trigger false dashboard warnings or miss a real puncture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 9 — PROOF / TRUST SYSTEM ═══ */}
      <section className="py-10 md:py-20 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          {/* Layer 1 - Operational Proof */}
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 md:mb-6 tracking-tight">Why Wakefield Drivers Choose Us</h2>
            <p className="text-text-muted text-base md:text-lg font-medium max-w-2xl mx-auto">
              Understanding services is one thing. Trusting who does the work is another. Here's what we stand behind, and the evidence that backs it.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              { title: "Local Workshop", desc: "Based at Cinema House, 160 Doncaster Rd, WF1 5HL. Real physical presence with multiple bays and high-end lifts." },
              { title: "Same-Day Availability", desc: "By keeping high stock levels locally, we get most standard tyres securely fitted the exact same day you call." },
              { title: "Upfront Pricing", desc: "The price we quote is the price you pay. Tyres, fitting, valves, and disposal are fully included in our quotes." },
              { title: "Mobile Fleet Coverage", desc: "We don't just act local. We have fully equipped vans actively stationed and patrolling across West Yorkshire." },
              { title: "BS AU 159 Repairs", desc: "Every puncture is assessed according to strict British Standards. We'd rather tell you it's unrepairable than compromise safety." },
              { title: "Experienced Fitters", desc: "Years of local service and thousands of successful fittings. See what your neighbours say below." },
            ].map((p) => (
              <div key={p.title} className="glass-panel rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-[30px] group-hover:bg-accent/10 transition-colors"></div>
                <h3 className="font-bold text-white text-lg mb-2">{p.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Layer 2 - Testimonials */}
          <div className="mb-16">
            <div className="mb-10 flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white font-bold px-5 py-2.5 rounded-full text-sm mb-6 shadow-lg backdrop-blur-md">
                <svg className="w-5 h-5 text-amber-400 drop-shadow-[0_0_5px_rgba(251,191,36,0.8)]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                What Our Customers Say
              </div>
              <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight">Driver Approved.</h3>
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
            <p className="text-text-muted text-base md:text-lg font-medium max-w-2xl mx-auto">
              Trust is built on what you can see. Here's our Wakefield workshop and the mobile fleet that covers the wider region.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            {/* Workshop */}
            <div className="glass-panel rounded-2xl p-6 md:p-8">
              <h3 className="font-bold text-white text-xl mb-4">Wakefield Workshop</h3>
              <ul className="space-y-3 text-sm text-text-muted">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></span> Cinema House, 160 Doncaster Road, Belle Vue, Wakefield WF1 5HL</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></span> Multiple fitting bays with professional lifts and balancing tech</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></span> Large tyre stock: budget, mid-range, and premium</li>
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
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></span> Fully equipped dedicated mobile fitting vans</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></span> Covering Wakefield and the wider West Yorkshire region</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></span> Home, workplace, and roadside attendance</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></span> Emergency call-out availability for stranded vehicles</li>
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
          <div className="mb-10 md:mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 md:mb-6 tracking-tight">Covering Wakefield & West Yorkshire</h2>
            <p className="text-text-muted text-base md:text-lg font-medium max-w-3xl mx-auto">
              Our workshop is in Wakefield. Our reach extends across West Yorkshire. Here's how our coverage breaks down by location and situation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Core */}
            <div className="glass-panel rounded-2xl p-6 lg:p-8 col-span-1 md:col-span-2 lg:col-span-1 border border-accent/20">
              <h3 className="font-bold text-white text-lg mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent"></span> Wakefield Core
              </h3>
              <p className="text-text-muted text-sm leading-relaxed mb-4">
                Wakefield city centre and all WF1–WF6 postcodes. Landmarks including Pinderfields Hospital, Trinity Walk, The Ridings, Wakefield 41, Calder Park, and Snow Hill.
              </p>
              <p className="text-text-light text-sm italic">
                "Our workshop on Doncaster Road is at the heart of the Wakefield tyre network."
              </p>
            </div>

            {/* Nearby */}
            <div className="glass-panel rounded-2xl p-6 lg:p-8">
              <h3 className="font-bold text-white text-lg mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent"></span> Nearby Areas
              </h3>
              <p className="text-text-muted text-sm leading-relaxed mb-4">
                Ossett, Horbury, Outwood, Stanley, Sandal, and Normanton.
              </p>
              <p className="text-text-light text-sm italic">
                "These areas are within our fastest mobile response zone, often reaching you under 30 minutes."
              </p>
            </div>

            {/* Towns */}
            <div className="glass-panel rounded-2xl p-6 lg:p-8">
              <h3 className="font-bold text-white text-lg mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent"></span> Wider Commercial Towns
              </h3>
              <p className="text-text-muted text-sm leading-relaxed mb-4">
                Leeds, Dewsbury, Castleford, Pontefract, and Batley.
              </p>
              <p className="text-text-light text-sm italic">
                "Our mobile fleet serves these nearby major towns regularly without delay."
              </p>
            </div>

            {/* Routes */}
            <div className="glass-panel rounded-2xl p-6 lg:p-8">
              <h3 className="font-bold text-white text-lg mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent"></span> Major Routes
              </h3>
              <p className="text-text-muted text-sm leading-relaxed mb-4">
                M1 (J39, J40, J41), M62 (J29, J30, J31), A61, A638, A642, and A650.
              </p>
              <p className="text-text-light text-sm italic">
                "Broken down near a key junction? Call us straight away for emergency attendance."
              </p>
            </div>

            {/* Situational */}
            <div className="glass-panel rounded-2xl p-6 lg:p-8 col-span-1 md:col-span-2 lg:col-span-1">
              <h3 className="font-bold text-white text-lg mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent"></span> Any Situation
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                We fit your tyres at your home driveway, the office parking lot, a retail centre, business parks, or the difficult roadside. Wherever you are when a tyre problem strikes, we can safely reach you.
              </p>
            </div>

          </div>
          <div className="mt-10 text-center">
            <Link href="/areas" className="inline-flex items-center gap-2 text-white font-bold hover:text-accent transition-colors group">
              View Our Full Coverage List
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
              These are some of our most popular service areas, each with a dedicated page detailing coverage.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {/* Wakefield HQ */}
            <Link href="/contact" className="glass-panel group relative overflow-hidden rounded-2xl p-6 border-accent/30 bg-accent/10 hover:bg-accent/20 transition-colors col-span-2 sm:col-span-3 lg:col-span-1">
              <div className="relative z-10 flex flex-row lg:flex-col justify-between items-center lg:items-start h-full">
                <span className="block font-black text-white text-xl group-hover:text-accent transition-colors">Wakefield</span>
                <span className="text-accent text-xs font-bold uppercase tracking-widest mt-0 lg:mt-2 block">HQ</span>
              </div>
            </Link>
            {/* Featured areas */}
            {featuredAreas.map((a) => (
              <Link key={a.slug} href={`/areas/${a.slug}`} className="glass-panel group relative overflow-hidden rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative z-10 block font-bold text-text-light group-hover:text-white transition-colors">{a.name}</span>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
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
              Still have questions? Whether comparing services or trying to understand what your tyres need, these are the questions Wakefield drivers ask us most.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {faqs.map((f, i) => (
              <details key={i} className="glass-panel rounded-2xl overflow-hidden group">
                <summary className="cursor-pointer p-5 md:p-6 font-bold text-white text-sm md:text-base flex items-start justify-between gap-4 hover:text-accent transition-colors list-none [&::-webkit-details-marker]:hidden">
                  <span className="pr-2">{f.q}</span>
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
        subtext="Got your answer? Let's get you sorted. Whether it's a routine tyre fitting at our Wakefield workshop, a mobile appointment at your home, or an emergency call-out on the M1. We're here. Same-day availability. Honest pricing. One call gets it sorted."
      />
    </div>
  );
}

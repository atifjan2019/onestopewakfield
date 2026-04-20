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
  { headline: "Need Tyres Fitted?", desc: "Same-day tyre fitting at our Wakefield workshop or at your location.", href: "/tyre-fitting-wakefield", icon: "wrench", image: "/images/tyre-fitting-workshop.png" },
  { headline: "Need Mobile Fitting?", desc: "We come to your home, workplace, or roadside across Wakefield.", href: "/mobile-tyre-fitting-wakefield", icon: "van", image: "/images/mobile-tyre-service.png" },
  { headline: "Emergency Tyre Issue?", desc: "Rapid local call-out for breakdowns and urgent tyre problems.", href: "/emergency-tyre-repair-wakefield", icon: "siren", image: "/images/emergency-repair.png" },
  { headline: "Got a Puncture?", desc: "Safe, honest puncture assessment and BS AU 159 repair.", href: "/puncture-repair-wakefield", icon: "bandage", image: "/images/tyre-closeup.png" },
  { headline: "Vibration or Pull?", desc: "Precision wheel balancing to restore smooth, safe driving.", href: "/wheel-balancing-wakefield", icon: "scale", image: "/images/wheel-balancing.png" },
  { headline: "Need New Tyres?", desc: "Budget to premium tyres, supplied and fitted across Wakefield.", href: "/tyre-replacement-wakefield", icon: "refresh", image: "/images/tyre-range.png" },
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
   HOMEPAGE — White Theme with Animations & Images
   ═══════════════════════════════════════════════════════════════ */
export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <SchemaMarkup schema={autoRepairSchema} />
      <SchemaMarkup schema={faqSchema} />

      {/* ═══ SECTION 1 — HERO / ENTITY CONFIRMATION ═══ */}
      <section className="relative min-h-[90vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden pt-28 md:pt-20 pb-12 md:pb-16">
        {/* Hero background image with overlay */}
        <div className="absolute inset-0 bg-[url('/images/2.jpeg')] bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        
        {/* Animated floating shapes */}
        <div className="absolute top-1/4 left-1/4 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-accent/15 rounded-full blur-[100px] md:blur-[150px] animate-blob pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-red-900/20 rounded-full blur-[80px] md:blur-[120px] animate-blob pointer-events-none" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/3 right-1/3 w-[200px] h-[200px] bg-white/5 rounded-full blur-[60px] animate-float pointer-events-none"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 w-full text-center">
          {/* Emergency badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-sm mb-8 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Emergency Callouts Available
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-6 md:mb-8 tracking-tighter drop-shadow-2xl animate-fade-in-up max-w-5xl mx-auto" style={{ animationDelay: "0.1s" }}>
            Tyre Fitting, Mobile Service{" "}
            <br className="hidden md:block" />
            <span className="text-gradient-accent">&amp; Emergency Repair in Wakefield</span>
          </h1>

          <p className="text-white/80 text-base md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto font-medium leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
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
            <Link href="/book" className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-bold px-6 py-3 md:px-8 md:py-4 rounded-2xl text-sm md:text-base transition-all duration-300 text-center">
              Book Online
            </Link>
            <Link href="/emergency-tyre-repair-wakefield" className="w-full sm:w-auto text-white font-bold px-6 py-3 text-sm md:text-base transition-all duration-300 text-center hover:underline underline-offset-4">
              Emergency? Get Help Now →
            </Link>
          </div>

          {/* Trust Strip */}
          <div className="mt-10 md:mt-14 flex flex-wrap items-center justify-center gap-4 md:gap-8 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            {trustStrip.map((t) => (
              <div key={t.label} className="flex items-center gap-2 text-white/70 text-sm">
                <span className="text-accent"><TrustIcon type={t.icon} /></span>
                <span>{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══ STATS COUNTER STRIP ═══ */}
      <section className="py-12 md:py-16 bg-white relative z-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { number: "5,000+", label: "Tyres Fitted", icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-3.2a.83.83 0 010-1.42l5.1-3.2a.83.83 0 011.26.71v6.4a.83.83 0 01-1.26.71zM21.75 12a9.75 9.75 0 11-19.5 0 9.75 9.75 0 0119.5 0z" /></svg> },
              { number: "30min", label: "Avg Response Time", icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg> },
              { number: "150+", label: "Areas Covered", icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg> },
              { number: "5★", label: "Customer Rating", icon: <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg> },
            ].map((stat, i) => (
              <div key={stat.label} className="stat-card animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="text-accent mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-black text-accent mb-1">{stat.number}</div>
                <div className="text-text-muted text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══ SECTION 2 — QUICK INTENT ROUTER WITH IMAGES ═══ */}
      <div className="section-bridge">If you already know what you need, start here.</div>
      <section className="py-10 md:py-16 relative z-20 bg-surface-dark">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-text mb-4 tracking-tight">What Do You Need?</h2>
            <p className="text-text-muted text-base md:text-lg font-medium max-w-2xl mx-auto">
              Choose your situation and we&apos;ll point you to the right service.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {intentCards.map((c, i) => (
              <Link key={c.href} href={c.href} className="group relative overflow-hidden rounded-2xl bg-white border border-black/5 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img src={c.image} alt={c.headline} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-text mb-2 group-hover:text-accent transition-colors duration-300">{c.headline}</h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-4">{c.desc}</p>
                  <div className="inline-flex items-center gap-2 text-accent font-bold text-sm">
                    <span>Learn more</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* ═══ IMAGE SHOWCASE STRIP ═══ */}
      <section className="py-8 md:py-12 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: "/images/tyre-fitting-workshop.png", alt: "Professional tyre fitting workshop" },
              { src: "/images/mobile-tyre-service.png", alt: "Mobile tyre fitting service" },
              { src: "/images/wheel-balancing.png", alt: "Precision wheel balancing" },
              { src: "/images/emergency-repair.png", alt: "Emergency tyre repair" },
            ].map((img, i) => (
              <div key={img.src} className="image-card animate-fade-in-up" style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="aspect-square overflow-hidden">
                  <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══ SECTION 3 — PROBLEM CLUSTER (Editorial Panels) ═══ */}
      <div className="section-bridge">Not sure? Let&apos;s diagnose your situation.</div>
      <section className="py-12 md:py-20 relative overflow-hidden bg-burgundy-tint">
        {/* Decorative floating shapes */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-accent/5 rounded-full blur-xl animate-float pointer-events-none"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-accent/5 rounded-full blur-xl animate-float pointer-events-none" style={{ animationDelay: "3s" }}></div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-10 md:mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-text mb-4 tracking-tight">Common Tyre Situations We Solve Every Day</h2>
            <p className="text-text-muted text-base md:text-lg font-medium max-w-3xl">
              These are the tyre problems Wakefield drivers face most, and the right path for each.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {problems.map((p, i) => (
              <div key={p.title} className="problem-panel animate-fade-in-up" style={{ animationDelay: `${i * 0.08}s` }}>
                <h3 className="font-bold text-text text-lg mb-3">{p.title}</h3>
                <div className="space-y-2 text-sm leading-relaxed">
                  <p className="text-text-light"><span className="text-accent font-semibold">Situation:</span> {p.situation}</p>
                  <p className="text-text-muted"><span className="text-amber-600 font-semibold">Risk:</span> {p.risk}</p>
                  <p className="text-text-light"><span className="text-green-600 font-semibold">Right path:</span> {p.path}</p>
                </div>
                <div className="mt-3 flex flex-wrap gap-3">
                  {p.links.map((l) => (
                    <Link key={l.href} href={l.href} className="inline-flex items-center gap-1 text-accent text-sm font-bold hover:underline underline-offset-4 transition-all duration-300 hover:gap-2">
                      {l.label} →
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══ SECTION 4 — CORE SERVICE TAXONOMY WITH IMAGES ═══ */}
      <section className="py-12 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-8 md:mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-text mb-4 tracking-tight">Our Tyre Services</h2>
            <p className="text-text-muted text-base md:text-lg font-medium max-w-3xl">
              Each of these situations maps to one of our core services. Here&apos;s the full list of what we provide across Wakefield and West Yorkshire.
            </p>
          </div>

          {/* Featured service with large image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            <div className="image-card animate-slide-in-left">
              <img src="/images/tyre-fitting-workshop.png" alt="Our professional tyre fitting workshop in Wakefield" loading="lazy" className="w-full h-full object-cover aspect-[4/3]" />
            </div>
            <div className="flex flex-col justify-center animate-slide-in-right">
              <h3 className="text-2xl font-bold text-text mb-4">Professional Workshop & Mobile Fleet</h3>
              <p className="text-text-muted text-base leading-relaxed mb-6">
                From our fully-equipped Doncaster Road workshop to our mobile fleet covering all of West Yorkshire, we bring expert tyre fitting wherever you need it. Same-day availability, no hidden fees, and every job backed by professional equipment and experienced technicians.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Workshop Fitting", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-3.2a.83.83 0 010-1.42l5.1-3.2a.83.83 0 011.26.71v6.4a.83.83 0 01-1.26.71zM21.75 12a9.75 9.75 0 11-19.5 0 9.75 9.75 0 0119.5 0z" /></svg> },
                  { label: "Mobile Service", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg> },
                  { label: "Emergency Repair", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg> },
                  { label: "Free Balancing", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" /></svg> },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2 bg-surface p-3 rounded-xl">
                    <span className="text-accent">{item.icon}</span>
                    <span className="text-sm font-semibold text-text">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
            {services.map((s, i) => (
              <Link key={s.slug} href={`/${s.slug}`} className="bg-white border border-black/5 rounded-xl p-5 flex items-center justify-between group hover:border-accent/20 hover:shadow-lg transition-all duration-400 hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: `${i * 0.08}s` }}>
                <div>
                  <h3 className="font-bold text-text text-lg group-hover:text-accent transition-colors">{s.name}</h3>
                  <p className="text-text-muted text-sm mt-1">{s.shortDesc}</p>
                </div>
                <svg className="w-5 h-5 text-accent transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>

          {/* Supporting services */}
          <div className="rounded-xl p-6 md:p-8 border border-black/5 bg-surface">
            <h3 className="font-bold text-text text-lg mb-4">Additional Supporting Services</h3>
            <p className="text-text-muted text-sm mb-6 max-w-3xl">
              We also support wheel alignment checks, locking wheel nut removal, and TPMS valve servicing as part of broader tyre work. These are not standalone bookable services but are available alongside fitting, replacement, or repair.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-text-muted">
              <div className="bg-white rounded-lg p-4 border border-black/5 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <span className="text-text font-semibold flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Wheel Alignment</span>
                <p className="mt-1 pl-3.5">Tracking adjustment for pulling, drift, or uneven wear after pothole impacts.</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-black/5 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <span className="text-text font-semibold flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Tyres by Registration</span>
                <p className="mt-1 pl-3.5">Tell us your reg and we find the correct tyre specification instantly.</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-black/5 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <span className="text-text font-semibold flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Locking Wheel Nut Removal</span>
                <p className="mt-1 pl-3.5">Lost your key? We remove locking nuts safely without wheel damage.</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-black/5 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <span className="text-text font-semibold flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> TPMS Valve Service</span>
                <p className="mt-1 pl-3.5">Valve replacement and sensor checks to keep your pressure monitoring accurate.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ═══ SECTION 5 — PROCESS (Vertical Timeline) ═══ */}
      <div className="section-bridge">Here&apos;s exactly how it works, step by step.</div>
      <section className="py-12 md:py-20 relative overflow-hidden bg-surface">
        {/* Decorative elements */}
        <div className="absolute -right-20 top-1/3 w-40 h-40 border-4 border-accent/10 rounded-full animate-rotate-slow pointer-events-none"></div>
        <div className="absolute -left-10 bottom-1/4 w-24 h-24 border-4 border-accent/10 rounded-full animate-rotate-slow pointer-events-none" style={{ animationDirection: "reverse" }}></div>

        <div className="mx-auto max-w-3xl px-4 md:px-6 relative z-10">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-text mb-4 tracking-tight">How It Works</h2>
            <p className="text-text-muted text-base md:text-lg font-medium max-w-2xl mx-auto">
              From first call to driving away — six clear steps.
            </p>
          </div>
          <div className="relative">
            {processSteps.map((s, i) => (
              <div key={s.step} className="timeline-step animate-fade-in-up" style={{ animationDelay: `${i * 0.12}s` }}>
                <div className="timeline-line"></div>
                <div className="timeline-number">{s.step}</div>
                <div className="pt-1">
                  <h3 className="font-bold text-text text-lg mb-1">{s.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/book" className="inline-flex items-center gap-3 bg-gradient-to-r from-accent to-accent-hover text-white font-bold px-8 py-4 rounded-2xl text-base transition-all duration-300 hover:shadow-[0_0_40px_rgba(227,30,36,0.3)] hover:-translate-y-1">
              Book Your Service
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>


      {/* ═══ SECTION 6 — TYRE CHOICE / DECISION SUPPORT ═══ */}
      <div className="section-bridge">Before we fit, let&apos;s get the right tyres.</div>
      <section className="py-12 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-10 md:mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-text mb-4 tracking-tight">Choosing the Right Tyres for Your Vehicle</h2>
            <p className="text-text-muted text-base md:text-lg font-medium max-w-3xl">
              We make sure you&apos;re getting the right ones — the right size, the right tier, and the right type for your driving.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Left column */}
            <div className="lg:col-span-3 space-y-8">
              {/* Image + Find Your Tyres */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="image-card animate-scale-in">
                  <img src="/images/tyre-range.png" alt="Range of budget to premium tyres" loading="lazy" className="w-full h-full object-cover aspect-[4/3]" />
                </div>
                <div className="border-l-4 border-accent pl-6">
                  <h3 className="font-bold text-text text-xl mb-3">Find Your Tyres by Registration or Size</h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-3">
                    Tell us your vehicle registration and we look up the correct tyre specifications (size, load index, and speed rating) instantly.
                  </p>
                  <p className="text-text-muted text-sm leading-relaxed">
                    Getting the correct fitment matters for your safety, vehicle legality, and manufacturer warranty.
                  </p>
                </div>
              </div>

              {/* Tyre Tiers */}
              <div>
                <h3 className="font-bold text-text text-xl mb-5">Budget, Mid-Range &amp; Premium — What&apos;s the Difference?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 rounded-xl overflow-hidden border border-black/5 shadow-sm">
                  <div className="p-5 bg-white border-t-4 border-t-green-500 hover:bg-green-50 transition-colors duration-300">
                    <span className="text-text font-semibold block mb-2">Budget</span>
                    <p className="text-text-muted text-sm">Reliable, meets all legal requirements. Ideal for lower-mileage drivers and city driving. Best value per mile.</p>
                  </div>
                  <div className="p-5 bg-white border-t-4 border-t-amber-500 sm:border-l sm:border-black/5 hover:bg-amber-50 transition-colors duration-300">
                    <span className="text-text font-semibold block mb-2">Mid-Range</span>
                    <p className="text-text-muted text-sm">Balanced performance and value. Good wet grip, reasonable wear life. Suitable for most everyday drivers.</p>
                  </div>
                  <div className="p-5 bg-white border-t-4 border-t-accent sm:border-l sm:border-black/5 hover:bg-red-50 transition-colors duration-300">
                    <span className="text-text font-semibold block mb-2">Premium</span>
                    <p className="text-text-muted text-sm">Top-tier wet grip, shortest braking distances, lowest road noise, and longest wear. Perfect for high-mileage drivers.</p>
                  </div>
                </div>
                <Link href="/tyre-replacement-wakefield" className="inline-flex items-center gap-2 text-accent font-bold text-sm mt-4 hover:underline underline-offset-4 hover:gap-3 transition-all duration-300">
                  View Tyre Replacement Service →
                </Link>
              </div>
            </div>

            {/* Right column */}
            <div className="lg:col-span-2 space-y-6">
              <div className="rounded-xl p-5 bg-surface border border-black/5 hover:shadow-md transition-all duration-300">
                <h3 className="font-bold text-text text-lg mb-3">Load Index, Speed Rating &amp; Tyre Labels</h3>
                <div className="space-y-3">
                  <p className="text-text-muted text-sm leading-relaxed">
                    <span className="text-text font-semibold">Load Index &amp; Speed Rating:</span> It&apos;s vital we match or exceed your vehicle manufacturer&apos;s original specifications. This is especially critical for vans and heavily loaded vehicles.
                  </p>
                  <p className="text-text-muted text-sm leading-relaxed">
                    <span className="text-text font-semibold">EU Tyre Labels:</span> Every tyre is rated on <span className="text-text">wet grip</span> (A–E), <span className="text-text">rolling resistance</span> (A–E), and <span className="text-text">external noise</span> (dB). We explain these so you know what you&apos;re buying.
                  </p>
                </div>
              </div>

              <div className="rounded-xl p-5 bg-surface border border-black/5 hover:shadow-md transition-all duration-300">
                <h3 className="font-bold text-text text-lg mb-3">Cars, Vans, 4x4s &amp; EVs</h3>
                <div className="space-y-3">
                  <p className="text-text-muted text-sm leading-relaxed">
                    We supply and fit standard <span className="text-text font-medium">car tyres</span>, reinforced <span className="text-text font-medium">van tyres</span>, rugged <span className="text-text font-medium">4x4 tyres</span>, and specific <span className="text-text font-medium">EV tyres</span> designed for electric vehicles.
                  </p>
                  <p className="text-text-muted text-sm leading-relaxed">
                    We also fit <span className="text-text font-medium">run-flat tyres</span> and offer seasonal options including <span className="text-text font-medium">summer, winter, and all-season tyres</span>.
                  </p>
                </div>
              </div>

              {/* Extra image */}
              <div className="image-card animate-scale-in" style={{ animationDelay: "0.3s" }}>
                <img src="/images/tyre-closeup.png" alt="Close-up of professional tyre fitting" loading="lazy" className="w-full h-48 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ═══ SECTION 7 — SERVICE MODE COMPARISON ═══ */}
      <div className="section-bridge">Three routes to getting your tyres fitted.</div>
      <section className="py-12 md:py-20 relative overflow-hidden bg-surface">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-text mb-4 tracking-tight">Same-Day, Mobile or Emergency — Which Do You Need?</h2>
            <p className="text-text-muted text-base md:text-lg font-medium max-w-2xl mx-auto">
              Each route is designed for a different level of urgency and location.
            </p>
          </div>

          {/* Desktop: Comparison Table */}
          <div className="hidden md:block comparison-table animate-fade-in-up">
            <div className="comparison-header">
              <div className="comparison-header-cell" style={{ borderTopColor: '#22c55e' }}>
                <div className="w-3 h-3 rounded-full bg-green-500 mx-auto mb-2"></div>
                Same-Day Workshop
              </div>
              <div className="comparison-header-cell" style={{ borderTopColor: '#3080ff' }}>
                <div className="w-3 h-3 rounded-full bg-blue-500 mx-auto mb-2"></div>
                Mobile Fitting
              </div>
              <div className="comparison-header-cell" style={{ borderTopColor: '#E31E24' }}>
                <div className="w-3 h-3 rounded-full bg-accent mx-auto mb-2 animate-pulse"></div>
                Emergency Repair
              </div>
            </div>
            <div className="comparison-row">
              <div className="comparison-cell"><span className="comparison-label">Best for</span>Quick replacement without waiting</div>
              <div className="comparison-cell"><span className="comparison-label">Best for</span>Convenience, or car isn&apos;t driveable</div>
              <div className="comparison-cell"><span className="comparison-label">Best for</span>Roadside emergencies, sudden flats</div>
            </div>
            <div className="comparison-row">
              <div className="comparison-cell"><span className="comparison-label">Where</span>Our Doncaster Road workshop</div>
              <div className="comparison-cell"><span className="comparison-label">Where</span>Anywhere across West Yorkshire</div>
              <div className="comparison-cell"><span className="comparison-label">Where</span>Roadside, motorways, car parks</div>
            </div>
            <div className="comparison-row">
              <div className="comparison-cell"><span className="comparison-label">Urgency</span><span className="text-green-600 font-semibold">Planned</span></div>
              <div className="comparison-cell"><span className="comparison-label">Urgency</span><span className="text-amber-600 font-semibold">Flexible</span></div>
              <div className="comparison-cell"><span className="comparison-label">Urgency</span><span className="text-accent font-semibold">Immediate</span></div>
            </div>
            <div className="comparison-row">
              <div className="comparison-cell"><span className="comparison-label">Typical user</span>Drivers who can bring the car in</div>
              <div className="comparison-cell"><span className="comparison-label">Typical user</span>Busy schedules, immobile vehicles</div>
              <div className="comparison-cell"><span className="comparison-label">Typical user</span>Stranded drivers, blowouts</div>
            </div>
            <div className="comparison-row">
              <div className="comparison-cell pt-4 pb-5"><Link href="/tyre-fitting-wakefield" className="text-accent font-bold text-sm hover:underline underline-offset-4">Workshop Fitting →</Link></div>
              <div className="comparison-cell pt-4 pb-5"><Link href="/mobile-tyre-fitting-wakefield" className="text-accent font-bold text-sm hover:underline underline-offset-4">Mobile Fitting →</Link></div>
              <div className="comparison-cell pt-4 pb-5"><Link href="/emergency-tyre-repair-wakefield" className="text-accent font-bold text-sm hover:underline underline-offset-4">Get Emergency Help →</Link></div>
            </div>
          </div>

          {/* Mobile: Stacked Cards */}
          <div className="md:hidden space-y-4">
            {[
              { color: "green-500", title: "Same-Day Workshop", best: "Quick replacement", where: "Doncaster Road workshop", urgency: "Planned", urgencyColor: "text-green-600", href: "/tyre-fitting-wakefield", cta: "Workshop Fitting →" },
              { color: "blue-500", title: "Mobile Fitting", best: "Convenience, or car isn't driveable", where: "Anywhere across West Yorkshire", urgency: "Flexible", urgencyColor: "text-amber-600", href: "/mobile-tyre-fitting-wakefield", cta: "Mobile Fitting →" },
              { color: "accent", title: "Emergency Repair", best: "Roadside emergencies, sudden flats", where: "Roadside, motorways, car parks", urgency: "Immediate", urgencyColor: "text-accent", href: "/emergency-tyre-repair-wakefield", cta: "Get Emergency Help →", pulse: true },
            ].map((card) => (
              <div key={card.title} className={`rounded-xl p-5 bg-white border border-black/5 shadow-sm ${card.pulse ? 'border-accent/20' : ''} hover:shadow-md transition-all duration-300`}>
                <div className="flex items-center gap-2 mb-3">
                  <div className={`w-3 h-3 rounded-full bg-${card.color} ${card.pulse ? 'animate-pulse' : ''}`}></div>
                  <h3 className="font-bold text-text text-lg">{card.title}</h3>
                </div>
                <div className="space-y-2 text-sm text-text-muted">
                  <p><span className="text-text font-semibold">Best for:</span> {card.best}</p>
                  <p><span className="text-text font-semibold">Where:</span> {card.where}</p>
                  <p><span className="text-text font-semibold">Urgency:</span> <span className={`${card.urgencyColor} font-semibold`}>{card.urgency}</span></p>
                </div>
                <Link href={card.href} className="inline-flex items-center gap-2 text-accent font-bold text-sm mt-4 hover:underline underline-offset-4">{card.cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══ SECTION 8 — DIAGNOSTIC CLARIFICATION ═══ */}
      <section className="py-12 md:py-20 bg-burgundy-tint">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">Understanding the Differences</p>
            <h2 className="text-2xl md:text-3xl font-bold text-text mb-4 tracking-tight">Repair, Replace, Balance or Align?</h2>
            <p className="text-text-muted text-base md:text-lg font-medium max-w-2xl mx-auto">
              Some tyre issues overlap. This clarifies the most common diagnostic questions.
            </p>
          </div>
          <div className="diagnostic-grid">
            <div className="diagnostic-cell">
              <h3 className="font-bold text-text text-lg mb-3">Puncture Repair vs Tyre Replacement</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-2">
                A puncture can be safely repaired to <span className="text-text font-semibold">BS AU 159 standard</span> if the damage is within the central tread band.
              </p>
              <p className="text-text-muted text-sm leading-relaxed mb-2">
                <span className="text-amber-600 font-semibold">Sidewall damage</span>, shoulder punctures, and damage to run-flat tyres cannot be safely repaired — replacement is required.
              </p>
              <p className="text-text-muted text-sm leading-relaxed mb-3">We assess every puncture. We never repair a tyre that isn&apos;t safe to repair.</p>
              <div className="flex gap-4">
                <Link href="/puncture-repair-wakefield" className="text-accent text-sm font-bold hover:underline underline-offset-4">Puncture Repair →</Link>
                <Link href="/tyre-replacement-wakefield" className="text-accent text-sm font-bold hover:underline underline-offset-4">Tyre Replacement →</Link>
              </div>
            </div>
            
            <div className="diagnostic-cell">
              <h3 className="font-bold text-text text-lg mb-3">Wheel Balancing vs Wheel Alignment</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-2">
                <span className="text-text font-semibold">Wheel balancing</span> corrects weight distribution. Symptoms: steering vibration at speed.
              </p>
              <p className="text-text-muted text-sm leading-relaxed mb-2">
                <span className="text-text font-semibold">Wheel alignment (tracking)</span> adjusts wheel angles. Symptoms: car pulling to one side, uneven tyre wear.
              </p>
              <p className="text-text-muted text-sm leading-relaxed mb-3">After a pothole, start with balancing. If pulling persists, alignment may be needed.</p>
              <Link href="/wheel-balancing-wakefield" className="text-accent text-sm font-bold hover:underline underline-offset-4">Wheel Balancing →</Link>
            </div>
            
            <div className="diagnostic-cell">
              <h3 className="font-bold text-text text-lg mb-3">Legal Tread Depth &amp; Safety</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-2">
                The UK legal minimum is <span className="text-text font-semibold">1.6mm</span> across the central three-quarters of the tread width.
              </p>
              <p className="text-text-muted text-sm leading-relaxed mb-3">
                Below this: up to <span className="text-amber-600 font-semibold">£2,500 fine and 3 penalty points per tyre</span>. Braking distances are drastically worse.
              </p>
              <Link href="/tyre-replacement-wakefield" className="text-accent text-sm font-bold hover:underline underline-offset-4">Book a Replacement →</Link>
            </div>
            
            <div className="diagnostic-cell">
              <h3 className="font-bold text-text text-lg mb-3">TPMS &amp; Locking Wheel Nuts</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-2">
                <span className="text-text font-semibold">Locking wheel nuts:</span> If your key is missing or damaged, we provide specialist removal —  safely unlocking the wheel so tyre work can proceed.
              </p>
              <p className="text-text-muted text-sm leading-relaxed">
                <span className="text-text font-semibold">TPMS:</span> Sensors and valves can be serviced when fitting new tyres. A faulty valve can trigger false warnings or miss a real puncture.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ═══ SECTION 9 — PROOF & TRUST SYSTEM ═══ */}
      <div className="section-bridge">Don&apos;t take our word for it.</div>
      <section className="py-12 md:py-20 relative overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-text mb-4 tracking-tight">Why Wakefield Drivers Choose Us</h2>
            <p className="text-text-muted text-base md:text-lg font-medium max-w-2xl mx-auto">
              Here&apos;s what we stand behind, and the evidence that backs it.
            </p>
          </div>

          {/* Proof Strip */}
          <div className="proof-strip mb-16">
            {[
              { title: "Local Workshop", desc: "Cinema House, 160 Doncaster Rd, WF1 5HL" },
              { title: "Same-Day Fitting", desc: "High stock levels, same-day availability" },
              { title: "Upfront Pricing", desc: "Tyres, fitting, valves, disposal included" },
              { title: "Mobile Fleet", desc: "Equipped vans across West Yorkshire" },
              { title: "BS AU 159", desc: "British Standard puncture assessments" },
              { title: "Experienced Team", desc: "Thousands of successful fittings" },
            ].map((p) => (
              <div key={p.title} className="proof-strip-item">
                <h3 className="font-bold text-text text-sm mb-1">{p.title}</h3>
                <p className="text-text-muted text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div>
            <div className="mb-8 flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-2 bg-accent/5 border border-accent/10 text-text font-bold px-5 py-2.5 rounded-full text-sm mb-5 shadow-sm">
                <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                What Our Customers Say
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-text tracking-tight">Driver Approved.</h3>
            </div>
            <TestimonialSlider testimonials={testimonials} />
          </div>
        </div>
      </section>


      {/* ═══ SECTION 10 — WORKSHOP & MOBILE CAPABILITY WITH IMAGES ═══ */}
      <section className="py-12 md:py-20 bg-surface">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-text mb-4 tracking-tight">Our Workshop &amp; Mobile Capability</h2>
            <p className="text-text-muted text-base md:text-lg font-medium max-w-2xl mx-auto">
              Trust is built on what you can see. Here&apos;s our Wakefield workshop and the mobile fleet that covers the wider region.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="coverage-tier-primary rounded-r-xl p-6 md:p-8 bg-white border border-black/5 shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="font-bold text-text text-xl mb-4">Wakefield Workshop</h3>
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
            <div className="coverage-tier-secondary rounded-r-xl p-6 md:p-8 bg-white border border-black/5 shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="font-bold text-text text-xl mb-4">Mobile Fleet</h3>
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

          {/* Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="image-card group aspect-video">
              <img src="/images/tyre-fitting-workshop.png" alt="One Stop Tyres Wakefield workshop" loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="image-card group aspect-video">
              <img src="/images/mobile-tyre-service.png" alt="Mobile tyre fitting service van" loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="image-card group aspect-video">
              <img src="/images/wheel-balancing.png" alt="Professional wheel balancing equipment" loading="lazy" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>


      {/* ═══ SECTION 11 — LOCAL COVERAGE ═══ */}
      <section className="py-12 md:py-20 relative overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-10 md:mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-text mb-4 tracking-tight">Covering Wakefield &amp; West Yorkshire</h2>
            <p className="text-text-muted text-base md:text-lg font-medium max-w-3xl">
              Our workshop is in Wakefield. Our reach extends across West Yorkshire.
            </p>
          </div>

          {/* Tier 1 */}
          <div className="coverage-tier-primary mb-6 py-5 px-6 md:px-8 rounded-r-xl bg-accent/5 border border-accent/10">
            <h3 className="font-bold text-text text-lg mb-2">Wakefield Core</h3>
            <p className="text-text-muted text-sm leading-relaxed mb-2">
              Wakefield city centre and all WF1–WF6 postcodes. Pinderfields Hospital, Trinity Walk, The Ridings, Wakefield 41, Calder Park, and Snow Hill.
            </p>
            <p className="text-text-light text-sm italic">&quot;Our workshop on Doncaster Road is at the heart of the Wakefield tyre network.&quot;</p>
          </div>

          {/* Tier 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="coverage-tier-secondary py-5 px-6 rounded-r-xl bg-surface border border-black/5">
              <h3 className="font-bold text-text text-base mb-2">Nearby Areas</h3>
              <p className="text-text-muted text-sm mb-2">Ossett, Horbury, Outwood, Stanley, Sandal, and Normanton.</p>
              <p className="text-text-light text-xs italic">&quot;Within our fastest mobile response zone — often under 30 minutes.&quot;</p>
            </div>
            <div className="coverage-tier-secondary py-5 px-6 rounded-r-xl bg-surface border border-black/5">
              <h3 className="font-bold text-text text-base mb-2">Wider Towns</h3>
              <p className="text-text-muted text-sm mb-2">Leeds, Dewsbury, Castleford, Pontefract, and Batley.</p>
              <p className="text-text-light text-xs italic">&quot;Our mobile fleet serves these nearby towns regularly without delay.&quot;</p>
            </div>
          </div>

          {/* Tier 3 — Routes */}
          <div className="py-5 px-6 md:px-8 rounded-xl bg-surface border border-black/5 mb-6">
            <h3 className="font-bold text-text text-base mb-3">Major Routes We Cover</h3>
            <div className="flex flex-wrap gap-2 mb-2">
              {["M1 (J39–J41)", "M62 (J29–J31)", "A61", "A638", "A642", "A650"].map((route) => (
                <span key={route} className="route-badge">{route}</span>
              ))}
            </div>
            <p className="text-text-light text-xs italic mt-2">&quot;Broken down near a key junction? Call us straight away for emergency attendance.&quot;</p>
          </div>

          <p className="text-text-muted text-sm px-6">
            Whether you&apos;re at your home driveway, office car park, retail centre, business park, or stranded roadside — wherever a tyre problem strikes, we can safely reach you.
          </p>

          <div className="mt-8 px-6">
            <Link href="/areas" className="inline-flex items-center gap-2 text-text font-bold hover:text-accent transition-colors group">
              View Our Full Coverage List
              <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>


      {/* ═══ SECTION 12 — AREA ROUTING ═══ */}
      <section className="py-10 md:py-14 bg-surface">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-6 md:mb-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-text mb-3 tracking-tight">Tyre Services Near You</h2>
            <p className="text-text-muted text-sm md:text-base font-medium max-w-xl mx-auto">
              Each area has a dedicated page with coverage details.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Link href="/contact" className="area-chip area-chip-hq">
              Wakefield <span className="text-xs ml-1.5 opacity-70">HQ</span>
            </Link>
            {featuredAreas.map((a) => (
              <Link key={a.slug} href={`/areas/${a.slug}`} className="area-chip">
                {a.name}
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/areas" className="inline-flex items-center gap-2 bg-white border border-black/10 hover:border-accent/30 hover:bg-accent/5 text-text font-bold px-6 py-3 rounded-full text-sm transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1">
              View All 150+ Service Areas
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>


      {/* ═══ SECTION 13 — FAQ ═══ */}
      <div className="section-bridge">Still have questions? We answer the ones we hear most.</div>
      <section className="py-12 md:py-20 relative overflow-hidden bg-burgundy-tint">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-text mb-4 tracking-tight">Frequently Asked Questions</h2>
            <p className="text-text-muted text-base md:text-lg font-medium max-w-2xl mx-auto">
              Whether comparing services or trying to understand what your tyres need — these are the questions Wakefield drivers ask us most.
            </p>
          </div>
          <div>
            {faqs.map((f, i) => (
              <details key={i} className="faq-item group">
                <summary>
                  <span className="pr-2 flex-1">{f.q}</span>
                  <svg className="w-5 h-5 text-accent shrink-0 transform group-open:rotate-180 transition-transform duration-300 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="faq-answer">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>


      {/* ═══ SECTION 14 — FINAL CTA ═══ */}
      <CTABlock
        heading="Ready to Get Moving?"
        subtext="Got your answer? Let's get you sorted. Whether it's a routine tyre fitting at our Wakefield workshop, a mobile appointment at your home, or an emergency call-out on the M1. We're here. Same-day availability. Honest pricing. One call gets it sorted."
      />
    </div>
  );
}

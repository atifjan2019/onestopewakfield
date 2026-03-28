export interface Service {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  intro: string;
  icon: string;
  shortDesc: string;
  steps: { title: string; desc: string }[];
  benefits: string[];
  metaTitle: string;
  metaDescription: string;
}

export const PHONE_NUMBER = "01924 000000";
export const PHONE_HREF = "tel:+4401924000000";
export const BUSINESS_NAME = "One Stop Tyres Wakefield";

export const services: Service[] = [
  {
    slug: "tyre-fitting-wakefield",
    name: "Tyre Fitting",
    shortName: "Tyre Fitting",
    tagline: "Fast, Reliable & Affordable",
    intro: "Need new tyres fitted in Wakefield? One Stop Tyres provides professional tyre fitting with quick turnaround times and competitive prices. Whether you need a single tyre or a full set, our experienced fitters have you covered across Wakefield and surrounding areas.",
    icon: "🔧",
    shortDesc: "Professional tyre fitting with same-day availability across Wakefield.",
    steps: [
      { title: "Call Us", desc: "Give us a ring and tell us your tyre size and vehicle. We'll find the best match at the right price." },
      { title: "We Fit", desc: "Visit us or we come to you. Our fitters work quickly without cutting corners on safety." },
      { title: "You Drive", desc: "Back on the road with properly fitted tyres, balanced and checked. Job done." },
    ],
    benefits: [
      "Wide range of budget, mid-range, and premium tyres in stock",
      "Same-day fitting available — no long waits",
      "All tyres fitted to manufacturer specifications",
      "Free tyre health check with every fitting",
    ],
    metaTitle: "Tyre Fitting Wakefield | One Stop Tyres",
    metaDescription: "Professional tyre fitting in Wakefield with same-day availability. Budget to premium tyres fitted fast. Call One Stop Tyres now for a free quote.",
  },
  {
    slug: "mobile-tyre-fitting-wakefield",
    name: "Mobile Tyre Fitting",
    shortName: "Mobile Fitting",
    tagline: "We Come to You, Same Day",
    intro: "Can't get to a garage? No problem. Our mobile tyre fitting service comes directly to your location anywhere in Wakefield. Whether you're stuck at home, at work, or on the roadside, we bring the right tyres and fit them on the spot.",
    icon: "🚐",
    shortDesc: "We come to your home, workplace, or roadside across Wakefield.",
    steps: [
      { title: "Call Us", desc: "Tell us where you are and what you need. We'll give you a time and a price — no surprises." },
      { title: "We Arrive", desc: "Our fully equipped mobile unit comes to your exact location, wherever you are in Wakefield." },
      { title: "Job Done", desc: "Tyres fitted, balanced, and old ones taken away. You don't even have to leave your driveway." },
    ],
    benefits: [
      "No need to drive on a damaged tyre to reach a garage",
      "Fully equipped mobile fitting van with all tyre sizes",
      "Available evenings and weekends by appointment",
      "We remove and dispose of your old tyres for free",
    ],
    metaTitle: "Mobile Tyre Fitting Wakefield | One Stop Tyres",
    metaDescription: "Mobile tyre fitting in Wakefield — we come to you same day. Home, work, or roadside. Call One Stop Tyres for fast mobile tyre service.",
  },
  {
    slug: "emergency-tyre-repair-wakefield",
    name: "Emergency Tyre Repair",
    shortName: "Emergency Repair",
    tagline: "Rapid Response When You Need It Most",
    intro: "A blown tyre or sudden flat can ruin your day. Our emergency tyre repair service in Wakefield gets you back on the road fast. We respond quickly across the Wakefield area with mobile repair and replacement options so you're never stranded for long.",
    icon: "🚨",
    shortDesc: "Rapid emergency tyre repair across Wakefield when you need it most.",
    steps: [
      { title: "Call Us", desc: "Tell us what happened and where you are. We'll dispatch help as fast as possible." },
      { title: "We Respond", desc: "Our team arrives with the tools and tyres needed to fix or replace on the spot." },
      { title: "Back Moving", desc: "Tyre repaired or replaced, safety checked, and you're back on your way." },
    ],
    benefits: [
      "Fast response times across Wakefield and surrounding areas",
      "Roadside, home, or workplace — we come to you",
      "Repair or replace on the spot depending on damage",
      "Available 7 days a week for emergencies",
    ],
    metaTitle: "Emergency Tyre Repair Wakefield | One Stop Tyres",
    metaDescription: "Emergency tyre repair in Wakefield — fast response, 7 days a week. Roadside or mobile repair. Call One Stop Tyres now for rapid help.",
  },
  {
    slug: "puncture-repair-wakefield",
    name: "Puncture Repair",
    shortName: "Puncture Repair",
    tagline: "Quick Fix, Lasting Results",
    intro: "Got a puncture? Don't replace the whole tyre if you don't have to. Our puncture repair service in Wakefield follows British Standard BS AU 159 to safely repair your tyre and save you money. We'll tell you honestly whether a repair is possible or if you need a new tyre.",
    icon: "🩹",
    shortDesc: "Safe, affordable puncture repairs that save you the cost of a new tyre.",
    steps: [
      { title: "Call Us", desc: "Let us know what's happened. If the tyre is holding some air, you may be able to drive to us safely." },
      { title: "We Inspect", desc: "We remove the tyre, find the puncture, and assess whether a safe repair is possible." },
      { title: "Repaired", desc: "If repairable, we fix it to British Standards. If not, we'll fit a replacement at a fair price." },
    ],
    benefits: [
      "Repairs carried out to British Standard BS AU 159",
      "Honest assessment — we never repair an unsafe tyre",
      "Much cheaper than a full tyre replacement when possible",
      "Quick turnaround — most repairs done in under 30 minutes",
    ],
    metaTitle: "Puncture Repair Wakefield | One Stop Tyres",
    metaDescription: "Fast puncture repair in Wakefield to British Standards. Save money with a safe, lasting repair. Call One Stop Tyres for a quick fix today.",
  },
  {
    slug: "wheel-balancing-wakefield",
    name: "Wheel Balancing",
    shortName: "Wheel Balancing",
    tagline: "Smooth Ride, Every Time",
    intro: "Vibrations through the steering wheel? Uneven tyre wear? Your wheels likely need balancing. Our wheel balancing service in Wakefield uses precision equipment to ensure your wheels spin smoothly, extending tyre life and improving your driving comfort.",
    icon: "⚖️",
    shortDesc: "Precision wheel balancing for a smoother, safer drive.",
    steps: [
      { title: "Call Us", desc: "Book a wheel balancing appointment. It's quick and we can usually fit you in same-day." },
      { title: "We Balance", desc: "Using precision equipment, we balance each wheel to eliminate vibrations and uneven wear." },
      { title: "Smooth Ride", desc: "Drive away with perfectly balanced wheels — smoother, safer, and better for your tyres." },
    ],
    benefits: [
      "Eliminates steering vibrations and wobble",
      "Extends the life of your tyres significantly",
      "Precision digital balancing equipment",
      "Often completed in under 30 minutes per set",
    ],
    metaTitle: "Wheel Balancing Wakefield | One Stop Tyres",
    metaDescription: "Professional wheel balancing in Wakefield. Eliminate vibrations and extend tyre life. Fast service from One Stop Tyres — call now.",
  },
  {
    slug: "tyre-replacement-wakefield",
    name: "Tyre Replacement",
    shortName: "Tyre Replacement",
    tagline: "The Right Tyre at the Right Price",
    intro: "When your tyres are worn, cracked, or past their best, it's time for a replacement. One Stop Tyres in Wakefield stocks a full range of budget, mid-range, and premium tyres for all vehicle types. We'll help you choose the right tyre and fit it while you wait.",
    icon: "🔄",
    shortDesc: "Full range of tyres from budget to premium, fitted while you wait.",
    steps: [
      { title: "Call Us", desc: "Tell us your vehicle and tyre size. We'll recommend the best options within your budget." },
      { title: "We Fit", desc: "We fit your new tyres, balance the wheels, and check the pressures — all included." },
      { title: "Sorted", desc: "Drive away on fresh rubber with proper balance and alignment. Old tyres disposed of." },
    ],
    benefits: [
      "Budget, mid-range, and premium tyres for all vehicles",
      "Expert advice on the best tyre for your driving style",
      "Wheel balancing included with every replacement",
      "Old tyres removed and disposed of responsibly",
    ],
    metaTitle: "Tyre Replacement Wakefield | One Stop Tyres",
    metaDescription: "Tyre replacement in Wakefield — budget to premium options fitted fast. Free balancing included. Call One Stop Tyres for the best deal.",
  },
];

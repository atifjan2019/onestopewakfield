export interface Area {
  slug: string;
  name: string;
  intro: string;
  landmarks: string;
  whyChooseUs: string[];
  nearbyAreas: string[];
  metaTitle: string;
  metaDescription: string;
}

export const areas: Area[] = [
  {
    slug: "leeds",
    name: "Leeds",
    intro: "Serving customers across Leeds from our Wakefield base, we're just a short drive down the M1 to reach you. Whether you're near the city centre, out by the White Rose Shopping Centre, or along the A61 corridor, our mobile tyre service covers the entire Leeds area with fast arrival times.",
    landmarks: "the M1 motorway, A61, White Rose Shopping Centre, and Leeds city centre",
    whyChooseUs: [
      "Typically with you in Leeds within 45 minutes of your call",
      "Regular service runs across all Leeds postcodes — LS1 to LS27",
      "Same-day availability for most tyre services, even at short notice",
    ],
    nearbyAreas: ["dewsbury", "castleford", "batley"],
    metaTitle: "Tyre Fitting Leeds | One Stop Tyres Wakefield",
    metaDescription: "Fast tyre fitting in Leeds from One Stop Tyres Wakefield. Mobile service, same-day fitting, and competitive prices. Call now for rapid response.",
  },
  {
    slug: "dewsbury",
    name: "Dewsbury",
    intro: "Dewsbury is one of our closest coverage areas, sitting just off the A638 from Wakefield. Whether you need roadside help near Dewsbury town centre, a mobile fitting at your home in Savile Town, or tyres sorted near the Dewsbury Ring Road, we can be with you quickly.",
    landmarks: "Dewsbury town centre, the A638, Savile Town, and Dewsbury Ring Road",
    whyChooseUs: [
      "One of our fastest response areas — often under 20 minutes",
      "Deep knowledge of Dewsbury roads and residential areas",
      "Evening and weekend appointments available for Dewsbury residents",
    ],
    nearbyAreas: ["batley", "ossett", "leeds"],
    metaTitle: "Tyre Fitting Dewsbury | One Stop Tyres Wakefield",
    metaDescription: "Tyre fitting in Dewsbury with rapid response from Wakefield. Same-day mobile service and competitive prices. Call One Stop Tyres today.",
  },
  {
    slug: "castleford",
    name: "Castleford",
    intro: "Just east of Wakefield along the A656, Castleford is well within our core service area. From the high street to the Junction 32 retail park, and all the residential streets in between, we provide fast, reliable tyre services to Castleford drivers every day.",
    landmarks: "Castleford high street, Junction 32 retail outlet, and the A656",
    whyChooseUs: [
      "Quick access via the A656 — usually with you in under 25 minutes",
      "Popular with Castleford commuters who need tyres fitted at home after work",
      "Full tyre range in stock for same-day fitting in Castleford",
    ],
    nearbyAreas: ["pontefract", "normanton", "leeds"],
    metaTitle: "Tyre Fitting Castleford | One Stop Tyres Wakefield",
    metaDescription: "Tyre fitting in Castleford — fast, local service from One Stop Tyres Wakefield. Same-day fitting at your home or workplace. Call now.",
  },
  {
    slug: "pontefract",
    name: "Pontefract",
    intro: "Historic Pontefract sits just a few miles east of us, making it one of the easiest areas for us to reach. Whether you're near Pontefract Castle, on the Baghill Lane estate, or heading out towards the A1(M), we offer full tyre services with minimal waiting time.",
    landmarks: "Pontefract Castle, Baghill Lane, the A1(M), and Pontefract Racecourse",
    whyChooseUs: [
      "Excellent coverage of all Pontefract postcodes with fast arrival",
      "Regularly serve the Pontefract Racecourse and industrial estate areas",
      "Local knowledge means no time wasted finding your location",
    ],
    nearbyAreas: ["castleford", "normanton", "dewsbury"],
    metaTitle: "Tyre Fitting Pontefract | One Stop Tyres Wakefield",
    metaDescription: "Tyre fitting in Pontefract from One Stop Tyres. Fast mobile service, same-day availability. Local and reliable — call now for a quote.",
  },
  {
    slug: "normanton",
    name: "Normanton",
    intro: "Normanton is practically on our doorstep. Located right next to Wakefield along the A655, it's one of the areas we can reach fastest. If you need tyres fitted urgently near Normanton town centre, along Wakefield Road, or in the Altofts area, we'll be there before you know it.",
    landmarks: "Normanton town centre, the A655, Wakefield Road, and Altofts",
    whyChooseUs: [
      "Our fastest response area — often at your door within 15 minutes",
      "Ideal for emergency callouts thanks to close proximity",
      "Serving Normanton, Altofts, and Woodlesford with same-day service",
    ],
    nearbyAreas: ["castleford", "pontefract", "ossett"],
    metaTitle: "Tyre Fitting Normanton | One Stop Tyres Wakefield",
    metaDescription: "Tyre fitting in Normanton — our fastest response area. Under 15 minutes arrival time. Call One Stop Tyres Wakefield for same-day service.",
  },
  {
    slug: "ossett",
    name: "Ossett",
    intro: "Located just west of Wakefield, Ossett is a quick hop along the A638 for our team. Whether you're on the high street, near Ossett Academy, or on the residential roads off Healey Road, we provide convenient mobile tyre fitting right to your door.",
    landmarks: "Ossett town centre, the A638, Ossett Academy, and Healey Road",
    whyChooseUs: [
      "Just minutes from our Wakefield base — rapid response guaranteed",
      "Popular with Ossett families who prefer the convenience of at-home fitting",
      "Flexible appointment times including early mornings and weekends",
    ],
    nearbyAreas: ["dewsbury", "horbury", "batley"],
    metaTitle: "Tyre Fitting Ossett | One Stop Tyres Wakefield",
    metaDescription: "Tyre fitting in Ossett with rapid response from Wakefield. Mobile fitting at your door. Call One Stop Tyres for competitive prices today.",
  },
  {
    slug: "batley",
    name: "Batley",
    intro: "Batley, home to the famous Batley Frontier and a thriving local community, is well within our regular service area. Coming from Wakefield via the A652, we cover the whole of Batley including the town centre, Birstall, and Upper Batley with full tyre services.",
    landmarks: "Batley town centre, the A652, Batley Frontier, and Birstall",
    whyChooseUs: [
      "Consistent coverage across Batley and neighbouring Birstall",
      "Experienced with the varied road surfaces and terrains in the Batley area",
      "Regular same-day availability for Batley customers",
    ],
    nearbyAreas: ["dewsbury", "ossett", "leeds"],
    metaTitle: "Tyre Fitting Batley | One Stop Tyres Wakefield",
    metaDescription: "Tyre fitting in Batley from One Stop Tyres Wakefield. Mobile service, same-day fitting, honest prices. Call today for fast tyre help.",
  },
  {
    slug: "horbury",
    name: "Horbury",
    intro: "Horbury sits right on Wakefield's western edge, making it one of the closest areas we serve. Whether you're along Horbury High Street, near Horbury Bridge, or on the residential streets off Quarry Hill, we can often be with you in just 10 minutes from receiving your call.",
    landmarks: "Horbury High Street, Horbury Bridge, Quarry Hill, and the Calder & Hebble Navigation",
    whyChooseUs: [
      "Virtually next door — some of the fastest arrival times we offer",
      "Perfect for quick lunchtime tyre changes at your home",
      "Strong local reputation with many repeat customers in Horbury",
    ],
    nearbyAreas: ["ossett", "dewsbury", "normanton"],
    metaTitle: "Tyre Fitting Horbury | One Stop Tyres Wakefield",
    metaDescription: "Tyre fitting in Horbury — just minutes from our base. Lightning-fast response. Call One Stop Tyres Wakefield for same-day tyre service.",
  },
];

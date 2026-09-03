export interface LocationFeature {
  title: string;
  desc: string;
}

export interface LocationStep {
  step: string;
  title: string;
  desc: string;
}

export interface LocationFAQ {
  q: string;
  a: string;
}

export interface LocationData {
  slug: string;
  city: string;
  tag: string;
  tagline: string;
  image: string;
  short: string;
  description: string;
  highlights: string[];
  includes: string[];
  features: LocationFeature[];
  process: LocationStep[];
  pricingNote: string;
  faqs: LocationFAQ[];
}

export const LOCATIONS_DATA: LocationData[] = [
  {
    slug: "chandigarh",
    city: "Chandigarh",
    tag: "Head Office",
    tagline:
      "Packers and movers in Chandigarh — home shifting, office relocation and vehicle transport from the city we're headquartered in.",
    image: "/hero/city.jpg",
    short:
      "Trusted packers and movers based in Chandigarh, offering home shifting, office relocation and vehicle transport with same-day availability.",
    description:
      "As a Chandigarh-based company, we know the city's sectors, markets and traffic patterns inside out — from the tight lanes of Sector 22 to the wide avenues of Sector 8. Being headquartered here means faster response times, more flexible scheduling and a team that's genuinely local, not a franchise operating out of another city.\n\nWhether you're moving between sectors, relocating an office near the IT Park, or shipping a vehicle out of the city, our Chandigarh team handles the entire move — packing, loading, transport and placement — with the same care that's built our reputation across North India.",
    highlights: [
      "Same-city moves completed within 24-48 hours",
      "Local crew that knows Chandigarh's sectors and access routes",
      "Free in-person survey available across all sectors",
    ],
    includes: [
      "Free pre-move survey at your Chandigarh address",
      "Professional packing with premium materials",
      "Furniture disassembly and reassembly",
      "Loading, transport and unloading",
      "Unpacking and room-by-room placement",
      "Comprehensive transit insurance",
      "Support for sector-to-sector and outstation moves",
      "Debris and packaging material removal",
    ],
    features: [
      { title: "Local Expertise", desc: "Our crews are based in Chandigarh and know the city's sectors, societies and access restrictions." },
      { title: "Fast Response", desc: "Being headquartered here means quicker quotes, surveys and move scheduling than an out-of-city provider." },
      { title: "Transit Insurance", desc: "Every move, local or long-distance, is covered by comprehensive transit insurance." },
      { title: "Government Verified", desc: "Licensed and registered, operating with full legal compliance." },
      { title: "Flexible Scheduling", desc: "Weekday, weekend or evening slots to fit around your schedule." },
      { title: "Transparent Pricing", desc: "An itemised quote before we start — no hidden charges added later." },
    ],
    process: [
      { step: "01", title: "Free Survey", desc: "We visit your Chandigarh home or office, or assess over a video call, to plan the move." },
      { step: "02", title: "Detailed Quote", desc: "Receive a transparent, itemised quote within 30 minutes." },
      { step: "03", title: "Professional Packing", desc: "Our crew arrives on schedule and packs everything with premium materials." },
      { step: "04", title: "Safe Transport", desc: "Your goods are moved in GPS-tracked vehicles, with updates throughout." },
      { step: "05", title: "Delivery & Setup", desc: "Unloading, unpacking and placement exactly where you want it." },
    ],
    pricingNote:
      "Chandigarh moving costs depend on distance within the city, home size and services chosen. Get an exact quote in 30 minutes.",
    faqs: [
      { q: "Do you cover all sectors of Chandigarh?", a: "Yes, we operate across every sector of Chandigarh as well as nearby areas — since our head office is based here, coverage and response times are fastest within the city itself." },
      { q: "Can I get a same-day move in Chandigarh?", a: "Same-city moves can often be scheduled within 24-48 hours depending on crew availability. Call us and we'll confirm the earliest slot." },
      { q: "Do you handle moves between Chandigarh and nearby cities?", a: "Yes, we regularly move households and offices between Chandigarh, Mohali, Panchkula and Zirkpur, in addition to long-distance relocations across India." },
      { q: "Is there a minimum move size?", a: "No minimum — we handle everything from a single room to a full house or office, anywhere in Chandigarh." },
    ],
  },
  {
    slug: "mohali",
    city: "Mohali",
    tag: "Tricity",
    tagline:
      "Packers and movers in Mohali — reliable home and office relocation across Sahibzada Ajit Singh Nagar's sectors and IT Park.",
    image: "/services/office-relocation.jpg",
    short:
      "Professional packing and moving services across Mohali's residential sectors, phases and IT Park, backed by our Chandigarh-based team.",
    description:
      "Mohali's mix of established residential phases, newer sectors and a fast-growing IT and business hub means every move looks a little different — a compact apartment in Phase 7, a family home in Sector 70, or an office relocation near the IT Park. Our team, based just minutes away in Chandigarh, is on the ground quickly and understands the layout of Mohali's phases and sectors well.\n\nFrom careful packing of household goods to coordinated office moves that avoid business downtime, we bring the same insured, GPS-tracked process to every Mohali relocation.",
    highlights: [
      "Coverage across all phases and sectors of Mohali",
      "Experience with IT Park and corporate office relocations",
      "Quick turnaround thanks to our nearby Chandigarh base",
    ],
    includes: [
      "Free pre-move survey anywhere in Mohali",
      "Professional packing with premium materials",
      "Furniture disassembly and reassembly",
      "Loading, transport and unloading",
      "Unpacking and room-by-room placement",
      "Comprehensive transit insurance",
      "After-hours scheduling for office moves near IT Park",
      "Debris and packaging material removal",
    ],
    features: [
      { title: "Phase & Sector Coverage", desc: "From Phase 1 through Phase 11 and the newer sectors, our crews know how to navigate Mohali efficiently." },
      { title: "IT Park Office Moves", desc: "Experience relocating offices and IT setups with minimal disruption to business hours." },
      { title: "Transit Insurance", desc: "Every move is fully insured from pickup to delivery." },
      { title: "Nearby Response", desc: "Our Chandigarh base means fast quotes and scheduling for Mohali moves." },
      { title: "Verified Crew", desc: "Background-checked professionals trained in safe handling techniques." },
      { title: "Transparent Pricing", desc: "A clear, itemised quote before your move begins." },
    ],
    process: [
      { step: "01", title: "Free Survey", desc: "We assess your Mohali home or office in person or via video call." },
      { step: "02", title: "Detailed Quote", desc: "An itemised, transparent quote delivered within 30 minutes." },
      { step: "03", title: "Professional Packing", desc: "Our crew packs everything securely using premium materials." },
      { step: "04", title: "Safe Transport", desc: "GPS-tracked vehicles move your goods with live updates." },
      { step: "05", title: "Delivery & Setup", desc: "Unloading, unpacking and placement exactly where you need it." },
    ],
    pricingNote:
      "Mohali moving costs depend on the phase/sector, distance and services chosen. Get an exact quote in 30 minutes.",
    faqs: [
      { q: "Do you serve all phases of Mohali?", a: "Yes, we cover every phase and sector of Mohali, including the newer developments and the IT Park area." },
      { q: "Can you move office IT equipment safely?", a: "Yes, we use anti-static packing and chain-of-custody handling for computers, servers and office electronics." },
      { q: "How quickly can you schedule a Mohali move?", a: "Since our base in Chandigarh is minutes away, we can often confirm and schedule within a day or two, subject to crew availability." },
      { q: "Do you also move between Mohali and other tricity areas?", a: "Yes, moves between Mohali, Chandigarh, Panchkula and Zirkpur are common for us and typically completed same-day." },
    ],
  },
  {
    slug: "panchkula",
    city: "Panchkula",
    tag: "Tricity",
    tagline:
      "Packers and movers in Panchkula — sector-wise home relocation, office moves and vehicle transport near Chandigarh.",
    image: "/services/home-relocation.jpg",
    short:
      "Dependable packing and moving services across Panchkula's sectors, from Sector 1 through the newer extensions, with insured transport.",
    description:
      "Panchkula's sector-based layout, similar in structure to Chandigarh, makes it a straightforward city to navigate once you know it well — and our crews do. Whether you're relocating within Panchkula's established sectors or moving to or from a newer extension, we plan the route, parking and access in advance so moving day goes smoothly.\n\nOur Panchkula moves cover everything from careful packing and furniture handling to vehicle transport for residents shifting cars or bikes along with their household goods.",
    highlights: [
      "Familiarity with Panchkula's sector layout and access points",
      "Combined household and vehicle transport available",
      "Fast scheduling from our nearby Chandigarh base",
    ],
    includes: [
      "Free pre-move survey anywhere in Panchkula",
      "Professional packing with premium materials",
      "Furniture disassembly and reassembly",
      "Loading, transport and unloading",
      "Unpacking and room-by-room placement",
      "Comprehensive transit insurance",
      "Optional car and bike transport alongside your move",
      "Debris and packaging material removal",
    ],
    features: [
      { title: "Sector Familiarity", desc: "We plan access, parking and timing around Panchkula's sector layout in advance." },
      { title: "Household & Vehicle Moves", desc: "Combine your home shifting with car or bike transport in one booking." },
      { title: "Transit Insurance", desc: "Every move is covered from pickup to final delivery." },
      { title: "Verified Crew", desc: "Trained, background-checked movers handling every item with care." },
      { title: "Nearby Response", desc: "Our Chandigarh base keeps quotes and scheduling fast for Panchkula moves." },
      { title: "Transparent Pricing", desc: "An itemised quote with no hidden charges added later." },
    ],
    process: [
      { step: "01", title: "Free Survey", desc: "We assess your Panchkula home in person or via video call to plan the move." },
      { step: "02", title: "Detailed Quote", desc: "A transparent, itemised quote within 30 minutes." },
      { step: "03", title: "Professional Packing", desc: "Our crew packs everything securely using premium materials." },
      { step: "04", title: "Safe Transport", desc: "GPS-tracked vehicles move your goods with live updates throughout." },
      { step: "05", title: "Delivery & Setup", desc: "Unloading, unpacking and placement exactly where you want it." },
    ],
    pricingNote:
      "Panchkula moving costs depend on the sector, distance and services chosen. Get an exact quote in 30 minutes.",
    faqs: [
      { q: "Do you cover all sectors of Panchkula?", a: "Yes, we serve every sector of Panchkula, including the newer extensions, with the same insured, GPS-tracked process." },
      { q: "Can I book vehicle transport along with my house move?", a: "Yes, car and bike transport can be added to any household move, so both arrive around the same time." },
      { q: "How soon can you schedule a Panchkula move?", a: "Being based nearby in Chandigarh, we can usually confirm a slot within a day or two, subject to availability." },
      { q: "Is packing material included in the quote?", a: "Yes, all packing materials — boxes, bubble wrap, tape and protective covers — are included in your itemised quote." },
    ],
  },
  {
    slug: "zirkpur",
    city: "Zirkpur",
    tag: "Tricity",
    tagline:
      "Packers and movers in Zirkpur — home and office relocation for the fast-growing residential hub on the Chandigarh-Ambala highway.",
    image: "/hero/road.jpg",
    short:
      "Reliable packing and moving services for Zirkpur's residential societies and highway-side commercial spaces, with fast turnaround.",
    description:
      "Zirkpur has grown quickly into one of the tricity area's most popular residential destinations, with new societies and apartment complexes continuing to come up along the Chandigarh-Ambala highway. Many of our Zirkpur moves involve first-time relocations into these newer societies, where we coordinate directly with security and facility teams to keep move-in day simple.\n\nWe also support moves for residents relocating out of Zirkpur to other cities, combining careful packing with insured, GPS-tracked transport for long-distance journeys.",
    highlights: [
      "Experience coordinating with newer residential societies",
      "Well-placed on the Chandigarh-Ambala highway for fast access",
      "Support for both local moves and long-distance relocations out of Zirkpur",
    ],
    includes: [
      "Free pre-move survey anywhere in Zirkpur",
      "Professional packing with premium materials",
      "Furniture disassembly and reassembly",
      "Loading, transport and unloading",
      "Unpacking and room-by-room placement",
      "Comprehensive transit insurance",
      "Coordination with society security and facility teams",
      "Debris and packaging material removal",
    ],
    features: [
      { title: "Society Coordination", desc: "We handle entry passes, lift bookings and timing with your residential society in advance." },
      { title: "Highway Access", desc: "Zirkpur's position on the Chandigarh-Ambala highway makes long-distance moves efficient to start." },
      { title: "Transit Insurance", desc: "Every move is fully insured from pickup to delivery." },
      { title: "Verified Crew", desc: "Background-checked professionals trained in safe handling techniques." },
      { title: "Nearby Response", desc: "Our Chandigarh base keeps quotes and scheduling fast for Zirkpur moves." },
      { title: "Transparent Pricing", desc: "An itemised quote before your move begins, with no hidden charges." },
    ],
    process: [
      { step: "01", title: "Free Survey", desc: "We assess your Zirkpur home or office in person or via video call." },
      { step: "02", title: "Detailed Quote", desc: "A transparent, itemised quote within 30 minutes." },
      { step: "03", title: "Professional Packing", desc: "Our crew packs everything securely using premium materials." },
      { step: "04", title: "Safe Transport", desc: "GPS-tracked vehicles move your goods with live updates throughout." },
      { step: "05", title: "Delivery & Setup", desc: "Unloading, unpacking and placement exactly where you want it." },
    ],
    pricingNote:
      "Zirkpur moving costs depend on distance, home size and services chosen. Get an exact quote in 30 minutes.",
    faqs: [
      { q: "Do you handle moves into newer Zirkpur societies?", a: "Yes, we regularly coordinate with security and facility teams at newer residential societies to keep move-in day simple." },
      { q: "Can you help with a long-distance move out of Zirkpur?", a: "Yes, Zirkpur's highway location makes it a convenient starting point for long-distance relocations, which we handle with the same insured, GPS-tracked process." },
      { q: "How soon can you schedule a Zirkpur move?", a: "Being based nearby in Chandigarh, we can usually confirm a slot within a day or two, subject to crew availability." },
      { q: "Is packing material included in the quote?", a: "Yes, all packing materials are included in your itemised quote, with no hidden charges added later." },
    ],
  },
];

export function getLocationBySlug(slug: string): LocationData | undefined {
  return LOCATIONS_DATA.find((l) => l.slug === slug);
}

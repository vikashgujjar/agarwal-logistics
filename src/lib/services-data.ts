export interface ServiceFeature {
  title: string;
  desc: string;
}

export interface ServiceStep {
  step: string;
  title: string;
  desc: string;
}

export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  tag: string;
  tagline: string;
  image: string;
  short: string;
  description: string;
  highlights: string[];
  includes: string[];
  features: ServiceFeature[];
  process: ServiceStep[];
  pricingNote: string;
  faqs: ServiceFAQ[];
}

export const SERVICES_DATA: ServiceData[] = [
  {
    slug: "domestic-shifting",
    title: "Domestic Shifting",
    tag: "Most Popular",
    tagline:
      "Complete home relocation across India — packed, transported and placed with care.",
    image: "/services/home-relocation.jpg",
    short:
      "Complete home relocation across India — packed, loaded, transported and unpacked by professionals.",
    description:
      "Our domestic shifting service covers everything from packing your first box to placing your last piece of furniture in your new home. With 10+ years of experience relocating 25K+ families, we've refined every step to be fast, safe and completely stress-free. Whether you're moving a single room or a 4 BHK, our trained crew handles everything.\n\nWe understand that moving to a new city can be overwhelming. That's why our dedicated move coordinators handle the logistics end-to-end, ensuring your belongings reach the destination on time and in pristine condition.",
    highlights: [
      "Door-to-door full service — packing to placement",
      "Comprehensive transit insurance included",
      "GPS-tracked transport with live updates",
    ],
    includes: [
      "Free pre-move survey and assessment",
      "Professional packing with premium materials",
      "Furniture disassembly and reassembly",
      "Loading, transport and unloading",
      "Unpacking and room-by-room placement",
      "Debris and packaging material removal",
      "Comprehensive transit insurance",
      "Real-time GPS tracking and updates",
    ],
    features: [
      { title: "Professional Packing", desc: "Bubble wrap, foam padding, corrugated boxes and stretch wrap for every item. Electronics get anti-static protection." },
      { title: "Transit Insurance", desc: "Every move is fully insured. Claims are processed quickly with minimal paperwork." },
      { title: "GPS Tracking", desc: "Track your shipment in real time. Know exactly where your belongings are at all times." },
      { title: "On-Time Delivery", desc: "We commit to a delivery window and honour it — every single time." },
      { title: "Verified Crew", desc: "Background-checked professionals trained in safe handling techniques." },
      { title: "Zero Hidden Charges", desc: "Transparent pricing with a full breakdown before we start. What we quote is what you pay." },
    ],
    process: [
      { step: "01", title: "Free Survey", desc: "Our expert visits your home or does a video call to assess volume and plan the move." },
      { step: "02", title: "Detailed Quote", desc: "Receive a transparent, itemised quote within 30 minutes. No hidden charges, ever." },
      { step: "03", title: "Professional Packing", desc: "Our trained crew arrives on the agreed date and packs everything with premium materials." },
      { step: "04", title: "Safe Transport", desc: "Your goods are loaded in GPS-tracked vehicles. Real-time updates throughout." },
      { step: "05", title: "Delivery & Setup", desc: "Unloading, unpacking, furniture assembly and placement exactly where you want it." },
    ],
    pricingNote:
      "Domestic shifting costs depend on distance, home size (BHK) and services chosen. Get an exact quote in 30 minutes.",
    faqs: [
      { q: "How far in advance should I book?", a: "We recommend booking 5–7 days in advance for local moves and 2–3 weeks for long-distance moves. We also accommodate last-minute moves subject to availability." },
      { q: "What happens if something is damaged during the move?", a: "All moves include transit insurance. We document every item before loading so any claim is straightforward and quick." },
      { q: "Do you disassemble and reassemble furniture?", a: "Yes — furniture disassembly, padding and reassembly at the destination are included as standard in our full-service package." },
      { q: "Can I pack some items myself?", a: "Absolutely. We offer full packing, partial packing, or supply-only. Just let us know your preference during the free survey." },
    ],
  },
  {
    slug: "corporate-relocation",
    title: "Corporate Relocation",
    tag: "Enterprise",
    tagline: "Office moves planned around your business — zero downtime, maximum precision.",
    image: "/services/office-relocation.jpg",
    short: "Office moves with zero business downtime. IT assets and furniture handled with precision.",
    description:
      "Corporate relocation is a different discipline — tight timelines, sensitive IT equipment and no tolerance for business disruption. Our dedicated corporate team plans every move around your schedule, often working nights and weekends so your team walks into a fully operational office on Monday morning.\n\nOur corporate moving experience allows us to efficiently manage large-scale multi-floor office relocations, carefully labelling every workstation and mapping the destination floor plan for a seamless transition.",
    highlights: [
      "After-hours and weekend moves to avoid disruption",
      "Dedicated move coordinator for your project",
      "IT asset management and secure chain-of-custody",
    ],
    includes: [
      "Site survey and detailed move plan",
      "Dedicated project coordinator",
      "After-hours and weekend scheduling",
      "IT equipment packing with anti-static protection",
      "Furniture disassembly and reassembly",
      "Floor plan mapping and placement",
      "Employee belongings management",
      "Post-move cleanup and debris removal",
    ],
    features: [
      { title: "Zero Downtime", desc: "Moves planned and executed after hours or over weekends so your business never skips a beat." },
      { title: "IT Asset Protection", desc: "Anti-static packing, labelled cables, chain-of-custody tracking for servers and peripherals." },
      { title: "Dedicated Coordinator", desc: "A single point of contact from planning through completion." },
      { title: "Floor Plan Mapping", desc: "We work from your new floor plan to place every item exactly where it belongs." },
      { title: "Business Continuity", desc: "Phased move strategies available so critical departments stay operational throughout." },
      { title: "Transit Insurance", desc: "Full coverage for all office equipment and assets, with documentation before and after." },
    ],
    process: [
      { step: "01", title: "Site Assessment", desc: "We visit both your current and new office to plan the layout, logistics and timeline." },
      { step: "02", title: "Move Plan", desc: "A detailed move plan with phasing, crew allocation and a firm schedule is shared with you." },
      { step: "03", title: "Pre-Move Labelling", desc: "Every item is labelled with department, destination and priority." },
      { step: "04", title: "Overnight Execution", desc: "Our crew works after hours to pack, load and transport everything safely." },
      { step: "05", title: "Full Reinstallation", desc: "Furniture assembled, IT set up, everything placed per your floor plan before opening." },
    ],
    pricingNote: "Corporate relocation is priced based on office size, workstation count and distance. Get a custom quote.",
    faqs: [
      { q: "Can you move our office without business downtime?", a: "Yes. We specialise in after-hours and weekend moves so your team arrives to a fully operational office." },
      { q: "How do you handle our IT equipment and servers?", a: "All IT equipment is packed with anti-static materials, cables photographed before disconnection, with a chain-of-custody log." },
      { q: "Do you handle large multi-floor office relocations?", a: "Yes. We use phased move strategies for large offices so critical departments stay live." },
      { q: "What is your experience with corporate moves?", a: "We've completed 70K+ corporate relocations across India, backed by a dedicated corporate team separate from residential crew." },
    ],
  },
  {
    slug: "car-bike-transport",
    title: "Car & Bike Transport",
    tag: "Insured",
    tagline: "Door-to-door vehicle shipping in enclosed carriers — GPS-tracked, zero scratches.",
    image: "/hero/road.jpg",
    short: "Door-to-door vehicle shipping in enclosed carriers. GPS-tracked, fully insured, zero scratches.",
    description:
      "Your vehicle is one of your most valuable possessions. We ship cars, bikes, SUVs and luxury vehicles in fully enclosed carriers with hydraulic loading ramps — no open-air exposure, no risk of road debris or weather damage. Every shipment includes comprehensive insurance and real-time GPS tracking.",
    highlights: [
      "Fully enclosed carriers — no open-air exposure",
      "Hydraulic ramp loading — zero scratches",
      "Full insurance and GPS tracking on every shipment",
    ],
    includes: [
      "Door-to-door pickup and delivery",
      "Fully enclosed carrier transport",
      "Hydraulic ramp loading and unloading",
      "Pre-shipment and post-delivery inspection report",
      "Comprehensive vehicle insurance",
      "Real-time GPS tracking",
      "SMS and update notifications",
      "All vehicle types — cars, bikes, SUVs, luxury",
    ],
    features: [
      { title: "Enclosed Carriers", desc: "No open-air exposure — your vehicle travels inside a fully enclosed trailer." },
      { title: "Zero Scratches", desc: "Hydraulic ramp loading means no ramps, no tyre damage." },
      { title: "GPS Tracking", desc: "Track your vehicle in real time throughout the journey." },
      { title: "Full Insurance", desc: "Comprehensive vehicle insurance with pre and post inspection reports." },
      { title: "All Vehicle Types", desc: "Cars, bikes, SUVs, sedans, hatchbacks and luxury vehicles." },
      { title: "Door-to-Door", desc: "We pick up from your address and deliver to your destination — no depot visits." },
    ],
    process: [
      { step: "01", title: "Booking", desc: "Share your vehicle type, pickup and delivery locations, and preferred dates." },
      { step: "02", title: "Pre-Shipment Inspection", desc: "Our team inspects and photographs your vehicle before loading. You get a copy." },
      { step: "03", title: "Enclosed Loading", desc: "Your vehicle is loaded onto the enclosed carrier using hydraulic ramps." },
      { step: "04", title: "GPS-Tracked Journey", desc: "Track your vehicle in real time with updates at key milestones." },
      { step: "05", title: "Delivery Inspection", desc: "Vehicle is unloaded and a post-delivery inspection is completed." },
    ],
    pricingNote: "Vehicle transport pricing depends on vehicle type, distance and carrier availability. Get an exact quote instantly.",
    faqs: [
      { q: "Will my car get scratched during transport?", a: "No. We use fully enclosed carriers with hydraulic ramp loading — your vehicle never touches exposed road surface." },
      { q: "Is my vehicle insured during transport?", a: "Yes. Comprehensive vehicle insurance is included, with pre and post inspection reports." },
      { q: "Should I leave fuel in the tank?", a: "Keep fuel to about one-quarter tank for safety during loading and unloading." },
      { q: "Can you transport luxury or vintage vehicles?", a: "Yes, we have specialised handling protocols for luxury, vintage and modified vehicles." },
    ],
  },
  {
    slug: "local-shifting",
    title: "Local Shifting",
    tag: "Same Day",
    tagline: "Fast within-city moves for homes and offices — same-day service available.",
    image: "/hero/city.jpg",
    short: "Fast within-city moves for homes and offices. Same-day service available, no minimum distance.",
    description:
      "Moving within the same city should be quick, affordable and hassle-free. Our local shifting service is built for exactly that — compact crews, right-sized vehicles and flexible timing to fit your schedule. No minimum distance requirement, same-day slots available.",
    highlights: [
      "Same-day service available — book early, move today",
      "Affordable flat-rate pricing with no surprises",
      "No minimum distance — even floor-to-floor moves",
    ],
    includes: [
      "Free on-call quote within 15 minutes",
      "Right-sized vehicle for your volume",
      "Professional packing on request",
      "Loading, transport and unloading",
      "Staircase and lift handling included",
      "Same-day and next-day slots available",
      "No minimum distance requirement",
      "Transit insurance available as add-on",
    ],
    features: [
      { title: "Same-Day Service", desc: "Book early and we can move you the same day — ideal for urgent situations." },
      { title: "Affordable Rates", desc: "Flat-rate pricing based on volume and distance. No hidden charges, no surge pricing." },
      { title: "No Minimum Distance", desc: "Moving from the ground floor to the third floor? We handle that too." },
      { title: "Flexible Timing", desc: "Morning, afternoon or evening slots available 7 days a week." },
      { title: "Staircase Handling", desc: "Our crew is trained for staircase and narrow-corridor moves." },
      { title: "Dedicated Crew", desc: "A dedicated local crew assigned to your move, not shared with other jobs." },
    ],
    process: [
      { step: "01", title: "Quick Quote", desc: "Call us and get a flat-rate quote in under 15 minutes based on volume and floors." },
      { step: "02", title: "Crew Assignment", desc: "A dedicated crew and right-sized vehicle are assigned and confirmed." },
      { step: "03", title: "Pack & Load", desc: "Our crew arrives at the agreed time and packs or loads carefully." },
      { step: "04", title: "Local Transport", desc: "Your goods are transported safely across the city." },
      { step: "05", title: "Unload & Place", desc: "Everything is unloaded and placed exactly where you want it." },
    ],
    pricingNote: "Local shifting is priced by volume, floors and any add-on packing services. Get a quote in 15 minutes.",
    faqs: [
      { q: "Can I really get a same-day move?", a: "Yes, if you book early and we have crew availability in your area. We'll confirm within 15 minutes." },
      { q: "Do you charge extra for upper floors?", a: "A small floor surcharge may apply for moves above the 3rd floor without a lift — always disclosed upfront." },
      { q: "What areas do you cover?", a: "We cover all areas within city limits and up to 50 km. Call us and we'll confirm coverage immediately." },
      { q: "Can you help me move just a few large items?", a: "Absolutely. There's no minimum volume requirement — one sofa or a full apartment, we handle it all." },
    ],
  },
  {
    slug: "packing-unpacking",
    title: "Packing & Unpacking",
    tag: "Premium Care",
    tagline: "Expert packing for every item — fragile, large or precious.",
    image: "/hero/packing.jpg",
    short: "Expert packing using bubble wrap, foam and corrugated boxes. Every item carefully wrapped and labelled.",
    description:
      "Packing is the most critical step in any move — done wrong, even the best transport can't prevent damage. Our packing specialists are trained in item-specific techniques, from antique furniture to fragile glassware to large-screen TVs.",
    highlights: [
      "Item-specific packing techniques for every object type",
      "Premium materials — bubble wrap, foam, anti-static, crating",
      "Labelled inventory list for every box packed",
    ],
    includes: [
      "Pre-packing assessment and material estimation",
      "Premium bubble wrap, foam padding and corrugated boxes",
      "Stretch wrap for furniture and appliances",
      "Anti-static packing for electronics",
      "Custom wooden crating for fragile or valuable items",
      "Systematic labelling and room-by-room inventory",
      "Optional unpacking at destination",
      "Packaging material removal after unpacking",
    ],
    features: [
      { title: "Premium Materials", desc: "Bubble wrap, multi-layer foam, heavy-duty boxes and stretch wrap — all included." },
      { title: "3-Layer Protection", desc: "Every fragile item gets three independent layers of protection." },
      { title: "Fragile Item Experts", desc: "Glassware, artwork, mirrors and antiques handled with custom techniques." },
      { title: "Item Labelling", desc: "Every box is labelled with room, contents and handling indicators." },
      { title: "Custom Crating", desc: "Wooden crating available for artwork, sculptures and extremely fragile valuables." },
      { title: "Inventory List", desc: "A detailed inventory of every item packed, with box numbers and contents." },
    ],
    process: [
      { step: "01", title: "Assessment", desc: "Our specialist assesses the number of items, fragility and material requirements." },
      { step: "02", title: "Material Delivery", desc: "All packing materials are delivered to your home before or on packing day." },
      { step: "03", title: "Systematic Packing", desc: "We pack room by room, fragiles in dedicated boxes with extra padding." },
      { step: "04", title: "Label & Inventory", desc: "Every box is numbered, labelled and recorded on an inventory list." },
      { step: "05", title: "Unpacking (Optional)", desc: "At your destination we unpack, remove materials and place items in each room." },
    ],
    pricingNote: "Packing-only and full packing & unpacking pricing depends on home size. Get an exact quote.",
    faqs: [
      { q: "Do you bring all the packing materials?", a: "Yes — bubble wrap, foam, boxes, stretch wrap, tape and any specialised materials are all provided by us." },
      { q: "Can you pack fragile and antique items safely?", a: "Absolutely. Custom wooden crating is available for extremely fragile or valuable items." },
      { q: "What if I only want packing, not moving?", a: "We offer packing-only service — we pack everything and you arrange your own transport, or book ours separately." },
      { q: "Do you unpack at the destination?", a: "Yes, unpacking is an optional add-on. We unpack, remove materials and place items in the rooms you specify." },
    ],
  },
  {
    slug: "warehouse-storage",
    title: "Warehouse Storage",
    tag: "Secure",
    tagline: "Secured, climate-controlled storage for short and long-term needs.",
    image: "/why-choose-us/warehouse-ops.jpg",
    short: "CCTV-monitored, climate-controlled storage. Short and long-term with full inventory management.",
    description:
      "Sometimes you need a safe place to store your belongings — between moves, during renovations, or for seasonal items. Our warehouses are climate-controlled, monitored round the clock, and staffed for security. Every item stored gets its own inventory entry so retrieval is fast and accurate.",
    highlights: [
      "Climate-controlled with temperature and humidity monitoring",
      "Round-the-clock CCTV surveillance and on-site security",
      "Inventory system — retrieve any item within hours",
    ],
    includes: [
      "Pickup from your location included",
      "Professional packing before storage",
      "Climate-controlled warehouse space",
      "24/7 CCTV surveillance and security",
      "Inventory management system",
      "Individual unit allocation for your goods",
      "Pest and moisture control",
      "Delivery back to you on request",
    ],
    features: [
      { title: "Climate Controlled", desc: "Temperature and humidity regulated warehouses, safe for electronics and furniture." },
      { title: "24/7 Security", desc: "Round-the-clock CCTV coverage and on-site security personnel." },
      { title: "Inventory Management", desc: "Every item is logged in our system — you get an itemised list." },
      { title: "Flexible Duration", desc: "Store for a week or a year, with no lock-in periods." },
      { title: "Pickup & Delivery", desc: "We pick up from your location and deliver back when you need it." },
      { title: "Fully Insured", desc: "Comprehensive insurance on all stored goods." },
    ],
    process: [
      { step: "01", title: "Space Assessment", desc: "Tell us what you need to store and we provide an instant monthly quote." },
      { step: "02", title: "Packing & Pickup", desc: "Our team packs your goods and transports them safely to our warehouse." },
      { step: "03", title: "Inventory Logging", desc: "Every item is documented and placed in your dedicated storage unit." },
      { step: "04", title: "Secure Storage", desc: "Your goods are stored in a climate-controlled, monitored unit for as long as you need." },
      { step: "05", title: "Retrieval & Delivery", desc: "When ready, we retrieve your goods and deliver them back to your address." },
    ],
    pricingNote: "Storage pricing depends on volume and duration. Get an exact quote based on your needs.",
    faqs: [
      { q: "Is there a minimum storage duration?", a: "Our minimum storage period is 15 days, after which you can retrieve your goods anytime with notice." },
      { q: "Can I access my stored items whenever I want?", a: "You can request specific items to be retrieved and delivered, or arrange warehouse access by appointment." },
      { q: "Are my goods insured while in storage?", a: "Yes. Comprehensive insurance is included for all items stored in our warehouses." },
      { q: "Is the storage really climate-controlled?", a: "Yes, our warehouses maintain stable temperature and humidity year-round." },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return SERVICES_DATA.find((s) => s.slug === slug);
}

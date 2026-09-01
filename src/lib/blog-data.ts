export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  featured?: boolean;
  tags: string[];
}

export const BLOG_CATEGORIES = [
  "All",
  "Packing Tips",
  "Guides",
  "Pricing",
  "Corporate",
  "Vehicle Transport",
  "Storage",
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "ultimate-packing-guide-home-shifting",
    title: "The Ultimate Packing Guide for Home Shifting in India",
    excerpt:
      "Everything you need to know about packing fragile items, electronics and furniture before your move — with a room-by-room checklist.",
    image: "/hero/packing.jpg",
    category: "Packing Tips",
    author: "Rahul Sharma",
    authorRole: "Senior Relocation Expert",
    date: "May 12, 2026",
    readTime: "8 min read",
    featured: true,
    tags: ["Packing", "Home Shifting", "Checklist"],
    content: `
## Why Packing Matters More Than Moving

Most relocation damage happens during packing, not transit. Proper packing protects your belongings and makes unpacking at your new home significantly faster.

## Room-by-Room Packing Strategy

### Kitchen
The kitchen is the most challenging room to pack. Start 2–3 days before moving day.

- **Fragile items first**: Wrap each plate individually in bubble wrap or packing paper. Stack plates vertically (on edge), never flat.
- **Glasses**: Fill the inside with crumpled paper, wrap externally, and mark boxes as FRAGILE.
- **Appliances**: Remove all detachable parts, wrap cords separately, and use original boxes where possible.

### Bedroom
- Wardrobe clothes can stay on hangers — wrap them in a large garbage bag from the bottom up.
- Vacuum-seal bulky items like duvets and pillows.
- Disassemble bed frames and label every bolt.

### Living Room
- Protect TV screens with a TV box or bubble wrap plus a blanket sandwich.
- Remove batteries from remotes.
- Photograph how your entertainment system is connected before dismantling.

## The Golden Rules

1. **Label every box** with room name, contents and handling instructions
2. **Never exceed 20 kg** per box — heavier items in smaller boxes
3. **Fill empty space** with crumpled paper to prevent shifting
4. **Pack heavy items at the bottom** of each box
5. **Load last, unload first**: boxes you need immediately

## What Agarwal Logistics Packers Handles For You

Our professional packers bring all materials, handle disassembly, and complete packing far faster than DIY — with a damage-free packing guarantee on our premium packing service.
    `,
  },
  {
    slug: "how-to-choose-best-packers-movers",
    title: "How to Choose the Best Packers and Movers in India: 7 Red Flags",
    excerpt:
      "Not all movers are equal. Here are the warning signs to watch for and the key questions to ask before you hire anyone.",
    image: "/services/home-relocation.jpg",
    category: "Guides",
    author: "Priya Nair",
    authorRole: "Customer Experience Lead",
    date: "April 28, 2026",
    readTime: "6 min read",
    tags: ["Guides", "Hiring Movers"],
    content: `
## Why This Decision Matters

Your belongings, your money and your moving day all depend on picking the right partner. Here are seven red flags that should make you look elsewhere.

## 7 Red Flags to Watch For

1. **No physical office address** — a legitimate mover has a verifiable head office, not just a phone number.
2. **Huge upfront cash demands** — anything above 30% advance before the survey is a warning sign.
3. **Verbal-only quotes** — always insist on a written, itemised quote.
4. **No insurance mentioned** — transit insurance should be offered, not hidden.
5. **Unmarked or rented vehicles with no branding** — professional movers use identifiable fleets.
6. **Pressure to book immediately** — legitimate companies give you time to decide.
7. **No GST invoice** — a registered company will always provide tax-compliant billing.

## Questions to Ask Before Booking

- **- Do you provide a free pre-move survey?**: A real survey (in-person or video) leads to an accurate quote.
- **- Is transit insurance included or optional?**: Know exactly what's covered.
- **- What is your claims process?**: Ask how damage claims are handled and within what timeframe.
- **- Can I see your GST registration?**: A legitimate business will share this without hesitation.

## Our Commitment

Agarwal Logistics Packers offers free surveys, itemised written quotes, GST invoicing and comprehensive transit insurance on every move — no exceptions.
    `,
  },
  {
    slug: "moving-cost-guide-india",
    title: "How Much Does It Cost to Move in India? A Complete 2026 Guide",
    excerpt:
      "A full cost breakdown for local and interstate moves — by home size, distance and add-on services.",
    image: "/hero/road.jpg",
    category: "Pricing",
    author: "Amit Verma",
    authorRole: "Pricing & Operations Manager",
    date: "April 10, 2026",
    readTime: "7 min read",
    tags: ["Pricing", "Cost Guide"],
    content: `
## What Determines Moving Cost

Four factors drive most of your final bill: distance, home size (BHK), volume of goods, and any add-on services like packing or storage.

## Typical Cost Ranges by Distance

| Distance | 1 BHK | 2 BHK | 3 BHK |
|----------|-------|-------|-------|
| Up to 50 km | ₹4,000 – ₹8,000 | ₹7,000 – ₹12,000 | ₹10,000 – ₹16,000 |
| 50 – 300 km | ₹8,000 – ₹15,000 | ₹12,000 – ₹20,000 | ₹16,000 – ₹28,000 |
| 300 – 700 km | ₹12,000 – ₹20,000 | ₹18,000 – ₹30,000 | ₹22,000 – ₹38,000 |
| 1200 km+ | ₹25,000 – ₹40,000 | ₹35,000 – ₹55,000 | ₹45,000 – ₹65,000 |

## What's Usually Extra

- **- GST**: 18% is applied on top of the base quote.
- **- Floor charges**: ₹300–600 per floor if there's no elevator.
- **- Toll taxes**: Charged at actual cost for intercity routes.
- **- Insurance**: 1.5% of declared value, optional but recommended.

## How to Get an Accurate Quote

The only way to get a truly accurate number is a free survey — either in person or over a video call — where our team assesses your actual volume and any access constraints.

## Ready for an Exact Number?

Visit our [pricing page](/pricing) for full rate cards, or request a personalised quote and we'll respond within 30 minutes.
    `,
  },
  {
    slug: "office-relocation-checklist-business",
    title: "Office Relocation Checklist: An 8-Week Plan for Zero Downtime",
    excerpt:
      "Moving a business is different from moving a home. Here's the week-by-week playbook we use for corporate relocations.",
    image: "/services/office-relocation.jpg",
    category: "Corporate",
    author: "Kavya Reddy",
    authorRole: "Corporate Relocation Lead",
    date: "March 22, 2026",
    readTime: "9 min read",
    tags: ["Corporate", "Office Moves", "Checklist"],
    content: `
## Why Office Moves Need a Different Plan

A home move can absorb a few days of chaos. A business cannot. Every hour of downtime has a real cost, so corporate relocations run on a strict schedule.

## The 8-Week Playbook

1. **- Weeks 8–6: Site assessment**: Survey both locations, confirm the floor plan, and appoint a single internal point of contact.
2. **- Weeks 6–4: Vendor and IT planning**: Coordinate with your IT team on server migration and cabling; plan furniture disassembly.
3. **- Weeks 4–2: Labelling and communication**: Every desk, cabinet and box gets a department + destination label. Notify staff of the schedule.
4. **- Week 1: Final walkthrough**: Confirm access, parking, lift bookings and any building management permissions at both ends.
5. **- Move weekend: Execution**: After-hours or weekend move, with IT equipment prioritised so systems are live before Monday.

## What Makes IT Equipment Different

Servers and networking gear need anti-static packing, photographed cable layouts before disconnection, and a chain-of-custody log — not just careful handling.

## Business Continuity Options

For larger offices, a **phased move** keeps critical departments operational while non-essential areas relocate first, minimising the impact on day-to-day operations.

## We Handle This Every Week

Our corporate relocation team runs office moves separately from residential crews, with a dedicated coordinator managing your project end to end.
    `,
  },
  {
    slug: "vehicle-transport-india-guide",
    title: "Car & Bike Transport in India: Safety Guide, Documents & Costs",
    excerpt:
      "Shipping a vehicle across states? Here's what documents you need, how enclosed carriers work, and typical pricing.",
    image: "/hero/road.jpg",
    category: "Vehicle Transport",
    author: "Rohit Sharma",
    authorRole: "Fleet Operations Head",
    date: "March 5, 2026",
    readTime: "6 min read",
    tags: ["Vehicle Transport", "Car Shipping"],
    content: `
## Enclosed vs Open Carriers

An **enclosed carrier** fully shields your vehicle from weather and road debris — the safer, slightly pricier option. **Open carriers** cost less but expose vehicles to dust and the elements.

## Documents You'll Need

- **- Registration certificate (RC)**: Original or certified copy.
- **- Insurance papers**: Valid policy covering the transit period.
- **- Valid ID proof**: Of the vehicle owner or authorised representative.
- **- Pre-shipment inspection report**: Issued by the transporter before loading.

## Before You Hand Over Your Vehicle

1. **- Keep fuel to about a quarter tank**: Reduces weight and fire risk during transit.
2. **- Remove all personal belongings**: The vehicle interior is not insured for personal items.
3. **- Photograph the vehicle from all angles**: Your own record, in addition to the transporter's inspection report.

## Typical Cost Ranges

| Route | Two-Wheeler | Sedan | SUV |
|-------|-------------|-------|-----|
| Up to 500 km | ₹3,000 – ₹5,000 | ₹6,000 – ₹10,000 | ₹8,000 – ₹13,000 |
| 500 – 1200 km | ₹5,000 – ₹8,000 | ₹10,000 – ₹18,000 | ₹13,000 – ₹22,000 |
| 1200 km+ | ₹8,000 – ₹12,000 | ₹18,000 – ₹28,000 | ₹22,000 – ₹35,000 |

## Zero Scratches, Guaranteed

Our hydraulic ramp loading and fully enclosed carriers mean your vehicle is never exposed to the road — every shipment is inspected before and after transit.
    `,
  },
  {
    slug: "warehouse-storage-guide-india",
    title: "When to Use Warehouse Storage — And What to Look For",
    excerpt:
      "Between moves, during renovations, or for seasonal items — here's how to decide if storage makes sense and what a good facility offers.",
    image: "/why-choose-us/warehouse-ops.jpg",
    category: "Storage",
    author: "Priya Nair",
    authorRole: "Customer Experience Lead",
    date: "February 18, 2026",
    readTime: "5 min read",
    tags: ["Storage", "Warehousing"],
    content: `
## When Storage Actually Makes Sense

- **- Gap between moves**: Your new home isn't ready but you need to vacate the old one.
- **- Renovation in progress**: Furniture needs to be out of the way for weeks or months.
- **- Seasonal items**: Off-season furniture, decor, or equipment you don't need year-round.

## What a Good Facility Should Offer

1. **- Climate control**: Stable temperature and humidity protect electronics, wood and artwork.
2. **- 24/7 security**: CCTV coverage and on-site personnel, not just a locked gate.
3. **- Inventory tracking**: Every item logged, so retrieval doesn't mean searching through everything you own.
4. **- No long lock-ins**: Flexible month-to-month terms rather than forced annual contracts.
5. **- Insurance included**: Your goods should be covered for the entire storage period.

## How Pricing Works

Storage is typically priced per 100 sq ft per month, with rates dropping the longer you commit — see our [pricing page](/pricing) for current rates.

## Retrieval Should Be Fast

A well-run facility can retrieve and deliver specific items back to you within 24 hours of request — you shouldn't have to visit the warehouse yourself.
    `,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

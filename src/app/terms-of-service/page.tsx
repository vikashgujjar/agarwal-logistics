import type { Metadata } from "next";
import { AlertTriangle } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Terms of Service | Agarwal Logistics Packers",
  description:
    "Read the Terms of Service governing the use of Agarwal Logistics Packers services and website.",
};

const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    content: [
      {
        subtitle: "",
        text: 'By accessing our website, requesting a quote, or booking any service from Agarwal Logistics Packers ("Company", "we", "our"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our services.',
      },
    ],
  },
  {
    title: "2. Services Provided",
    content: [
      { subtitle: "Scope of Services", text: "Agarwal Logistics Packers provides domestic relocation services including home shifting, corporate relocation, local shifting, car and bike transport, packing and unpacking, and warehouse storage across India." },
      { subtitle: "Service Availability", text: "Services are subject to availability in your specific location. We reserve the right to refuse service at our discretion, including where adequate access is unavailable, the route is not serviceable, or items are prohibited." },
      { subtitle: "Prohibited Items", text: "We do not transport: cash or negotiable instruments, perishable food items, live animals or plants, hazardous or flammable materials, illegal substances, firearms or weapons, or any item prohibited by Indian law." },
    ],
  },
  {
    title: "3. Quotes & Pricing",
    content: [
      { subtitle: "Quote Validity", text: "All quotes are estimates based on the information you supply. A quote is valid for 7 days from issue. Prices are subject to change if the scope of work changes." },
      { subtitle: "Taxes", text: "All prices are exclusive of GST (18%) unless explicitly stated otherwise. A full GST-compliant invoice will be provided upon completion of service." },
      { subtitle: "Additional Charges", text: "Toll taxes (at actual cost), stair/floor-carry charges (₹300–600 per floor if no elevator), and waiting charges may apply where applicable, and will always be communicated before proceeding." },
    ],
  },
  {
    title: "4. Booking & Cancellation",
    content: [
      { subtitle: "Booking Confirmation", text: "A booking is confirmed only upon receipt of a written confirmation from us and payment of any required advance." },
      { subtitle: "Customer Cancellation", text: "Cancellations made more than 48 hours before the scheduled move date receive a full refund of any advance paid. Cancellations within 24–48 hours incur a 25% cancellation fee." },
    ],
  },
  {
    title: "5. Customer Responsibilities",
    content: [
      { subtitle: "Accurate Information", text: "You are responsible for providing accurate information about your move, including addresses, floor access and a complete inventory of items." },
      { subtitle: "Valuables & Documents", text: "We strongly advise you personally transport cash, jewellery, important documents and irreplaceable items. We accept no liability for such items if included in our care." },
    ],
  },
  {
    title: "6. Liability & Insurance",
    content: [
      { subtitle: "Our Liability", text: "We take great care with all items in our custody. Our liability for damage or loss is limited to the declared value of the affected item, unless additional insurance has been purchased." },
      { subtitle: "Transit Insurance", text: "We offer optional transit insurance at 1.5% of the declared value of goods, arranged at the time of booking." },
      { subtitle: "Claims Process", text: `Damage claims must be raised at delivery by noting them on the delivery receipt before signing. Written claims must be submitted to info@agarwallogisticspackers.com within 7 days of delivery.` },
    ],
  },
  {
    title: "7. Payment Terms",
    content: [
      { subtitle: "Payment Schedule", text: "For most moves, we require a 20–30% advance at booking confirmation, with the balance payable upon completion of delivery." },
      { subtitle: "Accepted Payment Methods", text: "We accept bank transfers (NEFT/RTGS/IMPS), UPI, and major debit/credit cards. All payments must be made in Indian Rupees (INR)." },
    ],
  },
  {
    title: "8. Governing Law",
    content: [
      { subtitle: "", text: "These Terms of Service are governed by the laws of India. Any disputes are subject to the exclusive jurisdiction of courts located in Chandigarh, India." },
    ],
  },
  {
    title: "9. Amendments",
    content: [
      { subtitle: "", text: "We reserve the right to amend these Terms of Service at any time. Changes are effective immediately upon posting to our website. Continued use of our services constitutes acceptance of the revised Terms." },
    ],
  },
  {
    title: "10. Contact",
    content: [
      { subtitle: "", text: "For any questions about these Terms, contact us at info@agarwallogisticspackers.com or call +91 99882 45009 during business hours (Monday–Saturday, 8:00 AM – 8:00 PM)." },
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <>
      <PageHero
        breadcrumb="Terms of Service"
        eyebrow="Last Updated: September 1, 2026"
        heading="Terms of"
        highlight="Service"
        description="Please read these terms carefully before using our services. They set out your rights and obligations as our customer."
        compact
      />

      <section className="py-10 sm:py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 px-6 py-5 rounded-2xl bg-orange/5 border border-orange/25 mb-12">
            <AlertTriangle size={20} className="text-orange shrink-0 mt-0.5" strokeWidth={2} />
            <p className="text-text-secondary text-sm leading-relaxed">
              These Terms constitute a legally binding agreement between you
              and Agarwal Logistics Packers. By using our services, you
              confirm that you have read, understood and agree to be bound by
              these Terms.
            </p>
          </div>

          <div className="space-y-10">
            {SECTIONS.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-extrabold text-navy mb-5 pb-3 border-b-2 border-border">
                  {section.title}
                </h2>
                <div className="space-y-5">
                  {section.content.map((item, i) => (
                    <div key={i}>
                      {item.subtitle && (
                        <h3 className="text-sm font-extrabold text-orange mb-1.5">
                          {item.subtitle}
                        </h3>
                      )}
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-5 px-7 py-6 rounded-2xl bg-navy">
            <div>
              <p className="font-bold text-white text-sm">Questions about our terms?</p>
              <p className="text-white/55 text-xs mt-1">Our team is happy to clarify anything.</p>
            </div>
            <div className="flex gap-3">
              <Button href="/contact" variant="primary">Contact Us</Button>
              <Button href="tel:+919988245009" variant="outline-light">Call Us</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Privacy Policy | Agarwal Logistics Packers",
  description:
    "Read how Agarwal Logistics Packers collects, uses and protects your personal information.",
};

const SECTIONS = [
  {
    title: "1. Information We Collect",
    content: [
      { subtitle: "Personal Information", text: "When you request a quote, book a service or contact us, we collect information such as your full name, phone number, email address, current address, destination address and preferred moving date." },
      { subtitle: "Usage Information", text: "We automatically collect information about how you interact with our website, including IP address, browser type and pages visited, through cookies and similar technologies." },
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: [
      { subtitle: "Service Delivery", text: "We use your information primarily to provide the relocation services you have requested — preparing quotes, scheduling moves, coordinating logistics and delivering support." },
      { subtitle: "Communication", text: "We use your contact details to send service updates, booking confirmations, invoices and responses to your enquiries. With your consent, we may also send promotional offers." },
    ],
  },
  {
    title: "3. Information Sharing & Disclosure",
    content: [
      { subtitle: "Service Partners", text: "To fulfil your move, we may share necessary information with our network of verified transport partners and logistics providers, contractually obligated to protect your data." },
      { subtitle: "No Sale of Data", text: "We do not sell, rent or trade your personal information to third-party marketers under any circumstances." },
    ],
  },
  {
    title: "4. Data Security",
    content: [
      { subtitle: "Security Measures", text: "We implement industry-standard technical and organisational security measures to protect your personal data, including encryption for data in transit and access controls." },
      { subtitle: "Data Retention", text: "We retain your personal information for as long as necessary to fulfil the purposes for which it was collected, including legal or accounting requirements." },
    ],
  },
  {
    title: "5. Cookies Policy",
    content: [
      { subtitle: "Types of Cookies We Use", text: "Essential cookies (required for the website to function), analytics cookies (to understand usage patterns) and preference cookies. We do not use advertising cookies from third-party ad networks." },
      { subtitle: "Managing Cookies", text: "You can control and delete cookies through your browser settings, though disabling essential cookies may affect website functionality." },
    ],
  },
  {
    title: "6. Your Rights",
    content: [
      { subtitle: "Access & Correction", text: "You have the right to request access to the personal data we hold about you and to request correction of any inaccurate information." },
      { subtitle: "Opt-Out", text: "You can opt out of marketing communications at any time by contacting us directly at info@agarwallogisticspackers.com." },
    ],
  },
  {
    title: "7. Third-Party Links",
    content: [
      { subtitle: "", text: "Our website may contain links to third-party websites (such as Google Maps or social media platforms). We are not responsible for the privacy practices of those websites." },
    ],
  },
  {
    title: "8. Changes to This Policy",
    content: [
      { subtitle: "", text: 'We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the updated policy on this page with a revised "Last Updated" date.' },
    ],
  },
  {
    title: "9. Contact Us",
    content: [
      { subtitle: "", text: "If you have any questions regarding this Privacy Policy, please contact us at info@agarwallogisticspackers.com or call +91 99882 45009. We will respond within 5 business days." },
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        breadcrumb="Privacy Policy"
        eyebrow="Last Updated: September 1, 2026"
        heading="Privacy"
        highlight="Policy"
        description="Your privacy matters to us. This policy explains what data we collect, how we use it, and how we keep it safe."
        compact
      />

      <section className="py-10 sm:py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 px-6 py-5 rounded-2xl bg-navy/5 border border-navy/10 mb-12">
            <ShieldCheck size={20} className="text-navy shrink-0 mt-0.5" strokeWidth={2} />
            <p className="text-text-secondary text-sm leading-relaxed">
              This Privacy Policy applies to Agarwal Logistics Packers and
              governs data collection and usage. By using our website or
              services, you consent to the data practices described in this
              policy.
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
              <p className="font-bold text-white text-sm">Have questions about your data?</p>
              <p className="text-white/55 text-xs mt-1">Our team responds within 5 business days.</p>
            </div>
            <Button href="mailto:info@agarwallogisticspackers.com" variant="primary">
              Email Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

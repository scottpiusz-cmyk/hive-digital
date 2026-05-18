import { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Stamp,
  FileText,
  Plane,
  Building2,
  MessageSquare,
} from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Services — Hive Digital Document Authentication",
  description:
    "Explore Hive Digital's services: Federal & State Background Checks, Apostille & Document Authentication, Local China PCC Reports, China Visa & Work Permit Assistance, China Business Registration, and Ancillary Services.",
  openGraph: {
    title: "Our Services — Hive Digital",
    description:
      "End-to-end document authentication and compliance support across 21+ countries.",
    type: "website",
  },
};

const services = [
  {
    icon: ShieldCheck,
    title: "Federal & State Background Checks",
    description:
      "Criminal record checks and identity verification from the United States, Canada, UK, Australia, and other jurisdictions — completed fast and returned securely.",
    features: [
      "FBI Identity History Summary Checks (U.S.)",
      "RCMP Criminal Record Checks (Canada)",
      "ACRO Police Certificates (UK)",
      "State-level Department of Justice checks",
    ],
  },
  {
    icon: Stamp,
    title: "Apostille & Document Authentication",
    link: "/services/apostille/",
    description:
      "Hague Apostille certification, Embassy / Consulate legalization, and notarization for degrees, teaching certificates, marriage licenses, and corporate documents accepted in 120+ member countries.",
    features: [
      "Hague Apostille (Convention member states)",
      "China: Hague Apostille (member since 2023)",
      "Vietnamese Embassy Legalization",
      "Thai MOFA & Embassy Authentication",
    ],
  },
  {
    icon: FileText,
    title: "Local China PCC Reports (Police Clearance)",
    description:
      "We obtain Police Clearance Certificates (PCC) from Public Security Bureau (PSB) offices in Beijing, Shanghai, Shenzhen, and other cities across China for former residents.",
    features: [
      "Beijing PSB Non-Criminal Record Certificate",
      "Shanghai PSB Police Clearance Certificate",
      "Shenzhen PSB Criminal Record Check",
      "Other cities available — inquire for availability",
    ],
  },
  {
    icon: Plane,
    title: "China Visa & Work Permit Assistance",
    description:
      "End-to-end document preparation and guidance for China Z-Visa applications and Residence Permit documentation — integrated with our business registration and ancillary support services.",
    features: [
      "China Z-Visa document preparation & review",
      "Residence Permit application support",
      "Document translation & certification",
      "Integration with WFOE/JV registration",
    ],
  },
  {
    icon: Building2,
    title: "China Business Registration",
    description:
      "From WFOE and JV setup to post-registration operational compliance, we help foreign companies establish and run a legal entity in China.",
    features: [
      "WFOE registration",
      "Joint Venture setup & structuring",
      "Business license & Certificate application",
      "Chop carving & bank account opening",
    ],
  },
  {
    icon: MessageSquare,
    title: "Ancillary Services",
    description:
      "Back-office operational support to keep your China entity running smoothly — HR, payroll, finance, tax compliance, and office selection.",
    features: [
      "HR & payroll administration",
      "Finance, accounting & tax compliance",
      "Office selection & lease coordination",
      "Ongoing operational consulting",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-24 pb-16 px-6 lg:px-12 bg-hive-bg min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-white mb-4">
            Our Services
          </h1>
          <p className="text-hive-muted text-lg max-w-2xl mx-auto">
            End-to-end document authentication and compliance support across
            Asia and beyond. Every service is managed by specialists who
            understand the nuances of each destination country.
          </p>
        </div>

        {/* Apostille image highlight */}
        <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden mb-16">
          <Image
            src="/apostille-macro.jpg"
            alt="Apostille certification process"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-hive-bg/90 via-hive-bg/50 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="px-8 md:px-12 max-w-xl">
              <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight mb-2">
                Apostille & Authentication
              </h2>
              <p className="text-hive-muted">
                The gold standard in international document certification. We
                handle Hague Apostille and embassy legalization for 120+
                countries.
              </p>
            </div>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-hive-surface border border-hive-border rounded-2xl p-6 hover:border-hive-accent/30 transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-hive-accent/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-hive-accent" />
                  </div>
                  <h2 className="text-lg font-semibold text-white">
                    {service.title}
                  </h2>
                </div>
                <p className="text-hive-muted text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-hive-dim"
                    >
                      <span className="w-1 h-1 rounded-full bg-hive-accent mt-2 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* China PCC Requirements Box */}
        <div className="mt-12 bg-hive-elevated border border-hive-accent/30 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-hive-accent uppercase tracking-tight mb-4">
            China PCC Report Requirements
          </h2>
          <p className="text-hive-muted mb-4">
            To obtain a Police Clearance Certificate from a Chinese city, the
            applicant must provide:
          </p>
          <ul className="space-y-2 mb-4">
            {[
              "Proof of time spent living in China (rental contracts, employer letters, etc.)",
              "Copy of valid visa held during residence period",
              "Residence permit proof",
              "Passport copy and current contact information",
            ].map((req, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-hive-muted text-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-hive-accent mt-1.5 shrink-0" />
                {req}
              </li>
            ))}
          </ul>
          <p className="text-hive-dim text-sm">
            Processing time and availability vary by city. Contact us to confirm
            eligibility for your specific situation.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center bg-hive-surface border border-hive-border rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-3 uppercase tracking-tight">
            Need a Custom Solution?
          </h2>
          <p className="text-hive-muted mb-6">
            Every document authentication journey is unique. Contact us for a
            tailored quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:sales@hiverelo.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-hive-accent text-hive-bg font-semibold rounded-xl hover:bg-hive-accent-hover transition-colors"
            >
              Email sales@hiverelo.com
            </a>
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-hive-border text-white font-semibold rounded-xl hover:border-hive-accent/50 transition-colors"
            >
              Contact Page
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

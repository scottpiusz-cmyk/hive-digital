"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Stamp,
  FileText,
  Plane,
  Building2,
  ChevronDown,
  MessageSquare,
} from "lucide-react";
import Image from "next/image";

const services = [
  {
    id: "background-checks",
    icon: ShieldCheck,
    title: "Federal & State Background Checks",
    summary:
      "Criminal record checks and identity verification from the United States, Canada, UK, Australia, and other jurisdictions — completed fast and returned securely.",
    details: [
      "FBI Identity History Summary Checks (U.S.)",
      "RCMP Criminal Record Checks (Canada)",
      "ACRO Police Certificates (UK)",
      "State-level Department of Justice checks",
      "Secure digital delivery with tracking",
    ],
  },
  {
    id: "apostille",
    icon: Stamp,
    title: "Apostille & Document Authentication",
    summary:
      "Hague Apostille certification, Embassy / Consulate legalization, and notarization for degrees, teaching certificates, marriage licenses, and corporate documents accepted in 120+ member countries.",
    details: [
      "Hague Apostille (Convention member states)",
      "Chinese Embassy / Consulate Authentication",
      "Vietnamese Embassy Legalization",
      "Thai MOFA & Embassy Authentication",
      "Korean & Japanese Consulate Authentication",
      "Notarization and certified translation coordination",
    ],
  },
  {
    id: "china-pcc",
    icon: FileText,
    title: "Local China PCC Reports (Police Clearance)",
    summary:
      "We obtain Police Clearance Certificates (PCC) from Public Security Bureau (PSB) offices in Beijing, Shanghai, Shenzhen, and other cities across China for former residents.",
    details: [
      "Beijing PSB Non-Criminal Record Certificate",
      "Shanghai PSB Police Clearance Certificate",
      "Shenzhen PSB Criminal Record Check",
      "Other cities available — inquire for availability",
      "Notarization and English translation included",
    ],
  },
  {
    id: "china-visa",
    icon: Plane,
    title: "China Visa & Work Permit Assistance",
    summary:
      "End-to-end document preparation and guidance for China Z-Visa applications and Residence Permit documentation — a specialized service integrated with our business registration and ancillary support.",
    details: [
      "China Z-Visa document preparation & review",
      "Residence Permit application support",
      "Document translation & certification",
      "Integration with WFOE/JV business registration",
      "Post-registration employee onboarding support",
    ],
  },
  {
    id: "business-reg",
    icon: Building2,
    title: "China Business Registration",
    summary:
      "From WFOE and JV setup to post-registration operational compliance, we help foreign companies establish and run a legal entity in China.",
    details: [
      "WFOE (Wholly Foreign-Owned Enterprise) registration",
      "Joint Venture setup & structuring",
      "Business license & Certificate application",
      "Chop carving & bank account opening",
      "Post-registration tax & compliance setup",
    ],
  },
  {
    id: "ancillary",
    icon: MessageSquare,
    title: "Ancillary Services",
    summary:
      "Back-office operational support to keep your China entity running smoothly — HR, payroll, finance, tax compliance, and office selection.",
    details: [
      "HR & payroll administration",
      "Finance, accounting & tax compliance",
      "Office selection & lease coordination",
      "Ongoing operational consulting",
    ],
  },
];

export default function ServicePipeline() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="services" className="py-24 px-6 lg:px-12 bg-hive-bg relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white mb-4">
            Our Services
          </h2>
          <p className="text-hive-muted max-w-2xl mx-auto text-lg">
            End-to-end document authentication and compliance support across
            Asia and beyond.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isOpen = openId === service.id;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-hive-surface border border-hive-border rounded-2xl overflow-hidden hover:border-hive-accent/40 transition-all duration-300"
              >
                {service.id === "apostille" && (
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src="/apostille-macro.jpg"
                      alt="Apostille certification"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-hive-surface to-transparent" />
                  </div>
                )}
                <button
                  onClick={() => setOpenId(isOpen ? null : service.id)}
                  className="w-full p-6 text-left flex items-start gap-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-hive-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-hive-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {service.title}
                    </h3>
                    <p className="text-hive-muted text-sm leading-relaxed">
                      {service.summary}
                    </p>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-hive-dim shrink-0 mt-1 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0">
                        {service.id === "china-pcc" && (
                          <div className="bg-hive-elevated rounded-xl p-4 mb-4 border border-hive-border">
                            <h4 className="text-sm font-semibold text-hive-accent uppercase tracking-wider mb-2">
                              Requirements
                            </h4>
                            <p className="text-hive-muted text-sm">
                              Applicant must provide proof of time spent living
                              in China under a valid visa with residence permit
                              proof. Processing time and availability vary by
                              city — contact us to confirm eligibility.
                            </p>
                          </div>
                        )}
                        <ul className="space-y-2.5">
                          {service.details.map((detail, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 text-sm text-hive-muted"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-hive-accent mt-1.5 shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-5 pt-4 border-t border-hive-border">
                          <p className="text-hive-dim text-xs">
                            Pricing varies by document volume and destination.
                            Contact us for a tailored quote.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

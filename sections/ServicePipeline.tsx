"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ShieldCheck,
  Stamp,
  FileText,
  Fingerprint,
  Plane,
  Building2,
  ChevronDown,
  MessageSquare,
  LucideIcon,
} from "lucide-react";
import Image from "next/image";

interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  image?: string;
  summary: string;
  details: string[];
  link: string;
}

const services: Service[] = [
  {
    id: "fingerprinting",
    icon: Fingerprint,
    title: "Fingerprinting Solutions",
    image: "/fingerprinting.jpg",
    summary:
      "Fast, convenient, and accurate fingerprinting solutions in Shanghai, Beijing, Chengdu and other major cities across China.",
    details: [
      "FBI-compliant fingerprinting",
      "Traditional ink-based fingerprinting",
      "Available in Shanghai, Beijing, Chengdu",
      "Other cities by appointment — inquire",
      "Digital delivery within 24 hours",
      "Hard copies via secure courier",
    ],
    link: "/shanghai-fingerprinting/",
  },
  {
    id: "background-checks",
    icon: ShieldCheck,
    title: "Federal & State Background Checks",
    image: "/background-checks.jpg",
    summary:
      "Criminal record checks and identity verification from the United States, Canada, UK, Australia, and other jurisdictions.",
    details: [
      "FBI Identity History Summary Checks (U.S.)",
      "RCMP Criminal Record Checks (Canada)",
      "ACRO Police Certificates (UK)",
      "State-level Department of Justice checks",
      "Secure digital delivery with tracking",
    ],
    link: "/services/background-checks/",
  },
  {
    id: "apostille",
    icon: Stamp,
    title: "Apostille & Document Authentication",
    image: "/apostille-auth-combined.jpg",
    summary:
      "Hague Apostille certification, Embassy / Consulate legalization, and notarization for degrees, teaching certificates, marriage licenses, and corporate documents.",
    details: [
      "Hague Apostille (Convention member states)",
      "Chinese Embassy / Consulate Authentication",
      "Vietnamese Embassy Legalization",
      "Thai MOFA & Embassy Authentication",
      "Korean & Japanese Consulate Authentication",
      "Notarization and certified translation coordination",
    ],
    link: "/services/apostille/",
  },
  {
    id: "china-pcc",
    icon: FileText,
    title: "Local China PCC Reports (Police Clearance)",
    image: "/china-pcc.jpg",
    summary:
      "Police Clearance Certificates (PCC) from Public Security Bureau offices in Beijing, Shanghai, Shenzhen, and other Chinese cities.",
    details: [
      "Beijing PSB Non-Criminal Record Certificate",
      "Shanghai PSB Police Clearance Certificate",
      "Shenzhen PSB Criminal Record Check",
      "Other cities available — inquire for availability",
      "Notarization and English translation included",
    ],
    link: "/services/china-pcc/",
  },
  {
    id: "china-visa",
    icon: Plane,
    title: "China Work Permit & Visa Documents",
    image: "/china-visa.jpg",
    summary:
      "Document preparation and Apostille guidance for records employers may require before beginning China work permit and visa procedures.",
    details: [
      "Employer requirement review",
      "Criminal background check selection",
      "Degree and teaching qualification Apostilles",
      "Marriage and birth certificate Apostilles for dependents",
      "Name consistency review",
    ],
    link: "/services/china-visa/",
  },
  {
    id: "business-reg",
    icon: Building2,
    title: "China Business Registration",
    summary:
      "From WFOE and JV setup to post-registration compliance, we help foreign companies establish a legal entity in China.",
    details: [
      "WFOE registration",
      "Joint Venture setup & structuring",
      "Business license & Certificate application",
      "Chop carving & bank account opening",
      "Post-registration tax & compliance setup",
    ],
    link: "/services/business-reg/",
  },
  {
    id: "ancillary",
    icon: MessageSquare,
    title: "Ancillary Services",
    summary:
      "Back-office operational support — HR, payroll, finance, tax compliance, and office selection.",
    details: [
      "HR & payroll administration",
      "Finance, accounting & tax compliance",
      "Office selection & lease coordination",
      "Ongoing operational consulting",
    ],
    link: "/services/ancillary/",
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
            const isFingerprinting = service.id === "fingerprinting";
            const cardContent = (
              <>
                {service.image && (
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-hive-surface via-hive-surface/60 to-transparent" />
                  </div>
                )}
                <div
                  className={`w-full p-6 text-left flex items-start gap-4 ${isFingerprinting ? "" : "cursor-pointer"}`}
                  onClick={isFingerprinting ? undefined : () => setOpenId(isOpen ? null : service.id)}
                >
                  <div className="w-11 h-11 rounded-xl bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-red-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {service.title}
                    </h3>
                    <p className="text-hive-muted text-sm leading-relaxed">
                      {service.summary}
                    </p>
                    {isFingerprinting && (
                      <span className="inline-flex items-center gap-1 text-red-400 text-xs font-semibold mt-2 group-hover:gap-2 transition-all">
                        Learn more <span aria-hidden="true">→</span>
                      </span>
                    )}
                    {!isFingerprinting && (
                      <Link
                        href={service.link}
                        onClick={(event) => event.stopPropagation()}
                        className="inline-flex items-center gap-1 text-red-400 text-xs font-semibold mt-2 hover:text-white transition-colors"
                      >
                        View service details <span aria-hidden="true">→</span>
                      </Link>
                    )}
                  </div>
                  {!isFingerprinting && (
                    <ChevronDown
                      className={`w-5 h-5 text-hive-dim shrink-0 mt-1 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  )}
                </div>
                {!isFingerprinting && (
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
                              <h4 className="text-sm font-semibold text-red-500 uppercase tracking-wider mb-2">
                                Requirements
                              </h4>
                              <p className="text-hive-muted text-sm">
                                Applicant must provide proof of time spent living
                                in China under a valid visa with residence permit
                                proof.
                              </p>
                            </div>
                          )}
                          <ul className="space-y-2.5">
                            {service.details.map((detail, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-3 text-sm text-hive-muted"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
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
                )}
              </>
            );
            return isFingerprinting ? (
              <Link
                key={service.id}
                href={service.link}
                className="group bg-hive-surface border border-hive-border rounded-2xl overflow-hidden hover:border-red-500/30 hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300 hover:scale-[1.02] block"
              >
                {cardContent}
              </Link>
            ) : (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group bg-hive-surface border border-hive-border rounded-2xl overflow-hidden hover:border-red-500/30 hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300 hover:scale-[1.02]"
              >
                {cardContent}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

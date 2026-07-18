import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Clock, Shield, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "China Fingerprinting Solutions | Hive Digital",
  description:
    "Fingerprinting solutions in Shanghai and selected cities across China for FBI, RCMP and other fingerprint-based background checks. Availability varies by location and service type.",
  alternates: {
    canonical: "/shanghai-fingerprinting/",
    languages: {
      en: "/shanghai-fingerprinting/",
      "zh-CN": "/zh/shanghai-fingerprinting/",
    },
  },
  openGraph: {
    title: "China Fingerprinting Solutions | Hive Digital",
    description:
      "Fingerprinting support in Shanghai and selected cities across China for FBI, RCMP and other fingerprint-based document requirements.",
  },
};

const cities = [
  { name: "Shanghai", status: "Primary", note: "Contact us to schedule" },
  { name: "Beijing", status: "Confirm", note: "Availability varies" },
  { name: "Chengdu", status: "Confirm", note: "Availability varies" },
  { name: "Shenzhen", status: "Confirm", note: "Availability varies" },
  { name: "Guangzhou", status: "Confirm", note: "Availability varies" },
  { name: "Nanjing", status: "Confirm", note: "Availability varies" },
  { name: "Kunming", status: "Confirm", note: "Availability varies" },
  { name: "Other Cities", status: "Inquire", note: "Contact us for availability" },
];

const useCases = [
  {
    title: "FBI Background Checks",
    description:
      "Fingerprinting for FBI Identity History Summary Checks. Electronic submission directly to FBI CJIS.",
  },
  {
    title: "RCMP / CPIC Background Checks",
    description:
      "Fingerprint-based criminal background checks for Canadian citizens and permanent residents. We confirm the required Canadian record before scheduling.",
  },
  {
    title: "China Visa & Work Permit",
    description:
      "Fingerprinting required for Z-Visa applications, residence permits, and work authorization documentation. Some cities — including Suzhou, Kunshan, Ningbo, and Xiamen — may require fingerprint-based reports. HR departments may also enforce stricter internal due diligence policies.",
  },
  {
    title: "PR Card: Permanent Residence",
    description:
      "Fingerprinting services for Canadian and U.S. permanent residence applicants as part of their immigration documentation requirements.",
  },
  {
    title: "Police Clearance (PCC)",
    description:
      "Fingerprint capture for Police Clearance Certificates from the US, Canada, and other jurisdictions.",
  },
];

export default function FingerprintingPage() {
  return (
    <main className="pt-24 pb-16 px-6 lg:px-12 bg-hive-bg min-h-screen">
      <div className="max-w-5xl mx-auto">
        <nav className="mb-8">
          <Link
            href="/services/"
            className="text-hive-muted hover:text-white text-sm transition-colors"
          >
            ← All Services
          </Link>
        </nav>

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full bg-red-500/10 text-red-400 border border-red-500/20">
              On-Site Service
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-white mb-6">
            China Fingerprinting Solutions
          </h1>
          <p className="text-hive-muted text-lg max-w-3xl leading-relaxed mb-8">
            Shanghai is Hive&apos;s primary fingerprinting location. We also
            assist clients in Beijing, Chengdu, Shenzhen, Guangzhou, Nanjing,
            Kunming, and other cities across China. Available capture methods
            and appointment options vary by location and service type, so we
            confirm the requirements before scheduling.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:sales@hiverelo.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-500 transition-colors"
            >
              Book Appointment
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/8613764322474"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-hive-border text-white font-semibold rounded-xl hover:border-red-500/50 transition-colors"
            >
              WhatsApp: +86 13764322474
            </a>
          </div>
        </div>

        <div className="bg-hive-surface border border-hive-border rounded-2xl p-6 lg:p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-3 uppercase tracking-tight flex items-center gap-3">
            <MapPin className="w-6 h-6 text-red-500" />
            Service Locations
          </h2>
          <p className="mb-6 max-w-3xl text-sm leading-relaxed text-hive-muted">
            Our fingerprinting solutions are available in Shanghai, Beijing,
            Chengdu, Shenzhen, Guangzhou, Nanjing and Kunming. Availability may
            vary depending on location and service type.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {cities.map((city) => (
              <div
                key={city.name}
                className="bg-hive-bg border border-hive-border rounded-xl p-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-semibold text-sm">
                    {city.name}
                  </span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      city.status === "Primary"
                        ? "bg-green-500/10 text-green-400"
                        : "bg-yellow-500/10 text-yellow-400"
                    }`}
                  >
                    {city.status}
                  </span>
                </div>
                <p className="text-hive-dim text-xs">{city.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight flex items-center gap-3">
            <Shield className="w-6 h-6 text-red-500" />
            Common Use Cases
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((use) => (
              <div
                key={use.title}
                className="bg-hive-surface border border-hive-border rounded-2xl p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-red-500 shrink-0" />
                  {use.title}
                </h3>
                <p className="text-hive-muted text-sm leading-relaxed">
                  {use.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-hive-surface border border-hive-border rounded-2xl p-6 lg:p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight flex items-center gap-3">
            <Clock className="w-6 h-6 text-red-500" />
            How It Works
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                step: "1",
                title: "Book Appointment",
                text: "Contact us via WeCom/WeChat or email. We confirm the service type and location before scheduling.",
              },
              {
                step: "2",
                title: "On-Site Fingerprinting",
                text: "Our technician captures your fingerprints using FBI-compliant electronic or ink method.",
              },
              {
                step: "3",
                title: "Receive Documents",
                text: "Digital files sent securely within 24 hours. Hard copies available by courier.",
              },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-3">
                  <span className="text-red-500 font-bold">{s.step}</span>
                </div>
                <h3 className="text-white font-semibold mb-2">{s.title}</h3>
                <p className="text-hive-muted text-sm">{s.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-red-600/10 border border-red-500/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Ready to Book Your Appointment?
          </h2>
          <p className="text-hive-muted mb-6 max-w-xl mx-auto">
            WeCom/WeChat is the fastest way to reach us. We typically respond
            within 2 hours during business hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:sales@hiverelo.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-500 transition-colors"
            >
              Email sales@hiverelo.com
            </a>
            <a
              href="/contact/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-hive-border text-white font-semibold rounded-xl hover:border-red-500/50 transition-colors"
            >
              Contact Page
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

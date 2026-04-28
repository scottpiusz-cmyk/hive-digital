import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Hive Digital — Crossborder Document Specialists",
  description:
    "Learn about Hive Digital. With 15+ years of experience across 21+ countries, we specialize in apostille, document authentication, background checks, China visa assistance, and business registration for international hiring.",
  openGraph: {
    title: "About Hive Digital — Crossborder Document Specialists",
    description:
      "15+ years of experience across 21+ countries. Apostille, authentication, background checks, and China business services.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main className="pt-24 pb-16 px-6 lg:px-12 bg-hive-bg min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-white mb-8">
          About Hive Digital
        </h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-hive-muted text-lg leading-relaxed mb-8">
            Hive Digital is a crossborder document specialist firm headquartered
            in Shanghai, China. For over 15 years, we have helped individuals,
            schools, and corporations navigate the complex world of international
            document authentication — from apostille and embassy legalization to
            background checks, China visa assistance, and business registration.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-hive-surface border border-hive-border rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight">
                Our Mission
              </h2>
              <p className="text-hive-muted leading-relaxed">
                To eliminate the friction and confusion from crossborder document
                processing. We believe that authenticating a degree, obtaining a
                police clearance, or setting up a business entity abroad should
                not require navigating bureaucratic mazes alone.
              </p>
            </div>
            <div className="bg-hive-surface border border-hive-border rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight">
                Our Reach
              </h2>
              <p className="text-hive-muted leading-relaxed">
                We operate across 21+ countries including China, Vietnam,
                Thailand, South Korea, Japan, Taiwan, Indonesia, and beyond. Our
                network of notaries, consulates, and local partners ensures
                accurate, compliant processing in every jurisdiction.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight">
            Why Choose Hive Digital?
          </h2>
          <ul className="space-y-3 mb-12">
            {[
              "15+ years of hands-on experience in document authentication",
              "Direct relationships with embassies, consulates, and government offices",
              "End-to-end service from consultation to global delivery",
              "Real-time tracking and transparent communication via WeCom/WeChat",
              "99% success rate with thousands of completed cases",
              "Support for 21+ countries and counting",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-hive-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-hive-accent mt-2 shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight">
            Industries We Serve
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {[
              "International Schools",
              "Corporate HR Teams",
              "Law Firms",
              "Tech Companies",
              "Healthcare Organizations",
              "Government Contractors",
              "NGOs & Nonprofits",
              "Relocating Professionals",
              "Startups & Entrepreneurs",
            ].map((industry) => (
              <div
                key={industry}
                className="bg-hive-surface border border-hive-border rounded-xl px-4 py-3 text-hive-muted text-sm text-center"
              >
                {industry}
              </div>
            ))}
          </div>

          <div className="bg-hive-elevated border border-hive-border rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3 uppercase tracking-tight">
              Ready to Get Started?
            </h2>
            <p className="text-hive-muted mb-6">
              Contact us for a free consultation and quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:sales@hiverelo.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-hive-accent text-hive-bg font-semibold rounded-xl hover:bg-hive-accent-hover transition-colors"
              >
                Email Us
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
      </div>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Fingerprint,
  Globe2,
  GraduationCap,
  Landmark,
  MapPin,
  Plane,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Fingerprinting Services Across Asia | Hive Digital",
  description:
    "Fingerprinting support across China, South Korea, Japan and Asia-Pacific for FBI, RCMP and international background checks. Confirm the correct process first.",
  alternates: {
    canonical: "/fingerprinting/",
    languages: {
      en: "/fingerprinting/",
      "zh-CN": "/zh/fingerprinting/",
    },
  },
  openGraph: {
    title: "Fingerprinting Solutions Across Asia | Hive Digital",
    description:
      "Regional fingerprinting guidance for FBI, RCMP and other international background-check requirements across Asia-Pacific.",
  },
};

const coverage = [
  {
    name: "China",
    description:
      "Shanghai is our primary China location, with assistance available in selected cities. Collection methods and appointment availability vary by location.",
    href: "/shanghai-fingerprinting/",
    linkLabel: "Explore China fingerprinting",
  },
  {
    name: "South Korea",
    description:
      "We help applicants confirm the fingerprint format and collection route requested for their background check. Local options vary.",
    status: "Country guide planned",
  },
  {
    name: "Japan",
    description:
      "Fingerprinting procedures depend on the requesting agency, record type and applicant location. Confirm the specification before collection.",
    status: "Country guide planned",
  },
  {
    name: "Asia-Pacific",
    description:
      "For other locations, Hive reviews the requesting authority's instructions and helps identify an appropriate collection path where available.",
    status: "Ask about your location",
  },
];

const useCases = [
  { label: "Employment abroad", icon: BriefcaseBusiness },
  { label: "Teaching positions", icon: GraduationCap },
  { label: "Immigration", icon: Globe2 },
  { label: "Professional licensing", icon: BadgeCheck },
  { label: "Visa applications", icon: Plane },
  { label: "Permanent residency", icon: Landmark },
];

export default function FingerprintingAsiaPage() {
  return (
    <main className="min-h-screen bg-hive-bg px-6 pb-16 pt-24 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <nav className="mb-8" aria-label="Breadcrumb">
          <Link
            href="/services/"
            className="text-sm text-hive-muted transition-colors hover:text-white"
          >
            &larr; All Services
          </Link>
        </nav>

        <section className="mb-16" aria-labelledby="page-title">
          <div className="mb-4 flex items-center gap-3">
            <span className="inline-block rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-red-400">
              Regional Fingerprinting Support
            </span>
          </div>
          <h1
            id="page-title"
            className="mb-6 max-w-5xl text-4xl font-bold uppercase tracking-tight text-white md:text-6xl"
          >
            Fingerprinting Solutions Across Asia
          </h1>
          <p className="mb-8 max-w-4xl text-lg leading-relaxed text-hive-muted">
            Hive assists clients who need fingerprints for international
            criminal background checks while living or travelling throughout
            Asia. The correct collection method depends on the requested record,
            receiving authority and applicant location, so we confirm those
            details before recommending a process.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-red-500"
            >
              Confirm Your Requirements
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href="#coverage"
              className="inline-flex items-center justify-center rounded-xl border border-hive-border px-6 py-3 font-semibold text-white transition-colors hover:border-red-500/50"
            >
              Explore Regional Coverage
            </a>
          </div>
        </section>

        <section className="mb-16" aria-labelledby="primary-services">
          <div className="mb-8 max-w-3xl">
            <h2
              id="primary-services"
              className="mb-3 text-2xl font-bold uppercase tracking-tight text-white md:text-3xl"
            >
              Fingerprinting for Background Checks
            </h2>
            <p className="leading-relaxed text-hive-muted">
              Fingerprint requirements are set by the agency issuing the record.
              Hive helps identify the appropriate collection and submission path
              before an appointment is arranged.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-hive-border bg-hive-surface p-7">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10">
                <ShieldCheck className="h-6 w-6 text-red-500" aria-hidden="true" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">
                FBI Background Checks (USA)
              </h3>
              <p className="mb-5 text-sm leading-relaxed text-hive-muted">
                An FBI Identity History Summary is fingerprint-based. Hive helps
                applicants in Asia understand the collection and submission
                route available from their current location.
              </p>
              <Link
                href="/services/background-checks/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-red-400 transition-colors hover:text-white"
              >
                Review background-check support
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </article>

            <article className="rounded-2xl border border-hive-border bg-hive-surface p-7">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10">
                <Fingerprint className="h-6 w-6 text-red-500" aria-hidden="true" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">
                RCMP / CPIC Criminal Record Checks (Canada)
              </h3>
              <p className="mb-5 text-sm leading-relaxed text-hive-muted">
                Canadian fingerprint-based criminal record checks commonly use
                an RCMP-certified process. CPIC and other record types can
                differ, so Hive confirms the requested Canadian check before
                fingerprints are collected.
              </p>
              <Link
                href="/services/background-checks/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-red-400 transition-colors hover:text-white"
              >
                Confirm the Canadian record type
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </article>
          </div>
        </section>

        <aside className="mb-16 rounded-2xl border border-red-500/20 bg-red-600/10 p-7 md:p-9">
          <div className="flex flex-col gap-5 md:flex-row md:items-start">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-500/10">
              <Fingerprint className="h-6 w-6 text-red-400" aria-hidden="true" />
            </div>
            <div>
              <h2 className="mb-3 text-xl font-semibold text-white">
                Confirm the Check Before Collecting Fingerprints
              </h2>
              <p className="max-w-4xl leading-relaxed text-hive-muted">
                A fingerprint provider captures prints, but the requesting
                agency decides the acceptable card, format and submission
                method. Share your current location, destination, requested
                record and deadline with Hive first so we can recommend only the
                steps relevant to your situation.
              </p>
            </div>
          </div>
        </aside>

        <section id="coverage" className="mb-16 scroll-mt-24" aria-labelledby="coverage-title">
          <div className="mb-8 max-w-3xl">
            <h2
              id="coverage-title"
              className="mb-3 flex items-center gap-3 text-2xl font-bold uppercase tracking-tight text-white md:text-3xl"
            >
              <MapPin className="h-6 w-6 text-red-500" aria-hidden="true" />
              Regional Coverage
            </h2>
            <p className="leading-relaxed text-hive-muted">
              Fingerprinting options and procedures vary by country, city,
              service type and requesting authority.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {coverage.map((region) => (
              <article
                key={region.name}
                className="rounded-2xl border border-hive-border bg-hive-surface p-7"
              >
                <h3 className="mb-3 text-xl font-semibold text-white">
                  {region.name}
                </h3>
                <p className="text-sm leading-relaxed text-hive-muted">
                  {region.description}
                </p>
                {region.href ? (
                  <Link
                    href={region.href}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-red-400 transition-colors hover:text-white"
                  >
                    {region.linkLabel}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                ) : (
                  <span className="mt-5 inline-flex rounded-full border border-hive-border bg-hive-bg px-3 py-1 text-xs font-medium text-hive-dim">
                    {region.status}
                  </span>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="mb-16" aria-labelledby="use-cases">
          <div className="mb-8 max-w-3xl">
            <h2
              id="use-cases"
              className="mb-3 text-2xl font-bold uppercase tracking-tight text-white md:text-3xl"
            >
              Common Use Cases
            </h2>
            <p className="leading-relaxed text-hive-muted">
              The required background check and fingerprint method depend on
              the purpose and the organization requesting the record.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map(({ label, icon: Icon }) => (
              <li
                key={label}
                className="flex items-center gap-4 rounded-2xl border border-hive-border bg-hive-surface p-5 text-sm font-medium text-white"
              >
                <Icon className="h-5 w-5 shrink-0 text-red-500" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-hive-border bg-hive-surface p-8 text-center md:p-10">
          <h2 className="mb-3 text-2xl font-bold uppercase tracking-tight text-white">
            Ask Before You Arrange Fingerprinting
          </h2>
          <p className="mx-auto mb-6 max-w-2xl leading-relaxed text-hive-muted">
            Tell us which background check you need and where you are currently
            located. We will confirm the relevant fingerprint requirements and
            available next steps before you book a collection appointment.
          </p>
          <Link
            href="/contact/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-red-500"
          >
            Contact Hive
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </section>
      </div>
    </main>
  );
}

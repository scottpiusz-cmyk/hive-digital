import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  Download,
  Droplets,
  FileText,
  Fingerprint,
  Hand,
  IdCard,
  Landmark,
  MapPin,
  MessageCircle,
  Phone,
  ScanLine,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Getting Fingerprinted in Tokyo | FBI & RCMP Fingerprinting",
  description:
    "Tokyo fingerprinting guidance for FBI FD-258 and RCMP background checks, including recommended police stations, what to bring and how Hive can help.",
  alternates: {
    canonical: "/japan-fingerprinting/",
  },
  openGraph: {
    title: "Getting Fingerprinted in Tokyo | Hive Digital",
    description:
      "Practical guidance for arranging FD-258 ink fingerprints in Tokyo and sending them to Hive for FBI or RCMP background-check processing.",
  },
};

const policeStations = [
  {
    name: "Shibuya Police Station",
    address: ["3-8-15 Shibuya", "Shibuya-ku", "Tokyo 150-0002"],
    phone: "+81 3-3498-0110",
    phoneHref: "tel:+81334980110",
    reasons: [
      "Two-minute walk from Shibuya Station",
      "Convenient for most visitors staying in Shibuya",
      "Large Metropolitan Police station",
    ],
  },
  {
    name: "Marunouchi Police Station",
    address: ["1-9-2 Yurakucho", "Chiyoda-ku", "Tokyo 100-0006"],
    phone: "+81 3-3213-0110",
    phoneHref: "tel:+81332130110",
    reasons: [
      "Excellent access from Tokyo Station and Ginza",
      "Easy to reach using JR and Tokyo Metro",
      "Central business district location",
    ],
  },
  {
    name: "Shinjuku Police Station",
    address: ["6-1-1 Nishi-Shinjuku", "Shinjuku-ku", "Tokyo 160-8314"],
    phone: "+81 3-3346-0110",
    phoneHref: "tel:+81333460110",
    reasons: [
      "Ideal for visitors staying in Shinjuku",
      "Major Metropolitan Police station",
      "Easy public transportation access",
    ],
  },
];

const steps = [
  {
    title: "Print your FD-258 fingerprint card",
    description:
      "Print the card at its original size and check that every field and fingerprint box is clear.",
    icon: FileText,
  },
  {
    title: "Visit a recommended police station",
    description:
      "Ask whether the station can take ink fingerprints on your FBI FD-258 card.",
    icon: Landmark,
  },
  {
    title: "Send Hive a high-resolution scan",
    description:
      "Email the scan or send it through WhatsApp, WeChat, KakaoTalk or the Hive website chat.",
    icon: ScanLine,
  },
  {
    title: "Mail the original after approval",
    description:
      "Once Hive confirms the card is suitable, mail the original to us for FBI or RCMP processing.",
    icon: ShieldCheck,
  },
];

const checklist = [
  { label: "Passport", icon: IdCard },
  { label: "Printed FBI FD-258 fingerprint card", icon: FileText },
  {
    label: "Black fingerprint ink or ink pad, if the station asks you to provide it",
    icon: Droplets,
  },
  { label: "Small towel or tissues (recommended)", icon: Hand },
];

export default function JapanFingerprintingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-hive-bg px-6 pb-20 pt-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <nav className="mb-8" aria-label="Breadcrumb">
          <Link
            href="/fingerprinting/"
            className="text-sm text-hive-muted transition-colors hover:text-white"
          >
            &larr; Fingerprinting Services
          </Link>
        </nav>

        <section
          className="relative mb-20 overflow-hidden rounded-3xl border border-hive-border bg-hive-surface px-6 py-12 shadow-2xl shadow-black/20 sm:px-10 lg:px-14 lg:py-16"
          aria-labelledby="tokyo-fingerprinting-title"
        >
          <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full border-[42px] border-red-500/[0.06]" aria-hidden="true" />
          <div className="pointer-events-none absolute right-4 top-5 select-none text-[7rem] font-black leading-none tracking-tighter text-white/[0.025] sm:text-[10rem] lg:right-12 lg:text-[13rem]" aria-hidden="true">
            東京
          </div>
          <div className="relative max-w-4xl">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-500/25 bg-red-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-red-300">
              <Fingerprint className="h-4 w-4" aria-hidden="true" />
              Japan Fingerprinting Guide
            </span>
            <h1
              id="tokyo-fingerprinting-title"
              className="mb-6 text-4xl font-bold uppercase tracking-tight text-white md:text-6xl"
            >
              Getting Fingerprinted in <span className="text-red-500">Tokyo</span>
            </h1>
            <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-hive-muted">
              <p>
                Need fingerprints for an {" "}
                <Link href="/services/background-checks/" className="text-red-400 underline decoration-red-500/40 underline-offset-4 transition-colors hover:text-white">
                  FBI or RCMP background check
                </Link>{" "}
                while in Tokyo? Many Tokyo Metropolitan Police stations can assist with taking ink fingerprints on an FBI FD-258 fingerprint card. Procedures can vary, so call before visiting.
              </p>
              <p>
                Do not worry if the officer cannot sign or stamp the card. Hive can accept a high-resolution scan of your completed fingerprint card, digitally enhance it where appropriate, and process it for FBI and RCMP background checks.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-20" aria-labelledby="tokyo-stations-title">
          <div className="mb-8 max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-red-400">Tokyo locations</span>
            <h2 id="tokyo-stations-title" className="mt-2 text-3xl font-bold uppercase tracking-tight text-white md:text-4xl">
              Recommended Police Stations
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {policeStations.map((station) => (
              <article key={station.name} className="group rounded-3xl border border-hive-border bg-hive-surface p-7 shadow-xl shadow-black/10 transition-all hover:-translate-y-1 hover:border-red-500/40 hover:shadow-red-950/10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-red-500/20 bg-red-500/10">
                  <MapPin className="h-7 w-7 text-red-500" aria-hidden="true" />
                </div>
                <h3 className="mb-5 text-xl font-bold text-white">{station.name}</h3>
                <dl className="space-y-5 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-red-500" aria-hidden="true" />
                    <div>
                      <dt className="font-semibold text-white">Address</dt>
                      <dd className="mt-1 text-hive-muted">
                        <address className="not-italic">
                          {station.address.map((line) => <span key={line} className="block">{line}</span>)}
                        </address>
                      </dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-red-500" aria-hidden="true" />
                    <div>
                      <dt className="font-semibold text-white">Phone</dt>
                      <dd className="mt-1">
                        <a href={station.phoneHref} className="text-hive-muted transition-colors hover:text-white">{station.phone}</a>
                      </dd>
                    </div>
                  </div>
                </dl>
                <div className="mt-6 border-t border-hive-border pt-5">
                  <h4 className="mb-3 text-sm font-semibold text-white">Why we recommend it</h4>
                  <ul className="space-y-2.5">
                    {station.reasons.map((reason) => (
                      <li key={reason} className="flex items-start gap-2.5 text-sm leading-relaxed text-hive-muted">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-500" aria-hidden="true" />
                        {reason}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <aside className="mb-20 overflow-hidden rounded-3xl border-2 border-red-500/50 bg-red-950/25 shadow-2xl shadow-red-950/20" aria-labelledby="signature-note-title">
          <div className="flex items-center gap-4 border-b border-red-500/30 bg-red-600/15 px-6 py-5 sm:px-8">
            <ShieldCheck className="h-7 w-7 shrink-0 text-red-300" aria-hidden="true" />
            <h2 id="signature-note-title" className="text-2xl font-bold text-white">Officer Signature or Stamp Not Required</h2>
          </div>
          <div className="space-y-4 p-6 leading-relaxed text-hive-muted sm:p-8">
            <p>Some police officers in Japan may decline to sign or stamp the FBI FD-258 fingerprint card. This is completely acceptable for Hive&apos;s workflow.</p>
            <p>Simply send us a high-resolution scan before mailing the original card. Our fingerprint specialists will review the quality and confirm whether it is suitable for digital processing.</p>
          </div>
        </aside>

        <section className="mb-20" aria-labelledby="process-title">
          <div className="mb-9 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-red-400">A clear path</span>
            <h2 id="process-title" className="mt-2 text-3xl font-bold uppercase tracking-tight text-white md:text-4xl">How It Works</h2>
          </div>
          <ol className="flex flex-col items-stretch gap-4 lg:flex-row lg:items-center">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <li key={step.title} className="contents">
                  <article className="flex-1 rounded-2xl border border-hive-border bg-hive-surface p-6 shadow-lg shadow-black/10">
                    <div className="mb-5 flex items-center justify-between">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white">{index + 1}</span>
                      <Icon className="h-6 w-6 text-red-500" aria-hidden="true" />
                    </div>
                    <h3 className="mb-2 font-semibold text-white">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-hive-muted">{step.description}</p>
                  </article>
                  {index < steps.length - 1 && (
                    <span className="flex justify-center text-red-500" aria-hidden="true">
                      <ArrowDown className="h-5 w-5 lg:hidden" />
                      <ArrowRight className="hidden h-5 w-5 lg:block" />
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </section>

        <section className="mb-20 rounded-3xl border border-hive-border bg-hive-surface p-7 shadow-xl shadow-black/10 sm:p-9" aria-labelledby="bring-title">
          <div className="mb-7 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10">
              <IdCard className="h-6 w-6 text-red-500" aria-hidden="true" />
            </div>
            <h2 id="bring-title" className="text-2xl font-bold uppercase tracking-tight text-white md:text-3xl">What to Bring</h2>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {checklist.map(({ label, icon: Icon }) => (
              <li key={label} className="flex items-center gap-4 rounded-2xl border border-hive-border bg-hive-bg/60 p-5 text-sm font-medium text-white">
                <Icon className="h-5 w-5 shrink-0 text-red-500" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </section>

        <section className="relative overflow-hidden rounded-3xl border border-red-500/30 bg-gradient-to-br from-red-950/50 via-hive-surface to-hive-surface p-8 text-center shadow-2xl shadow-red-950/20 md:p-12" aria-labelledby="tokyo-cta-title">
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-red-600/10 blur-3xl" aria-hidden="true" />
          <div className="relative mx-auto max-w-3xl">
            <MessageCircle className="mx-auto mb-5 h-10 w-10 text-red-400" aria-hidden="true" />
            <h2 id="tokyo-cta-title" className="mb-4 text-3xl font-bold uppercase tracking-tight text-white md:text-4xl">Need Help Before You Visit?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-hive-muted">Send us a message before going to the police station. We&apos;ll review your fingerprint card, answer your questions, and guide you through the fastest suitable option for your FBI or RCMP background check.</p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/contact/" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-red-600 px-7 py-3 font-semibold text-white transition-colors hover:bg-red-500">
                Chat With Hive
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a href="https://www.fbi.gov/file-repository/cjis/fd-258.pdf/view" target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-hive-border bg-hive-bg/40 px-7 py-3 font-semibold text-white transition-colors hover:border-red-500/50 hover:bg-hive-bg/70" aria-label="Download the FD-258 fingerprint card from the FBI (opens in a new tab)">
                <Download className="h-4 w-4" aria-hidden="true" />
                Download FD-258 Fingerprint Card
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

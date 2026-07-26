import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  Check,
  CheckCircle2,
  CircleHelp,
  Download,
  FileCheck2,
  FileText,
  Fingerprint,
  GraduationCap,
  IdCard,
  Image as ImageIcon,
  Mail,
  MessageCircle,
  Quote,
  ScanLine,
  ShieldCheck,
  Stamp,
  Users,
  type LucideIcon,
} from "lucide-react";
import type {
  PartnerIconName,
  RecruiterPartnerConfig,
} from "@/lib/recruiter-partners";

const checklistIcons: Record<PartnerIconName, LucideIcon> = {
  passport: IdCard,
  degree: GraduationCap,
  resume: FileText,
  photo: ImageIcon,
  references: Users,
  "background-check": ShieldCheck,
  fingerprint: Fingerprint,
  apostille: Stamp,
  canada: BadgeCheck,
};

type PartnerStyle = CSSProperties & {
  "--partner-primary": string;
  "--partner-primary-rgb": string;
  "--partner-secondary": string;
};

function DocumentHeroIllustration({
  recruiterName,
}: {
  recruiterName: string;
}) {
  return (
    <div
      className="relative mx-auto min-h-[390px] w-full max-w-xl sm:min-h-[460px]"
      role="img"
      aria-label={`Document preparation illustration for ${recruiterName} applicants showing an FBI background check, fingerprint card, university degree and apostille certificate`}
    >
      <div
        className="absolute inset-x-[12%] bottom-[7%] top-[10%] rounded-[2rem] bg-[rgb(var(--partner-primary-rgb)/0.12)] blur-3xl"
        aria-hidden="true"
      />

      <div
        className="absolute left-[2%] top-[7%] w-[64%] -rotate-6 rounded-2xl border border-white/15 bg-[#f7f3ea] p-5 text-slate-900 shadow-2xl shadow-black/30 sm:p-6"
        aria-hidden="true"
      >
        <div className="mb-5 flex items-center gap-3 border-b border-slate-300 pb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900">
            <ShieldCheck className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
              United States
            </p>
            <p className="text-sm font-black uppercase tracking-tight sm:text-base">
              FBI Background Check
            </p>
          </div>
        </div>
        <div className="space-y-3">
          <div className="h-2 w-full rounded-full bg-slate-300" />
          <div className="h-2 w-4/5 rounded-full bg-slate-200" />
          <div className="h-2 w-3/5 rounded-full bg-slate-200" />
        </div>
        <div className="mt-7 flex items-end justify-between">
          <div className="rounded-lg border border-slate-300 px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-slate-500">
            Identity History Summary
          </div>
          <div className="h-10 w-20 border-b border-slate-500" />
        </div>
      </div>

      <div
        className="absolute right-[1%] top-[28%] w-[56%] rotate-6 rounded-2xl border border-white/15 bg-[#e8eef5] p-4 text-slate-900 shadow-2xl shadow-black/35 sm:p-5"
        aria-hidden="true"
      >
        <div className="mb-4 flex items-center justify-between border-b border-slate-400/40 pb-3">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500">
              Applicant
            </p>
            <p className="text-lg font-black">FD-258</p>
          </div>
          <Fingerprint className="h-8 w-8 text-slate-600" />
        </div>
        <div className="grid grid-cols-5 gap-1.5">
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className="flex aspect-[0.74] items-center justify-center rounded-sm border border-slate-400/50 bg-white/50"
            >
              <Fingerprint className="h-4 w-4 text-slate-400 sm:h-5 sm:w-5" />
            </div>
          ))}
        </div>
      </div>

      <div
        className="absolute bottom-[5%] left-[5%] w-[52%] rotate-3 rounded-2xl border border-amber-200/30 bg-[#151520] p-5 text-white shadow-2xl shadow-black/40 sm:p-6"
        aria-hidden="true"
      >
        <GraduationCap className="mb-7 h-8 w-8 text-amber-300" />
        <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/45">
          Academic credential
        </p>
        <p className="mt-1 font-serif text-xl sm:text-2xl">
          University Degree
        </p>
        <div className="mt-6 h-px w-full bg-white/15" />
      </div>

      <div
        className="absolute bottom-[1%] right-[6%] flex aspect-square w-[31%] rotate-12 flex-col items-center justify-center rounded-full border-[6px] border-double border-[var(--partner-primary)] bg-[#f2e6c8] text-center text-slate-900 shadow-2xl shadow-black/40"
        aria-hidden="true"
      >
        <Stamp className="mb-1 h-7 w-7 text-[var(--partner-primary)] sm:h-9 sm:w-9" />
        <p className="text-[8px] font-black uppercase tracking-[0.16em] sm:text-[10px]">
          Apostille
        </p>
        <p className="mt-1 text-[6px] font-semibold uppercase tracking-widest text-slate-500 sm:text-[8px]">
          Convention of 1961
        </p>
      </div>
    </div>
  );
}

function ChecklistCard({
  title,
  description,
  items,
  emphasized = false,
}: {
  title: string;
  description: string;
  items: RecruiterPartnerConfig["checklist"]["applicant"];
  emphasized?: boolean;
}) {
  return (
    <article
      className={`rounded-3xl border p-7 shadow-xl shadow-black/10 sm:p-9 ${
        emphasized
          ? "border-[rgb(var(--partner-primary-rgb)/0.45)] bg-[rgb(var(--partner-primary-rgb)/0.09)]"
          : "border-hive-border bg-hive-surface"
      }`}
    >
      <div className="mb-7">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-hive-muted">
          {description}
        </p>
      </div>
      <ul className="grid gap-3 sm:grid-cols-2">
        {items.map((item) => {
          const Icon = checklistIcons[item.icon];
          const content = (
            <>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.05]">
                <Icon
                  className="h-5 w-5 text-[var(--partner-primary)]"
                  aria-hidden="true"
                />
              </span>
              <span className="text-sm font-semibold text-white">
                {item.label}
              </span>
              <Check
                className="ml-auto h-4 w-4 shrink-0 text-emerald-400"
                aria-hidden="true"
              />
            </>
          );

          return (
            <li key={item.label}>
              {item.href ? (
                <Link
                  href={item.href}
                  className="flex min-h-16 items-center gap-3 rounded-2xl border border-hive-border bg-hive-bg/50 p-3 transition-all hover:border-[rgb(var(--partner-primary-rgb)/0.5)] hover:bg-hive-elevated"
                >
                  {content}
                </Link>
              ) : (
                <div className="flex min-h-16 items-center gap-3 rounded-2xl border border-hive-border bg-hive-bg/50 p-3">
                  {content}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </article>
  );
}

export default function RecruiterPartnerPage({
  config,
}: {
  config: RecruiterPartnerConfig;
}) {
  const style: PartnerStyle = {
    "--partner-primary": config.brand.primary,
    "--partner-primary-rgb": config.brand.primaryRgb,
    "--partner-secondary": config.brand.secondary,
  };

  return (
    <div
      className="min-h-screen overflow-hidden bg-hive-bg pb-20 pt-24"
      style={style}
      data-partner={config.referralCode}
    >
      <section className="relative px-6 pb-20 lg:px-12" aria-labelledby="partner-page-title">
        <div
          className="pointer-events-none absolute -left-52 -top-40 h-[32rem] w-[32rem] rounded-full bg-[rgb(var(--partner-primary-rgb)/0.12)] blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-blue-700/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl">
          <nav aria-label="Breadcrumb" className="mb-10 flex items-center gap-2 text-sm">
            <Link
              href="/"
              className="text-hive-muted transition-colors hover:text-white"
            >
              Home
            </Link>
            <span className="text-hive-dim" aria-hidden="true">
              /
            </span>
            <span className="text-white">Partner Resources</span>
            <span className="text-hive-dim" aria-hidden="true">
              /
            </span>
            <span className="text-white">{config.recruiterName}</span>
          </nav>

          <div className="mb-12 flex flex-wrap items-center gap-5 rounded-2xl border border-hive-border bg-hive-surface/70 px-5 py-4 backdrop-blur">
            <div className="flex min-h-14 items-center rounded-xl bg-white px-4 py-2">
              <Image
                src={config.logo.src}
                alt={config.logo.alt}
                width={config.logo.width}
                height={config.logo.height}
                sizes="190px"
                className="h-11 w-auto object-contain"
              />
            </div>
            <div className="hidden h-9 w-px bg-hive-border sm:block" aria-hidden="true" />
            <div className="leading-tight">
              <p className="text-lg font-black tracking-tight text-white">
                Hive <span className="text-red-500">Digital</span>
              </p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-hive-dim">
                Candidate document resource partner
              </p>
            </div>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
            <div>
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[rgb(var(--partner-primary-rgb)/0.35)] bg-[rgb(var(--partner-primary-rgb)/0.1)] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white">
                <ShieldCheck
                  className="h-4 w-4 text-[var(--partner-primary)]"
                  aria-hidden="true"
                />
                {config.hero.eyebrow}
              </span>
              <h1
                id="partner-page-title"
                className="max-w-4xl text-4xl font-bold uppercase tracking-[-0.035em] text-white sm:text-5xl lg:text-7xl"
              >
                {config.hero.title}
              </h1>
              <p className="mt-6 max-w-3xl text-xl font-medium leading-relaxed text-white/85">
                {config.hero.subtitle}
              </p>
              <p className="mt-5 max-w-3xl leading-relaxed text-hive-muted">
                {config.hero.supportingText}
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href={config.cta.primaryHref}
                  className="inline-flex min-h-13 items-center justify-center gap-2 rounded-xl bg-[var(--partner-primary)] px-7 py-3 font-semibold text-white shadow-lg shadow-black/20 transition-all hover:-translate-y-0.5 hover:brightness-110"
                >
                  {config.cta.primaryLabel}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <a
                  href={config.cta.secondaryHref}
                  download
                  className="inline-flex min-h-13 items-center justify-center gap-2 rounded-xl border border-hive-border bg-hive-surface px-7 py-3 font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-[rgb(var(--partner-primary-rgb)/0.55)]"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  {config.cta.secondaryLabel}
                </a>
              </div>
            </div>
            <DocumentHeroIllustration recruiterName={config.recruiterName} />
          </div>

          <nav
            aria-label="Resource centre sections"
            className="mt-14 flex flex-wrap gap-2 border-t border-hive-border pt-7"
          >
            {[
              ["Document checklist", "#document-checklist"],
              ["Common mistakes", "#common-mistakes"],
              ["Process timeline", "#document-timeline"],
              ["Fingerprinting", "#fingerprinting-options"],
              ["Questions", "#frequently-asked-questions"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="rounded-full border border-hive-border bg-hive-surface px-4 py-2 text-xs font-semibold text-hive-muted transition-colors hover:border-[rgb(var(--partner-primary-rgb)/0.5)] hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section
        id="document-checklist"
        className="scroll-mt-24 border-y border-hive-border bg-[#0d0d13] px-6 py-20 lg:px-12"
        aria-labelledby="document-checklist-title"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--partner-primary)]">
              Start with clarity
            </span>
            <h2
              id="document-checklist-title"
              className="mt-3 text-3xl font-bold uppercase tracking-tight text-white md:text-5xl"
            >
              Korea Document Checklist
            </h2>
            <p className="mt-4 leading-relaxed text-hive-muted">
              Use this as an orientation guide, then follow the current checklist
              and timing instructions supplied by {config.recruiterName}.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <ChecklistCard
              title="Documents You'll Prepare"
              description="Personal and application materials normally supplied by the candidate."
              items={config.checklist.applicant}
            />
            <ChecklistCard
              title="Documents Hive Can Help With"
              description="Specialist background-check, fingerprinting and apostille workflows."
              items={config.checklist.hive}
              emphasized
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-12" aria-labelledby="partnership-reasons-title">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--partner-primary)]">
              Managed, not merely mailed
            </span>
            <h2
              id="partnership-reasons-title"
              className="mt-3 text-3xl font-bold uppercase tracking-tight text-white md:text-4xl"
            >
              {config.partnership.heading}
            </h2>
            <div className="mt-7 rounded-2xl border border-[rgb(var(--partner-primary-rgb)/0.3)] bg-[rgb(var(--partner-primary-rgb)/0.08)] p-6">
              <Quote
                className="mb-4 h-7 w-7 text-[var(--partner-primary)]"
                aria-hidden="true"
              />
              <p className="font-medium leading-relaxed text-white">
                The goal is a smoother applicant experience: clear instructions,
                fewer avoidable corrections, and a documented next step.
              </p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {config.partnership.paragraphs.map((paragraph, index) => (
              <article
                key={paragraph}
                className="rounded-2xl border border-hive-border bg-hive-surface p-6 shadow-lg shadow-black/10"
              >
                <span className="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-[rgb(var(--partner-primary-rgb)/0.12)] text-sm font-bold text-[var(--partner-primary)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="leading-relaxed text-hive-muted">{paragraph}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="common-mistakes"
        className="scroll-mt-24 px-6 py-20 lg:px-12"
        aria-labelledby="common-mistakes-title"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-400">
              Avoid preventable delays
            </span>
            <h2
              id="common-mistakes-title"
              className="mt-3 text-3xl font-bold uppercase tracking-tight text-white md:text-5xl"
            >
              Common Document Mistakes
            </h2>
            <p className="mt-4 leading-relaxed text-hive-muted">
              Most corrections begin with a small mismatch: the wrong authority,
              a poor scan, an incomplete card, or a document ordered at the wrong
              time.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {config.commonMistakes.map((mistake) => (
              <article
                key={mistake.title}
                className="rounded-2xl border border-amber-500/15 bg-amber-500/[0.045] p-6 transition-all hover:-translate-y-1 hover:border-amber-500/35"
              >
                <AlertTriangle
                  className="mb-5 h-6 w-6 text-amber-400"
                  aria-hidden="true"
                />
                <h3 className="font-bold text-white">{mistake.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-hive-muted">
                  {mistake.explanation}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="document-timeline"
        className="scroll-mt-24 border-y border-hive-border bg-hive-surface/45 px-6 py-20 lg:px-12"
        aria-labelledby="document-timeline-title"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--partner-primary)]">
              {config.timeline.eyebrow}
            </span>
            <h2
              id="document-timeline-title"
              className="mt-3 text-3xl font-bold uppercase tracking-tight text-white md:text-5xl"
            >
              {config.timeline.title}
            </h2>
          </div>
          <ol className="flex flex-col items-stretch gap-3 lg:flex-row lg:items-center">
            {config.timeline.steps.map((step, index) => (
              <li key={step.title} className="contents">
                <article
                  className={`flex min-h-64 flex-1 flex-col rounded-2xl border p-5 ${
                    step.featured
                      ? "border-[rgb(var(--partner-primary-rgb)/0.55)] bg-[rgb(var(--partner-primary-rgb)/0.12)] shadow-xl shadow-black/20"
                      : "border-hive-border bg-hive-surface"
                  }`}
                >
                  <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--partner-primary)] text-sm font-bold text-white">
                    {index + 1}
                  </span>
                    <h3 className="font-semibold leading-snug text-white">
                      {step.title}
                    </h3>
                  </div>
                  {step.typicalTime && (
                    <div className="mt-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-hive-muted">
                        Typical Time
                      </p>
                      <p className="mt-1 text-2xl font-bold tracking-tight text-[var(--partner-primary)]">
                        {step.typicalTime}
                      </p>
                    </div>
                  )}
                  {step.timeOptions && (
                    <div className="mt-6 space-y-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/65">
                        Typical Time
                      </p>
                      {step.timeOptions.map((option) => (
                        <div
                          key={option.label}
                          className="border-l-2 border-[var(--partner-primary)] pl-3"
                        >
                          <p className="text-xs font-semibold uppercase tracking-wider text-white/65">
                            {option.label}
                          </p>
                          <p className="mt-0.5 font-bold text-white">
                            {option.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                  <p className="mt-auto pt-6 text-sm leading-relaxed text-hive-muted">
                    {step.description}
                  </p>
                </article>
                {index < config.timeline.steps.length - 1 && (
                  <span className="flex justify-center text-[var(--partner-primary)]" aria-hidden="true">
                    <ArrowDown className="h-5 w-5 lg:hidden" />
                    <ArrowRight className="hidden h-5 w-5 lg:block" />
                  </span>
                )}
              </li>
            ))}
          </ol>
          <p className="mx-auto mt-7 max-w-3xl text-center text-sm leading-relaxed text-hive-muted">
            {config.timeline.disclaimer}
          </p>
        </div>
      </section>

      <section
        id="fingerprinting-options"
        className="scroll-mt-24 px-6 py-20 lg:px-12"
        aria-labelledby="fingerprinting-options-title"
      >
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-[rgb(var(--partner-primary-rgb)/0.35)] bg-[rgb(var(--partner-primary-rgb)/0.08)] p-8 shadow-2xl shadow-black/15 lg:p-10">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[rgb(var(--partner-primary-rgb)/0.15)]">
              <Fingerprint
                className="h-7 w-7 text-[var(--partner-primary)]"
                aria-hidden="true"
              />
            </div>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--partner-primary)]">
              Capture it correctly
            </span>
            <h2
              id="fingerprinting-options-title"
              className="mt-3 text-3xl font-bold uppercase tracking-tight text-white md:text-4xl"
            >
              Fingerprinting Options
            </h2>
            <p className="mt-5 leading-relaxed text-hive-muted">
              {config.fingerprinting.introduction}
            </p>
            <Link
              href="/fingerprinting/"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[var(--partner-primary)]"
            >
              Review regional fingerprinting guidance
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="space-y-5">
            <ul className="grid gap-4 sm:grid-cols-2">
              {config.fingerprinting.options.map((option) => (
                <li
                  key={option}
                  className="flex min-h-20 items-center gap-4 rounded-2xl border border-hive-border bg-hive-surface p-5 text-sm font-medium text-white"
                >
                  <CheckCircle2
                    className="h-5 w-5 shrink-0 text-[var(--partner-primary)]"
                    aria-hidden="true"
                  />
                  {option}
                </li>
              ))}
            </ul>
            <aside className="flex gap-4 rounded-2xl border border-blue-500/20 bg-blue-500/[0.07] p-6">
              <ScanLine
                className="mt-0.5 h-6 w-6 shrink-0 text-blue-300"
                aria-hidden="true"
              />
              <div>
                <h3 className="font-bold text-white">Quality review before submission</h3>
                <p className="mt-2 text-sm leading-relaxed text-hive-muted">
                  {config.fingerprinting.reviewNote}
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-12" aria-labelledby="about-partnership-title">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-hive-border bg-hive-surface shadow-2xl shadow-black/15">
          <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
            <div className="flex flex-col justify-between border-b border-hive-border bg-white p-8 lg:border-b-0 lg:border-r">
              <Image
                src={config.logo.src}
                alt={config.logo.alt}
                width={config.logo.width}
                height={config.logo.height}
                sizes="220px"
                className="h-auto w-52 object-contain"
              />
              <div className="mt-12">
                <p className="text-2xl font-black tracking-tight text-slate-950">
                  Hive <span className="text-red-600">Digital</span>
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Cross-border document specialists
                </p>
              </div>
            </div>
            <div className="p-8 lg:p-12">
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--partner-primary)]">
                Shared applicant support
              </span>
              <h2
                id="about-partnership-title"
                className="mt-3 text-3xl font-bold uppercase tracking-tight text-white md:text-4xl"
              >
                About the Partnership
              </h2>
              <div className="mt-7 space-y-5 leading-relaxed text-hive-muted">
                <p>{config.about.recruiterText}</p>
                <p>{config.about.hiveText}</p>
                <p className="border-l-2 border-[var(--partner-primary)] pl-5 font-semibold text-white">
                  {config.about.togetherText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="frequently-asked-questions"
        className="scroll-mt-24 px-6 py-20 lg:px-12"
        aria-labelledby="faq-title"
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <CircleHelp
              className="mx-auto mb-5 h-9 w-9 text-[var(--partner-primary)]"
              aria-hidden="true"
            />
            <h2
              id="faq-title"
              className="text-3xl font-bold uppercase tracking-tight text-white md:text-5xl"
            >
              Frequently Asked Questions
            </h2>
            <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-hive-muted">
              Practical answers for {config.recruiterName} applicants preparing
              U.S. or Canadian documents for teaching in South Korea.
            </p>
          </div>
          <div className="space-y-3">
            {config.faqAdditions.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-hive-border bg-hive-surface open:border-[rgb(var(--partner-primary-rgb)/0.4)]"
              >
                <summary className="flex cursor-pointer list-none items-center gap-4 px-5 py-5 marker:hidden sm:px-6">
                  <span className="rounded-full bg-[rgb(var(--partner-primary-rgb)/0.11)] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--partner-primary)]">
                    {faq.category}
                  </span>
                  <span className="flex-1 font-semibold text-white">
                    {faq.question}
                  </span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-hive-border text-hive-muted transition-transform group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <div className="border-t border-hive-border px-5 py-5 sm:px-6">
                  <p className="leading-relaxed text-hive-muted">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-hive-border bg-hive-surface/60 p-6">
            <div className="flex items-start gap-4">
              <BookOpenCheck
                className="mt-0.5 h-6 w-6 shrink-0 text-[var(--partner-primary)]"
                aria-hidden="true"
              />
              <div>
                <h3 className="font-bold text-white">Official references</h3>
                <p className="mt-2 text-sm leading-relaxed text-hive-muted">
                  Requirements and agency processing practices can change. Check
                  current recruiter instructions alongside these primary sources:
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {config.officialSources.map((source) => (
                    <li key={source.href}>
                      <a
                        href={source.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-hive-border bg-hive-bg px-3 py-2 text-xs font-semibold text-hive-muted transition-colors hover:border-[rgb(var(--partner-primary-rgb)/0.45)] hover:text-white"
                        aria-label={`${source.label} (opens in a new tab)`}
                      >
                        {source.label}
                        <ArrowRight className="h-3 w-3" aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pt-10 lg:px-12" aria-labelledby="partner-final-cta">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-[rgb(var(--partner-primary-rgb)/0.4)] bg-gradient-to-br from-[rgb(var(--partner-primary-rgb)/0.2)] via-hive-surface to-hive-surface px-7 py-12 text-center shadow-2xl shadow-black/25 sm:px-10 lg:py-16">
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[rgb(var(--partner-primary-rgb)/0.18)] blur-3xl"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-4xl">
            <FileCheck2
              className="mx-auto mb-6 h-11 w-11 text-[var(--partner-primary)]"
              aria-hidden="true"
            />
            <h2
              id="partner-final-cta"
              className="text-3xl font-bold uppercase tracking-tight text-white md:text-5xl"
            >
              Ready to Start Your Documents?
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-hive-muted">
              Whether you have already accepted a position or are preparing in
              advance, our specialists are ready to help you complete your
              documentation accurately and on time.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href={config.cta.primaryHref}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[var(--partner-primary)] px-6 py-3 font-semibold text-white transition-all hover:-translate-y-0.5 hover:brightness-110"
              >
                {config.cta.primaryLabel}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={config.contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-hive-border bg-hive-bg/60 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-green-500/40"
              >
                <MessageCircle className="h-4 w-4 text-green-400" aria-hidden="true" />
                WhatsApp
              </a>
              <Link
                href={config.contact.kakao}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-hive-border bg-hive-bg/60 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-yellow-400/40"
              >
                <MessageCircle className="h-4 w-4 text-yellow-300" aria-hidden="true" />
                Kakao
              </Link>
              <Link
                href={config.contact.wechat}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-hive-border bg-hive-bg/60 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-emerald-400/40"
              >
                <MessageCircle className="h-4 w-4 text-emerald-300" aria-hidden="true" />
                WeChat
              </Link>
              <a
                href={config.contact.email}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-hive-border bg-hive-bg/60 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-[rgb(var(--partner-primary-rgb)/0.45)]"
              >
                <Mail className="h-4 w-4 text-[var(--partner-primary)]" aria-hidden="true" />
                Email Hive
              </a>
            </div>
            <p className="mt-6 text-xs leading-relaxed text-hive-dim">
              Hive prepares documents and coordinates document services. Final
              acceptance decisions remain with the recruiter, employer and
              relevant government authorities.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

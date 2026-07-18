import Link from "next/link";
import {
  ArrowDown,
  Award,
  Baby,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  FileSearch,
  GraduationCap,
  Heart,
  HelpCircle,
  Info,
  Send,
  ShieldCheck,
  Stamp,
} from "lucide-react";

const typicalDocuments = [
  {
    icon: ShieldCheck,
    title: "Criminal Background Check",
    href: "/services/background-checks/",
    description:
      "FBI and state-level background checks are both used, but the correct report depends on the employer and application city.",
  },
  {
    icon: GraduationCap,
    title: "Degree Apostille",
    href: "/services/apostille/",
    description:
      "Employers commonly request an Apostille for the degree when it was issued in a Hague Convention country.",
  },
  {
    icon: Award,
    title: "Teaching Qualification",
    description:
      "A TEFL, TESOL, CELTA, or another teaching qualification may be requested where applicable.",
  },
  {
    icon: Heart,
    title: "Marriage Certificate Apostille",
    href: "/services/apostille/",
    description:
      "A spouse joining the applicant may need a legalized marriage certificate for the employer-led process.",
  },
  {
    icon: Baby,
    title: "Birth Certificate Apostille",
    href: "/services/apostille/",
    description:
      "Dependent children may need legalized birth certificates showing the relationship to the applicant.",
  },
];

const questions = [
  { question: "Which background check do I need?" },
  { question: "Does my degree need an Apostille?" },
  { question: "What if my passport and degree names do not match?" },
  { question: "How can I prepare documents while already living overseas?" },
  { question: "What should I do if my employer gave incomplete instructions?" },
  { question: "Which documents should I prioritize if I have a tight deadline?" },
  {
    question: "Can I prepare my documents before accepting a job?",
    answer:
      "Some documents can be prepared in advance, but requirements vary. Confirm employer requirements before processing expensive documents that may not ultimately be required.",
  },
];

const consultationFactors = [
  "Destination city",
  "Employer requirements",
  "Applicant nationality",
  "Current location",
  "Document origin",
  "Existing documents",
  "Deadlines",
];

const whyHive = [
  "Honest recommendations",
  "Only necessary services recommended",
  "Clear explanations of why requirements vary",
  "Experience supporting recruiters, HR teams, and international schools",
  "Support for applicants already living overseas",
];

const process = [
  {
    icon: BriefcaseBusiness,
    title: "Receive Job Offer",
    description:
      "Begin with a confirmed role and an employer or HR contact who can verify local requirements.",
  },
  {
    icon: FileSearch,
    title: "Confirm Employer Requirements",
    description:
      "Confirm the document list, application city, issuing countries, name details, and deadline before ordering services.",
  },
  {
    icon: ShieldCheck,
    title: "Prepare Required Documents",
    description:
      "Hive helps identify and prepare the background checks, qualifications, and family documents that apply to the case.",
  },
  {
    icon: Stamp,
    title: "Obtain Apostilles",
    description:
      "Where required, Hive coordinates notarization and Apostilles based on where each document was issued.",
  },
  {
    icon: Send,
    title: "Send Documents to Employer",
    description:
      "The completed documents are returned for delivery to the employer or its appointed representative in China.",
  },
  {
    icon: Building2,
    title: "Employer Continues China Work Permit / Visa Process",
    description:
      "The employer and relevant authorities continue the work permit and visa application. Hive does not issue or obtain either approval.",
  },
];

export default function ChinaWorkDocumentsPage() {
  return (
    <main className="min-h-screen bg-hive-bg px-6 pb-16 pt-24 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <div className="mb-4">
          <span className="text-sm font-semibold uppercase tracking-widest text-hive-accent">
            China employment document preparation
          </span>
        </div>
        <h1 className="mb-6 max-w-4xl text-4xl font-bold uppercase tracking-tight text-white md:text-6xl">
          China Work Permit &amp; Visa Document Services
        </h1>
        <p className="mb-5 max-w-4xl text-lg leading-relaxed text-hive-muted">
          Moving to China for work? Hive helps prepare and legalize the
          documents commonly required before your employer begins the China
          work permit and visa process.
        </p>
        <p className="mb-14 max-w-4xl text-sm leading-relaxed text-hive-dim md:text-base">
          Hive does not issue visas or work permits. Requirements can vary by
          employer, city, document origin, and applicant circumstances, so the
          employer&apos;s instructions should be confirmed before processing
          begins.
        </p>

        <section className="mb-16" aria-labelledby="typical-documents">
          <div className="mb-8 max-w-3xl">
            <h2
              id="typical-documents"
              className="mb-3 text-2xl font-bold uppercase tracking-tight text-white md:text-3xl"
            >
              Typical Documents Required
            </h2>
            <p className="leading-relaxed text-hive-muted">
              The documents below are among the most commonly requested. Your
              employer, application city, and individual circumstances
              determine the final requirements.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {typicalDocuments.map((document) => {
              const Icon = document.icon;
              return (
                <article
                  key={document.title}
                  className="rounded-2xl border border-hive-border bg-hive-surface p-6"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-hive-accent/10">
                    <Icon className="h-5 w-5 text-hive-accent" aria-hidden="true" />
                  </div>
                  {document.href ? (
                    <h3 className="mb-2 text-lg font-semibold text-white">
                      <Link
                        href={document.href}
                        className="transition-colors hover:text-hive-accent"
                      >
                        {document.title}
                      </Link>
                    </h3>
                  ) : (
                    <h3 className="mb-2 text-lg font-semibold text-white">
                      {document.title}
                    </h3>
                  )}
                  <p className="text-sm leading-relaxed text-hive-muted">
                    {document.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section
          className="mb-16 rounded-2xl border border-hive-accent/30 bg-hive-elevated p-7 md:p-9"
          aria-labelledby="background-check-selection"
        >
          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:items-start">
            <div>
              <h2
                id="background-check-selection"
                className="mb-4 text-2xl font-bold uppercase tracking-tight text-white md:text-3xl"
              >
                Choosing the Correct Background Check
              </h2>
              <div className="space-y-4 leading-relaxed text-hive-muted">
                <p>
                  Selecting the correct background check is one of Hive&apos;s
                  consultation services. Some employers or cities accept a
                  state-level police check, while others request a national
                  report such as an FBI Identity History Summary.
                </p>
                <p>
                  The right recommendation depends on the employer, application
                  city, applicant nationality and location, and current local
                  requirements. An FBI report should not be treated as
                  universally required.
                </p>
                <p>
                  Confirm the requirement before spending time and money
                  obtaining a report you may not actually need. Hive recommends
                  only the document that satisfies the requirements known at
                  the time of consultation.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <Link
                href="/services/background-checks/"
                className="block rounded-xl border border-hive-border bg-hive-bg p-4 text-sm font-semibold text-white transition-colors hover:border-hive-accent/50"
              >
                Compare background check options &rarr;
              </Link>
              <Link
                href="/shanghai-fingerprinting/"
                className="block rounded-xl border border-hive-border bg-hive-bg p-4 text-sm font-semibold text-white transition-colors hover:border-hive-accent/50"
              >
                Review fingerprinting support &rarr;
              </Link>
            </div>
          </div>

          <aside className="mt-8 rounded-xl border border-hive-border bg-hive-bg p-6">
            <div className="flex items-start gap-4">
              <Info
                className="mt-0.5 h-5 w-5 shrink-0 text-hive-accent"
                aria-hidden="true"
              />
              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  A Common Mistake
                </h3>
                <div className="space-y-2 text-sm leading-relaxed text-hive-muted">
                  <p>
                    Many applicants assume they automatically need an FBI
                    background check simply because they are moving to China.
                  </p>
                  <p>
                    In reality, some employers and cities accept state-level
                    police checks while others require national reports. Always
                    confirm the requirement before ordering a report.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </section>

        <section
          className="mb-16 rounded-2xl border border-hive-border bg-hive-surface p-7 md:p-9"
          aria-labelledby="consultation-approach"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <div>
              <h2
                id="consultation-approach"
                className="mb-4 text-2xl font-bold uppercase tracking-tight text-white md:text-3xl"
              >
                How Hive Assesses Your Situation
              </h2>
              <div className="space-y-3 leading-relaxed text-hive-muted">
                <p>
                  Hive does not begin a consultation by selling services. We
                  first establish what your employer and application location
                  are likely to require.
                </p>
                <p>
                  Only after understanding the relevant factors do we recommend
                  the minimum documents necessary for the requirements confirmed
                  at that time.
                </p>
              </div>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2">
              {consultationFactors.map((factor) => (
                <li
                  key={factor}
                  className="flex items-center gap-3 rounded-xl border border-hive-border bg-hive-bg p-4 text-sm text-hive-muted"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-hive-accent" />
                  {factor}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-16" aria-labelledby="common-questions">
          <div className="mb-8 max-w-3xl">
            <h2
              id="common-questions"
              className="mb-3 text-2xl font-bold uppercase tracking-tight text-white md:text-3xl"
            >
              Common Questions We Help Answer
            </h2>
            <p className="leading-relaxed text-hive-muted">
              A useful consultation starts with the applicant&apos;s actual job,
              employer instructions, document history, location, and deadline.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {questions.map((item) => (
              <div
                key={item.question}
                className={`flex items-start gap-4 rounded-2xl border border-hive-border bg-hive-surface p-5 ${
                  item.answer ? "md:col-span-2" : ""
                }`}
              >
                <HelpCircle
                  className="mt-0.5 h-5 w-5 shrink-0 text-hive-accent"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm font-medium leading-relaxed text-white">
                    {item.question}
                  </p>
                  {item.answer && (
                    <p className="mt-2 text-sm leading-relaxed text-hive-muted">
                      {item.answer}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16" aria-labelledby="document-process">
          <div className="mb-8 max-w-3xl">
            <h2
              id="document-process"
              className="mb-3 text-2xl font-bold uppercase tracking-tight text-white md:text-3xl"
            >
              From Job Offer to Employer Handoff
            </h2>
            <p className="leading-relaxed text-hive-muted">
              This sequence shows where Hive&apos;s document-preparation role
              begins and where the employer-led application continues.
            </p>
          </div>

          <ol className="mx-auto max-w-3xl">
            {process.map((step, index) => {
              const Icon = step.icon;
              const isFinalStep = index === process.length - 1;
              return (
                <li key={step.title}>
                  <div
                    className={`rounded-2xl border p-6 ${
                      isFinalStep
                        ? "border-hive-accent/30 bg-hive-elevated"
                        : "border-hive-border bg-hive-surface"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-hive-accent/10">
                        <Icon
                          className="h-5 w-5 text-hive-accent"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <p className="mb-1 text-xs font-bold uppercase tracking-widest text-hive-accent">
                          Step {index + 1}
                        </p>
                        <h3 className="mb-2 text-lg font-semibold text-white">
                          {step.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-hive-muted">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  {!isFinalStep && (
                    <div className="flex h-10 items-center justify-center">
                      <ArrowDown
                        className="h-5 w-5 text-hive-dim"
                        aria-hidden="true"
                      />
                    </div>
                  )}
                </li>
              );
            })}
          </ol>
        </section>

        <section className="mb-16" aria-labelledby="why-hive">
          <div className="mb-8 max-w-3xl">
            <h2
              id="why-hive"
              className="mb-3 text-2xl font-bold uppercase tracking-tight text-white md:text-3xl"
            >
              Why Clients Choose Hive
            </h2>
            <p className="leading-relaxed text-hive-muted">
              Practical document support should reduce uncertainty, not add
              unnecessary services.
            </p>
          </div>

          <ul className="grid gap-4 md:grid-cols-2">
            {whyHive.map((reason) => (
              <li
                key={reason}
                className="flex items-start gap-3 rounded-2xl border border-hive-border bg-hive-surface p-5 text-sm leading-relaxed text-hive-muted"
              >
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-hive-accent"
                  aria-hidden="true"
                />
                {reason}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-hive-border bg-hive-surface p-8 text-center md:p-10">
          <h2 className="mb-3 text-2xl font-bold uppercase tracking-tight text-white">
            Confirm Before You Process
          </h2>
          <p className="mx-auto mb-6 max-w-2xl leading-relaxed text-hive-muted">
            Share your job location, employer instructions, documents, and
            deadline. Hive will help identify what should be prepared before
            you spend time or money on the wrong process.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center rounded-xl bg-hive-accent px-6 py-3 font-semibold text-hive-bg transition-colors hover:bg-hive-accent-hover"
            >
              Confirm Your Document Requirements
            </Link>
            <Link
              href="/services/apostille/"
              className="inline-flex items-center justify-center rounded-xl border border-hive-border px-6 py-3 font-semibold text-white transition-colors hover:border-hive-accent/50"
            >
              Explore Apostille Services
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

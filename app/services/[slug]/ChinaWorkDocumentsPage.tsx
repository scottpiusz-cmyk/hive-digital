import Link from "next/link";
import {
  ArrowDown,
  Award,
  Baby,
  BriefcaseBusiness,
  Building2,
  FileSearch,
  GraduationCap,
  Heart,
  HelpCircle,
  Send,
  ShieldCheck,
  Stamp,
} from "lucide-react";

const typicalDocuments = [
  {
    icon: ShieldCheck,
    title: "Criminal Background Check",
    description:
      "The correct report may be state-level or national-level, depending on the employer and application city.",
  },
  {
    icon: GraduationCap,
    title: "Degree",
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
    title: "Marriage Certificate",
    description:
      "A spouse joining the applicant may need a legalized marriage certificate for the employer-led process.",
  },
  {
    icon: Baby,
    title: "Birth Certificate",
    description:
      "Dependent children may need legalized birth certificates showing the relationship to the applicant.",
  },
];

const questions = [
  "Which background check do I need?",
  "Does my degree need an Apostille?",
  "What if my passport and degree names do not match?",
  "How can I prepare documents while already living overseas?",
  "What should I do if my employer gave incomplete instructions?",
  "Which documents should I prioritize if I have a tight deadline?",
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
          Hive helps professionals, teachers, families, and HR teams prepare and
          legalize documents an employer may require before beginning a China
          work permit and visa application.
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
              The final list depends on the employer and application city. The
              documents below are common starting points, not a universal
              checklist.
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
                  <h3 className="mb-2 text-lg font-semibold text-white">
                    {document.title}
                  </h3>
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
                  Confirm the requirement before paying for a more expensive or
                  time-consuming report. Hive recommends only the document that
                  satisfies the requirements known at the time of consultation.
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
            {questions.map((question) => (
              <div
                key={question}
                className="flex items-start gap-4 rounded-2xl border border-hive-border bg-hive-surface p-5"
              >
                <HelpCircle
                  className="mt-0.5 h-5 w-5 shrink-0 text-hive-accent"
                  aria-hidden="true"
                />
                <p className="text-sm font-medium leading-relaxed text-white">
                  {question}
                </p>
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

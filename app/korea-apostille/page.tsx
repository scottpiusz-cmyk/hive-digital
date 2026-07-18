import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle,
  FileQuestion,
  FileText,
  Fingerprint,
  GraduationCap,
  ShieldCheck,
  Stamp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Korea Apostille and Document Services | Hive Digital",
  description:
    "Review document paths for South Korea, including FBI background checks, US apostilles, degrees, certificates, and fingerprint-supported applications.",
  alternates: {
    canonical: "/korea-apostille/",
  },
  openGraph: {
    title: "Korea Apostille and Document Services | Hive Digital",
    description:
      "Identify the appropriate document and authentication path before preparing US-issued documents for use in South Korea.",
    type: "website",
  },
};

const visaCategories = [
  {
    visa: "E-2",
    title: "English Teacher",
    description:
      "Applicants are typically asked for these U.S.-issued documents:",
    documents: [
      "FBI Background Check",
      "Apostilled Bachelor's Degree",
      "Official Transcripts (when requested)",
    ],
    href: "#common-document-paths",
    linkLabel: "Review common document paths",
    icon: GraduationCap,
  },
  {
    visa: "E-7",
    title: "Professional",
    description:
      "Requirements depend on the occupation and employer. The document list commonly involves an FBI background check, degree, employment documents, or professional qualifications.",
    href: "#common-document-paths",
    linkLabel: "Review common document paths",
    icon: Building2,
  },
  {
    visa: "?",
    title: "Not Sure",
    description:
      "Contact Hive before ordering documents. We can review the instructions from your employer or sponsor and help identify which documents may be relevant.",
    href: "/contact/",
    linkLabel: "Tell us your situation",
    icon: FileQuestion,
  },
];

const documentPaths = [
  {
    title: "FBI Background Check",
    description:
      "For requests that specifically call for a federal U.S. criminal-record check. Confirm whether the result also needs an apostille before starting.",
    href: "/services/background-checks/",
    linkLabel: "Explore background checks",
    icon: ShieldCheck,
  },
  {
    title: "Degree Apostille",
    description:
      "The correct route can depend on the degree copy, notarization, issuing institution, and the format requested by the employer or authority.",
    href: "/services/apostille/",
    linkLabel: "Explore apostille services",
    icon: GraduationCap,
  },
  {
    title: "Fingerprinting",
    description:
      "Applicants may need fingerprint cards for an FBI background-check application. Available options depend on whether the applicant is in Korea, China, or elsewhere.",
    href: "#fingerprinting",
    linkLabel: "Review fingerprinting options",
    icon: Fingerprint,
  },
  {
    title: "TEFL / TESOL",
    description:
      "Teaching certificates are privately issued and may follow a different authentication route from a university degree. Check whether the certificate is actually requested.",
    href: "/services/apostille/",
    linkLabel: "Review authentication support",
    icon: FileText,
  },
  {
    title: "Employment Documents",
    description:
      "Employment letters, contracts, or proof of experience may be requested for some professional roles. The issuer and requested use determine the next step.",
    href: "/services/apostille/",
    linkLabel: "Review document authentication",
    icon: Building2,
  },
  {
    title: "Other Documents",
    description:
      "Personal, academic, professional, or corporate documents can each require a different route. Start with the exact wording supplied by the requester.",
    href: "/contact/",
    linkLabel: "Ask about another document",
    icon: Stamp,
  },
];

const consultationReasons = [
  {
    title: "Review the instructions first",
    description:
      "We review employer or sponsor instructions before recommending documents or services.",
  },
  {
    title: "Reduce rejection risks",
    description:
      "We look for document, issuer, format, or authentication issues that could lead to a document being rejected.",
  },
  {
    title: "Find the practical route",
    description:
      "We explain the fastest practical route based on the documents requested, the applicant's location, and the available options.",
  },
  {
    title: "Avoid unnecessary services",
    description:
      "If the instructions do not call for an additional service, we tell the client rather than adding it to the workflow.",
  },
];

const faqs = [
  {
    question: "Do all documents used in South Korea need an apostille?",
    answer:
      "No. It depends on the document, what it will be used for, and the instructions from the employer, sponsor, or receiving authority. It is worth checking the request before arranging an apostille.",
  },
  {
    question: "Is an FBI background check the same as a state police check?",
    answer:
      "No. They come from different authorities and cover different record sources. If your instructions say FBI, a state police check should not be treated as a substitute unless the requester confirms it.",
  },
  {
    question: "Can I use an electronic FBI result?",
    answer:
      "Possibly, but the answer depends on what the requester will accept and whether the result needs a later authentication step. Ask whether they need an electronic file, printed copy, sealed document, or another format.",
  },
  {
    question: "Does every E-2 teaching applicant need the same documents?",
    answer:
      "Not always. The employer, nationality, visa filing circumstances, and reviewing office can affect the list. Start with the employer's instructions and confirm anything unclear before ordering documents.",
  },
  {
    question: "Can Hive guarantee that my documents or visa will be accepted?",
    answer:
      "No. Hive can review instructions and coordinate agreed document services, but the employer, school, university, authority, or visa office makes the final decision.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.hiverelo.com/korea-apostille/#webpage",
      url: "https://www.hiverelo.com/korea-apostille/",
      name: "Preparing U.S. Documents for Working in South Korea",
      description:
        "Guidance on common U.S.-issued document paths for employment and immigration in South Korea.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Countries",
          item: "https://www.hiverelo.com/countries/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "South Korea Document Services",
          item: "https://www.hiverelo.com/korea-apostille/",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function KoreaApostillePage() {
  return (
    <main className="pt-24 pb-16 px-6 lg:px-12 bg-hive-bg min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="max-w-6xl mx-auto">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm">
          <Link
            href="/countries/"
            className="text-hive-muted hover:text-white transition-colors"
          >
            Countries
          </Link>
          <span className="text-hive-dim mx-2" aria-hidden="true">
            /
          </span>
          <span className="text-white">South Korea</span>
        </nav>

        <section className="max-w-4xl mb-20">
          <span className="inline-flex px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full bg-red-500/10 text-red-400 border border-red-500/20 mb-5">
            South Korea destination hub
          </span>
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-white mb-6">
            Preparing U.S. Documents for Working in South Korea
          </h1>
          <p className="text-hive-muted text-lg leading-relaxed max-w-3xl mb-8">
            Hive helps Americans and other holders of U.S.-issued documents
            prepare the correct documents for employment and immigration in
            South Korea.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-500 transition-colors"
            >
              Tell Us Your Situation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services/"
              className="inline-flex items-center justify-center px-6 py-3 border border-hive-border text-white font-semibold rounded-xl hover:border-red-500/50 transition-colors"
            >
              View Services
            </Link>
          </div>
        </section>

        <section className="mb-20" aria-labelledby="choose-korea-visa">
          <div className="max-w-3xl mb-8">
            <span className="text-red-400 text-sm font-semibold uppercase tracking-widest">
              Start here
            </span>
            <h2
              id="choose-korea-visa"
              className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight mt-2 mb-4"
            >
              Which Visa Are You Preparing For?
            </h2>
            <p className="text-hive-muted leading-relaxed">
              Your visa category and employer instructions should guide the
              document list. Choose the closest match before reviewing
              individual services.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visaCategories.map((category) => {
              const Icon = category.icon;
              return (
                <Link
                  key={category.title}
                  href={category.href}
                  className="group bg-hive-surface border border-hive-border rounded-2xl p-7 hover:border-red-500/40 transition-colors"
                >
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-red-500" />
                    </div>
                    <span className="text-3xl font-black text-red-500">
                      {category.visa}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {category.title}
                  </h3>
                  <p className="text-hive-muted leading-relaxed mb-4">
                    {category.description}
                  </p>
                  {category.documents && (
                    <ul className="space-y-2 mb-5">
                      {category.documents.map((document) => (
                        <li
                          key={document}
                          className="flex items-start gap-2 text-hive-muted text-sm leading-relaxed"
                        >
                          <CheckCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                          {document}
                        </li>
                      ))}
                    </ul>
                  )}
                  <span className="inline-flex items-center gap-2 text-red-400 text-sm font-semibold group-hover:text-white transition-colors">
                    {category.linkLabel} <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        <section
          id="common-document-paths"
          className="scroll-mt-24 mb-20"
          aria-labelledby="common-document-paths-heading"
        >
          <div className="max-w-3xl mb-8">
            <span className="text-red-400 text-sm font-semibold uppercase tracking-widest">
              Common U.S. document paths
            </span>
            <h2
              id="common-document-paths-heading"
              className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight mt-2 mb-4"
            >
              Start With the Document You Were Asked For
            </h2>
            <p className="text-hive-muted leading-relaxed">
              These are common starting points, not a universal South Korea
              checklist. Confirm the exact document and format before ordering.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documentPaths.map((path) => {
              const Icon = path.icon;
              return (
                <Link
                  key={path.title}
                  href={path.href}
                  className="group bg-hive-surface border border-hive-border rounded-2xl p-6 hover:border-red-500/40 transition-colors"
                >
                  <div className="w-11 h-11 rounded-xl bg-red-500/10 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {path.title}
                  </h3>
                  <p className="text-hive-muted text-sm leading-relaxed mb-5">
                    {path.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-red-400 text-sm font-semibold group-hover:text-white transition-colors">
                    {path.linkLabel} <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="mb-20" aria-labelledby="why-contact-hive">
          <div className="max-w-3xl mb-8">
            <span className="text-red-400 text-sm font-semibold uppercase tracking-widest">
              Consultation before processing
            </span>
            <h2
              id="why-contact-hive"
              className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight mt-2 mb-4"
            >
              Why Clients Contact Hive
            </h2>
            <p className="text-hive-muted leading-relaxed">
              The first step is understanding what the employer or receiving
              organization actually asked for. Hive then recommends a document
              path based on those instructions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {consultationReasons.map((reason) => (
              <div
                key={reason.title}
                className="bg-hive-surface border border-hive-border rounded-2xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-4 h-4 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-hive-muted text-sm leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="fingerprinting"
          className="scroll-mt-24 bg-hive-elevated border border-hive-border rounded-2xl p-7 lg:p-10 mb-20"
          aria-labelledby="fingerprinting-heading"
        >
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-12 items-start">
            <div>
              <div className="w-11 h-11 rounded-xl bg-red-500/10 flex items-center justify-center mb-5">
                <Fingerprint className="w-5 h-5 text-red-500" />
              </div>
              <span className="text-red-400 text-sm font-semibold uppercase tracking-widest">
                Fingerprinting for FBI processing
              </span>
              <h2
                id="fingerprinting-heading"
                className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight mt-2 mb-4"
              >
                Fingerprinting Options in Korea and China
              </h2>
              <p className="text-hive-muted leading-relaxed">
                Your location affects how fingerprints can be collected, but
                you may not need to travel to a Hive office to begin an FBI
                background-check application.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-hive-surface border border-hive-border rounded-xl p-5">
                <h3 className="text-white font-semibold mb-2">
                  Applicants in South Korea
                </h3>
                <p className="text-hive-muted text-sm leading-relaxed">
                  Applicants in Korea can usually obtain ink fingerprints
                  locally. Confirm that the fingerprints are recorded on the
                  appropriate card and that all required fields are complete.
                </p>
              </div>
              <div className="bg-hive-surface border border-hive-border rounded-xl p-5">
                <h3 className="text-white font-semibold mb-2">
                  Applicants in China
                </h3>
                <p className="text-hive-muted text-sm leading-relaxed">
                  Applicants in China may use Hive Livescan or periodic
                  fingerprint collection services, depending on location and
                  availability.
                </p>
              </div>
              <div className="bg-hive-surface border border-hive-border rounded-xl p-5">
                <h3 className="text-white font-semibold mb-2">
                  Using scanned fingerprint cards
                </h3>
                <p className="text-hive-muted text-sm leading-relaxed">
                  Scanned fingerprint cards can be used for FBI processing.
                  Hive can review the card format and explain the submission
                  route before processing begins.
                </p>
              </div>
              <Link
                href="/fingerprinting/"
                className="inline-flex items-center gap-2 text-red-400 hover:text-white text-sm font-semibold pt-2 transition-colors"
              >
                View fingerprinting services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <section aria-labelledby="korea-document-faq">
          <div className="max-w-3xl mb-8">
            <span className="text-red-400 text-sm font-semibold uppercase tracking-widest">
              Frequently asked questions
            </span>
            <h2
              id="korea-document-faq"
              className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight mt-2"
            >
              Questions About Documents for South Korea
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="bg-hive-surface border border-hive-border rounded-2xl p-6 lg:p-7"
              >
                <h3 className="text-lg font-semibold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-hive-muted leading-relaxed">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

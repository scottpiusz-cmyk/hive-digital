import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle,
  CircleDollarSign,
  ClipboardCheck,
  FileQuestion,
  FileText,
  Fingerprint,
  GraduationCap,
  Languages,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Star,
  Stamp,
  TriangleAlert,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Korea Apostille and Document Services | Hive Digital",
  description:
    "Find FBI fingerprinting in Seoul, prepare an FD-258 fingerprint card in Korea, and review background check and apostille support.",
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

const fingerprintLocations = [
  {
    name: "Seoul Seocho Police Station",
    address: ["179 Banpo-daero", "Seocho-gu", "Seoul"],
    phone: "02-532-0112",
    phoneHref: "tel:+8225320112",
    cost: "Usually free",
    note: "One of the most commonly recommended locations for foreign applicants who need an FBI fingerprint card.",
    recommended: true,
  },
  {
    name: "Seoul Yeongdeungpo Police Station",
    address: ["608 Gukhoe-daero", "Yeongdeungpo-gu", "Seoul"],
    phone: "182 (Korean Police Information Line)",
    phoneHref: "tel:182",
    cost: "Usually free",
    recommended: false,
  },
  {
    name: "Seoul Gangnam Police Station",
    address: ["11 Teheran-ro 114-gil", "Gangnam-gu", "Seoul"],
    phone: "02-3673-9324",
    phoneHref: "tel:+82236739324",
    cost: "Usually free",
    recommended: false,
  },
];

const fingerprintChecklist = [
  "FBI FD-258 fingerprint card",
  "Passport",
  "Alien Registration Card / Residence Card (if applicable)",
  "Pen",
  "Fingerprint ink (optional, depending on the station)",
];

const reviewChannels = [
  "Email",
  "KakaoTalk",
  "WeChat",
  "WhatsApp",
  "Other Hive-connected messaging platforms",
];

const fingerprintReviewChecks = [
  "Poor fingerprint quality",
  "Missing information",
  "Incorrect signatures",
  "Incorrect dates",
  "Formatting problems",
];

const fbiSupportServices = [
  {
    label: "FBI Background Checks",
    href: "/services/background-checks/",
  },
  { label: "Apostille Services", href: "/services/apostille/" },
  { label: "Fingerprinting Guidance", href: "/fingerprinting/" },
  { label: "International Document Services", href: "/services/" },
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

        <section className="mb-20" aria-labelledby="korea-document-faq">
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

        <section
          id="fingerprinting"
          className="scroll-mt-24 mb-20"
          aria-labelledby="fingerprinting-heading"
        >
          <div className="max-w-4xl mb-8">
            <div className="w-11 h-11 rounded-xl bg-red-500/10 flex items-center justify-center mb-5">
              <Fingerprint
                className="w-5 h-5 text-red-500"
                aria-hidden="true"
              />
            </div>
            <span className="text-red-400 text-sm font-semibold uppercase tracking-widest">
              FBI fingerprinting Seoul
            </span>
            <h2
              id="fingerprinting-heading"
              className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight mt-2 mb-4"
            >
              FBI Background Check Fingerprinting in Seoul
            </h2>
            <p className="text-hive-muted leading-relaxed mb-4">
              For the Hive workflow described here, applicants requesting an{" "}
              <Link
                href="/services/background-checks/"
                className="text-red-400 underline decoration-red-500/40 underline-offset-4 hover:text-white"
              >
                FBI Identity History Summary
              </Link>
              {" "}submit current fingerprints on an FBI FD-258 fingerprint
              card. FBI fingerprinting is available in Seoul, but procedures
              can vary by police station.
            </p>
            <p className="text-white font-medium leading-relaxed">
              Call ahead before visiting to confirm that the station can
              provide FD-258 fingerprinting, when the appropriate department is
              open, and whether there is a fee.
            </p>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-white mb-5">
              Recommended Locations
            </h3>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {fingerprintLocations.map((location) => (
                <article
                  key={location.name}
                  className={`relative rounded-2xl border p-6 ${
                    location.recommended
                      ? "border-red-500/50 bg-red-500/10 shadow-lg shadow-red-950/20"
                      : "border-hive-border bg-hive-surface"
                  }`}
                >
                  {location.recommended && (
                    <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-red-300">
                      <Star
                        className="h-3.5 w-3.5 fill-current"
                        aria-hidden="true"
                      />
                      Recommended
                    </span>
                  )}
                  <h4 className="text-xl font-bold text-white mb-5">
                    {location.name}
                  </h4>
                  <dl className="space-y-4 text-sm">
                    <div className="flex items-start gap-3">
                      <MapPin
                        className="mt-0.5 h-4 w-4 shrink-0 text-red-500"
                        aria-hidden="true"
                      />
                      <div>
                        <dt className="font-semibold text-white">Address</dt>
                        <dd className="mt-1 text-hive-muted not-italic">
                          <address className="not-italic">
                            {location.address.map((line) => (
                              <span key={line} className="block">
                                {line}
                              </span>
                            ))}
                          </address>
                        </dd>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone
                        className="mt-0.5 h-4 w-4 shrink-0 text-red-500"
                        aria-hidden="true"
                      />
                      <div>
                        <dt className="font-semibold text-white">Phone</dt>
                        <dd className="mt-1">
                          <a
                            href={location.phoneHref}
                            className="text-hive-muted hover:text-white"
                          >
                            {location.phone}
                          </a>
                        </dd>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CircleDollarSign
                        className="mt-0.5 h-4 w-4 shrink-0 text-red-500"
                        aria-hidden="true"
                      />
                      <div>
                        <dt className="font-semibold text-white">
                          Estimated cost
                        </dt>
                        <dd className="mt-1 text-hive-muted">
                          {location.cost}. Confirm when calling.
                        </dd>
                      </div>
                    </div>
                  </dl>
                  {location.note && (
                    <p className="mt-5 border-t border-red-500/20 pt-4 text-sm leading-relaxed text-hive-muted">
                      {location.note}
                    </p>
                  )}
                </article>
              ))}
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-2 mb-10">
            <div className="rounded-2xl border border-hive-border bg-hive-surface p-6 lg:p-7">
              <div className="flex items-center gap-3 mb-5">
                <ClipboardCheck
                  className="h-5 w-5 text-red-500"
                  aria-hidden="true"
                />
                <h3 className="text-xl font-bold text-white">What to Bring</h3>
              </div>
              <ul className="space-y-3">
                {fingerprintChecklist.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-relaxed text-hive-muted"
                  >
                    <CheckCircle
                      className="mt-0.5 h-4 w-4 shrink-0 text-red-500"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-5">
              <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-6 lg:p-7">
                <div className="flex items-center gap-3 mb-5">
                  <Languages
                    className="h-5 w-5 text-red-400"
                    aria-hidden="true"
                  />
                  <h3 className="text-xl font-bold text-white">What to Say</h3>
                </div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-red-300">
                  Korean
                </p>
                <p lang="ko" className="text-white leading-relaxed mb-5">
                  미국 FBI 신원조회용 지문 채취를 하고 싶습니다.
                  <br />
                  FD-258 지문 카드 작성이 가능한지 확인 부탁드립니다.
                </p>
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-red-300">
                  English translation
                </p>
                <p className="text-hive-muted leading-relaxed">
                  “I need fingerprints taken for a U.S. FBI background check.
                  <br />
                  Can you help complete an FD-258 fingerprint card?”
                </p>
              </div>

              <div className="rounded-2xl border border-hive-border bg-hive-surface p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Building2
                    className="h-5 w-5 text-red-500"
                    aria-hidden="true"
                  />
                  <h3 className="text-xl font-bold text-white">Where to Go</h3>
                </div>
                <p className="text-sm text-hive-muted mb-3">Ask for:</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <p className="rounded-xl bg-hive-elevated p-4 text-sm text-white">
                    <span lang="ko" className="block font-semibold">
                      민원실
                    </span>
                    <span className="text-hive-muted">
                      Civil Affairs Office
                    </span>
                  </p>
                  <p className="rounded-xl bg-hive-elevated p-4 text-sm text-white">
                    <span lang="ko" className="block font-semibold">
                      지문 담당 부서
                    </span>
                    <span className="text-hive-muted">
                      Fingerprint Department
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <aside
            className="mb-10 overflow-hidden rounded-2xl border-2 border-red-500/60 bg-red-950/30 shadow-xl shadow-red-950/30"
            aria-labelledby="send-scan-heading"
          >
            <div className="flex items-center gap-3 border-b border-red-500/30 bg-red-600/20 px-6 py-5 lg:px-8">
              <TriangleAlert
                className="h-6 w-6 shrink-0 text-red-300"
                aria-hidden="true"
              />
              <h3
                id="send-scan-heading"
                className="text-2xl font-bold text-white"
              >
                Send Your Fingerprint Card Scan to Hive
              </h3>
            </div>
            <div className="p-6 lg:p-8">
              <p className="text-lg font-semibold leading-relaxed text-white mb-6">
                After fingerprinting, scan the completed card at a minimum of
                400 DPI and send the scan to Hive for review and processing.
                Once Hive receives a usable scan and the required applicant
                details, Hive processes the FBI report in 24–48 hours before
                the Apostille process begins.
              </p>
              <div className="grid gap-7 lg:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-white mb-4">
                    Hive accepts scans via:
                  </h4>
                  <ul className="space-y-3">
                    {reviewChannels.map((channel) => (
                      <li
                        key={channel}
                        className="flex items-start gap-3 text-sm text-hive-muted"
                      >
                        <CheckCircle
                          className="mt-0.5 h-4 w-4 shrink-0 text-red-400"
                          aria-hidden="true"
                        />
                        {channel}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-4">
                    Hive will review the card to help prevent delays caused by:
                  </h4>
                  <ul className="space-y-3">
                    {fingerprintReviewChecks.map((check) => (
                      <li
                        key={check}
                        className="flex items-start gap-3 text-sm text-hive-muted"
                      >
                        <CheckCircle
                          className="mt-0.5 h-4 w-4 shrink-0 text-red-400"
                          aria-hidden="true"
                        />
                        {check}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-7 rounded-xl border border-red-500/30 bg-red-600/15 p-5">
                <p className="font-semibold leading-relaxed text-white">
                  Send the scan to Hive before taking any further submission
                  steps. After the scan is approved, Hive will confirm the FBI
                  report processing and Apostille instructions.
                </p>
              </div>
            </div>
          </aside>

          <div className="rounded-2xl border border-hive-border bg-hive-elevated p-7 text-center lg:p-10">
            <MessageCircle
              className="mx-auto mb-4 h-7 w-7 text-red-500"
              aria-hidden="true"
            />
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Need Help With Your FBI Background Check?
            </h3>
            <p className="mx-auto mb-6 max-w-3xl leading-relaxed text-hive-muted">
              Hive Digital Consulting assists international clients with FBI
              Background Checks, Apostilles, fingerprinting guidance, and
              international document services. The correct next step depends
              on where the document will be used and the instructions from the
              receiving organization.
            </p>
            <ul className="mx-auto mb-7 grid max-w-3xl gap-3 text-left sm:grid-cols-2">
              {fbiSupportServices.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="flex items-center gap-3 rounded-xl border border-hive-border bg-hive-surface px-4 py-3 text-sm font-medium text-white transition-colors hover:border-red-500/40"
                  >
                    <CheckCircle
                      className="h-4 w-4 shrink-0 text-red-500"
                      aria-hidden="true"
                    />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-red-500"
            >
              Request a Quote
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

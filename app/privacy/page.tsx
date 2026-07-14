import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy and Data Handling | Hive Digital",
  description:
    "Read how Hive Digital handles website enquiries and personal information related to document services.",
  alternates: {
    canonical: "/privacy/",
    languages: {
      en: "/privacy/",
      "zh-CN": "/zh/privacy/",
    },
  },
  openGraph: {
    title: "Privacy and Data Handling | Hive Digital",
    description:
      "How Hive Digital handles website enquiries and personal information related to document services.",
    type: "website",
  },
};

const sections = [
  {
    title: "Information You Choose to Provide",
    content: [
      "When you contact Hive Digital, you may provide your name, contact details, destination country, document type, timeline, and other information needed to understand your enquiry.",
      "This website does not provide a document-upload form. Please do not send passports, fingerprints, background checks, identification numbers, or other sensitive records until Hive has confirmed an appropriate transfer method and explained what is required.",
    ],
  },
  {
    title: "How Information Is Used",
    content: [
      "We use information to respond to enquiries, assess document requirements, prepare service recommendations or quotes, deliver agreed services, communicate progress, maintain business records, protect our systems, and meet applicable legal obligations.",
      "Hive seeks to collect only the information reasonably needed for the relevant enquiry or service.",
    ],
  },
  {
    title: "Contact Channels and Service Providers",
    content: [
      "The website links to email, telephone, WhatsApp, and other messaging services. Information sent through those channels is also handled under the relevant provider's terms and privacy practices.",
      "Where necessary to provide an agreed service, information may be shared with selected processing partners, couriers, translators, professional advisers, technology providers, or relevant authorities. Hive does not sell personal information.",
    ],
  },
  {
    title: "Website Technical Data",
    content: [
      "Hosting and security systems may process limited technical information such as IP address, browser type, requested pages, timestamps, and error or security logs. This information may be used to operate, secure, and troubleshoot the website.",
    ],
  },
  {
    title: "Retention and Security",
    content: [
      "Information is retained only as long as reasonably needed for the enquiry, service, business records, dispute handling, security, or applicable legal requirements. Retention can vary according to the document service and jurisdiction.",
      "Hive uses reasonable administrative and technical safeguards, but no internet transmission or storage method can be guaranteed completely secure.",
    ],
  },
  {
    title: "International Handling",
    content: [
      "Cross-border document services may require information to be handled in more than one country. When this is necessary, Hive aims to limit the information shared to what is required for the agreed service.",
    ],
  },
  {
    title: "Your Requests",
    content: [
      "You may contact Hive to ask about personal information associated with your enquiry, or to request correction or deletion. Some information may need to be retained where required for legal, security, accounting, or service-record purposes.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="pt-24 pb-16 px-6 lg:px-12 bg-hive-bg min-h-screen">
      <article className="max-w-4xl mx-auto">
        <p className="text-red-400 text-sm font-semibold uppercase tracking-widest mb-3">
          Last updated: July 14, 2026
        </p>
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-white mb-6">
          Privacy and Data Handling
        </h1>
        <p className="text-hive-muted text-lg leading-relaxed mb-12">
          Hive Digital Consulting helps clients identify and complete
          cross-border document processes. This notice explains how information
          received through this website and related enquiry channels may be
          handled. It does not replace any additional notice or agreement that
          may apply to a specific service.
        </p>

        <div className="space-y-6">
          {sections.map((section) => (
            <section
              key={section.title}
              className="bg-hive-surface border border-hive-border rounded-2xl p-6 lg:p-8"
            >
              <h2 className="text-xl font-bold text-white uppercase tracking-tight mb-4">
                {section.title}
              </h2>
              <div className="space-y-3">
                {section.content.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-hive-muted leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-8 bg-hive-elevated border border-red-500/20 rounded-2xl p-6 lg:p-8">
          <h2 className="text-xl font-bold text-white uppercase tracking-tight mb-3">
            Contact
          </h2>
          <p className="text-hive-muted leading-relaxed mb-4">
            For privacy questions or requests, contact Hive Digital Consulting
            at:
          </p>
          <a
            href="mailto:sales@hiverelo.com"
            className="text-red-400 hover:text-red-300 font-semibold transition-colors"
          >
            sales@hiverelo.com
          </a>
          <p className="text-hive-dim text-sm mt-5">
            This notice may be updated when the website, service process, or
            applicable requirements change. The current version will be posted
            on this page with its revision date.
          </p>
        </section>
      </article>
    </main>
  );
}

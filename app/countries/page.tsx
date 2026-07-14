import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Destination Country Document Services | Hive Digital",
  description:
    "Explore document apostille and authentication guidance for South Korea, Japan, Vietnam, and Thailand.",
  alternates: {
    canonical: "/countries/",
    languages: {
      en: "/countries/",
      "zh-CN": "/zh/countries/",
    },
  },
  openGraph: {
    title: "Destination Country Document Services | Hive Digital",
    description:
      "Country-specific document apostille and authentication guidance for key destinations in Asia.",
    type: "website",
  },
};

const countries = [
  {
    name: "South Korea",
    href: "/korea-apostille/",
    service: "Apostille services",
    description:
      "Document preparation and apostille support for Korea-bound personal, education, and corporate documents.",
  },
  {
    name: "Japan",
    href: "/japan-apostille/",
    service: "Apostille services",
    description:
      "Apostille and document preparation support for documents intended for use in Japan.",
  },
  {
    name: "Vietnam",
    href: "/vietnam-authentication/",
    service: "Authentication services",
    description:
      "Guidance on authentication and legalization routes for documents intended for use in Vietnam.",
  },
  {
    name: "Thailand",
    href: "/thailand-authentication/",
    service: "Authentication services",
    description:
      "Document authentication and legalization support for documents intended for use in Thailand.",
  },
];

export default function CountriesPage() {
  return (
    <main className="pt-24 pb-16 px-6 lg:px-12 bg-hive-bg min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-14">
          <span className="text-red-400 text-sm font-semibold uppercase tracking-widest">
            Destination guides
          </span>
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-white mt-3 mb-5">
            Country Document Services
          </h1>
          <p className="text-hive-muted text-lg leading-relaxed">
            The correct document route depends on where a document was issued,
            where it will be used, and what the receiving organization requires.
            Start with your destination below, then contact Hive for a review of
            your specific case before processing begins.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {countries.map((country) => (
            <Link
              key={country.href}
              href={country.href}
              className="group bg-hive-surface border border-hive-border rounded-2xl p-7 hover:border-red-500/40 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-red-500/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <p className="text-red-400 text-xs font-semibold uppercase tracking-wider mb-1">
                    {country.service}
                  </p>
                  <h2 className="text-2xl font-bold text-white mb-3">
                    {country.name}
                  </h2>
                  <p className="text-hive-muted text-sm leading-relaxed mb-5">
                    {country.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-white text-sm font-semibold group-hover:text-red-400 transition-colors">
                    View destination guide <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 bg-hive-elevated border border-hive-border rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white uppercase tracking-tight mb-3">
            Not Sure Which Process Applies?
          </h2>
          <p className="text-hive-muted max-w-2xl mx-auto mb-6">
            Tell us the issuing country, destination, document type, and
            receiving organization. We will help identify the appropriate route.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services/apostille/"
              className="inline-flex items-center justify-center px-6 py-3 border border-hive-border text-white font-semibold rounded-xl hover:border-red-500/50 transition-colors"
            >
              Apostille &amp; Authentication
            </Link>
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-500 transition-colors"
            >
              Discuss Your Documents
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Globe2 } from "lucide-react";

const countries = [
  {
    name: "China",
    code: "CN",
    href: "/services/china-visa/",
    headline: "Apostilles:\n• Police Clearance\n• Degree\n• TEFL",
    description:
      "Supporting professionals, families and businesses relocating to China.",
  },
  {
    name: "South Korea",
    code: "KR",
    href: "/korea-apostille/",
    headline: "FBI Reports • Degree Apostilles • TEFL Apostilles",
    description:
      "Supporting teachers, professionals and HR departments moving to South Korea.",
  },
  {
    name: "Japan",
    code: "JP",
    href: "/japan-apostille/",
    headline: "Apostilles • Background Checks • Professional Documents",
    description:
      "Document preparation for employment, residency and business in Japan.",
  },
  {
    name: "Vietnam",
    code: "VN",
    href: "/vietnam-authentication/",
    headline: "Embassy Authentication • Legalization",
    description:
      "Document preparation for employment, residency and business in Vietnam.",
  },
  {
    name: "Thailand",
    code: "TH",
    href: "/thailand-authentication/",
    headline: "Authentication • Legalization",
    description:
      "Supporting employment, education and corporate documentation for Thailand.",
  },
];

export default function CountriesWeSupport() {
  return (
    <section className="bg-hive-surface px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold uppercase tracking-tight text-white md:text-5xl">
            Countries We Support
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-hive-muted">
            Choose the country where your documents will be used. Every
            destination has different document requirements, whether that
            involves apostilles, embassy authentication, background checks or
            supporting documents.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {countries.map((country, index) => {
            const card = (
              <>
                <div
                  className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-sm font-bold tracking-wider text-red-400 ring-1 ring-red-500/20"
                  aria-hidden="true"
                >
                  {country.code}
                </div>
                <h3 className="mb-3 text-2xl font-bold text-white">
                  {country.name}
                </h3>
                <p className="mb-3 whitespace-pre-line text-sm font-semibold leading-relaxed text-red-400">
                  {country.headline}
                </p>
                <p className="text-sm leading-relaxed text-hive-muted">
                  {country.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors group-hover:text-red-400">
                  Explore {country.name}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </>
            );

            return (
              <motion.article
                key={country.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="h-full"
              >
                <Link
                  href={country.href}
                  className="group block h-full rounded-2xl border border-hive-border bg-hive-bg p-7 transition-all duration-300 hover:scale-[1.02] hover:border-red-500/30 hover:shadow-lg hover:shadow-red-500/10"
                >
                  {card}
                </Link>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mt-8 overflow-hidden rounded-2xl border border-hive-border bg-gradient-to-br from-hive-bg to-hive-elevated p-8 md:p-10"
        >
          <Globe2
            className="pointer-events-none absolute -right-12 -top-12 h-52 w-52 text-red-500/[0.04]"
            aria-hidden="true"
          />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 ring-1 ring-red-500/20">
                <Globe2 className="h-5 w-5 text-red-400" aria-hidden="true" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-white md:text-3xl">
                Don&apos;t see your destination?
              </h3>
              <div className="space-y-3 text-sm leading-relaxed text-hive-muted md:text-base">
                <p>
                  Our website highlights our core destinations, but Hive
                  provides document services for 21+ countries across Asia and
                  beyond.
                </p>
                <p>
                  If you don&apos;t see the country you&apos;re moving to,
                  simply ask us. We&apos;ll confirm the correct document
                  requirements before you spend time or money on the wrong
                  process.
                </p>
              </div>
            </div>

            <div className="flex shrink-0 flex-col items-start gap-4 lg:items-center">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-red-500"
              >
                Ask About Your Destination
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <p className="text-sm text-hive-dim">
                Serving clients across 21+ countries.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

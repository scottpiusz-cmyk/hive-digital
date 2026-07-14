import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllServiceSlugs, services } from "@/lib/services-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services[slug];
  if (!service) return {};
  return {
    title: `${service.title} — Hive Digital`,
    description: service.description.slice(0, 160),
    alternates: {
      canonical: `/services/${slug}/`,
    },
    openGraph: {
      title: `${service.title} — Hive Digital`,
      description: service.description.slice(0, 200),
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services[slug];
  if (!service) notFound();

  return (
    <main className="pt-24 pb-16 px-6 lg:px-12 bg-hive-bg min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="mb-4">
          <span className="text-hive-accent text-sm font-semibold uppercase tracking-widest">
            {service.subtitle}
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-6">
          {service.title}
        </h1>
        <p className="text-hive-muted text-lg leading-relaxed mb-12">
          {service.description}
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-hive-surface border border-hive-border rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">
              What&apos;s Included
            </h2>
            <ul className="space-y-3">
              {service.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-hive-muted text-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-hive-accent mt-1.5 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-hive-surface border border-hive-border rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">
              Process
            </h2>
            <ul className="space-y-3">
              {service.process.map((step, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-hive-muted text-sm"
                >
                  <span className="w-5 h-5 rounded-full bg-hive-accent/10 flex items-center justify-center text-hive-accent text-xs font-bold shrink-0">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* China PCC special requirements box */}
        {slug === "china-pcc" && (
          <div className="bg-hive-elevated border border-hive-accent/30 rounded-2xl p-6 mb-12">
            <h2 className="text-lg font-bold text-hive-accent uppercase tracking-tight mb-4">
              Requirements
            </h2>
            <ul className="space-y-2 mb-4">
              {[
                "Applicant must have proof of time spent living in China",
                "Copy of valid visa held during residence period",
                "Residence permit proof",
                "Passport copy and current contact details",
              ].map((req, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-hive-muted text-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-hive-accent mt-1.5 shrink-0" />
                  {req}
                </li>
              ))}
            </ul>
            <p className="text-hive-dim text-sm">
              Processing time and availability vary by city — contact us to
              confirm eligibility.
            </p>
          </div>
        )}

        <div className="bg-hive-surface border border-hive-border rounded-2xl p-6 mb-12">
          <h2 className="text-lg font-bold text-white mb-2 uppercase tracking-tight">
            Pricing
          </h2>
          <p className="text-hive-muted text-sm">{service.pricing}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="mailto:sales@hiverelo.com"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-hive-accent text-hive-bg font-semibold rounded-xl hover:bg-hive-accent-hover transition-colors"
          >
            Request a Quote
          </a>
          <a
            href="/services/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-hive-border text-white font-semibold rounded-xl hover:border-hive-accent/50 transition-colors"
          >
            All Services
          </a>
        </div>
      </div>
    </main>
  );
}

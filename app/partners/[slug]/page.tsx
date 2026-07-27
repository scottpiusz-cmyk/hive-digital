import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RecruiterPartnerPage } from "@/components/partner/RecruiterPartnerPage";
import {
  getPartnerPageConfig,
  partnerPageConfigs,
} from "@/lib/partners/configs";
import type { PartnerPageConfig } from "@/lib/partners/types";

const siteUrl = "https://www.hiverelo.com";

type PartnerPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return partnerPageConfigs.map(({ slug }) => ({ slug }));
}

function getPageUrl(config: PartnerPageConfig): string {
  return `${siteUrl}/partners/${config.slug}/`;
}

function getConfigOrNotFound(slug: string): PartnerPageConfig {
  const config = getPartnerPageConfig(slug);

  if (!config) {
    notFound();
  }

  return config;
}

export async function generateMetadata({
  params,
}: PartnerPageProps): Promise<Metadata> {
  const { slug } = await params;
  const config = getConfigOrNotFound(slug);
  const pageUrl = getPageUrl(config);

  return {
    title: config.metadata.title,
    description: config.metadata.description,
    keywords: config.metadata.keywords,
    alternates: {
      canonical: `/partners/${config.slug}/`,
    },
    openGraph: {
      type: "website",
      url: pageUrl,
      title: config.metadata.title,
      description: config.metadata.description,
      siteName: "Hive Digital",
    },
    twitter: {
      card: "summary",
      title: config.metadata.title,
      description: config.metadata.description,
    },
  };
}

function createStructuredData(config: PartnerPageConfig) {
  const pageUrl = getPageUrl(config);
  const partnerUrl = new URL(config.partnerOrganization.url);
  const partnerOrganizationId = `${partnerUrl.origin}/#organization`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: config.metadata.title,
        description: config.metadata.description,
        inLanguage: "en",
        about: config.metadata.about.map((name) => ({
          "@type": "Thing",
          name,
        })),
        provider: {
          "@id": `${siteUrl}/#organization`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${siteUrl}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: config.hero.title,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Hive Digital Consulting",
        alternateName: "Hive Digital",
        url: `${siteUrl}/`,
        email: "sales@hiverelo.com",
        telephone: "+8613764322474",
        description:
          "Cross-border document consulting for background checks, fingerprinting, apostilles and international employment documentation.",
        areaServed: "Asia-Pacific",
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: "sales@hiverelo.com",
          telephone: "+8613764322474",
          availableLanguage: ["English", "Chinese"],
        },
      },
      {
        "@type": "Organization",
        "@id": partnerOrganizationId,
        name: config.recruiterName,
        url: config.partnerOrganization.url,
        logo: new URL(config.logo.src, siteUrl).toString(),
        description: config.partnerOrganization.description,
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: config.faq.items.map((faq) => ({
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
}

export default async function PartnerPage({ params }: PartnerPageProps) {
  const { slug } = await params;
  const config = getConfigOrNotFound(slug);
  const structuredData = createStructuredData(config);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <RecruiterPartnerPage config={config} />
    </>
  );
}

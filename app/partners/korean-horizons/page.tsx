import type { Metadata } from "next";
import RecruiterPartnerPage from "@/components/partner/RecruiterPartnerPage";
import { koreanHorizonsPartner } from "@/lib/recruiter-partners";

const pageUrl =
  "https://www.hiverelo.com/partners/korean-horizons/";

export const metadata: Metadata = {
  title: koreanHorizonsPartner.metadata.title,
  description: koreanHorizonsPartner.metadata.description,
  keywords: koreanHorizonsPartner.metadata.keywords,
  alternates: {
    canonical: "/partners/korean-horizons/",
  },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: koreanHorizonsPartner.metadata.title,
    description: koreanHorizonsPartner.metadata.description,
    siteName: "Hive Digital",
  },
  twitter: {
    card: "summary",
    title: koreanHorizonsPartner.metadata.title,
    description: koreanHorizonsPartner.metadata.description,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: koreanHorizonsPartner.metadata.title,
      description: koreanHorizonsPartner.metadata.description,
      inLanguage: "en",
      about: [
        {
          "@type": "Thing",
          name: "Teaching in Korea documents",
        },
        {
          "@type": "Thing",
          name: "FBI and RCMP background checks",
        },
        {
          "@type": "Thing",
          name: "Apostilles and fingerprinting",
        },
      ],
      provider: {
        "@id": "https://www.hiverelo.com/#organization",
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
          item: "https://www.hiverelo.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Korean Horizons Candidate Resource Centre",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Organization",
      "@id": "https://www.hiverelo.com/#organization",
      name: "Hive Digital Consulting",
      alternateName: "Hive Digital",
      url: "https://www.hiverelo.com/",
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
      "@id": "https://koreanhorizons.com/#organization",
      name: "Korean Horizons",
      url: "https://koreanhorizons.com/",
      logo: "https://www.hiverelo.com/korean-horizons-logo.png",
      description:
        "Recruiter supporting applicants seeking public-school teaching positions in South Korea.",
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: koreanHorizonsPartner.faqAdditions.map((faq) => ({
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

export default function KoreanHorizonsPartnerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <RecruiterPartnerPage config={koreanHorizonsPartner} />
    </>
  );
}

import type { Metadata } from "next";
import Hero from "@/sections/Hero";
import TrustBar from "@/sections/TrustBar";
import ServicePipeline from "@/sections/ServicePipeline";
import TrustpilotCarousel from "@/sections/TrustpilotCarousel";
import ProcessSteps from "@/sections/ProcessSteps";
import LatestInsights from "@/sections/LatestInsights";
import FAQ from "@/sections/FAQ";
import Head from "next/head";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      "zh-CN": "/zh/",
    },
  },
};


export default function Home() {
  return (
    <>
      <Head>
        <title>Hive</title>
        <meta name="description" content="Hive - Your trusted partner for digital transformation" />
        <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Hive Digital",
        alternateName: "HiveRelo",
        url: "https://www.hiverelo.com",
        logo: "https://www.hiverelo.com/hero-bg.jpg",
        description: "Crossborder Document Specialists — apostille, authentication, background checks, and visa documentation for 21+ countries.",
        contactPoint: {
          "@type": "ContactPoint",
          email: "sales@hiverelo.com",
          telephone: "+8613764322474",
          contactType: "sales",
          availableLanguage: ["English", "Chinese"],
        },
        sameAs: [
          "https://www.trustpilot.com/review/hiverelo.com",
        ],
      }),
    }}
  />
</Head>
      <Hero />
      <TrustBar />
      <ServicePipeline />
      <TrustpilotCarousel />
      <ProcessSteps />
      <LatestInsights />
      <FAQ />
    </>
  );
}

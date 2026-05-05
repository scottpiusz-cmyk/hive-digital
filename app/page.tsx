import Hero from "@/sections/Hero";
import TrustBar from "@/sections/TrustBar";
import ServicePipeline from "@/sections/ServicePipeline";
import TrustpilotCarousel from "@/sections/TrustpilotCarousel";
import ProcessSteps from "@/sections/ProcessSteps";
import LatestInsights from "@/sections/LatestInsights";
import FAQ from "@/sections/FAQ";

export default function Home() {
  return (
    <>
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

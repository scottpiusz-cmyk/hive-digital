import Hero from "@/sections/Hero";
import TrustBar from "@/sections/TrustBar";
import ServicePipeline from "@/sections/ServicePipeline";
import ProcessSteps from "@/sections/ProcessSteps";
import TrustpilotCarousel from "@/sections/TrustpilotCarousel";
import FAQ from "@/sections/FAQ";
import LatestInsights from "@/sections/LatestInsights";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicePipeline />
      <ProcessSteps />
      <TrustpilotCarousel />
      <LatestInsights />
      <FAQ />
    </>
  );
}

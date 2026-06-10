import ZhHero from "@/sections/ZhHero";
import ZhTrustBar from "@/sections/ZhTrustBar";
import ZhServicePipeline from "@/sections/ZhServicePipeline";
import ZhTrustpilotCarousel from "@/sections/ZhTrustpilotCarousel";
import ZhProcessSteps from "@/sections/ZhProcessSteps";
import ZhLatestInsights from "@/sections/ZhLatestInsights";
import ZhFAQ from "@/sections/ZhFAQ";

export default function ChineseHomePage() {
  return (
    <>
      <ZhHero />
      <ZhTrustBar />
      <ZhServicePipeline />
      <ZhTrustpilotCarousel />
      <ZhProcessSteps />
      <ZhLatestInsights />
      <ZhFAQ />
    </>
  );
}

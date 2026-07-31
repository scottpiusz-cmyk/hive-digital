import HomeKnowledgeCentre from "@/components/knowledge-centre/HomeKnowledgeCentre";
import { knowledgeArticles } from "@/lib/insights-data";

export default function KnowledgeCentre() {
  return (
    <HomeKnowledgeCentre
      articles={knowledgeArticles}
      basePath="/knowledge-centre"
      title="Knowledge Centre"
      subtitle="Expert guides, practical resources and trusted information covering FBI background checks, fingerprinting, apostilles and international document preparation."
      guideLabel="Guide"
      readLabel="Read guide"
      viewAllLabel="View All Guides"
    />
  );
}

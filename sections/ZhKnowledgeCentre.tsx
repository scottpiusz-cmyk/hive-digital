import HomeKnowledgeCentre from "@/components/knowledge-centre/HomeKnowledgeCentre";
import { zhKnowledgeArticles } from "@/lib/zh-insights-data";

export default function ZhKnowledgeCentre() {
  return (
    <HomeKnowledgeCentre
      articles={zhKnowledgeArticles}
      basePath="/zh/knowledge-centre"
      title="知识中心"
      subtitle="专业指南、实用资源与可信信息，涵盖FBI背景调查、指纹采集、Apostille认证和国际文件准备。"
      guideLabel="指南"
      readLabel="阅读指南"
      viewAllLabel="查看全部指南"
    />
  );
}

import { Metadata } from "next";
import { Shield, Globe, Clock, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "关于Hive Digital | 上海跨境文件认证专家 | 15年经验",
  description: "Hive Digital — 上海跨境文件认证公司，15年经验，服务中国美国越南泰国韩国日本等21+国家，Trustpilot 4.9/5评分。",
  alternates: {
    canonical: "/zh/about/",
    languages: {
      en: "/about/",
      "zh-CN": "/zh/about/",
    },
  },
};

const stats = [
  { icon: Globe, value: "21+", label: "服务国家" },
  { icon: Shield, value: "15+", label: "年行业经验" },
  { icon: Clock, value: "24h", label: "最快交付" },
  { icon: Award, value: "4.9/5", label: "Trustpilot评分" },
];

export default function ChineseAboutPage() {
  return (
    <main className="pt-24 pb-16 px-6 lg:px-12 bg-hive-bg min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-white mb-6">
          关于<span className="text-red-500">Hive Digital</span>
        </h1>
        <p className="text-hive-muted text-lg max-w-3xl mb-12">
          您值得信赖的跨境文件认证合作伙伴，让复杂的国际文件流程变得简单高效。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="bg-hive-surface border border-hive-border rounded-2xl p-6 text-center">
                <Icon className="w-6 h-6 text-red-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-hive-muted uppercase tracking-wider">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-hive-surface border border-hive-border rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">我们的使命</h2>
            <p className="text-hive-muted text-sm leading-relaxed">
              简化跨境文件认证流程，为个人和企业提供快速、可靠、专业的文件服务。
              我们理解每一份文件背后都是重要的机会——无论是海外工作、留学、还是业务拓展。
            </p>
          </div>
          <div className="bg-hive-surface border border-hive-border rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">为什么选择我们</h2>
            <ul className="space-y-3 text-sm text-hive-muted">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                15年行业经验，处理数千份文件
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                覆盖21+国家的认证网络
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                双语团队，中文/英文无障碍沟通
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                Trustpilot 4.9/5，300+真实好评
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Stamp, FileText, Fingerprint, Plane, Building2, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "我们的服务 | Hive Digital",
  description: "Hive Digital提供全面的跨境文件认证服务，包括Apostille认证、使馆公证、背景调查、指纹采集、中国签证等。",
};

const services = [
  {
    icon: ShieldCheck,
    title: "联邦与州背景调查",
    description: "来自美国、加拿大、英国、澳大利亚等国家的犯罪记录检查和身份验证。",
    features: ["FBI身份历史摘要检查", "RCMP犯罪记录检查", "ACRO警方证明", "州级司法部检查"],
  },
  {
    icon: Stamp,
    title: "文件Apostille与认证",
    description: "海牙Apostille认证、使馆/领事馆公证、学位证明、结婚证明和公司文件的公证。",
    features: ["海牙Apostille：中国、韩国、日本", "使馆认证：越南、泰国等", "公证与认证翻译协调"],
  },
  {
    icon: FileText,
    title: "中国无犯罪记录证明",
    description: "从北京、上海、深圳等中国城市的公安局获取无犯罪记录证明。",
    features: ["北京公安局证明", "上海公安局证明", "深圳公安局证明", "公证与英文翻译"],
  },
  {
    icon: Fingerprint,
    title: "指纹采集服务",
    description: "在上海、北京、成都等主要城市提供快速、便捷的指纹采集服务。",
    features: ["FBI合规指纹采集", "传统墨水指纹", "24小时内数字交付", "安全快递纸质版"],
    link: "/zh/shanghai-fingerprinting/",
  },
  {
    icon: Plane,
    title: "中国签证与工作许可",
    description: "中国Z签证申请和居留许可文件的全流程准备和指导。",
    features: ["Z签证文件准备与审核", "居留许可申请支持", "文件翻译与认证"],
  },
  {
    icon: Building2,
    title: "中国企业注册",
    description: "从WFOE和合资公司设立到注册后合规，帮助外国企业在中国建立法律实体。",
    features: ["WFOE注册", "合资公司设立", "营业执照申请", "银行账户开立"],
  },
  {
    icon: MessageSquare,
    title: "辅助服务",
    description: "后台运营支持——人力资源、薪资、财务、税务合规和办公选址。",
    features: ["人力资源与薪资管理", "财务、会计与税务合规", "办公选址与租赁协调"],
  },
];

export default function ChineseServicesPage() {
  return (
    <main className="pt-24 pb-16 px-6 lg:px-12 bg-hive-bg min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-white mb-6">
          我们的<span className="text-red-500">服务</span>
        </h1>
        <p className="text-hive-muted text-lg max-w-3xl mb-12">
          端到端的文件认证和合规支持，覆盖亚洲及全球。
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="bg-hive-surface border border-hive-border rounded-2xl p-6 hover:border-red-500/30 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-red-500/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-red-500" />
                  </div>
                  <h2 className="text-xl font-bold text-white">{service.title}</h2>
                </div>
                <p className="text-hive-muted text-sm mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-hive-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                {service.link && (
                  <Link href={service.link} className="inline-flex items-center gap-1 text-red-400 text-sm mt-4 hover:text-white transition-colors">
                    了解更多 <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

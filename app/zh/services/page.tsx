import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Stamp, FileText, Fingerprint, Plane, Building2, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "中国文件认证与指纹采集服务 | Apostille海牙认证背景调查 | Hive Digital",
  description: "Hive Digital提供中国文件Apostille海牙认证、使馆公证、FBI背景调查、指纹采集、中国签证、五星卡文件等跨境文件认证与指纹采集服务。上海北京成都可预约。",
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
    features: ["海牙Apostille认证", "使馆/领事馆公证", "学位和教师证书公证", "结婚证明和公司文件公证"],
  },
  {
    icon: FileText,
    title: "中国无犯罪记录证明",
    description: "从北京、上海、深圳等中国城市的公安局获取无犯罪记录证明。",
    features: ["北京公安局无犯罪记录", "上海公安局无犯罪记录", "深圳公安局犯罪记录", "其他城市可咨询"],
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
    features: ["Z签证文件准备", "居留许可申请支持", "文件翻译与认证"],
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
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-white mb-4">
            我们的服务
          </h1>
          <p className="text-hive-muted text-lg max-w-3xl mx-auto">
            覆盖亚洲及全球的端到端文件认证和合规支持。从Apostille认证到签证文件，我们处理一切。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-hive-surface border border-hive-border rounded-2xl p-8 hover:border-red-500/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-red-500" />
                </div>
                <h2 className="text-xl font-bold text-white mb-3">{service.title}</h2>
                <p className="text-hive-muted text-sm mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-hive-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                {service.link && (
                  <Link
                    href={service.link}
                    className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 text-sm font-medium transition-colors"
                  >
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

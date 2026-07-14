import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Clock, Shield, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "指纹采集服务 — 上海、北京、成都 | Hive Digital",
  description: "上海、北京、成都及中国其他主要城市提供快速、便捷、准确的指纹采集服务。FBI合规电子和墨水指纹采集。",
  alternates: {
    canonical: "/zh/shanghai-fingerprinting/",
    languages: {
      en: "/shanghai-fingerprinting/",
      "zh-CN": "/zh/shanghai-fingerprinting/",
    },
  },
  openGraph: {
    title: "指纹采集服务 — 上海、北京、成都 | Hive Digital",
    description: "中国专业的指纹采集解决方案。电子和墨水采集，适用于FBI检查、签证和就业。",
  },
};

const cities = [
  { name: "上海", status: "可用", note: "当天预约" },
  { name: "北京", status: "可用", note: "提前2天预约" },
  { name: "成都", status: "可用", note: "提前3天预约" },
  { name: "深圳", status: "可用", note: "需预约" },
  { name: "广州", status: "可用", note: "需预约" },
  { name: "杭州", status: "可用", note: "需预约" },
  { name: "南京", status: "可用", note: "需预约" },
  { name: "其他城市", status: "咨询", note: "请联系我们确认可用性" },
];

const useCases = [
  { title: "FBI背景调查", description: "为FBI身份历史摘要检查提供指纹采集。直接向FBI CJIS电子提交。" },
  { title: "中国签证与工作许可", description: "Z签证申请、居留许可和工作授权文件所需的指纹采集。" },
  { title: "永久居留（PR卡）", description: "为加拿大和美国永久居留申请人提供指纹采集服务。" },
  { title: "无犯罪记录证明（PCC）", description: "为美国、加拿大等司法管辖区的无犯罪记录证明提供指纹采集。" },
];

export default function ChineseFingerprintingPage() {
  return (
    <main className="pt-24 pb-16 px-6 lg:px-12 bg-hive-bg min-h-screen">
      <div className="max-w-5xl mx-auto">
        <nav className="mb-8">
          <Link href="/zh/services/" className="text-hive-muted hover:text-white text-sm transition-colors">← 全部服务</Link>
        </nav>

        <div className="mb-4">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full bg-red-500/10 text-red-400 border border-red-500/20">现场服务</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-white mb-6">
          指纹采集<span className="text-red-500">服务</span>
        </h1>
        <p className="text-hive-muted text-lg max-w-3xl leading-relaxed mb-8">
          在<strong className="text-white">上海、北京、成都</strong>及中国其他主要城市提供快速、便捷、准确的指纹采集解决方案。
          FBI合规电子和传统墨水指纹采集，满足您的所有文件需求。
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="mailto:sales@hiverelo.com" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-500 transition-colors">
            预约采集 <ArrowRight className="w-4 h-4" />
          </a>
          <a href="https://wa.me/8613764322474" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-hive-border text-white font-semibold rounded-xl hover:border-red-500/50 transition-colors">
            WhatsApp: +86 13764322474
          </a>
        </div>

        <div className="bg-hive-surface border border-hive-border rounded-2xl p-6 lg:p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight flex items-center gap-3">
            <MapPin className="w-6 h-6 text-red-500" /> 服务地点
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {cities.map((city) => (
              <div key={city.name} className="bg-hive-bg border border-hive-border rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-semibold text-sm">{city.name}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${city.status === "可用" ? "bg-green-500/10 text-green-400" : "bg-yellow-500/10 text-yellow-400"}`}>{city.status}</span>
                </div>
                <p className="text-hive-dim text-xs">{city.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight flex items-center gap-3">
            <Shield className="w-6 h-6 text-red-500" /> 常见用途
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((use) => (
              <div key={use.title} className="bg-hive-surface border border-hive-border rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-red-500 shrink-0" />{use.title}
                </h3>
                <p className="text-hive-muted text-sm leading-relaxed">{use.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-hive-surface border border-hive-border rounded-2xl p-6 lg:p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight flex items-center gap-3">
            <Clock className="w-6 h-6 text-red-500" /> 服务流程
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { step: "1", title: "预约", text: "通过微信/企业微信或邮件联系我们预约。上海可当天安排。" },
              { step: "2", title: "现场采集", text: "我们的技术员使用FBI合规电子或墨水方法采集您的指纹。" },
              { step: "3", title: "接收文件", text: "24小时内安全发送数字文件。纸质版可通过快递寄送。" },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-3">
                  <span className="text-red-500 font-bold">{s.step}</span>
                </div>
                <h3 className="text-white font-semibold mb-2">{s.title}</h3>
                <p className="text-hive-muted text-sm">{s.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-red-600/10 border border-red-500/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">准备好预约了吗？</h2>
          <p className="text-hive-muted mb-6 max-w-xl mx-auto">企业微信是最快的联系方式。工作时间内我们通常2小时内回复。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:sales@hiverelo.com" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-500 transition-colors">发送邮件</a>
            <a href="/zh/contact/" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-hive-border text-white font-semibold rounded-xl hover:border-red-500/50 transition-colors">联系页面</a>
          </div>
        </div>
      </div>
    </main>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Stamp, FileText, Fingerprint, Plane, Building2, ChevronDown, MessageSquare } from "lucide-react";
import Image from "next/image";

const services = [
  { id: "fingerprinting", icon: Fingerprint, title: "指纹采集服务", image: "/fingerprinting-v2.jpg", summary: "在上海、北京、成都等主要城市提供快速、便捷的指纹采集服务。", details: ["FBI合规指纹采集", "传统墨水指纹", "24小时内数字交付", "安全快递纸质版"], link: "/zh/shanghai-fingerprinting/" },
  { id: "background-checks", icon: ShieldCheck, title: "联邦与州背景调查", image: "/background-checks.jpg", summary: "来自美国、加拿大、英国、澳大利亚等国家的犯罪记录检查和身份验证。", details: ["FBI身份历史摘要检查（美国）", "RCMP犯罪记录检查（加拿大）", "ACRO警方证明（英国）", "州级司法部检查"] },
  { id: "apostille", icon: Stamp, title: "文件Apostille与认证", image: "/apostille-auth-combined.jpg", summary: "海牙Apostille认证、使馆/领事馆公证、学位证明、教师证书、结婚证明和公司文件的公证。", details: ["海牙Apostille（公约成员国）", "中国使馆/领事馆认证", "越南使馆公证", "泰国外交部与使馆认证", "韩国和日本领事馆认证", "公证与翻译协调"] },
  { id: "china-pcc", icon: FileText, title: "中国无犯罪记录证明", image: "/china-pcc.jpg", summary: "从北京、上海、深圳等中国城市的公安局获取无犯罪记录证明。", details: ["北京公安局无犯罪记录证明", "上海公安局无犯罪记录证明", "深圳公安局犯罪记录检查", "其他城市可用 — 咨询确认", "公证与英文翻译包含"] },
  { id: "visa", icon: Plane, title: "中国签证与工作许可", image: "/china-visa.jpg", summary: "中国Z签证申请和居留许可文件的全流程准备和指导。", details: ["Z签证文件准备与审核", "居留许可申请支持", "文件翻译与认证"] },
  { id: "business", icon: Building2, title: "中国企业注册", image: "/business-registration.jpg", summary: "从WFOE和合资公司设立到注册后合规，帮助外国企业在中国建立法律实体。", details: ["WFOE注册", "合资公司设立", "营业执照申请", "银行账户开立"] },
  { id: "ancillary", icon: MessageSquare, title: "辅助服务", image: "/ancillary.jpg", summary: "后台运营支持——人力资源、薪资、财务、税务合规和办公选址。", details: ["人力资源与薪资管理", "财务、会计与税务合规", "办公选址与租赁协调"] },
];

export default function ZhServicePipeline() {
  const [expanded, setExpanded] = useState<string | null>(null);
  return (
    <section className="py-24 px-6 lg:px-12 bg-hive-bg relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white mb-4">我们的服务</h2>
          <p className="text-hive-muted max-w-2xl mx-auto">覆盖亚洲及全球的端到端文件认证和合规支持。</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            const isOpen = expanded === service.id;
            return (
              <motion.div key={service.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-hive-surface border border-hive-border rounded-2xl overflow-hidden hover:border-red-500/30 transition-all duration-300">
                {service.image && (
                  <div className="relative h-48 w-full">
                    <Image src={service.image} alt={service.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-hive-surface via-hive-surface/40 to-transparent" />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-red-500/10 flex items-center justify-center shrink-0"><Icon className="w-5 h-5 text-red-500" /></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                        <button onClick={() => setExpanded(isOpen ? null : service.id)} className="ml-2 text-hive-dim hover:text-white transition-colors"><ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} /></button>
                      </div>
                      <p className="text-hive-muted text-sm mt-1">{service.summary}</p>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                            <ul className="mt-4 space-y-2">
                              {service.details.map((d, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-hive-muted"><span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />{d}</li>
                              ))}
                            </ul>
                            {service.link && <Link href={service.link} className="inline-flex items-center gap-1 text-red-400 text-sm mt-4 hover:text-white transition-colors">了解更多 &rarr;</Link>}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

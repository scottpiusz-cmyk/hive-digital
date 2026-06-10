"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  { question: "Apostille过程需要多长时间？", answer: "大多数Apostille请求在5–10个工作日内完成。使馆和领事馆公证通常需要10–20个工作日，具体取决于目的国家和当前处理量。我们在每个阶段都提供跟踪更新。" },
  { question: "你们支持哪些国家？", answer: "我们为21+国家提供文件认证和合规支持，包括中国、越南、泰国、韩国、日本、台湾、印度尼西亚等。如果您的目的地不在列表中，请联系我们 — 我们很可能也覆盖。" },
  { question: "如果我已经不在中国居住，还能获取中国无犯罪记录证明吗？", answer: "可以。对于北京、上海、深圳等城市，我们可以代您从当地公安局（PSB）获取无犯罪记录证明（PCC）。您必须提供在中国居住时间的证明，包括有效签证和居留许可证明。请联系我们确认您所在城市的资格。" },
  { question: "如何发送文件给你们？", answer: "文件可通过安全国际快递发送至我们上海办公室，或数字上传以供初步审核。在您的免费咨询中，我们将根据您的文件类型和目的国家确认最佳提交方式。" },
  { question: "你们提供文件翻译服务吗？", answer: "是的。我们协调所有主要语言的认证翻译，包括中文、越南语、泰语、韩语和日语。翻译由认证翻译人员完成，并可与您的原始文件一起进行公证或认证。" },
  { question: "联系你们团队最快的方式是什么？", answer: "企业微信/微信是联系我们获取实时更新的最快方式。您也可以通过WhatsApp Business、邮件sales@hiverelo.com或电话+86 13764322474联系我们。工作时间内我们通常2小时内回复。" },
];

export default function ZhFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section id="faq" className="py-24 px-6 lg:px-12 bg-hive-surface">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white mb-4">常见问题</h2>
          <p className="text-hive-muted">与Hive Digital合作您需要了解的一切</p>
        </motion.div>
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div key={index} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.05 }} className="bg-hive-bg border border-hive-border rounded-xl overflow-hidden">
                <button onClick={() => setOpenIndex(isOpen ? null : index)} className="w-full px-6 py-5 text-left flex items-center justify-between gap-4">
                  <span className="text-white font-medium text-sm md:text-base">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-hive-dim shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                      <div className="px-6 pb-5 pt-0 text-hive-muted text-sm leading-relaxed">{faq.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

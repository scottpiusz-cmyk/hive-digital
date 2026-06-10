"use client";

import { motion } from "framer-motion";
import { FileCheck, Files, FileSearch, Plane } from "lucide-react";
import Image from "next/image";

const steps = [
  { icon: FileCheck, title: "免费咨询", description: "告诉我们您的目的国、文件类型和时间节点。我们将制定准确的认证路径并提供透明的全包报价。" },
  { icon: Files, title: "文件收集", description: "通过安全快递或数字上传发送文件。我们验证每份文件的完整性，并在提交前标注任何问题。" },
  { icon: FileSearch, title: "认证与验证", description: "我们处理公证、Apostille和使馆或领事馆认证 — 管理每个步骤，提供跟踪提交和实时状态更新。" },
  { icon: Plane, title: "全球配送", description: "您的完全认证文件将通过安全跟踪快递配送到世界任何地方 — 或从我们的上海办公室亲自领取。" },
];

export default function ZhProcessSteps() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-hive-surface relative overflow-hidden">
      <div className="relative h-64 md:h-80 w-full max-w-7xl mx-auto mb-16 rounded-2xl overflow-hidden">
        <Image src="/bridge-compliance.jpg" alt="无缝文件合规流程" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-hive-surface/80 via-transparent to-hive-surface/80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white mb-2">四步达成合规</h2>
            <p className="text-hive-muted text-lg">从咨询到配送 — 无缝流程</p>
          </motion.div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div key={step.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-hive-accent/10 flex items-center justify-center mb-5 ring-1 ring-hive-accent/20"><Icon className="w-7 h-7 text-hive-accent" /></div>
                  <div className="text-xs font-bold uppercase tracking-widest text-hive-accent mb-3">第 {index + 1} 步</div>
                  <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-hive-muted text-sm leading-relaxed">{step.description}</p>
                </div>
                {index < steps.length - 1 && <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-hive-accent/30 to-transparent" />}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long does the apostille process take?",
    answer:
      "Most apostille requests are completed within 5–10 business days. Embassy and consulate legalization typically takes 10–20 business days depending on the destination country and current processing volumes. We provide tracked updates at every stage.",
  },
  {
    question: "Which countries do you support?",
    answer:
      "We provide document authentication and compliance support for 21+ countries including China, Vietnam, Thailand, South Korea, Japan, Taiwan, Indonesia, and many more. If your destination is not listed, contact us — we likely cover it.",
  },
  {
    question: "Can I get a China Police Clearance Certificate if I no longer live there?",
    answer:
      "Yes. For Beijing, Shanghai, Shenzhen, and other cities, we can obtain a Police Clearance Certificate (PCC) from the local Public Security Bureau (PSB) on your behalf. You must provide proof of time spent living in China under a valid visa with residence permit proof. Contact us to confirm eligibility for your specific city.",
  },
  {
    question: "How do I send you my documents?",
    answer:
      "Documents can be sent via secure international courier to our Shanghai office, or uploaded digitally for initial review. We will confirm the best submission method based on your document type and destination country during your free consultation.",
  },
  {
    question: "Do you offer document translation?",
    answer:
      "Yes. We coordinate certified translations for all major languages including Chinese, Vietnamese, Thai, Korean, and Japanese. Translations are completed by accredited translators and can be notarized or authenticated alongside your original documents.",
  },
  {
    question: "What is the fastest way to reach your team?",
    answer:
      "WeCom/WeChat is the quickest way to reach us for real-time updates. You can also reach us via WhatsApp Business, email at sales@hiverelo.com, or phone at +86 13764322474. We typically respond within 2 hours during business hours.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6 lg:px-12 bg-hive-surface">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white mb-4">
            Frequently Asked
          </h2>
          <p className="text-hive-muted">
            Everything you need to know about working with Hive Digital
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-hive-bg border border-hive-border rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
                >
                  <span className="text-white font-medium text-sm md:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-hive-dim shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-0 text-hive-muted text-sm leading-relaxed">
                        {faq.answer}
                      </div>
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

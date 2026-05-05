"use client";

import { motion } from "framer-motion";
import { FileCheck, Files, FileSearch, Plane } from "lucide-react";
import Image from "next/image";

const steps = [
  {
    icon: FileCheck,
    title: "Free Consultation",
    description:
      "Share your destination country, document types, and timeline. We will map out the exact authentication path and provide a transparent, all-in quote.",
  },
  {
    icon: Files,
    title: "Document Collection",
    description:
      "Send us your documents via secure courier or digital upload. We verify each file for completeness and flag any issues before submission.",
  },
  {
    icon: FileSearch,
    title: "Authentication & Verification",
    description:
      "We handle notarization, apostille, and embassy or consulate legalization — managing every step with tracked submissions and real-time status updates.",
  },
  {
    icon: Plane,
    title: "Global Delivery",
    description:
      "Your fully authenticated documents are delivered to you anywhere in the world via secure tracked courier — or collected in person from our Shanghai office.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-hive-surface relative overflow-hidden">
      {/* Bridge illustration */}
      <div className="relative h-64 md:h-80 w-full max-w-7xl mx-auto mb-16 rounded-2xl overflow-hidden">
        <Image
          src="/bridge-compliance.jpg"
          alt="Seamless document compliance process"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-hive-surface/80 via-transparent to-hive-surface/80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white mb-2">
              Four Steps to Compliance
            </h2>
            <p className="text-hive-muted text-lg">
              From consultation to delivery — a seamless process
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-hive-accent/10 flex items-center justify-center mb-5 ring-1 ring-hive-accent/20">
                    <Icon className="w-7 h-7 text-hive-accent" />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-widest text-hive-accent mb-3">
                    Step {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-hive-muted text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-hive-accent/30 to-transparent" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

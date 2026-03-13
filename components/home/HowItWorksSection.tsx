"use client";

import { motion } from "framer-motion";
import { howItWorksSteps } from "@/constants/howItWorks";
import SectionHeading from "@/components/shared/SectionHeading";

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="How it works"
          subtitle="Getting started with ChatSyncs takes minutes, not months."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {howItWorksSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative text-center"
            >
              {/* Connector line */}
              {index < howItWorksSteps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[calc(100%-20%)] h-px bg-gradient-to-r from-brand-500/30 to-transparent" />
              )}

              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-surface-floating border border-surface-border mb-6">
                <span className="font-display font-extrabold text-2xl text-brand-500">
                  {step.step}
                </span>
              </div>

              <h3 className="font-display font-bold text-xl text-white mb-3 tracking-tight">
                {step.title}
              </h3>

              <p className="text-sm text-[#94a3b8] font-body leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

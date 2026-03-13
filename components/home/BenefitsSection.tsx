"use client";

import { motion } from "framer-motion";
import { Zap, TrendingUp, Link, Layers } from "lucide-react";
import { benefits } from "@/constants/benefits";
import SectionHeading from "@/components/shared/SectionHeading";

const iconMap: Record<string, React.ElementType> = { Zap, TrendingUp, Link, Layers };

export default function BenefitsSection() {
  return (
    <section className="relative py-24 md:py-32 section-glow">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Why businesses choose ChatSyncs"
          highlightedWord="ChatSyncs"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = iconMap[benefit.icon];
            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-5 bg-surface-floating rounded-2xl border border-surface-border p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0">
                  {Icon && <Icon size={22} className="text-brand-500" />}
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white mb-2 tracking-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-[#94a3b8] font-body leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

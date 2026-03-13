"use client";

import { motion } from "framer-motion";
import {
  MessageSquareText,
  Radio,
  Workflow,
  BarChart3,
  Globe,
  Bot,
} from "lucide-react";
import { features } from "@/constants/features";
import SectionHeading from "@/components/shared/SectionHeading";

const iconMap: Record<string, React.ElementType> = {
  MessageSquareText,
  Radio,
  Workflow,
  BarChart3,
  Globe,
  Bot,
};

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 md:py-32 section-glow">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Everything you need to automate WhatsApp"
          highlightedWord="automate"
          subtitle="Powerful features to engage customers, nurture leads, and scale communication — all without writing code."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative bg-surface-card rounded-2xl border border-surface-border/40 p-7 hover:border-brand-500/30 transition-colors duration-300"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-brand-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center mb-5">
                    {Icon && <Icon size={22} className="text-brand-500" />}
                  </div>
                  <h3 className="font-display font-bold text-lg text-white mb-2.5 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#94a3b8] font-body leading-relaxed">
                    {feature.description}
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

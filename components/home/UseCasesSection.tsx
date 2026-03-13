"use client";

import { motion } from "framer-motion";
import {
  Headphones,
  UserPlus,
  Megaphone,
  CalendarCheck,
  Package,
  RefreshCw,
  Settings,
  Calendar,
} from "lucide-react";
import { useCases } from "@/constants/useCases";
import SectionHeading from "@/components/shared/SectionHeading";

const iconMap: Record<string, React.ElementType> = {
  Headphones, UserPlus, Megaphone, CalendarCheck, Package, RefreshCw, Settings, Calendar,
};

export default function UseCasesSection() {
  return (
    <section id="use-cases" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Built for businesses that run on communication"
          highlightedWord="communication"
          subtitle="ChatSyncs adapts to your workflow — no matter your industry."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {useCases.map((useCase, index) => {
            const Icon = iconMap[useCase.icon];
            return (
              <motion.div
                key={useCase.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="group bg-surface-floating rounded-xl border border-surface-border p-5 hover:border-brand-500/30 transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center mb-4">
                  {Icon && <Icon size={18} className="text-brand-500/80 group-hover:text-brand-500 transition-colors" />}
                </div>
                <h3 className="font-display font-semibold text-[15px] text-white mb-1.5">
                  {useCase.title}
                </h3>
                <p className="text-xs text-[#94a3b8] font-body leading-relaxed">
                  {useCase.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import CTAButton from "@/components/shared/CTAButton";
import { brand } from "@/lib/branding";

export default function CTASection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl border border-surface-border/40 bg-surface-card overflow-hidden p-10 md:p-16 text-center"
        >
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-500/5 via-transparent to-transparent" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-brand-500/10 blur-3xl rounded-full" />

          <div className="relative">
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em] text-white leading-tight">
              Start automating your
              <br />
              <span className="text-brand-500">WhatsApp conversations</span>
            </h2>
            <p className="mt-5 text-[#94a3b8] font-body text-lg max-w-xl mx-auto leading-relaxed">
              Join thousands of businesses using {brand.name} to engage
              customers, nurture leads, and drive growth.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <CTAButton size="large">
                {brand.cta.primary}
                <ArrowRight size={16} className="ml-2" />
              </CTAButton>
            </div>
            <p className="mt-4 text-sm text-[#64748b] font-body">
              {brand.cta.subtitle}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

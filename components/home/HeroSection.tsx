"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { brand } from "@/lib/branding";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import CTAButton from "@/components/shared/CTAButton";

export default function HeroSection() {
  return (
    <div className="relative">
      <HeroGeometric
        badge="Powered by WhatsApp Business API"
        title1="Automate Conversations"
        title2="at Scale"
        description="The WhatsApp automation platform built for growing businesses. Automate customer conversations, build drip campaigns, send broadcasts, and connect your existing tools — all from one powerful platform."
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <CTAButton size="large">
            {brand.cta.primary}
            <ArrowRight size={16} className="ml-2" />
          </CTAButton>
          <CTAButton variant="secondary" size="large">
            Learn More
          </CTAButton>
        </div>
        <p className="mt-4 text-sm text-white/30 font-body">
          {brand.cta.subtitle}
        </p>
      </HeroGeometric>

      {/* Dashboard Preview — positioned to overlap below the hero */}
      <div className="relative -mt-32 z-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="relative max-w-4xl mx-auto px-6"
        >
          {/* Glow behind image */}
          <div className="absolute -inset-4 bg-brand-500/10 rounded-3xl blur-3xl" />

          <div className="relative rounded-2xl border border-surface-border/60 overflow-hidden shadow-glow-lg bg-surface-card">
            {/* Mock browser bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-surface-border/40 bg-surface-elevated/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex-1 mx-4">
                <div className="max-w-md mx-auto h-6 rounded-md bg-surface-base/60 border border-surface-border/30 flex items-center px-3">
                  <span className="text-[10px] text-[#64748b] font-body">
                    app.chatsyncs.com/dashboard
                  </span>
                </div>
              </div>
            </div>

            {/* Dashboard mockup content */}
            <div className="p-6 md:p-8 space-y-4 min-h-[300px] md:min-h-[400px]">
              <div className="flex items-center justify-between">
                <div>
                  <div className="h-5 w-32 bg-surface-border/30 rounded-md" />
                  <div className="h-3 w-48 bg-surface-border/20 rounded-md mt-2" />
                </div>
                <div className="h-9 w-28 bg-brand-500/20 rounded-lg border border-brand-500/30" />
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
                {["12,847", "94.2%", "3,421", "89.7%"].map((stat, i) => (
                  <div
                    key={i}
                    className="bg-surface-elevated/80 rounded-xl border border-surface-border/30 p-4"
                  >
                    <div className="text-xs text-[#64748b] font-body mb-1">
                      {["Messages Sent", "Delivery Rate", "Conversations", "Response Rate"][i]}
                    </div>
                    <div className="text-xl font-display font-bold text-white">
                      {stat}
                    </div>
                  </div>
                ))}
              </div>

              {/* Chart placeholder */}
              <div className="mt-4 bg-surface-elevated/40 rounded-xl border border-surface-border/20 p-4 h-40 flex items-end gap-1.5">
                {Array.from({ length: 24 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-sm bg-brand-500/30"
                    style={{
                      height: `${20 + Math.sin(i * 0.5) * 30 + Math.random() * 40}%`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

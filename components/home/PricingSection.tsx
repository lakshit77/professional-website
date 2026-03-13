"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { pricingPlans } from "@/constants/pricing";
import SectionHeading from "@/components/shared/SectionHeading";
import CTAButton from "@/components/shared/CTAButton";

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 md:py-32 section-glow">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Scalable pricing for every business"
          highlightedWord="Scalable pricing"
          subtitle="Start free. Scale as you grow. No hidden fees."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className={`relative rounded-2xl border p-7 flex flex-col ${
                plan.popular
                  ? "bg-surface-card border-brand-500/40 shadow-glow"
                  : "bg-surface-card/60 border-surface-border/40"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-500 text-white text-xs font-body font-semibold rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-display font-bold text-lg text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-[#94a3b8] font-body mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="font-display font-extrabold text-4xl text-white">
                    {plan.price}
                  </span>
                  <span className="text-[#64748b] font-body text-sm">
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      size={16}
                      className="text-brand-500 mt-0.5 flex-shrink-0"
                    />
                    <span className="text-sm text-[#cbd5e1] font-body">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <CTAButton
                variant={plan.popular ? "primary" : "secondary"}
                className="w-full text-center"
              >
                {plan.cta}
              </CTAButton>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

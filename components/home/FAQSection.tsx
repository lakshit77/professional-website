"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/constants/faqs";
import SectionHeading from "@/components/shared/SectionHeading";

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <section id="faq" className="relative py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeading title="Still have questions?" />

        <div className="space-y-3">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-xl border overflow-hidden transition-colors duration-200 ${
                  isOpen
                    ? "border-brand-500/30 bg-surface-floating"
                    : "border-surface-border bg-surface-card"
                }`}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-inset"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-semibold text-[15px] text-white pr-4 group-hover:text-brand-400 transition-colors">
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-surface-border/50 flex items-center justify-center">
                    {isOpen ? (
                      <Minus size={14} className="text-brand-500" />
                    ) : (
                      <Plus size={14} className="text-[#94a3b8]" />
                    )}
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5">
                        <p className="text-sm text-[#94a3b8] font-body leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

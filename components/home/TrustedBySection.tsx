"use client";

import { motion } from "framer-motion";

const brands = [
  "TechCorp",
  "ScaleUp",
  "GrowthX",
  "Velociti",
  "Nexura",
  "FlowStack",
  "Pinnacle",
  "DataMesh",
];

export default function TrustedBySection() {
  return (
    <section className="relative py-16 border-y border-surface-border/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-center text-sm text-[#64748b] font-body mb-10"
        >
          Trusted by <span className="text-brand-500">1,000+</span> creators
          and brands
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {brands.map((brand, i) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="text-[#334155] font-display font-bold text-xl tracking-tight hover:text-[#64748b] transition-colors duration-300"
            >
              {brand}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

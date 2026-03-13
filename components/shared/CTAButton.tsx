"use client";

import { motion } from "framer-motion";

interface CTAButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  size?: "default" | "large";
  className?: string;
}

export default function CTAButton({
  children,
  href = "#",
  variant = "primary",
  size = "default",
  className = "",
}: CTAButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center font-body font-semibold rounded-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-base";

  const variants = {
    primary:
      "bg-brand-500 text-white hover:bg-brand-400 active:bg-brand-600 shadow-glow",
    secondary:
      "bg-transparent text-brand-400 border border-brand-500/30 hover:border-brand-500/60 hover:bg-brand-500/5 active:bg-brand-500/10",
  };

  const sizes = {
    default: "px-6 py-2.5 text-xs tracking-wide",
    large: "px-8 py-3 text-sm tracking-wide",
  };

  return (
    <motion.a
      href={href}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.a>
  );
}

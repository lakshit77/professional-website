// ChatSyncs Brand Identity — Single Source of Truth
// Derived from brand-guidelines.pdf v1.0 (2026)

export const brand = {
  name: "ChatSyncs",
  tagline: "Automate Conversations at Scale",
  description:
    "The WhatsApp automation platform built for growing businesses.",

  colors: {
    // Primary palette
    blue: "#2B7DE9",
    darkBlue: "#0B3D8C",
    mediumBlue: "#4A9AF5",
    teal: "#14B8A6",
    whatsappGreen: "#25D366",
    orange: "#F59E0B",

    // Neutrals
    white: "#FFFFFF",
    lightGrey: "#F3F4F6",
    charcoal: "#111827",
    deepNavy: "#0B1120",

    // Surfaces (derived from deep navy)
    background: "#0B1120",
    surfaceElevated: "#0f1830",
    surfaceFloating: "#142040",
    surfaceCard: "#111c35",
    surfaceBorder: "#1e2d50",

    // Text
    textPrimary: "#F3F4F6",
    textSecondary: "#94a3b8",
    textMuted: "#64748b",
  },

  fonts: {
    display: "var(--font-plus-jakarta)",   // Plus Jakarta Sans · Bold 700
    body: "var(--font-dm-sans)",           // DM Sans · Regular 400
    mono: "var(--font-jetbrains)",         // JetBrains Mono · Medium 500
  },

  logo: {
    src: "/logo.png",
    alt: "ChatSyncs",
  },

  button: {
    borderRadius: "8px",   // rounded-lg
    fontWeight: 600,
    padding: "10px 24px",
    fontSize: "12px",
  },

  cta: {
    primary: "Start Your Free 7-Day Trial",
    subtitle: "No Credit Card Required",
  },
} as const;

export type Brand = typeof brand;

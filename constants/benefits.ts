export interface Benefit {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const benefits: Benefit[] = [
  {
    id: 1,
    title: "Operational Efficiency",
    description:
      "Automate repetitive communication tasks and free your team to focus on high-value work.",
    icon: "Zap",
  },
  {
    id: 2,
    title: "Higher Engagement",
    description:
      "Deliver timely, personalized messages that your customers actually read and respond to.",
    icon: "TrendingUp",
  },
  {
    id: 3,
    title: "Unified Operations",
    description:
      "Connect ChatSyncs to your CRM and business tools for one seamless communication system.",
    icon: "Link",
  },
  {
    id: 4,
    title: "Built to Scale",
    description:
      "Start lean and grow without friction. ChatSyncs scales with your business, not against it.",
    icon: "Layers",
  },
];

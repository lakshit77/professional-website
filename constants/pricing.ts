export interface PricingPlan {
  id: number;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 1,
    name: "Starter",
    price: "$49",
    period: "/month",
    description: "Perfect for small businesses getting started with WhatsApp automation.",
    features: [
      "1,000 messages/month",
      "1 WhatsApp number",
      "Basic chatbot builder",
      "Broadcast messaging",
      "Email support",
    ],
    cta: "Start Free Trial",
  },
  {
    id: 2,
    name: "Pro",
    price: "$99",
    period: "/month",
    description: "For growing businesses that need advanced automation and analytics.",
    features: [
      "10,000 messages/month",
      "3 WhatsApp numbers",
      "Advanced chatbot flows",
      "Workflow automation",
      "Real-time analytics",
      "CRM integrations",
      "Priority support",
    ],
    popular: true,
    cta: "Start Free Trial",
  },
  {
    id: 3,
    name: "Enterprise",
    price: "$249",
    period: "/month",
    description: "For large teams that need unlimited scale and dedicated support.",
    features: [
      "Unlimited messages",
      "Unlimited WhatsApp numbers",
      "Custom chatbot flows",
      "Advanced workflow builder",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantee",
      "API access",
    ],
    cta: "Contact Sales",
  },
];

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "What is ChatSyncs?",
    answer:
      "ChatSyncs is a WhatsApp automation platform that helps businesses automate customer conversations, run broadcast campaigns, and build messaging workflows — all powered by the official WhatsApp Business API.",
  },
  {
    id: 2,
    question: "How do I get started?",
    answer:
      "Sign up for a free 7-day trial. No credit card required. You'll be guided through connecting your WhatsApp Business account and setting up your first automation in minutes.",
  },
  {
    id: 3,
    question: "How much does it cost?",
    answer:
      "ChatSyncs offers flexible pricing plans for businesses of all sizes. Visit our Pricing page for full details.",
  },
  {
    id: 4,
    question: "What devices can I use ChatSyncs on?",
    answer:
      "ChatSyncs is fully browser-based and works on any device — desktop, tablet, or mobile.",
  },
  {
    id: 5,
    question: "Is my data safe?",
    answer:
      "Yes. ChatSyncs is built on secure infrastructure with data protection measures in place. Your data and your customers' data are handled with full confidentiality.",
  },
  {
    id: 6,
    question: "Is there a free trial? Do I need a credit card?",
    answer:
      "Yes — we offer a 7-day free trial with no credit card required. Explore the full platform before you commit.",
  },
  {
    id: 7,
    question: "Can I cancel my subscription at any time?",
    answer:
      "Absolutely. There are no lock-in contracts. You can cancel your subscription at any time from your account settings.",
  },
  {
    id: 8,
    question: "What if I face an issue?",
    answer:
      "Our support team is here to help. Reach out via the in-app chat or contact us directly and we'll get you sorted quickly.",
  },
];

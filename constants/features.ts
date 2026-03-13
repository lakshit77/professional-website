export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const features: Feature[] = [
  {
    id: 1,
    title: "Automated Conversations",
    description:
      "Deploy intelligent chatbots that handle customer queries instantly — 24/7, without any human intervention.",
    icon: "MessageSquareText",
  },
  {
    id: 2,
    title: "Broadcast Messaging",
    description:
      "Send personalized, targeted broadcast messages to your entire audience that feel one-on-one — at any scale.",
    icon: "Radio",
  },
  {
    id: 3,
    title: "Smart Workflow Integration",
    description:
      "Connect ChatSyncs to the tools your business already runs on. Build automated workflows without code.",
    icon: "Workflow",
  },
  {
    id: 4,
    title: "Real-Time Analytics",
    description:
      "Live view of campaign performance, customer behavior, and messaging metrics — optimize with confidence.",
    icon: "BarChart3",
  },
  {
    id: 5,
    title: "Multi-Language Support",
    description:
      "Serve customers in their language. Share text, images, videos, or documents in the format that converts.",
    icon: "Globe",
  },
  {
    id: 6,
    title: "No-Code Chatbots",
    description:
      "Build and deploy intelligent chatbots in minutes with our visual flow builder — no developer needed.",
    icon: "Bot",
  },
];

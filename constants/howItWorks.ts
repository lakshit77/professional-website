export interface Step {
  id: number;
  step: string;
  title: string;
  description: string;
}

export const howItWorksSteps: Step[] = [
  {
    id: 1,
    step: "01",
    title: "Set Up Your Automation",
    description:
      "Define your workflows, chatbot responses, and messaging rules through a simple, no-code interface. No technical expertise required.",
  },
  {
    id: 2,
    step: "02",
    title: "Engage Your Audience",
    description:
      "Launch automated conversations, broadcast campaigns, and lead nurturing sequences — all running in the background while you focus on your business.",
  },
  {
    id: 3,
    step: "03",
    title: "Analyze and Optimize",
    description:
      "Use real-time dashboards and campaign insights to understand what's performing, refine your strategy, and continuously improve results.",
  },
];

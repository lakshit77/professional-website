export interface UseCase {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const useCases: UseCase[] = [
  {
    id: 1,
    title: "Customer Support",
    description: "Automate responses to common queries and resolve issues faster, 24/7",
    icon: "Headphones",
  },
  {
    id: 2,
    title: "Lead Nurturing",
    description: "Follow up with new leads automatically and move them through your funnel",
    icon: "UserPlus",
  },
  {
    id: 3,
    title: "Marketing Campaigns",
    description: "Run broadcast campaigns with promotional offers and product launches",
    icon: "Megaphone",
  },
  {
    id: 4,
    title: "Appointment Reminders",
    description: "Send automated reminders and reduce no-shows",
    icon: "CalendarCheck",
  },
  {
    id: 5,
    title: "Order & Delivery Updates",
    description: "Keep customers informed at every step of the purchase journey",
    icon: "Package",
  },
  {
    id: 6,
    title: "Re-engagement Campaigns",
    description: "Win back inactive customers with targeted retargeting messages",
    icon: "RefreshCw",
  },
  {
    id: 7,
    title: "Internal Workflows",
    description: "Automate task assignments, approvals, and team notifications",
    icon: "Settings",
  },
  {
    id: 8,
    title: "Event Promotions",
    description: "Drive registrations and send timely reminders to your audience",
    icon: "Calendar",
  },
];

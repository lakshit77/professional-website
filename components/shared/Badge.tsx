interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-body font-medium tracking-wider uppercase text-brand-400 bg-brand-500/10 border border-brand-500/20 ${className}`}
    >
      {children}
    </span>
  );
}

interface SectionHeadingProps {
  title: string;
  highlightedWord?: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({
  title,
  highlightedWord,
  subtitle,
  centered = true,
}: SectionHeadingProps) {
  const renderTitle = () => {
    if (!highlightedWord) {
      return title;
    }
    const parts = title.split(highlightedWord);
    return (
      <>
        {parts[0]}
        <span className="text-brand-500">{highlightedWord}</span>
        {parts[1] || ""}
      </>
    );
  };

  return (
    <div className={`mb-16 ${centered ? "text-center" : ""}`}>
      <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl tracking-[-0.02em] text-white leading-tight">
        {renderTitle()}
      </h2>
      {subtitle && (
        <p className="mt-5 text-[#94a3b8] font-body text-lg md:text-xl max-w-2xl leading-relaxed mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}

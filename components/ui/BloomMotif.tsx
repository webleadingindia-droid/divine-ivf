type BloomMotifProps = {
  className?: string;
  strokeColor?: string;
};

// Signature line-art motif: a single continuous stroke tracing a bloom /
// follicle cycle — six soft petals opening from one centre point. Used
// sparingly as the site's one recurring visual signature (hero, dividers,
// journey markers) rather than literal cartoon flower or embryo icons.
export function BloomMotif({ className, strokeColor = "#B83E6B" }: BloomMotifProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <g stroke={strokeColor} strokeWidth="1.1" strokeLinecap="round" opacity="0.55">
        <path d="M100 100 C 100 60, 130 40, 150 20" />
        <path d="M100 100 C 130 90, 155 65, 175 45" />
        <path d="M100 100 C 140 105, 168 100, 190 92" />
        <path d="M100 100 C 90 65, 100 35, 95 8" />
        <path d="M100 100 C 65 90, 45 65, 25 45" />
        <path d="M100 100 C 60 105, 32 100, 10 92" />
        <circle cx="100" cy="100" r="4" fill={strokeColor} opacity="0.7" />
      </g>
    </svg>
  );
}

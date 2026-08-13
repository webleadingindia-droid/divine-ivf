type DividerProps = {
  fromColor?: string; // fill color of the shape (i.e. the color of the section BELOW)
  flip?: boolean;
  className?: string;
};

// A single soft curve used between homepage sections instead of a hard line —
// keeps the light baby-pink rhythm feeling continuous rather than boxed.
export function OrganicDivider({ fromColor = "#FFFFFF", flip = false, className }: DividerProps) {
  return (
    <div className={`pointer-events-none relative h-10 md:h-16 w-full overflow-hidden ${className ?? ""}`} aria-hidden="true">
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className={`h-full w-full ${flip ? "rotate-180" : ""}`}
      >
        <path
          d="M0,32 C 240,80 480,0 720,24 C 960,48 1200,88 1440,40 L1440,90 L0,90 Z"
          fill={fromColor}
        />
      </svg>
    </div>
  );
}

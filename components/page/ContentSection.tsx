type ContentSectionProps = {
  title: string;
  children: React.ReactNode;
  tone?: "white" | "blush" | "pink";
  id?: string;
};

const toneClasses: Record<string, string> = {
  white: "bg-white",
  blush: "bg-bloom-50",
  pink: "bg-bloom-100",
};

// Generic content block for long-form treatment page copy — keeps every
// page's typography and rhythm consistent while content differs per page.
export function ContentSection({ title, children, tone = "white", id }: ContentSectionProps) {
  return (
    <section id={id} className={`${toneClasses[tone]} py-14 md:py-20`}>
      <div className="container-page">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl text-ink-900 mb-6">{title}</h2>
          <div className="prose-content text-ink-400 leading-relaxed space-y-4 [&_strong]:text-ink-900 [&_strong]:font-semibold">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

type Step = { title: string; description: string };

export function StepList({ steps, tone = "white" }: { steps: Step[]; tone?: "white" | "blush" | "pink" }) {
  const bg = tone === "blush" ? "bg-bloom-50" : tone === "pink" ? "bg-bloom-100" : "bg-white";
  return (
    <section className={`${bg} py-14 md:py-20`}>
      <div className="container-page">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl text-ink-900 mb-8">Step by step</h2>
          <ol className="flex flex-col gap-6">
            {steps.map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <span className="shrink-0 flex h-9 w-9 items-center justify-center rounded-full bg-rose-600 text-white text-sm font-semibold">
                  {i + 1}
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink-900">{step.title}</p>
                  <p className="text-sm text-ink-400 leading-relaxed mt-1">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

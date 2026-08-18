import { Check, AlertTriangle } from "lucide-react";

type TwoColumnListProps = {
  benefitsTitle?: string;
  benefits: string[];
  considerationsTitle?: string;
  considerations: string[];
};

export function TwoColumnList({
  benefitsTitle = "Benefits",
  benefits,
  considerationsTitle = "Important Considerations",
  considerations,
}: TwoColumnListProps) {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="container-page grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl">
        <div>
          <h3 className="text-lg font-semibold text-ink-900 mb-4 flex items-center gap-2">
            <Check className="h-5 w-5 text-rose-600" /> {benefitsTitle}
          </h3>
          <ul className="space-y-3">
            {benefits.map((b) => (
              <li key={b} className="flex gap-2.5 text-sm text-ink-400 leading-relaxed">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-rose-500 shrink-0" /> {b}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-ink-900 mb-4 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-rose-600" /> {considerationsTitle}
          </h3>
          <ul className="space-y-3">
            {considerations.map((c) => (
              <li key={c} className="flex gap-2.5 text-sm text-ink-400 leading-relaxed">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-rose-400 shrink-0" /> {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

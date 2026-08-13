import { UserRound, ClipboardList, Users2, FlaskConical, MessagesSquare } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const reasons = [
  { icon: UserRound, title: "Doctor-Led Care", text: "Every plan is shaped directly by Dr. Mandavi Rai, not a rotating team." },
  { icon: ClipboardList, title: "Individualised Evaluation", text: "Investigations tailored to your history, not a one-size protocol." },
  { icon: Users2, title: "Male + Female Assessment", text: "Fertility is evaluated for both partners, together." },
  { icon: FlaskConical, title: "Advanced Reproductive Options", text: "From IUI to ICSI, PICSI, IMSI, ERA and genetic testing." },
  { icon: MessagesSquare, title: "Clear Communication", text: "Every step explained in plain language, with room for questions." },
];

export function WhyChoose() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-page">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <SectionLabel className="justify-center">Why Choose Divine IVF</SectionLabel>
          <h2 className="mt-5 text-3xl md:text-[2.6rem] leading-tight text-ink-900">
            Built around <span className="font-serif italic text-rose-600">how you&apos;re actually cared for</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {reasons.map(({ icon: Icon, title, text }, i) => (
            <div
              key={title}
              className={`rounded-[1.75rem] border border-bloom-border p-6 ${
                i % 2 === 0 ? "bg-bloom-50 lg:mt-0" : "bg-bloom-100 lg:mt-8"
              }`}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-rose-600 shadow-soft mb-4">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="text-sm font-semibold text-ink-900 mb-2">{title}</h3>
              <p className="text-xs text-ink-400 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

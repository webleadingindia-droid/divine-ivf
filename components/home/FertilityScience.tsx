import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";

const points = [
  { title: "Embryology Lab", text: "Careful handling and monitoring of eggs and embryos at every stage." },
  { title: "Precision Diagnostics", text: "Investigations such as ERA and genetic testing that inform, not guess." },
  { title: "Individual Protocols", text: "Stimulation and treatment plans shaped by your own fertility profile." },
];

export function FertilityScience() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-page grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div>
          <SectionLabel>Fertility Science</SectionLabel>
          <h2 className="mt-5 text-3xl md:text-[2.6rem] leading-tight text-ink-900 mb-6">
            The <span className="font-serif italic text-rose-600">science</span> behind
            personalised fertility care
          </h2>
          <p className="text-ink-400 leading-relaxed mb-8 max-w-lg">
            Behind every treatment plan is a lab process and a diagnostic
            decision. Understanding what happens at each stage helps you feel
            informed, not just guided.
          </p>
          <div className="space-y-6">
            {points.map((p) => (
              <div key={p.title} className="flex gap-4">
                <span className="mt-1 h-2 w-2 rounded-full bg-rose-500 shrink-0" />
                <div>
                  <h3 className="text-sm font-semibold text-ink-900">{p.title}</h3>
                  <p className="text-sm text-ink-400 mt-1 leading-relaxed">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="relative aspect-[3/4] rounded-[1.75rem] overflow-hidden shadow-card translate-y-6">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/13/AiC9B7MYmpnkM6PSOW0i/image.webp"
              alt="Embryologist examining samples under a microscope"
              fill
              sizes="240px"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[3/4] rounded-[1.75rem] overflow-hidden shadow-card">
            <Image
              src="https://plain-apac-prod-public.komododecks.com/202608/13/d0BxXj0eu4qLPQCs1FIW/image.webp"
              alt="IVF laboratory equipment used in embryo culture"
              fill
              sizes="240px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

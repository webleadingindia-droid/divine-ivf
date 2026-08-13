import { PlayCircle } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Videos() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-page">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <SectionLabel className="justify-center">Videos</SectionLabel>
          <h2 className="mt-5 text-3xl md:text-[2.6rem] leading-tight text-ink-900">
            Fertility guidance with{" "}
            <span className="font-serif italic text-rose-600">Dr. Mandavi Rai</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6">
          <div className="relative aspect-video rounded-[1.75rem] overflow-hidden shadow-card bg-ink-900">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/656mql4eLTw"
              title="Fertility guidance with Dr. Mandavi Rai"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="relative flex items-center gap-4 rounded-2xl border border-bloom-border bg-bloom-50 p-4"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-rose-600 shadow-soft">
                  <PlayCircle className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink-900">More videos coming soon</p>
                  <p className="text-xs text-ink-400 mt-0.5">Visit the clinic&apos;s YouTube channel</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

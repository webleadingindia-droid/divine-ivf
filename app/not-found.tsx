import { CalendarHeart } from "lucide-react";
import { BloomMotif } from "@/components/ui/BloomMotif";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="bg-bloom-gradient min-h-[70vh] flex items-center">
      <div className="container-page py-20 text-center flex flex-col items-center">
        <BloomMotif className="h-16 w-16 mb-6 opacity-70" strokeColor="#B83E6B" />
        <p className="section-label mb-4 justify-center">Page not found</p>
        <h1 className="text-3xl md:text-5xl leading-tight text-ink-900 mb-5 max-w-xl">
          This page took a <span className="font-serif italic text-rose-600">different path</span>
        </h1>
        <p className="text-ink-400 leading-relaxed max-w-md mb-9">
          The page you&apos;re looking for may have moved, or the link may
          be outdated. You can head back home, or go straight to booking a
          consultation.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/">Back to Home</Button>
          <Button href="/consultation" variant="secondary" icon={false}>
            <CalendarHeart className="h-4 w-4" /> Book Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}

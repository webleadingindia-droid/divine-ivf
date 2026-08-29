"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { BloomMotif } from "@/components/ui/BloomMotif";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log client-side for now — swap for real error reporting (e.g. Sentry)
    // once this project has a backend/monitoring set up.
    console.error(error);
  }, [error]);

  return (
    <section className="min-h-[70vh] flex items-center bg-bloom-gradient">
      <div className="container-page py-20 text-center flex flex-col items-center">
        <BloomMotif className="h-16 w-16 mb-6 opacity-70" strokeColor="#B83E6B" />
        <h1 className="text-3xl md:text-4xl leading-tight text-ink-900 mb-5">
          Something went <span className="font-serif italic text-rose-600">wrong</span>
        </h1>
        <p className="text-ink-400 leading-relaxed max-w-md mb-9">
          This wasn&apos;t supposed to happen. You can try again, or head back
          to the homepage.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={reset}
            className="rounded-full bg-rose-600 px-6 py-3.5 text-sm font-semibold text-white shadow-soft hover:bg-rose-500 transition-all"
          >
            Try again
          </button>
          <Button href="/" variant="secondary">Back to Home</Button>
        </div>
      </div>
    </section>
  );
}

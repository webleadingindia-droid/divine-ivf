import { BloomMotif } from "@/components/ui/BloomMotif";

// Global route-transition fallback. Kept minimal and quick — this only
// shows for slower navigations, not every click.
export default function Loading() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center bg-cream">
      <BloomMotif className="h-10 w-10 animate-pulse" strokeColor="#B83E6B" />
    </div>
  );
}

# Divine Women & IVF Clinic — Website (Phase 1)

Next.js 14 (App Router) + TypeScript + Tailwind CSS. Fully static, no backend.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## What's in Phase 1

- Full design system (baby-pink palette, type scale) in `tailwind.config.ts`
- Header with desktop mega menu + mobile slide-in menu (`components/layout`)
- Sticky mobile call / book-consultation bar
- Complete, long-form homepage (`app/page.tsx`) with 18 sections
- Reusable static content in `data/` (services, navigation, FAQs, journey steps,
  doctor bio, testimonials, resources) — kept separate from components
- `sitemap.ts`, `robots.ts`, JSON-LD `MedicalClinic`/`Physician` structured data

## Before launch — replace placeholders

- `data/testimonials.ts` — currently placeholder text. Replace with real,
  verified patient testimonials (with consent) before publishing.
- All `images.unsplash.com` photos across `components/home/*` are stock
  placeholders for layout purposes. Swap in licensed clinic photography,
  and a real photo of Dr. Mandavi Rai in `DoctorSection.tsx` and `Hero.tsx`.
- The consultation form (Phase 2) will be frontend-only by design — no backend
  submission. Comments in that file will mark where a form service (e.g.
  Formspree, an API route, or email link) could be connected later.

## Next phases

Subpages (`/ivf`, `/ivf/icsi`, `/male-infertility`, etc.), the consultation
page, resources detail pages, and legal pages are not yet built — see the
phase checkpoint in chat for the full list and continue command.

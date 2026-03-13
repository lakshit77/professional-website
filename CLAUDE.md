# CLAUDE.md — Frontend Website Rules

## About This Website
**ChatSyncs** is a WhatsApp automation platform for growing businesses. It lets companies automate customer conversations, run broadcast campaigns, build no-code chatbot workflows, and connect existing tools — all powered by the official WhatsApp Business API. The website is a marketing/landing page aimed at converting business owners into trial signups.

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.
- **Invoke the `branding` skill** before using any color, font, logo, or semantic token. All visual identity values live in `lib/branding.ts` — never hardcode hex values or font names directly in components.

## Reference Images
- If a reference image is provided: match layout, spacing, typography, and color exactly. Swap in placeholder content (images via `https://placehold.co/`, generic copy). Do not improve or add to the design.
- If no reference image: design from scratch with high craft (see guardrails below).
- Screenshot your output, compare against reference, fix mismatches, re-screenshot. Do at least 2 comparison rounds. Stop only when no visible differences remain or user says so.

## Local Server
- **Always serve on localhost** — never screenshot a `file:///` URL.
- Start the dev server: `npm run dev` (Next.js serves at `http://localhost:3000`)
- Run it in the background before taking any screenshots.
- If the server is already running, do not start a second instance.

## Screenshot Workflow
- Puppeteer is installed via npm in the project root (`node_modules/puppeteer`). Chrome cache is at `~/.cache/puppeteer/chrome/mac_arm-146.0.7680.31/`.
- **Always screenshot from localhost:** `node screenshot.mjs http://localhost:3000`
- Screenshots are saved automatically to `./temporary screenshots/screenshot-N.png` (auto-incremented, never overwritten).
- Optional label suffix: `node screenshot.mjs http://localhost:3000 label` → saves as `screenshot-N-label.png`
- `screenshot.mjs` lives in the project root. Use it as-is.
- After screenshotting, read the PNG from `temporary screenshots/` with the Read tool — Claude can see and analyze the image directly.
- When comparing, be specific: "heading is 32px but reference shows ~24px", "card gap is 16px but should be 24px"
- Check: spacing/padding, font size/weight/line-height, colors (exact hex), alignment, border-radius, shadows, image sizing

## Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (installed via npm — do NOT use CDN)
- **Icons:** Lucide React (`lucide-react`)
- **Animations:** Framer Motion
- **Package manager:** npm

## Output Defaults
- Next.js App Router file structure (`app/` directory)
- Tailwind CSS configured via `tailwind.config.ts` and `postcss.config.js`
- Placeholder images: `https://placehold.co/WIDTHxHEIGHT`
- Mobile-first responsive

## Brand Assets
- **`lib/branding.ts`** is the single source of truth for all brand identity — colors, fonts, logo, semantic tokens, and metadata. Read this file before making any design decision.
- The **`branding` skill** (`.claude/skills/branding/SKILL.md`) defines the structure, types, and wiring patterns for `lib/branding.ts`. Invoke it when creating or updating the branding file.
- Raw source assets live in `assets/` (logo.png, favicon.ico, brand-guidelines.pdf). Copy logo and favicon to `public/` for Next.js serving.
- `docs/PRODUCTS-INFO.md` contains all the copy and content to show on the website.
- **Never invent brand colors or fonts.** Always read from `lib/branding.ts`.

## Anti-Generic Guardrails
- **Colors:** Never use default Tailwind palette (indigo-500, blue-600, etc.). Pick a custom brand color and derive from it.
- **Shadows:** Never use flat `shadow-md`. Use layered, color-tinted shadows with low opacity.
- **Typography:** Never use the same font for headings and body. Pair a display/serif with a clean sans. Apply tight tracking (`-0.03em`) on large headings, generous line-height (`1.7`) on body.
- **Gradients:** Layer multiple radial gradients. Add grain/texture via SVG noise filter for depth.
- **Animations:** Only animate `transform` and `opacity`. Never `transition-all`. Use spring-style easing.
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states. No exceptions.
- **Images:** Add a gradient overlay (`bg-gradient-to-t from-black/60`) and a color treatment layer with `mix-blend-multiply`.
- **Spacing:** Use intentional, consistent spacing tokens — not random Tailwind steps.
- **Depth:** Surfaces should have a layering system (base → elevated → floating), not all sit at the same z-plane.

## Folder Structure

```
chatsyncs/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout — shared Navbar + Footer
│   ├── page.tsx                  # Home / Landing page
│   ├── pricing/
│   │   └── page.tsx              # Pricing page
│   ├── about/
│   │   └── page.tsx              # About Us page
│   └── globals.css               # Global styles (Tailwind base imports only)
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx            # Site-wide navigation bar
│   │   └── Footer.tsx            # Site-wide footer
│   │
│   ├── shared/                   # Reusable UI primitives used across pages
│   │   ├── CTAButton.tsx         # Primary CTA button (all CTA buttons use this)
│   │   ├── SectionHeading.tsx    # Reusable section title + subtitle block
│   │   └── Badge.tsx             # Small label/tag badge component
│   │
│   ├── home/                     # Sections that live only on the Home page
│   │   ├── HeroSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── HowItWorksSection.tsx
│   │   ├── WhatsAppAPISection.tsx
│   │   ├── UseCasesSection.tsx
│   │   ├── BenefitsSection.tsx
│   │   └── FAQSection.tsx
│   │
│   ├── pricing/                  # Sections that live only on the Pricing page
│   │   ├── PricingHero.tsx
│   │   └── PricingCards.tsx
│   │
│   └── about/                   # Sections that live only on the About page
│       ├── AboutHero.tsx
│       └── MissionSection.tsx
│
├── constants/                    # All static data — never hardcode in components
│   ├── features.ts               # Core features list
│   ├── howItWorks.ts             # 3-step process data
│   ├── useCases.ts               # Use cases list
│   ├── benefits.ts               # Why businesses choose ChatSyncs
│   ├── faqs.ts                   # FAQ items
│   ├── keyFeatures.ts            # Feature table data
│   └── nav.ts                    # Navbar links
│
├── lib/                          # Utility functions and helpers
│   ├── branding.ts               # Single source of truth for all brand identity (colors, fonts, logo, tokens)
│   └── utils.ts                  # cn() helper and other shared utilities
│
├── public/                       # Static assets served at root
│   ├── logo.png
│   └── favicon.ico
│
├── assets/                       # Source assets (brand files, reference images)
│   ├── logo.png
│   ├── favicon.ico
│   └── brand-guidelines.pdf
│
├── .claude/
│   └── skills/
│       ├── frontend-design/
│       │   └── SKILL.md          # Design quality & aesthetic guardrails
│       └── branding/
│           └── SKILL.md          # Brand identity skill — colors, fonts, logo, tokens
│
├── docs/
│   └── PRODUCTS-INFO.md          # Product copy and content reference
│
├── temporary screenshots/        # Auto-saved Puppeteer screenshots (gitignore)
│
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
├── next.config.ts
├── package.json
├── serve.mjs                     # Static file server (used for Puppeteer screenshots)
├── screenshot.mjs                # Puppeteer screenshot script
└── CLAUDE.md
```

### Naming Conventions
- **Pages:** `app/[route]/page.tsx` — lowercase folder names
- **Components:** PascalCase filenames (`HeroSection.tsx`)
- **Constants:** camelCase filenames (`features.ts`), named exports
- **Types/Interfaces:** defined at the top of each constants file, exported

---

## Data & Constants Architecture

All static content — FAQs, testimonials, features, pricing plans, "How It Works" steps, brand logos, target audience list, and any other repeated or data-driven content — must be stored in the `constants/` folder. Components must never hardcode this data inline. They should always import from the constants file and render dynamically.

### Rules for the Agent

- Every constant file must export a typed array or object using TypeScript interfaces
- Define the TypeScript interface at the top of each constants file
- Components receive data as props or import directly from constants — never define data inside the component itself
- If the same data is used on both the website and the landing page (e.g. testimonials), use the same constant — do not duplicate it
- If the website and landing page need different variants of the same data type (e.g. different FAQs), use named exports like `websiteFAQs` and `landingFAQs` inside the same file
- When adding a new section that has more than 2 repeated items, always create a constants file for it first before building the component

### Example Pattern

```ts
// constants/testimonials.ts

export interface Testimonial {
  id: number
  name: string
  company: string
  role: string
  quote: string
  avatar?: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Sharma",
    company: "TechSolutions Pvt Ltd",
    role: "Founder",
    quote: "WaFlow tripled our lead response rate within the first week.",
    avatar: "/images/testimonials/rajesh.jpg"
  },
  // ... more entries
]
```

```tsx
// components/website/TestimonialsSection.tsx
import { testimonials } from "@/constants/testimonials"

export default function TestimonialsSection() {
  return (
    <section>
      {testimonials.map((t) => (
        <TestimonialCard key={t.id} {...t} />
      ))}
    </section>
  )
}
```

---

## Notes for the Agent

- When building components, always think mobile-first
- Use Tailwind utility classes only — no custom CSS files unless absolutely necessary
- Keep components modular and reusable where possible
- Use TypeScript interfaces for all props
- All CTA buttons should use the shared `CTAButton` component

## Hard Rules
- Do not add sections, features, or content not in the reference
- Do not "improve" a reference design — match it
- Do not stop after one screenshot pass
- Do not use `transition-all`
- Do not use default Tailwind blue/indigo as primary color

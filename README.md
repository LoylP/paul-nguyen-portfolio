# Paul Nguyen — AI Solution Architect

Personal portfolio of **Paul Nguyen (Nguyen Hoang Phuc)**, an AI Solution Architect focused on helping organizations move enterprise AI from proof of concept to practical adoption.

The site presents selected solution consulting, engineering, and academic work, alongside professional experience, technical expertise, and industry experience. Project descriptions are intentionally anonymized where appropriate.

**Portfolio highlights**

- Advised **20+ enterprises** and supported **9 AI & Cloud deals**
- Helped **600+ users** move from PoC to rollout
- **2 international conference papers** as first author

The portfolio is available in Vietnamese and English, with responsive layouts and light and dark themes.

## What’s inside

- **Work** — Solutions & Consulting, AI Systems Built, and Academic projects. Project cards open detailed views with architecture images and supporting context.
- **Experience** — Career timeline with expandable role details.
- **Expertise** — Four technical skill groups with technology icons, expandable lists, and advised industry domains.
- **Achievements** — Selected awards, education, research, and credentials.
- **Contact** — Email, LinkedIn, and CV links.

## Tech stack

- [Next.js](https://nextjs.org/) 16 App Router
- [React](https://react.dev/) 19 and TypeScript
- [Tailwind CSS](https://tailwindcss.com/) 4 and project-specific CSS
- [Motion](https://motion.dev/) for subtle interface animations
- [next-themes](https://github.com/pacocoursey/next-themes) for theme support
- [Lucide](https://lucide.dev/) icons and Next.js Image optimization

## Run locally

Prerequisites: Node.js 20.9 or later and npm.

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Useful commands

```bash
npm run lint    # Run ESLint
npm run build   # Create a production build (includes TypeScript checks)
npm run start   # Serve the production build
```

## Project structure

```text
app/                 App Router layout, page, global styles, and metadata
components/          Portfolio sections and reusable UI components
components/motion/   Reusable motion and scroll components
config/site.ts       Contact, CV, language-level, and paper URL configuration
data/                Vietnamese, English, and typed portfolio/toolkit content
public/              Technology icons, portfolio photos, and other static assets
```

## Personalize before publishing

Update the centralized values in [`config/site.ts`](./config/site.ts):

- `CONTACT_EMAIL` and `LINKEDIN_URL`
- `ENGLISH_LEVEL`
- `CV_PATH` — add the corresponding CV file under `public/`
- `PAPER_URLS` — replace the example URLs with the final publication links

For correct canonical and social-preview URLs in production, set `NEXT_PUBLIC_SITE_URL` to the public site origin, for example:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

The page content and translations live in [`data/vi.ts`](./data/vi.ts) and [`data/en.ts`](./data/en.ts). Shared content types and locale helpers are in [`data/portfolioData.ts`](./data/portfolioData.ts); toolkit skills and industry descriptions are in [`data/toolkitData.ts`](./data/toolkitData.ts).

## Accessibility and motion

The interface supports keyboard-operated navigation and dialogs, semantic section landmarks, and reduced-motion preferences. Images include meaningful localized alt text where they convey content.

---

Built as a personal portfolio for Paul Nguyen.

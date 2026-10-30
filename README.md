# Winter of Code Social (WOCS)

The website for **Winter of Code Social**, an open-source contribution program run by [Code Social](https://codesocial.tech), a free, volunteer-run tech community.

**Live site:** [woc.codesocial.tech](https://woc.codesocial.tech)

## What is WOCS?

WOCS connects first-time and early-career contributors with real open-source projects, maintainers, and mentors. Contributors pick up issues, open pull requests, and earn points on a public leaderboard when their PRs are merged.

The aim is to teach how open source actually works: reading an unfamiliar codebase, discussing issues in public, taking review feedback, and shipping changes that maintainers merge.

### WOCS 2025 in numbers

| People joined | Projects | Mentors | Pull requests |
| ------------- | -------- | ------- | ------------- |
| 1,500+        | 100+     | 70+     | 1,000+        |

### WOCS 2026 timeline

| Milestone                          | Date                         |
| ---------------------------------- | ---------------------------- |
| Registrations open                 | Open now                     |
| Projects announced, coding begins  | November 1, 2026             |
| Leaderboard goes live              | November 5, 2026             |
| Coding period ends                 | January 31, 2027             |
| Certificates and winners announced | February 10, 2027            |

## How points work

Each merged pull request to a participating project earns points based on the difficulty of the issue:

| Level        | Points | Typical work                                 |
| ------------ | ------ | -------------------------------------------- |
| Beginner     | 2      | Docs, typo fixes, good-first-issue PRs       |
| Intermediate | 5      | Bug fixes, tests, small features             |
| Advanced     | 11     | Major features, refactors, architecture work |

Unmerged or closed PRs do not earn points. At least one merged PR is required for a certificate.

## What this repo contains

| Route                 | Purpose                                             |
| --------------------- | --------------------------------------------------- |
| `/`                   | Landing page: how it works, impact, partners        |
| `/projects`           | Directory of participating projects                 |
| `/leaderboard`        | Contributor rankings and points rules               |
| `/timeline`           | Program milestones                                  |
| `/get-involved`       | Sign-up for contributors, mentors, and project admins |
| `/guidelines`         | Contribution rules                                  |
| `/faqs`, `/resources` | Help and learning material                          |
| `/sponsors`           | Sponsors and community partners                     |

## Tech stack

- [Next.js 13](https://nextjs.org/) (App Router), built as a static export
- TypeScript
- Tailwind CSS with [shadcn/ui](https://ui.shadcn.com/) components (Radix UI)
- Deployed on [Netlify](https://www.netlify.com/)

## Run locally

Requires [Node.js](https://nodejs.org/) 20 or newer.

**1. Clone the repository**

```bash
git clone https://github.com/arushibuilds/WOCS-website.git
cd WOCS-website
```

**2. Install dependencies**

```bash
npm install
```

**3. Set up environment variables (optional)**

```bash
cp .env.example .env.local
```

On Windows PowerShell: `Copy-Item .env.example .env.local`

Every variable is optional. Defaults for links, forms, and contact details live in [`lib/links.ts`](lib/links.ts).

**4. Start the dev server**

```bash
npm run dev
```

Open http://localhost:3000.

`npm run build` writes the static site to `out/`, which is what Netlify publishes.

## Project structure

```
app/          Routes and pages (Next.js App Router)
components/   Page sections and shared UI (components/ui holds shadcn/ui)
hooks/        Custom React hooks
lib/          Site content and helpers
public/       Static assets
```

Most site content is data, not markup:

- [`lib/program.ts`](lib/program.ts): dates, impact stats, events, and points rules
- [`lib/projects.ts`](lib/projects.ts): participating projects
- [`lib/partners.ts`](lib/partners.ts): sponsors and community partners
- [`lib/links.ts`](lib/links.ts): forms, Discord, and contact links

Only add information the organizing team has confirmed. Anything not yet decided stays empty, and the site shows "To be announced".

## Contributing

Contributions are welcome. Browse the [open issues](https://github.com/arushibuilds/WOCS-website/issues), comment on one you want to take, and open a pull request when it's ready.

Questions? Ask in the Code Social Discord.

## License

Released under the [MIT License](LICENSE).

Built by Team Code Social.

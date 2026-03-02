# Orion — Landing Page

Production-ready Next.js landing page for Orion IDE, the world's first deterministic AI code editor. Migrated from a single `index.html` into a fully typed, component-based architecture with Tailwind CSS, Framer Motion animations, and static export.

## Setup

```bash
npm install
cp .env.local.example .env.local   # fill in values
npm run dev                         # → http://localhost:3000
```

## Deploy

Push to GitHub → import to [Vercel](https://vercel.com) → add env vars in dashboard → deploy. The project uses `output: 'export'` for static hosting on any CDN.

## Environment Variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Plausible analytics domain |
| `NEXT_PUBLIC_DOWNLOAD_URL_MAC` | macOS download URL |
| `NEXT_PUBLIC_DOWNLOAD_URL_WIN` | Windows download URL |
| `NEXT_PUBLIC_DOWNLOAD_URL_LINUX` | Linux download URL |
| `NEXT_PUBLIC_APP_VERSION` | Version shown in hero (default: v2.0.1) |

## Folder Structure

```
orion/
├── app/              # Next.js App Router pages + layout
├── components/
│   ├── layout/       # Nav, Footer
│   ├── sections/     # Hero, Download, TrustStrip, Features, Reasons, Pipeline, Validation, Compare, Quote
│   └── ui/           # Button, FeatureCard, PipelineStep, ValidationLayer, GrainOverlay, CursorWrapper, etc.
├── hooks/            # useCursor
├── lib/              # data.ts (all static content)
├── types/            # TypeScript interfaces
└── public/           # Static assets
```

## How to Update

- **Version number**: Change `NEXT_PUBLIC_APP_VERSION` in `.env.local`
- **Download URLs**: Update `NEXT_PUBLIC_DOWNLOAD_URL_*` env vars
- **Content**: Edit `lib/data.ts`
- **Blog posts**: Add pages to `app/blog/` (MDX-ready structure)

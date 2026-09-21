# jackofalltradeskc.com

Professional handyman services website for home sellers and realtors in the Kansas City metro area.

## Tech Stack

- **React 19** + **TypeScript** via **Vite** — fast builds, instant HMR
- **Vercel** — deployed on the free (Hobby) tier
- **Formspree** — free tier form submission for the appointment request form (no backend required)

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build      # TypeScript check + Vite production build
npm run preview    # Preview the production build locally
```

## Deploy to Vercel

1. Push this repository to GitHub.
2. Import the project at [vercel.com](https://vercel.com) — Vercel will auto-detect Vite.
3. No additional configuration is required; `vercel.json` is included.

## Environment Variables

| Variable | Description |
|---|---|
| `VITE_FORMSPREE_ID` | Formspree form ID for the appointment request form (e.g. `xpwzgkjr`). Create a free form at [formspree.io](https://formspree.io) and paste the ID here. Set this in your Vercel project settings under **Settings → Environment Variables**. |

## Site Sections

| Section | Description |
|---|---|
| Hero | Headline, tagline, and call-to-action buttons |
| Services | 8 service cards covering common pre-sale repair categories |
| About | Company background and key stats |
| Schedule | Appointment request form (powered by Formspree) |
| Contact | Phone, email, service area, and hours |

## Extending the Site

- **Appointment Scheduling** — replace the Formspree form with [Cal.com](https://cal.com) (free tier) by embedding their widget, or integrate [Calendly](https://calendly.com).
- **Payments** — add [Stripe](https://stripe.com) for deposit collection using Stripe's free integration and Vercel serverless functions.

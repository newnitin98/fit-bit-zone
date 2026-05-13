# MEMORY.md — Fit Bit Zone Gym Website

This file serves as a persistent memory layer for AI tools working on this codebase. It captures key decisions, context, and state that should persist across sessions.

---

## Project State

| Key | Value |
|---|---|
| Status | Demo / Concept (not in production) |
| Version | 0.1.0 |
| Last Updated | May 2026 |
| Framework | Next.js 14 App Router |
| Styling | Tailwind CSS v3 |
| Animation | Framer Motion v11 |
| Icons | Lucide React v0.416 |

---

## Key Decisions Made

### Design Decisions
- **Dark theme chosen over light** — gym brands perform better with dark, high-contrast aesthetics
- **Electric yellow (#F5C518) as primary accent** — energetic, visible, premium without being neon
- **No real images used** — placeholder gradient blocks used to avoid IP issues in demo phase
- **Mobile-first layout** — most local Indian gym audience accesses via mobile
- **Gallery section mimics Instagram grid** — aligns with gym's existing Instagram presence

### Content Decisions
- **Pricing not displayed** — unknown; all plans use "Enquire on WhatsApp" CTA
- **No trainer names** — not publicly available; would require owner input
- **Review cards marked as display samples** — legally safe; original content based on public rating
- **Operating hours omitted** — not confirmed; users are directed to WhatsApp
- **"Start your fitness journey" tagline** — sourced from the gym's actual Instagram bio

### Technical Decisions
- **All 'use client' only where needed** (Navbar, Hero, Stats, About, Programs, WhyChooseUs, Gallery, Membership, Reviews, Location, FinalCTA) — Footer is server component
- **WhatsApp link format**: `https://wa.me/918269491116` (no spaces, country code included)
- **Google Maps**: Placeholder block with animation — real embed requires API key from owner

---

## Business Contact Info (Canonical)

```
Phone/WhatsApp: 8269491116
WhatsApp Deep Link: https://wa.me/918269491116
Instagram: https://www.instagram.com/fitbitzone_gym
Facebook: FIT BIT Zone Gym – Jabalpur
Address: Pawan Bhoomi, Sainik Society Road, Shakti Nagar, Jabalpur, MP 482001
```

---

## Things to Remember When Working on This Project

1. This is a DEMO — every claim must be either publicly verifiable or clearly marked as a sample
2. Never hardcode membership prices — the owner must confirm them
3. The gym has a hardcore/bodybuilding identity — keep all design and copy energetic and serious
4. The audience is local (Jabalpur) — emphasize local trust signals
5. WhatsApp is the primary conversion channel — every section should have a WhatsApp CTA
6. The gallery section uses visual placeholder blocks — mark them for replacement with real photos
7. Font stack uses Inter (Google Fonts via Next.js font optimization)

---

## Future Enhancement Ideas (Not Implemented)

- Real photo gallery with gym interior and equipment shots
- Live Instagram feed embed using Instagram Basic Display API
- WhatsApp chat widget (floating button)
- Google Maps embed with API key
- Membership form with name/phone/goal fields
- Transformation gallery with before/after photos (with consent)
- Blog/tips section for SEO content
- Trainer profile cards
- Real pricing section once confirmed
- Testimonial video embeds

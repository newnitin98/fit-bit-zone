# AGENTS.md — Fit Bit Zone Gym Website

## Purpose
This file helps AI agents understand the role, scope, and constraints of this website project. It defines what agents are permitted to modify, what must not be changed without explicit approval, and how to reason about the project.

---

## Project Identity

| Field | Value |
|---|---|
| Business Name | Fit Bit Zone Gym |
| Location | Pawan Bhoomi, Sainik Society Road, Shakti Nagar, Jabalpur, MP 482001 |
| Phone / WhatsApp | +91 82694 91116 |
| Instagram | @fitbitzone_gym |
| Facebook | FIT BIT Zone Gym – Jabalpur |
| Google Rating | 4.8 ★ |
| Google Reviews | 95+ |
| Instagram Followers | ~1.1K+ |
| Project Type | Demo / Concept Website |
| Tech Stack | Next.js 14 (App Router) + Tailwind CSS + Framer Motion + Lucide React |

---

## Agent Roles

### Content Agent
- May update copy, headlines, and descriptions.
- Must not fabricate trainer names, exact pricing, or medical claims.
- Must keep tone: energetic, professional, local, authentic.

### Design Agent
- May adjust colors within the brand palette.
- Must preserve: electric yellow `#F5C518`, dark `#0A0A0A`, gold `#D4A017`.
- Must not switch to a light theme without owner approval.

### SEO Agent
- May update metadata, keywords, OG tags.
- Must not remove the demo disclaimer.
- Must preserve local SEO signals: "Jabalpur", "Shakti Nagar", "Madhya Pradesh".

### Dev Agent
- May refactor components, improve animations, add features.
- Must not break the WhatsApp link format: `https://wa.me/918269491116`
- Must not replace Framer Motion without testing equivalence.

---

## Hard Rules (Do Not Violate)

1. Never claim exact membership pricing — it is unknown.
2. Never invent trainer names or staff details.
3. Never claim 24/7 hours or specific operating hours without owner confirmation.
4. Never make medical or guaranteed transformation claims.
5. Never remove the demo disclaimer from the footer.
6. Never claim fabricated awards or recognitions.
7. All CTA buttons must link to: `https://wa.me/918269491116`

---

## Production Upgrade Checklist (Before Go-Live)

- [ ] Replace gallery placeholder blocks with real gym photos
- [ ] Confirm and display actual membership pricing
- [ ] Add trainer names and bios (with owner permission)
- [ ] Confirm gym opening hours
- [ ] Add a real Google Maps embed
- [ ] Verify business legal name and registration
- [ ] Add real transformation testimonials (with consent)
- [ ] Set up a domain and production hosting
- [ ] Remove demo disclaimer from footer

---

## File Structure Reference

```
src/
  app/
    layout.tsx      — Root layout with SEO metadata
    page.tsx        — Main page assembling all sections
    globals.css     — Global styles, custom utilities
  components/
    Navbar.tsx
    Hero.tsx
    Stats.tsx
    About.tsx
    Programs.tsx
    WhyChooseUs.tsx
    Gallery.tsx
    Membership.tsx
    Reviews.tsx
    Location.tsx
    FinalCTA.tsx
    Footer.tsx
docs/
  WEBSITE_BRIEF.md
  CONTENT_STRATEGY.md
  SEO_PLAN.md
  GRAPHIFY_MAP.md
AGENTS.md           ← This file
AI_CONTEXT.md
MEMORY.md
```

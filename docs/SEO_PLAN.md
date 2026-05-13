# SEO_PLAN.md — Fit Bit Zone Gym

## SEO Overview

This plan targets **local SEO** for Jabalpur, Madhya Pradesh, with a focus on people searching for gyms, strength training, and fitness in and around Shakti Nagar.

---

## Primary Target Keywords

| Keyword | Intent | Priority |
|---|---|---|
| Fit Bit Zone Gym | Brand | High |
| Gym in Jabalpur | Local / Discovery | High |
| Gym in Shakti Nagar Jabalpur | Local / Hyperlocal | High |
| Fitness center Jabalpur | Local | Medium |
| Bodybuilding gym Jabalpur | Niche Local | High |
| Strength training Jabalpur | Service | Medium |
| Personal trainer Jabalpur | Service | Medium |
| Weight loss gym Jabalpur | Service | Medium |
| Online fitness guidance Jabalpur | Service | Low |
| Best gym Shakti Nagar | Competitive | High |

---

## Page Metadata (Implemented)

### Title Tag
```
Fit Bit Zone Gym Jabalpur | Strength Training & Fitness in Shakti Nagar
```

### Meta Description
```
Fit Bit Zone Gym in Shakti Nagar, Jabalpur offers strength training, bodybuilding, weight loss support, online fitness guidance, and a focused gym environment for fitness transformation.
```

### Keywords Meta
```
Fit Bit Zone Gym, Gym in Jabalpur, Gym in Shakti Nagar, Fitness Jabalpur, Bodybuilding Jabalpur, Strength Training Jabalpur
```

### Open Graph
- Title: "Fit Bit Zone Gym Jabalpur | Strength & Fitness in Shakti Nagar"
- Description: "Train at Jabalpur's hardcore fitness destination..."
- Type: website
- Locale: en_IN
- Site Name: Fit Bit Zone Gym

### Twitter Card
- Card type: summary_large_image
- Title and description set

---

## Local SEO Signals (Implemented)

| Signal | Where |
|---|---|
| `geo.region` meta tag | `layout.tsx` |
| `geo.placename` meta tag | `layout.tsx` |
| Full address in footer | `Footer.tsx` |
| Full address in location section | `Location.tsx` |
| "Shakti Nagar" in hero badge | `Hero.tsx` |
| "Jabalpur" in hero headline | `Hero.tsx` |
| Local copy throughout | All sections |

---

## Structured Data (Recommended for Production)

Add the following JSON-LD schema in `layout.tsx` for production:

```json
{
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  "name": "Fit Bit Zone Gym",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Pawan Bhoomi, Sainik Society Road",
    "addressLocality": "Shakti Nagar, Jabalpur",
    "addressRegion": "Madhya Pradesh",
    "postalCode": "482001",
    "addressCountry": "IN"
  },
  "telephone": "+918269491116",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "95"
  },
  "sameAs": [
    "https://www.instagram.com/fitbitzone_gym",
    "https://www.facebook.com/FITBITZoneGymJabalpur"
  ]
}
```

---

## Content SEO Opportunities (Production Phase)

1. **Blog / Tips Section** — "Best Beginner Workouts in Jabalpur", "How to Start a Fitness Journey", etc.
2. **Transformation Stories** — Long-form member success stories with local names
3. **FAQ Section** — Target long-tail: "How much does gym membership cost in Jabalpur?"
4. **Google Business Profile** — Link the production website URL to the existing GBP listing
5. **Image ALT Tags** — All real photos should include location + keyword ALT text

---

## Technical SEO (Implemented)

- `robots: { index: true, follow: true }` set in metadata
- `canonical` URL set
- Semantic HTML structure (h1, h2, h3 hierarchy)
- Mobile-first responsive layout
- Inter font loaded via `next/font` (performance-optimized)
- `scroll-behavior: smooth` for internal navigation
- No broken links

---

## Off-Page SEO Recommendations (Production Phase)

1. Submit website to Google Search Console
2. Add website URL to Google Business Profile (GBP)
3. Encourage members to mention the website in Google Reviews
4. Add website URL to Instagram bio and Facebook page
5. Local directory listings: JustDial, Sulekha, UrbanClap

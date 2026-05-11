---
project: Bombshells Redesign
archetype: american-casual-bar-grill
inspired_by:
  - source: https://www.4bombshells.com/ (live site, extracted 2026-05-11)
    take: military-pinup brand identity, stenciled display type, warm red + saturated wood texture, food-forward hero
    not_taking: distressed-everything texture, modal-as-first-thought popup, generic Lato body, baked-in image text
  - source: Hopdoddy Burger Bar (hopdoddy.com)
    take: editorial restraint applied to casual food — proves bar-grill can ship without grunge cliches
  - source: Punch Bowl Social (punchbowlsocial.com)
    take: maximalist hero with disciplined typography; how to be loud without looking dated
synced_with_code: 2026-05-11 (Hero, Navbar, Footer, About, Hours, PhotoGrid live)
---

# Brand Thesis

Bombshells is a Texas military-pinup bar & grill. The aesthetic is **WWII-era pinup poster meets modern American casual dining**: warm reds, stenciled headlines, food photography that smells like a flat-top grill at midnight. We keep the patriotic-American DNA (stars, stencils, bombshell silhouette) but trade the original site's grunge-overload texture for premium-casual restraint — confident reds, dark warm neutrals, single dominant photo per viewport.

# Aesthetic Constants

## Palette (OKLCH)

Tinted toward warm red (hue ~22-25) across all neutrals. No pure black, no pure white.

| Token | OKLCH | Hex (approx) | Use |
|---|---|---|---|
| `bg` | `oklch(0.11 0.01 22)` | #1a1210 | Page background |
| `surface` | `oklch(0.16 0.012 22)` | #261c19 | Cards, tiles |
| `surface-raised` | `oklch(0.20 0.014 22)` | #2f2421 | Hover/raised state |
| `accent` | `oklch(0.52 0.22 25)` | #c2272a | Primary CTA, eyebrow, rules |
| `accent-hover` | `oklch(0.58 0.22 25)` | #d83236 | CTA hover |
| `amber` | `oklch(0.72 0.14 65)` | #d4a04a | Stars, highlights, "open" markers |
| `text-primary` | `oklch(0.94 0.008 22)` | #f3eceb | Body / headline white |
| `text-secondary` | `oklch(0.65 0.008 22)` | #a59c98 | Sub-copy, labels |
| `border` | `oklch(0.25 0.01 22)` | #3c322f | Dividers |

**Color strategy: Committed.** Accent red carries 30-50% of the visual weight on heros, eyebrows, rules, primary CTAs. Amber stars/markers ≤10%. Everything else is warm tinted neutral.

**Live site comparison:** Original Bombshells uses a flatter, less-saturated red (`#A62528` ≈ `oklch(0.45 0.17 25)`). Our `#c2272a` reads more vivid on dark and tests better in OKLCH — keep ours.

## Typography

Three-font system. Stenciled display carries the brand — body stays clean and modern.

| Role | Family | Weight | Notes |
|---|---|---|---|
| Display | **Bebas Neue** | 400 | Hero text, large headlines. Tall, condensed, lightly stenciled feel. |
| Heading | **Oswald** | 500-600 | Eyebrows, section labels, nav, uppercase utility |
| Body | **DM Sans** | 400-500 | Paragraphs, descriptions, list items |

**Why these vs the live site:**
- Live site uses **Stardos Stencil** (red, 48px, weight 500) for display — pure military stencil. It's brand-correct but reads as 2010s-stamp and limits hierarchy.
- We use **Bebas Neue** instead — gives the same compressed, stencil-adjacent display energy with cleaner letterforms and a real scale system. Pairs with Oswald (also condensed, same vertical proportions) for harmony.
- Lato (live body) is a distributional-average choice. **DM Sans** has tighter optical sizes and a more modern feel that respects the brand without looking dated.

**Scale (fluid clamp):**
- `text-hero` = `clamp(4rem, 10vw, 8rem)` / line-height 0.95
- `text-3xl-fluid` = `clamp(3rem, 6vw, 5rem)` / line-height 1.0
- `text-2xl-fluid` = `clamp(2rem, 4vw, 3rem)` / line-height 1.1
- `text-xl-fluid` = `clamp(1.5rem, 3vw, 2rem)` / line-height 1.2
- Body = 16-18px / 1.55

**Uppercase + tracking discipline:**
- Eyebrows and labels: Oswald 600 + `tracking-[0.28em-0.3em]` + `uppercase`
- CTAs: Oswald 600 + `tracking-widest` + `uppercase`
- Never letterspace lowercase body text.

## Grid + Spacing

- Max content width: **1280px**
- Page gutter: **24px mobile / 24-32px desktop**
- 8-point spacing scale (Tailwind defaults)
- Section vertical padding: `py-24 md:py-32` (96px → 128px)
- Breakpoints: standard Tailwind (`sm: 640`, `md: 768`, `lg: 1024`, `xl: 1280`)

## Motion

Premium-casual, not flashy. Restaurant sites that animate every element feel like 2018.

- **Hero entrance:** CSS keyframes only (`fadeUp` 40px → 0, easing `cubic-bezier(0.16, 1, 0.3, 1)`, staggered 0.2/0.4/0.65/0.85s). CSS not GSAP — survives Playwright headless, SSR, slow networks.
- **Scroll reveals:** Y-axis only (32px → 0). Elements visible by default at `opacity: 1` so they never get stuck. GSAP ScrollTrigger enhances; CSS is the fallback.
- **Hover:** 200ms color transitions, `hover:scale-[1.02]` on primary CTAs only. No bounce, no elastic.
- **Smooth scroll:** Lenis `lerp: 0.08`.
- **Respect `prefers-reduced-motion`:** All durations clamped to 0.01ms.

**No** parallax. **No** custom cursors. **No** auto-playing video heroes (data cost on mobile).

# Voice + Copy

Tight, declarative, food-first. Texas casual. No marketing-speak, no em dashes.

## Tone rules

- **Lead with what it IS, not what you'll feel.** "Scratch-made food, cold drinks, live entertainment." Not "Experience the warmth of Texas hospitality."
- **Headlines are noun phrases** in Title Case or UPPERCASE.
- **CTAs describe the outcome:** "See the Menu", "Find a Location", "Order Online" — never "Click Here" or "Learn More".
- **Numbers > adjectives.** "Open 11AM to 2AM" > "Open late". "365 days a year" > "Always open".
- **No em dashes in UI copy.** Use commas, colons, semicolons, or periods.
- **Profanity:** No. The brand is sexy, not crude.

## Voice anchors (steal these patterns)

- "Houston's Favorite Bar & Grill"
- "Great Times, Great Food"
- "Scratch-made food, zero shortcuts"
- "Open 11AM to 2AM. Kitchen open all night."
- "Where Houston comes to eat"

## Hashtag

`#4Bombshells` — community/UGC marker, lives in the gallery section and footer. Lowercase or as written, never restyled.

# Decision Logic

## Hero pattern

**One composition.** Food background (dark, moody, real photography) + centered Bombshells logo + 5 amber stars + sub-copy + 2 CTAs. The logo IS the headline.

- Avoid: text-only headlines, hero stat blocks, carousels
- Required: dramatic dark overlay (`bg-[#1a1210] opacity-72-75`), single visual anchor

## When to use accent red

- Primary CTA backgrounds
- Eyebrow text + decorative rules
- Underline accents on links
- Star bullets in lists
- Active nav state

**Not** for: body paragraphs, large background fills (it's a 10-30% color, not 50%), or as gradient text

## Cards vs flat

Flat by default. Use a card only when the card is the interaction:
- Feature tiles (Events / Rewards / Gift Cards) — yes, cards (each is its own click target)
- About section bullets — no card (just a flat list with star bullets)
- Gallery items — no card (full-bleed image, hover scale)

## Star vs bomb iconography

- **5-point stars (amber):** Decorative, used in rows of 3-5 around section accents
- **Bomb silhouette (red):** Used sparingly — flanking the hero tagline, gallery section header. Once per section max.
- **Bullet lists:** Always a single red star, never a dot or em-dash bullet

# Never

- ❌ **Grunge wood textures as page background.** The original uses distressed wood everywhere — it dates the site to 2012. Solid dark warm bg only.
- ❌ **Baked-in image text.** Hero/section headlines are HTML, not stamped into JPGs. Live site has "IT'S THE WAR OF TASTE BUDS" embedded in slider images — this is bad for accessibility, responsive layout, and copy iteration.
- ❌ **Newsletter modal on first visit (the live site does this on mobile).** Trust-destroying, anti-pattern, and a critical-fail in our taste rubric.
- ❌ **Light blue header bar.** Live site has a light blue strip with order CTAs flanking the logo — breaks the warm palette completely. Keep nav in the bg color.
- ❌ **`Lato` for body, `Stardos Stencil` for display.** Replaced with the DM Sans / Bebas Neue / Oswald stack above.
- ❌ **Em dashes in UI copy.** Use other punctuation.
- ❌ **Pure `#000` / `#fff`.** All neutrals tinted toward hue 22 (warm red).
- ❌ **Carousels in the hero.** Single composition only.
- ❌ **Modal-as-first-thought.** No interstitials, no email gate, no popup before the user sees the site.
- ❌ **Side-stripe accent borders.** Universal ban from our taste rubric.
- ❌ **Glassmorphism / blurred-card surfaces.** Doesn't fit a bar-grill brand.

# Reference Sites (vibe anchors)

- [hopdoddy.com](https://hopdoddy.com) — casual American burger bar that ships with editorial restraint. Steal: the disciplined type hierarchy and the way they let one food photo carry the hero.
- [punchbowlsocial.com](https://punchbowlsocial.com) — maximalist hero done right. Steal: how they balance personality with hierarchy.
- [velvettaco.com](https://velvettaco.com) — Texas-native casual chain with strong palette discipline. Steal: how they handle the "menu / locations / order" tri-CTA without clutter.
- [babyspizza.com](https://babyspizza.com) — solid example of a regional restaurant chain with brand-forward design.

**Anti-references (do NOT look like these):**
- Generic Squarespace "Aria" restaurant template
- Any site whose hero is a centered headline on a stock food gradient
- TGI Friday's / Applebee's circa 2018

# How to apply

**Before any new component or page:**
1. Open this file. Re-read the Brand Thesis and "Never" list.
2. Check the OKLCH palette tokens are wired in `src/index.css` `@theme` block — never hardcode a hex.
3. Type stack must be Bebas Neue / Oswald / DM Sans. If you reach for Inter, stop.
4. Spacing in 8pt multiples. Sections at `py-24 md:py-32` minimum.
5. One visual anchor per first viewport. One primary CTA.
6. Run `/design-taste-check` on the result before declaring done.

**When iterating:**
- `/visual-iterate` loop closes the gap until every rubric dimension ≥ 8/10
- `/impeccable polish` is the final pass before shipping or showing a client
- If a change violates this DESIGN.md, either update the doc with rationale or roll back the change. Do not silently drift.

**When extending:**
- New section? Pick one job for it (explain, prove, deepen, convert).
- New copy? Test against the Voice rules — would this sentence appear in marketing for an Applebee's? If yes, rewrite.
- New color? It belongs to one of the 9 tokens above or doesn't exist.

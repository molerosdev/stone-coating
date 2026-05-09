---
version: alpha
name: Stone Coating & Resinous — Premium Blue Glossy Resin Finish
description: >-
  A corporate, premium flooring brand identity inspired by glossy epoxy
  flooring, polished concrete, and resin shine. White and ice-gray sections
  for clarity, deep navy and royal blue for depth, sky blue and silver for
  shiny accents.
colors:
  primary: "#0B1F3A"
  primary-deep: "#123C69"
  accent: "#145CFF"
  accent-shine: "#4DB8FF"
  metallic: "#D8E2EA"
  surface: "#FFFFFF"
  surface-soft: "#F3F8FC"
  neutral: "#B7C0C8"
  ink: "#101820"
typography:
  display:
    fontFamily: Montserrat
    fontSize: 56px
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: -0.02em
  h1:
    fontFamily: Montserrat
    fontSize: 44px
    fontWeight: 700
    lineHeight: 1.06
    letterSpacing: -0.018em
  h2:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: -0.012em
  h3:
    fontFamily: Montserrat
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.25
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.55
  eyebrow:
    fontFamily: Montserrat
    fontSize: 11px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0.32em
rounded:
  xs: 6px
  sm: 10px
  md: 14px
  lg: 20px
  xl: 28px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
  gutter: 24px
  margin: 40px
  section: 96px
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.surface}"
    rounded: "{rounded.full}"
    padding: 12px
  button-primary-hover:
    backgroundColor: "{colors.accent-shine}"
    textColor: "{colors.surface}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
    padding: 12px
  card-light:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.lg}"
    padding: 28px
  card-dark:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: 28px
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: 12px
  input-focus:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
---

# Stone Coating & Resinous — Design System

## Overview

Also known as "Brand & Style".

Stone Coating & Resinous renovates concrete surfaces — epoxy, resinous,
polished concrete, stone coatings — for residential, commercial, and
industrial properties across Oklahoma. The brand should feel **corporate,
premium, modern, clean, and high-trust**, with a *resin shine* visual
language inspired by glossy epoxy flooring, polished concrete, and clean
commercial interiors.

Hierarchy is communicated by alternating clean white / ice-gray sections
with deep navy / royal-blue sections, so the page feels balanced rather
than uniformly dark. Subtle shine — gradient buttons, glass-effect badges,
metallic dividers, light-sweep on hero imagery — supplies the premium feel
without veering into neon or cartoon territory.

## Colors

The palette is built on three groups: navy depth, blue accents, and
silver-on-white neutrals.

- **Primary (Deep Navy, #0B1F3A):** Hero overlays, dark sections, footer,
  body text on light surfaces. Conveys depth and corporate weight.
- **Primary-deep (Steel Navy, #123C69):** Mid-step in hero/CTA gradients
  and dark-card backgrounds.
- **Accent (Royal Blue, #145CFF):** Primary CTAs, links, focus rings,
  active nav states, and the leading edge of the gloss-accent gradient.
- **Accent-shine (Glossy Sky Blue, #4DB8FF):** Hover states, headline
  underlines, card top accents, glow shadows, and the shiny end of every
  gradient.
- **Metallic (Silver Chrome, #D8E2EA):** Borders on light cards, divider
  highlights, secondary surface details — the "polished metal" cue.
- **Surface (Pure White, #FFFFFF):** Primary light section background;
  card surfaces; reads as a clean commercial interior.
- **Surface-soft (Soft Ice Gray, #F3F8FC):** Alternate light section
  background to give rhythm without going dark.
- **Neutral (Polished Concrete Gray, #B7C0C8):** Secondary text on light
  surfaces, dividers, flooring-inspired calm tone.
- **Ink (Charcoal Black, #101820):** Body text on light surfaces and the
  highest-contrast overlay color.

### Application

- Dark sections (hero, "What Makes Us Different", Process, Final CTA,
  footer): white headings, ice-gray body text, sky-blue eyebrows and
  accent words.
- Light sections (What We Do, Who We Serve, Services Preview, Projects,
  FAQ): navy headings, charcoal body text, royal-blue eyebrows and CTAs.
- Use the gradient `linear-gradient(135deg, {colors.primary} 0%, {colors.primary-deep} 45%, {colors.accent} 100%)`
  for hero and final-CTA backgrounds.
- Use `linear-gradient(135deg, {colors.accent} 0%, {colors.accent-shine} 100%)`
  for primary buttons.
- Use `linear-gradient(90deg, {colors.accent} 0%, {colors.accent-shine} 50%, {colors.metallic} 100%)`
  as a thin top-of-card or under-headline accent line.

## Typography

**Headings** use Montserrat (alternate: Inter Tight or Poppins SemiBold).
**Body** uses Inter (alternate: Lato or Open Sans). Both render with
antialiasing enabled.

- `display` (56/1.04, -0.02em) — hero h1.
- `h1` (44/1.06) — interior page hero h1.
- `h2` (32/1.12) — section titles.
- `h3` (20/1.25) — card titles, sub-headings.
- `body-lg` (18/1.6) — hero subhead, large paragraph copy.
- `body` (16/1.6) — default paragraph copy.
- `body-sm` (14/1.55) — captions, helper text, secondary labels.
- `eyebrow` (11/1.2, +0.32em tracking, uppercase) — section tags above
  headlines and on cards.

Color rules: headlines never gray; on dark surfaces use `surface`, on
light surfaces use `primary`. Body copy uses `surface` (or 85% alpha) on
dark, `ink/75-80%` on light. Accent words inside headlines use
`accent-shine` (dark) or `accent` (light) for emphasis.

## Layout

The page is built on a 12-column grid, max content width **1280px**
(`max-w-7xl`), gutters of **24px** mobile / **40px** desktop. Sections
use **80–112px** vertical padding (`py-20 md:py-28`). Cards use **24–28px**
internal padding. Sections alternate between dark and light to give
balance and avoid uniform darkness.

Recommended section order on the homepage: Hero (dark) → What We Do
(light) → What Makes Us Different (dark) → Who We Serve (light) →
Services Preview (light) → Process (dark) → Projects (light) → FAQ
(light) → Final CTA (dark blue gradient) → Footer (dark navy).

## Elevation & Depth

Three shadow tiers express the resin-shine feel:

- **Gloss-button:** `0 12px 30px rgba(20, 92, 255, 0.28)` — primary CTAs.
- **Gloss-card:** `0 18px 45px rgba(11, 31, 58, 0.12)` — light surface
  cards, contact form, sidebars.
- **Gloss-card-dark:** `0 18px 45px rgba(20, 92, 255, 0.18)` — dark
  surface cards on navy sections.
- **Gloss-glow (hover):** `0 0 0 1px rgba(77,184,255,0.35), 0 24px 60px rgba(20, 92, 255, 0.25)`
  — hover lift on cards and CTAs.

Cards use 1px borders rather than heavy strokes, paired with a 2–3px top
edge in the gloss-accent gradient to read as a polished surface.

## Shapes

Rounded scale is generous but corporate, never pill-everything:
`xs 6px`, `sm 10px`, `md 14px` (inputs, modals), `lg 20px` (cards,
sidebars), `xl 28px` (hero photo frames), `full` (pills, buttons).

## Components

### Primary Button (`Request a Quote`)
- Background: `linear-gradient(135deg, {colors.accent}, {colors.accent-shine})`.
- Foreground: `{colors.surface}`.
- Border: `1px solid rgba(255,255,255,0.25)` — internal gloss highlight.
- Radius: `{rounded.full}`.
- Shadow: gloss-button. Hover: lift `-2px` and switch to gloss-glow.
- Includes an inner `::before` overlay of `linear-gradient(to bottom, rgba(255,255,255,0.25), transparent)`
  for resin reflection.

### Secondary Button (`Explore Services`)
- Background: `{colors.surface}`. Foreground: `{colors.primary}`.
- Border: `1px solid {colors.accent}` at 40% alpha; hovers to full alpha.
- Radius: `{rounded.full}`. Shadow: subtle navy 8% drop.

### Light Card (Service / Customer / Project preview)
- Background: `{colors.surface}` (or `rgba(255,255,255,0.95)` for tint).
- Border: `1px solid {colors.metallic}` (silver chrome).
- Top accent: 3px gloss-accent gradient bar.
- Padding: 28px. Radius: `{rounded.lg}`.
- Hover: lift `-4px`, swap shadow to gloss-glow, image area gains
  card-shine overlay and a sky-blue tint.

### Dark Card (Differentiator / Process step / Sidebar)
- Background: `linear-gradient(145deg, {colors.primary}, {colors.primary-deep})`
  (often expressed as `bg-deep-blue/40 backdrop-blur-sm` on a navy section).
- Border: `1px solid rgba(77,184,255,0.25)`; hover `0.6` alpha.
- Top accent: 2px gloss-accent.
- Title color: `{colors.surface}` (or `{colors.accent-shine}` for highly
  emphasised cards).
- Body color: `{colors.surface}` at 80–85% alpha.

### Input (Contact form)
- Background: `{colors.surface}`. Radius: `{rounded.md}`. Border:
  `1px solid {colors.metallic}`. Focus: border becomes
  `{colors.accent}` and adds `0 0 0 4px rgba(20,92,255,0.15)` ring.
- Label uppercase eyebrow (`navy`), 11–12px, 0.22em tracking.

### Header
- Above hero: transparent background, white logo, white nav links with
  underline animation in gloss-accent on hover/active.
- After scroll: `bg-navy/95` with `backdrop-blur-md`, sky-blue/15 border
  bottom, soft navy shadow.
- CTA button always visible; uses primary button styling.
- Mobile menu: solid navy panel with sky-blue/15 dividers and primary CTA
  pinned at the bottom of the menu.

### Footer
- Background: `{colors.primary}` (deep navy) with two metallic dividers
  (top and above the legal line) and ambient blue radial glows in the
  corners.
- Body copy: `surface` at 80% alpha; link hover transitions to
  `accent-shine`. Section labels uppercase eyebrow in `surface`.

## Do's and Don'ts

**Do**
- Mix dark and light sections so the page never feels uniformly dark.
- Use the gloss-accent gradient as a thin 2–3px top edge on cards.
- Pair every primary CTA with a secondary outline button.
- Apply `card-shine` overlay only on hover, not by default.
- Keep imagery on-brand: glossy epoxy, polished concrete, resinous
  surfaces, before-and-after, clean commercial interiors.

**Don't**
- Don't use neon blues or pure cyan; sky-blue is the lightest it gets.
- Don't add cartoon, AI-stock, or generic startup illustrations.
- Don't apply shine to every element — reserve it for hero, CTAs, card
  hovers, and section dividers.
- Don't drop hero contrast below 4.5:1 for headlines or 3:1 for body
  copy on the photo overlay.
- Don't use emojis in UI copy.

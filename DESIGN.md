---
name: Shreemay Skin Clinic
description: Ink-and-celadon dermatology care for clear next steps in Vadodara.
colors:
  paper: "oklch(0.965 0.016 101)"
  paper-deep: "oklch(0.92 0.028 101)"
  card: "oklch(0.985 0.009 101)"
  clinic-ink: "oklch(0.22 0.045 171)"
  clinic-ink-soft: "oklch(0.43 0.047 171)"
  primary: "oklch(0.31 0.087 171)"
  primary-foreground: "oklch(0.97 0.018 101)"
  celadon: "oklch(0.82 0.091 164)"
  saffron: "oklch(0.82 0.145 90)"
  rose: "oklch(0.69 0.125 28)"
  border: "oklch(0.83 0.037 101)"
typography:
  display:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(3.5rem, 7vw, 6.1rem)"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-0.032em"
  body:
    fontFamily: "Public Sans, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Public Sans, system-ui, sans-serif"
    fontSize: "0.68rem"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "0.09em"
rounded:
  sm: "0.625rem"
  md: "0.875rem"
  pill: "999px"
spacing:
  gutter-mobile: "1rem"
  gutter-wide: "1.5rem"
  section: "clamp(4.5rem, 9vw, 8rem)"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    rounded: "{rounded.sm}"
    padding: "0.625rem 0.75rem"
    height: "2.25rem"
  button-secondary:
    backgroundColor: "{colors.celadon}"
    textColor: "{colors.clinic-ink}"
    rounded: "{rounded.sm}"
    padding: "0.625rem 0.75rem"
    height: "2.25rem"
  card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.clinic-ink}"
    rounded: "{rounded.md}"
    padding: "1rem"
  badge:
    backgroundColor: "{colors.celadon}"
    textColor: "{colors.clinic-ink}"
    rounded: "{rounded.pill}"
    padding: "0.125rem 0.5rem"
---

# Design System: Shreemay Skin Clinic

## Overview

**Creative North Star: "The Apothecary Register"**

The interface treats a clinic visit like a carefully kept care record: calm paper surfaces, dark ink hierarchy, celadon status marks, and saffron moments that help the eye find the next action. Real clinic imagery is framed as evidence inside the record, not as decorative stock photography.

The system is editorial but practical. It uses shadcn Base UI primitives for actions, cards, badges, separators, sheets, accordions, and avatars, then lets the global token layer carry the visual identity. The page avoids generic clinic hero scaffolding, repeated eyebrows, and gradient-led decoration.

**Key Characteristics:**

- Ink-forward hierarchy with a cool paper ground.
- Celadon and saffron used as functional status and action signals.
- Real doctor and clinic photography in framed record surfaces.
- Clear conversion path available in the header, hero, and visit section.
- Responsive layout that becomes a single-column care index with a shadcn Sheet navigation.

## Colors

The palette is a restrained full palette: dark clinic ink anchors trust, celadon carries support, saffron marks attention, and paper keeps long-form reading comfortable.

### Primary

- **Deep Clinic Ink** (`colors.primary`): Main action surfaces, dark process and review bands, and the strongest hierarchy.
- **Primary Paper Text** (`colors.primary-foreground`): High-contrast type on dark clinic ink.

### Secondary

- **Measured Celadon** (`colors.celadon`): Supporting actions, doctor section fields, and positive care context.
- **Saffron Register Mark** (`colors.saffron`): High-attention accents such as ratings, record highlights, and the visit surface.
- **Quiet Rose** (`colors.rose`): Small brand emphasis in the wordmark only.

### Neutral

- **Clinic Paper** (`colors.paper`): Main page ground and card surface.
- **Paper Deep** (`colors.paper-deep`): Tonal separation for quiet surfaces.
- **Clinic Ink** (`colors.clinic-ink`): Primary text and headings.
- **Clinic Ink Soft** (`colors.clinic-ink-soft`): Body copy, descriptions, and supporting labels.
- **Register Border** (`colors.border`): Dividers, card rings, and structural rules.

### Named Rules

**The Record Before Rush Rule.** Let the visitor understand the concern and care path before asking for conversion.

**The One Accent Ledger Rule.** Saffron is a precise marker for attention, not a general-purpose background or text color.

## Typography

**Display Font:** Fraunces (with Georgia, serif)

**Body Font:** Public Sans (with system sans-serif)

**Character:** Fraunces gives the record a human, editorial voice; Public Sans keeps medical detail and action labels legible on small screens.

### Hierarchy

- **Display** (600, responsive clamp, tight leading): Hero and treatment titles; the page thesis should read before the supporting copy.
- **Headline** (600, responsive clamp, tight leading): Section titles and the major care narrative.
- **Title** (600, compact): Card titles, footer brand, and record captions.
- **Body** (400, 1rem base, 1.65 leading): Explanations and clinic details kept to a readable measure.
- **Label** (800, small, tracked, often uppercase): Metadata, category badges, timings, and navigation support.

### Named Rules

**The Two-Voice Rule.** Fraunces names the care story; Public Sans explains the care path and the action.

## Layout

The page uses one centered container with a mobile gutter and a wider desktop gutter. The home hero is a two-column record: copy and action on the left, real doctor evidence on the right. Care uses one featured record plus a two-by-two index; process uses an ordered four-step row that linearizes on small screens. Doctor, visit, and treatment detail routes collapse to a single column at tablet widths.

Sections use generous vertical breathing room with tighter internal groups. The header stays sticky, the primary booking action remains visible on desktop, and mobile replaces the nav with a right-side shadcn Sheet. Content never relies on horizontal scrolling.

## Elevation & Depth

Depth is primarily tonal: paper, celadon, ink, and saffron fields create the hierarchy. shadcn cards use a quiet ring at rest; the floating WhatsApp contact is the only persistent lifted element and uses the shared ambient shadow token. Images gain depth through crop, caption overlays, and tonal framing rather than decorative glass.

### Shadow Vocabulary

- **Ambient contact lift** (`--clinic-shadow`): Used only for the floating WhatsApp action.

### Named Rules

**The Flat-by-Default Rule.** Surfaces rest on tonal contrast and structural rings; lift is reserved for an action that follows the visitor.

## Shapes

Cards and image frames use gently curved corners from the shared clinic radius. Small controls use compact rounded corners; badges and floating contact use pill silhouettes only where the control is status-like or circular. Separators are structural one-pixel rules and replace ad hoc border markup.

## Components

### Buttons

- **Shape:** Compact rounded corners with a clear size scale from small to large.
- **Primary:** Deep Clinic Ink background with light paper text; used for booking and the next step.
- **Secondary:** Measured Celadon background with dark clinic ink; used for WhatsApp and supportive actions.
- **Outline / Link:** Paper surfaces and semantic border/text tokens for calling, maps, and lower-emphasis navigation.
- **States:** shadcn focus rings, disabled opacity, hover tint, and active translate behavior remain intact.

### Badges

- **Style:** Short metadata labels using celadon, outline, or secondary shadcn variants.
- **State:** Badges communicate category, record status, or proof; they are not used as decorative section kickers.

### Cards / Containers

- **Corner Style:** Shared clinic radius with shadcn card composition.
- **Background:** Paper at rest; dark ink or celadon for intentional section-level records.
- **Border:** shadcn's semantic ring and explicit separators where a structural line is needed.
- **Internal Padding:** shadcn card spacing, tightened only for image-led records.

### Navigation

- **Desktop:** Sticky wordmark, concise anchor nav, direct call action, and booking action.
- **Mobile:** shadcn Sheet with a required title and description, stacked anchor links, and full-width booking/call actions.

### Clinical Record

The signature pattern combines a real image, an uppercase record label, a short caption, and a doctor/location line. It is used for the hero, treatment detail, and education imagery without turning every section into a nested card stack.

### Accordion

Treatment detail uses the shadcn Accordion for consultation-focus items. The first focus opens by default; remaining items stay available without adding a modal or a new route.

## Do's and Don'ts

### Do:

- **Do** use the global semantic tokens for every surface, text role, border, and action.
- **Do** use shadcn primitives before writing new interaction patterns.
- **Do** keep booking, call, and WhatsApp actions explicit and reachable.
- **Do** use the supplied doctor, clinic, and treatment imagery as evidence.
- **Do** preserve visible focus, reduced-motion behavior, and mobile touch targets.

### Don't:

- **Don't** reintroduce repeated eyebrows or generic section kickers above headings.
- **Don't** add raw colors, one-off shadows, or component-local typography values.
- **Don't** turn every section into identical icon-and-copy cards.
- **Don't** fabricate medical outcomes, pricing, testimonials, or clinic claims.
- **Don't** replace shadcn Sheet, Accordion, Card, Badge, Separator, Avatar, or Button primitives with hand-rolled equivalents.

---
name: Shreemay Skin Clinic
description: Doctor-led dermatology with the warmth and polish of a trusted private practice.
colors:
  mineral-white: "oklch(0.982 0.004 337)"
  pure-white: "oklch(1 0 0)"
  aubergine: "oklch(0.27 0.099 343)"
  plum: "oklch(0.34 0.122 343)"
  eucalyptus: "oklch(0.86 0.083 161)"
  mint: "oklch(0.94 0.037 161)"
  coral: "oklch(0.73 0.132 25)"
  footer: "oklch(0.2 0.065 343)"
  whatsapp: "oklch(0.55 0.137 153)"
  whatsapp-hover: "oklch(0.47 0.12 153)"
  border: "oklch(0.86 0.018 342)"
typography:
  display: "Alegreya 600"
  body: "Manrope 400-800"
rounded:
  surface: "0.75rem"
  control: "0.5rem"
  pill: "999px"
---

# Design system

## Direction

The site should feel like a polished private-practice reception: personal, composed, and unmistakably medical. Real photographs carry trust. Aubergine gives the clinic a memorable identity, eucalyptus softens the experience, and coral draws attention to high-intent actions.

The patient journey is simple. Meet the doctor, find the relevant concern, understand what a consultation involves, and choose a booking method.

## Type

Alegreya gives headings a warm, calligraphic quality that relates to the clinic's Gujarati wordmark without copying it. Manrope keeps navigation, medical information, and actions crisp on small screens.

- Display headings use Alegreya at weight 600 with tight but readable spacing.
- Body copy and controls use Manrope.
- Small uppercase notes are limited to section context and categories. They do not appear above every block.
- Body copy stays under 65 characters per line where possible.

## Color roles

- Aubergine anchors the hero, consultation process, reviews, and footer.
- Mineral white and pure white keep long pages clean and readable.
- Eucalyptus and mint support doctor information, secondary actions, and the booking section.
- Coral marks the strongest appointment action and rating details.
- Text never uses low-contrast gray on colored fields. Light text on aubergine uses a white tint.

## Layout

- The homepage hero pairs a direct care promise with a large real portrait of Dr. Hiteshree Shah.
- Treatments are rows, not repeated cards. Each row carries category, title, a short description, and one clear route.
- The doctor section uses one large image and compact credential rows.
- The consultation process is the only numbered sequence.
- Clinic photography uses one wide image and two supporting images.
- Reviews read as quotes separated by rules rather than card tiles.
- Mobile collapses to a single column and keeps booking actions full width.

## Components

- Primary button: plum by default, coral in the hero.
- Secondary button: eucalyptus with dark text.
- Outline button: white or transparent with a visible structural border.
- Cards are reserved for treatment imagery, accordions, and Instagram media where containment is useful.
- The mobile menu uses the shared Base UI Sheet.
- Treatment questions use the shared Base UI Accordion.
- A floating WhatsApp action remains available without covering main content.

## Motion

Motion is restrained. The hero rises into place, images use a clipped reveal, and interactive rows move by a few pixels. Every transition has a reduced-motion fallback. Content remains visible if motion does not run.

## Accessibility

- Maintain WCAG 2.2 AA text contrast.
- Keep visible keyboard focus on every link and control.
- Use 44px touch targets on mobile actions and footer links.
- Do not introduce horizontal scrolling at 320px or wider.
- Keep meaningful alt text on doctor and clinic photographs.
- Do not promise outcomes, prices, or availability.

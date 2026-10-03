---
name: Shreemay Skin Clinic
description: Real clinic evidence, with a home-only deep teal and warm coral direction.
colors:
  white: "#ffffff"
  pine-text: "#173f35"
  pine: "#184738"
  pine-soft: "#365a4d"
  burgundy: "#703343"
  burgundy-hover: "#582737"
  secondary: "#e9f0e7"
  muted: "#f0f4ef"
  muted-text: "#4e6159"
  pale-green: "#dfeadb"
  mint: "#f0f4ed"
  footer: "#12382d"
  border: "#ccd9cf"
  light-text: "#dce8df"
  directory-rule: "#6a8b7e"
  home-deep-teal: "#0f4a4c"
  home-teal-text: "#123b3d"
  home-warm-coral: "#e6a08b"
  home-soft-coral: "#f2ded6"
  home-cream: "#f7f3ee"
  whatsapp: "oklch(0.55 0.137 153)"
  whatsapp-hover: "oklch(0.47 0.12 153)"
typography:
  display:
    fontFamily: "Lato, sans-serif"
    fontSize: "clamp(3rem, 5.38vw, 4.875rem)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Lato, sans-serif"
    fontSize: "clamp(2rem, 3.6vw, 3.4rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Lato, sans-serif"
    fontSize: "clamp(1.35rem, 2vw, 1.75rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Lato, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  welcome-lede:
    fontFamily: "Lato, system-ui, sans-serif"
    fontSize: "28px"
    fontWeight: 400
    lineHeight: 1.42
  navigation:
    fontFamily: "Lato, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 700
rounded:
  square: "0"
  caption: "4px"
  welcome-control: "6px"
  small: "0.5rem"
  medium: "0.625rem"
  surface: "0.75rem"
  pill: "999px"
spacing:
  compact: "0.5rem"
  control-gap: "12px"
  base: "1rem"
  mobile-gutter: "20px"
  panel: "24px"
  group: "32px"
  desktop-gap: "64px"
  desktop-gutter: "72px"
components:
  welcome-book:
    backgroundColor: "{colors.home-deep-teal}"
    textColor: "{colors.white}"
    rounded: "{rounded.welcome-control}"
    padding: "18px 28px"
  welcome-book-hover:
    backgroundColor: "#0a3b3d"
    textColor: "{colors.white}"
  button-primary:
    backgroundColor: "{colors.burgundy}"
    textColor: "{colors.white}"
    rounded: "{rounded.surface}"
  button-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.pine-text}"
    rounded: "{rounded.surface}"
  care-feature:
    backgroundColor: "{colors.mint}"
    textColor: "{colors.pine-text}"
    rounded: "{rounded.surface}"
  care-directory:
    backgroundColor: "{colors.pine}"
    textColor: "{colors.white}"
    rounded: "{rounded.square}"
---

# Design System: Shreemay Skin Clinic

## Overview

**Creative North Star: “Welcome desk”**

The clinic's established identity uses white space, deep pine structure, burgundy appointment controls and real photographs. The homepage now uses the user's requested deep teal and warm coral direction while keeping the same photography, Lato typography, and consultation-first content. Other routes retain their established palette. Medical skin and hair care lead; cosmetic care sits alongside them.

The original logo and photographs establish the clinic's identity. Preserve Dr. Hiteshree Shah's real appearance and credentials. The homepage pairs an introduction with a continuous concern directory; its composition is recorded in `.impeccable/mocks/contract.md`.

Key characteristics:

- Broad white surfaces and rectangular photography.
- Visible doctor evidence and direct contact choices.
- Restrained borders, pale green supporting panels and readable text.

## Colors

Burgundy is the primary action color on existing non-home routes. Pine is their main structural field and heading color; white supplies the dominant page surface. The frontmatter records those values.

Use pale green, secondary and mint on supporting controls or information panels. Muted text remains legible on white. The footer uses its deeper pine with light text. WhatsApp retains its dedicated green and hover state.

**Homepage direction.** The homepage scopes its tokens to deep teal (`#0f4a4c`) and warm coral (`#e6a08b`), with a soft coral surface (`#f2ded6`) and warm cream (`#f7f3ee`). This scoped palette is the approved direction for the homepage; it does not change the established colors on treatment and information routes.

**The source-name rule.** Legacy CSS names such as `--clinic-plum` and `--clinic-coral` continue to map to pine and pale green outside the homepage. Their names do not authorize restoring the previous plum/coral palette. The homepage overrides those tokens locally. Unused chart and sidebar defaults are not brand colors.

## Typography

Lato is loaded through `next/font/google` at weights 400, 700 and 900 with swap display. Use the same family throughout. Some component declarations request intermediate weights; the loaded font weights remain the source for available faces.

The display token describes the desktop welcome headline. General H1 elements use `clamp(3.2rem, 6.8vw, 5.8rem)`; category and treatment heroes have their own established scales. Headings use balanced wrapping except the welcome title. Body paragraphs use generous leading and restrained line lengths, commonly 44–60ch. Existing case-image labels, category-list labels and footer labels may use uppercase; care group headings, credentials and navigation use sentence case. Care titles, doctor captions and treatment headings begin directly with useful content, without redundant section labels or production commentary.

## Layout

The homepage container caps at 1304px with 24px desktop gutters and 16px mobile gutters. Its welcome composition uses two balanced columns, generous space around the copy, and a rounded real doctor photograph with a teal caption. The trust strip follows the hero. Existing non-home routes retain their route-specific layouts.

At 768–1100px, the welcome split and navigation contract. At 767px and below, copy and portrait stack, hero actions become two columns, the category directory uses two columns, and a fixed Call / WhatsApp / Book Now row appears at the bottom of the viewport. The reception conversation stacks on mobile.

The care grid uses four columns, two at 1023px and below, and one at 767px and below. Doctor, process, review, visit and treatment layouts collapse at 1023px. Clinic photographs and footer groups stack at 767px and below. Desktop navigation is replaced by a right-side Sheet through 1100px; the booking control appears from 640px. Header heights are 112px desktop, 92px at intermediate widths and 80px on mobile.

On mobile, treatment hero images remove the desktop minimum height and use `height: clamp(21rem, 75vw, 32rem)` with `object-position: center 28%` and cover cropping. This keeps the image useful without delaying the treatment details.

## Elevation & Depth

The opening composition is flat. Pine fields, white surfaces, rules and captions provide separation. Small shadows support the floating WhatsApp control and care-card hover; they do not turn every section into a floating panel. Exact shadow expressions are in the sidecar.

## Shapes

Keep the welcome portrait, reception image and original logo square-cornered. Welcome actions use the dedicated control radius. Supporting cards use the surface radius; circular arrows and floating contact use the pill radius. Clinic image labels use the caption radius. Preserve this distinction between broad photographs and contained supporting content.

## Components

The welcome booking action uses deep teal with white text and is paired with WhatsApp. Shared buttons retain a 44px minimum height. The welcome action has a separate darker teal hover color.

The concern directory links to `/skin`, `/hair`, the existing combined dermatosurgery and vitiligo category, and `/laser-aesthetics`. Desktop links are separated by vertical rules; mobile uses bottom rules. Keep both keyboard focus and link destinations usable.

Use the existing Base UI Sheet for mobile navigation and Accordion for treatment questions. Focus uses a 3px visible outline with a 4px offset; dark sections use a light contrasting color. The skip link reveals on keyboard focus. Mobile uses the sticky Call / WhatsApp / Book row instead of a floating contact button.

The real doctor image, reception, consultation room, waiting area and original logo are clinic evidence. Welcome derivatives are `/images/doctor-welcome.png` and `/images/reception-welcome.png`; preserve their original source identity and recorded provenance. Keep clinical case captions and outcomes grounded in existing data.

Instagram education uses topic links to the original posts when clinic-owned video is unavailable. Do not substitute fabricated video, unrelated stock imagery or an empty simulated player. Keep original Instagram destinations and the existing video component's behavior for any supplied owned source.

The directions panel uses the original `/images/signage.jpg` photograph, a visible address caption and an external Google Maps link. It has no embedded-map dependency. Its photo is 340px tall on desktop and uses a 1.2 aspect ratio on mobile; the link stays in normal document flow below the caption.

Booking and contact destinations come from `src/data/clinic.js`: Appointy calendar, telephone, WhatsApp, Google Maps and the clinic Instagram profile. Reuse those constants; styling must not change their destinations.

Only the welcome portrait has an entrance reveal: a small clip change over 650ms with `cubic-bezier(.16,1,.3,1)`. The shared MotionReveal wrapper is static. Hover changes remain small. Reduced-motion disables smooth scrolling and reduces animation/transition duration.

## Do's and Don'ts

- Do lead with medical skin and hair care, with cosmetic care alongside.
- Do retain the authentic doctor, original logo and native clinic photography.
- Do keep booking, call, WhatsApp, directions and care links clear and functional.
- Do preserve readable focus, meaningful image alternatives and reduced-motion support.
- Don't restore the superseded Alegreya/Manrope or plum/coral visual world.
- Don't invent medical outcomes, patient claims, prices or availability.
- Don't disguise Instagram topic links as playable video.

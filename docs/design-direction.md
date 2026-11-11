# Immersive portfolio — November 2026

The portfolio presents actual Teenieping product and package work on warm ivory,
rose and burgundy surfaces. Source artwork colors, 3D geometry, original vectors,
prices, project credits and image-generation disclosures are retained.

## Typography and opening

Syne supplies the geometric English display; Bodoni Moda italic supplies its
editorial contrast; Space Grotesk supplies English labels and chapter numbers.
Korean copy uses IBM Plex Sans KR, with Portfolio Serif for editorial subheads.
All fonts are local. The three additional Latin WOFF2 families total about 87 KiB,
and their original OFL licenses are bundled in src/fonts.

The opening places a large English title and concise role description over an
unframed canvas, with the product photograph extending to the top, right and
bottom edges. On narrow screens the photograph leads into a readable text block.
The four lead concept photographs form a tall photographic spread. Tiles use
object-fit: cover with no internal letterboxing. All 24 images remain available
through the expansion control and full-resolution image dialog.

## One gesture, one section

`section-panels.js` defines one shared DOM-ordered registry for the wheel
controller, chapter rail and current-location indicator. There are 17 stops,
including the package chapter opener, commerce, social, posters and the footer.

On desktop (at least 1024×700 with a fine pointer), `section-scroll.js` intercepts
vertical page wheel input. One gesture advances to the immediately adjacent
section in 660ms. A gesture is consumed until wheel events have been idle for
240ms; continuing trackpad inertia cannot advance additional sections, including
a stream that lasts beyond the section animation. Large deltas also move one
section. Ctrl/Meta zoom gestures and predominantly horizontal gestures are kept.
CSS proximity snapping is disabled while this controller owns navigation.

Arrow keys, Page Up/Down, Space and Home/End work from the page background.
Interactive fields, buttons, native details, dialogs, 3D stages and independently
scrollable content keep their own input. Wheel zoom over a package model changes
the model, and wheel scrolling inside a phone scrolls its screen. Explicitly
expanded gallery/PDF/advanced material remains readable: that chapter consumes
its inner document space before a fresh gesture at the edge advances a section.

Anchor jumps use the existing short chapter curtain and the same positioning
controller. Wheel movement uses a direct eased section slide. Current-location
hash updates replace rather than flood history. The root remains scrollable so
native scrollbar, browser history and focus-based navigation stay available.

Reduced motion preserves one-gesture navigation with immediate movement, cancels
an active animation safely, and skips the curtain. Narrow/short/touch layouts use
natural document scrolling and hide the chapter rail. Browser resizing also ends
an active section slide at its destination.

## Screen composition and controls

Desktop sections fill the browser width and use the visible viewport minus the
72px header as their minimum height. Expanded content and text sizing can grow
panels naturally. The badge representatives and catalogue are separate screens.
Package studies alternate image/model emphasis; extra rotation/progress controls
and production notes live in native details. Model stages and phone frames adapt
to viewport height. No rendering geometry or original texture data was changed.

## Verification

Run `npm run build`, then `python scripts/check-section-scroll.py` with Python
Playwright and Chromium installed. Set CHROMIUM_EXECUTABLE_PATH if necessary.
The script serves dist itself and tests real browser wheel and keyboard input:
large delta, long inertia stream, a new gesture after settling, reverse direction,
chapter/footer stops, 3D wheel zoom, phone scrolling, expanded gallery reading,
keyboard navigation and switching motion preferences during an animation.

Additional checks covered seven viewport combinations from 320×667 to
1920×1080, original image dialogs, gallery expansion and commerce options at five
widths. Responsive checks observed no horizontal overflow, browser errors or
failed image/font resources.

## References consulted

- https://webflow.com/blog/web-design-trends-2026 — dynamic type, minimal copy.
- https://www.wix.com/blog/web-design-trends — exaggerated hierarchy, tactile art.
- https://www.awwwards.com/websites/portfolio/ — portfolio reference index.

These informed the visual direction; no third-party template code was copied.

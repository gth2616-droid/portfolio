# Motion & type portfolio — November 2026

The portfolio uses a warm ivory / rose / burgundy palette and an expressive
English/Korean typographic system. Actual product graphics retain their original
colors, proportions and all AI generation disclosures.

## Typography

- Syne: geometric English display, collection names and large statistics.
- Bodoni Moda italic: contrasting editorial English headlines and wordmark.
- Space Grotesk: English captions, labels and chapter numbers.
- IBM Plex Sans KR: readable Korean body copy and interface controls.
- Portfolio Serif (Noto Serif KR subset): Korean editorial subheads.

Three new Latin variable WOFF2 fonts total about 87 KiB, served locally with
font-display: swap. Original OFL licenses are bundled in src/fonts. There are no
third-party font requests when viewing the site.

## Motion

- Staggered, clipped hero title entrances, with the product image entering next.
- One-time scroll entrances for section titles, content and gallery images.
- Distant in-page navigation uses a burgundy chapter curtain (320ms in, 100ms
  hold, 400ms out), then reveals the destination. It uses the same anchors and
  does not intercept ordinary scrolling, modified clicks or the skip link.
- Product switches, badge filters, SNS changes and asset dialogs receive short
  transition animations. Product renderer geometry and controls are unchanged.
- The curtain never captures pointer input or keyboard focus. Reduced motion
  skips animation and follows native anchors. Changing the preference during a
  transition cancels motion and completes the requested navigation.
- Content is visible by default; no reveal CSS leaves unseen sections hidden.

## References

- https://webflow.com/blog/web-design-trends-2026 — dynamic type, minimal copy.
- https://www.wix.com/blog/web-design-trends — exaggerated hierarchy, tactile art.
- https://www.awwwards.com/websites/portfolio/ — portfolio reference index.

These references informed the direction; no third-party template code was copied.

## Validation

Chromium checks cover 320, 375, 390, 768, 1024 and 1440px layouts, image expansion,
gallery controls, mobile navigation, badge filters, preserved content and failed
resource detection. Additional desktop/mobile checks exercise mouse and keyboard
curtain navigation, scroll entrances, distinct font roles, changing reduced-motion
preferences mid-transition, and product viewer interactions. Source aspect ratios
reserve gallery/poster image space before lazy loading to preserve anchor positions.

## Editorial composition update

The opening is now a full-width title followed by an asymmetric two-image spread;
on mobile the primary product image precedes the role description. The decorative
ribbon and arch-shaped image mask have been removed. Representatives form a wide
three-badge collection opener. Package studies alternate a large image/compact
viewer with a larger viewer/compact image; source, variant and model controls remain
inside the same independently addressable package sections.

Concept imagery uses a fixed contact-sheet composition with one lead image,
four small studies and three wider thumbnails. Thumbnails use contain, so original
artwork remains fully visible. All 24 source images remain expandable and openable
at full size. Commerce and Instagram share two aligned desktop columns using CSS
subgrid, and stack on mobile. Posters retain native ratios in an asymmetric spread.
The profile has an introductory row followed by experience/education/tools columns.

Additional validation covers work-first mobile ordering, opposite package spreads,
aligned phone frames, thumbnail expansion and the existing chapter curtain after
layout changes. The same five locally hosted type families and motion preference
handling are retained.

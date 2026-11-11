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
- The typography ribbon moves a small amount with scrolling; no perpetual loop.
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

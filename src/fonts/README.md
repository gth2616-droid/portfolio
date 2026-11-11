# Local web fonts

IBM Plex Sans, IBM Plex Sans KR and IBM Plex Mono come from the Google Fonts `ofl/ibmplexsans`, `ofl/ibmplexsanskr` and `ofl/ibmplexmono` directories. `IBM-Plex-OFL.txt` contains the SIL Open Font License. Their TrueType sources were converted to WOFF2 without changing glyphs.

`PortfolioSerif.woff2` is a weight-500 subset of [Noto Serif KR](https://github.com/google/fonts/tree/main/ofl/notoserifkr), containing characters used by this portfolio's source text. The source was downloaded on 2026-10-26. It was instantiated and subset with fontTools, and encoded as WOFF2. `NotoSerifKR-OFL.txt` contains the license. CSS uses the local alias `Portfolio Serif`; missing characters fall back to IBM Plex Sans KR.

All fonts are served as bundled files. No external font request or font service is required to view the portfolio.

## Motion studio typography (2026-11-11)

Three additional Latin variable families are bundled locally, downloaded from
Google Fonts' official CSS/font endpoints. Their original SIL Open Font Licenses
are included beside each font. Total additional WOFF2 payload is about 87 KiB.

- `Syne.woff2` — Syne, 400–800: geometric English display and large numbers.
- `BodoniModa-Italic.woff2` — Bodoni Moda italic, 400–900: editorial headlines.
- `SpaceGrotesk.woff2` — Space Grotesk, 300–700: English labels and navigation details.

Korean body copy retains IBM Plex Sans KR; Korean editorial headings use the
existing local Portfolio Serif subset. Fonts require no third-party requests at
runtime. New family CSS uses local Studio aliases.

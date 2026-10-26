# Local web fonts

IBM Plex Sans, IBM Plex Sans KR and IBM Plex Mono come from the Google Fonts `ofl/ibmplexsans`, `ofl/ibmplexsanskr` and `ofl/ibmplexmono` directories. `IBM-Plex-OFL.txt` contains the SIL Open Font License. Their TrueType sources were converted to WOFF2 without changing glyphs.

`PortfolioSerif.woff2` is a weight-500 subset of [Noto Serif KR](https://github.com/google/fonts/tree/main/ofl/notoserifkr), containing characters used by this portfolio's source text. The source was downloaded on 2026-10-26. It was instantiated and subset with fontTools, and encoded as WOFF2. `NotoSerifKR-OFL.txt` contains the license. CSS uses the local alias `Portfolio Serif`; missing characters fall back to IBM Plex Sans KR.

All fonts are served as bundled files. No external font request or font service is required to view the portfolio.

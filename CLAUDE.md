# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static portfolio website for pianist Jiyoung Kim. Hosted on GitHub Pages at jiyoungkimpiano.com (custom domain via CNAME). Zero-build architecture — no package manager, no bundler, no framework. All files are served as-is.

## Development

No build step required. To preview locally, serve the directory with any static file server:

```bash
npx serve .
# or
python -m http.server 8000
```

Deployment is automatic — push to `main` and GitHub Pages serves the updated site.

## Architecture

Single-page website with five full-screen sections navigated via custom wheel-scroll handler (not native browser scroll). Sections in order: Main (hero), Biography, Concerts, Videos, Contact, Footer.

### Core Files

- **index.html** — All page content and structure. Concert dates, YouTube video IDs (as `data-video` attributes), and biography text are edited directly here.
- **css/styles.css** — All styling. Responsive breakpoints, animations, layout (Flexbox + Grid).
- **js/scripts.js** — All interactivity. Custom scroll behavior, animations, video slider, EmailJS form handler.

### Key JavaScript Systems (js/scripts.js)

1. **Custom wheel scroll handler** (lines ~288-374) — Overrides default browser scrolling with `preventDefault()`. Implements full-page snap scrolling between sections with 800ms debounce. Special two-step scroll logic for expanded biography (`page2` class).
2. **Biography expand/collapse** (lines ~62-94) — Toggles between summary and full text. Adds `page2` class to body which changes page height calculations for the scroll handler.
3. **Video thumbnail slider** (lines ~125-251) — Drag-to-scroll on desktop (mouse events) and mobile (touch events). Clicking a thumbnail centers it and swaps the main YouTube iframe `src`.
4. **Scroll-triggered animations** — Adds `.show` class to elements when they enter the viewport. CSS handles the actual transitions.
5. **EmailJS contact form** (lines ~253-286) — Uses EmailJS CDN library. Service/template/public key are hardcoded in the script.

### CSS Responsive Breakpoints (css/styles.css)

- `max-width: 430px` — Mobile phones
- `max-width: 767px` — Tablets
- `min-width: 1440px` — Large desktops
- `max-height: 800px and min-width: 900px` — Wide/short viewports

### Animation Pattern

JavaScript adds/removes CSS classes (`.show`, `.hidden`, `.scrolled`, `.page2`). CSS defines the transitions and transforms. This separation keeps animation performance GPU-accelerated.

## External Dependencies (CDN only)

- **Google Fonts** — Crimson Text, Montserrat, Open Sans, Source Serif 4
- **EmailJS v3** — Contact form email delivery (no backend)
- **YouTube embeds** — Video playback and thumbnail CDN (`img.youtube.com`)

## Common Edits

- **Update concert list** — Edit the `.concert-item` elements in index.html
- **Add/remove videos** — Edit `.video-item` elements in index.html; set `data-video` to the YouTube video ID
- **Change biography text** — Edit `.bio-short` and `.bio-full` divs in index.html
- **Update hero image** — Replace img/profile.jpg and adjust clip-path in styles.css if needed

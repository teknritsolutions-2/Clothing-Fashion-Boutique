# SÉRAINE — Usage & Maintenance Guide

## Local Static Hosting
This boutique is built with pure, framework-free static HTML5, CSS3, and modern vanilla JavaScript. No package installation, compilers, or build steps are necessary.

### Previewing Locally
From the project root:

```sh
# Using Python 3 built-in HTTP server
python3 -m http.server 8080
```

Then visit:
- Home Page 1: `http://localhost:8080/pages/index.html`
- Home Page 2: `http://localhost:8080/pages/home-2.html`
- Login: `http://localhost:8080/pages/login.html`
- Create account: `http://localhost:8080/pages/register.html`

## Configuration
Store details, contact metadata, currency, and map endpoints can be adjusted in `assets/js/main.js` under `SERAINE_CONFIG`:

```javascript
const SERAINE_CONFIG = {
  currency: 'USD',
  locale: 'en-US',
  enquiryEmail: 'palermo@seraine.example',
  storePhone: '+39 091 000 0000',
  storeAddress: 'SÉRAINE Palermo\nVia della Libertà\nPalermo, Sicily, Italy',
  openingHours: 'Monday–Saturday, 10:00–19:00. Sunday closed.',
  mapEmbedUrl: 'https://maps.google.com/maps?...',
  mapDirectionsUrl: 'https://www.google.com/maps/search/?api=1&...'
};
```

## Styling Architecture
- `assets/css/style.css`: Core design system, typography tokens, layout grids, components, and responsive media queries.
- `assets/css/dark-mode.css`: Dark palette surface tokens, contrast enhancements, and dialog overrides.
- `assets/css/rtl.css`: Bidirectional layout mirroring, chevron orientation, and logical margin/padding adjustments.

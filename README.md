# SÉRAINE — Clothing & Fashion Boutique

A responsive, contemporary clothing boutique website built with semantic HTML5, modern CSS3, and vanilla JavaScript. SÉRAINE uses an approachable warm-ivory, sage, clay, and charcoal palette, clear Manrope typography, locally stored fashion photography, and a compact folded-fabric brand mark.

## Live Site

https://teknritsolutions-2.github.io/Clothing-Fashion-Boutique/

## Project Overview

SÉRAINE is designed as a practical, welcoming fashion boutique for curated everyday wear. The project provides two distinct homepage experiences alongside catalogue filtering, seasonal lookbooks, an accessible style journal, store information, and customer enquiry tools.

## Major Pages

All website pages reside in the `pages/` directory:

- **`index.html`**: Product-led Home Page 1 featuring seasonal imagery, categories, new arrivals, styling ideas, and shopping calls to action.
- **`home-2.html`**: Wardrobe-discovery Home Page 2 with daily rotation edits and curated garment spotlights.
- **`about.html`**: Atelier heritage, design philosophy, and craftsmanship standards.
- **`shop.html`**: Full boutique catalogue featuring instant client-side multi-facet filtering and sorting.
- **`product-details.html`**: In-depth piece showcase with dedicated typography and quick view modal dialogs.
- **`new-arrivals.html`**: Latest runway and seasonal releases with instant modal quick views.
- **`sale.html`**: Curated archive pieces displaying original and promotional prices.
- **`lookbook.html`**: Image-led seasonal styling story emphasizing silhouette, movement, and texture.
- **`style-guide.html`**: Curated journal index covering tailoring, fabric care, proportions, and layering.
- **`article-details.html`**: Dynamic editorial reader displaying selected articles with pull quotes.
- **`contact.html`**: Palermo boutique location, embedded interactive map, visiting hours, and client enquiry form.
- **`faq.html`**: Accordion disclosures addressing sizing, care, ordering, and appointments.
- **`privacy.html`**: Clear privacy policy detailing local preference storage and enquiry handling.
- **`terms.html`**: Boutique terms of service, intellectual property, and sales conditions.
- **`404.html`**: Bespoke error recovery page with direct navigation back to current collections.

## Key Features

- **Light & Dark Themes**: Purpose-designed light and dark palettes with instant toggle and `localStorage` persistence.
- **Bidirectional Support (LTR / RTL)**: Native right-to-left language support with mirrored navigation, transformed controls, and preserved photograph orientation.
- **Responsive Layout**: Fluid adaptability across mobile (360px–430px), tablet (640px–1024px), and wide desktop (1024px–1440px+) viewports.
- **Interactive Shop Filtering**: Filter by gender (Women, Men, Unisex), occasion (Evening, Work, Weekend, Seasonal), and clothing type with real-time inventory counts and price sorting.
- **Product Quick View**: Native `<dialog>` modal showing material composition, care instructions, size selection (`XS`–`XL`), and enquiry generation.
- **Editorial Filmstrips & Sliders**: Smooth scroll-snap carousels with keyboard navigation, touch swipe support, and pause-on-interaction controls.
- **Scroll Reveal Animations**: Subtle transform-based entrance animations driven by one `IntersectionObserver`, with full-opacity text and reduced-motion support.
- **Client Enquiry System**: Validates requests in-browser, prepares downloadable text summaries, and drafts email client messages without requiring external servers.

## Local Static Usage

No build tools, compilation, or package manager installations are required. Serve the project root using any local static file server:

```sh
# Using Python 3
python3 -m http.server 8080
```

Then open `http://localhost:8080/` in any modern web browser.

## File Structure

```
Clothing & Fashion Boutique/
│
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   ├── dark-mode.css
│   │   └── rtl.css
│   │
│   ├── js/
│   │   ├── main.js
│   │   └── plugins/
│   │
│   ├── images/
│   └── fonts/
│
├── pages/
│   ├── index.html
│   ├── home-2.html
│   ├── about.html
│   ├── shop.html
│   ├── product-details.html
│   ├── new-arrivals.html
│   ├── sale.html
│   ├── lookbook.html
│   ├── style-guide.html
│   ├── article-details.html
│   ├── contact.html
│   ├── faq.html
│   ├── privacy.html
│   ├── terms.html
│   └── 404.html
│
├── documentation/
│   ├── project-overview.md
│   ├── components.md
│   ├── usage-guide.md
│   ├── configuration.md
│   ├── image-inventory.csv
│   ├── cormorant-garamond-license.txt
│   └── manrope-license.txt
│
└── README.md
```

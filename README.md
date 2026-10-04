# SÉRAINE — Clothing & Fashion Boutique

A responsive, contemporary clothing boutique website built with semantic HTML5, modern CSS3, and vanilla JavaScript. SÉRAINE uses its original plum, mauve and warm-ivory palette, clear Manrope typography, locally stored stock photography, and a compact folded-fabric brand mark.

## Live Site

https://teknritsolutions-2.github.io/Clothing-Fashion-Boutique/

## Project Overview

SÉRAINE is designed as a practical, welcoming fashion boutique for curated everyday wear. The project provides two distinct homepage experiences alongside catalogue filtering, a sample Custom Fits request builder, seasonal lookbooks, an accessible style journal, store information, and customer enquiry tools.

## Major Pages

All website pages reside in the `pages/` directory:

- **`index.html`**: Eight-section Home Page 1 with occasion, clothing-type, arrival, climate, personal-fit and lookbook routes.
- **`home-2.html`**: Distinct outfit-planning Home Page 2 organized around climate, the week ahead and personal fit support.
- **`about.html`**: Everyday clothing philosophy, sensible fabrics and personal fit.
- **`shop.html`**: Full 24-piece catalogue with simultaneous filtering and sorting.
- **`custom-fits.html`**: Ten configurable sample garments with gender and garment filters, variant-level availability, a review-before-confirmation request builder and store-visit handoff.
- **`product-details.html`**: Dynamic four-image garment gallery with climate, fabric and custom-fit enquiry.
- **`new-arrivals.html`**: Exactly 12 new styles generated from the canonical catalogue.
- **`sale.html`**: Exactly nine reduced styles with original and sale prices.
- **`lookbook.html`**: Practical Workday, Weekend & Travel, and Occasion outfit stories.
- **`style-guide.html`**: Practical guides covering fit, weather, colour and outfit building.
- **`article-details.html`**: Long-form practical wardrobe guidance.
- **`contact.html`**: Palermo boutique location, embedded interactive map, visiting hours, and client enquiry form.
- **`faq.html`**: Accordion disclosures addressing sizing, care, ordering, and appointments.
- **`privacy.html`**: Clear privacy policy detailing local preference storage and enquiry handling.
- **`terms.html`**: Boutique terms of service, intellectual property, and sales conditions.
- **`404.html`**: Bespoke error recovery page with direct navigation back to current collections.
- **`login.html`**: Focused standalone account screen with browser validation, password visibility control and an honest pending-integration state.
- **`register.html`**: Matching account-creation screen with confirmation validation, password visibility controls and accurate no-backend messaging.

## Key Features

- **Light & Dark Themes**: Purpose-designed light and dark palettes with instant toggle and `localStorage` persistence.
- **Bidirectional Support (LTR / RTL)**: Native right-to-left language support with mirrored navigation, transformed controls, and preserved photograph orientation.
- **Responsive Layout**: Fluid adaptability across mobile (360px–430px), tablet (640px–1024px), and wide desktop (1024px–1440px+) viewports.
- **Canonical Catalogue**: One JavaScript dataset contains exactly 24 unique garments: 12 women, 10 men and two unisex.
- **Interactive Shop Filtering**: Combine All Styles, New Arrivals or On Sale merchandising edits with gender, occasion, clothing type and climate filters, URL preselection, active chips, real-time counts and price sorting.
- **Custom Fits Sample Workflow**: Compare ten configurable garment options and their variant availability, prepare a reviewable request, or carry the selected garment context into a store enquiry. The UI clearly states that sample inventory needs final confirmation and that no order or payment is submitted.
- **Clothing-Type Routes**: Home Page 1 links into grouped shirt/top, trouser/set, dress/set and jacket/knitwear catalogue views.
- **Product Galleries**: Every catalogue item has four coherent garment views, selectable thumbnails, swipe controls, and a keyboard-accessible lightbox.
- **Product Quick View**: Native `<dialog>` modal showing key garment information and the full detail route.
- **Responsive Product Sliders**: Four-column desktop rows become touch-friendly sliders on tablet and mobile.
- **Scroll Reveal Animations**: Subtle transform-based entrance animations driven by one `IntersectionObserver`, with full-opacity text and reduced-motion support.
- **Client Enquiry System**: Validates product, sizing, custom-fit and store-visit requests, preserves product context, and clearly identifies its non-sending demonstration state.

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
│   │   ├── custom-fits.js
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
│   ├── custom-fits.html
│   ├── product-details.html
│   ├── new-arrivals.html
│   ├── sale.html
│   ├── lookbook.html
│   ├── style-guide.html
│   ├── article-details.html
│   ├── contact.html
│   ├── login.html
│   ├── register.html
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

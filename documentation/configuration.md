# Boutique configuration

## Business details

At the top of `assets/js/main.js`, edit `SERAINE_CONFIG`:

| Setting | Purpose |
| --- | --- |
| `currency` | An ISO 4217 code used to format every displayed price. Default: `USD`. |
| `locale` | Number-formatting locale. Default: `en-US`. |
| `enquiryEmail` | Reserved demonstration contact address: `palermo@seraine.example`. |
| `storePhone` | Shared demo phone: `+39 091 000 0000`. |
| `storeAddress` | The shared Palermo demo address shown on Contact and every footer. |
| `openingHours` | Demo: Monday–Saturday, 10:00–19:00. Sunday closed. |
| `mapEmbedUrl` | Google Maps embed targeting Via della Libertà, Palermo, Sicily, Italy. |
| `mapDirectionsUrl` | Google Maps street search linked below the map. |

When changing currency, also update the numerical product prices to the intended prices in that currency; the setting formats amounts and does not convert them.

Add the business contact identity to the privacy and terms pages, and confirm policies, garment compositions, prices, and available services before accepting purchases. This project uses the requested fictional Palermo boutique identity. The phone (`+39 091 000 0000`) and email (`palermo@seraine.example`) are demonstration details. Replace them before accepting live enquiries.

## Enquiries

The demonstration form runs entirely in the visitor’s browser. It validates the required fields, preserves product and size context from detail pages, clearly states that no data was transmitted, and offers a copyable enquiry summary. If `enquiryEmail` is replaced with a real address, submission opens a prefilled email draft for the visitor to review and send.

For direct submission in future, connect a chosen form service and change the success message only after its API confirms receipt. Document that service’s data handling in the privacy policy.

## Catalogue

The `PIECES` array in `assets/js/main.js` is the canonical product source. It contains exactly 24 records and drives every product grid, quick view and product detail. HTML grids use a `data-catalog` key instead of duplicating product data.

The Shop page filters all 24 pieces by gender, occasion, clothing type, climate and the grouped clothing-type routes used by Home Page 1. The All Styles, New Arrivals and On Sale controls combine with these filters. The `COLLECTIONS` object defines the exact Home 1, Home 1 Sale preview, Home 2, New Arrivals and Sale selections. Keep the full catalogue, New Arrivals and Sale totals at 24, 12 and 9.

Product quick views and details use the same catalogue record. Every record contains four coherent garment photographs; detail pages provide thumbnails, swipe navigation and an accessible lightbox, then carry the product name and selected size into the Contact page custom-fit enquiry.

## Custom Fits sample inventory

`assets/js/custom-fits.js` contains `CUSTOM_FIT_OPTIONS`, a separate sample dataset for ten configurable garments. Each option has one or more material and colour variants with one of four statuses: `available`, `limited`, `unavailable` or `enquire`. Only available and limited variants can open the order-request builder. Unavailable and enquiry-only variants carry their full context to the Contact page.

The request builder validates fields locally, displays a full review, and prepares a copyable summary. It has no commerce backend, payment service, inventory reservation or form endpoint. Keep the sample-data and final-confirmation notices until real inventory and order services are connected and verified.

## Style guide

Style Guide cards link to the practical wardrobe article and its anchored fit, layering and colour sections.

## Layout and accessibility

- Desktop: above 1024 CSS pixels.
- Tablet: 640–1024 CSS pixels.
- Mobile: below 640 CSS pixels.
- Preference storage keys: `seraine-theme` and `seraine-dir`.
- The navigation drawer and product quick views use native dialogs for focus management and Escape support.
- Photographs remain natural in dark mode and are never mirrored for RTL.
- Motion respects `prefers-reduced-motion`; responsive product sliders have visible previous/next controls.

Use the image inventory when replacing photography. It records every current asset’s source, dimensions, rendered ratio, focal treatment, suitability and crop risk. Keep descriptive alternative text and intentional placement. Standard product cards use a consistent portrait frame with top-aware `object-fit: cover`; product detail stages use `contain`, while journal cards use wider top-aligned frames. Preserve faces and complete garments using the source composition and focal point.

## Shared supporting typography

Body copy uses a comfortable 1.65 line-height. Navigation and the LTR/RTL control share the same visual size, while compact product and utility labels use stronger tracking. Responsive display headings use `clamp()`; Cormorant is reserved for display headings and short accents.

## Section spacing and motion

The shared `--section` token is 72px on desktop, 52px on tablet and 36px on mobile. Tinted sections provide grouping without stacked padding. One shared IntersectionObserver adds a 1.35-second one-time entrance motion to editorial and information blocks. Catalogue grids, slider tracks, navigation and product galleries are excluded. Content remains visible without JavaScript and when reduced motion is requested.

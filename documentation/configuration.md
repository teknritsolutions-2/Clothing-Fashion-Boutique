# Boutique configuration

## Business details

At the top of `assets/js/main.js`, edit `SERAINE_CONFIG`:

| Setting | Purpose |
| --- | --- |
| `currency` | An ISO 4217 code used to format every displayed price. Default: `USD`. |
| `locale` | Number-formatting locale. Default: `en`. |
| `enquiryEmail` | Destination for a visitor-reviewed email draft. Demo: `palermo@seraine.example`. |
| `storePhone` | Shared demo phone: `+39 091 000 0000`. |
| `storeAddress` | The shared Palermo demo address shown on Contact and every footer. |
| `openingHours` | Demo: Monday–Saturday, 10:00–19:00. Sunday closed. |
| `mapEmbedUrl` | Google Maps embed targeting Via della Libertà, Palermo, Sicily, Italy. |
| `mapDirectionsUrl` | Google Maps street search linked below the map. |

When changing currency, also update the numerical product prices to the intended prices in that currency; the setting formats amounts and does not convert them.

Add the business contact identity to the privacy and terms pages, and confirm policies, garment compositions, prices, and available services before accepting purchases. This project uses the requested fictional Palermo boutique identity. The phone (`+39 091 000 0000`) and email (`palermo@seraine.example`) are demonstration details. Replace them before accepting live enquiries.

## Enquiries

The form runs entirely in the visitor’s browser. It validates required fields and explicit privacy consent, prepares the enquiry, and provides a text download. If `enquiryEmail` is set, an additional link opens the user’s email client. Delivery happens only when the visitor sends that email. This is suitable for a static enquiry catalogue.

For direct submission in future, connect a chosen form service and change the success message only after its API confirms receipt. Document that service’s data handling in the privacy policy.

## Catalogue

Product cards are authored in the appropriate HTML page, with `data-gender`, `data-occasion`, `data-type`, `data-price`, `data-arrival`, and `data-sale` attributes. Keep these values aligned with the `PIECES` dataset in `main.js`. Card links use a stable `data-open-piece` identifier.

The Shop page filters the pieces displayed there. New Arrivals and Sale have individually curated selections, each with unique photography. Supported shop filters are based on its actual inventory; update select options when adding new clothing types.

Product quick views show material, care, colour, price, fit guidance, size selection, and enquiry links. The dedicated Solenne Gown page presents alternate photographs from the same editorial shoot. Other direct product URLs use individual typographic collection notes to preserve unique image placement.

## Journal

Six article variants are selected using the `story` query parameter: `tailoring`, `fabrics`, `evening`, `proportions`, `monochrome`, and `layering`. Edit the corresponding `articles` entry in `main.js`. The lead and supporting images belong to the shared Article Details page.

## Layout and accessibility

- Desktop: above 1024 CSS pixels.
- Tablet: 640–1024 CSS pixels.
- Mobile: below 640 CSS pixels.
- Preference storage keys: `seraine-theme` and `seraine-dir`.
- The navigation drawer and product quick views use native dialogs for focus management and Escape support.
- Photographs remain natural in dark mode and are never mirrored for RTL.
- Motion respects `prefers-reduced-motion`; peer sliders have visible play/pause controls.

Use the image inventory when replacing photography. Keep descriptive alternative text, intrinsic image dimensions, and one intentional photo placement per asset. Standard product and journal card photographs fill a consistent 3:4 frame with `object-fit: cover`. Preserve the subject using the source’s composition and focal point; do not introduce letterboxing. Editorial mattes remain only in deliberately framed standalone compositions.

## Shared supporting typography

Use the `--type-*` tokens in `style.css`: body 17px on desktop / 16px on compact layouts; small body 16px; navigation 16px; product metadata 15px; article metadata and eyebrows 14px / 13px on mobile; utility text 13px; controls 15px / 14px on mobile. Display headings keep their established sizes.

## Section spacing and motion

`space-join-light` and `space-join-dark` identify specific adjacent sections that share their rendered background in that theme. The first section loses its bottom padding; the next retains its top padding. `space-after-section` removes an additional section margin when its predecessor already provides the separation. Gradient, image, and mist surface transitions retain their breathing room. There is no blanket section padding reset.

The original single IntersectionObserver handles new content groups and article sections. Peer tracks remain outside reveal transforms. The collection filmstrip uses the existing slider controls, native scroll-snap, six-second timer, and reduced-motion rules.

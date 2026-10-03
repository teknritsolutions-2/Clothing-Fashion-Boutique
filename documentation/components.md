# SÉRAINE — Components Guide

## Core UI Components

### 1. Navigation & Header
- **Desktop Navbar**: Sticky one-line header with the shared folded-fabric logo, grouped Home and Discover menus, primary shopping routes, theme and direction controls, and a filled **Shop Collection** CTA.
- **Mobile Drawer**: Scroll-safe native `<dialog>` navigation with full page routing, theme and direction controls, CTA, focus trapping, and Escape dismissal. It enters from the left in LTR and right in RTL.
- **Dropdowns**: Accessible native disclosure menus for the two home variants and supporting Discover routes.

### 2. Product Presentation
- **Product Card**: Consistent 3:4 aspect ratio cards with `object-fit: cover` photography, product title, category, price, and quick view trigger.
- **Quick View Dialog**: Native `<dialog>` modal displaying material composition, care notes, colourway, interactive size selector (`XS` to `XL`), and pre-filled enquiry link.
- **Dedicated Gallery**: Swipeable and navigable image track with thumbnail selectors and RTL-aware scroll coordinates.

### 3. Filters & Sorting
- **Filter Controls**: Dynamic filtering by Gender (`Women`, `Men`, `Unisex`), Occasion (`Evening`, `Work`, `Weekend`, `Seasonal`), and Type (`Outerwear`, `Tailoring`, `Dresses`, `Knitwear`, `Tops`).
- **Live Inventory Counter**: Real-time counter reporting the number of matching pieces.
- **Price Sorting**: Ascending (`Low to High`) and Descending (`High to Low`) client-side sorting.
- **Compact Filters**: Collapsible mobile filter panel with Apply and Clear actions plus visible active-filter chips.

### 4. Sliders & Carousels
- **Editorial Filmstrip**: Smooth scroll-snap carousels with prev/next controls, touch swipe support, autoplay timer, and pause-on-interaction or reduced motion.
- **Single Observer**: Unified IntersectionObserver triggering subtle transform reveals without reducing text contrast or disrupting carousel tracks.

### 5. Client Enquiry Form
- **Browser-Side Validation**: Required fields verification, size and piece context preservation, and explicit consent check.
- **Draft Generation**: Creates downloadable enquiry summaries and pre-populated email client links.

### 6. Shared Footer & Help
- **Compact Footer**: Reuses the exact header brand mark and wordmark, keeps every route discoverable, and includes a working Back-to-top button.
- **Contact FAQ**: Six keyboard-operable native disclosure panels covering fit, availability, enquiries, exchanges, store visits, and response handling.

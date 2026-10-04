# SÉRAINE — Components Guide

## Core UI Components

### 1. Navigation & Header
- **Desktop Navbar**: Sticky one-line header with the shared folded-fabric logo, grouped Home and Discover menus, primary shopping routes, theme and direction controls, and a filled **Login** CTA.
- **Mobile Drawer**: Scroll-safe native `<dialog>` navigation with full page routing, theme and direction controls, CTA, focus trapping, and Escape dismissal. It enters from the left in LTR and right in RTL.
- **Dropdowns**: Accessible native disclosure menus for the two home variants and supporting Discover routes.

### 2. Product Presentation
- **Product Card**: Consistent 4:5 cards with `object-fit: cover` photography, product title, category, price, sale state, and quick-view trigger.
- **Quick View Dialog**: Native `<dialog>` modal displaying fabric, climate, colour and the full product-detail route.
- **Product Detail**: Four coherent garment views from the canonical catalogue, selectable thumbnails, swipe support, keyboard lightbox controls, size selection and a custom-fit enquiry link.

### 3. Filters & Sorting
- **Filter Controls**: Simultaneous filtering by Gender, Occasion, Clothing Type, and Climate, including query-string preselection.
- **Grouped Type Links**: Homepage directory routes map related catalogue types into clear Shirts & Tops, Trousers, Dresses & Sets, and Jackets & Knitwear result groups.
- **Live Inventory Counter**: Real-time counter reporting the number of matching pieces.
- **Price Sorting**: Ascending (`Low to High`) and Descending (`High to Low`) client-side sorting.
- **Compact Filters**: Collapsible mobile filter panel with Apply and Clear actions plus visible active-filter chips.

### 4. Sliders & Carousels
- **Responsive Product Slider**: Four-column desktop selections become horizontal scroll-snap rows with prev/next controls on tablet and mobile.
- **Single Observer**: Unified IntersectionObserver triggering subtle transform reveals without reducing text contrast or disrupting carousel tracks.

### 5. Client Enquiry Form
- **Browser-Side Validation**: Required-field verification with enquiry type, size and product context preservation.
- **Non-sending State**: Clearly states that no enquiry was transmitted while the demonstration address is configured, then offers a copyable enquiry summary. A real configured address opens a prefilled email draft.

### 6. Shared Footer & Help
- **Compact Footer**: Reuses the exact header brand mark and wordmark, keeps every route discoverable, and includes a working Back-to-top button.
- **Contact FAQ**: Keyboard-operable native disclosure panels covering appointments, fit adjustments and product questions.

### 7. Standalone Account Screen
- **Focused Login**: A self-contained account layout removes public navigation and footer distractions while retaining the SÉRAINE brand and theme control.
- **Honest Interaction State**: Native email/password validation and a show-password control work locally; submission clearly states that authentication has not been connected and no details were sent.

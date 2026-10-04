# SÉRAINE — Components Guide

## Core UI Components

### 1. Navigation & Header
- **Desktop Navbar**: Sticky one-line header with Home, Shop, Custom Fits, a grouped Discover menu and Contact, followed by theme, direction and **Login** controls.
- **Mobile Drawer**: Scroll-safe native `<dialog>` navigation with full page routing, theme and direction controls, CTA, focus trapping, and Escape dismissal. It enters from the left in LTR and right in RTL.
- **Dropdowns**: An accessible native disclosure menu groups Lookbook, Style Guide and Our Story under Discover. Both home variants remain linked from the footer.

### 2. Product Presentation
- **Product Card**: Consistent 4:5 cards with `object-fit: cover` photography, product title, category, price, sale state, and quick-view trigger.
- **Merchandising Badges**: Readable New and Sale pills render independently, so a piece may show both states.
- **Quick View Dialog**: Native `<dialog>` modal displaying fabric, climate, colour and the full product-detail route.
- **Product Detail**: Four coherent garment views from the canonical catalogue, selectable thumbnails, swipe support, keyboard lightbox controls, size selection and a custom-fit enquiry link.

### 3. Filters & Sorting
- **Filter Controls**: Simultaneous filtering by Gender, Occasion, Clothing Type, and Climate, including query-string preselection.
- **Merchandising Edits**: All Styles, New Arrivals and On Sale controls combine with every catalogue filter and persist in the URL.
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

### 7. Standalone Account Screens
- **Focused Login and Registration**: Centered account cards remove public navigation, theme controls, dividers and footer distractions while retaining the SÉRAINE brand.
- **Honest Interaction State**: Native email/password validation, password confirmation and visibility controls work locally; submission clearly states that authentication has not been connected and no details were sent or stored.

### 8. Custom Fits
- **Sample Inventory**: Ten practical women’s and men’s options support clothing type, material, occasion and climate filters. Each material and colour variant has an `available`, `limited`, `unavailable` or `enquire` status.
- **Request Review**: Requestable variants open a form for size, fit notes, contact details and an optional visit preference, then show a complete review before confirmation.
- **Honest Handoff**: Confirmation prepares a copyable summary and never claims to place an order, reserve inventory, take payment or create an appointment. Unavailable variants replace the order action with an availability enquiry.

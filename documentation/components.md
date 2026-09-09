# SÉRAINE — Components Guide

## Core UI Components

### 1. Navigation & Header
- **Desktop Navbar**: Sticky header with logo, primary routes, Home variant dropdown (`Home Page 1` / `Home Page 2`), theme toggle (light/dark), and reading direction toggle (LTR/RTL).
- **Mobile Drawer**: Accessible `<dialog>` navigation menu with focus trapping, keyboard Escape dismissal, and full page navigation.
- **Home Dropdown**: Accessible interactive dropdown menu allowing rapid switching between Home Page 1 and Home Page 2.

### 2. Product Presentation
- **Product Card**: Consistent 3:4 aspect ratio cards with `object-fit: cover` photography, product title, category, price, and quick view trigger.
- **Quick View Dialog**: Native `<dialog>` modal displaying material composition, care notes, colourway, interactive size selector (`XS` to `XL`), and pre-filled enquiry link.
- **Dedicated Gallery**: Swipeable and navigable image track with thumbnail selectors and RTL-aware scroll coordinates.

### 3. Filters & Sorting
- **Filter Controls**: Dynamic filtering by Gender (`Women`, `Men`, `Unisex`), Occasion (`Evening`, `Work`, `Weekend`, `Seasonal`), and Type (`Outerwear`, `Tailoring`, `Dresses`, `Knitwear`, `Tops`).
- **Live Inventory Counter**: Real-time counter reporting the number of matching pieces.
- **Price Sorting**: Ascending (`Low to High`) and Descending (`High to Low`) client-side sorting.
- **Mobile Filter Drawer**: Compact filter overlay with Apply and Clear actions.

### 4. Sliders & Carousels
- **Editorial Filmstrip**: Smooth scroll-snap carousels with prev/next controls, touch swipe support, autoplay timer, and pause-on-interaction or reduced motion.
- **Single Observer**: Unified IntersectionObserver triggering site-wide scroll reveal animations without disrupting carousel tracks.

### 5. Client Enquiry Form
- **Browser-Side Validation**: Required fields verification, size and piece context preservation, and explicit consent check.
- **Draft Generation**: Creates downloadable enquiry summaries and pre-populated email client links.

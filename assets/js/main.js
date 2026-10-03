/* SÉRAINE — shared behaviour for the static boutique. */
'use strict';
const SERAINE_CONFIG = {
  currency: 'USD', // Change the ISO 4217 code to the boutique's trading currency.
  locale: 'en',
  enquiryEmail: 'palermo@seraine.example',
  storeAddress: 'SÉRAINE Palermo\nVia della Libertà\nPalermo, Sicily, Italy',
  openingHours: 'Monday–Saturday, 10:00–19:00. Sunday closed.',
  mapEmbedUrl: 'https://maps.google.com/maps?q=Via%20della%20Libert%C3%A0%2C%20Palermo%2C%20Sicily%2C%20Italy&z=15&output=embed',
  mapDirectionsUrl: 'https://www.google.com/maps/search/?api=1&query=Via+della+Libert%C3%A0,+Palermo,+Sicily,+Italy',
  storePhone: '+39 091 000 0000'
};

const PIECES = [
  {
    "id": "elise",
    "name": "The Élise Dress",
    "gender": "Women",
    "occasion": "Everyday",
    "type": "Dresses",
    "price": 168,
    "original": null,
    "color": "Pearl",
    "material": "Cotton blend",
    "arrival": 1,
    "sale": false,
    "image": "arrival-elise-dress.webp"
  },
  {
    "id": "lise",
    "name": "The Lise Knit",
    "gender": "Women",
    "occasion": "Weekend",
    "type": "Knitwear",
    "price": 128,
    "original": null,
    "color": "Oat",
    "material": "Cotton knit",
    "arrival": 2,
    "sale": false,
    "image": "arrival-lise-knit.webp"
  },
  {
    "id": "noir",
    "name": "The Nocturne Jacket",
    "gender": "Women",
    "occasion": "Work",
    "type": "Outerwear",
    "price": 225,
    "original": null,
    "color": "Ink",
    "material": "Wool blend",
    "arrival": 3,
    "sale": false,
    "image": "arrival-nocturne-jacket.webp"
  },
  {
    "id": "flore",
    "name": "The Flore Dress",
    "gender": "Women",
    "occasion": "Occasion",
    "type": "Dresses",
    "price": 195,
    "original": null,
    "color": "Ivory",
    "material": "Textured cotton",
    "arrival": 4,
    "sale": false,
    "image": "arrival-flore-dress.webp"
  },
  {
    "id": "rowan",
    "name": "The Rowan Knit",
    "gender": "Unisex",
    "occasion": "Everyday",
    "type": "Knitwear",
    "price": 165,
    "original": null,
    "color": "Natural",
    "material": "Textured cotton knit",
    "arrival": 5,
    "sale": false,
    "image": "wardrobe-rowan-knit.webp"
  },
  {
    "id": "ambre",
    "name": "The Ambre Coat",
    "gender": "Women",
    "occasion": "Seasonal",
    "type": "Outerwear",
    "price": 265,
    "original": null,
    "color": "Sand",
    "material": "Wool blend",
    "arrival": 6,
    "sale": false,
    "image": "wardrobe-ambre-coat.webp"
  },
  {
    "id": "ellis",
    "name": "The Ellis Suit",
    "gender": "Men",
    "occasion": "Occasion",
    "type": "Sets",
    "price": 340,
    "original": null,
    "color": "Stone",
    "material": "Linen blend",
    "arrival": 7,
    "sale": false,
    "image": "wardrobe-ellis-suit.webp"
  },
  {
    "id": "celine",
    "name": "The Céline Coat",
    "gender": "Women",
    "occasion": "Seasonal",
    "type": "Outerwear",
    "price": 285,
    "original": null,
    "color": "Ecru",
    "material": "Wool blend",
    "arrival": 8,
    "sale": false,
    "image": "shop-celine-coat.webp"
  },
  {
    "id": "lyra",
    "name": "The Lyra Blazer",
    "gender": "Women",
    "occasion": "Work",
    "type": "Outerwear",
    "price": 210,
    "original": null,
    "color": "Caramel",
    "material": "Cotton blend",
    "arrival": 9,
    "sale": false,
    "image": "shop-lyra-blazer.webp"
  },
  {
    "id": "arden",
    "name": "The Arden Coat",
    "gender": "Unisex",
    "occasion": "Seasonal",
    "type": "Outerwear",
    "price": 295,
    "original": null,
    "color": "Camel",
    "material": "Wool blend",
    "arrival": 10,
    "sale": false,
    "image": "shop-arden-coat.webp"
  },
  {
    "id": "milo",
    "name": "The Milo Polo",
    "gender": "Men",
    "occasion": "Everyday",
    "type": "Tops",
    "price": 95,
    "original": null,
    "color": "Midnight",
    "material": "Cotton piqué",
    "arrival": 11,
    "sale": false,
    "image": "shop-milo-polo.webp"
  },
  {
    "id": "aure",
    "name": "The Auré Knit Dress",
    "gender": "Women",
    "occasion": "Everyday",
    "type": "Dresses",
    "price": 175,
    "original": null,
    "color": "Warm sand",
    "material": "Cotton crochet knit",
    "arrival": 12,
    "sale": false,
    "image": "shop-aure-knit-dress.webp"
  },
  {
    "id": "soren",
    "name": "The Soren Suit",
    "gender": "Men",
    "occasion": "Occasion",
    "type": "Sets",
    "price": 320,
    "original": null,
    "color": "Limestone",
    "material": "Linen blend",
    "arrival": 13,
    "sale": false,
    "image": "shop-soren-suit.webp"
  },
  {
    "id": "rue",
    "name": "The Rue Blazer",
    "gender": "Women",
    "occasion": "Evening",
    "type": "Outerwear",
    "price": 230,
    "original": null,
    "color": "Noir",
    "material": "Viscose blend",
    "arrival": 14,
    "sale": false,
    "image": "shop-rue-blazer.webp"
  },
  {
    "id": "dune",
    "name": "The Dune Coat",
    "gender": "Women",
    "occasion": "Weekend",
    "type": "Outerwear",
    "price": 248,
    "original": null,
    "color": "Sand",
    "material": "Wool blend",
    "arrival": 15,
    "sale": false,
    "image": "shop-dune-coat.webp"
  },
  {
    "id": "marin",
    "name": "The Marin Coat",
    "gender": "Women",
    "occasion": "Seasonal",
    "type": "Outerwear",
    "price": 255,
    "original": null,
    "color": "Taupe",
    "material": "Wool blend",
    "arrival": 16,
    "sale": false,
    "image": "new-marin-coat.webp"
  },
  {
    "id": "nuit",
    "name": "The Nuit Blazer",
    "gender": "Women",
    "occasion": "Evening",
    "type": "Outerwear",
    "price": 220,
    "original": null,
    "color": "Pearl",
    "material": "Viscose blend",
    "arrival": 17,
    "sale": false,
    "image": "new-nuit-blazer.webp"
  },
  {
    "id": "eline",
    "name": "The Eline Dress",
    "gender": "Women",
    "occasion": "Occasion",
    "type": "Dresses",
    "price": 280,
    "original": null,
    "color": "Champagne",
    "material": "Lightweight chiffon",
    "arrival": 18,
    "sale": false,
    "image": "new-eline-dress.webp"
  },
  {
    "id": "ivie",
    "name": "The Ivie Jacket",
    "gender": "Women",
    "occasion": "Evening",
    "type": "Outerwear",
    "price": 165,
    "original": 220,
    "color": "Pearl",
    "material": "Cotton blend",
    "arrival": 19,
    "sale": true,
    "image": "sale-ivie-jacket.webp"
  },
  {
    "id": "pierre",
    "name": "The Pierre Suit",
    "gender": "Men",
    "occasion": "Occasion",
    "type": "Sets",
    "price": 240,
    "original": 320,
    "color": "Cream",
    "material": "Wool blend",
    "arrival": 20,
    "sale": true,
    "image": "sale-pierre-suit.webp"
  },
  {
    "id": "muse",
    "name": "The Muse Knit",
    "gender": "Women",
    "occasion": "Weekend",
    "type": "Knitwear",
    "price": 98,
    "original": 140,
    "color": "Pastel",
    "material": "Cotton knit",
    "arrival": 21,
    "sale": true,
    "image": "sale-muse-knit.webp"
  },
  {
    "id": "celeste",
    "name": "The Céleste Dress",
    "gender": "Women",
    "occasion": "Occasion",
    "type": "Dresses",
    "color": "Aquamarine",
    "material": "Fluid satin",
    "price": 295,
    "original": null,
    "arrival": 22,
    "sale": false,
    "image": "shop-celeste.webp"
  },
  {
    "id": "alba",
    "name": "The Alba Trousers",
    "gender": "Women",
    "occasion": "Work",
    "type": "Trousers",
    "color": "Pearl",
    "material": "Fluid woven cloth",
    "price": 185,
    "original": null,
    "arrival": 23,
    "sale": false,
    "image": "shop-alba.webp"
  },
  {
    "id": "sylvie",
    "name": "The Sylvie Blazer",
    "gender": "Women",
    "occasion": "Evening",
    "type": "Outerwear",
    "color": "Pearl",
    "material": "Lustrous satin",
    "price": 275,
    "original": null,
    "arrival": 24,
    "sale": false,
    "image": "shop-sylvie.webp"
  },
  {
    "id": "leon",
    "name": "The Léon Knit",
    "gender": "Men",
    "occasion": "Everyday",
    "type": "Knitwear",
    "color": "Espresso",
    "material": "Fine rib knit",
    "price": 165,
    "original": null,
    "arrival": 25,
    "sale": false,
    "image": "shop-leon.webp"
  },
  {
    "id": "adrien",
    "name": "The Adrien Evening Suit",
    "gender": "Men",
    "occasion": "Evening",
    "type": "Sets",
    "color": "Midnight",
    "material": "Smooth tailored cloth",
    "price": 425,
    "original": null,
    "arrival": 26,
    "sale": false,
    "image": "shop-adrien.webp"
  },
  {
    "id": "lucien",
    "name": "The Lucien Jacket",
    "gender": "Men",
    "occasion": "Work",
    "type": "Outerwear",
    "color": "Ink",
    "material": "Structured woven cloth",
    "price": 310,
    "original": null,
    "arrival": 27,
    "sale": false,
    "image": "shop-lucien.webp"
  },
  {
    "id": "maelle",
    "name": "The Maëlle Coat",
    "gender": "Women",
    "occasion": "Seasonal",
    "type": "Outerwear",
    "color": "Blue mist",
    "material": "Soft woven cloth",
    "price": 325,
    "original": null,
    "arrival": 28,
    "sale": false,
    "image": "shop-maelle.webp"
  },
  {
    "id": "odette",
    "name": "The Odette Blazer",
    "gender": "Women",
    "occasion": "Work",
    "type": "Outerwear",
    "color": "Noir",
    "material": "Structured tailoring",
    "price": 290,
    "original": null,
    "arrival": 29,
    "sale": false,
    "image": "shop-odette.webp"
  },
  {
    "id": "anais",
    "name": "The Anaïs Coat",
    "gender": "Women",
    "occasion": "Seasonal",
    "type": "Outerwear",
    "color": "Cinnamon",
    "material": "Brushed wool blend",
    "price": 365,
    "original": null,
    "arrival": 30,
    "sale": false,
    "image": "shop-anais.webp"
  },
  {
    "id": "bastien",
    "name": "The Bastien Shirt",
    "gender": "Men",
    "occasion": "Evening",
    "type": "Shirts",
    "color": "Chalk",
    "material": "Light woven cloth",
    "price": 175,
    "original": null,
    "arrival": 31,
    "sale": false,
    "image": "shop-bastien.webp"
  },
  {
    "id": "elio",
    "name": "The Elio Linen Shirt",
    "gender": "Men",
    "occasion": "Weekend",
    "type": "Shirts",
    "color": "Stone",
    "material": "Textured linen blend",
    "price": 155,
    "original": null,
    "arrival": 32,
    "sale": false,
    "image": "shop-elio.webp"
  },
  {
    "id": "inaya",
    "name": "The Inaya Rollneck",
    "gender": "Women",
    "occasion": "Everyday",
    "type": "Knitwear",
    "color": "Ink",
    "material": "Fine gauge knit",
    "price": 160,
    "original": null,
    "arrival": 33,
    "sale": false,
    "image": "shop-inaya.webp"
  },
  {
    "id": "amelie",
    "name": "The Amélie Slip Dress",
    "gender": "Women",
    "occasion": "Everyday",
    "type": "Dresses",
    "color": "Ivory",
    "material": "Soft satin",
    "price": 195,
    "original": null,
    "arrival": 34,
    "sale": false,
    "image": "new-arrivals-amelie.webp"
  },
  {
    "id": "etienne",
    "name": "The Étienne Suit",
    "gender": "Men",
    "occasion": "Work",
    "type": "Sets",
    "color": "Deep navy",
    "material": "Tailored woven cloth",
    "price": 385,
    "original": null,
    "arrival": 35,
    "sale": false,
    "image": "new-arrivals-etienne.webp"
  },
  {
    "id": "theo",
    "name": "The Théo Knit",
    "gender": "Men",
    "occasion": "Seasonal",
    "type": "Knitwear",
    "color": "Pearl",
    "material": "Soft textured knit",
    "price": 180,
    "original": null,
    "arrival": 36,
    "sale": false,
    "image": "new-arrivals-theo.webp"
  },
  {
    "id": "claire",
    "name": "The Claire Shirt",
    "gender": "Women",
    "occasion": "Work",
    "type": "Shirts",
    "color": "Chalk",
    "material": "Crisp cotton",
    "price": 160,
    "original": null,
    "arrival": 37,
    "sale": false,
    "image": "new-arrivals-claire.webp"
  },
  {
    "id": "rosalie",
    "name": "The Rosalie Gown",
    "gender": "Women",
    "occasion": "Occasion",
    "type": "Dresses",
    "color": "Rose copper",
    "material": "Draped satin",
    "price": 345,
    "original": null,
    "arrival": 38,
    "sale": false,
    "image": "new-arrivals-rosalie.webp"
  },
  {
    "id": "ines",
    "name": "The Inès Trench",
    "gender": "Women",
    "occasion": "Seasonal",
    "type": "Outerwear",
    "color": "Graphite",
    "material": "Cotton blend twill",
    "price": 315,
    "original": null,
    "arrival": 39,
    "sale": false,
    "image": "new-arrivals-ines.webp"
  },
  {
    "id": "soline",
    "name": "The Soline Blazer",
    "gender": "Women",
    "occasion": "Work",
    "type": "Outerwear",
    "color": "Cacao",
    "material": "Soft tailoring",
    "price": 285,
    "original": null,
    "arrival": 40,
    "sale": false,
    "image": "new-arrivals-soline.webp"
  },
  {
    "id": "remy",
    "name": "The Rémy Shirt",
    "gender": "Men",
    "occasion": "Weekend",
    "type": "Shirts",
    "color": "Natural",
    "material": "Linen blend",
    "price": 175,
    "original": null,
    "arrival": 41,
    "sale": false,
    "image": "new-arrivals-remy.webp"
  },
  {
    "id": "lea",
    "name": "The Léa Trousers",
    "gender": "Women",
    "occasion": "Everyday",
    "type": "Trousers",
    "color": "Oat",
    "material": "Fluid woven cloth",
    "price": 190,
    "original": null,
    "arrival": 42,
    "sale": false,
    "image": "new-arrivals-lea.webp"
  },
  {
    "id": "noemie",
    "name": "The Noémie Trousers",
    "gender": "Women",
    "occasion": "Work",
    "type": "Trousers",
    "color": "Ink",
    "material": "Draped tailoring",
    "price": 135,
    "original": 180,
    "arrival": 43,
    "sale": true,
    "image": "sale-noemie.webp"
  },
  {
    "id": "violette",
    "name": "The Violette Blazer",
    "gender": "Women",
    "occasion": "Evening",
    "type": "Outerwear",
    "color": "Periwinkle",
    "material": "Lustrous satin",
    "price": 190,
    "original": 260,
    "arrival": 44,
    "sale": true,
    "image": "sale-violette.webp"
  },
  {
    "id": "aurelie",
    "name": "The Aurélie Gown",
    "gender": "Women",
    "occasion": "Occasion",
    "type": "Dresses",
    "color": "Champagne",
    "material": "Draped satin",
    "price": 265,
    "original": 365,
    "arrival": 45,
    "sale": true,
    "image": "sale-aurelie.webp"
  }
];
(() => {
  const root = document.documentElement;
  const $ = (s, parent = document) => parent.querySelector(s);
  const $$ = (s, parent = document) => [...parent.querySelectorAll(s)];
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const compact = matchMedia('(max-width: 1024px)');
  const mobile = matchMedia('(max-width: 639px)');
  const params = new URLSearchParams(location.search);
  const money = n => new Intl.NumberFormat(SERAINE_CONFIG.locale, {style:'currency',currency:SERAINE_CONFIG.currency,currencyDisplay:'code',maximumFractionDigits:0}).format(n);
  const escapeHTML = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const storePreference = (key, value) => { try { localStorage.setItem(key, value); } catch (_) {} };
  const formatPrices = (scope = document) => $$('[data-money]', scope).forEach(el => { el.textContent = money(Number(el.dataset.money)); });
  formatPrices();

  // Display controls keep accessible names, icons, and pressed states in sync.
  const updateDisplay = () => {
    const dark = root.dataset.theme === 'dark';
    $$('.theme-toggle').forEach(button => {
      button.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} mode`);
      $('.theme-icon', button).className = `theme-icon ${dark ? 'sun' : 'moon'}`;
    });
    $$('[data-theme]').filter(el => el.tagName === 'BUTTON').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.theme === root.dataset.theme)));
    $$('[data-dir]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.dir === root.dir)));
    $$('.direction-toggle').forEach(button => {
      button.textContent = root.dir.toUpperCase();
      button.setAttribute('aria-label', `Switch to ${root.dir === 'rtl' ? 'left-to-right' : 'right-to-left'} layout`);
    });
    $('meta[name=theme-color]').content = dark ? '#171C1A' : '#F7F5F0';
  };
  const setTheme = value => { root.dataset.theme = value; storePreference('seraine-theme', value); updateDisplay(); };
  const setDirection = value => { root.dir = value; storePreference('seraine-dir', value); updateDisplay(); window.dispatchEvent(new Event('seraine:direction')); };
  $$('.theme-toggle').forEach(button => button.addEventListener('click', () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark')));
  $$('button[data-theme]').forEach(button => button.addEventListener('click', () => setTheme(button.dataset.theme)));
  $$('.direction-toggle').forEach(button => button.addEventListener('click', () => setDirection(root.dir === 'ltr' ? 'rtl' : 'ltr')));
  $$('button[data-dir]').forEach(button => button.addEventListener('click', () => setDirection(button.dataset.dir)));
  updateDisplay();

  // Native dialogs provide focus trapping, Escape handling, and background inertness.
  const drawer = $('#navigation-drawer');
  const menu = $('.menu-toggle');
  menu.addEventListener('click', () => { drawer.showModal(); menu.setAttribute('aria-expanded', 'true'); });
  drawer.addEventListener('close', () => { menu.setAttribute('aria-expanded', 'false'); if (compact.matches) menu.focus(); });
  $$('dialog').forEach(dialog => {
    $$('[data-close]', dialog).forEach(button => button.addEventListener('click', () => dialog.close()));
    dialog.addEventListener('click', event => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
    });
  });
  const navDropdowns = $$('.nav-dropdown');
  navDropdowns.forEach(dropdown => dropdown.addEventListener('toggle', () => {
    if (dropdown.open) navDropdowns.filter(item => item !== dropdown).forEach(item => { item.open = false; });
  }));
  document.addEventListener('click', event => navDropdowns.forEach(dropdown => { if (!dropdown.contains(event.target)) dropdown.open = false; }));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') navDropdowns.forEach(dropdown => { dropdown.open = false; }); });
  compact.addEventListener('change', () => { if (!compact.matches && drawer.open) drawer.close(); navDropdowns.forEach(dropdown => { dropdown.open = false; }); });

  // Native scroll-snap supports touch, trackpads, keyboard and both directions.
  const sliders = $$('.peer-slider').map(slider => {
    const track = $('.peer-track', slider);
    const cards = [...track.children];
    const counter = $('.slider-position', slider);
    const pauseButton = $('[data-slide=pause]', slider);
    let index = 0, paused = reducedMotion.matches, hovering = false, focused = false;
    const perView = () => mobile.matches ? 1 : 2;
    const last = () => Math.max(0, cards.length - perView());
    const syncCounter = () => { counter.textContent = `${index + 1} / ${last() + 1}`; };
    const go = (next, animate = true) => {
      index = Math.max(0, Math.min(next, last()));
      const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      const step = cards[0].getBoundingClientRect().width + gap;
      track.scrollTo({ left: (root.dir === 'rtl' ? -1 : 1) * index * step, behavior: animate && !reducedMotion.matches ? 'smooth' : 'instant' });
      syncCounter();
    };
    const updatePause = () => { pauseButton.textContent = paused ? 'Play' : 'Pause'; pauseButton.setAttribute('aria-label', `${paused ? 'Start' : 'Pause'} automatic slides`); };
    $('[data-slide=next]', slider).addEventListener('click', () => go(index >= last() ? 0 : index + 1));
    $('[data-slide=prev]', slider).addEventListener('click', () => go(index <= 0 ? last() : index - 1));
    pauseButton.addEventListener('click', () => { paused = !paused; updatePause(); });
    slider.addEventListener('mouseenter', () => { hovering = true; });
    slider.addEventListener('mouseleave', () => { hovering = false; });
    slider.addEventListener('focusin', () => { focused = true; });
    slider.addEventListener('focusout', event => { focused = slider.contains(event.relatedTarget); });
    track.addEventListener('pointerdown', () => { paused = true; updatePause(); }, {passive:true});
    track.addEventListener('scroll', () => {
      const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      const step = cards[0].getBoundingClientRect().width + gap;
      if (step) index = Math.min(last(), Math.round(Math.abs(track.scrollLeft) / step));
      syncCounter();
    }, {passive:true});
    const reset = () => { index = 0; track.scrollLeft = 0; syncCounter(); };
    compact.addEventListener('change', reset);
    mobile.addEventListener('change', reset);
    window.addEventListener('seraine:direction', reset);
    reducedMotion.addEventListener('change', () => { if (reducedMotion.matches) paused = true; updatePause(); });
    syncCounter(); updatePause();
    return { tick() {
      if (!compact.matches || paused || hovering || focused || document.hidden || $('dialog[open]')) return;
      const rect = slider.getBoundingClientRect();
      if (rect.top < innerHeight && rect.bottom > 0) go(index >= last() ? 0 : index + 1);
    }};
  });
  // One shared autoplay timer, irrespective of slider count.
  if (sliders.length) setInterval(() => sliders.forEach(slider => slider.tick()), 6000);

  // Shop filtering and sorting operate on the original cards, with no duplicate markup.
  const filters = $('#filters');
  if (filters) {
    const grid = $('#shop-grid');
    const cards = $$('.product-card', grid);
    const panel = $('#filter-panel');
    const toggle = $('.filter-toggle');
    const sort = $('#sort');
    const setPanel = open => { panel.classList.toggle('is-open', open); toggle.setAttribute('aria-expanded', String(open)); };
    toggle.addEventListener('click', () => { setPanel(!panel.classList.contains('is-open')); if (panel.classList.contains('is-open')) $('select', panel).focus(); });
    $('.filter-apply').addEventListener('click', () => { setPanel(false); toggle.focus(); });
    ['gender','occasion','type'].forEach(key => {
      const select = filters.elements[key];
      if ([...select.options].some(option => option.value === params.get(key))) select.value = params.get(key);
    });
    const apply = () => {
      const values = Object.fromEntries(new FormData(filters));
      const ordered = cards.slice().sort((a,b) => sort.value === 'low' ? +a.dataset.price - +b.dataset.price : sort.value === 'high' ? +b.dataset.price - +a.dataset.price : +b.dataset.arrival - +a.dataset.arrival);
      let count = 0;
      ordered.forEach(card => {
        card.hidden = ['gender','occasion','type'].some(key => values[key] && card.dataset[key] !== values[key]);
        if (!card.hidden) count++;
        grid.appendChild(card);
      });
      $('#piece-count').textContent = `${count} ${count === 1 ? 'piece' : 'pieces'}`;
      const active = $('#active-filters');
      if (active) {
        active.replaceChildren(...Object.entries(values).filter(([,value]) => value).map(([key,value]) => {
          const chip = document.createElement('span');
          chip.className = 'active-filter';
          chip.textContent = `${key[0].toUpperCase()+key.slice(1)}: ${value}`;
          return chip;
        }));
      }
      $('.empty-state').hidden = count > 0;
      const url = new URL(location.href);
      ['gender','occasion','type'].forEach(key => values[key] ? url.searchParams.set(key, values[key]) : url.searchParams.delete(key));
      try { history.replaceState(null,'',url); } catch (_) {}
    };
    filters.addEventListener('change', apply); sort.addEventListener('change', apply);
    filters.addEventListener('submit', event => event.preventDefault());
    filters.addEventListener('reset', () => { sort.value = 'newest'; setTimeout(apply,0); });
    $('#reset-empty').addEventListener('click', () => filters.reset());
    compact.addEventListener('change', () => setPanel(false));
    apply();
  }

  // Quick views keep each collection photograph in its original editorial placement.
  const pieceDialog = $('#piece-dialog');
  const pieceHTML = piece => `<p class="eyebrow">${escapeHTML(piece.type)} / ${escapeHTML(piece.gender)}</p><h2 id="piece-title">${escapeHTML(piece.name)}</h2><p class="product-detail-price">${piece.original ? `<del>${money(piece.original)}</del> ` : ''}${money(piece.price)}</p><p>A considered ${escapeHTML(piece.type.toLowerCase())} piece for ${escapeHTML(piece.occasion.toLowerCase())} dressing. Discover its shape in the collection photograph, then ask us about your preferred fit.</p><dl><dt>Colour</dt><dd>${escapeHTML(piece.color)}</dd><dt>Material</dt><dd>${escapeHTML(piece.material)} — confirm the current garment label by enquiry.</dd><dt>Fit</dt><dd>Ask for measurements in your preferred size.</dd><dt>Care</dt><dd>Follow the sewn-in care label. Store away from direct sunlight.</dd></dl><p class="availability">Enquire for current size availability.</p><fieldset class="size-options"><legend>Preferred size</legend>${['XS','S','M','L','XL'].map(size => `<button type="button" data-size="${size}" aria-pressed="false">${size}</button>`).join('')}</fieldset><p class="size-feedback" role="status">Select a size to personalise your enquiry.</p><a class="button enquire-piece" href="contact.html?type=Product&piece=${encodeURIComponent(piece.name)}#enquiry">ENQUIRE ABOUT THIS PIECE <span>↗</span></a>`;
  $$('[data-open-piece]').forEach(link => link.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    const piece = PIECES.find(p => p.id === link.dataset.openPiece);
    if (!piece) return;
    event.preventDefault(); $('#piece-content').innerHTML = pieceHTML(piece); pieceDialog.showModal();
  }));
  document.addEventListener('click', event => {
    const button = event.target.closest('[data-size]');
    if (!button) return;
    const scope = button.closest('.product-info, #piece-content');
    $$('[data-size]', scope).forEach(el => el.setAttribute('aria-pressed', String(el === button)));
    $('.size-feedback', scope).textContent = `Preferred size: ${button.dataset.size}. Availability will be confirmed by enquiry.`;
    const enquiry = $('.enquire-piece', scope); const url = new URL(enquiry.href); url.searchParams.set('size', button.dataset.size); enquiry.href = url;
  });
  if (params.has('piece') && $('#product-info')) {
    const piece = PIECES.find(p => p.id === params.get('piece'));
    if (piece) {
      $('#product-info').innerHTML = pieceHTML(piece).replace('<h2 id="piece-title">','<h1>').replace('</h2>','</h1>');
      $('#product-breadcrumb').textContent = piece.name;
      document.title = `${piece.name} — SÉRAINE`;
      // Dedicated collection notes use a typographic treatment; no unrelated garment photo.
      $('.product-gallery').innerHTML = `<div class="piece-type-study"><p class="eyebrow">SÉRAINE / COLLECTION NOTES</p><span class="brand-mark" aria-hidden="true"></span><h2>${escapeHTML(piece.name)}</h2><p>${escapeHTML(piece.color)}<br> ${escapeHTML(piece.type)} / ${escapeHTML(piece.occasion)}</p><a class="text-link" href="shop.html">RETURN TO THE COLLECTION ↗</a></div>`;
    }
  }
  $$('[data-gallery]').forEach(button => button.addEventListener('click', () => {
    const track = $('.gallery-track'); const i = Number(button.dataset.gallery);
    track.scrollTo({ left: (root.dir === 'rtl' ? -1 : 1) * i * track.clientWidth, behavior: reducedMotion.matches ? 'instant' : 'smooth' });
    $$('[data-gallery]').forEach(el => el.setAttribute('aria-pressed', String(el === button)));
  }));

  // A readable, distinct article for every journal link.
  const articles = {
    tailoring: { title:'The softer side<br> of <em>tailoring.</em>', deck:'Structure, with room to breathe. A thoughtful approach to the pieces that hold a wardrobe together.', sections:[
      ['Start with the shoulder','A tailored piece doesn’t have to feel formal. Begin by noticing where the shoulder sits and how the fabric moves when you reach forward. The right jacket gives shape without asking you to stand still. Try it buttoned and open; the difference can change the whole feeling of an outfit.'],
      ['Let one line lead','Pair a longer jacket with a simple column underneath, or let a cropped shape meet the waistband of a fluid trouser. Rather than matching every detail, choose one clear line to carry through the look. A sleeve pushed back can make a strong silhouette feel relaxed.'],
      ['Soften the contrast','A textured knit beside a smooth lapel. A light woven shirt beneath a substantial jacket. These small material contrasts keep tailoring interesting without adding visual noise. Stay close in colour and let the textures do the talking.'],
      ['Leave a little space','Before you leave, take one thing away or loosen one element. Open a collar, simplify the jewellery, or choose the shoe you can walk in all day. Structure is most persuasive when you feel at ease inside it.']
    ], quote:'A little structure. A little freedom. Room for you.' },
    fabrics: { title:'A conversation<br> in <em>texture.</em>', deck:'The way a fabric catches light, moves, and feels can change an otherwise familiar silhouette.', sections:[
      ['Begin with touch','Texture is often the first thing we notice without realising it. Run a hand over a cloth and look at how quickly it returns to its shape. A crisp cotton holds space; a fluid woven cloth follows the body. Neither is better. They tell different stories.'],
      ['Watch the light','Matte surfaces absorb light and feel quiet. Smoother surfaces reflect it and can give depth to a simple colour. Wear two similar shades in different textures to create interest without a stronger print or a new palette.'],
      ['Dress for your day','Consider how you will spend your time. If you move between indoor and outdoor spaces, a removable layer can be more useful than one heavy garment. If you sit for long periods, notice the feel of a waistband and the cloth against your skin.'],
      ['Let care become a habit','Read the care label before the first wash. Air clothes between wears when suitable, fold knits rather than stretching them on hangers, and treat marks promptly according to the fabric’s instructions. A small routine helps keep favourite pieces in rotation.']
    ],quote:'A wardrobe is a conversation between shapes and surfaces.' },
    evening: {title:'When the day<br> becomes <em>evening.</em>',deck:'A few considered changes can bring a familiar outfit into a different light.',sections:[
      ['Keep your foundation','Start with the piece that made you feel good during the day. A beautiful trouser, a simple dress, or a shirt with a strong line can remain the centre of your evening look. A change of setting doesn’t require a change of personality.'],
      ['Choose one shift','Trade a substantial layer for something lighter, reveal a neckline, or add a more sculptural earring. Choose one change that gives the outfit intention. When every element becomes a statement, the person wearing it can get lost.'],
      ['Consider the surface','Evening light brings out different qualities in a fabric. A subtle sheen can feel luminous; a matte dark cloth can give a silhouette depth. Try your combination in softer light before deciding that it needs another detail.'],
      ['Stay comfortable in the moment','Think about where the evening will take you. Leave room to move, sit, and walk. The most convincing evening wardrobe lets you forget about what you are wearing and settle into the experience.']
    ],quote:'Keep the feeling. Change the light.'},
    proportions:{title:'The quiet art<br> of <em>proportion.</em>',deck:'Length, volume, and a little breathing space: finding balance in your own silhouette.',sections:[
      ['Find the point of balance','Proportion is a relationship, not a rule. Look at where a top ends, where a trouser begins, and the amount of space each piece creates. A small adjustment to a hem or tuck can change that relationship without changing the clothes.'],
      ['Try volume in one place','If you are exploring a fuller silhouette, begin with one generous shape. Pair a fluid trouser with a simple upper layer, or let an expansive sleeve sit above a straighter skirt. Once you feel at home in that combination, experiment further.'],
      ['Use a mirror, then move','A still image only tells part of the story. Walk, reach, and sit in the outfit. Notice where the cloth gathers and where it falls freely. Your sense of ease matters more than a perfectly balanced photograph.'],
      ['Keep the useful discoveries','When a combination works, notice why. It might be the length of a sleeve, the openness of a neckline, or the line between a trouser and shoe. These observations become a personal vocabulary you can use again.']
    ],quote:'Balance is something you feel, as much as something you see.'},
    monochrome:{title:'One colour.<br> <em>Many possibilities.</em>',deck:'Building depth from a close palette, with texture and shape doing the work.',sections:[
      ['Think in a family of shades','Monochrome doesn’t have to mean an exact match. Pearl, chalk, and warm ivory can live together; ink and softened charcoal can create a quieter contrast. Begin with colours that feel related, then look at them in natural light.'],
      ['Make texture the detail','Pair a smooth weave with a ribbed knit or a crisp shirt with a softly brushed layer. Differences in surface make a close palette feel considered. Let the light reveal the changes as you move.'],
      ['Give the silhouette a rhythm','A narrow layer beneath a generous coat, a long line interrupted by a pushed-back sleeve: these are the details that keep one colour expressive. The simpler the palette, the more clearly you can see the shape.'],
      ['Leave room for a personal note','A familiar piece of jewellery, a worn-in shoe, or a different texture can make the look yours. You don’t need to erase every contrast. You only need enough continuity to make the outfit feel intentional.']
    ],quote:'When colour becomes quiet, form has more to say.'},
    layering:{title:'The lightness<br> of <em>a layer.</em>',deck:'A practical study in adding warmth, texture, and possibility without losing ease.',sections:[
      ['Begin close to the body','Choose a base that feels comfortable on its own. A simple tee, fine knit, or soft shirt creates a useful starting point. Check the neckline and sleeve before adding another piece so each layer has a purpose.'],
      ['Vary the weight','Build from a lighter cloth toward a more substantial outer layer. This helps each piece move freely and makes it easier to adjust throughout the day. A loose outer shape can hold a little more volume beneath it.'],
      ['Let a detail show','A cuff, collar, or small difference in hem length can make a layered look feel deliberate. Choose one or two details to reveal rather than trying to show every piece equally. Leave the rest to suggestion.'],
      ['Edit as you go','Try removing the middle layer or opening the top one. If the outfit works in more than one arrangement, it will adapt more naturally to the day. Keep the version that allows you to move with the least thought.']
    ],quote:'The best layer adds possibility, not complication.'}
  };
  if ($('#article-body')) {
    const article = articles[params.get('story')] || articles.tailoring;
    $('#article-title').innerHTML = article.title;
    $('#article-deck').textContent = article.deck;
    $('#reading-time').textContent = '2 MIN READ';
    $('#article-body').innerHTML = article.sections.map(([heading,copy],i) => `<section class="article-section reveal"><h2>${heading}</h2><p>${copy}</p></section>${i===1?`<blockquote>“${article.quote}”</blockquote>`:''}`).join('');
    document.title = `${$('#article-title').textContent} — SÉRAINE Journal`;
  }

  // Complete static reveal groups without animating carousel tracks or controls.
  const revealGroups = '.lookbook-small, .wardrobe-panel, .wardrobe-intro, .page-title, .article-header, .product-info, .campaign-strip > div, .not-found > div, .mood-links, #contact-form, .article-body > section, .article-body > blockquote, .footer-top, .footer-columns > div';
  $$(revealGroups).forEach(el => {
    if (!el.closest('.reveal, .peer-track, .gallery-track, .slider-controls')) el.classList.add('reveal');
  });

  // One observer; reveals never transform a carousel track.
  if ('IntersectionObserver' in window && !reducedMotion.matches) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), { threshold: .08 });
    document.body.classList.add('motion-ready');
    $$('.reveal').forEach(el => observer.observe(el));
  }

  // Keep every visible store reference aligned with the shared demo identity.
  $$('[data-store-address]').forEach(el => { el.textContent = SERAINE_CONFIG.storeAddress; });
  $$('[data-store-hours]').forEach(el => { el.textContent = SERAINE_CONFIG.openingHours; });
  $$('[data-store-phone]').forEach(el => { el.textContent = SERAINE_CONFIG.storePhone; });
  $$('[data-store-email]').forEach(el => { el.textContent = SERAINE_CONFIG.enquiryEmail; el.href = `mailto:${SERAINE_CONFIG.enquiryEmail}`; });
  $$('[data-store-directions]').forEach(el => { el.href = SERAINE_CONFIG.mapDirectionsUrl; });

  // Contact remains fully static: prepare a file, or open a configured email draft.
  const contact = $('#contact-form');
  if (contact) {
    if (SERAINE_CONFIG.storeAddress) $('#store-address').textContent = SERAINE_CONFIG.storeAddress;
    if (SERAINE_CONFIG.openingHours) $('#store-hours').textContent = SERAINE_CONFIG.openingHours;
    if (SERAINE_CONFIG.mapEmbedUrl) { $('#store-map').src = SERAINE_CONFIG.mapEmbedUrl; $('#store-map').title = 'SÉRAINE boutique location'; $('#map-caption').textContent = SERAINE_CONFIG.storeAddress.split('\n').slice(1).join(', '); }
    if (SERAINE_CONFIG.enquiryEmail) { $('#contact-submit').innerHTML = 'PREPARE EMAIL <span>↗</span>'; $('#form-note').textContent = 'Review your enquiry, then open it in your email app to send.'; }
    const type = params.get('type');
    if ([...$('#enquiry-type').options].some(option => option.value === type)) $('#enquiry-type').value = type;
    if (params.get('piece')) $('#message').value = `I’d like to enquire about ${params.get('piece')}${params.get('size') ? ` in size ${params.get('size')}` : ''}. `;
    let fileUrl;
    contact.addEventListener('submit', event => {
      event.preventDefault();
      if (!contact.reportValidity()) return;
      const values = Object.fromEntries(new FormData(contact));
      if (!values.name.trim() || values.message.trim().length < 10) {
        const input = !values.name.trim() ? $('#name') : $('#message');
        input.setCustomValidity('Please enter a meaningful value.'); input.reportValidity();
        input.addEventListener('input', () => input.setCustomValidity(''), {once:true}); return;
      }
      const text = `SÉRAINE — ${values.type} enquiry\n\nName: ${values.name.trim()}\nEmail: ${values.email}\nPhone: ${values.phone || 'Not provided'}\n\n${values.message.trim()}\n\nConsent: details may be used to respond to this enquiry.`;
      const result = $('#form-result'); result.replaceChildren();
      const note = document.createElement('p'); note.textContent = 'Your enquiry is ready. It has not been sent.'; result.append(note);
      if (fileUrl) URL.revokeObjectURL(fileUrl);
      fileUrl = URL.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'}));
      const download = document.createElement('a'); download.href = fileUrl; download.download = 'seraine-enquiry.txt'; download.textContent = 'Download your enquiry'; result.append(download);
      if (SERAINE_CONFIG.enquiryEmail) {
        const email = document.createElement('a'); email.href = `mailto:${SERAINE_CONFIG.enquiryEmail}?subject=${encodeURIComponent('SÉRAINE — '+values.type+' enquiry')}&body=${encodeURIComponent(text)}`; email.textContent = 'Open enquiry in your email app'; result.append(email);
      }
      result.focus();
    });
    window.addEventListener('pagehide', () => { if (fileUrl) URL.revokeObjectURL(fileUrl); });
  }
  const top = $('.scroll-top');
  window.addEventListener('scroll', () => { top.hidden = scrollY < 600; }, {passive:true});
  top.addEventListener('click', () => window.scrollTo({top:0,behavior:reducedMotion.matches?'instant':'smooth'}));
  $$('[data-scroll-top]').forEach(button => button.addEventListener('click', () => window.scrollTo({top:0,behavior:reducedMotion.matches?'instant':'smooth'})));
})();

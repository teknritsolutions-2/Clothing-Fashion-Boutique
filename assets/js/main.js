/* SÉRAINE — shared storefront behaviour and canonical catalogue. */
'use strict';

const SERAINE_CONFIG = {
  currency: 'USD',
  locale: 'en-US',
  enquiryEmail: 'palermo@seraine.example',
  storeAddress: 'SÉRAINE Palermo\nVia della Libertà\nPalermo, Sicily, Italy',
  openingHours: 'Monday–Saturday, 10:00–19:00. Sunday closed.',
  mapEmbedUrl: 'https://maps.google.com/maps?q=Via%20della%20Libert%C3%A0%2C%20Palermo%2C%20Sicily%2C%20Italy&z=15&output=embed',
  mapDirectionsUrl: 'https://www.google.com/maps/search/?api=1&query=Via+della+Libert%C3%A0,+Palermo,+Sicily,+Italy',
  storePhone: '+39 091 000 0000'
};

const PIECES = [
  {id:'mara-shirt',name:'Mara Cotton Shirt',gender:'Women',occasion:'Work',type:'Shirts',climate:'Warm Days',material:'Cotton poplin',fits:['Regular','Relaxed','Adjusted length'],color:'Soft white',price:98,original:null,isNew:true,sale:false,image:'new-arrivals-claire.webp',alt:'Woman wearing a soft white cotton shirt'},
  {id:'nina-trouser',name:'Nina Longline Blazer',gender:'Women',occasion:'Work',type:'Blazers',climate:'Everyday Weather',material:'Cotton twill',fits:['Regular','Relaxed','Shortened sleeve'],color:'Camel',price:104,original:138,isNew:false,sale:true,image:'shop-anais.webp',alt:'Woman wearing a camel longline blazer'},
  {id:'clara-midi',name:'Clara Midi Dress',gender:'Women',occasion:'Everyday',type:'Dresses',climate:'Warm Days',material:'Breathable cotton',fits:['Regular','Petite','Adjusted length'],color:'Chalk',price:136,original:null,isNew:true,sale:false,image:'arrival-flore-dress.webp',alt:'Woman wearing a light cotton midi dress'},
  {id:'elena-linen',name:'Elena Slip Dress',gender:'Women',occasion:'Weekend',type:'Dresses',climate:'Warm Days',material:'Linen blend',fits:['Regular','Relaxed','Adjusted length'],color:'Ivory',price:112,original:null,isNew:true,sale:false,image:'new-arrivals-amelie.webp',alt:'Woman wearing a simple ivory slip dress'},
  {id:'maya-blazer',name:'Maya Soft Blazer',gender:'Women',occasion:'Work',type:'Blazers',climate:'Everyday Weather',material:'Cotton blend',fits:['Regular','Relaxed','Shortened sleeve'],color:'Caramel',price:168,original:null,isNew:true,sale:false,image:'shop-lyra-blazer.webp',alt:'Woman wearing a caramel soft blazer'},
  {id:'sofia-cardigan',name:'Sofia Knit Cardigan',gender:'Women',occasion:'Weekend',type:'Knitwear',climate:'Cool Days',material:'Cotton wool knit',fits:['Regular','Relaxed'],color:'Oatmeal',price:92,original:124,isNew:false,sale:true,image:'arrival-lise-knit.webp',alt:'Woman wearing a soft oatmeal knit'},
  {id:'aria-dress',name:'Aria Evening Jacket',gender:'Women',occasion:'Evening',type:'Jackets',climate:'Everyday Weather',material:'Viscose blend',fits:['Regular','Relaxed','Shortened sleeve'],color:'Ink',price:148,original:185,isNew:true,sale:true,image:'new-arrivals-ines.webp',alt:'Woman wearing an ink evening jacket'},
  {id:'lena-overshirt',name:'Lena Everyday Overshirt',gender:'Women',occasion:'Weekend',type:'Jackets',climate:'Cool Days',material:'Brushed cotton',fits:['Regular','Relaxed'],color:'Stone',price:128,original:null,isNew:false,sale:false,image:'new-marin-coat.webp',alt:'Woman wearing a practical stone overshirt'},
  {id:'noor-set',name:'Noor Work Blazer',gender:'Women',occasion:'Work',type:'Blazers',climate:'Warm Days',material:'Linen blend',fits:['Regular','Relaxed','Shortened sleeve'],color:'Cocoa',price:184,original:null,isNew:true,sale:false,image:'new-arrivals-soline.webp',alt:'Woman wearing a cocoa work blazer'},
  {id:'eva-dress',name:'Eva Occasion Dress',gender:'Women',occasion:'Occasion',type:'Dresses',climate:'Warm Days',material:'Viscose blend',fits:['Regular','Relaxed','Petite'],color:'Ivory',price:88,original:118,isNew:false,sale:true,image:'new-season-white-dress.webp',alt:'Woman wearing a flowing ivory occasion dress'},
  {id:'iris-dress',name:'Iris Occasion Dress',gender:'Women',occasion:'Occasion',type:'Dresses',climate:'Everyday Weather',material:'Textured cotton',fits:['Regular','Petite','Adjusted length'],color:'Plum',price:172,original:null,isNew:true,sale:false,image:'arrival-elise-dress.webp',alt:'Woman wearing a long occasion dress'},
  {id:'june-jacket',name:'June Light Jacket',gender:'Women',occasion:'Everyday',type:'Jackets',climate:'Cool Days',material:'Cotton canvas',fits:['Regular','Relaxed'],color:'Mushroom',price:116,original:148,isNew:false,sale:true,image:'sale-ivie-jacket.webp',alt:'Woman wearing a light everyday jacket'},
  {id:'theo-shirt',name:'Theo Fine Knit',gender:'Men',occasion:'Work',type:'Knitwear',climate:'Everyday Weather',material:'Cotton merino knit',fits:['Regular','Relaxed','Adjusted sleeve'],color:'Ivory',price:94,original:null,isNew:true,sale:false,image:'new-arrivals-theo.webp',alt:'Man wearing an ivory fine knit'},
  {id:'luca-linen',name:'Luca Everyday Knit',gender:'Men',occasion:'Weekend',type:'Knitwear',climate:'Warm Days',material:'Lightweight cotton knit',fits:['Regular','Relaxed'],color:'Cocoa',price:86,original:null,isNew:true,sale:false,image:'shop-leon.webp',alt:'Man wearing a lightweight cocoa knit'},
  {id:'sam-trouser',name:'Sam Occasion Suit',gender:'Men',occasion:'Occasion',type:'Sets',climate:'Everyday Weather',material:'Wool blend',fits:['Regular','Tapered','Adjusted length'],color:'Navy',price:98,original:128,isNew:false,sale:true,image:'shop-adrien.webp',alt:'Man wearing a tailored navy occasion suit'},
  {id:'oliver-chino',name:'Oliver Linen Set',gender:'Men',occasion:'Weekend',type:'Sets',climate:'Warm Days',material:'Washed linen',fits:['Regular','Relaxed','Adjusted length'],color:'Natural',price:92,original:null,isNew:false,sale:false,image:'new-arrivals-remy.webp',alt:'Man wearing a relaxed natural linen set'},
  {id:'kai-blazer',name:'Kai Everyday Blazer',gender:'Men',occasion:'Work',type:'Blazers',climate:'Everyday Weather',material:'Cotton linen blend',fits:['Regular','Relaxed','Adjusted sleeve'],color:'Stone',price:188,original:null,isNew:true,sale:false,image:'shop-soren-suit.webp',alt:'Man wearing a stone everyday blazer'},
  {id:'ben-polo',name:'Ben Knit Polo',gender:'Men',occasion:'Everyday',type:'Knitwear',climate:'Everyday Weather',material:'Cotton knit',fits:['Regular','Relaxed'],color:'Midnight',price:76,original:98,isNew:false,sale:true,image:'shop-milo-polo.webp',alt:'Man wearing a midnight knit polo'},
  {id:'adrian-overshirt',name:'Adrian Linen Shirt',gender:'Men',occasion:'Weekend',type:'Shirts',climate:'Cool Days',material:'Washed linen',fits:['Regular','Relaxed'],color:'Natural',price:124,original:null,isNew:false,sale:false,image:'shop-bastien.webp',alt:'Man wearing a relaxed natural linen shirt'},
  {id:'mateo-set',name:'Mateo Evening Set',gender:'Men',occasion:'Evening',type:'Sets',climate:'Everyday Weather',material:'Linen blend',fits:['Regular','Tapered','Adjusted length'],color:'Cocoa',price:220,original:280,isNew:true,sale:true,image:'wardrobe-ellis-suit.webp',alt:'Man wearing a relaxed evening suit'},
  {id:'jonah-jacket',name:'Jonah Relaxed Suit',gender:'Men',occasion:'Work',type:'Sets',climate:'Cool Days',material:'Cotton twill',fits:['Regular','Relaxed','Adjusted length'],color:'Slate',price:118,original:154,isNew:false,sale:true,image:'sale-pierre-suit.webp',alt:'Man wearing a relaxed slate suit'},
  {id:'eli-suit',name:'Eli Occasion Suit',gender:'Men',occasion:'Occasion',type:'Sets',climate:'Everyday Weather',material:'Wool linen blend',fits:['Regular','Tapered','Adjusted length'],color:'Taupe',price:286,original:null,isNew:false,sale:false,image:'shop-elio.webp',alt:'Man wearing a taupe occasion suit'},
  {id:'alex-tee',name:'Alex Tailored Blazer',gender:'Unisex',occasion:'Everyday',type:'Blazers',climate:'Warm Days',material:'Cotton blend',fits:['Regular','Relaxed','Adjusted sleeve'],color:'Navy',price:148,original:null,isNew:true,sale:false,image:'new-arrivals-etienne.webp',alt:'Person wearing a navy tailored blazer'},
  {id:'river-knit',name:'River Everyday Knit',gender:'Unisex',occasion:'Everyday',type:'Knitwear',climate:'Cool Days',material:'Cotton merino knit',fits:['Regular','Relaxed'],color:'Mauve',price:104,original:null,isNew:false,sale:false,image:'wardrobe-rowan-knit.webp',alt:'Person wearing a soft mauve everyday knit'}
];

const COLLECTIONS = {
  all: PIECES.map(item => item.id),
  new: PIECES.filter(item => item.isNew).map(item => item.id),
  sale: PIECES.filter(item => item.sale).map(item => item.id),
  home1: ['mara-shirt','clara-midi','theo-shirt','kai-blazer'],
  home2: ['maya-blazer','luca-linen','sofia-cardigan','alex-tee']
};

const qs = (selector, scope = document) => scope.querySelector(selector);
const qsa = (selector, scope = document) => [...scope.querySelectorAll(selector)];
const money = value => new Intl.NumberFormat(SERAINE_CONFIG.locale, {style:'currency',currency:SERAINE_CONFIG.currency,maximumFractionDigits:0}).format(value);
const imagePath = filename => `../assets/images/${filename}`;
const escapeHTML = value => String(value).replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));

function productCard(item) {
  const badge = item.sale ? 'SALE' : item.isNew ? 'NEW' : '';
  const pricing = item.original ? `<del>${money(item.original)}</del> <span>${money(item.price)}</span>` : `<span>${money(item.price)}</span>`;
  return `<article class="product-card" data-product-card data-piece="${item.id}" data-gender="${item.gender}" data-occasion="${item.occasion}" data-type="${item.type}" data-climate="${item.climate}" data-price="${item.price}" data-new="${item.isNew}" data-sale="${item.sale}">
    <a class="product-photo" data-open-piece="${item.id}" href="product-details.html?piece=${item.id}">
      <img class="product-image" src="${imagePath(item.image)}" alt="${escapeHTML(item.alt)}" width="1000" height="1250" loading="lazy" decoding="async">
      ${badge ? `<span class="product-tag">${badge}</span>` : ''}<span class="view-piece">VIEW DETAILS <span aria-hidden="true">↗</span></span>
    </a>
    <div class="product-meta"><div><p class="product-category">${item.type} · ${item.color}</p><h3><a href="product-details.html?piece=${item.id}">${escapeHTML(item.name)}</a></h3></div><p class="price">${pricing}</p></div>
  </article>`;
}

function renderCatalogues() {
  qsa('[data-catalog]').forEach(container => {
    const key = container.dataset.catalog || 'all';
    const items = (COLLECTIONS[key] || COLLECTIONS.all).map(id => PIECES.find(item => item.id === id)).filter(Boolean);
    container.innerHTML = items.map(productCard).join('');
  });
}

function initThemeAndDirection() {
  const root = document.documentElement;
  const setTheme = theme => {
    root.dataset.theme = theme;
    try { localStorage.setItem('seraine-theme', theme); } catch (_) {}
    qsa('.theme-toggle').forEach(button => button.setAttribute('aria-label', `Switch to ${theme === 'light' ? 'dark' : 'light'} mode`));
    qsa('.drawer-settings [data-theme]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.theme === theme)));
  };
  const setDirection = dir => {
    root.dir = dir;
    try { localStorage.setItem('seraine-dir', dir); } catch (_) {}
    qsa('.direction-toggle').forEach(button => { button.textContent = dir === 'ltr' ? 'LTR' : 'RTL'; button.setAttribute('aria-label', `Switch to ${dir === 'ltr' ? 'right-to-left' : 'left-to-right'} layout`); });
    qsa('[data-dir]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.dir === dir)));
  };
  qsa('.theme-toggle').forEach(button => button.addEventListener('click', () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark')));
  qsa('.drawer-settings [data-theme]').forEach(button => button.addEventListener('click', () => setTheme(button.dataset.theme)));
  qsa('.direction-toggle').forEach(button => button.addEventListener('click', () => setDirection(root.dir === 'rtl' ? 'ltr' : 'rtl')));
  qsa('[data-dir]').forEach(button => button.addEventListener('click', () => setDirection(button.dataset.dir)));
  setTheme(root.dataset.theme || 'light');
  setDirection(root.dir || 'ltr');
}

function initNavigation() {
  const drawer = qs('#navigation-drawer');
  const toggle = qs('.menu-toggle');
  if (drawer && toggle) {
    const close = () => { drawer.close(); toggle.setAttribute('aria-expanded','false'); document.body.classList.remove('drawer-open'); };
    toggle.addEventListener('click', () => { drawer.showModal(); toggle.setAttribute('aria-expanded','true'); document.body.classList.add('drawer-open'); });
    qsa('[data-close]', drawer).forEach(button => button.addEventListener('click', close));
    drawer.addEventListener('click', event => { if (event.target === drawer) close(); });
  }
  qsa('.nav-dropdown').forEach(details => details.addEventListener('toggle', () => {
    if (details.open) qsa('.nav-dropdown').filter(item => item !== details).forEach(item => item.removeAttribute('open'));
  }));
}

function initSliders() {
  qsa('[data-slider]').forEach(slider => {
    const track = qs('[data-slider-track]', slider);
    if (!track) return;
    const move = direction => track.scrollBy({left: direction * Math.max(280, track.clientWidth * .82), behavior:'smooth'});
    qs('[data-slide="prev"]', slider)?.addEventListener('click', () => move(document.documentElement.dir === 'rtl' ? 1 : -1));
    qs('[data-slide="next"]', slider)?.addEventListener('click', () => move(document.documentElement.dir === 'rtl' ? -1 : 1));
  });
}

function initShopFilters() {
  const grid = qs('#shop-grid');
  const form = qs('#filters');
  if (!grid || !form) return;
  const sort = qs('#sort');
  const count = qs('#piece-count');
  const chips = qs('#active-filters');
  const panel = qs('#filter-panel');
  const toggle = qs('.filter-toggle');
  const params = new URLSearchParams(location.search);
  ['gender','occasion','type','climate'].forEach(name => { const field = form.elements[name]; if (field && params.get(name)) field.value = params.get(name); });
  const apply = () => {
    const values = Object.fromEntries(['gender','occasion','type','climate'].map(name => [name, form.elements[name]?.value || '']));
    const visible = qsa('[data-product-card]', grid).filter(card => Object.entries(values).every(([key,value]) => !value || card.dataset[key] === value));
    const ordered = qsa('[data-product-card]', grid).sort((a,b) => sort?.value === 'low' ? +a.dataset.price - +b.dataset.price : sort?.value === 'high' ? +b.dataset.price - +a.dataset.price : Number(b.dataset.new === 'true') - Number(a.dataset.new === 'true'));
    ordered.forEach(card => { card.hidden = !visible.includes(card); grid.append(card); });
    count.textContent = `Showing ${visible.length} of ${PIECES.length} styles`;
    chips.innerHTML = Object.entries(values).filter(([,value]) => value).map(([key,value]) => `<button type="button" data-clear-filter="${key}">${escapeHTML(value)} <span aria-hidden="true">×</span></button>`).join('');
    const next = new URLSearchParams(); Object.entries(values).forEach(([key,value]) => value && next.set(key,value));
    history.replaceState(null,'',`${location.pathname}${next.size ? `?${next}` : ''}`);
  };
  form.addEventListener('change', apply);
  sort?.addEventListener('change', apply);
  form.addEventListener('reset', () => setTimeout(apply));
  chips?.addEventListener('click', event => { const button = event.target.closest('[data-clear-filter]'); if (!button) return; form.elements[button.dataset.clearFilter].value=''; apply(); });
  toggle?.addEventListener('click', () => { const open = panel.classList.toggle('is-open'); toggle.setAttribute('aria-expanded',String(open)); });
  qs('.filter-apply')?.addEventListener('click', () => { apply(); panel.classList.remove('is-open'); toggle?.setAttribute('aria-expanded','false'); });
  apply();
}

function fillPieceDialog(item, dialog) {
  const content = qs('#piece-content', dialog);
  content.innerHTML = `<img src="${imagePath(item.image)}" alt="${escapeHTML(item.alt)}" width="800" height="1000"><div><p class="eyebrow">${item.gender} · ${item.type}</p><h2 id="piece-title">${escapeHTML(item.name)}</h2><p class="dialog-price">${money(item.price)}</p><p>${item.material}, designed for ${item.climate.toLowerCase()} and ${item.occasion.toLowerCase()} dressing.</p><a class="button" href="product-details.html?piece=${item.id}">VIEW FULL DETAILS</a></div>`;
}

function initQuickView() {
  const dialog = qs('#piece-dialog');
  if (!dialog) return;
  document.addEventListener('click', event => {
    const trigger = event.target.closest('[data-open-piece]');
    if (!trigger || event.metaKey || event.ctrlKey || matchMedia('(max-width: 760px)').matches) return;
    const item = PIECES.find(piece => piece.id === trigger.dataset.openPiece);
    if (!item) return;
    event.preventDefault();
    fillPieceDialog(item, dialog);
    dialog.showModal();
  });
  qsa('[data-close]', dialog).forEach(button => button.addEventListener('click', () => dialog.close()));
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
}

function initProductDetail() {
  const root = qs('[data-product-detail]');
  if (!root) return;
  const id = new URLSearchParams(location.search).get('piece') || 'mara-shirt';
  const item = PIECES.find(piece => piece.id === id) || PIECES[0];
  document.title = `${item.name} — SÉRAINE`;
  root.innerHTML = `<div class="product-detail-media"><img src="${imagePath(item.image)}" alt="${escapeHTML(item.alt)}" width="1000" height="1250" fetchpriority="high"><div class="detail-image-note">Full garment · ${item.color}</div></div>
  <div class="product-info"><p class="eyebrow">${item.gender} / ${item.type}</p><h1>${escapeHTML(item.name)}</h1><p class="product-detail-price">${item.original ? `<del>${money(item.original)}</del> ` : ''}${money(item.price)}</p><p>A useful, easy-to-style piece selected for the way real wardrobes work.</p><dl class="piece-facts"><div><dt>Climate</dt><dd>${item.climate}</dd></div><div><dt>Fabric</dt><dd>${item.material}</dd></div><div><dt>Fit options</dt><dd>${item.fits.join(', ')}</dd></div><div><dt>Colour</dt><dd>${item.color}</dd></div></dl><fieldset class="size-options"><legend>Choose a size</legend>${['XS','S','M','L','XL'].map(size => `<button type="button" data-size="${size}">${size}</button>`).join('')}</fieldset><p class="size-feedback" role="status">Select a size to include it in your enquiry.</p><a class="button enquire-piece" href="contact.html?type=Custom%20fit&piece=${encodeURIComponent(item.name)}#enquiry">ENQUIRE ABOUT CUSTOM FIT <span aria-hidden="true">↗</span></a><details open><summary>Garment details</summary><p>${item.material} in ${item.color}. Suitable for ${item.occasion.toLowerCase()} wear.</p></details><details><summary>Fit and alterations</summary><p>Available in ${item.fits.join(', ').toLowerCase()}. Our team can discuss simple adjustments before you visit.</p></details><details><summary>Care</summary><p>Follow the sewn-in care label. Air between wears and store away from direct sunlight.</p></details></div>`;
  const crumb = qs('#product-breadcrumb'); if (crumb) crumb.textContent = item.name;
  qsa('[data-size]', root).forEach(button => button.addEventListener('click', () => {
    qsa('[data-size]', root).forEach(item => item.classList.remove('selected')); button.classList.add('selected');
    qs('.size-feedback',root).textContent = `Size ${button.dataset.size} will be included in your enquiry.`;
    const link=qs('.enquire-piece',root); const url=new URL(link.href); url.searchParams.set('size',button.dataset.size); link.href=url.href;
  }));
}

function initContact() {
  const form = qs('#enquiry-form');
  if (form) {
    const params = new URLSearchParams(location.search);
    const type = form.elements.type; if (type && params.get('type')) type.value = params.get('type');
    const piece = form.elements.piece; if (piece && params.get('piece')) piece.value = params.get('piece');
    const size = form.elements.size; if (size && params.get('size')) size.value = params.get('size');
    form.addEventListener('submit', event => { event.preventDefault(); const status=qs('.form-status',form); status.textContent='Thank you. Your enquiry is ready for our Palermo team, who will reply within two working days.'; form.reset(); });
  }
  qsa('[data-store-address]').forEach(node => node.innerHTML=SERAINE_CONFIG.storeAddress.replaceAll('\n','<br>'));
  const map=qs('[data-store-map]'); if(map) map.src=SERAINE_CONFIG.mapEmbedUrl;
}

function initUtilities() {
  qsa('[data-scroll-top]').forEach(button => button.addEventListener('click', () => scrollTo({top:0,behavior:'smooth'})));
  const floating=qs('.scroll-top');
  if(floating){ const update=()=>{floating.hidden=scrollY<500}; addEventListener('scroll',update,{passive:true}); update(); floating.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'})); }
  const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => entries.forEach(entry => entry.isIntersecting && entry.target.classList.add('is-visible')), {threshold:.08}) : null;
  qsa('.reveal').forEach(node => observer ? observer.observe(node) : node.classList.add('is-visible'));
}

document.addEventListener('DOMContentLoaded', () => {
  renderCatalogues();
  initThemeAndDirection();
  initNavigation();
  initSliders();
  initShopFilters();
  initQuickView();
  initProductDetail();
  initContact();
  initUtilities();
});

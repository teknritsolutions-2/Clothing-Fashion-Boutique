/* SÉRAINE — sample custom-fit inventory and request builder. */
'use strict';

const CUSTOM_FIT_OPTIONS = [
  {id:'mara-shirt',gender:'Women',category:'Blouses',name:'Mara Everyday Blouse',style:'Clean poplin shirt',image:'custom-fits/mara-shirt.webp',alt:'Woman in a complete white cotton shirt and trouser outfit',occasion:'Work',climate:'Warm Days',fits:['Regular','Relaxed','Adjusted sleeve','Adjusted length'],variants:[{material:'Cotton poplin',color:'Soft white',status:'available'},{material:'Washed linen',color:'Sand',status:'limited'}]},
  {id:'iris-dress',gender:'Women',category:'Dresses',name:'Iris Fluid Midi',style:'Easy midi dress',image:'custom-fits/iris-dress.webp',alt:'Woman in a complete burnt-orange midi dress',occasion:'Everyday',climate:'Everyday Weather',fits:['Regular','Relaxed','Petite','Adjusted length'],variants:[{material:'Woven viscose',color:'Burnt orange',status:'available'},{material:'Linen blend',color:'Clay',status:'enquire'}]},
  {id:'kai-trouser-w',gender:'Women',category:'Trousers',name:'Ari Soft Trouser',style:'Relaxed tailored trouser',image:'custom-fits/ari-trouser.webp',alt:'Woman in full-length light tailored trousers with a dark blazer',occasion:'Everyday',climate:'Warm Days',fits:['Straight','Relaxed','Tapered','Adjusted length'],variants:[{material:'Cotton-linen twill',color:'Oat',status:'limited'},{material:'Cotton twill',color:'Charcoal',status:'available'}]},
  {id:'nina-blazer',gender:'Women',category:'Blazers',name:'Nina Longline Blazer',style:'Soft longline layer',image:'custom-fits/nina-blazer.webp',alt:'Woman in a complete camel longline blazer outfit',occasion:'Work',climate:'Everyday Weather',fits:['Regular','Relaxed','Adjusted sleeve'],variants:[{material:'Cotton twill',color:'Camel',status:'available'},{material:'Wool-linen blend',color:'Ink',status:'unavailable'}]},
  {id:'noor-set',gender:'Women',category:'Coordinated Sets',name:'Noor Coordinated Set',style:'Blazer and trouser pairing',image:'custom-fits/noor-set.webp',alt:'Woman in a black blazer with full-length light coordinated trousers',occasion:'Work',climate:'Warm Days',fits:['Regular','Relaxed','Adjusted sleeve','Adjusted trouser length'],variants:[{material:'Linen blend',color:'Black and chalk',status:'limited'},{material:'Cotton twill',color:'Stone',status:'enquire'}]},
  {id:'adrian-shirt',gender:'Men',category:'Shirts',name:'Adrian Linen Shirt',style:'Relaxed open-collar shirt',image:'custom-fits/adrian-shirt.webp',alt:'Man in a complete natural striped linen shirt outfit',occasion:'Weekend',climate:'Warm Days',fits:['Regular','Relaxed','Adjusted sleeve'],variants:[{material:'Washed linen',color:'Natural',status:'available'},{material:'Cotton poplin',color:'Soft blue',status:'limited'}]},
  {id:'kai-trouser',gender:'Men',category:'Trousers',name:'Kai Tailored Trouser',style:'Easy tailored trouser',image:'custom-fits/kai-trouser.webp',alt:'Man in full-length tobacco tailored trousers and matching jacket',occasion:'Work',climate:'Everyday Weather',fits:['Regular','Relaxed','Tapered','Adjusted length'],variants:[{material:'Cotton-linen twill',color:'Tobacco',status:'available'},{material:'Wool blend',color:'Charcoal',status:'unavailable'}]},
  {id:'eli-blazer',gender:'Men',category:'Blazers',name:'Eli Unstructured Blazer',style:'Soft tailored jacket',image:'custom-fits/eli-blazer.webp',alt:'Man wearing a complete dark unstructured blazer',occasion:'Occasion',climate:'Everyday Weather',fits:['Regular','Relaxed','Adjusted sleeve'],variants:[{material:'Wool-linen blend',color:'Ink',status:'limited'},{material:'Cotton twill',color:'Stone',status:'available'}]},
  {id:'sam-suit',gender:'Men',category:'Suits',name:'Sam Occasion Suit',style:'Two-piece occasion suit',image:'custom-fits/sam-suit.webp',alt:'Man in a complete navy two-piece occasion suit',occasion:'Occasion',climate:'Everyday Weather',fits:['Regular','Tapered','Adjusted sleeve','Adjusted trouser length'],variants:[{material:'Wool blend',color:'Navy',status:'available'},{material:'Linen blend',color:'Ivory',status:'enquire'}]},
  {id:'river-overshirt',gender:'Men',category:'Overshirts',name:'River Denim Overshirt',style:'Relaxed utility layer',image:'custom-fits/river-overshirt.webp',alt:'Person in a complete washed-blue denim overshirt and trouser outfit',occasion:'Everyday',climate:'Cool Days',fits:['Regular','Relaxed','Adjusted sleeve'],variants:[{material:'Soft cotton denim',color:'Washed blue',status:'available'},{material:'Brushed cotton',color:'Slate',status:'limited'}]}
];

const STATUS_COPY = {
  available:['Available','Available to include in an online request.'],
  limited:['Limited','A small sample allocation may be available; confirmation is required.'],
  unavailable:['Unavailable','This variant cannot be requested online right now.'],
  enquire:['Enquire','Ask the boutique to confirm this variant before proceeding.']
};

const cqs = (selector, scope=document) => scope.querySelector(selector);
const cqsa = (selector, scope=document) => [...scope.querySelectorAll(selector)];
const safe = value => String(value).replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
const customImage = file => `../assets/images/${file}`;

function enquiryURL(item, variant, intent='Store visit') {
  const params = new URLSearchParams({type:intent,piece:item.name,message:`Custom Fits reference: ${item.name}; ${variant.material}; ${variant.color}. Please confirm availability and fit options.`});
  return `contact.html?${params.toString()}#enquiry`;
}

function initCustomFits() {
  const grid=cqs('#custom-fit-grid');
  if (!grid) return;
  const genderButtons=cqsa('[data-custom-gender]');
  const filters=cqs('#custom-fit-filters');
  const count=cqs('#custom-fit-count');
  let gender='Women';

  const selected = name => filters.elements[name]?.value || '';
  const candidates = () => CUSTOM_FIT_OPTIONS.filter(item => item.gender === gender);
  const refreshOptions = () => {
    ['category','material','occasion','climate'].forEach(name => {
      const select=filters.elements[name]; const current=select.value;
      const values=[...new Set(candidates().flatMap(item => name === 'material' ? item.variants.map(v => v.material) : [item[name]]))].sort();
      select.innerHTML=`<option value="">All ${name === 'category' ? 'clothing types' : `${name}s`}</option>${values.map(value=>`<option>${safe(value)}</option>`).join('')}`;
      if (values.includes(current)) select.value=current;
    });
  };
  const render = () => {
    const items=candidates().filter(item => (!selected('category') || item.category===selected('category')) && (!selected('material') || item.variants.some(v=>v.material===selected('material'))) && (!selected('occasion') || item.occasion===selected('occasion')) && (!selected('climate') || item.climate===selected('climate')));
    grid.innerHTML=items.map(item => {
      const variant=item.variants.find(v => !selected('material') || v.material===selected('material')) || item.variants[0];
      const [label,description]=STATUS_COPY[variant.status]; const requestable=['available','limited'].includes(variant.status);
      return `<article class="custom-card reveal" data-custom-card="${item.id}"><div class="custom-card-media"><img src="${customImage(item.image)}" alt="${safe(item.alt)}" width="1200" height="1500" loading="lazy" decoding="async"><span class="availability availability--${variant.status}" data-status-label>${label}</span></div><div class="custom-card-copy"><p class="custom-card-kicker">${item.gender} · ${item.category}</p><h3>${safe(item.name)}</h3><p>${safe(item.style)}</p><label>Material and colour<select data-variant>${item.variants.map((v,index)=>`<option value="${index}" ${v===variant?'selected':''}>${safe(v.material)} · ${safe(v.color)}</option>`).join('')}</select></label><dl><div><dt>Climate</dt><dd>${safe(item.climate)}</dd></div><div><dt>Occasion</dt><dd>${safe(item.occasion)}</dd></div><div><dt>Fit options</dt><dd>${safe(item.fits.join(', '))}</dd></div><div><dt>Availability</dt><dd data-status-copy>${safe(description)}</dd></div></dl><div class="custom-card-actions"><button class="button" type="button" data-order-custom ${requestable?'':'disabled'}>Order request</button><a class="button secondary" data-visit-custom href="${enquiryURL(item,variant,requestable?'Store visit':'Custom fit')}">${requestable?'Visit store':'Availability enquiry'}</a></div></div></article>`;
    }).join('') || '<p class="custom-empty">No sample options match these filters. Clear a filter or switch collection.</p>';
    count.textContent=`Showing ${items.length} of ${candidates().length} sample options`;
    bindCards();
    if (window.IntersectionObserver && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}}),{threshold:.08});
      cqsa('.custom-card',grid).forEach((card,index)=>{card.style.setProperty('--reveal-delay',`${(index%3)*90}ms`);observer.observe(card);});
    } else cqsa('.custom-card',grid).forEach(card=>card.classList.add('is-visible'));
  };
  const bindCards = () => cqsa('[data-custom-card]',grid).forEach(card => {
    const item=CUSTOM_FIT_OPTIONS.find(option=>option.id===card.dataset.customCard); const select=cqs('[data-variant]',card);
    const update=()=>{const variant=item.variants[+select.value]; const [label,description]=STATUS_COPY[variant.status]; const badge=cqs('[data-status-label]',card); badge.textContent=label; badge.className=`availability availability--${variant.status}`; cqs('[data-status-copy]',card).textContent=description; const requestable=['available','limited'].includes(variant.status); const order=cqs('[data-order-custom]',card); order.disabled=!requestable; const visit=cqs('[data-visit-custom]',card); visit.textContent=requestable?'Visit store':'Availability enquiry'; visit.href=enquiryURL(item,variant,requestable?'Store visit':'Custom fit');};
    select.addEventListener('change',update);
    cqs('[data-order-custom]',card).addEventListener('click',()=>openRequest(item,item.variants[+select.value]));
  });
  genderButtons.forEach(button=>button.addEventListener('click',()=>{gender=button.dataset.customGender;genderButtons.forEach(item=>item.setAttribute('aria-pressed',String(item===button)));filters.reset();refreshOptions();render();}));
  filters.addEventListener('change',render);
  filters.addEventListener('reset',()=>setTimeout(()=>{refreshOptions();render();}));
  refreshOptions(); render();
}

function openRequest(item,variant) {
  const dialog=cqs('#custom-request-dialog'); const form=cqs('#custom-request-form'); const review=cqs('#custom-request-review'); const status=cqs('#custom-request-status');
  form.reset(); form.hidden=false; review.hidden=true; status.hidden=true;
  form.elements.garment.value=item.name; form.elements.category.value=`${item.gender} · ${item.category}`; form.elements.material.value=variant.material; form.elements.styleColor.value=`${item.style} · ${variant.color}`;
  dialog.dataset.item=item.id; dialog.dataset.variant=String(item.variants.indexOf(variant)); dialog.showModal();
}

function initCustomRequest() {
  const dialog=cqs('#custom-request-dialog'); if (!dialog) return;
  const form=cqs('#custom-request-form'); const review=cqs('#custom-request-review'); const status=cqs('#custom-request-status');
  const summaryFor = data => [`SÉRAINE custom-fit request (not sent)`,`Garment: ${data.get('garment')}`,`Category: ${data.get('category')}`,`Material: ${data.get('material')}`,`Style / colour: ${data.get('styleColor')}`,`Size: ${data.get('size')}`,`Fit notes: ${data.get('fitNotes')}`,`Name: ${data.get('name')}`,`Email: ${data.get('email')}`,`Phone: ${data.get('phone') || 'Not provided'}`,`Visit preference: ${data.get('visitPreference') || 'Not specified'}`,`Preferred visit date: ${data.get('visitDate') || 'Not specified'}`,``,`Sample inventory only. Final fabric, fit and availability require boutique confirmation.`].join('\n');
  form.addEventListener('submit',event=>{event.preventDefault();if(!form.reportValidity())return;const data=new FormData(form);const summary=summaryFor(data);review.innerHTML=`<p class="eyebrow">REVIEW YOUR REQUEST</p><h3>Check every detail before continuing.</h3><dl>${[['Garment',data.get('garment')],['Category',data.get('category')],['Material',data.get('material')],['Style / colour',data.get('styleColor')],['Size',data.get('size')],['Fit notes',data.get('fitNotes')],['Contact',`${data.get('name')} · ${data.get('email')}${data.get('phone')?` · ${data.get('phone')}`:''}`],['Visit preference',`${data.get('visitPreference')||'None'}${data.get('visitDate')?` · ${data.get('visitDate')}`:''}`]].map(([key,value])=>`<div><dt>${safe(key)}</dt><dd>${safe(value)}</dd></div>`).join('')}</dl><p class="request-disclaimer">This website cannot place an order or take payment. Continuing prepares a request that still needs boutique confirmation.</p><div class="dialog-actions"><button class="button secondary" type="button" data-edit-request>Back to edit</button><button class="button" type="button" data-confirm-request>Confirm request details</button></div>`;review.dataset.summary=summary;form.hidden=true;review.hidden=false;cqs('[data-edit-request]',review).addEventListener('click',()=>{review.hidden=true;form.hidden=false;});cqs('[data-confirm-request]',review).addEventListener('click',()=>{review.hidden=true;status.hidden=false;status.innerHTML='<p class="eyebrow">REQUEST PREPARED — NOT SENT</p><h3>Your details are ready to share.</h3><p>No order, payment or appointment has been created. Copy the summary and send it through a confirmed boutique contact channel, or bring it to the store.</p><div class="dialog-actions"><button class="button" type="button" data-copy-request>Copy request</button><a class="button secondary" href="contact.html?type=Custom%20fit#enquiry">Continue to contact</a></div><p class="copy-feedback" role="status" aria-live="polite"></p>';cqs('[data-copy-request]',status).addEventListener('click',async()=>{try{await navigator.clipboard.writeText(summary);cqs('.copy-feedback',status).textContent='Request copied. It has not been sent.';}catch(_){cqs('.copy-feedback',status).textContent='Copy was unavailable. No request has been sent.';}});});});
  cqsa('[data-close-custom]').forEach(button=>button.addEventListener('click',()=>dialog.close()));
  dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});
}

document.addEventListener('DOMContentLoaded',()=>{initCustomFits();initCustomRequest();});

// Static site generator for DXB Incorp. Run: node build.mjs
// Content lives in src/content.mjs and comes only from the live dxbincorp.com site.
import { writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { PRICING, SITE, HERO, ABOUT, NEED_HELP, OFFICES, TYPES, HOME_CARDS, WHY_UAE, ZONES, SERVICES } from './src/content.mjs';

const h = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const wa = msg => SITE.wa + encodeURIComponent(msg);
const clip = (s, n = 155) => (s.length <= n ? s : s.slice(0, n).replace(/\s\S*$/, '') + '…');
const FAVICON = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' rx='9' fill='%23d6ad60'/%3E%3Cpath d='M9 29 20 9l11 20h-5.2L20 18.4 14.2 29H9Z' fill='%2309121a'/%3E%3C/svg%3E";
const pages = [];

// optional hero background video: drop a clip at assets/hero.mp4 (or hero.webm) and rebuild
const HERO_VIDEO = ['assets/hero.mp4', 'assets/hero.webm'].find(f => existsSync(f)) || '';

// photos live in assets/photos: lazy card images, plus a full-width photo behind every inner-page header
const photo = (b, file, cls, w, h) => `<img class="${cls}" src="${b}assets/photos/${file}" alt="" width="${w}" height="${h}" loading="lazy">`;
const TYPE_PHOTOS = { 'mainland-companies': 'mainland.jpg', 'free-zone-companies': 'freezone-aerial.jpg', 'holding-companies-offshore': 'offshore.jpg' };

/* ---------- layout ---------- */
function layout({ file, title, desc, body, active = '', ld = '' }) {
  const depth = file.split('/').length - 1;
  const b = '../'.repeat(depth);
  const url = SITE.url + '/' + (file === 'index.html' ? '' : file);
  const link = (href, label, key) => `<a href="${b}${href}"${active === key ? ' aria-current="page"' : ''}>${label}</a>`;
  const TYPE_ICONS = {
    'mainland-companies': 'M3 21V8l9-5 9 5v13M9 21v-6h6v6M3 21h18',
    'free-zone-companies': 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18',
    'holding-companies-offshore': 'M3 8c3-3 6 3 9 0s6-3 9 0M3 14c3-3 6 3 9 0s6-3 9 0M3 20c3-3 6 3 9 0s6-3 9 0',
  };
  const mi = d => `<span class="mi"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="${d}"/></svg></span>`;
  const typeLinks = TYPES.map(t => `<a href="${b}${t.slug}.html"${file === t.slug + '.html' ? ' aria-current="page"' : ''}>${mi(TYPE_ICONS[t.slug])}<span>${h(t.label)}</span></a>`).join('');
  const svcLinks = SERVICES.map(s => `<a href="${b}our-services/${s.slug}.html"${file === 'our-services/' + s.slug + '.html' ? ' aria-current="page"' : ''}>${mi(s.icon)}<span>${h(s.title)}</span></a>`).join('');
  const megaCurrent = active === 'types' || active === 'services';
  const mega = `<div class="mega">
        <button class="mega-btn${megaCurrent ? ' is-current' : ''}" type="button" aria-expanded="false" aria-controls="megaPanel">Services<svg class="chev" viewBox="0 0 12 12" aria-hidden="true"><path d="M2 4.5 6 8.5l4-4"/></svg></button>
        <div class="mega-panel" id="megaPanel">
          <div class="wrap mega-in">
            <div class="mega-col">
              <p class="mega-h">Company Types</p>
              <p class="mega-sub">Consultancy &amp; formation of new companies</p>
              <div class="mega-links">${typeLinks}</div>
            </div>
            <div class="mega-col mega-wide">
              <p class="mega-h">Other Services</p>
              <div class="mega-links two">${svcLinks}</div>
            </div>
            <div class="mega-cta">
              <p class="mega-h">Book your Consultation Now</p>
              <p>${h(NEED_HELP.h)}</p>
              <a class="btn btn-gold btn-block" href="${b}contact-us.html">${h(NEED_HELP.cta)}</a>
              <a class="mega-phone" href="tel:${SITE.tel}">${SITE.phone}</a>
              <a class="mega-all" href="${b}our-services.html">View all services →</a>
            </div>
          </div>
        </div>
      </div>`;
  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${h(title)}</title>
<meta name="description" content="${h(desc)}">
<link rel="canonical" href="${url}">
<meta name="theme-color" content="#09121a">
<meta property="og:title" content="${h(title)}">
<meta property="og:description" content="${h(desc)}">
<meta property="og:type" content="website">
<meta property="og:url" content="${url}">
<link rel="icon" href="${FAVICON}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${b}styles.css">
${ld}
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<div class="topbar">
  <div class="wrap topbar-in">
    <span class="topbar-loc">Dubai · Sharjah · Abu Dhabi · Karachi · London · Labuan</span>
    <span class="topbar-links">
      <a href="tel:${SITE.tel}">${SITE.phone}</a>
      <a href="mailto:${SITE.email}">${SITE.email}</a>
    </span>
  </div>
</div>
<header class="header">
  <div class="wrap header-in">
    <a class="brand" href="${b}index.html" aria-label="DXB Incorp home"><img src="${b}assets/logo-nav.png" width="200" height="49" alt="DXB Incorp"></a>
    <nav class="nav" id="nav" aria-label="Main">
      ${link('index.html', 'Home', 'home')}
      ${link('about-us.html', 'About us', 'about')}
      ${link('why-uae.html', 'Why UAE?', 'why')}
      ${mega}
      ${link('contact-us.html', 'Contact us', 'contact')}
      <a class="btn btn-gold nav-cta" href="${b}contact-us.html">Free consultation</a>
    </nav>
    <button class="menu-btn" id="menuBtn" type="button" aria-expanded="false" aria-controls="nav" aria-label="Open menu"><span class="bar bar-top"></span><span class="bar bar-bot"></span></button>
  </div>
</header>
<main id="main">
${body(b)}
</main>
<section class="cta">
  <div class="wrap cta-in">
    <div><h2>${h(NEED_HELP.h)}</h2><p>${h(NEED_HELP.p)}</p></div>
    <a class="btn btn-dark" href="${b}contact-us.html">${h(NEED_HELP.cta)}</a>
  </div>
</section>
<footer class="footer">
  <div class="wrap foot-grid">
    <div class="foot-brand">
      <a class="logo-chip" href="${b}index.html" aria-label="DXB Incorp home"><img src="${b}assets/logo.png" width="170" height="42" alt="DXB Incorp"></a>
      <p>${h(ABOUT.lead)}</p>
    </div>
    <div>
      <h3>Company</h3>
      <a href="${b}about-us.html">About us</a><a href="${b}why-uae.html">Why UAE?</a><a href="${b}contact-us.html">Contact us</a>
    </div>
    <div>
      <h3>Company types</h3>
      ${TYPES.map(t => `<a href="${b}${t.slug}.html">${h(t.title)}</a>`).join('')}
      <a href="${b}our-services.html">Our Services</a>
    </div>
    <div>
      <h3>Contact</h3>
      <a href="tel:${SITE.tel}">${SITE.phone}</a>
      <a href="mailto:${SITE.email}">${SITE.email}</a>
      <span class="foot-addr">${h(SITE.head)}</span>
    </div>
  </div>
  <div class="wrap foot-base">
    <span>© <span id="yr">2026</span> DXB Incorp. All rights reserved.</span>
    <span>Dubai · Sharjah · Abu Dhabi · Karachi · London · Labuan</span>
  </div>
</footer>
<div class="fab" id="fab">
  <div class="fab-menu" id="fabMenu" hidden>
    <a href="${wa('Hello DXB Incorp, I would like a consultation.')}" target="_blank" rel="noopener">WhatsApp</a>
    <a href="tel:${SITE.tel}">Call us</a>
    <a href="${b}contact-us.html">Contact us</a>
  </div>
  <button class="fab-btn" id="fabBtn" aria-expanded="false" aria-controls="fabMenu" aria-label="Contact us">
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16v11H9l-5 4z"/></svg>
  </button>
</div>
<script src="${b}script.js"></script>
</body>
</html>
`;
  pages.push(file);
  const dir = file.includes('/') ? file.slice(0, file.lastIndexOf('/')) : '';
  if (dir) mkdirSync(dir, { recursive: true });
  writeFileSync(file, html);
}

/* ---------- helpers ---------- */
// header photo for every inner page (services rotate through the sharp 1800px+ photos)
const NIGHT = 'dubai-night.jpg';
const CYCLE = [NIGHT, 'free-zone.jpg', 'about-us.jpg'];
const HERO_PHOTO = { 'about-us': 'about-us.jpg', 'why-uae': NIGHT, 'free-zone-companies': 'freezone-aerial.jpg', 'mainland-companies': 'mainland.jpg', 'holding-companies-offshore': 'offshore.jpg', 'contact-us': NIGHT };
SERVICES.forEach((sv, i) => { HERO_PHOTO[sv.slug] = CYCLE[i % CYCLE.length]; });

// tagline under the page title (other pages repeat their intro text just below, so they get none)
const TAGLINES = { 'why-uae': 'A global hub for business, innovation, and lucrative opportunities.' };
// decorative gold curves (drawn in on load)
const ARCS = `<svg class="ph-arcs" viewBox="0 0 1600 440" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
    <path pathLength="1" d="M-40 230C40 90 170 10 340 -30"/>
    <path pathLength="1" d="M-40 360C110 430 300 450 540 440"/>
    <path class="thin" pathLength="1" d="M560 420C800 130 1180 50 1640 180"/>
  </svg>`;
const goldLast = t => { const w = String(t).trim().split(' '); const last = w.pop(); return (w.length ? h(w.join(' ')) + ' ' : '') + `<span class="gold">${h(last)}</span>`; };
const pageHero = (b, crumbs, h1, art) => `
<section class="page-hero has-bg${/aerial|mainland/.test(HERO_PHOTO[art]) ? ' is-bright' : ''}">
  <img class="ph-bg" src="${b}assets/photos/${HERO_PHOTO[art]}" alt="" width="1920" height="1080" fetchpriority="high" decoding="async">
  ${ARCS}
  <div class="wrap">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="${b}index.html">Home</a>${crumbs.map(c => ` <span>/</span> ${c.href ? `<a href="${b}${c.href}">${h(c.label)}</a>` : `<span aria-current="page">${h(c.label)}</span>`}`).join('')}</nav>
    <h1>${goldLast(h1)}</h1>
    ${TAGLINES[art] ? `<p class="lead">${h(TAGLINES[art])}</p>` : ''}
    <span class="ph-rule" aria-hidden="true"></span>
    <div class="hero-actions"><a class="btn btn-gold btn-arrow" href="${b}contact-us.html">Book your Consultation Now<span class="arr" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 12h13M13 6l6 6-6 6"/></svg></span></a></div>
  </div>
</section>`;

const icon = d => `<span class="ico"><svg viewBox="0 0 24 24"><path d="${d}"/></svg></span>`;

function renderBlocks(list) {
  return list.map(([k, a, c]) => {
    switch (k) {
      case 'p': return `<p>${h(a)}</p>`;
      case 'note': return `<p class="callout" role="note">${h(a)}</p>`;
      case 'h2': return `<h2>${h(a)}</h2>`;
      case 'h3': return `<h3>${h(a)}</h3>`;
      case 'ul': return `<ul class="ticks">${a.map(i => `<li>${h(i)}</li>`).join('')}</ul>`;
      case 'defs': return `<ul class="defs">${a.map(([t, x]) => `<li><strong>${h(t)}</strong><span>${h(x)}</span></li>`).join('')}</ul>`;
      case 'steps': return `<ol class="steps-list">${a.map(([t, x]) => `<li><strong>${h(t)}</strong><span>${h(x)}</span></li>`).join('')}</ol>`;
      case 'reqs': return `<div class="reqs-grid">${a.map(([t, items]) => `<article class="req"><h4>${h(t)}</h4><ol>${items.map(i => `<li>${h(i)}</li>`).join('')}</ol></article>`).join('')}</div>`;
      case 'types': return a.map(([t, inner]) => `<article class="type-card"><h4>${h(t)}</h4>${renderBlocks(inner)}</article>`).join('');
      default: return '';
    }
  }).join('\n');
}

const sidebar = (b, kind, currentSlug = '') => {
  const list = kind === 'services'
    ? SERVICES.filter(x => x.slug !== currentSlug).map(x => `<li><a href="${b}our-services/${x.slug}.html">${h(x.title)}</a></li>`).join('')
    : TYPES.filter(x => x.slug !== currentSlug).map(x => `<li><a href="${b}${x.slug}.html">${h(x.title)}</a></li>`).join('');
  return `
    <aside class="svc-side">
      <div class="side-card">
        <h3>Book your Consultation Now</h3>
        <p>${h(NEED_HELP.h)}</p>
        <a class="btn btn-gold btn-block" href="${b}contact-us.html">${h(NEED_HELP.cta)}</a>
        <a class="btn btn-dark btn-block" href="tel:${SITE.tel}">${SITE.phone}</a>
      </div>
      <div class="side-card plain">
        <h3>${kind === 'services' ? 'Other services' : 'Company types'}</h3>
        <ul class="side-links">${list}</ul>
      </div>
    </aside>`;
};

const contentPage = (b, kind, currentSlug, inner) => `
<section class="section paper">
  <div class="wrap svc-layout">
    <article class="svc-main prose">${inner}</article>
    ${sidebar(b, kind, currentSlug)}
  </div>
</section>`;

const cardsServices = b => SERVICES.map(s => `
      <a class="card" href="${b}our-services/${s.slug}.html">${icon(s.icon)}<h3>${h(s.title)}</h3><p>${h(s.short)}</p><span class="more">Read more →</span></a>`).join('');

const serviceOptions = [...TYPES.map(t => t.title), ...SERVICES.map(s => s.title)].map(o => `<option>${h(o)}</option>`).join('');
const contactForm = () => `
    <form class="form" id="contactForm" novalidate>
      <label>Full name<input name="name" type="text" autocomplete="name" required></label>
      <label>Email<input name="email" type="email" autocomplete="email" required></label>
      <label>Phone / WhatsApp<input name="phone" type="tel" autocomplete="tel"></label>
      <label>What do you need?<select name="need">${serviceOptions}</select></label>
      <label>Message<textarea name="message" rows="4"></textarea></label>
      <button class="btn btn-gold btn-block" type="submit">Book your Consultation Now</button>
      <p class="form-note" id="formNote" role="status"></p>
    </form>`;

/* ---------- home ---------- */
layout({
  file: 'index.html', active: 'home',
  title: 'Company Incorporation Services in Dubai, UAE | DXB Incorp',
  desc: `${HERO.sub} ${ABOUT.lead}`,
  ld: `<script type="application/ld+json">${JSON.stringify({
    '@context': 'https://schema.org', '@type': 'ProfessionalService', name: 'DXB Incorp', url: SITE.url + '/',
    logo: SITE.url + '/assets/logo.png', telephone: SITE.tel, email: SITE.email, description: HERO.sub,
    address: { '@type': 'PostalAddress', streetAddress: 'Suite 1002, New Century City Tower, Port Saeed, Deira', addressLocality: 'Dubai', addressCountry: 'AE' },
  })}</script>`,
  body: b => `
<section class="hero" id="top">
  <div class="hero-bg" aria-hidden="true">
    <img class="hero-photo" src="${b}assets/hero-dubai.jpg" alt="" width="1866" height="1400" fetchpriority="high" decoding="async">
    ${HERO_VIDEO ? `<video class="hero-video" src="${b}${HERO_VIDEO}" autoplay muted loop playsinline preload="auto" tabindex="-1"></video>` : ''}
  </div>
  <div class="wrap hero-grid">
    <div class="hero-copy">
      <p class="eyebrow">DXBINCORP · Dubai, UAE</p>
      <h1>${h(HERO.h1)}</h1>
      <p class="lead">${h(HERO.sub)}</p>
      <div class="hero-actions">
        <a class="btn btn-gold" href="${b}contact-us.html">${h(HERO.cta)}</a>
        <a class="btn btn-ghost" href="${wa('Hello DXB Incorp, I would like a consultation.')}" target="_blank" rel="noopener">Chat on WhatsApp</a>
      </div>
    </div>
    <aside class="quote" aria-labelledby="pkgTitle">
      <p class="quote-tag">Company Types</p>
      <h2 id="pkgTitle">Consultancy &amp; formation of new companies</h2>
      <ul class="pkg-list">
        ${TYPES.map(t => `<li><a href="${b}${t.slug}.html"><strong>${h(t.label)}</strong><span>→</span></a></li>`).join('')}
      </ul>
      <a class="btn btn-gold btn-block" href="${b}contact-us.html">Request for free Consultation</a>
    </aside>
  </div>
</section>

<section class="section paper">
  <div class="wrap">
    <div class="trio">
      <article class="trio-card">${photo(b, 'about-us.jpg', 'trio-img', 1200, 900)}<span class="num dark">01</span><h3>${h(HOME_CARDS.about.title)}</h3>${HOME_CARDS.about.text.map(t => `<p>${h(t)}</p>`).join('')}<a class="more dark" href="${b}about-us.html">Read more →</a></article>
      <article class="trio-card">${photo(b, 'why-uae.jpg', 'trio-img', 1200, 900)}<span class="num dark">02</span><h3>${h(HOME_CARDS.why.title)}</h3>${HOME_CARDS.why.text.map(t => `<p>${h(t)}</p>`).join('')}<a class="more dark" href="${b}why-uae.html">Read more →</a></article>
      <article class="trio-card">${photo(b, 'free-zone.jpg', 'trio-img', 1200, 900)}<span class="num dark">03</span><h3>${h(HOME_CARDS.zones.title)}</h3>${HOME_CARDS.zones.text.map(t => `<p>${h(t)}</p>`).join('')}<a class="more dark" href="${b}free-zone-companies.html">Read more →</a></article>
    </div>
  </div>
</section>

<section class="section pricing" id="packages" aria-labelledby="pricingTitle">
  <div class="wrap">
    <div class="pricing-head">
      <p class="eyebrow">${h(PRICING.sub)}</p>
      <h2 id="pricingTitle">${h(PRICING.title)}</h2>
    </div>
    <div class="plans">
      ${PRICING.plans.map((p, i) => `<article class="plan${i === PRICING.plans.length - 1 ? ' plan-feat' : ''}">
        <h3>${h(p.name)}</h3>
        <p class="plan-price">${h(p.price)}</p>
        <p class="plan-get">${h(PRICING.get)}</p>
        <ul class="ticks">${p.items.map(it => `<li>${h(it)}</li>`).join('')}</ul>
      </article>`).join('\n      ')}
    </div>
    <div class="pricing-foot">
      <p class="pricing-call">${h(PRICING.call)} <a href="tel:${SITE.tel}">${SITE.phone}</a></p>
      <a class="btn btn-gold" href="${b}contact-us.html">${h(PRICING.cta)}</a>
    </div>
  </div>
</section>

<section class="section band">
  <div class="wrap">
    <div class="sec-head">
      <div><p class="eyebrow">Company Types</p><h2>Consultancy &amp; formation of new companies</h2></div>
      <p>Request for free Consultation.</p>
    </div>
    <div class="pkg-grid">
      ${TYPES.map(t => `<a class="card" href="${b}${t.slug}.html">${photo(b, TYPE_PHOTOS[t.slug], 'card-img', 1200, 800)}<h3>${h(t.label)}</h3><p>${h(t.teaser)}</p><span class="more">Read more →</span></a>`).join('')}
    </div>
  </div>
</section>

<section class="section" id="services">
  <div class="wrap">
    <div class="sec-head">
      <div><p class="eyebrow">Other Services</p><h2>Business Services We Offer</h2></div>
      <p>${h(NEED_HELP.p)}</p>
    </div>
    <div class="cards">${cardsServices(b)}
    </div>
  </div>
</section>`,
});

/* ---------- about / why uae ---------- */
layout({
  file: 'about-us.html', active: 'about',
  title: 'About us | DXB Incorporation', desc: `${ABOUT.lead} ${ABOUT.body}`.slice(0, 155),
  body: b => `${pageHero(b, [{ label: 'About us' }], 'About us', 'about-us')}
${contentPage(b, 'types', '', `<p class="big">${h(ABOUT.lead)}</p><p>${h(ABOUT.body)}</p><h2>${h(NEED_HELP.h)}</h2><p>${h(NEED_HELP.p)}</p><a class="btn btn-dark" href="${b}contact-us.html">${h(NEED_HELP.cta)}</a>`)}`,
});

layout({
  file: 'why-uae.html', active: 'why',
  title: 'Why UAE? - DXBINCORP', desc: clip(WHY_UAE[0]),
  body: b => `${pageHero(b, [{ label: 'Why UAE?' }], 'Why UAE?', 'why-uae')}
${contentPage(b, 'types', '', WHY_UAE.map(t => `<p>${h(t)}</p>`).join(''))}`,
});

/* ---------- company types ---------- */
for (const t of TYPES) {
  if (t.slug === 'free-zone-companies') continue; // custom page below
  layout({
    file: `${t.slug}.html`, active: 'types',
    title: `${t.title} formation in Dubai | DXB Incorporation`, desc: t.desc,
    body: b => `${pageHero(b, [{ label: t.title }], t.title, t.slug)}
${contentPage(b, 'types', t.slug, `<h2>${h(t.h2)}</h2>${renderBlocks(t.blocks)}`)}`,
  });
}

const fz = TYPES.find(t => t.slug === 'free-zone-companies');
layout({
  file: 'free-zone-companies.html', active: 'types',
  title: 'Free Zone Company formation in Dubai | DXB Incorporation', desc: fz.desc,
  body: b => `${pageHero(b, [{ label: fz.title }], fz.title, fz.slug)}
${contentPage(b, 'types', fz.slug, `<h2>${h(fz.h2)}</h2>${renderBlocks(fz.blocks)}`)}
<section class="section" id="list">
  <div class="wrap">
    <div class="sec-head"><div><p class="eyebrow">Directory</p><h2>List of Free Zone Companies in UAE</h2></div>
      <label class="search">Search free zones<input id="zoneSearch" type="search" placeholder="Name, region or activity" autocomplete="off"></label></div>
    <div class="table-wrap">
      <table class="compare zones-table" id="zoneTable">
        <thead><tr><th>#</th><th>Free zone</th><th>Region</th><th>Main activity type</th></tr></thead>
        <tbody>${ZONES.map((z, i) => `<tr><td>${i + 1}</td><th scope="row">${h(z[0])}</th><td>${h(z[1] || '—')}</td><td>${h(z[2] || '—')}</td></tr>`).join('')}</tbody>
      </table>
    </div>
    <p class="zones-note" id="zoneCount" role="status">${ZONES.length} free zones</p>
  </div>
</section>`,
});

/* ---------- services ---------- */
layout({
  file: 'our-services.html', active: 'services',
  title: 'Our Services | DXB Incorporation', desc: 'Business Services We Offer: company incorporation, liquidation, Golden Visa, PRO, ESR, VAT and corporate tax, UBO, audit, IT software, GRC, accounting and AML & CFT.',
  body: b => `${pageHero(b, [{ label: 'Our Services' }], 'Business Services We Offer', 'company-incorporation')}
<section class="section"><div class="wrap"><div class="cards">${cardsServices(b)}</div></div></section>`,
});

for (const s of SERVICES) {
  layout({
    file: `our-services/${s.slug}.html`, active: 'services',
    title: `${s.title} in Dubai, UAE | DXB Incorporation`, desc: clip(s.short),
    body: b => `${pageHero(b, [{ label: 'Our Services', href: 'our-services.html' }, { label: s.title }], s.title, s.slug)}
${contentPage(b, 'services', s.slug, `<h2>${h(s.h2)}</h2>${renderBlocks(s.blocks)}`)}`,
  });
}

/* ---------- contact ---------- */
layout({
  file: 'contact-us.html', active: 'contact',
  title: 'Contact us | DXB Incorporation', desc: 'Book your consultation now. Call +971 54 722 9600 or email sarmad@dxbincorp.com. Offices in Dubai, Sharjah, Abu Dhabi, Karachi, London and Labuan.',
  body: b => `${pageHero(b, [{ label: 'Contact us' }], 'Contact Us', 'contact-us')}
<section class="section">
  <div class="wrap contact-grid">
    <div>
      <p class="eyebrow">Get in touch</p><h2>Book Your Consultation Now</h2>
      <ul class="contact-list">
        <li><span>Contact Number</span><a href="tel:${SITE.tel}">${SITE.phone}</a></li>
        <li><span>Email</span><a href="mailto:${SITE.email}">${SITE.email}</a></li>
        <li><span>Office Address</span>${h(SITE.head)}</li>
      </ul>
      <a class="btn btn-ghost" href="${wa('Hello DXB Incorp, I would like a consultation.')}" target="_blank" rel="noopener">Chat on WhatsApp</a>
    </div>
    ${contactForm()}
  </div>
</section>
<section class="section band">
  <div class="wrap">
    <div class="sec-head"><div><p class="eyebrow">Our Offices</p><h2>Our Offices</h2></div><p></p></div>
    <ul class="offices-grid">${OFFICES.map(o => `<li><strong>${h(o.city)}</strong><span>${h(o.addr)}</span></li>`).join('')}</ul>
  </div>
</section>`,
});

/* ---------- 404 ---------- */
layout({
  file: '404.html', title: 'Page not found | DXB Incorp', desc: 'The page you are looking for could not be found.',
  body: b => `<section class="page-hero"><div class="wrap"><h1>Page not found</h1><p class="lead">That page does not exist or has moved.</p>
<div class="hero-actions"><a class="btn btn-gold" href="${b}index.html">Go home</a><a class="btn btn-ghost" href="${b}our-services.html">Our Services</a><a class="btn btn-ghost" href="${b}contact-us.html">Contact us</a></div></div></section>`,
});

/* ---------- sitemap + robots ---------- */
const urls = pages.filter(p => p !== '404.html').map(p => `  <url><loc>${SITE.url}/${p === 'index.html' ? '' : p}</loc></url>`).join('\n');
writeFileSync('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
writeFileSync('robots.txt', `User-agent: *\nAllow: /\nSitemap: ${SITE.url}/sitemap.xml\n`);
console.log(`Built ${pages.length} pages`);

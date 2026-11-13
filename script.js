(function () {
  var d = document;
  var $ = function (id) { return d.getElementById(id); };
  var calm = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Mobile menu
  var menuBtn = $('menuBtn'), nav = $('nav');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', open);
      menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      menuBtn.classList.toggle('is-open', open);
    });
  }

  // Navbar: transparent at the top, glass backing once the page is scrolled
  var hdr = d.querySelector('.header');
  if (hdr) {
    var onScroll = function () { hdr.classList.toggle('is-scrolled', window.scrollY > 30); };
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  }

  // Mega menu: opens on hover/focus (CSS) and on click/tap (this script)
  var mega = d.querySelector('.mega'), megaBtn = mega && mega.querySelector('.mega-btn');
  function setMega(open) {
    mega.classList.toggle('open', open);
    megaBtn.setAttribute('aria-expanded', open);
  }
  if (mega) {
    megaBtn.addEventListener('click', function () { setMega(!mega.classList.contains('open')); });
    d.addEventListener('click', function (e) { if (!mega.contains(e.target)) setMega(false); });
    d.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mega.classList.contains('open')) { setMega(false); megaBtn.focus(); }
    });
    mega.addEventListener('mouseleave', function () { if (window.innerWidth > 1000) setMega(false); });
  }

  // Floating contact launcher
  var fab = $('fab'), fabBtn = $('fabBtn'), fabMenu = $('fabMenu');
  function setFab(open) { fabMenu.hidden = !open; fabBtn.setAttribute('aria-expanded', open); }
  if (fab) {
    fabBtn.addEventListener('click', function () { setFab(fabMenu.hidden); });
    d.addEventListener('click', function (e) { if (!fab.contains(e.target)) setFab(false); });
    d.addEventListener('keydown', function (e) { if (e.key === 'Escape') setFab(false); });
  }

  // Free zone search
  var search = $('zoneSearch');
  if (search) search.addEventListener('input', function () {
    var q = search.value.trim().toLowerCase(), n = 0;
    [].forEach.call(d.querySelectorAll('#zoneTable tbody tr'), function (tr) {
      var hit = !q || tr.textContent.toLowerCase().indexOf(q) !== -1;
      tr.hidden = !hit; if (hit) n++;
    });
    $('zoneCount').textContent = n + (n === 1 ? ' free zone' : ' free zones');
  });

  // Contact form: no backend, so open the visitor's email app with the details prefilled
  var contact = $('contactForm');
  if (contact) contact.addEventListener('submit', function (e) {
    e.preventDefault();
    var f = e.target, note = $('formNote');
    var val = function (n) { return (f.elements[n].value || '').trim(); };
    if (!val('name') || !/^\S+@\S+\.\S+$/.test(val('email'))) { note.textContent = 'Please enter your name and a valid email.'; return; }
    var body = 'Name: ' + val('name') + '\nEmail: ' + val('email') + '\nPhone: ' + val('phone') + '\nNeed: ' + val('need') + '\n\n' + val('message');
    note.textContent = 'Opening your email app…';
    window.location.href = 'mailto:sarmad@dxbincorp.com?subject=' + encodeURIComponent('Website enquiry: ' + val('need')) + '&body=' + encodeURIComponent(body);
  });

  // Entrance animation (Web Animations API, plays once per element, skipped for reduced motion).
  // Headings rise inside a mask, text settles, cards rise in reading order, images wipe in.
  if (!calm && 'IntersectionObserver' in window && d.documentElement.animate) {
    var KINDS = [
      { k: 'mask', s: '.hero h1,.page-hero h1,.sec-head h2,.svc-main h2,.cta h2,.contact-grid h2' },
      { k: 'rise', s: '.eyebrow,.crumbs,.hero .lead,.page-hero .lead,.sec-head > p,.hero-actions,.quote,.prose > p,.prose > ul,.prose > ol,.prose > .btn,.callout,.cta p,.cta .btn,.contact-list,.form,.table-wrap,.search' },
      { k: 'card', s: '.card,.trio-card,.type-card,.req,.defs li,.steps-list li,.pkg-list li,.offices-grid li,.side-card' },
      { k: 'bg', s: '.ph-bg' },
      { k: 'wipeUp', s: '.trio-img' },
      { k: 'wipeLeft', s: '.card-img' }
    ];
    var FRAMES = {
      mask: [{ transform: 'translateY(105%)' }, { transform: 'none' }],
      rise: [{ opacity: 0, transform: 'translateY(16px)' }, { opacity: 1, transform: 'none' }],
      card: [{ opacity: 0, transform: 'translateY(26px)' }, { opacity: 1, transform: 'none' }],
      bg: [{ opacity: 0, transform: 'scale(1.06)' }, { opacity: 1, transform: 'none' }],
      wipeUp: [{ clipPath: 'inset(100% 0 0 0)' }, { clipPath: 'inset(0 0 0 0)' }],
      wipeLeft: [{ clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0 0 0)' }]
    };
    var DUR = { mask: 950, rise: 800, card: 900, bg: 1500, wipeUp: 1200, wipeLeft: 1100 };
    var LEAD = { wipeUp: 250, wipeLeft: 250 };
    var targets = [], seen = [];

    KINDS.forEach(function (g) {
      [].forEach.call(d.querySelectorAll(g.s), function (el) {
        if (seen.indexOf(el) !== -1) return; seen.push(el);
        var node = el;
        if (g.k === 'mask') { // wrap heading text so it can rise inside a fixed mask
          var m = d.createElement('span'), i = d.createElement('span');
          m.className = 'rm'; i.className = 'ri';
          while (el.firstChild) i.appendChild(el.firstChild);
          m.appendChild(i); el.appendChild(m); node = i;
        }
        node.classList.add('a-pre');
        targets.push({ el: el, node: node, k: g.k });
      });
    });

    var io = new IntersectionObserver(function (entries) {
      var hit = entries.filter(function (e) { return e.isIntersecting; })
        .map(function (e) { return targets.filter(function (t) { return t.el === e.target; })[0]; })
        .sort(function (a, b) { return (a.el.compareDocumentPosition(b.el) & 4) ? -1 : 1; });
      hit.forEach(function (t, n) {
        io.unobserve(t.el);
        t.node.animate(FRAMES[t.k], { duration: DUR[t.k], delay: 60 + Math.min(n, 8) * 110 + (LEAD[t.k] || 0), easing: 'cubic-bezier(.2,.7,.2,1)', fill: 'backwards' });
        t.node.classList.remove('a-pre');
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -5% 0px' });
    targets.forEach(function (t) { io.observe(t.el); });
  }

  // Hero video (only when assets/hero.mp4 exists): fades in once it can play; the photo shows until then
  var hv = d.querySelector('.hero-video');
  if (hv && !calm) {
    var showVideo = function () { hv.classList.add('is-ready'); };
    if (hv.readyState >= 3) showVideo(); else hv.addEventListener('canplay', showVideo, { once: true });
    hv.addEventListener('loadeddata', function () { var p = hv.play(); if (p && p.catch) p.catch(function () {}); }, { once: true });
  }

  var yr = $('yr'); if (yr) yr.textContent = new Date().getFullYear();
})();

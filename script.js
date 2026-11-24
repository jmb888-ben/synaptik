/* ==============================================================
   ▼▼▼  VIDÉOS — MODIFIER CETTE LISTE  ▼▼▼

   id    → chiffres à la fin de l'URL Vimeo
           Ex: https://vimeo.com/123456789  →  id: "123456789"
   title → titre affiché
   desc  → description courte  ("" si aucune)
   page  → page interne SEO du film ("" si aucune)

   Ajouter autant de blocs { … } que nécessaire.
   Chaque vidéo s'affiche en pleine largeur, l'une sous l'autre.
============================================================== */
var VIDEOS = [
  {
    "id": "1223586438",
    "title": "Synaptik Reel",
    "desc": "Showreel · 60 secondes",
    "summary": "Une minute de réalisation, de direction artistique et de création en IA générative : publicité, fiction et recherche visuelle.",
    "page": "/films/synaptik-reel/",
    "poster": "/assets/posters/1223586438.jpg"
  },
  {
    "id": "1232085603",
    "title": "Duel",
    "desc": "Fiction · IA générative",
    "summary": "Un face-à-face dans un décor de western, où les regards, la tension et les mouvements du combat construisent la scène.",
    "page": "/films/duel/",
    "poster": "/assets/posters/1232085603.jpg"
  },
  {
    "id": "1231054783",
    "title": "Fuck it",
    "desc": "Création · IA générative",
    "summary": "Un même mouvement traverse différents personnages, époques et univers. Une recherche sur la continuité du geste et le montage.",
    "page": "/films/fuck-it/",
    "poster": "/assets/posters/1231054783.jpg"
  },
  {
    "id": "1227995438",
    "title": "Avant l’oubli",
    "desc": "Bande-annonce · Fiction",
    "summary": "Une bande-annonce qui s’appuie sur les visages, les regards et les atmosphères pour installer un univers de fiction.",
    "page": "/films/avant-l-oubli/",
    "poster": "/assets/posters/1227995438.jpg"
  },
  {
    "id": "1208485503",
    "title": "JIL",
    "desc": "Fiction · IA générative",
    "summary": "Une séquence d’action urbaine, avec une voiture propulsée au-dessus de la ville. Un travail sur le mouvement, l’espace et le cadrage.",
    "page": "/films/jil/",
    "poster": "/assets/posters/1208485503.jpg"
  },
  {
    "id": "1159611153",
    "title": "TAG Heuer AI",
    "desc": "Spec film · Publicité · IA générative",
    "summary": "Un film publicitaire indépendant autour de l’horlogerie, qui met en valeur la montre, ses matières et sa lumière.",
    "page": "/films/tag-heuer-ai/",
    "poster": "/assets/posters/1159611153.jpg"
  },
  {
    "id": "1184018270",
    "title": "Fuck IA",
    "desc": "Clip · Création personnelle",
    "summary": "Un film musical qui interroge, avec ironie, le rapport entre intelligence artificielle, authenticité et émotion humaine.",
    "page": "/films/fuck-ia/",
    "poster": "/assets/posters/1184018270.jpg"
  },
  {
    "id": "1195592669",
    "title": "Truc de Fou — Rover",
    "desc": "Film publicitaire · Boisson · IA générative",
    "summary": "Une boisson transposée dans un univers lunaire : un rover, un astronaute et une canette au cœur de la mise en scène.",
    "page": "/films/truc-de-fou/",
    "poster": "/assets/posters/1195592669.jpg"
  },
  {
    "id": "1195592668",
    "title": "Truc de Fou — Drink",
    "desc": "Film publicitaire · Boisson · IA générative",
    "summary": "Un film publicitaire en format vertical, dans un univers industriel peuplé de personnages masqués, autour de la boisson Truc de Fou.",
    "page": "/films/truc-de-fou-drink/",
    "poster": "/assets/posters/1195592668.jpg"
  },
  {
    "id": "1244693830",
    "title": "Le procès de Saturnin",
    "desc": "Sketch · Groland · Canal+",
    "summary": "Un sketch d’environ trois minutes entièrement réalisé en IA générative pour Groland, autour d’un procès et de ses personnages.",
    "page": "/films/saturnin-groland/",
    "poster": "https://vumbnail.com/1244693830.jpg"
  },
  {
    "id": "1176114048",
    "title": "SPRING 2026",
    "desc": "Film · Direction artistique · IA générative",
    "summary": "Un univers visuel où l’imaginaire japonais, les cerisiers en fleurs et le longboard se rencontrent.",
    "page": "/films/spring-2026/",
    "poster": "/assets/posters/1176114048.jpg"
  },
  {
    "id": "1212243448",
    "title": "Rencontres d’exception",
    "desc": "Film publicitaire · IA générative",
    "summary": "Un film publicitaire qui inscrit ses personnages dans un cadre du quotidien, avec une attention portée à la justesse des attitudes et du décor.",
    "page": "/films/rencontres-d-exception/",
    "poster": "/assets/posters/1212243448.jpg"
  },
  {
    "id": "1176641273",
    "title": "Puma Rabbits",
    "desc": "Spec film · Publicité · IA générative",
    "summary": "Une proposition publicitaire indépendante, en format vertical, qui associe des personnages masqués à un univers industriel.",
    "page": "/films/puma-rabbits/",
    "poster": "/assets/posters/1176641273.jpg"
  },
  {
    "id": "1176271004",
    "title": "Mamie Cannes",
    "desc": "Sketch · Groland · Canal+",
    "summary": "Un sketch de Groland autour de Cannes, qui joue avec les codes du glamour et une figure de mamie décalée.",
    "page": "/films/mamie-cannes/",
    "poster": "/assets/posters/1176271004.jpg"
  },
  {
    "id": "1176114060",
    "title": "Papys Brindillette",
    "desc": "Sketch · Groland · Canal+",
    "summary": "Deux papys jouent aux cartes dans un univers sous-marin : une situation familière déplacée dans un décor impossible.",
    "page": "/films/papys-brindillette/",
    "poster": "/assets/posters/1176114060.jpg"
  },
  {
    "id": "1172962666",
    "title": "Mamie c’est la fête",
    "desc": "Sketch · Groland · Canal+",
    "summary": "Un sketch qui place un personnage de mamie au centre d’une situation comique, dans l’univers de Groland.",
    "page": "/films/mamie-c-est-la-fete/",
    "poster": "/assets/posters/1172962666.jpg"
  },
  {
    "id": "1159610980",
    "title": "AI AKIRA",
    "desc": "Expérimentation · Science-fiction · IA générative",
    "summary": "Une recherche visuelle de science-fiction autour d’une moto futuriste et d’un paysage urbain enneigé.",
    "page": "/films/ai-akira/",
    "poster": "/assets/posters/1159610980.jpg"
  }
];
/* ▲▲▲  FIN ZONE À MODIFIER  ▲▲▲ */


/* ------------ OVERLAY ------------ */
var overlayTrigger = null;
var syncPreviews = function() {};
var overlayCloseTimer = null;
var overlayBackground = [];
var overlayPreviousOverflow = '';
function openOverlay(id, trigger) {
  clearTimeout(overlayCloseTimer);
  var o = document.getElementById('playerOverlay');
  var p = document.getElementById('overlayPlayer');
  overlayTrigger = trigger || document.activeElement;
  overlayPreviousOverflow = document.body.style.overflow;
  overlayBackground = Array.from(document.body.children).filter(function(el) {
    return el !== o && !el.inert && !/^(SCRIPT|STYLE|LINK)$/.test(el.tagName);
  });
  o.inert = false;
  /* Le clic utilisateur lance la vidéo avec le son activé. */
  p.src = 'https://player.vimeo.com/video/'+id+'?autoplay=1&muted=0&playsinline=1&color=ffffff&title=0&byline=0&portrait=0&transparent=0';
  o.classList.add('active');
  syncPreviews();
  o.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  document.getElementById('closePlayer').focus();
  overlayBackground.forEach(function(el) { el.inert = true; });
}
function closeOverlay() {
  var o = document.getElementById('playerOverlay');
  var p = document.getElementById('overlayPlayer');
  if (!o.classList.contains('active')) return;
  o.classList.remove('active');
  overlayBackground.forEach(function(el) { el.inert = false; });
  overlayBackground = [];
  document.body.style.overflow = overlayPreviousOverflow;
  if (overlayTrigger && typeof overlayTrigger.focus === 'function') overlayTrigger.focus();
  overlayTrigger = null;
  o.inert = true;
  o.setAttribute('aria-hidden', 'true');
  overlayCloseTimer = setTimeout(function(){ p.src=''; }, 450);
  syncPreviews();
}
document.addEventListener('keydown', function(e){ if(e.key==='Escape') closeOverlay(); });
document.getElementById('overlayBg').addEventListener('click', closeOverlay);


/* ------------ CONSTRUCTION DU FEED ------------ */
function buildFeed() {
  var feed = document.getElementById('vfeed');
  var reelFeed = document.getElementById('reel-feed');
  if (!feed) return;
  if (feed.querySelector('.vitem') && (!reelFeed || reelFeed.querySelector('.vitem'))) {
    initScrollPlay();
    return;
  }
  VIDEOS.forEach(function(v, i) {
    var item = document.createElement('div');
    item.className = 'vitem';

    var titleMarkup = v.page
      ? '<a class="vitem-title" href="' + v.page + '" aria-label="Voir la fiche ' + v.title + '">' + v.title + '</a>'
      : '<span class="vitem-title">' + v.title + '</span>';

    var detailLink = v.page
      ? '<a class="vitem-ext" href="' + v.page + '">Découvrir le projet ↗</a>'
      : '<span class="vitem-ext">SYNAPTIK STUDIO</span>';

    item.innerHTML =
      '<div class="vitem-num">' + String(i+1).padStart(2,'0') + '</div>' +

      '<div class="vitem-meta">' +
        '<span class="vitem-idx">FILE_' + String(i+1).padStart(2,'0') + '.MP4</span>' +
        titleMarkup +
        '<span class="vitem-tag">VIMEO</span>' +
      '</div>' +

      '<div class="video-frame">' +
        '<span class="video-ruler video-ruler--top" aria-hidden="true"></span>' +
        '<span class="video-ruler video-ruler--right" aria-hidden="true"></span>' +
        '<span class="video-ruler video-ruler--bottom" aria-hidden="true"></span>' +
        '<span class="video-ruler video-ruler--left" aria-hidden="true"></span>' +
      '<div class="vwrap" data-id="' + v.id + '">' +
        '<img class="vposter" src="' + (v.poster || ('assets/posters/' + v.id + '.jpg')) + '" alt="" width="960" height="540" loading="' + (i === 0 ? 'eager' : 'lazy') + '" decoding="async" fetchpriority="' + (i === 0 ? 'high' : 'low') + '">' +
        '<button class="voverlay" type="button" aria-label="Lire ' + v.title + '" onclick="openOverlay(\'' + v.id + '\', this)">' +
          '<div class="vscan"></div>' +
          '<div class="pring">' +
            '<svg width="24" height="24" viewBox="0 0 24 24" fill="none">' +
              '<path d="M7 4l14 8-14 8V4z" fill="white"/>' +
            '</svg>' +
          '</div>' +
          '<span class="watch-cue">Voir le film · avec le son →</span>' +
        '</button>' +
      '</div>' +
      '</div>' +

      ((v.desc || v.page) ?
        '<div class="vitem-desc">' +
          '<div class="vitem-desc-text"><strong class="syn-film-category">' + (v.desc || 'Film · Synaptik Studio') + '</strong><span class="syn-film-summary">' + (v.summary || '') + '</span></div>' +
          detailLink +
        '</div>'
      : '');

    var destination = reelFeed && v.id === '1223586438' ? reelFeed : feed;
    destination.appendChild(item);
  });

  var hub = document.createElement('div');
  hub.className = 'vitem-desc reveal';
  hub.innerHTML = '<span class="vitem-desc-text">Sélection Synaptik</span><a class="vitem-ext" href="/films/">Tous les films →</a>';
  feed.appendChild(hub);

  initScrollPlay();
}


/* ------------ APERÇUS ANTICIPÉS ------------ */
/* Les posters sont indépendants de Vimeo. On prépare le film avant son
   arrivée à l'écran, puis on garde le lecteur pour éviter les rechargements. */
var vimeoAPI;
function loadVimeoAPI() {
  if (!vimeoAPI) {
    vimeoAPI = new Promise(function(resolve, reject) {
      if (window.Vimeo && window.Vimeo.Player) return resolve(window.Vimeo);
      var sdk = document.createElement('script');
      sdk.src = 'https://player.vimeo.com/api/player.js';
      sdk.async = true;
      sdk.onload = function() { resolve(window.Vimeo); };
      sdk.onerror = reject;
      document.head.appendChild(sdk);
    });
  }
  return vimeoAPI;
}
function initScrollPlay() {
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var saveData = navigator.connection && navigator.connection.saveData;
  if (reduceMotion.matches || saveData || !('IntersectionObserver' in window)) return;

  var previews = [];
  function shouldPlay(preview) {
    return preview.near && !document.hidden && !reduceMotion.matches &&
      !document.getElementById('playerOverlay').classList.contains('active');
  }
  function sync(preview) {
    if (!preview.player) return;
    if (shouldPlay(preview)) {
      preview.player.play().catch(function() {
        preview.wrap.classList.remove('is-playing');
      });
    } else {
      preview.player.pause().catch(function() {});
    }
  }
  syncPreviews = function() { previews.forEach(sync); };
  document.addEventListener('visibilitychange', syncPreviews);
  reduceMotion.addEventListener('change', syncPreviews);

  function prepare(preview) {
    if (preview.pending || preview.player) return;
    preview.pending = true;
    loadVimeoAPI().then(function(Vimeo) {
      var iframe = document.createElement('iframe');
      iframe.className = 'vbg';
      iframe.loading = 'eager';
      iframe.referrerPolicy = 'strict-origin-when-cross-origin';
      iframe.title = 'Aperçu muet — ' + preview.wrap.closest('.vitem').querySelector('.vitem-title').textContent;
      iframe.src = 'https://player.vimeo.com/video/' + preview.wrap.dataset.id +
        '?autoplay=0&muted=1&loop=1&background=1&autopause=0&playsinline=1&dnt=1&transparent=0&preload=auto';
      iframe.allow = 'autoplay; fullscreen; picture-in-picture';
      iframe.tabIndex = -1;
      iframe.setAttribute('aria-hidden', 'true');
      preview.wrap.insertBefore(iframe, preview.wrap.querySelector('.voverlay'));
      preview.player = new Vimeo.Player(iframe);
      preview.player.on('playing', function() {
        preview.wrap.classList.add('is-playing');
        if (!shouldPlay(preview)) sync(preview);
      });
      preview.player.on('error', function() { preview.wrap.classList.remove('is-playing'); });
      preview.player.ready().then(function() { sync(preview); }).catch(function() {});
    }).catch(function() { /* Le poster et le bouton de lecture restent disponibles. */ });
  }

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      var preview = previews.find(function(p) { return p.wrap === entry.target; });
      preview.near = entry.isIntersecting;
      if (preview.near) prepare(preview);
      sync(preview);
    });
  }, { rootMargin: '700px 0px', threshold: 0 });
  document.querySelectorAll('.vwrap[data-id]').forEach(function(w) {
    previews.push({ wrap:w, near:false, pending:false, player:null });
    observer.observe(w);
  });
}


/* ------------ GRILLE FOND ANIMÉE ------------ */
function initGrid() {
  var c   = document.getElementById('gc');
  var ctx = c.getContext('2d');
  var W, H, t = 0;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var saveData = navigator.connection && navigator.connection.saveData;

  // The background grid is decorative; do not keep a frame loop for reduced-motion or data-saver users.
  if (reduceMotion || saveData) return;

  function resize(){
    W = c.width = window.innerWidth;
    H = c.height = window.innerHeight;
  }

  resize();
  window.addEventListener('resize', resize, {passive:true});

  var SZ = 60;
  function draw(){
    if(document.hidden){
      requestAnimationFrame(draw);
      return;
    }

    ctx.clearRect(0,0,W,H);
    ctx.strokeStyle='rgba(255,255,255,1)';
    ctx.lineWidth=.5;

    var ox=(t*.25)%SZ, oy=(t*.12)%SZ;
    for(var i=0;i<Math.ceil(W/SZ)+1;i++){
      ctx.beginPath();
      ctx.moveTo(i*SZ-ox,0);
      ctx.lineTo(i*SZ-ox,H);
      ctx.stroke();
    }
    for(var j=0;j<Math.ceil(H/SZ)+1;j++){
      ctx.beginPath();
      ctx.moveTo(0,j*SZ-oy);
      ctx.lineTo(W,j*SZ-oy,H);
      ctx.stroke();
    }

    t++;
    requestAnimationFrame(draw);
  }

  draw();
}


/* ------------ BOOT ------------ */
function runBoot() {
  document.querySelectorAll('.bl').forEach(function(l,i){
    setTimeout(function(){ l.classList.add('s'); }, 150+i*360);
  });
}


/* ------------ SCROLL PROGRESS ------------ */
(function(){
  var ticking = false;
  function updateProgress(){
    var maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    var p = maxScroll > 0 ? window.scrollY / maxScroll : 0;
    var bar = document.getElementById('pbar');
    if(bar) bar.style.width = (p*100)+'%';
    ticking = false;
  }
  window.addEventListener('scroll', function(){
    if(!ticking){
      requestAnimationFrame(updateProgress);
      ticking = true;
    }
  }, {passive:true});
})();


/* ------------ CURSEUR ------------ */
function initCursor() {
  if(window.matchMedia('(pointer: coarse)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    return;
  }
  var dot  = document.getElementById('cdot');
  var ring = document.getElementById('cring');
  var rx=0, ry=0, mx=0, my=0;
  document.addEventListener('mousemove', function(e){ mx=e.clientX; my=e.clientY; dot.style.left=mx+'px'; dot.style.top=my+'px'; });
  (function loop(){ rx+=(mx-rx)*.12; ry+=(my-ry)*.12; ring.style.left=rx+'px'; ring.style.top=ry+'px'; requestAnimationFrame(loop); })();
  document.querySelectorAll('a,button,.voverlay,.svcrow,.cemailw').forEach(function(el){
    el.addEventListener('mouseenter', function(){ ring.classList.add('on'); });
    el.addEventListener('mouseleave', function(){ ring.classList.remove('on'); });
  });
}


/* ------------ REVEAL ------------ */
function initReveal() {
  var elements = Array.from(document.querySelectorAll('.reveal'));
  function show(el) {
    el.classList.add('visible');
    el.querySelectorAll('.skfill').forEach(function(f){ f.style.width=f.dataset.w+'%'; });
  }
  if (!('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    elements.forEach(show);
    return;
  }
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){ show(e.target); io.unobserve(e.target); }
    });
  }, {threshold:0});
  elements.forEach(function(el){ io.observe(el); });
}

/* ------------ MOTION DES SECTIONS ------------ */
function initSectionMotion() {
  if (!('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var sections = Array.from(document.querySelectorAll('#creations, #reel, #about, #tarifs, #services, #videos'));
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if (!entry.isIntersecting) return;
      var section = entry.target.closest('section');
      if (section) section.classList.add('section-motion-ready');
      io.unobserve(entry.target);
    });
  }, {threshold:0, rootMargin:'0px 0px -8% 0px'});
  sections.forEach(function(section){
    var marker = section.querySelector('.shdr, .sp-section-label');
    if (!marker) return;
    // Observe the heading, not the entire (potentially very long) section.
    // Deep links and restored scroll positions must never leave headings hidden.
    section.classList.add('motion-section');
    if(marker.getBoundingClientRect().top < window.innerHeight * .92) {
      section.classList.add('section-motion-ready');
    } else {
      io.observe(marker);
    }
  });
}

/* ------------ CONTACT : ONE-SHOT ORBITAL REVEAL ------------ */
function initContactMotion() {
  var section = document.getElementById('contact');
  if (!section || !section.querySelector('.contact-reference img') ||
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var marker = section.querySelector('.cpre') || section;
  section.classList.add('contact-motion');
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if (!entry.isIntersecting) return;
      section.classList.add('contact-motion-ready');
      io.disconnect();
    });
  }, {threshold:0, rootMargin:'0px 0px -10% 0px'});
  if (marker.getBoundingClientRect().bottom < 0) {
    // Do not replay a reveal above a restored scroll position.
    section.classList.add('contact-motion-ready', 'contact-motion-static');
  } else {
    io.observe(marker);
  }
}

/* ------------ HORLOGE ------------ */
function tick(){
  var n=new Date(), h=String(n.getHours()).padStart(2,'0'), m=String(n.getMinutes()).padStart(2,'0'), s=String(n.getSeconds()).padStart(2,'0');
  var el=document.getElementById('clk'); if(el) el.textContent=h+':'+m+':'+s;
}
setInterval(tick,1000); tick();

/* ------------ ANNÉE FOOTER ------------ */
var yrEl=document.getElementById('yr'); if(yrEl) yrEl.textContent=new Date().getFullYear();

/* ------------ INIT ------------ */
window.addEventListener('DOMContentLoaded', function(){
  buildFeed();
  initGrid();
  runBoot();
  initCursor();
  initReveal();
  initSectionMotion();
  initContactMotion();
});

/* ------------ NAVIGATION ACTIVE + SLIDING INDICATOR ------------ */
(function(){
  function initActiveNavigation(){
    var list = document.querySelector('.restored-nav .nlinks');
    if (!list) return;
    var links = Array.from(list.querySelectorAll('a[href^="#"]')).map(function(link){
      return {link:link, section:document.getElementById(link.hash.slice(1))};
    }).filter(function(item){ return item.section; }).sort(function(a,b){
      return a.section.compareDocumentPosition(b.section) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
    });
    if (!links.length) return;

    var indicator = document.createElement('li');
    indicator.className = 'syn-nav-indicator';
    indicator.setAttribute('aria-hidden', 'true');
    indicator.setAttribute('role', 'presentation');
    list.appendChild(indicator);
    list.classList.add('syn-nav-motion');
    var active = null, queued = false, lastTransform = '';
    var desktop = window.matchMedia('(min-width: 801px)');
    var reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    var placed = false;

    function placeIndicator(){
      if (!active || !desktop.matches || reduced.matches || !list.getClientRects().length) {
        indicator.classList.remove('is-visible');
        placed = false;
        return;
      }
      var rect = active.link.getBoundingClientRect();
      var base = list.getBoundingClientRect();
      if (!rect.width) return;
      var x = rect.left - base.left;
      var y = rect.bottom - base.top + 6;
      var transform = 'translate3d(' + x.toFixed(2) + 'px,' + y.toFixed(2) + 'px,0) scaleX(' + (rect.width/100).toFixed(4) + ')';
      if (!placed) {
        indicator.style.transition = 'none';
        indicator.style.transform = transform;
        indicator.classList.add('is-visible');
        void indicator.offsetWidth;
        indicator.style.removeProperty('transition');
        placed = true;
      } else if (transform !== lastTransform) {
        indicator.style.transform = transform;
        indicator.classList.add('is-visible');
      }
      lastTransform = transform;
    }

    function update(){
      queued = false;
      var cutoff = Math.max(120, window.innerHeight * .32);
      var current = null;
      links.forEach(function(item){
        if (item.section.getBoundingClientRect().top <= cutoff) current = item;
      });
      if (window.scrollY > 0 && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) {
        current = links[links.length - 1];
      }
      if (current !== active) {
        active = current;
        links.forEach(function(item){
          var on = item === active;
          item.link.classList.toggle('is-active', on);
          if (on) item.link.setAttribute('aria-current','location');
          else item.link.removeAttribute('aria-current');
        });
      }
      placeIndicator();
    }
    function schedule(){
      if (!queued) { queued = true; requestAnimationFrame(update); }
    }
    window.addEventListener('scroll', schedule, {passive:true});
    window.addEventListener('resize', schedule, {passive:true});
    window.addEventListener('hashchange', schedule);
    window.addEventListener('pageshow', schedule);
    if (desktop.addEventListener) desktop.addEventListener('change', schedule);
    if (reduced.addEventListener) reduced.addEventListener('change', schedule);
    if ('ResizeObserver' in window) new ResizeObserver(schedule).observe(list);
    if (document.fonts) document.fonts.ready.then(schedule);
    schedule();
  }
  if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded',initActiveNavigation,{once:true});
  } else {
    initActiveNavigation();
  }
})();


/* ------------ HERO SCROLL CUE ------------ */
(function(){
  function updateScrollCue(){
    document.body.classList.toggle('scrolled', window.scrollY > 40);
  }
  updateScrollCue();
  window.addEventListener('scroll', updateScrollCue, {passive:true});
})();


/* ------------ RETOUR EN HAUT ------------ */
(function(){
  function updateBackTop(){
    document.body.classList.toggle('show-back-top', window.scrollY > window.innerHeight * 1.5);
  }
  updateBackTop();
  window.addEventListener('scroll', updateBackTop, {passive:true});
})();

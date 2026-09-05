/* ==============================================================
   ▼▼▼  VIDÉOS — MODIFIER CETTE LISTE  ▼▼▼

   id    → chiffres à la fin de l'URL Vimeo
           Ex: https://vimeo.com/123456789  →  id: "123456789"
   title → titre affiché
   desc  → description courte  ("" si aucune)

   Ajouter autant de blocs { … } que nécessaire.
   Chaque vidéo s'affiche en pleine largeur, l'une sous l'autre.
============================================================== */
var VIDEOS = [
  { id:"1223586438", title:"Synaptik reel",         desc:"Reel · 60 sec" },
  { id:"1208485503", title:"JIL",                desc:"" },
  { id:"1159611153", title:"Tag Heuer AI",        desc:"Spec film · Publicité" },
  { id:"1184018270", title:"Fuck IA",            desc:"" },
  { id:"1195592669", title:"Truc de fou rover",  desc:"Publicité · Truc de Fou" },
  { id:"1195592668", title:"Truc de fou drink",  desc:"Publicité · Truc de Fou" },
  { id:"1176114048", title:"Fujisan Longboards", desc:"" },
  { id:"1212243448", title:"Rencontres d'exception", desc:"Publicité · Rencontres d’exception" },
  { id:"1176641273", title:"Puma Rabbits",       desc:"Spec film · Publicité" },
  { id:"1176271004", title:"Mamie Cannes",        desc:"Groland · Canal+ · Cannes 2026" },
  { id:"1176114060", title:"Papys Brindillette",  desc:"Groland · Canal+ · Cannes 2026" },
  { id:"1172962666", title:"Mamie c'est la fête", desc:"Groland · Canal+ · Cannes 2026" },
  { id:"1159610980", title:"AI AKIRA",            desc:"Expérimentation" }
  /* Ajouter : , { id:"XXXXXXXXX", title:"Titre", desc:"Description" } */
];
/* ▲▲▲  FIN ZONE À MODIFIER  ▲▲▲ */


/* ------------ OVERLAY ------------ */
var overlayTrigger = null;
function openOverlay(id, trigger) {
  var o = document.getElementById('playerOverlay');
  var p = document.getElementById('overlayPlayer');
  overlayTrigger = trigger || document.activeElement;
  /* Le clic utilisateur lance la vidéo avec le son activé. */
  p.src = 'https://player.vimeo.com/video/'+id+'?autoplay=1&muted=0&playsinline=1&color=ffffff&title=0&byline=0&portrait=0';
  o.classList.add('active');
  o.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  document.getElementById('closePlayer').focus();
}
function closeOverlay() {
  var o = document.getElementById('playerOverlay');
  var p = document.getElementById('overlayPlayer');
  o.classList.remove('active');
  o.setAttribute('aria-hidden', 'true');
  setTimeout(function(){ p.src=''; }, 450);
  document.body.style.overflow = '';
  if (overlayTrigger && typeof overlayTrigger.focus === 'function') overlayTrigger.focus();
  overlayTrigger = null;
}
document.addEventListener('keydown', function(e){ if(e.key==='Escape') closeOverlay(); });
document.getElementById('overlayBg').addEventListener('click', closeOverlay);


/* ------------ CONSTRUCTION DU FEED ------------ */
function buildFeed() {
  var feed = document.getElementById('vfeed');
  VIDEOS.forEach(function(v, i) {
    var item = document.createElement('div');
    item.className = 'vitem reveal';
    item.style.transitionDelay = '0s'; // reveal immédiat pour le feed

    item.innerHTML =
      '<div class="vitem-num">' + String(i+1).padStart(2,'0') + '</div>' +

      '<div class="vitem-meta">' +
        '<span class="vitem-idx">FILE_' + String(i+1).padStart(2,'0') + '.MP4</span>' +
        '<span class="vitem-title">' + v.title + '</span>' +
        '<span class="vitem-tag">VIMEO</span>' +
      '</div>' +

      '<div class="vwrap" data-id="' + v.id + '">' +
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

      (v.desc ?
        '<div class="vitem-desc">' +
          '<span class="vitem-desc-text">' + v.desc + '</span>' +
          '<span class="vitem-ext">SYNAPTIK STUDIO</span>' +
        '</div>'
      : '');

    feed.appendChild(item);
  });

  initScrollPlay();
}


/* ------------ LECTURE AUTO AU SCROLL ------------ */
/* Quand la vidéo est visible à 30%, on injecte la preview muette.
   Quand elle sort du viewport, on la retire pour libérer la connexion. */
function initScrollPlay() {
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      var wrap = entry.target;
      var id   = wrap.dataset.id;

      if (entry.isIntersecting) {
        if (!wrap.querySelector('iframe.vbg')) {
          var iframe       = document.createElement('iframe');
          iframe.className = 'vbg';
          iframe.loading   = 'lazy';
          iframe.referrerPolicy = 'strict-origin-when-cross-origin';
          iframe.title     = 'Aperçu vidéo Synaptik';
          /* background=1 : muet, boucle, sans UI Vimeo */
          iframe.src = 'https://player.vimeo.com/video/'+id+'?autoplay=1&muted=1&loop=1&background=1&color=000000&transparent=0';
          iframe.allow     = 'autoplay; fullscreen; picture-in-picture';
          /* Insérer avant l'overlay pour rester en dessous */
          wrap.insertBefore(iframe, wrap.querySelector('.voverlay'));
        }
      } else {
        var existing = wrap.querySelector('iframe.vbg');
        if (existing) existing.remove();
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.vwrap[data-id]').forEach(function(w){ observer.observe(w); });
}


/* ------------ GRILLE FOND ANIMÉE ------------ */
function initGrid() {
  var c   = document.getElementById('gc');
  var ctx = c.getContext('2d');
  var W, H, t = 0;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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
      ctx.lineTo(W,j*SZ-oy);
      ctx.stroke();
    }

    if(!reduceMotion) t++;
    requestAnimationFrame(draw);
  }

  draw();
}


/* ------------ BOOT ------------ */
function runBoot() {
  document.querySelectorAll('.bl').forEach(function(l,i){
    setTimeout(function(){ l.classList.add('s'); }, 300+i*220);
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
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){
        e.target.classList.add('visible');
        e.target.querySelectorAll('.skfill').forEach(function(f){ f.style.width=f.dataset.w+'%'; });
        io.unobserve(e.target);
      }
    });
  }, {threshold:.08});
  document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });
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
});

/* ------------ NAVIGATION ACTIVE ------------ */
(function(){
  var navLinks = Array.from(document.querySelectorAll('.nlinks a[href^="#"]'));
  if(!navLinks.length) return;

  var linkById = {};
  navLinks.forEach(function(link){
    var id = link.getAttribute('href').slice(1);
    if(id) linkById[id] = link;
  });

  var sections = Object.keys(linkById)
    .map(function(id){ return document.getElementById(id); })
    .filter(Boolean);

  if(!sections.length) return;

  function setActive(id){
    navLinks.forEach(function(link){
      var active = link.getAttribute('href') === '#' + id;
      link.classList.toggle('is-active', active);
      if(active){
        link.setAttribute('aria-current', 'page');
      }else{
        link.removeAttribute('aria-current');
      }
    });
  }

  var observer = new IntersectionObserver(function(entries){
    var visible = entries
      .filter(function(entry){ return entry.isIntersecting; })
      .sort(function(a,b){ return b.intersectionRatio - a.intersectionRatio; });

    if(visible.length){
      setActive(visible[0].target.id);
    }
  }, {
    rootMargin:'-20% 0px -55% 0px',
    threshold:[0,.1,.25,.5,.75]
  });

  sections.forEach(function(section){ observer.observe(section); });
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
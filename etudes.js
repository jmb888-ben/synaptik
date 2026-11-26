'use strict';

const studiesRoot = '/assets/etudes/';

function studyElement(tag, className, text = '') {
  const element = document.createElement(tag);
  if (className) element.className = className;
  element.textContent = text;
  return element;
}

function studyLink(target, text) {
  const link = studyElement('a', '', text);
  link.href = '#' + target;
  return link;
}

function studyFigure(item) {
  const figure = studyElement('figure', 'synaptik-etudes-figure');
  const link = studyElement('a', 'synaptik-etudes-image');
  const image = document.createElement('img');
  link.href = studiesRoot + item.full;
  link.target = '_blank';
  link.rel = 'noopener';
  link.setAttribute('aria-label', 'Agrandir ' + item.title + ' (nouvel onglet)');
  image.src = studiesRoot + item.src;
  image.alt = item.alt;
  image.loading = 'lazy';
  image.decoding = 'async';
  image.width = item.width;
  image.height = item.height;
  link.append(image);

  const caption = document.createElement('figcaption');
  caption.append(studyElement('span', 'synaptik-etudes-label', item.kind),
    studyElement('strong', '', item.title));
  if (item.caption) caption.append(studyElement('span', 'synaptik-etudes-caption', item.caption));
  figure.append(link, caption);
  return figure;
}

function studySheet(sheet, id) {
  const article = studyElement('article', 'synaptik-etudes-sheet');
  article.id = id;
  article.append(studyElement('h4', 'synaptik-etudes-name', sheet.title));
  if (sheet.notes?.length) {
    const notes = studyElement('ul', 'synaptik-etudes-notes');
    notes.append(...sheet.notes.map(note => studyElement('li', '', note)));
    article.append(notes);
  }
  const pair = studyElement('div', 'synaptik-etudes-pair');
  if (sheet.items.length === 1) pair.classList.add('synaptik-etudes-single');
  pair.append(...sheet.items.map(studyFigure));
  article.append(pair);
  return article;
}

function makeStudyBook(film, videoId, title) {
  const id = 'etudes-' + videoId;
  const section = studyElement('section', 'synaptik-etudes');
  section.id = id;
  section.setAttribute('aria-label', 'Études et esquisses · ' + title);
  const nav = studyElement('div', 'synaptik-etudes-index');
  nav.setAttribute('role', 'navigation');
  nav.setAttribute('aria-label', 'Choisir une planche · ' + title);
  const body = studyElement('div', 'synaptik-etudes-content');
  const studies = document.createElement('div');
  studies.append(studyElement('h3', 'synaptik-etudes-heading', 'Études préparatoires'));
  film.studies.forEach((sheet, index) => {
    const target = id + '-planche-' + (index + 1);
    nav.append(studyLink(target, sheet.title));
    studies.append(studySheet(sheet, target));
  });

  const variations = studyElement('div', 'synaptik-etudes-variations');
  variations.id = id + '-variations';
  nav.append(studyLink(variations.id, 'Esquisses et variations'));
  variations.append(studyElement('h3', 'synaptik-etudes-heading', 'Esquisses et variations'));
  film.variations.forEach((sheet, index) => {
    const article = studySheet(sheet, variations.id + '-' + (index + 1));
    const source = studyLink(id + '-planche-' + sheet.reference.sheet, 'Image source · ' + sheet.reference.title);
    source.className = 'synaptik-etudes-source';
    article.append(source);
    variations.append(article);
  });
  body.append(studies, variations);
  section.append(nav, body);
  return section;
}

function highlightStudyIndex(book) {
  if (!('IntersectionObserver' in window)) return;
  const links = Array.from(book.querySelectorAll('.synaptik-etudes-index a'));
  const linkBySection = new Map(links.map(link => [link.hash.slice(1), link]));
  const active = id => {
    links.forEach(link => link.removeAttribute('aria-current'));
    linkBySection.get(id)?.setAttribute('aria-current', 'location');
  };
  const observer = new IntersectionObserver(entries => {
    const visible = entries.find(entry => entry.isIntersecting);
    if (visible) active(visible.target.id);
  }, {rootMargin: '-18% 0px -70% 0px'});
  linkBySection.forEach((link, id) => {
    observer.observe(document.getElementById(id));
    link.addEventListener('click', () => active(id));
  });
}

function insertStudyBook(player, film, id, title) {
  const book = makeStudyBook(film, id, title);
  player.after(book);
  highlightStudyIndex(book);
}

async function mountStudyBooks() {
  const portfolio = document.querySelectorAll('#vfeed .vitem[data-film]');
  const players = document.querySelectorAll('.seo-main .seo-video iframe[src]');
  if (!portfolio.length && !players.length) return;
  const response = await fetch(studiesRoot + 'planches.json?v=atelier-montage');
  if (!response.ok) throw new Error('Études préparatoires indisponibles');
  const catalog = await response.json();
  portfolio.forEach(item => {
    const id = item.dataset.film;
    const player = item.querySelector('.video-frame');
    if (catalog[id] && player) insertStudyBook(player, catalog[id], id, item.querySelector('.vitem-title').textContent.trim());
  });
  players.forEach(player => {
    const id = new URL(player.src).pathname.match(/^\/video\/(\d+)$/)?.[1];
    if (catalog[id]) insertStudyBook(player.closest('.seo-video'), catalog[id], id, document.querySelector('h1').textContent.trim());
  });
  // These anchors are inserted after the browser's initial fragment navigation.
  const target = document.getElementById(location.hash.slice(1));
  if (target?.closest('.synaptik-etudes')) target.scrollIntoView();
}

document.addEventListener('DOMContentLoaded', () => mountStudyBooks().catch(error => console.warn(error.message)));

'use strict';

const studiesRoot = '/assets/etudes/';

function makeStudyBook(spreads, title) {
  const section = document.createElement('section');
  section.className = 'synaptik-etudes';
  section.setAttribute('aria-label', 'Études préparatoires · ' + title);
  section.innerHTML = `
    <header class="synaptik-etudes-header">
      <p>Études préparatoires</p>
      <div class="synaptik-etudes-controls">
        <button type="button" aria-label="Planche précédente">←</button>
        <span role="status"></span>
        <button type="button" aria-label="Planche suivante">→</button>
      </div>
    </header>
    <div class="synaptik-etudes-spread"></div>`;
  const previous = section.querySelector('button:first-child');
  const next = section.querySelector('button:last-child');
  const count = section.querySelector('[role="status"]');
  const spread = section.querySelector('.synaptik-etudes-spread');
  let current = 0;

  function show(index) {
    if (index < 0 || index >= spreads.length) return;
    current = index;
    spread.dataset.single = String(spreads[index].length === 1);
    spread.replaceChildren(...spreads[index].map(item => {
      const figure = document.createElement('figure');
      const link = document.createElement('a');
      const image = document.createElement('img');
      const caption = document.createElement('figcaption');
      link.href = studiesRoot + item.full;
      link.target = '_blank';
      link.rel = 'noopener';
      link.setAttribute('aria-label', 'Agrandir ' + item.title + ' (nouvel onglet)');
      image.src = studiesRoot + item.src;
      image.alt = item.alt;
      image.loading = 'lazy';
      image.decoding = 'async';
      caption.textContent = item.title;
      link.append(image);
      figure.append(link, caption);
      return figure;
    }));
    count.textContent = (index + 1) + ' / ' + spreads.length;
    previous.setAttribute('aria-disabled', String(index === 0));
    next.setAttribute('aria-disabled', String(index === spreads.length - 1));
  }
  previous.addEventListener('click', () => show(current - 1));
  next.addEventListener('click', () => show(current + 1));
  section.querySelector('.synaptik-etudes-controls').hidden = spreads.length === 1;
  show(0);
  return section;
}

async function mountStudyBooks() {
  const response = await fetch(studiesRoot + 'planches.json');
  if (!response.ok) throw new Error('Études préparatoires indisponibles');
  const catalog = await response.json();
  document.querySelectorAll('#vfeed .vitem[data-film]').forEach(item => {
    const spreads = catalog[item.dataset.film];
    const player = item.querySelector('.video-frame');
    if (spreads && player) player.after(makeStudyBook(spreads, item.querySelector('.vitem-title').textContent.trim()));
  });
  document.querySelectorAll('.seo-main .seo-video iframe[src]').forEach(player => {
    const id = new URL(player.src).pathname.match(/^\/video\/(\d+)$/)?.[1];
    if (id && catalog[id]) player.closest('.seo-video').after(makeStudyBook(catalog[id], document.querySelector('h1').textContent.trim()));
  });
}

document.addEventListener('DOMContentLoaded', () => mountStudyBooks().catch(error => console.warn(error.message)));

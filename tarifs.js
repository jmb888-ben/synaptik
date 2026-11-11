/* Shared navigation and project briefs. No data is sent or stored by this page. */
(() => {
  'use strict';

  const offers = {
    capsule: 'Capsule produit · 750 € HT',
    publicite: 'Film publicitaire · à partir de 1 800 € HT',
    marque: 'Film de marque · à partir de 4 500 € HT',
    mensuel: 'Création mensuelle · 2 400 € HT / mois',
    libre: 'Un projet à définir ensemble'
  };

  document.querySelectorAll('[data-sp-nav]').forEach((nav) => {
    const toggle = nav.querySelector('.sp-nav-toggle');
    const links = nav.querySelector('.sp-nav-links');
    if (!toggle || !links) return;

    const setOpen = (open) => {
      nav.classList.toggle('is-open', open);
      links.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = open ? 'Fermer' : 'Menu';
    };

    nav.classList.add('sp-nav-enhanced');
    toggle.hidden = false;
    toggle.addEventListener('click', () => {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });
    links.addEventListener('click', (event) => {
      if (event.target.closest('a')) setOpen(false);
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setOpen(false);
        toggle.focus();
      }
    });
    document.addEventListener('click', (event) => {
      if (!nav.contains(event.target)) setOpen(false);
    });
  });

  const requestedOffer = new URLSearchParams(window.location.search).get('offre');
  document.querySelectorAll('.sp-project-form').forEach((form) => {
    const offerField = form.elements.namedItem('offer');
    if (offerField && offerField.tagName === 'SELECT' && Object.hasOwn(offers, requestedOffer)) {
      offerField.value = requestedOffer;
    }

    const result = form.querySelector('.sp-form-result');
    if (!result) return;
    const preview = result.querySelector('.sp-brief-preview');
    const emailLink = result.querySelector('.sp-email-link');
    const downloadLink = result.querySelector('.sp-download-brief');
    const copyButton = result.querySelector('.sp-copy-brief');
    const copyStatus = result.querySelector('.sp-copy-status');
    let preparedBrief = '';
    let downloadUrl = '';

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;

      const data = new FormData(form);
      const value = (key) => String(data.get(key) || '').trim();
      const offerKey = value('offer') || form.dataset.offer || 'libre';
      const offerName = Object.hasOwn(offers, offerKey) ? offers[offerKey] : offers.libre;
      const name = value('name');
      const company = value('company');

      preparedBrief = [
        'Bonjour Jim,',
        '',
        'Je souhaite vous parler du projet suivant.',
        '',
        'Offre : ' + offerName,
        'Nom : ' + name,
        ...(company ? ['Entreprise : ' + company] : []),
        'E-mail : ' + value('email'),
        '',
        'LE PROJET',
        value('brief'),
        ...(value('timing') ? ['', 'DATE OU PÉRIODE SOUHAITÉE', value('timing')] : []),
        ...(value('references') ? ['', 'RÉFÉRENCES ET ÉLÉMENTS DISPONIBLES', value('references')] : []),
        '',
        'Merci,',
        name
      ].join('\n');

      preview.value = preparedBrief;
      emailLink.href = 'mailto:jim@synaptikstudio.fr?subject=' +
        encodeURIComponent('Projet Synaptik — ' + offerName + (company ? ' — ' + company : '')) +
        '&body=' + encodeURIComponent(preparedBrief);

      if (downloadUrl) URL.revokeObjectURL(downloadUrl);
      downloadUrl = URL.createObjectURL(new Blob([preparedBrief], { type: 'text/plain;charset=utf-8' }));
      downloadLink.href = downloadUrl;
      downloadLink.download = 'Brief_Synaptik.txt';
      copyStatus.textContent = '';
      result.hidden = false;
      const heading = result.querySelector('h3');
      if (heading) {
        heading.tabIndex = -1;
        heading.focus({ preventScroll: true });
      }
      result.scrollIntoView({ block: 'start', behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    });

    copyButton.addEventListener('click', async () => {
      try {
        if (!navigator.clipboard || !window.isSecureContext) throw new Error('Clipboard unavailable');
        await navigator.clipboard.writeText(preparedBrief);
        copyStatus.textContent = 'Brief copié.';
      } catch (_) {
        preview.focus();
        preview.select();
        preview.setSelectionRange(0, preview.value.length);
        copyStatus.textContent = 'Le brief est sélectionné. Utilisez la commande Copier de votre appareil.';
      }
    });
  });
})();

(function () {
  const pages = [
    { href: 'index.html',      label: 'Start',      key: 'index' },
    { href: 'teori.html',      label: 'Teori',      key: 'teori' },
    { href: 'quiz.html',       label: 'Quiz',        key: 'quiz' },
    { href: 'flashcards.html', label: 'Flashcards',  key: 'flashcards' },
  ];

  const filename = location.pathname.split('/').pop() || 'index.html';

  const links = pages.map(p => {
    const active = filename === p.href || (filename === '' && p.href === 'index.html')
      ? ' class="active"' : '';
    return `<li><a href="${p.href}"${active}>${p.label}</a></li>`;
  }).join('');

  const el = document.getElementById('site-nav');
  if (!el) return;

  el.className = 'site-nav';
  el.setAttribute('role', 'banner');
  el.innerHTML = `
    <a class="nav-logo" href="index.html" aria-label="Hem">Fysiologi <em>Gy25</em></a>
    <nav aria-label="Sidnavigering">
      <ul class="nav-links">${links}</ul>
    </nav>
  `;
})();

(function () {
  var overlay = document.getElementById('search-overlay');
  var input = document.getElementById('search-input');
  var resultsEl = document.getElementById('search-results');
  if (!overlay || !input || !resultsEl || typeof SEARCH_INDEX === 'undefined') return;

  function escapeHtml(s) { return (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

  function render(query) {
    var q = query.trim().toLowerCase();
    var matches = !q
      ? SEARCH_INDEX.filter(function (i) { return i.context === 'Page'; })
      : SEARCH_INDEX.filter(function (i) {
          return i.label.toLowerCase().indexOf(q) !== -1 || i.context.toLowerCase().indexOf(q) !== -1;
        }).slice(0, 20);
    if (!matches.length) {
      resultsEl.innerHTML = '<div class="search-empty">No matches — try a different term.</div>';
      return;
    }
    resultsEl.innerHTML = matches.map(function (item) {
      return '<a class="search-result" href="' + item.url + '"' + (item.external ? ' target="_blank" rel="noopener"' : '') + '>' +
        '<span class="search-result-label">' + escapeHtml(item.label) + '</span>' +
        '<span class="search-result-context">' + escapeHtml(item.context) + '</span>' +
      '</a>';
    }).join('');
  }

  window.openSearch = function () {
    overlay.classList.add('open');
    input.value = '';
    render('');
    setTimeout(function () { input.focus(); }, 30);
  };
  window.closeSearch = function () {
    overlay.classList.remove('open');
  };

  input.addEventListener('input', function () { render(input.value); });
  overlay.addEventListener('click', function (e) { if (e.target === overlay) closeSearch(); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.classList.contains('open')) closeSearch();
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); openSearch(); }
  });
})();

// ─────────────────────────────────────────────────────────────────────────
// Coach at a Glance — rendering & wiring
//
// This file only renders what's in coach-field-guide-data.js — it has no
// content of its own. To change what coaches see, edit that file, not
// this one.
// ─────────────────────────────────────────────────────────────────────────
(function () {
  var dayGrid = document.getElementById('fg-daytype-grid');
  var modelStep = document.getElementById('fg-model-step');
  var modelGrid = document.getElementById('fg-model-grid');
  var resultEl = document.getElementById('fg-result');
  if (!dayGrid || !modelGrid || !resultEl) return;

  var state = { dayType: null, model: null };

  function escapeHtml(s) {
    return (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function makeToggleButton(id, label, hint, groupClass, onSelect) {
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = groupClass;
    btn.setAttribute('aria-pressed', 'false');
    btn.innerHTML = '<span class="fg-btn-label">' + escapeHtml(label) + '</span>' +
      (hint ? '<span class="fg-btn-hint">' + escapeHtml(hint) + '</span>' : '');
    btn.addEventListener('click', function () { onSelect(id, btn); });
    return btn;
  }

  function selectInGroup(grid, activeBtn) {
    Array.prototype.forEach.call(grid.children, function (btn) {
      var isActive = btn === activeBtn;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
  }

  // ─── Step 1: day type ───────────────────────────────────────────────
  // Day types with hasModel: false (e.g. Tutorial Day) skip step 2 entirely
  // — there's no real Co-Teaching / Teacher-Led distinction for them.
  DAY_TYPES.forEach(function (dt) {
    var btn = makeToggleButton(dt.id, dt.label, dt.hint, 'fg-daytype-btn', function (id, btnEl) {
      selectInGroup(dayGrid, btnEl);
      state.dayType = id;
      if (dt.hasModel === false) {
        state.model = null;
        selectInGroup(modelGrid, null);
        modelStep.style.display = 'none';
      } else {
        modelStep.style.display = '';
      }
      renderResult();
    });
    dayGrid.appendChild(btn);
  });

  // ─── Step 2: coaching model ─────────────────────────────────────────
  COACHING_MODELS.forEach(function (m) {
    var btn = makeToggleButton(m.id, m.label, m.hint, 'fg-model-btn', function (id, btnEl) {
      selectInGroup(modelGrid, btnEl);
      state.model = id;
      renderResult();
    });
    modelGrid.appendChild(btn);
  });

  // ─── Routines ───────────────────────────────────────────────────────
  function routineLinkHtml(routineId, tierLabel, tierClass) {
    var r = ROUTINES[routineId];
    if (!r) return '';
    var hasUrl = !!r.url;
    var cls = 'resource-link fg-routine-link' + (hasUrl ? '' : ' pending');
    var href = hasUrl ? r.url : '#';
    var target = hasUrl ? ' target="_blank" rel="noopener"' : '';
    return '<a class="' + cls + '" href="' + href + '"' + target + '>' +
      '<span><span class="fg-routine-tier ' + tierClass + '">' + tierLabel + '</span>' + escapeHtml(r.name) + '</span>' +
      (hasUrl ? '<span class="arrow">↗</span>' : '<span class="pending-badge">Add link</span>') +
      '</a>';
  }

  function renderRoutines(dayType) {
    var def = DAY_ROUTINES[dayType];
    if (!def) return '<div class="fg-empty">No routines mapped for this day type yet.</div>';
    var html = '<div class="resource-grid fg-routines-grid">';
    def.primary.forEach(function (id) { html += routineLinkHtml(id, 'Primary Focus', 'primary'); });
    def.supporting.forEach(function (id) { html += routineLinkHtml(id, 'Supporting Routine', 'supporting'); });
    html += '</div>';
    return html;
  }

  // ─── List / what-if block helpers ──────────────────────────────────
  function listBlock(label, items) {
    if (!items || !items.length) return '';
    return '<div class="fg-block"><div class="fg-label">' + label + '</div><ul class="fg-list">' +
      items.map(function (i) { return '<li>' + escapeHtml(i) + '</li>'; }).join('') +
      '</ul></div>';
  }

  function whatIfBlock(items) {
    if (!items || !items.length) return '';
    return '<div class="fg-block"><div class="fg-label">What to Do If…</div><div class="fg-whatifs">' +
      items.map(function (w) {
        return '<div class="fg-whatif"><strong>If ' + escapeHtml(w.if) + '</strong> — ' + escapeHtml(w.then) + '</div>';
      }).join('') +
      '</div></div>';
  }

  var DAY_TYPE_LOOKUP = {};
  DAY_TYPES.concat([SKILL_BUILDER_DAY_TYPE]).forEach(function (dt) { DAY_TYPE_LOOKUP[dt.id] = dt; });
  var MODEL_LOOKUP = {};
  COACHING_MODELS.forEach(function (m) { MODEL_LOOKUP[m.id] = m; });

  function renderResult() {
    if (!state.dayType) { resultEl.innerHTML = ''; return; }
    var dayDef = DAY_TYPE_LOOKUP[state.dayType];
    var needsModel = !dayDef || dayDef.hasModel !== false;
    if (needsModel && !state.model) { resultEl.innerHTML = ''; return; }

    var key = needsModel ? (state.dayType + '__' + state.model) : state.dayType;
    var content = FIELD_GUIDE[key];
    if (!content) {
      resultEl.innerHTML = '<div class="fg-empty">No field guide content yet for this combination.</div>';
      return;
    }
    var dayLabel = (dayDef || {}).label || state.dayType;
    var modelLabel = needsModel ? ((MODEL_LOOKUP[state.model] || {}).label || state.model) : null;

    var html = '';
    html += '<div class="fg-result">';
    html += '<div class="fg-result-header"><div class="fg-result-title">Coach at a Glance</div><div class="fg-result-combo">' +
      escapeHtml(dayLabel) + (modelLabel ? ' · ' + escapeHtml(modelLabel) : '') + '</div></div>';
    html += '<div class="fg-block fg-goal"><div class="fg-label">Today\'s Goal</div><p>' + escapeHtml(content.goal || '') + '</p></div>';
    html += listBlock('Coach Priorities', content.priorities);
    html += '<div class="fg-block"><div class="fg-label">Critical Routines</div>' + renderRoutines(state.dayType) + '</div>';
    html += listBlock('Coach Moves', content.coachMoves);
    html += listBlock('Look Fors', content.lookFors);
    html += listBlock('Common Challenges', content.challenges);
    html += whatIfBlock(content.whatIfs);
    html += listBlock('Success Indicators', content.successIndicators);
    html += '<div class="fg-draft-note">Synthesized from the routine docs &amp; Coaching to Independence guide — review against the source docs above before treating as final. Edit in assets/coach-field-guide-data.js.</div>';
    html += '</div>';
    resultEl.innerHTML = html;
    resultEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
})();

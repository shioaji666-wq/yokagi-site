(() => {
  'use strict';

  const root = document.getElementById('latestNews');
  if (!root) return;

  const list = Array.isArray(window.YOKAGI_NEWS) ? window.YOKAGI_NEWS : [];
  const item = list
    .filter(x => x && x.title)
    .sort((a, b) => String(b.date || '').localeCompare(String(a.date || '')))[0];

  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, c => ({
    '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
  }[c]));

  if (!item) {
    root.innerHTML = `
      <div class="item">
        <span>
          <span class="news-meta">YOKAGI 最新情報</span>
          <span class="news-title">ゲームやツールの公開情報はXで更新しています。</span>
        </span>
      </div>`;
    return;
  }

  const meta = [item.category ? String(item.category).toUpperCase() : '', item.date || '']
    .filter(Boolean).join(' / ');

  const inner = `
    <span>
      <span class="news-meta">${esc(meta)}</span>
      <span class="news-title">${esc(item.title)}</span>
      ${item.body ? `<span class="news-body">${esc(item.body)}</span>` : ''}
    </span>
    ${item.url ? '<span class="arrow">↗</span>' : ''}`;

  if (item.url) {
    root.innerHTML = `<a class="item" href="${esc(item.url)}" target="_blank" rel="noopener noreferrer">${inner}</a>`;
  } else {
    root.innerHTML = `<div class="item">${inner}</div>`;
  }
})();

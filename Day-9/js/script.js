/* ── CONFIG ── */
const API_BASE = 'https://hn.algolia.com/api/v1/search';
const HITS_PER_PAGE = 9;

/* ── STATE ── */
let query = 'startup';
let allHits = [];
let isLoading = false;
let searchTimer = null;

/* ── ELEMENTS ── */
const newsGrid = document.getElementById('news-grid');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const navLinks = document.querySelectorAll('.nav-link');

/* ── HELPERS ── */
function escHtml(str) {
    const d = document.createElement('div');
    d.textContent = String(str || '');
    return d.innerHTML;
}

function timeAgo(iso) {
    if (!iso) return '—';
    const diff = Date.now() - new Date(iso);
    const h = Math.floor(diff / 3600000);
    const d = Math.floor(diff / 86400000);
    if (h < 1) return 'just now';
    if (h < 24) return h + 'h ago';
    if (d < 7) return d + 'd ago';
    return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

/* ── CARD ── */
function buildCard(hit, index) {
    const title = escHtml((hit.title || hit.story_title || 'Untitled').slice(0, 110));
    const author = escHtml(hit.author || 'Anonymous');
    const points = (hit.points ?? 0).toLocaleString();
    const comments = (hit.num_comments ?? 0).toLocaleString();
    const date = timeAgo(hit.created_at);
    const url = hit.url || hit.story_url || '';

    const readBtn = url
        ? `<a href="${escHtml(url)}" target="_blank" rel="noopener noreferrer" class="btn btn--outline">Read More ↗</a>`
        : `<button class="btn btn--ghost" disabled>No Link</button>`;

    return `
    <article class="card">
      <div class="card__body">
        <span class="card__rank">${index + 1}</span>
        <h2 class="card__title">${title}</h2>
        <div class="card__meta">
          <span class="author">👤 ${author}</span>
          <span class="points">⬆ ${points} pts</span>
          <span class="comments">💬 ${comments}</span>
        </div>
      </div>
      <footer class="card__footer">
        <time class="card__date">${date}</time>
        ${readBtn}
      </footer>
    </article>`;
}

function renderAll() {
    newsGrid.innerHTML = allHits.map((h, i) => buildCard(h, i)).join('');
}

/* ── FETCH ── */
async function fetchStories(q) {
    const r = await fetch(`${API_BASE}?query=${encodeURIComponent(q)}&hitsPerPage=${HITS_PER_PAGE}`);
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    return r.json();
}

async function loadData() {
    if (isLoading) return;
    isLoading = true;
    newsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">Loading...</p>';
    try {
        const data = await fetchStories(query);
        allHits = data.hits || [];
        renderAll();
    } catch (e) {
        newsGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">Failed to load: ${e.message}</p>`;
    } finally {
        isLoading = false;
    }
}

/* ── SEARCH ── */
function doSearch(val) {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
        query = val.trim() || 'startup';
        loadData();
    }, 450);
}

searchInput.addEventListener('input', e => doSearch(e.target.value));
searchInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        clearTimeout(searchTimer);
        query = searchInput.value.trim() || 'startup';
        loadData();
    }
});
searchBtn.addEventListener('click', () => {
    clearTimeout(searchTimer);
    query = searchInput.value.trim() || 'startup';
    loadData();
});

/* ── NAV LINKS ── */
navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        query = link.dataset.query;
        searchInput.value = query;
        loadData();
    });
});

/* ── INIT ── */
loadData();

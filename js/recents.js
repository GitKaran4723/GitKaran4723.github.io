const recentsList = document.getElementById('recents-list');
const showMoreBtn = document.getElementById('show-more-btn');

let recents = [];
let showingAll = false;

async function loadRecents() {
  const res = await fetch('data/recents.json');
  recents = await res.json();
  renderRecents();
}

function renderRecents() {
  recentsList.innerHTML = '';

  const items = showingAll ? recents : recents.slice(0, 3);

  items.forEach(entry => {
    const li = document.createElement('li');
    li.textContent = entry.activity;
    recentsList.appendChild(li);
  });

  showMoreBtn.textContent = showingAll ? 'Show Less' : 'Show More';
}

showMoreBtn.addEventListener('click', () => {
  showingAll = !showingAll;
  renderRecents();
});

loadRecents();

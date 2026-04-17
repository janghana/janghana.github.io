// dataset marquee
const track = document.getElementById('marquee-track');
let DATA = [];

function init(d){
  DATA = d;
  // Duplicate the list so the loop is seamless.
  const all = d.concat(d);
  for (const it of all){
    const card = document.createElement('div');
    card.className = 'mcard';
    card.innerHTML = `
      <img src="${it.image}" alt="${it.image_id}" loading="lazy">
      <div class="body">
        <div class="id">${escape(it.image_id)}</div>
        <span class="label">Expert</span>
        <div>${escape(it.expert)}</div>
        <span class="label">Layman</span>
        <div>${escape(it.lay)}</div>
      </div>`;
    track.appendChild(card);
  }
  // Adjust speed by content width: ~30s per 1000px feels slow & smooth.
  requestAnimationFrame(() => {
    const w = track.scrollWidth / 2;     // single-loop width
    const dur = Math.max(120, w / 25);   // seconds
    track.style.animationDuration = dur + 's';
  });
}

function escape(s){
  return String(s).replace(/[&<>"']/g, c => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
  }[c]));
}

if (window.SAMPLES) {
  init(window.SAMPLES);
} else {
  fetch('data/samples.json').then(r => r.json()).then(init);
}

const owner='KLW-Anderegg';
const known=[
{name:'Analysis',description:'Analysis-Skript'},
{name:'Algebra',description:'Materialien zur Algebra'},
{name:'Wahrscheinlichkeit',description:'Wahrscheinlichkeitsrechnung und Statistik'},
{name:'Vektoranalysis',description:'Materialien zur Vektoranalysis'},
{name:'Funktionen',description:'Skript und Aufgaben zu Funktionen'},
{name:'FreeFlower',description:'Sammlung von Unterrichtsmaterialien mit gemeinsamem LaTeX-Layout',fork:true}
];
let repos=known;
const mathNames=new Set(['Analysis','Algebra','Wahrscheinlichkeit','Vektoranalysis','Funktionen']);
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function render(){const q=document.getElementById('search').value.trim().toLowerCase();const card=r=>`<a class="repo" href="${esc(r.html_url||`https://github.com/${owner}/${encodeURIComponent(r.name)}`)}" target="_blank" rel="noopener"><strong>↗ ${esc(r.name)}</strong><p>${esc(r.description||'Öffentliches GitHub-Repository')}</p><small>${r.archived?'Archiviert · ':''}${r.fork?'Fork · ':''}GitHub-Repository</small></a>`;document.getElementById('math-repos').innerHTML=repos.filter(r=>mathNames.has(r.name)&&`${r.name} ${r.description||''}`.toLowerCase().includes(q)).map(card).join('')||'<p class="muted">Keine Treffer.</p>';document.getElementById('all-repos').innerHTML=repos.filter(r=>`${r.name} ${r.description||''}`.toLowerCase().includes(q)).map(card).join('')||'<p class="muted">Keine Treffer.</p>'}
document.getElementById('search').addEventListener('input',render);render();
fetch(`https://api.github.com/users/${owner}/repos?per_page=100&type=owner&sort=updated`).then(r=>{if(!r.ok)throw Error(r.status);return r.json()}).then(data=>{repos=data.filter(r=>!r.private);render();document.getElementById('repo-status').textContent=`${repos.length} öffentliche Repositories · Die Liste wird beim Laden automatisch von GitHub aktualisiert.`}).catch(()=>{document.getElementById('repo-status').textContent='Die Live-Liste ist derzeit nicht verfügbar. Es werden die bekannten öffentlichen Repositories angezeigt.'});

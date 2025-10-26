// Interactivity: render projects, filter, and theme toggle
const PROJECTS_FALLBACK = [{"title": "Educator IT Literacy Enablement Program", "organization": "Fazaia Model Inter College Mushaf, Sargodha", "duration": "Apr 2022 \u2013 Sep 2022", "methodology": "Waterfall", "team_size": "1\u20134", "role": "Educational Program Manager", "summary": "Upskilled 250+ educators to deliver online classes and adopt LMS; owned planning, curriculum, risk control, and evaluation with leadership reporting.", "outcomes": ["250+ educators trained; complete coverage achieved", "Sustainable framework for digital education established", "Assessment & feedback loops improved adoption"], "achievements": ["Full training coverage across departments", "On-time delivery across structured phases", "Stakeholder alignment with weekly VP reviews"], "difficulties": ["Scheduling conflicts across departments", "Ensuring consistent participation and engagement", "Resource constraints for labs/connectivity"], "lessons_learned": ["Front-load risk mitigations for participation & scheduling", "Use phased curriculum with measurable outcomes", "Maintain leadership visibility to accelerate decisions"], "image": ""}, {"title": "Travel Stay Directory", "organization": "Tech Logans", "duration": "Mar 2023 \u2013 Sep 2023", "methodology": "Agile", "team_size": "1\u20134", "role": "Technical Project Manager", "summary": "Company-owned travel platform: listing search, filtering, and booking workflow; drove roadmap, backlog, sprints, and stakeholder demos with CEO.", "outcomes": ["Functional prototype with core listing/search features", "Prioritized backlog aligned to business value", "Transparent progress via sprint reviews and metrics"], "achievements": ["Established scalable architecture for future expansion", "Aligned engineering/design deliverables each sprint", "Maintained clear CEO communication and demos"], "difficulties": ["3rd-party API dependencies for maps & payments", "Balancing scope vs. timeline for launch readiness", "Performance considerations under search filters"], "lessons_learned": ["Define API integration risks early with fallbacks", "Keep MVP scope tight and value-driven", "Use burndown/velocity to negotiate scope change"], "image": ""}, {"title": "Hona AI Multi-Channel Authentication", "organization": "Tech Logans", "duration": "Sep 2023 \u2013 Jan 2024", "methodology": "Agile", "team_size": "1\u20134", "role": "Technical Project Manager", "summary": "Healthcare messaging platform integrating Gmail/Yahoo/Apple Mail with OAuth 2.0; managed compliance, cadence, and Slack-based stakeholder updates.", "outcomes": ["Secure OAuth multi-email integration delivered", "70% scope completed within client timebox", "Documented modules & handover for continuation"], "achievements": ["Maintained HIPAA-aligned practices and auditability", "Kept cadence with clear acceptance criteria", "Stakeholder visibility through Slack updates"], "difficulties": ["OAuth token handling and API rate limits", "Balancing compliance with usability", "Integration complexity across email providers"], "lessons_learned": ["Plan capacity for auth/compliance spikes", "Proactively monitor API quotas and throttling", "Use iteration gates for security validation"], "image": ""}, {"title": "Maguey Exchange \u2014 Website & Mobile App (MVP)", "organization": "Tech Logans", "duration": "Jan 2024 \u2013 May 2024", "methodology": "Hybrid", "team_size": "5\u20139", "role": "Project Manager", "summary": "Bilingual platform for agave producers/importers with onboarding, lot tracking, certificate uploads, and brand-aligned UX; guided roadmap and UAT.", "outcomes": ["MVP with English\u2013Spanish parity delivered", "Resolved photo upload and lot-ID flow issues", "Prepared post-MVP enhancement roadmap"], "achievements": ["Brand-consistent UX across web & mobile", "Structured UAT and feedback incorporation", "Scalable data model for lots/certificates"], "difficulties": ["Bilingual content sync across flows", "Edge cases in photo handling on mobile", "Balancing fixed brand elements with agility"], "lessons_learned": ["Validate bilingual UX early with prototypes", "Instrument uploads to trace failures", "Separate brand constraints from iterative backlog"], "image": ""}, {"title": "Ibn Al Haitham Tech Center", "organization": "Immentia", "duration": "May 2024 \u2013 Nov 2024", "methodology": "Waterfall", "team_size": "5\u20139", "role": "Training & Development Manager", "summary": "Launched a tech education center: budget, curriculum, facilities, and cross-functional coordination with educators and industry experts.", "outcomes": ["Center launched on schedule after 6 months", "Increased student engagement post-launch", "Recognized as a local hub for tech learning"], "achievements": ["End-to-end facility & curriculum orchestration", "Stakeholder collaboration across education & industry", "Structured governance and reporting"], "difficulties": ["Budget trade-offs vs facility capabilities", "Sequencing construction with procurement", "Hiring and onboarding qualified faculty"], "lessons_learned": ["Lock long-lead items early in plan", "Use milestone-based vendor SLAs", "Align curriculum with market skill demand"], "image": ""}, {"title": "Employee Management System (SaaS)", "organization": "Immentia", "duration": "Nov 2024 \u2013 Apr 2025", "methodology": "Hybrid", "team_size": "5\u20139", "role": "Technical Project Manager", "summary": "SaaS HR platform covering onboarding, roles/shifts, payroll, and compliance; combined waterfall planning with iterative delivery ceremonies.", "outcomes": ["Reduced HR admin overhead; improved engagement", "Scalable, intuitive platform meeting compliance needs", "Cross-department coordination & risk management"], "achievements": ["Balanced documentation with sprint execution", "Delivered core HR workflows with high adoption", "Established change control and RAG tracking"], "difficulties": ["Complex compliance rules across workflows", "Data migration edge cases", "Coordinating shifts across departments"], "lessons_learned": ["Hybrid is ideal for regulated SaaS domains", "Bake compliance into acceptance criteria", "Pilot migrations before full cutover"], "image": ""}, {"title": "Scam Soldier \u2014 Consumer Transparency Platform", "organization": "Immentia", "duration": "May 2025 \u2013 Sep 2025", "methodology": "Agile", "team_size": "1\u20134", "role": "Technical Project Manager", "summary": "Community reviews & scam reporting; prioritized authentication, moderation, fraud detection with iterative delivery and stakeholder updates.", "outcomes": ["Launched a platform to enable safer online decisions", "High-value features shipped incrementally", "Established moderation and ops documentation"], "achievements": ["Rapid iteration on core trust & safety features", "Stakeholder alignment via demos and updates", "Metrics-driven prioritization of backlog"], "difficulties": ["Balancing moderation with user freedom", "Fraud signal tuning and false positives", "Preventing spam & abuse at scale"], "lessons_learned": ["Define clear community guidelines early", "Iterate fraud models with real-world data", "Automate abuse handling where feasible"], "image": ""}];
const yearEl = document.getElementById('year'); if (yearEl) yearEl.textContent = new Date().getFullYear();

// theme
const root = document.documentElement;
const storedTheme = localStorage.getItem('theme') || 'light';
if (storedTheme === 'light') root.classList.add('light');
const toggle = document.getElementById('themeToggle');
if (toggle){
  toggle.addEventListener('click', () => {
    root.classList.toggle('light');
    localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
    toggle.textContent = root.classList.contains('light') ? '☀︎' : '☾';
  });
  toggle.textContent = root.classList.contains('light') ? '☀︎' : '☾';
}

// projects
let PROJECTS = [];
let currentFilter = 'all';

function render() {
  const grid = document.getElementById('project-grid');
  const items = PROJECTS.slice(0, 6);
  grid.innerHTML = items.map(p => card(p)).join('');
}

function list(items){
  if (!items || !items.length) return '<li class="muted">—</li>';
  return items.map(o=>`<li>${o}</li>`).join('');
}



function card(p){
  const hasImage = p.image && p.image.trim().length > 0;
  const method = p.methodology || '';
  const duration = p.duration || '';
  const budget = p.budget || 'N/A';
  const members = p.team_size || 'N/A';
  return `
  <article class="card project compact" data-id="${p._id}">
    <div class="media small">${hasImage ? `<img src="${p.image}" alt="${p.title}">` : ''}</div>
    <div class="body">
      <div class="title sm">${p.title || ''}</div>
      <div class="meta">${[p.organization, duration].filter(Boolean).join(' • ')}</div>
      <div class="kv">
        <span><strong>Method:</strong> ${method}</span>
        <span><strong>Budget:</strong> ${budget}</span>
        <span><strong>Members:</strong> ${members}</span>
      </div>
      <div class="actions">
        <button class="btn outline view-details" data-id="${p._id}" data-section="overview">Details</button>
      </div>
    </div>
  </article>`;
}




async function load() {
  try {
    const res = await fetch('data/projects.json', {cache:'no-store'});
    if (!res.ok) throw new Error('HTTP ' + res.status);
    PROJECTS = await res.json();
  } catch (err) {
    try {
      const inline = document.getElementById('projects-data');
      if (inline) PROJECTS = JSON.parse(inline.textContent);
      else throw new Error('no inline');
    } catch(e2){
      PROJECTS = Array.isArray(PROJECTS_FALLBACK) ? PROJECTS_FALLBACK : [];
    }
  }
  PROJECTS = PROJECTS.map((p, i) => ({...p, _id: i}));
  render();
}
load();



// filters
document.querySelectorAll('.chip').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.chip').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    render();
  });
});






// ----- Modal logic -----
let CURRENT_TAB = 'overview';
function synthesizeProcedure(p){
  // Build a simple procedure paragraph if none provided
  if (p.procedure && p.procedure.length){
    if (Array.isArray(p.procedure)) return '<ul>' + p.procedure.map(i=>`<li>${i}</li>`).join('') + '</ul>';
    return `<p>${p.procedure}</p>`;
  }
  const bits = [
    p.methodology ? `Followed a ${p.methodology} approach` : '',
    p.role ? `as ${p.role}` : '',
    p.team_size ? `with a team of ${p.team_size}` : ''
  ].filter(Boolean).join(', ');
  return `<p>${bits ? bits + '.' : 'Process details forthcoming.'}</p>`;
}

function renderModalContent(p){
  const area = document.querySelector('#project-modal .modal-content');
  if (!area) return;
  if (CURRENT_TAB === 'overview'){
    area.innerHTML = `<p>${p.summary || ''}</p>`;
  } else if (CURRENT_TAB === 'procedure'){
    area.innerHTML = synthesizeProcedure(p);
  } else {
    const arr = p[CURRENT_TAB] || [];
    if (Array.isArray(arr)){
      area.innerHTML = '<ul>' + arr.map(i=>`<li>${i}</li>`).join('') + '</ul>';
    } else {
      area.innerHTML = '<p>No data.</p>';
    }
  }
}

function showProjectModal(p, initialTab='overview'){
  const modal = document.getElementById('project-modal');
  CURRENT_TAB = initialTab;
  modal.querySelector('#modal-title').textContent = p.title || '';
  modal.querySelector('.modal-meta').textContent = [p.organization, p.duration, p.methodology].filter(Boolean).join(' • ');

  const media = modal.querySelector('.modal-media');
  media.innerHTML = p.image ? `<img src="${p.image}" alt="${p.title}" style="width:100%;height:240px;object-fit:cover;border-radius:12px;border:1px solid var(--line)">` : '';

  modal.querySelectorAll('.tab-btn').forEach(btn => {
    btn.setAttribute('aria-selected', btn.dataset.tab === CURRENT_TAB ? 'true' : 'false');
  });

  renderModalContent(p);

  modal.classList.add('show');
  modal.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal(){
  const modal = document.getElementById('project-modal');
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden','true');
  document.body.style.overflow = '';
}

document.addEventListener('click', (e) => {
  if (e.target.matches('[data-close]')) { closeProjectModal(); }
  if (e.target.closest('.view-details')){
    const btn = e.target.closest('.view-details');
    const id = btn.getAttribute('data-id');
    const section = btn.getAttribute('data-section') || 'overview';
    const p = PROJECTS.find(x => String(x._id) === String(id));
    if (p){ document.getElementById('project-modal').setAttribute('data-current-id', p._id); showProjectModal(p, section); }
  }
  if (e.target.classList && e.target.classList.contains('tab-btn')){
    const tab = e.target.getAttribute('data-tab');
    CURRENT_TAB = tab;
    document.querySelectorAll('#project-modal .tab-btn').forEach(b => b.setAttribute('aria-selected', b===e.target?'true':'false'));
    const id = document.querySelector('#project-modal').getAttribute('data-current-id');
    const p = PROJECTS.find(x => String(x._id) === String(id));
    if (p) renderModalContent(p);
  }
});

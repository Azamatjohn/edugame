// ═══════════════════════════════════════════════════
//  EduGame Pro — Main Script
// ═══════════════════════════════════════════════════

// ── App State ───────────────────────────────────────
let appState = {
  user: null,
  submissions: [],
  customTasks: {},
  currentSection: '',
  gameState: { stageIndex: 0, stars: 0, streak: 0, answers: {} },
};

// ── Utilities ───────────────────────────────────────
function esc(v) {
  return String(v ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function toast(msg, type = 'success') {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.className = `toast ${type} show`;
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove('show'), 3500);
}

function setContent(html) { document.getElementById('content').innerHTML = html; }

function setPage(title, sub = '') {
  document.getElementById('page-title').textContent = title;
  document.getElementById('page-sub').textContent = sub;
}

// ── Theme ───────────────────────────────────────────
function toggleTheme() {
  document.body.classList.toggle('light');
  const btn = document.getElementById('theme-btn');
  const isLight = document.body.classList.contains('light');
  btn.textContent = isLight ? '🌙' : '☀️';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
}

// ── Auth ────────────────────────────────────────────
let selectedRole = 'student';

function switchAuthTab(tab) {
  document.querySelectorAll('.auth-tab').forEach((t, i) => {
    t.classList.toggle('active', (i === 0 && tab === 'login') || (i === 1 && tab === 'register'));
  });
  document.getElementById('login-form').style.display = tab === 'login' ? 'flex' : 'none';
  document.getElementById('register-form').style.display = tab === 'register' ? 'flex' : 'none';
}

function selectRole(btn) {
  document.querySelectorAll('.role-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  selectedRole = btn.dataset.role;
  document.getElementById('class-group').style.display = selectedRole === 'student' ? 'flex' : 'none';
}

async function doLogin() {
  const login = document.getElementById('login-username').value.trim();
  const password = document.getElementById('login-password').value.trim();
  if (!login || !password) { toast('Login va parolni kiriting!', 'error'); return; }
  try {
    const data = await API.login(login, password);
    setTokens(data.access, data.refresh);
    setUser(data);
    appState.user = data;
    initApp();
  } catch (e) {
    toast(e.message, 'error');
  }
}

async function doRegister() {
  const full_name = document.getElementById('reg-fullname').value.trim();
  const student_class = document.getElementById('reg-class').value.trim();
  const login = document.getElementById('reg-login').value.trim();
  const password = document.getElementById('reg-password').value.trim();
  const confirm = document.getElementById('reg-confirm').value.trim();

  if (!full_name || !login || !password || !confirm) { toast('Barcha maydonlarni to\'ldiring!', 'error'); return; }
  if (login.length < 3) { toast('Login kamida 3 ta belgi bo\'lishi kerak!', 'error'); return; }
  if (password.length < 4) { toast('Parol kamida 4 ta belgi bo\'lishi kerak!', 'error'); return; }
  if (password !== confirm) { toast('Parollar mos kelmadi!', 'error'); return; }
  if (selectedRole === 'student' && !student_class) { toast('Sinfingizni kiriting!', 'error'); return; }

  try {
    const data = await API.register({ full_name, login, password, role: selectedRole, student_class });
    setTokens(data.access, data.refresh);
    setUser(data);
    appState.user = data;
    toast('Muvaffaqiyatli ro\'yxatdan o\'tdingiz! 🎉');
    initApp();
  } catch (e) {
    toast(e.message, 'error');
  }
}

function doLogout() {
  clearTokens();
  appState = { user: null, submissions: [], customTasks: {}, currentSection: '', gameState: { stageIndex: 0, stars: 0, streak: 0, answers: {} } };
  document.getElementById('app').style.display = 'none';
  document.getElementById('auth-screen').style.display = 'flex';
}

// ── App Init ────────────────────────────────────────
async function initApp() {
  const user = appState.user;
  document.getElementById('auth-screen').style.display = 'none';
  document.getElementById('app').style.display = 'flex';

  const avatars = { student: '🎓', teacher: '👨‍🏫', director: '🏫' };
  document.getElementById('sidebar-avatar').textContent = avatars[user.role] || '👤';
  document.getElementById('sidebar-name').textContent = user.full_name;
  document.getElementById('sidebar-role').textContent = user.role === 'student' ? 'O\'quvchi' : user.role === 'teacher' ? 'O\'qituvchi' : 'Direktor';

  buildNav(user.role);

  if (user.role === 'student') {
    await loadStudentData();
    showSection('dashboard');
  } else if (user.role === 'teacher') {
    await loadTeacherData();
    showSection('teacherDashboard');
  } else {
    showSection('directorDashboard');
  }
}

function buildNav(role) {
  const navs = {
    student: [
      { id: 'dashboard', icon: '🏠', label: 'Bosh sahifa' },
      { id: 'methods', icon: '📚', label: 'Metodlar' },
      { id: 'myResults', icon: '🏆', label: 'Natijalarim' },
      { id: 'leaderboard', icon: '👑', label: 'Reyting' },
    ],
    teacher: [
      { id: 'teacherDashboard', icon: '📊', label: 'Dashboard' },
      { id: 'teacherSubmissions', icon: '📋', label: 'Topshiriqlar' },
      { id: 'teacherMethods', icon: '🔧', label: 'Metodlar' },
    ],
    director: [
      { id: 'directorDashboard', icon: '📊', label: 'Dashboard' },
      { id: 'directorStudents', icon: '🎓', label: 'O\'quvchilar' },
      { id: 'directorTeachers', icon: '👨‍🏫', label: 'O\'qituvchilar' },
    ],
  };

  const nav = document.getElementById('sidebar-nav');
  nav.innerHTML = (navs[role] || []).map(item => `
    <button class="nav-item" id="nav-${item.id}" onclick="showSection('${item.id}')">
      <span class="nav-icon">${item.icon}</span>
      <span>${item.label}</span>
    </button>
  `).join('');
}

function showSection(section) {
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const navEl = document.getElementById(`nav-${section}`);
  if (navEl) navEl.classList.add('active');
  appState.currentSection = section;
  renderSection(section);
}

async function renderSection(section) {
  const renders = {
    dashboard: renderStudentDashboard,
    methods: renderMethods,
    myResults: renderMyResults,
    leaderboard: renderLeaderboard,
    teacherDashboard: renderTeacherDashboard,
    teacherSubmissions: renderTeacherSubmissions,
    teacherMethods: renderTeacherMethodsPanel,
    directorDashboard: renderDirectorDashboard,
    directorStudents: () => renderDirectorUsers('student'),
    directorTeachers: () => renderDirectorUsers('teacher'),
  };
  if (renders[section]) await renders[section]();
}

// ── Load Data ───────────────────────────────────────
async function loadStudentData() {
  try {
    const [subs, tasks] = await Promise.all([API.getMySubmissions(), API.getCustomTasks()]);
    appState.submissions = subs;
    appState.customTasks = {};
    tasks.forEach(t => {
      if (!appState.customTasks[t.method_id]) appState.customTasks[t.method_id] = [];
      appState.customTasks[t.method_id].push(t.task_data);
    });
  } catch (e) { toast('Ma\'lumot yuklashda xato', 'error'); }
}

async function loadTeacherData() {
  try {
    const [subs, tasks] = await Promise.all([API.getAllSubmissions(), API.getCustomTasks()]);
    appState.submissions = subs;
    appState.customTasks = {};
    tasks.forEach(t => {
      if (!appState.customTasks[t.method_id]) appState.customTasks[t.method_id] = [];
      appState.customTasks[t.method_id].push({ ...t.task_data, _id: t.id });
    });
  } catch (e) { toast('Ma\'lumot yuklashda xato', 'error'); }
}

function getAllTasks(methodId) {
  const method = METHODS.find(m => m.id === methodId);
  if (!method) return [];
  const baseTasks = method.tasks || method.stages || [];
  return [...baseTasks, ...(appState.customTasks[methodId] || [])];
}

function getMethodTitle(id) { return METHODS.find(m => m.id === id)?.title || id; }
function getMethodEmoji(id) { return METHODS.find(m => m.id === id)?.emoji || '📚'; }

// ── Student Dashboard ───────────────────────────────
function renderStudentDashboard() {
  setPage('Bosh sahifa', 'Bugungi faoliyatingiz');
  const subs = appState.submissions;
  const totalStars = subs.reduce((s, x) => s + (x.stars || 0), 0);
  const xp = subs.reduce((s, x) => s + 20 + (x.auto_score || 0) * 10 + (x.stars || 0), 0);
  const graded = subs.filter(s => s.status === 'graded').length;
  const done = new Set(subs.map(s => s.method_id)).size;

  setContent(`
    <div class="stats-grid">
      <div class="stat-card"><div class="stat-value">${xp}</div><div class="stat-label">⚡ XP Ball</div></div>
      <div class="stat-card"><div class="stat-value">⭐ ${totalStars}</div><div class="stat-label">Yulduzlar</div></div>
      <div class="stat-card"><div class="stat-value">${subs.length}</div><div class="stat-label">📤 Topshirilgan</div></div>
      <div class="stat-card"><div class="stat-value">${METHODS.length - done}</div><div class="stat-label">📚 Qolgan metodlar</div></div>
    </div>

    <div class="section-card">
      <div class="section-head">
        <div><h3>📚 Metodlar</h3><p>Qaysi metoddan boshlaysiz?</p></div>
        <button class="btn btn-primary btn-sm" onclick="showSection('methods')">Barchasi</button>
      </div>
      <div class="methods-grid">
        ${METHODS.map(m => renderMethodCard(m)).join('')}
      </div>
    </div>
  `);
}

// ── Methods ─────────────────────────────────────────
function renderMethods() {
  setPage('Metodlar', '4 ta interaktiv metod sizni kutmoqda');
  setContent(`<div class="methods-grid">${METHODS.map(m => renderMethodCard(m)).join('')}</div>`);
}





async function submitRegularMethod(methodId) {
  const method = METHODS.find(m => m.id === methodId);
  if (!method) return;
  const tasks = getAllTasks(methodId);
  const answers = {};
  let autoScore = 0;

  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    const key = `task${i + 1}`;
    if (task.type === 'video') { answers[key] = 'Ko\'rildi'; continue; }
    if (task.type === 'case-box') { answers[key] = task.title; continue; }
    if (task.type === 'radio') {
      const sel = document.querySelector(`input[name="${methodId}-${key}"]:checked`);
      if (!sel) { toast('Barcha test savollarini javoblang!', 'error'); return; }
      answers[key] = sel.value;
      if (sel.value === task.correct) autoScore++;
      continue;
    }
    const el = document.getElementById(`${methodId}-${key}`);
    const val = el?.value?.trim();
    if (!val) { toast('Barcha maydonlarni to\'ldiring!', 'error'); return; }
    answers[key] = val;
  }

  try {
    const result = await API.submitWork(methodId, answers, autoScore, 0);
    const idx = appState.submissions.findIndex(s => s.method_id === methodId);
    if (idx > -1) appState.submissions[idx] = result;
    else appState.submissions.unshift(result);
    toast('Topshiriq muvaffaqiyatli yuborildi! 🎉');
    showSection('myResults');
  } catch (e) {
    toast('Yuborishda xato: ' + e.message, 'error');
  }
}




async function nextGameStage(methodId) {
  const method = METHODS.find(m => m.id === methodId);
  const gs = appState.gameState;
  gs.stageIndex++;
  gs.answered = false;

  if (gs.stageIndex >= method.stages.length) {
    // Game complete — submit
    try {
      const answers = {};
      method.stages.forEach((stage, i) => { answers[`task${i+1}`] = stage.correct; });
      const result = await API.submitWork(methodId, answers, gs.stars, gs.stars);
      const idx = appState.submissions.findIndex(s => s.method_id === methodId);
      if (idx > -1) appState.submissions[idx] = result;
      else appState.submissions.unshift(result);
    } catch (e) {}

    showCelebration(gs.stars);
    return;
  }

  renderGame(method);
}


// ── My Results ──────────────────────────────────────
function renderMyResults() {
  setPage('Natijalarim', 'O\'qituvchi baholagan ishlaringiz');
  const subs = appState.submissions;

  if (!subs.length) {
    setContent(`<div class="section-card"><div class="empty-state"><div class="empty-icon">📭</div>Hali topshiriq yubormagansiz. Metodlardan birini ochib boshlang!</div></div>`);
    return;
  }

  setContent(`
    <div class="submissions-list">
      ${subs.map(sub => {
        const method = METHODS.find(m => m.id === sub.method_id);
        const stars = sub.stars || 0;
        return `
          <div class="submission-card">
            <div class="submission-head">
              <div>
                <h4>${method?.emoji || '📚'} ${esc(getMethodTitle(sub.method_id))}</h4>
                <div class="meta-row">
                  <span class="meta-tag">📅 ${esc(sub.submitted_at || '')}</span>
                  <span class="status-pill ${sub.status}">${sub.status === 'graded' ? '✅ Baholangan' : '⏳ Tekshirilmoqda'}</span>
                  ${stars ? `<span class="meta-tag">⭐ ${'⭐'.repeat(Math.min(stars,5))} (${stars})</span>` : ''}
                  ${sub.auto_score ? `<span class="meta-tag">🎯 Ball: ${sub.auto_score}</span>` : ''}
                </div>
              </div>
              <button class="btn btn-outline btn-sm" onclick="openMethod('${sub.method_id}')">Qayta bajarish</button>
            </div>
            ${sub.status === 'graded' ? `
              <div class="answer-block">
                <div class="answer-label">O'qituvchi bahosi</div>
                <strong style="font-size:1.2rem;color:var(--primary-light)">${esc(sub.grade)}/100</strong>
                ${sub.comment ? `<p style="margin-top:8px;color:var(--text2)">${esc(sub.comment)}</p>` : ''}
              </div>` : `
              <div class="answer-block" style="color:var(--text2)">⏳ O'qituvchi tekshirmoqda...</div>`}
          </div>
        `;
      }).join('')}
    </div>
  `);
}

// ── Leaderboard ─────────────────────────────────────
async function renderLeaderboard() {
  setPage('Reyting', 'Eng faol o\'quvchilar');
  setContent('<div class="section-card"><div class="empty-state">⏳ Yuklanmoqda...</div></div>');
  try {
    const board = await API.getLeaderboard();
    if (!board.length) {
      setContent('<div class="section-card"><div class="empty-state"><div class="empty-icon">👑</div>Hali hech kim ro\'yxatda yo\'q</div></div>');
      return;
    }
    const meLogin = appState.user?.login;
    setContent(`
      <div class="section-card">
        <div class="leaderboard-list">
          ${board.map((u, i) => `
            <div class="leaderboard-item ${i === 0 ? 'rank-1' : i === 1 ? 'rank-2' : i === 2 ? 'rank-3' : ''}">
              <div class="rank-badge">${i < 3 ? ['🥇','🥈','🥉'][i] : i+1}</div>
              <div class="leaderboard-info">
                <div class="leaderboard-name">${esc(u.full_name)}</div>
                <div class="leaderboard-class">${esc(u.student_class)} · ${u.works} ta ish</div>
              </div>
              <div style="text-align:right">
                <div class="leaderboard-xp">${u.xp} XP</div>
                <div class="leaderboard-stars">${'⭐'.repeat(Math.min(u.stars || 0, 5))}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `);
  } catch (e) { toast('Reyting yuklanmadi', 'error'); }
}

// ── Teacher Dashboard ───────────────────────────────
function renderTeacherDashboard() {
  setPage('O\'qituvchi paneli', 'Umumiy statistika');
  const subs = appState.submissions;
  const students = new Set(subs.map(s => s.student_name)).size;
  const graded = subs.filter(s => s.status === 'graded').length;
  const pending = subs.filter(s => s.status === 'pending').length;

  const methodUsage = METHODS.map(m => {
    const count = subs.filter(s => s.method_id === m.id).length;
    const pct = subs.length ? Math.round((count / subs.length) * 100) : 0;
    return { title: m.title, emoji: m.emoji, count, pct };
  });

  setContent(`
    <div class="stats-grid">
      <div class="stat-card"><div class="stat-value">${students}</div><div class="stat-label">🎓 Faol o'quvchilar</div></div>
      <div class="stat-card"><div class="stat-value">${subs.length}</div><div class="stat-label">📤 Jami topshiriqlar</div></div>
      <div class="stat-card"><div class="stat-value">${pending}</div><div class="stat-label">⏳ Tekshirilmagan</div></div>
      <div class="stat-card"><div class="stat-value">${graded}</div><div class="stat-label">✅ Baholangan</div></div>
    </div>

    <div class="two-col">
      <div class="section-card">
        <div class="section-head"><div><h3>📋 Oxirgi topshiriqlar</h3></div>
          <button class="btn btn-primary btn-sm" onclick="showSection('teacherSubmissions')">Barchasi</button>
        </div>
        ${subs.slice(0,5).map(s => `
          <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid var(--border)">
            <div>
              <strong style="font-size:0.9rem">${esc(s.student_name)}</strong>
              <div style="font-size:0.8rem;color:var(--text2)">${esc(getMethodTitle(s.method_id))}</div>
            </div>
            <span class="status-pill ${s.status}">${s.status === 'graded' ? '✅' : '⏳'}</span>
          </div>
        `).join('') || '<div class="empty-state">Hali topshiriq yo\'q</div>'}
      </div>

      <div class="section-card">
        <div class="section-head"><div><h3>📊 Metodlar bo'yicha</h3></div></div>
        ${methodUsage.map(m => `
          <div style="margin-bottom:16px">
            <div style="display:flex;justify-content:space-between;margin-bottom:6px;font-size:0.9rem">
              <span>${m.emoji} ${esc(m.title)}</span>
              <span style="color:var(--text2)">${m.count} ta</span>
            </div>
            <div style="height:6px;background:var(--bg3);border-radius:3px;overflow:hidden">
              <div style="height:100%;width:${m.pct}%;background:var(--primary);border-radius:3px;transition:width 0.8s"></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `);
}

// ── Teacher Submissions ─────────────────────────────
async function renderTeacherSubmissions(filter = 'all', q = '') {
  setPage('Topshiriqlar', 'O\'quvchilar ishlarini tekshiring va baholang');

  let subs = appState.submissions;
  if (filter !== 'all') subs = subs.filter(s => s.status === filter);
  if (q) {
    const lq = q.toLowerCase();
    subs = subs.filter(s => s.student_name?.toLowerCase().includes(lq) || getMethodTitle(s.method_id).toLowerCase().includes(lq));
  }

  setContent(`
    <div class="filters-row">
      <input class="filter-input" placeholder="🔍 O'quvchi yoki metod bo'yicha qidirish" id="sub-search" value="${esc(q)}"
        oninput="renderTeacherSubmissions(document.getElementById('sub-filter').value, this.value)"/>
      <select class="filter-select" id="sub-filter" onchange="renderTeacherSubmissions(this.value, document.getElementById('sub-search').value)">
        <option value="all" ${filter==='all'?'selected':''}>Barcha</option>
        <option value="pending" ${filter==='pending'?'selected':''}>⏳ Tekshirilmagan</option>
        <option value="graded" ${filter==='graded'?'selected':''}>✅ Baholangan</option>
      </select>
    </div>
    <div class="submissions-list">
      ${subs.length ? subs.map(s => renderTeacherSubCard(s)).join('') : '<div class="section-card"><div class="empty-state"><div class="empty-icon">📭</div>Topshiriq topilmadi</div></div>'}
    </div>
  `);
}

function renderTeacherSubCard(sub) {
  const method = METHODS.find(m => m.id === sub.method_id);
  const tasks = getAllTasks(sub.method_id);
  return `
    <div class="submission-card" id="sub-${sub.id}">
      <div class="submission-head">
        <div>
          <h4>🎓 ${esc(sub.student_name)} &nbsp;<span style="color:var(--text2);font-weight:600">${esc(sub.student_class)}</span></h4>
          <div class="meta-row">
            <span class="meta-tag">${method?.emoji || '📚'} ${esc(getMethodTitle(sub.method_id))}</span>
            <span class="meta-tag">📅 ${esc(sub.submitted_at || '')}</span>
            <span class="status-pill ${sub.status}">${sub.status === 'graded' ? '✅ Baholangan' : '⏳ Tekshirilmagan'}</span>
            ${sub.stars ? `<span class="meta-tag">⭐ ${sub.stars}</span>` : ''}
          </div>
        </div>
      </div>
      ${tasks.slice(0, 3).map((task, i) => {
        const key = `task${i+1}`;
        const ans = sub.answers?.[key];
        if (!ans || task.type === 'video' || task.type === 'case-box') return '';
        return `
          <div class="answer-block" style="margin-bottom:8px">
            <div class="answer-label">${i+1}-topshiriq: ${esc(task.question || task.title || '')}</div>
            ${typeof ans === 'object' ? Object.values(ans).join(', ') : esc(String(ans))}
          </div>`;
      }).join('')}
      <div class="grade-row">
        <input type="number" min="1" max="100" class="grade-input" id="grade-${sub.id}"
          value="${esc(sub.grade)}" placeholder="Baho (1-100)"/>
        <textarea class="comment-input" id="comment-${sub.id}"
          placeholder="Izoh yozing...">${esc(sub.comment)}</textarea>
        <button class="btn btn-primary btn-sm" onclick="saveGrade(${sub.id})">💾 Saqlash</button>
      </div>
    </div>`;
}

async function saveGrade(subId) {
  const grade = document.getElementById(`grade-${subId}`)?.value?.trim();
  const comment = document.getElementById(`comment-${subId}`)?.value?.trim() || '';
  if (!grade || isNaN(+grade) || +grade < 1 || +grade > 100) { toast('Baho 1–100 orasida bo\'lishi kerak!', 'error'); return; }
  try {
    const updated = await API.gradeSubmission(subId, +grade, comment);
    const idx = appState.submissions.findIndex(s => s.id === subId);
    if (idx > -1) appState.submissions[idx] = updated;
    toast('Baho saqlandi! ✅');
    renderTeacherSubmissions();
  } catch (e) { toast('Xato: ' + e.message, 'error'); }
}

// ── Teacher Methods Panel ───────────────────────────
function renderTeacherMethodsPanel() {
  setPage('Metodlar boshqaruvi', 'Har bir metod uchun qo\'shimcha topshiriqlar qo\'shing');
  setContent(`
    <div class="methods-grid">
      ${METHODS.map(m => `
        <div class="method-card" style="--method-color:${m.color}">
          <div class="method-emoji">${m.emoji}</div>
          <div class="method-title">${esc(m.title)}</div>
          <div class="method-desc">${esc(m.desc)}</div>
          <button class="method-btn" style="background:${m.color};margin-top:12px" onclick="openTeacherMethodDetail('${m.id}')">
            🔧 Topshiriqlarni boshqarish
          </button>
        </div>
      `).join('')}
    </div>
  `);
}

function openTeacherMethodDetail(methodId) {
  const method = METHODS.find(m => m.id === methodId);
  setPage(`${method.emoji} ${method.title}`, 'Qo\'shimcha topshiriqlar');
  const custom = appState.customTasks[methodId] || [];

  setContent(`
    <button class="btn btn-outline btn-sm" style="margin-bottom:16px" onclick="renderTeacherMethodsPanel()">← Orqaga</button>
    <div class="two-col">
      <div class="section-card">
        <h3 style="margin-bottom:16px">➕ Yangi topshiriq qo'shish</h3>
        <div style="display:flex;flex-direction:column;gap:12px">
          <select class="filter-select" id="new-task-type" style="width:100%">
            <option value="text">📝 Matnli javob</option>
            <option value="radio">🔘 Test savol</option>
          </select>
          <textarea id="new-task-q" placeholder="Savol matni..." class="comment-input" style="min-height:80px;width:100%"></textarea>
          <div id="new-task-options-wrap">
            <input type="text" id="new-task-options" class="filter-input" placeholder="Variantlar vergul bilan: A,B,C,D" style="width:100%"/>
            <input type="text" id="new-task-correct" class="filter-input" placeholder="To'g'ri javob" style="width:100%;margin-top:8px"/>
          </div>
          <button class="btn btn-primary" onclick="addCustomTask('${methodId}')">➕ Qo'shish</button>
        </div>
      </div>
      <div class="section-card">
        <h3 style="margin-bottom:16px">📋 Mavjud qo'shimcha topshiriqlar (${custom.length})</h3>
        ${custom.length ? custom.map((task, i) => `
          <div style="padding:12px;background:var(--bg3);border-radius:10px;margin-bottom:8px">
            <div style="font-weight:700;font-size:0.9rem;margin-bottom:4px">${i+1}. ${esc(task.question || task.title || '')}</div>
            <div style="font-size:0.8rem;color:var(--text2)">Turi: ${task.type}</div>
            <button class="action-btn btn-delete" style="margin-top:8px" onclick="deleteCustomTaskUI('${methodId}', ${i})">🗑 O'chirish</button>
          </div>
        `).join('') : '<div class="empty-state" style="padding:20px">Hali qo\'shimcha topshiriq yo\'q</div>'}
      </div>
    </div>
  `);

  document.getElementById('new-task-type').addEventListener('change', function() {
    document.getElementById('new-task-options-wrap').style.display = this.value === 'radio' ? 'block' : 'none';
  });
  document.getElementById('new-task-options-wrap').style.display = 'none';
}

async function addCustomTask(methodId) {
  const type = document.getElementById('new-task-type').value;
  const q = document.getElementById('new-task-q').value.trim();
  if (!q) { toast('Savol matnini kiriting!', 'error'); return; }

  let taskData = { type, question: q };
  if (type === 'radio') {
    const opts = document.getElementById('new-task-options').value.trim();
    const correct = document.getElementById('new-task-correct').value.trim();
    if (!opts || !correct) { toast('Variantlar va to\'g\'ri javobni kiriting!', 'error'); return; }
    taskData.options = opts.split(',').map(s => s.trim()).filter(Boolean);
    taskData.correct = correct;
  } else {
    taskData.placeholder = 'Javobingizni yozing...';
  }

  try {
    await API.createCustomTask(methodId, taskData);
    if (!appState.customTasks[methodId]) appState.customTasks[methodId] = [];
    appState.customTasks[methodId].push(taskData);
    toast('Topshiriq qo\'shildi! ✅');
    openTeacherMethodDetail(methodId);
  } catch (e) { toast('Xato: ' + e.message, 'error'); }
}

async function deleteCustomTaskUI(methodId, index) {
  if (!confirm('O\'chirishni tasdiqlaysizmi?')) return;
  const tasks = appState.customTasks[methodId] || [];
  const task = tasks[index];
  if (task?._id) {
    try { await API.deleteCustomTask(task._id); } catch (e) {}
  }
  tasks.splice(index, 1);
  appState.customTasks[methodId] = tasks;
  toast('Topshiriq o\'chirildi');
  openTeacherMethodDetail(methodId);
}

// ── Director Dashboard ──────────────────────────────
async function renderDirectorDashboard() {
  setPage('Direktor paneli', 'Umumiy ko\'rinish');
  try {
    const [students, teachers] = await Promise.all([
      API.listUsers('student'),
      API.listUsers('teacher'),
    ]);
    setContent(`
      <div class="stats-grid">
        <div class="stat-card"><div class="stat-value">${students.length}</div><div class="stat-label">🎓 O'quvchilar</div></div>
        <div class="stat-card"><div class="stat-value">${teachers.length}</div><div class="stat-label">👨‍🏫 O'qituvchilar</div></div>
        <div class="stat-card"><div class="stat-value">${students.filter(s=>s.is_active).length}</div><div class="stat-label">✅ Faol o'quvchilar</div></div>
        <div class="stat-card"><div class="stat-value">${students.filter(s=>!s.is_active).length}</div><div class="stat-label">🚫 Bloklangan</div></div>
      </div>
      <div class="section-card">
        <div class="section-head">
          <div><h3>👥 Oxirgi o'quvchilar</h3></div>
          <button class="btn btn-primary btn-sm" onclick="showSection('directorStudents')">Barchasi</button>
        </div>
        ${renderUserTableRows(students.slice(0,5))}
      </div>
    `);
  } catch (e) { toast('Xato: ' + e.message, 'error'); }
}

async function renderDirectorUsers(role) {
  setPage(role === 'student' ? 'O\'quvchilar' : 'O\'qituvchilar', 'Foydalanuvchilarni boshqaring');
  try {
    const users = await API.listUsers(role);
    setContent(`
      <div class="section-card">
        <table class="user-table">
          <thead>
            <tr>
              <th>Ism</th><th>Login</th><th>Sinf</th><th>Holat</th><th>Sana</th><th>Amallar</th>
            </tr>
          </thead>
          <tbody>
            ${users.map(u => `
              <tr id="user-row-${u.id}">
                <td><strong>${esc(u.full_name)}</strong></td>
                <td style="color:var(--text2)">@${esc(u.login)}</td>
                <td>${esc(u.student_class) || '—'}</td>
                <td><span class="badge ${u.is_active ? 'badge-active' : 'badge-blocked'}">${u.is_active ? '✅ Faol' : '🚫 Bloklangan'}</span></td>
                <td style="color:var(--text2);font-size:0.85rem">${new Date(u.created_at).toLocaleDateString('uz')}</td>
                <td style="display:flex;gap:6px">
                  <button class="action-btn btn-toggle" onclick="toggleUserStatus(${u.id}, '${role}')">${u.is_active ? 'Bloklash' : 'Faollashtirish'}</button>
                  <button class="action-btn btn-delete" onclick="deleteUserUI(${u.id}, '${role}')">O'chirish</button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
        ${!users.length ? '<div class="empty-state">Hali foydalanuvchi yo\'q</div>' : ''}
      </div>
    `);
  } catch (e) { toast('Xato: ' + e.message, 'error'); }
}

function renderUserTableRows(users) {
  return `<table class="user-table">
    <thead><tr><th>Ism</th><th>Login</th><th>Sinf</th><th>Holat</th></tr></thead>
    <tbody>
      ${users.map(u => `
        <tr>
          <td><strong>${esc(u.full_name)}</strong></td>
          <td style="color:var(--text2)">@${esc(u.login)}</td>
          <td>${esc(u.student_class) || '—'}</td>
          <td><span class="badge ${u.is_active ? 'badge-active' : 'badge-blocked'}">${u.is_active ? '✅ Faol' : '🚫 Bloklangan'}</span></td>
        </tr>
      `).join('')}
    </tbody>
  </table>`;
}

async function toggleUserStatus(userId, role) {
  try {
    await API.toggleUser(userId);
    toast('Holat o\'zgartirildi');
    renderDirectorUsers(role);
  } catch (e) { toast('Xato: ' + e.message, 'error'); }
}

async function deleteUserUI(userId, role) {
  if (!confirm('Foydalanuvchini o\'chirishni tasdiqlaysizmi? Bu amalni qaytarib bo\'lmaydi!')) return;
  try {
    await API.deleteUser(userId);
    toast('Foydalanuvchi o\'chirildi');
    renderDirectorUsers(role);
  } catch (e) { toast('Xato: ' + e.message, 'error'); }
}

// ── Boot ────────────────────────────────────────────
(function boot() {
  // Theme
  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light');
    const btn = document.getElementById('theme-btn');
    if (btn) btn.textContent = '🌙';
  }

  // Check existing session
  const user = getUser();
  const token = getToken();
  if (user && token) {
    appState.user = user;
    initApp();
  }
})();

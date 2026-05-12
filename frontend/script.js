// ═══════════════════════════════════════════════════
//  EduGame Pro — Main Script
// ═══════════════════════════════════════════════════

// ── 4 Methods Data ─────────────────────────────────
const METHODS = [
  {
    id: 'brainstorming',
    title: 'Aqliy Hujum',
    emoji: '🧠',
    color: '#6c63ff',
    desc: 'Erkin fikrlash va g\'oyalar generatsiyasi. Har bir g\'oya muhim!',
    level: 'Barcha darajalar',
    duration: '20 daqiqa',
    tasks: [
      {
        type: 'text',
        question: 'Kompyuter texnologiyalarining kundalik hayotdagi 5 ta muhim qo\'llanilishini yozing.',
        placeholder: 'G\'oyalaringizni shu yerga yozing...',
      },
      {
        type: 'radio',
        question: 'Aqliy hujum metodining asosiy maqsadi nima?',
        options: ['Faqat to\'g\'ri javoblarni topish', 'Imkon qadar ko\'p g\'oya ishlab chiqish', 'Munozara qilish', 'Kitob o\'qish'],
        correct: 'Imkon qadar ko\'p g\'oya ishlab chiqish',
      },
      {
        type: 'text',
        question: 'Kelajakda ixtiro qilmoqchi bo\'lgan texnologiyangizni tasvirlab bering.',
        placeholder: 'Ijodiy fikringizni yozing...',
      },
      {
        type: 'radio',
        question: 'Aqliy hujumda qaysi qoida to\'g\'ri?',
        options: ['G\'oyalarni darhol tanqid qilish', 'Faqat o\'zingizning g\'oyangizni aytish', 'Barcha g\'oyalarni qabul qilish', 'Jim o\'tirish'],
        correct: 'Barcha g\'oyalarni qabul qilish',
      },
    ],
  },
  {
    id: 'case-study',
    title: 'Muammoli Vaziyat',
    emoji: '🔍',
    color: '#06b6d4',
    desc: 'Real hayotdagi muammolarni tahlil qiling va yechimlar toping.',
    level: 'O\'rta daraja',
    duration: '25 daqiqa',
    tasks: [
      {
        type: 'case-box',
        title: 'Muammo: Maktab internet tarmoqi',
        description: 'Maktabda 500 o\'quvchi bor, lekin internet tezligi juda sekin. O\'quvchilar onlayn dars paytida muammolarga duch kelmoqda. Siz IT mutaxassis sifatida bu muammoni hal qilishingiz kerak.',
      },
      {
        type: 'text',
        question: 'Bu muammoning asosiy sabablarini aniqlang (kamida 3 ta sabab yozing).',
        placeholder: 'Sabablarni tahlil qiling...',
      },
      {
        type: 'radio',
        question: 'Maktab tarmog\'ini yaxshilash uchun birinchi qadam nima bo\'lishi kerak?',
        options: ['Darhol yangi kompyuter sotib olish', 'Mavjud tarmoqni diagnostika qilish', 'Internetni o\'chirib qo\'yish', 'O\'quvchilarni uyga yuborish'],
        correct: 'Mavjud tarmoqni diagnostika qilish',
      },
      {
        type: 'text',
        question: 'Muammoni hal qilish uchun o\'z yechimingizni batafsil yozing.',
        placeholder: 'Yechimingizni batafsil tavsiflang...',
      },
      {
        type: 'radio',
        question: 'Tarmoq bandligini kamaytirish uchun qaysi usul eng samarali?',
        options: ['Barcha saytlarni bloklash', 'Trafikni boshqarish (QoS) tizimini o\'rnatish', 'Faqat o\'qituvchilarga internet berish', 'Internet tezligini kamaytirish'],
        correct: 'Trafikni boshqarish (QoS) tizimini o\'rnatish',
      },
    ],
  },
  {
    id: 'flipped',
    title: 'Teskari Dars',
    emoji: '📺',
    color: '#ec4899',
    desc: 'Avval video ko\'ring, keyin mashqlarni bajaring — yangi usulda o\'rganing!',
    level: 'Barcha darajalar',
    duration: '30 daqiqa',
    tasks: [
      {
        type: 'video',
        question: 'Quyidagi video darsni diqqat bilan tomosha qiling.',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
      {
        type: 'radio',
        question: 'Kompyuterning markaziy protsessori (CPU) nima vazifani bajaradi?',
        options: ['Ma\'lumotlarni saqlash', 'Barcha hisob-kitoblarni amalga oshirish', 'Ekranga tasvirni chiqarish', 'Internetga ulanish'],
        correct: 'Barcha hisob-kitoblarni amalga oshirish',
      },
      {
        type: 'text',
        question: 'Video darsdan o\'rgangan eng muhim 3 ta ma\'lumotni yozing.',
        placeholder: 'O\'rgangan narsalaringizni yozing...',
      },
      {
        type: 'radio',
        question: 'RAM (operativ xotira) qanday xususiyatga ega?',
        options: ['Ma\'lumotlarni doimiy saqlaydi', 'Elektr o\'chganda ma\'lumotlar yo\'qoladi', 'Internetdan tezroq ishlaydi', 'Faqat video saqlaydi'],
        correct: 'Elektr o\'chganda ma\'lumotlar yo\'qoladi',
      },
    ],
  },
  {
    id: 'gamification',
    title: 'Bilimlar Labirinti',
    emoji: '🎮',
    color: '#f97316',
    desc: 'Bosqichma-bosqich savollarga javob bering, yulduzlar to\'plang!',
    level: 'Qiziqarli',
    duration: '20 daqiqa',
    isGame: true,
    stages: [
      {
        id: 'stage1', name: '1-eshik', icon: '🚪',
        question: 'Kompyuterning asosiy xotira qurilmasi qaysi?',
        options: ['RAM', 'Printer', 'Monitor', 'Sichqoncha'],
        correct: 'RAM', stars: 1,
      },
      {
        id: 'stage2', name: '2-kalit', icon: '🔑',
        question: 'Qaysi qurilma ma\'lumotlarni doimiy saqlaydi?',
        options: ['RAM', 'HDD/SSD', 'CPU', 'GPU'],
        correct: 'HDD/SSD', stars: 2,
      },
      {
        id: 'stage3', name: 'Bonus', icon: '⭐',
        question: 'Operatsion tizim nima uchun kerak?',
        options: ['Faqat o\'yin o\'ynash', 'Dasturiy ta\'minot va uskunani boshqarish', 'Faqat internet uchun', 'Videolarni tomosha qilish'],
        correct: 'Dasturiy ta\'minot va uskunani boshqarish', stars: 3,
      },
      {
        id: 'stage4', name: 'Final', icon: '🏆',
        question: 'Qaysi til veb-sahifalar tuzilmasini belgilaydi?',
        options: ['Python', 'HTML', 'Java', 'C++'],
        correct: 'HTML', stars: 4,
      },
    ],
  },
];

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
  return [...(method.tasks || []), ...(appState.customTasks[methodId] || [])];
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

function renderMethodCard(m) {
  const sub = appState.submissions.find(s => s.method_id === m.id);
  const done = !!sub;
  const stars = sub?.stars || 0;
  return `
    <div class="method-card" style="--method-color:${m.color}" onclick="openMethod('${m.id}')">
      <div class="method-emoji">${m.emoji}</div>
      <div class="method-title">${esc(m.title)}</div>
      <div class="method-desc">${esc(m.desc)}</div>
      <div class="method-meta">
        <span class="method-tag">⏱ ${esc(m.duration)}</span>
        <span class="method-tag">📊 ${esc(m.level)}</span>
        ${done ? `<span class="method-tag" style="color:${m.color}">✅ Bajarildi ${stars > 0 ? '⭐'.repeat(Math.min(stars,5)) : ''}</span>` : ''}
      </div>
      <button class="method-btn" style="background:${m.color}">
        ${done ? '🔄 Qayta bajarish' : '▶ Boshlash'}
      </button>
    </div>
  `;
}

// ── Open Method ─────────────────────────────────────
function openMethod(methodId) {
  const method = METHODS.find(m => m.id === methodId);
  if (!method) return;
  if (method.isGame) {
    openGameMethod(method);
  } else {
    openRegularMethod(method);
  }
}

// ── Regular Method ──────────────────────────────────
function openRegularMethod(method) {
  setPage(method.title, method.desc);
  const existing = appState.submissions.find(s => s.method_id === method.id);
  const tasks = getAllTasks(method.id);

  const tasksHTML = tasks.map((task, i) => renderTaskInput(task, i, method.id, existing)).join('');

  setContent(`
    <button class="btn btn-outline btn-sm" style="margin-bottom:16px" onclick="showSection('methods')">← Orqaga</button>
    <div style="display:grid;grid-template-columns:1fr 300px;gap:20px;align-items:start">
      <div>
        <div class="section-card" style="margin-bottom:16px">
          <h3 style="margin-bottom:8px">${method.emoji} ${esc(method.title)}</h3>
          <p style="color:var(--text2);font-size:0.9rem">${esc(method.desc)}</p>
        </div>
        ${tasksHTML}
        <button class="btn btn-primary" style="width:100%;margin-top:16px" onclick="submitRegularMethod('${method.id}')">
          📤 Topshiriqni yuborish
        </button>
      </div>
      <div class="section-card" style="position:sticky;top:80px">
        <h4 style="margin-bottom:12px">📋 Metod haqida</h4>
        <p style="font-size:0.85rem;color:var(--text2);margin-bottom:8px">⏱ ${esc(method.duration)}</p>
        <p style="font-size:0.85rem;color:var(--text2);margin-bottom:8px">📊 ${esc(method.level)}</p>
        <p style="font-size:0.85rem;color:var(--text2);margin-bottom:16px">📝 ${tasks.length} ta topshiriq</p>
        ${existing ? `<div style="padding:10px;background:rgba(34,197,94,0.1);border-radius:10px;font-size:0.85rem;color:var(--green)">✅ Avval topshirilgan</div>` : ''}
      </div>
    </div>
  `);
}

function renderTaskInput(task, index, methodId, existing) {
  const key = `task${index + 1}`;
  const ans = existing?.answers?.[key] || '';

  if (task.type === 'video') return `
    <div class="section-card" style="margin-bottom:14px">
      <p class="answer-label">${index + 1}-topshiriq</p>
      <p style="font-weight:700;margin-bottom:12px">${esc(task.question)}</p>
      <div style="border-radius:12px;overflow:hidden;aspect-ratio:16/9">
        <iframe width="100%" height="100%" src="${task.videoUrl}" frameborder="0" allowfullscreen></iframe>
      </div>
    </div>`;

  if (task.type === 'case-box') return `
    <div class="section-card" style="margin-bottom:14px;border-left:4px solid var(--cyan)">
      <p class="answer-label">📌 Muammoli vaziyat</p>
      <p style="font-weight:800;font-size:1rem;margin-bottom:8px">${esc(task.title)}</p>
      <p style="color:var(--text2);line-height:1.6;font-size:0.9rem">${esc(task.description)}</p>
    </div>`;

  if (task.type === 'radio') return `
    <div class="section-card" style="margin-bottom:14px">
      <p class="answer-label">${index + 1}-topshiriq • Test</p>
      <p style="font-weight:700;margin-bottom:14px">${esc(task.question)}</p>
      <div class="game-options" style="grid-template-columns:1fr 1fr">
        ${task.options.map(opt => `
          <label class="game-option" style="cursor:pointer;display:flex;align-items:center;gap:10px">
            <input type="radio" name="${methodId}-${key}" value="${esc(opt)}" ${ans === opt ? 'checked' : ''} style="accent-color:var(--primary)"/>
            ${esc(opt)}
          </label>
        `).join('')}
      </div>
    </div>`;

  return `
    <div class="section-card" style="margin-bottom:14px">
      <p class="answer-label">${index + 1}-topshiriq</p>
      <p style="font-weight:700;margin-bottom:12px">${esc(task.question)}</p>
      <textarea id="${methodId}-${key}" placeholder="${esc(task.placeholder || 'Javobingizni yozing...')}"
        style="width:100%;min-height:100px;padding:12px;background:var(--bg3);border:1.5px solid var(--border);border-radius:10px;color:var(--text);font-family:Nunito,sans-serif;font-size:0.9rem;resize:vertical;outline:none"
        onfocus="this.style.borderColor='var(--primary)'" onblur="this.style.borderColor='var(--border)'"
      >${esc(typeof ans === 'string' ? ans : '')}</textarea>
    </div>`;
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

// ── Gamification Method ─────────────────────────────
function openGameMethod(method) {
  appState.gameState = { stageIndex: 0, stars: 0, streak: 0, answers: {}, answered: false };
  const existing = appState.submissions.find(s => s.method_id === method.id);
  if (existing) {
    appState.gameState.stars = existing.stars || 0;
  }
  renderGame(method);
}

function renderGame(method) {
  setPage(method.title, 'Bosqichma-bosqich savollarga javob bering');
  const gs = appState.gameState;
  const stages = method.stages;
  const current = stages[gs.stageIndex];
  const pct = Math.round((gs.stageIndex / stages.length) * 100);

  const stagesHTML = stages.map((stage, i) => {
    const isDone = i < gs.stageIndex;
    const isCurrent = i === gs.stageIndex;
    const isLocked = i > gs.stageIndex;
    const cls = isDone ? 'completed' : isCurrent ? 'active' : 'locked';
    return `
      ${i > 0 ? `<div class="stage-connector ${isDone ? 'done' : ''}"></div>` : ''}
      <div class="stage-item">
        <div class="stage-icon ${cls}">
          ${stage.icon}
          ${isDone ? '<div class="stage-badge">✓</div>' : ''}
          ${isLocked ? '<div style="position:absolute;bottom:-4px;right:-4px;font-size:0.8rem">🔒</div>' : ''}
        </div>
        <div class="stage-name">${esc(stage.name)}</div>
        ${isCurrent ? '<div class="stage-label" style="color:var(--primary-light)">Joriy</div>' : ''}
        ${isDone ? '<div class="stage-label" style="color:var(--green)">✅</div>' : ''}
      </div>
    `;
  }).join('');

  const totalMaxStars = stages.reduce((s, st) => s + st.stars, 0);
  const medals = ['🥉', '🥈', '🥇'];
  const thresholds = [Math.floor(totalMaxStars * 0.3), Math.floor(totalMaxStars * 0.6), totalMaxStars];

  setContent(`
    <button class="btn btn-outline btn-sm" style="margin-bottom:16px" onclick="showSection('methods')">← Orqaga</button>

    <div class="game-stages">${stagesHTML}</div>

    <div class="game-layout">
      <div class="game-question-card" id="game-q-area">
        <div class="game-q-header">
          <span class="game-q-badge">${current.icon} ${esc(current.name)}</span>
          <span style="color:var(--text2);font-size:0.85rem">Savol ${gs.stageIndex + 1}/${stages.length}</span>
        </div>
        <p class="game-q-text">❓ ${esc(current.question)}</p>
        <div class="game-options" id="game-options">
          ${current.options.map(opt => `
            <button class="game-option" onclick="selectGameOption(this, '${esc(opt)}', '${esc(current.correct)}')">${esc(opt)}</button>
          `).join('')}
        </div>
        <div id="game-result" style="display:none"></div>
        <button class="game-next-btn" id="game-next-btn" style="display:none" onclick="nextGameStage('${method.id}')">
          ${gs.stageIndex < stages.length - 1 ? 'Keyingi bosqich →' : '🏆 Yakunlash'}
        </button>
      </div>

      <div class="rewards-panel">
        <div class="rewards-card">
          <div class="rewards-title">⭐ Yulduzlar</div>
          <div class="stars-display">
            <span class="stars-count">${gs.stars}</span>
            <span class="stars-total">/ ${totalMaxStars}</span>
          </div>
          <div class="stars-bar">
            <div class="stars-fill" style="width:${(gs.stars/totalMaxStars)*100}%"></div>
          </div>
          <div class="stars-next">Keyingi mukofot: ${thresholds.find(t => t > gs.stars) || totalMaxStars} yulduz</div>
        </div>

        <div class="rewards-card">
          <div class="rewards-title">🏅 Medallar</div>
          <div class="medals-grid">
            ${medals.map((m, i) => `
              <div class="medal ${gs.stars >= thresholds[i] ? 'earned' : 'locked'}" title="${thresholds[i]} yulduz kerak">${m}</div>
            `).join('')}
          </div>
        </div>

        <div class="rewards-card">
          <div class="rewards-title">🔥 Seriya</div>
          <div class="streak-display">
            <div class="streak-icon">🔥</div>
            <div>
              <div class="streak-count">${gs.streak}</div>
              <div class="streak-text">ketma-ket to'g'ri javob</div>
            </div>
          </div>
        </div>

        <div class="rewards-card">
          <div class="rewards-title">📊 Progress</div>
          <div class="progress-stages">
            ${stages.map((_, i) => `
              <div class="progress-stage-dot ${i < gs.stageIndex ? 'done' : i === gs.stageIndex ? 'current' : ''}">${i+1}</div>
            `).join('')}
          </div>
          <div class="progress-line">
            <div class="progress-fill-bar" style="width:${pct}%"></div>
          </div>
          <div class="progress-pct">${pct}%</div>
        </div>
      </div>
    </div>
  `);
}

function selectGameOption(btn, selected, correct) {
  if (appState.gameState.answered) return;
  appState.gameState.answered = true;

  const isCorrect = selected === correct;
  const options = document.querySelectorAll('.game-option');
  options.forEach(opt => {
    opt.disabled = true;
    if (opt.textContent.trim() === correct) opt.classList.add('correct');
    else if (opt === btn && !isCorrect) opt.classList.add('wrong');
  });

  const result = document.getElementById('game-result');
  result.style.display = 'flex';

  if (isCorrect) {
    const method = METHODS.find(m => m.id === 'gamification');
    const stage = method.stages[appState.gameState.stageIndex];
    appState.gameState.stars += stage.stars;
    appState.gameState.streak++;
    result.innerHTML = `
      <div class="game-result-banner success">
        🎉 Barakalla! 1-eshik ochildi! &nbsp;<strong>+${stage.stars} ⭐</strong>
        ${appState.gameState.streak > 1 ? `&nbsp; 🔥 ${appState.gameState.streak} seriya!` : ''}
      </div>`;
  } else {
    appState.gameState.streak = 0;
    result.innerHTML = `
      <div class="game-result-banner fail">
        😔 To'g'ri javob: <strong>${esc(correct)}</strong>
      </div>`;
  }

  document.getElementById('game-next-btn').style.display = 'block';
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

function showCelebration(stars) {
  const totalMaxStars = METHODS.find(m => m.id === 'gamification').stages.reduce((s,st) => s + st.stars, 0);
  const pct = Math.round((stars / totalMaxStars) * 100);
  const el = document.createElement('div');
  el.className = 'celebration';
  el.innerHTML = `
    <div class="celebration-content">
      <div class="celebration-emoji">🏆</div>
      <div class="celebration-title">Tabriklaymiz!</div>
      <div class="celebration-sub" style="margin:8px 0">Siz barcha bosqichlarni yakunladingiz!</div>
      <div style="font-size:2rem;margin:12px 0">⭐ ${stars} / ${totalMaxStars}</div>
      <div style="font-size:1rem;color:var(--text2);margin-bottom:20px">${pct}% natija</div>
      <button class="btn btn-primary" onclick="this.closest('.celebration').remove(); showSection('myResults')">
        Natijalarni ko'rish 🎯
      </button>
    </div>
  `;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 10000);
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
        return `
          <div class="submission-card">
            <div class="submission-head">
              <div>
                <h4>${method?.emoji || '📚'} ${esc(getMethodTitle(sub.method_id))}</h4>
                <div class="meta-row">
                  <span class="meta-tag">📅 ${esc(sub.submitted_at || '')}</span>
                  <span class="status-pill ${sub.status}">${sub.status === 'graded' ? '✅ Baholangan' : '⏳ Tekshirilmoqda'}</span>
                  ${sub.stars ? `<span class="meta-tag">⭐ ${sub.stars} yulduz</span>` : ''}
                </div>
              </div>
              <button class="btn btn-outline btn-sm" onclick="openMethod('${sub.method_id}')">Qayta ko'rish</button>
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

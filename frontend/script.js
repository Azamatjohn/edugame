const METHODS = [
  {
    id: 'brainstorming',
    title: 'Aqliy hujum',
    icon: 'fa-bolt',
    color: 'orange',
    short: 'Tezkor savollar orqali g‘oya va bilimlarni faollashtirish.',
    level: 'O‘rta',
    duration: '12 daqiqa',
    theory: 'Aqliy hujum metodida o‘quvchi qisqa vaqt ichida ko‘proq g‘oya va javoblarni ilgari suradi. Bu metod IT fanida algoritm, qurilma, tarmoq yoki dastur bilan bog‘liq muammolarni tez tahlil qilishga yordam beradi.',
    goals: [
      'Tezkor fikrlashni rivojlantirish',
      'Muhim tushunchalarni esga tushirish',
      'Axborot texnologiyalariga oid misollarni topish'
    ],
    tasks: [
      {
        type: 'radio',
        question: 'Kompyuterning ma’lumotlarni vaqtincha saqlovchi qismi qaysi?',
        options: ['ROM', 'RAM', 'Monitor', 'Printer'],
        correct: 'RAM'
      },
      {
        type: 'text',
        question: '“Axborot xavfsizligi” deganda nimani tushunasiz? 2–3 gap yozing.',
        placeholder: 'Javobingizni shu yerga yozing...'
      },
      {
        type: 'text',
        question: '“Parolni himoyalash” mavzusi bo‘yicha 3 ta tezkor g‘oya yozing.',
        placeholder: '1. ...\n2. ...\n3. ...'
      }
    ]
  },
  {
    id: 'cluster',
    title: 'Klaster',
    icon: 'fa-project-diagram',
    color: 'blue',
    short: 'Asosiy tushuncha atrofida bog‘lanish va mantiqiy zanjir qurish.',
    level: 'Oson',
    duration: '15 daqiqa',
    theory: 'Klaster metodida asosiy atama markazga qo‘yiladi va unga bog‘liq bo‘lgan tushunchalar tarmoqlar ko‘rinishida joylashtiriladi. Bu metod IT fanida apparat, dastur, internet va foydalanish kabi tushunchalarni tizimlashtirish uchun qulay.',
    goals: [
      'Mantiqiy bog‘lanishlarni ko‘rish',
      'Tushunchalarni guruhlarga ajratish',
      'Mavzuni sxema asosida o‘zlashtirish'
    ],
    tasks: [
      {
        type: 'cluster-map',
        question: '“Kompyuter” mavzusi bo‘yicha klaster tuzing.',
        center: 'Kompyuter',
        branches: ['Qurilmalar', 'Dasturlar', 'Internet', 'Foydalanish']
      },
      {
        type: 'radio',
        question: '“Kompyuter qurilmalari” klasterida qaysi biri kiritish qurilmasi?',
        options: ['Printer', 'Monitor', 'Klaviatura', 'Proyektor'],
        correct: 'Klaviatura'
      },
      {
        type: 'text',
        question: 'Tuzgan klasteringiz bo‘yicha qisqa xulosa yozing.',
        placeholder: 'Klasterdan qanday xulosa chiqardingiz?...'
      }
    ]
  },
  {
    id: 'project',
    title: 'Project-Based Learning',
    icon: 'fa-diagram-project',
    color: 'green',
    short: 'Loyiha asosida o‘rganish va amaliy mahsulot yaratish.',
    level: 'O‘rta',
    duration: '18 daqiqa',
    theory: 'Project-Based Learning metodida o‘quvchi aniq loyiha ustida ishlab, bilimini amaliyotda qo‘llaydi. Axborot texnologiyalari fanida bu metod web sahifa, taqdimot, infografika, jadval yoki oddiy dastur yaratish orqali samarali natija beradi.',
    goals: [
      'Mustaqil loyiha ustida ishlash',
      'Nazariy bilimni amaliyotga qo‘llash',
      'Yakuniy mahsulot yaratish ko‘nikmasini rivojlantirish'
    ],
    tasks: [
      {
        type: 'project-box',
        title: 'Mening birinchi web sahifam',
        description: 'Oddiy web sahifa yarating.',
        includes: [
          'Sahifada sarlavha bo‘lishi',
          'Ism va familiya yozilishi',
          'Qiziqishlar yoki sevimli fanlar ko‘rsatilishi',
          'Oddiy dizayn elementlari qo‘llanishi'
        ],
        codeSample: `<!DOCTYPE html>
<html>
<head>
  <title>Mening birinchi sahifam</title>
</head>
<body>
  <h1>Assalomu alaykum</h1>
  <p>Ismim: ______</p>
  <p>Qiziqishlarim: ______</p>
</body>
</html>`
      },
      {
        type: 'file',
        question: 'Tayyorlagan loyiha faylingiz nomini yozing.',
        placeholder: 'Masalan: loyiha.html'
      },
      {
        type: 'text',
        question: 'Loyihangizda nimalar tayyorlaganingizni qisqacha tushuntiring.',
        placeholder: 'Loyiha haqida qisqacha yozing...'
      },
      {
        type: 'text',
        question: 'Ish jarayonida qanday qiyinchiliklarga duch keldingiz?',
        placeholder: 'Qiyinchiliklaringizni yozing...'
      }
    ]
  },
  {
    id: 'case',
    title: 'Case Study',
    icon: 'fa-briefcase',
    color: 'red',
    short: 'Muammoli vaziyatni tahlil qilish va yechim taklif etish.',
    level: 'Yuqori',
    duration: '20 daqiqa',
    theory: 'Case Study metodida o‘quvchi real yoki realga yaqin vaziyatni tahlil qiladi. IT fanida bu metod tarmoq nosozligi, ma’lumot yo‘qolishi, dastur xatosi yoki xavfsizlik muammolarini yechish uchun samarali.',
    goals: [
      'Analitik fikrlashni rivojlantirish',
      'Muammo sababini aniqlash',
      'Amaliy yechim taklif etish'
    ],
    tasks: [
      {
        type: 'case-box',
        title: 'Kompyuter virusi muammosi',
        description: 'Bir o‘quvchi internetdan noma’lum fayl yuklab oldi. Endi kompyuteri sekin ishlay boshladi va reklamalar chiqmoqda.'
      },
      {
        type: 'text',
        question: 'Qanday muammo yuz berdi?',
        placeholder: 'Javobingizni yozing...'
      },
      {
        type: 'text',
        question: 'Virus qanday kirgan bo‘lishi mumkin?',
        placeholder: 'Javobingizni yozing...'
      },
      {
        type: 'text',
        question: 'Bu holatda nima qilish kerak?',
        placeholder: 'Javobingizni yozing...'
      },
      {
        type: 'text',
        question: 'Kelajakda buni oldini olish uchun qanday choralar ko‘rish kerak?',
        placeholder: 'Javobingizni yozing...'
      }
    ]
  },
  {
    id: 'flipped',
    title: 'Flipped Classroom',
    icon: 'fa-sync-alt',
    color: 'purple',
    short: 'Oldin nazariya bilan tanishib, darsda amaliy ishlash.',
    level: 'O‘rta',
    duration: '16 daqiqa',
    theory: 'Flipped Classroom metodida o‘quvchi avval nazariy material bilan mustaqil tanishadi, dars vaqtida esa amaliy topshiriqlarni bajaradi. IT fanida video, qo‘llanma va mini-ko‘rsatmalar asosida darsni samarali tashkil etish mumkin.',
    goals: [
      'Mustaqil tayyorgarlikni oshirish',
      'Dars vaqtida ko‘proq amaliyot qilish',
      'Mas’uliyat va faollikni kuchaytirish'
    ],
    tasks: [
      {
        type: 'video',
        question: 'Video darsni ko‘ring',
        videoUrl: 'https://www.youtube.com/embed/k2QnNiEr2sM'
      },
    
      {
        type: 'text',
        question: 'Uyda ko‘rilgan video darsdan nimalarni o‘rgandingiz?',
        placeholder: 'Qisqacha xulosa...'
      },
      {
        type: 'text',
        question: 'Dars davomida bajarish mumkin bo‘lgan 2 ta amaliy mashq taklif qiling.',
        placeholder: '1. ...\n2. ...'
      },
      {
        type: 'text',
        question: 'Tushunmagan savolingizni yozing.',
        placeholder: 'Savolingizni shu yerga yozing...'
      }
    ]
  },
  {
    id: 'gamification',
    title: 'Gamifikatsiya',
    icon: 'fa-gamepad',
    color: 'gold',
    short: 'O‘yin elementlari orqali qiziqish va motivatsiyani oshirish.',
    level: 'Oson',
    duration: '14 daqiqa',
    theory: 'Gamifikatsiya darsga o‘yin elementlarini kiritish orqali o‘quvchini faol qiladi. Ball, bosqich, yulduzcha va topshiriqni bajarish ko‘rsatkichlari ayniqsa IT darslarida kuchli motivatsiya beradi.',
    goals: [
      'Motivatsiyani oshirish',
      'Darsni qiziqarli qilish',
      'Natijani kuzatishni yengillashtirish'
    ],
    tasks: [
      {
        type: 'radio',
        question: 'Gamifikatsiyada qaysi element ko‘p ishlatiladi?',
        options: ['Bahona', 'Ball va badge', 'Faqat kitob', 'Faqat ma’ruza'],
        correct: 'Ball va badge'
      },
      {
        type: 'radio',
        question: 'Level tizimi nimaga xizmat qiladi?',
        options: ['Bezash uchun', 'Motivatsiyani oshirish uchun', 'Faqat baho qo‘yish uchun', 'Keraksiz'],
        correct: 'Motivatsiyani oshirish uchun'
      },
      {
        type: 'radio',
        question: 'Badge nima?',
        options: ['Jazo', 'Mukofot belgisi', 'Kompyuter turi', 'Kod turi'],
        correct: 'Mukofot belgisi'
      },
      {
        type: 'text',
        question: 'IT darsi uchun 3 ta o‘yin elementi yozing.',
        placeholder: 'Masalan: badge, daraja, vaqtli test...'
      },
      {
        type: 'text',
        question: 'Gamifikatsiya yordamida qaysi mavzuni qiziqarli o‘rgatish mumkin? Izohlang.',
        placeholder: 'Mavzu va asos...'
      }
    ]
  }
];
// ── METHODS data preserved above (unchanged) ──

// ═══════════════════════════════════════════════════════════════════════════
//  State — no more localStorage for data, API is the source of truth
// ═══════════════════════════════════════════════════════════════════════════
let appState = {
  role: 'student',
  currentUser: null,        // { name, studentClass } or { name } for teacher
  currentMethodId: null,
  currentTeacherMethodId: null,
};

// In-memory caches (populated from API on demand)
let submissionsDB = [];    // student's own OR all (teacher)
let customTasksDB = {};    // { methodId: [tasks] }

// ── XP / Level / Badge helpers (unchanged logic) ───────────────────────────
function calculateXP(item) {
  const radioCount = getAllTasksForMethod(item.method_id || item.methodId)
    .filter(t => t.type === 'radio').length;
  const baseXP = 20;
  const autoXP = (item.auto_score ?? item.autoScore ?? 0) * 10;
  const grade = item.grade ? Number(item.grade) : 0;
  const gradeXP = item.status === 'graded' ? Math.round(grade / 5) : 0;
  const autoScore = item.auto_score ?? item.autoScore ?? 0;
  const perfectBonus = radioCount > 0 && autoScore === radioCount ? 10 : 0;
  return baseXP + autoXP + gradeXP + perfectBonus;
}

function getStudentXP(submissions) {
  return submissions.reduce((sum, item) => sum + calculateXP(item), 0);
}

function getLevel(xp) {
  if (xp >= 400) return 5;
  if (xp >= 300) return 4;
  if (xp >= 200) return 3;
  if (xp >= 100) return 2;
  return 1;
}

function getBadge(xp) {
  if (xp >= 400) return '🏆 Master';
  if (xp >= 300) return '🥇 Top';
  if (xp >= 200) return '🥈 Faol';
  if (xp >= 100) return '🥉 Yaxshi';
  return '⭐ Start';
}

// ── Custom tasks helpers (now backed by API cache) ─────────────────────────
function getCustomTasks(methodId) {
  return customTasksDB[methodId] || [];
}

function getAllTasksForMethod(methodId) {
  const method = METHODS.find(m => m.id === methodId);
  if (!method) return [];
  return [...method.tasks, ...getCustomTasks(methodId)];
}

// ── Notification helper (replaces alert()) ─────────────────────────────────
function showToast(msg, type = 'success') {
  let toast = document.getElementById('edu-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'edu-toast';
    toast.style.cssText = `
      position:fixed; bottom:28px; right:28px; z-index:9999;
      padding:14px 22px; border-radius:12px; font-size:14px; font-weight:600;
      box-shadow:0 8px 32px rgba(0,0,0,0.35); transition:opacity .3s;
      max-width:340px; line-height:1.4;
    `;
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.background = type === 'error' ? '#ef4444' : '#10b981';
  toast.style.color = '#fff';
  toast.style.opacity = '1';
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => { toast.style.opacity = '0'; }, 3500);
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function nl2brSafe(value) {
  return escapeHtml(value).replace(/\n/g, '<br>');
}

// ── Auth ───────────────────────────────────────────────────────────────────
function switchTab(role) {
  document.getElementById('student-form').style.display = role === 'student' ? 'block' : 'none';
  document.getElementById('teacher-form').style.display = role === 'teacher' ? 'block' : 'none';
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  document.getElementById(role === 'student' ? 't-std' : 't-tch').classList.add('active');
}

async function enterApp(role) {
  if (role === 'student') {
    const name = document.getElementById('std-name').value.trim();
    const studentClass = document.getElementById('std-class-input').value.trim();
    if (!name || !studentClass) { showToast("Ma'lumotlarni to'liq kiriting!", 'error'); return; }

    try {
      const data = await API.studentLogin(name, studentClass);
      setTokens(data.access, data.refresh);
      appState.role = 'student';
      appState.currentUser = { name: data.name, studentClass: data.student_class };
      bootstrapApp('student');
      await loadStudentData();
      showSection('dashboard');
    } catch (e) {
      showToast(e.message, 'error');
    }
    return;
  }

  const email = document.getElementById('tch-email').value.trim();
  const pass = document.getElementById('tch-pass').value.trim();

  try {
    const data = await API.teacherLogin(email, pass);
    setTokens(data.access, data.refresh);
    appState.role = 'teacher';
    appState.currentUser = { name: data.name };
    bootstrapApp('teacher');
    await loadTeacherData();
    showSection('teacherDashboard');
  } catch (e) {
    showToast(e.message, 'error');
  }
}

function bootstrapApp(role) {
  document.getElementById('login-screen').style.display = 'none';
  document.getElementById('app-container').style.display = 'flex';
  document.getElementById('display-name').innerText = appState.currentUser.name;
  document.getElementById('sidebar-role').innerText =
    role === 'teacher' ? "O'qituvchi paneli" : "O'quvchi paneli";
  document.getElementById('student-nav').style.display = role === 'student' ? 'grid' : 'none';
  document.getElementById('teacher-nav').style.display = role === 'teacher' ? 'grid' : 'none';
  if (role === 'student') {
    document.getElementById('display-class').innerText = 'Sinf: ' + appState.currentUser.studentClass;
  } else {
    document.getElementById('display-class').innerText = 'Panel: Admin';
  }
}

async function loadStudentData() {
  try {
    // Load custom tasks for all methods
    const tasks = await API.getCustomTasks();
    customTasksDB = {};
    tasks.forEach(t => {
      if (!customTasksDB[t.method_id]) customTasksDB[t.method_id] = [];
      customTasksDB[t.method_id].push(t.task_data);
    });

    // Load student's own submissions
    submissionsDB = await API.getMySubmissions();

    renderStudentDashboard();
    renderMethods();
    renderStudentResults();
    await renderLeaderboard();
  } catch (e) {
    showToast('Ma\'lumotlarni yuklashda xato: ' + e.message, 'error');
  }
}

async function loadTeacherData() {
  try {
    const tasks = await API.getCustomTasks();
    customTasksDB = {};
    tasks.forEach(t => {
      if (!customTasksDB[t.method_id]) customTasksDB[t.method_id] = [];
      // Store full record (with id) for deletion
      if (!customTasksDB[`${t.method_id}_records`]) customTasksDB[`${t.method_id}_records`] = [];
      customTasksDB[t.method_id].push(t.task_data);
      customTasksDB[`${t.method_id}_records`].push(t);
    });

    submissionsDB = await API.getAllSubmissions();
    renderTeacherDashboard();
    renderTeacherSubmissions();
    renderTeacherMethods();
  } catch (e) {
    showToast('Ma\'lumotlarni yuklashda xato: ' + e.message, 'error');
  }
}

function logoutApp() {
  clearTokens();
  location.reload();
}

// ── Page routing ───────────────────────────────────────────────────────────
function getPageMeta(section) {
  const map = {
    dashboard: ['Dashboard', 'Bugungi faoliyatingiz shu yerda ko\'rinadi'],
    methods: ['Metodlar', 'Barcha metodlar va ularning topshiriqlari'],
    methodDetail: ['Metod sahifasi', 'Topshiriqni bajaring va yuboring'],
    results: ['Natijalarim', 'Baholar va izohlar shu yerda chiqadi'],
    teacherTaskBuilder: ['Topshiriq qo\'shish', 'Har bir metod uchun alohida topshiriq qo\'shing'],
    teacherDashboard: ['O\'qituvchi dashboardi', 'Umumiy monitoring va statistika'],
    submissions: ['O\'quvchilar ishlari', 'Bajarilgan topshiriqlarni tekshiring'],
    teacherMethods: ['Metodlar bo\'yicha', 'Har bir metoddagi ishlarni alohida ko\'ring'],
    teacherMethodDetail: ['Metod monitoringi', 'Tanlangan metod bo\'yicha barcha javoblar'],
    author: ['Muallif haqida', 'Platforma muallifi va loyiha maqsadi'],
  };
  return map[section] || ['EduGame', ''];
}

function showSection(section) {
  document.querySelectorAll('.content-view').forEach(v => (v.style.display = 'none'));
  const target = document.getElementById(`${section}-section`);
  if (target) target.style.display = 'block';
  const [title, subtitle] = getPageMeta(section);
  document.getElementById('page-title').innerText = title;
  document.getElementById('page-subtitle').innerText = subtitle;
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
  const navEl = document.getElementById(`nav-${section}`);
  if (navEl) navEl.classList.add('active');

  if (section === 'dashboard') renderStudentDashboard();
  if (section === 'results') renderStudentResults();
  if (section === 'teacherDashboard') renderTeacherDashboard();
  if (section === 'submissions') renderTeacherSubmissions();
  if (section === 'teacherMethods') renderTeacherMethods();
}

// ── Method cards ───────────────────────────────────────────────────────────
function renderMethodCard(method, teacherVersion = false) {
  if (teacherVersion) {
    return `
      <div class="m-card">
        <div class="m-icon ${method.color}"><i class="fas ${method.icon}"></i></div>
        <h3>${escapeHtml(method.title)}</h3>
        <p class="subtle">${escapeHtml(method.short)}</p>
        <div class="card-meta">
          <span class="mini-tag"><i class="fas fa-layer-group"></i> ${escapeHtml(method.level)}</span>
          <span class="mini-tag"><i class="fas fa-clock"></i> ${escapeHtml(method.duration)}</span>
        </div>
        <div style="display:grid;gap:10px;">
          <button class="card-btn" onclick="openTeacherMethod('${method.id}')">Monitoring</button>
          <button class="main-btn small-btn" onclick="openTeacherTaskBuilder('${method.id}')">Topshiriq qo'shish</button>
        </div>
      </div>`;
  }
  return `
    <div class="m-card">
      <div class="m-icon ${method.color}"><i class="fas ${method.icon}"></i></div>
      <h3>${escapeHtml(method.title)}</h3>
      <p class="subtle">${escapeHtml(method.short)}</p>
      <div class="card-meta">
        <span class="mini-tag"><i class="fas fa-layer-group"></i> ${escapeHtml(method.level)}</span>
        <span class="mini-tag"><i class="fas fa-clock"></i> ${escapeHtml(method.duration)}</span>
      </div>
      <button class="card-btn" onclick="openMethod('${method.id}')">Boshlash</button>
    </div>`;
}

function renderMethods() {
  const cards = METHODS.map(m => renderMethodCard(m)).join('');
  const grid = document.getElementById('methods-grid');
  const dash = document.getElementById('dashboard-methods');
  if (grid) grid.innerHTML = cards;
  if (dash) dash.innerHTML = cards;
}

// ── Student dashboard ──────────────────────────────────────────────────────
function renderStudentDashboard() {
  const xp = getStudentXP(submissionsDB);
  const level = getLevel(xp);
  const graded = submissionsDB.filter(s => s.status === 'graded');
  const completedMethods = new Set(submissionsDB.map(s => s.method_id));

  const statsHTML = [
    { label: 'XP ball', value: xp, help: `Level ${level}` },
    { label: 'Topshirilgan ishlar', value: submissionsDB.length, help: 'Barcha ishlar' },
    { label: 'Baholangan ishlar', value: graded.length, help: 'Tekshirilgan' },
    { label: 'Qolgan metodlar', value: METHODS.length - completedMethods.size, help: 'Hali bajarilmagan' },
  ].map(stat => `
    <div class="stat-card">
      <div class="label">${escapeHtml(stat.label)}</div>
      <div class="value">${escapeHtml(String(stat.value))}</div>
      <div class="help">${escapeHtml(stat.help)}</div>
    </div>`).join('');

  const wrap = document.querySelector('.student-stats');
  if (wrap) wrap.innerHTML = statsHTML;
}

async function renderLeaderboard() {
  const wrap = document.getElementById('leaderboard-list');
  if (!wrap) return;
  try {
    const board = await API.getLeaderboard();
    if (!board.length) {
      wrap.innerHTML = `<div class="empty-state">Hali ma'lumot yo'q</div>`;
      return;
    }
    wrap.innerHTML = `
      <div class="leaderboard-wrap">
        ${board.slice(0, 10).map((u, i) => `
          <div class="leaderboard-item ${i === 0 ? 'top-1' : ''}">
            <div class="leaderboard-left">
              <div class="leader-rank">#${i + 1}</div>
              <div>
                <div class="leader-name">${escapeHtml(u.name)}</div>
                <div class="leader-meta">${escapeHtml(u.student_class)} · Level ${getLevel(u.xp)} · ${getBadge(u.xp)}</div>
              </div>
            </div>
            <div class="leader-right">
              <div class="leader-xp">${u.xp} XP</div>
              <div class="leader-work">${u.works} ta ish</div>
            </div>
          </div>`).join('')}
      </div>`;
  } catch (e) {
    wrap.innerHTML = `<div class="empty-state">Leaderboard yuklanmadi</div>`;
  }
}

// ── Method detail (student) ────────────────────────────────────────────────
function openMethod(methodId) {
  appState.currentMethodId = methodId;
  const method = METHODS.find(m => m.id === methodId);
  if (!method) return;

  const existing = submissionsDB.find(s => (s.method_id || s.methodId) === methodId);
  const detail = document.getElementById('method-detail');
  if (!detail) return;

  detail.innerHTML = `
    <div class="method-hero">
      <div class="method-panel">
        <div class="m-icon ${method.color}"><i class="fas ${method.icon}"></i></div>
        <h2>${escapeHtml(method.title)}</h2>
        <p class="text-block" style="margin-top:14px;">${escapeHtml(method.theory)}</p>
        <ul class="bullet-list">
          ${method.goals.map(g => `<li>${escapeHtml(g)}</li>`).join('')}
        </ul>
        <div class="note-box" style="margin-top:18px;">
          <strong>Eslatma:</strong> topshiriqni bajarganingizdan so'ng yuboring. Javobingiz o'qituvchi paneliga tushadi va baholanadi.
        </div>
        ${existing ? `
          <div class="note-box" style="margin-top:12px;">
            <strong>Avval yuborilgan:</strong> Siz bu metod bo'yicha avval ham topshiriq yuborgansiz. Yangi javob yuborsangiz, eski javob yangilanadi.
          </div>` : ''}
      </div>
      <div class="method-panel">
        <h3>Topshiriqlar</h3>
        <div class="task-list">${renderTasks(method, existing)}</div>
        <button class="main-btn full-btn" style="margin-top:18px;" onclick="submitMethodWork('${method.id}')">
          Topshiriqni yuborish
        </button>
      </div>
    </div>`;

  showSection('methodDetail');
}

// renderTasks — identical to original (no data layer changes needed)
function renderTasks(method, existing) {
  return getAllTasksForMethod(method.id).map((task, index) => {
    const key = `task${index + 1}`;
    const ans = existing?.answers?.[key] || '';

    if (task.type === 'video') {
      return `
        <div class="task-card">
          <h4>${index + 1}. ${escapeHtml(task.question)}</h4>
          <div class="video-box">
            <iframe width="100%" height="260" src="${task.videoUrl}"
              title="Video dars" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>`;
    }
    if (task.type === 'case-box') {
      return `
        <div class="task-card">
          <h4>${escapeHtml(task.title)}</h4>
          <div class="note-box">${escapeHtml(task.description)}</div>
        </div>`;
    }
    if (task.type === 'project-box') {
      const savedCode = existing?.answers?.[`${key}_code`] || task.codeSample || '';
      return `
        <div class="task-card">
          <h4>${escapeHtml(task.title)}</h4>
          <div class="note-box">
            <strong>Vazifa:</strong> ${escapeHtml(task.description)}<br><br>
            <strong>Ichida:</strong>
            <ul class="bullet-list" style="margin-top:8px;">
              ${task.includes.map(i => `<li>${escapeHtml(i)}</li>`).join('')}
            </ul>
          </div>
          <div class="answer-box" style="margin-top:12px;">
            <div class="answer-title">Misol kod</div>
            <textarea id="${method.id}-${key}-code" class="code-editor"
              placeholder="Kodingizni shu yerga yozing...">${escapeHtml(savedCode)}</textarea>
          </div>
        </div>`;
    }
    if (task.type === 'cluster-map') {
      const saved = typeof ans === 'object' && ans !== null ? ans : {};
      return `
        <div class="task-card">
          <h4>${index + 1}. ${escapeHtml(task.question)}</h4>
          <div class="note-box" style="margin-bottom:12px;">
            <strong>Markaziy tushuncha:</strong> ${escapeHtml(task.center || 'Mavzu')}
          </div>
          <div class="cluster-wrap">
            ${task.branches.map((branch, bIndex) => `
              <div class="cluster-item">
                <label><strong>${escapeHtml(branch)}</strong></label>
                <textarea id="${method.id}-${key}-branch-${bIndex}"
                  placeholder="${escapeHtml(branch)} bo'yicha tushunchalarni yozing...">${escapeHtml(saved[`branch${bIndex}`] || '')}</textarea>
              </div>`).join('')}
          </div>
        </div>`;
    }
    if (task.type === 'radio') {
      return `
        <div class="task-card">
          <h4>${index + 1}. ${escapeHtml(task.question)}</h4>
          <div class="option-grid">
            ${task.options.map(opt => `
              <label class="option-item">
                <input type="radio" name="${method.id}-${key}" value="${escapeHtml(opt)}" ${ans === opt ? 'checked' : ''} />
                <span>${escapeHtml(opt)}</span>
              </label>`).join('')}
          </div>
        </div>`;
    }
    if (task.type === 'file') {
      return `
        <div class="task-card">
          <h4>${index + 1}. ${escapeHtml(task.question)}</h4>
          <input type="text" id="${method.id}-${key}" class="grade-input" style="width:100%;"
            placeholder="${escapeHtml(task.placeholder || 'Fayl nomini kiriting...')}"
            value="${escapeHtml(typeof ans === 'string' ? ans : '')}" />
        </div>`;
    }
    return `
      <div class="task-card">
        <h4>${index + 1}. ${escapeHtml(task.question)}</h4>
        <textarea id="${method.id}-${key}"
          placeholder="${escapeHtml(task.placeholder || 'Javob yozing...')}">${escapeHtml(typeof ans === 'string' ? ans : '')}</textarea>
      </div>`;
  }).join('');
}

async function submitMethodWork(methodId) {
  const method = METHODS.find(m => m.id === methodId);
  if (!method || !appState.currentUser) return;

  const tasks = getAllTasksForMethod(methodId);
  const answers = {};
  let autoScore = 0;

  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    const key = `task${i + 1}`;

    if (task.type === 'radio') {
      const selected = document.querySelector(`input[name="${method.id}-${key}"]:checked`);
      if (!selected) { showToast("Iltimos, barcha topshiriqlarni to'ldiring!", 'error'); return; }
      answers[key] = selected.value;
      if (selected.value === task.correct) autoScore++;
      continue;
    }
    if (task.type === 'cluster-map') {
      const clusterAnswers = {};
      let filled = 0;
      for (let b = 0; b < task.branches.length; b++) {
        const f = document.getElementById(`${method.id}-${key}-branch-${b}`);
        const v = f ? f.value.trim() : '';
        clusterAnswers[`branch${b}`] = v;
        if (v) filled++;
      }
      if (!filled) { showToast("Iltimos, barcha topshiriqlarni to'ldiring!", 'error'); return; }
      answers[key] = clusterAnswers;
      continue;
    }
    if (task.type === 'video') { answers[key] = "Video ko'rildi"; continue; }
    if (task.type === 'case-box') { answers[key] = task.title; continue; }
    if (task.type === 'project-box') {
      const f = document.getElementById(`${method.id}-${key}-code`);
      const v = f ? f.value.trim() : '';
      if (!v) { showToast('Iltimos, loyiha kodini kiriting!', 'error'); return; }
      answers[key] = task.title;
      answers[`${key}_code`] = v;
      continue;
    }
    const field = document.getElementById(`${method.id}-${key}`);
    const val = field ? field.value.trim() : '';
    if (!val) { showToast("Iltimos, barcha topshiriqlarni to'ldiring!", 'error'); return; }
    answers[key] = val;
  }

  try {
    const result = await API.submitWork(methodId, answers, autoScore);
    // Update local cache
    const idx = submissionsDB.findIndex(s => (s.method_id || s.methodId) === methodId);
    if (idx > -1) submissionsDB[idx] = result;
    else submissionsDB.unshift(result);

    renderStudentDashboard();
    renderStudentResults();
    showToast('Topshiriq muvaffaqiyatli yuborildi!');
    showSection('results');
  } catch (e) {
    showToast('Yuborishda xato: ' + e.message, 'error');
  }
}

// ── Student results ────────────────────────────────────────────────────────
function renderStudentResults() {
  const wrap = document.getElementById('student-results');
  if (!wrap) return;

  if (!submissionsDB.length) {
    wrap.innerHTML = `<div class="empty-state">Hali topshiriq yubormagansiz. Avval metodlardan birini ochib ish bajaring.</div>`;
    return;
  }

  wrap.innerHTML = `
    <div class="submission-list">
      ${submissionsDB.map(item => {
        const methodId = item.method_id || item.methodId;
        const radioCount = getAllTasksForMethod(methodId).filter(t => t.type === 'radio').length;
        const xp = calculateXP(item);
        const autoScore = item.auto_score ?? item.autoScore ?? 0;
        return `
          <div class="submission-card">
            <div class="submission-head">
              <div>
                <h3>${escapeHtml(getMethodTitle(methodId))}</h3>
                <div class="meta-line">
                  <span class="mini-tag"><i class="fas fa-calendar-alt"></i> ${escapeHtml(item.submitted_at || item.submittedAt || '')}</span>
                  <span class="status-pill ${escapeHtml(item.status)}">${item.status === 'graded' ? 'Baholangan' : 'Tekshirilmoqda'}</span>
                  <span class="score-pill"><i class="fas fa-bolt"></i> Avto ball: ${autoScore}/${radioCount}</span>
                  <span class="score-pill"><i class="fas fa-star"></i> ${xp} XP</span>
                </div>
              </div>
              <button class="card-btn" onclick="openMethod('${methodId}')">Qayta ko'rish</button>
            </div>
            <div class="answer-box">
              <div class="answer-title">O'qituvchi bahosi</div>
              <strong>${item.grade ? escapeHtml(item.grade) : "Hali qo'yilmagan"}</strong>
              <div style="margin-top:10px;">
                ${item.comment ? nl2brSafe(item.comment) : '<span class="subtle">Izoh hali yozilmagan</span>'}
              </div>
            </div>
          </div>`;
      }).join('')}
    </div>`;
}

function getMethodTitle(methodId) {
  return METHODS.find(m => m.id === methodId)?.title || 'Metod';
}

// ── Teacher dashboard ──────────────────────────────────────────────────────
function renderTeacherDashboard() {
  const graded = submissionsDB.filter(s => s.status === 'graded');
  const uniqueStudents = new Set(submissionsDB.map(s => `${s.student_name}|${s.student_class}`)).size;
  const avgGrade = graded.length
    ? (graded.reduce((sum, s) => sum + Number(s.grade || 0), 0) / graded.length).toFixed(1) : '-';

  const statsWrap = document.querySelector('.teacher-stats');
  if (statsWrap) {
    statsWrap.innerHTML = [
      { label: 'Topshirilgan ishlar', value: submissionsDB.length, help: "Barcha metodlar bo'yicha jami ishlar" },
      { label: "Faol o'quvchilar", value: uniqueStudents, help: "Kamida 1 ta ish yuborgan o'quvchilar" },
      { label: 'Baholangan ishlar', value: graded.length, help: "Tekshirilib baho qo'yilgan ishlar" },
      { label: "O'rtacha baho", value: avgGrade, help: 'Faqat baholangan ishlar asosida' },
    ].map(stat => `
      <div class="stat-card">
        <div class="label">${escapeHtml(stat.label)}</div>
        <div class="value">${escapeHtml(String(stat.value))}</div>
        <div class="help">${escapeHtml(stat.help)}</div>
      </div>`).join('');
  }

  const recentWrap = document.getElementById('recent-submissions');
  if (recentWrap) {
    recentWrap.innerHTML = submissionsDB.length
      ? `<div class="submission-list">
          ${submissionsDB.slice(0, 5).map(item => `
            <div class="submission-card">
              <div class="submission-head">
                <div>
                  <h3>${escapeHtml(item.student_name)}</h3>
                  <div class="meta-line">
                    <span class="mini-tag">${escapeHtml(item.student_class)}</span>
                    <span class="mini-tag">${escapeHtml(getMethodTitle(item.method_id))}</span>
                    <span class="status-pill ${escapeHtml(item.status)}">${item.status === 'graded' ? 'Baholangan' : 'Tekshirilmagan'}</span>
                  </div>
                </div>
                <button class="card-btn" onclick="showSection('submissions')">Ko'rish</button>
              </div>
            </div>`).join('')}
        </div>`
      : `<div class="empty-state">Hali biror topshiriq yuborilmagan.</div>`;
  }

  const usageWrap = document.getElementById('method-usage');
  if (usageWrap) {
    const usage = METHODS.map(method => {
      const count = submissionsDB.filter(s => s.method_id === method.id).length;
      const percent = submissionsDB.length ? Math.round((count / submissionsDB.length) * 100) : 0;
      return `
        <div class="progress-item">
          <div class="progress-top"><strong>${escapeHtml(method.title)}</strong><span class="subtle">${count} ta</span></div>
          <div class="progress-bar"><div class="progress-fill" style="width:${percent}%"></div></div>
        </div>`;
    }).join('');
    usageWrap.innerHTML = `<div class="progress-wrap">${usage}</div>`;
  }
}

// ── Teacher submissions ────────────────────────────────────────────────────
async function renderTeacherSubmissions() {
  const search = document.getElementById('submission-search')?.value?.trim().toLowerCase() || '';
  const statusFilter = document.getElementById('submission-status')?.value || 'all';

  try {
    submissionsDB = await API.getAllSubmissions(statusFilter, search);
  } catch (e) { /* use cached */ }

  const filtered = submissionsDB.filter(item => {
    const hay = `${item.student_name} ${item.student_class} ${getMethodTitle(item.method_id)}`.toLowerCase();
    return hay.includes(search);
  });

  const wrap = document.getElementById('teacher-submissions');
  if (!wrap) return;
  wrap.innerHTML = filtered.length
    ? `<div class="submission-list">${filtered.map(item => renderTeacherSubmissionCard(item)).join('')}</div>`
    : `<div class="empty-state">Mos keladigan topshiriq topilmadi.</div>`;
}

function renderAnswerHTML(task, ans, item, taskIndex) {
  if (task.type === 'cluster-map' && typeof ans === 'object' && ans !== null) {
    return `<div style="margin-top:8px;">
      ${task.branches.map((branch, bIndex) => `
        <div class="answer-box" style="margin-bottom:8px;">
          <strong>${escapeHtml(branch)}:</strong><br>
          ${nl2brSafe(ans[`branch${bIndex}`] || '')}
        </div>`).join('')}
    </div>`;
  }
  if (task.type === 'video') return `<div style="margin-top:8px;">${escapeHtml(ans || "Video ko'rildi")}</div>`;
  if (task.type === 'project-box') {
    const codeValue = item?.answers?.[`task${taskIndex + 1}_code`] || '';
    return `<div style="margin-top:8px;">
      <div class="answer-title">O'quvchi kiritgan kod</div>
      <pre style="white-space:pre-wrap;word-break:break-word;">${escapeHtml(codeValue)}</pre>
    </div>`;
  }
  if (task.type === 'case-box') {
    return `<div style="margin-top:8px;" class="subtle">Mazkur topshiriq informatsion blok sifatida ko'rsatildi.</div>`;
  }
  return `<div style="margin-top:8px;">${nl2brSafe(ans || '')}</div>`;
}

function renderTeacherSubmissionCard(item) {
  const method = METHODS.find(m => m.id === item.method_id);
  if (!method) return '';
  const radioCount = getAllTasksForMethod(item.method_id).filter(t => t.type === 'radio').length;
  const tasks = getAllTasksForMethod(item.method_id);
  const xp = calculateXP(item);
  const autoScore = item.auto_score ?? 0;

  return `
    <div class="submission-card">
      <div class="submission-head">
        <div>
          <h3>${escapeHtml(item.student_name)}</h3>
          <div class="meta-line">
            <span class="mini-tag"><i class="fas fa-user"></i> ${escapeHtml(item.student_class)}</span>
            <span class="mini-tag"><i class="fas fa-book"></i> ${escapeHtml(method.title)}</span>
            <span class="mini-tag"><i class="fas fa-calendar-alt"></i> ${escapeHtml(item.submitted_at || '')}</span>
            <span class="status-pill ${escapeHtml(item.status)}">${item.status === 'graded' ? 'Baholangan' : 'Tekshirilmagan'}</span>
            <span class="score-pill"><i class="fas fa-bolt"></i> Avto ball ${autoScore}/${radioCount}</span>
            <span class="score-pill"><i class="fas fa-star"></i> ${xp} XP</span>
          </div>
        </div>
      </div>
      ${tasks.map((task, idx) => {
        const ans = item.answers[`task${idx + 1}`];
        return `
          <div class="answer-box">
            <div class="answer-title">${idx + 1}-topshiriq</div>
            <strong>${escapeHtml(task.question || task.title || 'Topshiriq')}</strong>
            ${renderAnswerHTML(task, ans, item, idx)}
          </div>`;
      }).join('')}
      <div class="grade-row">
        <input type="number" min="1" max="100" class="grade-input"
          id="grade-${item.id}" value="${escapeHtml(item.grade || '')}" placeholder="Baho" />
        <textarea id="comment-${item.id}" placeholder="Izoh yozing...">${escapeHtml(item.comment || '')}</textarea>
        <button class="main-btn" onclick="saveGrade(${item.id})">Saqlash</button>
      </div>
    </div>`;
}

async function saveGrade(submissionId) {
  const gradeInput = document.getElementById(`grade-${submissionId}`);
  const commentInput = document.getElementById(`comment-${submissionId}`);
  const grade = gradeInput?.value?.trim();
  const comment = commentInput?.value?.trim() || '';

  const numericGrade = Number(grade);
  if (!grade || isNaN(numericGrade) || numericGrade < 1 || numericGrade > 100) {
    showToast("Baho 1–100 orasida bo'lishi kerak!", 'error');
    return;
  }

  try {
    const updated = await API.gradeSubmission(submissionId, numericGrade, comment);
    const idx = submissionsDB.findIndex(s => s.id === submissionId);
    if (idx > -1) submissionsDB[idx] = updated;

    renderTeacherDashboard();
    renderTeacherSubmissions();
    if (appState.currentTeacherMethodId) renderTeacherMethodDetail(appState.currentTeacherMethodId);
    showToast('Baho va izoh saqlandi!');
  } catch (e) {
    showToast('Saqlashda xato: ' + e.message, 'error');
  }
}

// ── Teacher methods ────────────────────────────────────────────────────────
function renderTeacherMethods() {
  const grid = document.getElementById('teacher-methods-grid');
  if (!grid) return;
  grid.innerHTML = METHODS.map(m => renderMethodCard(m, true)).join('');
}

function openTeacherMethod(methodId) {
  appState.currentTeacherMethodId = methodId;
  renderTeacherMethodDetail(methodId);
  showSection('teacherMethodDetail');
}

function renderTeacherMethodDetail(methodId) {
  const method = METHODS.find(m => m.id === methodId);
  const list = submissionsDB.filter(s => s.method_id === methodId);
  const wrap = document.getElementById('teacher-method-detail');
  if (!method || !wrap) return;

  wrap.innerHTML = `
    <div class="section-card">
      <div class="section-head">
        <div>
          <h3>${escapeHtml(method.title)}</h3>
          <p class="subtle">Shu metod bo'yicha yuborilgan barcha topshiriqlar</p>
        </div>
        <button class="main-btn small-btn" onclick="showSection('teacherMethods')">Ortga</button>
      </div>
      ${list.length
        ? `<div class="submission-list">${list.map(item => renderTeacherSubmissionCard(item)).join('')}</div>`
        : `<div class="empty-state">Bu metod bo'yicha hali hech kim topshiriq yubormagan.</div>`}
    </div>`;
}

// ── Teacher task builder ───────────────────────────────────────────────────
function openTeacherTaskBuilder(methodId) {
  appState.currentTeacherMethodId = methodId;
  renderTeacherTaskBuilder(methodId);
  showSection('teacherTaskBuilder');
}

function renderCustomTaskList(methodId) {
  const records = customTasksDB[`${methodId}_records`] || [];
  const tasks = customTasksDB[methodId] || [];
  if (!tasks.length) return `<div class="empty-state">Hali qo'shimcha topshiriq qo'shilmagan.</div>`;

  return `
    <div class="submission-list">
      ${tasks.map((task, idx) => `
        <div class="submission-card">
          <div class="answer-title">Qo'shimcha topshiriq ${idx + 1}</div>
          <strong>${escapeHtml(task.question || task.title || 'Topshiriq')}</strong>
          <div class="subtle" style="margin-top:8px;">Turi: ${escapeHtml(task.type)}</div>
          <button class="main-btn small-btn" style="margin-top:10px;background:red;"
            onclick="deleteTeacherTask('${methodId}', ${records[idx]?.id || idx})">
            O'chirish
          </button>
        </div>`).join('')}
    </div>`;
}

async function deleteTeacherTask(methodId, taskId) {
  if (!confirm("Rostdan ham o'chirmoqchimisiz?")) return;
  try {
    await API.deleteCustomTask(taskId);
    // Refresh cache
    const allTasks = await API.getCustomTasks();
    customTasksDB = {};
    allTasks.forEach(t => {
      if (!customTasksDB[t.method_id]) customTasksDB[t.method_id] = [];
      if (!customTasksDB[`${t.method_id}_records`]) customTasksDB[`${t.method_id}_records`] = [];
      customTasksDB[t.method_id].push(t.task_data);
      customTasksDB[`${t.method_id}_records`].push(t);
    });
    showToast("Topshiriq o'chirildi!");
    renderTeacherTaskBuilder(methodId);
  } catch (e) {
    showToast("O'chirishda xato: " + e.message, 'error');
  }
}

async function saveTeacherTask(methodId) {
  const method = METHODS.find(m => m.id === methodId);
  if (!method) return;
  let newTask = null;

  if (methodId === 'brainstorming') {
    const question = document.getElementById('builder-question')?.value.trim();
    const type = document.getElementById('builder-type')?.value;
    if (!question) { showToast('Savolni kiriting!', 'error'); return; }
    if (type === 'radio') {
      const optionsRaw = document.getElementById('builder-options')?.value.trim();
      const correct = document.getElementById('builder-correct')?.value.trim();
      if (!optionsRaw || !correct) { showToast("Variantlar va to'g'ri javobni kiriting!", 'error'); return; }
      newTask = { type: 'radio', question, options: optionsRaw.split(',').map(s => s.trim()).filter(Boolean), correct };
    } else {
      newTask = { type: 'text', question, placeholder: 'Javobingizni shu yerga yozing...' };
    }
  } else if (methodId === 'cluster') {
    const center = document.getElementById('builder-center')?.value.trim();
    const branchesRaw = document.getElementById('builder-branches')?.value.trim();
    if (!center || !branchesRaw) { showToast("Markaziy tushuncha va bo'limlarni kiriting!", 'error'); return; }
    newTask = { type: 'cluster-map', question: `"${center}" mavzusi bo'yicha klaster tuzing.`, center, branches: branchesRaw.split(',').map(s => s.trim()).filter(Boolean) };
  } else if (methodId === 'project') {
    const title = document.getElementById('builder-title')?.value.trim();
    const description = document.getElementById('builder-description')?.value.trim();
    const includesRaw = document.getElementById('builder-includes')?.value.trim();
    const codeSample = document.getElementById('builder-code')?.value.trim();
    if (!title || !description || !includesRaw) { showToast('Barcha maydonlarni to\'ldiring!', 'error'); return; }
    newTask = { type: 'project-box', title, description, includes: includesRaw.split(',').map(s => s.trim()).filter(Boolean), codeSample: codeSample || '' };
  } else if (methodId === 'case') {
    const title = document.getElementById('builder-title')?.value.trim();
    const description = document.getElementById('builder-description')?.value.trim();
    if (!title || !description) { showToast('Sarlavha va tavsifni kiriting!', 'error'); return; }
    newTask = { type: 'case-box', title, description };
  } else if (methodId === 'flipped') {
    const type = document.getElementById('builder-type')?.value;
    const question = document.getElementById('builder-question')?.value.trim();
    const videoUrl = document.getElementById('builder-video')?.value.trim();
    if (type === 'video') {
      if (!question || !videoUrl) { showToast('Savol va video linkni kiriting!', 'error'); return; }
      newTask = { type: 'video', question, videoUrl: normalizeYoutubeUrl(videoUrl) };
    } else if (type === 'radio') {
      const optionsRaw = document.getElementById('builder-options')?.value.trim();
      const correct = document.getElementById('builder-correct')?.value.trim();
      if (!question || !optionsRaw || !correct) { showToast('Barcha maydonlarni to\'ldiring!', 'error'); return; }
      newTask = { type: 'radio', question, options: optionsRaw.split(',').map(s => s.trim()).filter(Boolean), correct };
    } else {
      if (!question) { showToast('Savolni kiriting!', 'error'); return; }
      newTask = { type: 'text', question, placeholder: 'Javobingizni shu yerga yozing...' };
    }
  } else if (methodId === 'gamification') {
    const question = document.getElementById('builder-question')?.value.trim();
    const optionsRaw = document.getElementById('builder-options')?.value.trim();
    const correct = document.getElementById('builder-correct')?.value.trim();
    if (!question || !optionsRaw || !correct) { showToast('Barcha maydonlarni to\'ldiring!', 'error'); return; }
    newTask = { type: 'radio', question, options: optionsRaw.split(',').map(s => s.trim()).filter(Boolean), correct };
  }

  if (!newTask) { showToast("Topshiriqni saqlab bo'lmadi!", 'error'); return; }

  try {
    const created = await API.createCustomTask(methodId, newTask);
    if (!customTasksDB[methodId]) customTasksDB[methodId] = [];
    if (!customTasksDB[`${methodId}_records`]) customTasksDB[`${methodId}_records`] = [];
    customTasksDB[methodId].push(newTask);
    customTasksDB[`${methodId}_records`].push(created);
    showToast("Yangi topshiriq qo'shildi!");
    renderTeacherTaskBuilder(methodId);
  } catch (e) {
    showToast('Saqlashda xato: ' + e.message, 'error');
  }
}

function normalizeYoutubeUrl(url) {
  if (!url) return '';
  if (url.includes('youtube.com/embed/')) return url;
  if (url.includes('youtu.be/')) return `https://www.youtube.com/embed/${url.split('youtu.be/')[1].split('?')[0]}`;
  if (url.includes('watch?v=')) return `https://www.youtube.com/embed/${url.split('watch?v=')[1].split('&')[0]}`;
  return url;
}

// renderTaskBuilderForm — identical to original (pure UI, no data changes)
function renderTaskBuilderForm(methodId) {
  if (methodId === 'brainstorming') return `
    <div class="task-card">
      <h4>Aqliy hujum uchun yangi topshiriq</h4>
      <textarea id="builder-question" placeholder="Savol yoki topshiriq matni"></textarea>
      <select id="builder-type" style="margin-top:12px;">
        <option value="text">Matnli javob</option>
        <option value="radio">Test savol</option>
      </select>
      <div id="builder-radio-fields" style="margin-top:12px;display:none;">
        <input id="builder-options" type="text" placeholder="Variantlar vergul bilan: A,B,C,D" />
        <input id="builder-correct" type="text" placeholder="To'g'ri javob" style="margin-top:12px;" />
      </div>
      <button class="main-btn" style="margin-top:16px;" onclick="saveTeacherTask('${methodId}')">Saqlash</button>
    </div>`;
  if (methodId === 'cluster') return `
    <div class="task-card">
      <h4>Klaster uchun yangi topshiriq</h4>
      <input id="builder-center" type="text" placeholder="Markaziy tushuncha" />
      <input id="builder-branches" type="text" placeholder="Bo'limlar vergul bilan: Qurilmalar,Dasturlar,Internet" style="margin-top:12px;" />
      <button class="main-btn" style="margin-top:16px;" onclick="saveTeacherTask('${methodId}')">Saqlash</button>
    </div>`;
  if (methodId === 'project') return `
    <div class="task-card">
      <h4>Project-Based Learning uchun yangi topshiriq</h4>
      <input id="builder-title" type="text" placeholder="Loyiha sarlavhasi" />
      <textarea id="builder-description" placeholder="Loyiha tavsifi" style="margin-top:12px;"></textarea>
      <input id="builder-includes" type="text" placeholder="Ichida bo'ladigan bandlar vergul bilan" style="margin-top:12px;" />
      <textarea id="builder-code" class="code-editor" placeholder="Misol kod" style="margin-top:12px;"></textarea>
      <button class="main-btn" style="margin-top:16px;" onclick="saveTeacherTask('${methodId}')">Saqlash</button>
    </div>`;
  if (methodId === 'case') return `
    <div class="task-card">
      <h4>Case Study uchun yangi topshiriq</h4>
      <input id="builder-title" type="text" placeholder="Muammo sarlavhasi" />
      <textarea id="builder-description" placeholder="Muammoli vaziyat tavsifi" style="margin-top:12px;"></textarea>
      <button class="main-btn" style="margin-top:16px;" onclick="saveTeacherTask('${methodId}')">Saqlash</button>
    </div>`;
  if (methodId === 'flipped') return `
    <div class="task-card">
      <h4>Flipped Classroom uchun yangi topshiriq</h4>
      <select id="builder-type">
        <option value="video">Video topshiriq</option>
        <option value="text">Matnli savol</option>
        <option value="radio">Test savol</option>
      </select>
      <textarea id="builder-question" placeholder="Savol yoki topshiriq matni" style="margin-top:12px;"></textarea>
      <input id="builder-video" type="text" placeholder="Video iframe link" style="margin-top:12px;" />
      <div id="builder-radio-fields" style="margin-top:12px;display:none;">
        <input id="builder-options" type="text" placeholder="Variantlar vergul bilan: A,B,C,D" />
        <input id="builder-correct" type="text" placeholder="To'g'ri javob" style="margin-top:12px;" />
      </div>
      <button class="main-btn" style="margin-top:16px;" onclick="saveTeacherTask('${methodId}')">Saqlash</button>
    </div>`;
  if (methodId === 'gamification') return `
    <div class="task-card">
      <h4>Gamifikatsiya uchun yangi topshiriq</h4>
      <textarea id="builder-question" placeholder="Test savol matni"></textarea>
      <input id="builder-options" type="text" placeholder="Variantlar vergul bilan: A,B,C,D" style="margin-top:12px;" />
      <input id="builder-correct" type="text" placeholder="To'g'ri javob" style="margin-top:12px;" />
      <button class="main-btn" style="margin-top:16px;" onclick="saveTeacherTask('${methodId}')">Saqlash</button>
    </div>`;
  return `<div class="empty-state">Bu metod uchun forma topilmadi.</div>`;
}

function renderTeacherTaskBuilder(methodId) {
  const method = METHODS.find(m => m.id === methodId);
  const wrap = document.getElementById('teacher-task-builder');
  if (!method || !wrap) return;

  wrap.innerHTML = `
    <div class="section-card">
      <div class="section-head">
        <div>
          <h3>${escapeHtml(method.title)} — Topshiriq qo'shish</h3>
          <p class="subtle">Bu metod uchun o'ziga mos yangi topshiriq qo'shing</p>
        </div>
        <button class="main-btn small-btn" onclick="showSection('teacherMethods')">Ortga</button>
      </div>
      ${renderTaskBuilderForm(methodId)}
      <div class="section-card mt-24" style="padding:18px;">
        <h3 style="margin-bottom:12px;">Qo'shilgan topshiriqlar</h3>
        <div id="custom-task-list">${renderCustomTaskList(methodId)}</div>
      </div>
    </div>`;

  const typeSelect = document.getElementById('builder-type');
  const radioFields = document.getElementById('builder-radio-fields');
  const videoInput = document.getElementById('builder-video');
  if (typeSelect) {
    const refresh = () => {
      if (radioFields) radioFields.style.display = typeSelect.value === 'radio' ? 'block' : 'none';
      if (videoInput) videoInput.style.display = typeSelect.value === 'video' ? 'block' : 'none';
    };
    typeSelect.addEventListener('change', refresh);
    refresh();
  }
}

// ── Global function exports ────────────────────────────────────────────────
window.switchTab = switchTab;
window.enterApp = enterApp;
window.logoutApp = logoutApp;
window.showSection = showSection;
window.openMethod = openMethod;
window.submitMethodWork = submitMethodWork;
window.renderTeacherSubmissions = renderTeacherSubmissions;
window.saveGrade = saveGrade;
window.openTeacherMethod = openTeacherMethod;
window.openTeacherTaskBuilder = openTeacherTaskBuilder;
window.saveTeacherTask = saveTeacherTask;
window.deleteTeacherTask = deleteTeacherTask;

// ── Theme toggle (unchanged) ───────────────────────────────────────────────
const toggleBtn = document.getElementById('theme-toggle');
function setTheme(mode) {
  if (!toggleBtn) return;
  if (mode === 'light') {
    document.body.classList.add('light-mode');
    toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    localStorage.setItem('theme', 'light');
  } else {
    document.body.classList.remove('light-mode');
    toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
    localStorage.setItem('theme', 'dark');
  }
}
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    setTheme(document.body.classList.contains('light-mode') ? 'dark' : 'light');
  });
  setTheme(localStorage.getItem('theme') || 'dark');
}

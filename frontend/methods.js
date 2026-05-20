// ═══════════════════════════════════════════════════
//  EduGame Pro — Interactive Method Pages
//  Drag-and-drop powered interactive learning methods
// ═══════════════════════════════════════════════════

// ── Method Definitions ──────────────────────────────
const METHODS = [
  {
    id: 'brainstorming',
    title: 'Aqliy Hujum',
    subtitle: 'Mos variantlarni klasterlarga joylashtiring',
    emoji: '🧠',
    icon: '🔗',
    color: '#7c3aed',
    colorLight: 'rgba(124,58,237,0.1)',
    desc: 'Erkin fikrlash va g\'oyalar generatsiyasi orqali bilimlarni mustahkamlang.',
    level: 'Barcha darajalar',
    duration: '20 daqiqa',
    type: 'cluster',
    data: {
      topic: 'Kompyuter tizimi va uning asosiy qismlari',
      icon: '💻',
      clusters: [
        { id: 'hardware', name: 'Qurilmalar', icon: '🖥️', color: '#06b6d4', items: [] },
        { id: 'software', name: 'Dasturlar', icon: '💿', color: '#8b5cf6', items: [] },
        { id: 'network', name: 'Tarmoq', icon: '🌐', color: '#f97316', items: [] },
        { id: 'storage', name: 'Saqlash', icon: '💾', color: '#22c55e', items: [] },
      ],
      items: [
        { id: 'cpu', text: 'Protsessor (CPU)', correct: 'hardware' },
        { id: 'ram', text: 'Operativ xotira (RAM)', correct: 'hardware' },
        { id: 'monitor', text: 'Monitor', correct: 'hardware' },
        { id: 'windows', text: 'Windows OS', correct: 'software' },
        { id: 'browser', text: 'Brauzer', correct: 'software' },
        { id: 'antivirus', text: 'Antivirus', correct: 'software' },
        { id: 'router', text: 'Router', correct: 'network' },
        { id: 'wifi', text: 'Wi-Fi', correct: 'network' },
        { id: 'ip', text: 'IP manzil', correct: 'network' },
        { id: 'hdd', text: 'Qattiq disk (HDD)', correct: 'storage' },
        { id: 'ssd', text: 'SSD disk', correct: 'storage' },
        { id: 'usb', text: 'USB flesh xotira', correct: 'storage' },
      ],
    },
  },
  {
    id: 'case-study',
    title: 'Case Study',
    subtitle: 'Vaziyatni tahlil qiling va to\'g\'ri qarorlarni tanlang',
    emoji: '🔍',
    icon: '📁',
    color: '#7c3aed',
    colorLight: 'rgba(124,58,237,0.1)',
    desc: 'Real hayotdagi muammolarni tahlil qiling va yechimlar toping.',
    level: 'O\'rta daraja',
    duration: '25 daqiqa',
    type: 'drag-categorize',
    data: {
      situation: {
        icon: '⚠️',
        title: 'Vaziyat:',
        text: 'Ali elektron pochtasiga noma\'lum manzildan xabar oldi. Xabarda "Siz yutuq yutdingiz! Sovrinni olish uchun havolani bosing va shaxsiy ma\'lumotlaringizni kiriting" deb yozilgan.',
        question: 'Savol: Ali qanday harakatlarni qilishi kerak? Quyidagi harakatlarni to\'g\'ri yoki noto\'g\'ri qarorlar guruhiga ajrating.',
        image: '🖥️',
      },
      categories: [
        { id: 'correct', name: 'To\'g\'ri qarorlar', subtitle: '(Xavfsiz harakatlar)', icon: '✅', color: '#22c55e', colorLight: 'rgba(34,197,94,0.1)', items: [] },
        { id: 'wrong', name: 'Noto\'g\'ri qarorlar', subtitle: '(Xavfli harakatlar)', icon: '❌', color: '#ef4444', colorLight: 'rgba(239,68,68,0.08)', items: [] },
      ],
      items: [
        { id: 'check-sender', text: 'Yuboruvchining manzilini tekshirish', icon: '🔍', correct: 'correct' },
        { id: 'click-link', text: 'Xabardagi havolani darhol bosish', icon: '🔗', correct: 'wrong' },
        { id: 'enter-data', text: 'Parol va shaxsiy ma\'lumotlarni kiritish', icon: '🔒', correct: 'wrong' },
        { id: 'spam', text: 'Xabarni spam deb belgilash', icon: '🛡️', correct: 'correct' },
        { id: 'ask-teacher', text: 'O\'qituvchidan yoki kattalardan maslahat so\'rash', icon: '👨‍🏫', correct: 'correct' },
        { id: 'no-link', text: 'Shubhali havolani ochmaslik', icon: '🚫', correct: 'correct' },
        { id: 'delete', text: 'Xabarni o\'chirish', icon: '🗑️', correct: 'correct' },
      ],
    },
  },
  {
    id: 'flipped',
    title: 'Problem-Based Learning',
    subtitle: 'Muammoni yechish tartibini tuzing',
    emoji: '💡',
    icon: '💡',
    color: '#7c3aed',
    colorLight: 'rgba(124,58,237,0.1)',
    desc: 'Muammoni tahlil qiling va yechish bosqichlarini to\'g\'ri tartibga soling.',
    level: 'Barcha darajalar',
    duration: '25 daqiqa',
    type: 'drag-order',
    data: {
      problem: {
        icon: '❓',
        title: 'Vaziyat (muammo):',
        text: 'Kompyuter juda sekin ishlayapti. Dasturlar kech ochiladi, internet sekin ishlaydi.',
        task: 'Topshiriq: Quyidagi bosqichlarni muammoni yechishning to\'g\'ri ketma-ketligiga joylashtiring.',
      },
      correctOrder: ['diagnose', 'check-memory', 'scan-virus', 'clean-files', 'check-result'],
      items: [
        { id: 'diagnose', text: 'Muammoni aniqlash', icon: '🔍' },
        { id: 'check-memory', text: 'Xotira va disk holatini ko\'rib chiqish', icon: '🕐' },
        { id: 'scan-virus', text: 'Kompyuterni viruslarga tekshirish', icon: '🛡️' },
        { id: 'clean-files', text: 'Keraksiz fayllarni o\'chirish', icon: '🗑️' },
        { id: 'check-result', text: 'Natijani tekshirish', icon: '📋' },
      ],
    },
  },
  {
    id: 'gamification',
    title: 'Gamifikatsiya',
    subtitle: 'Bilimlar labirinti',
    emoji: '🎮',
    icon: '🎮',
    color: '#f97316',
    colorLight: 'rgba(249,115,22,0.1)',
    desc: 'Bosqichma-bosqich savollarga javob bering, yulduzlar to\'plang!',
    level: 'Qiziqarli',
    duration: '20 daqiqa',
    type: 'game-stages',
    stages: [
      { id: 'stage1', name: '1-eshik', icon: '🚪', question: 'Kompyuterning asosiy xotira qurilmasi qaysi?', options: ['RAM', 'Printer', 'Monitor', 'Sichqoncha'], correct: 'RAM', stars: 1 },
      { id: 'stage2', name: '2-kalit', icon: '🔑', question: 'Qaysi qurilma ma\'lumotlarni doimiy saqlaydi?', options: ['RAM', 'HDD/SSD', 'CPU', 'GPU'], correct: 'HDD/SSD', stars: 2 },
      { id: 'stage3', name: 'Bonus bosqich', icon: '⭐', question: 'Operatsion tizim nima uchun kerak?', options: ['Faqat o\'yin o\'ynash', 'Dasturiy ta\'minot va uskunani boshqarish', 'Faqat internet uchun', 'Videolarni tomosha qilish'], correct: 'Dasturiy ta\'minot va uskunani boshqarish', stars: 3 },
      { id: 'stage4', name: 'Final', icon: '🏆', question: 'Qaysi til veb-sahifalar tuzilmasini belgilaydi?', options: ['Python', 'HTML', 'Java', 'C++'], correct: 'HTML', stars: 4 },
    ],
  },
];

// ═══════════════════════════════════════════════════
//  METHOD ROUTER — opens the right UI per type
// ═══════════════════════════════════════════════════
function openMethod(methodId) {
  const method = METHODS.find(m => m.id === methodId);
  if (!method) return;
  switch (method.type) {
    case 'cluster':        openClusterMethod(method); break;
    case 'drag-categorize': openCategorizeMethod(method); break;
    case 'drag-order':     openOrderMethod(method); break;
    case 'game-stages':    openGameMethod(method); break;
  }
}

// ═══════════════════════════════════════════════════
//  SHARED DRAG-AND-DROP ENGINE
// ═══════════════════════════════════════════════════
let dragState = { item: null, sourceId: null };

function initDrag() {
  document.addEventListener('dragover', e => e.preventDefault());
}

function onDragStart(e, itemId, sourceId) {
  dragState = { item: itemId, sourceId };
  e.dataTransfer.effectAllowed = 'move';
  e.currentTarget.style.opacity = '0.4';
}

function onDragEnd(e) {
  e.currentTarget.style.opacity = '1';
}

function onDrop(e, targetId, dropFn) {
  e.preventDefault();
  e.stopPropagation();
  const zone = e.currentTarget;
  zone.classList.remove('drag-over');
  if (dragState.item) dropFn(dragState.item, dragState.sourceId, targetId);
  dragState = { item: null, sourceId: null };
}

function onDragEnter(e) {
  e.currentTarget.classList.add('drag-over');
}

function onDragLeave(e) {
  e.currentTarget.classList.remove('drag-over');
}

// Touch drag support
function addTouchDrag(el, itemId, sourceId, onDropFn) {
  let clone = null;
  el.addEventListener('touchstart', e => {
    dragState = { item: itemId, sourceId };
    clone = el.cloneNode(true);
    clone.style.cssText = 'position:fixed;opacity:0.85;pointer-events:none;z-index:9999;transition:none;';
    document.body.appendChild(clone);
    el.style.opacity = '0.4';
  }, { passive: true });

  el.addEventListener('touchmove', e => {
    const t = e.touches[0];
    if (clone) { clone.style.left = (t.clientX - 60) + 'px'; clone.style.top = (t.clientY - 20) + 'px'; }
  }, { passive: true });

  el.addEventListener('touchend', e => {
    el.style.opacity = '1';
    if (clone) { clone.remove(); clone = null; }
    const t = e.changedTouches[0];
    const target = document.elementFromPoint(t.clientX, t.clientY)?.closest('[data-drop-zone]');
    if (target && dragState.item) onDropFn(dragState.item, dragState.sourceId, target.dataset.dropZone);
    dragState = { item: null, sourceId: null };
  });
}

// ═══════════════════════════════════════════════════
//  1. CLUSTER METHOD — drag items into cluster nodes
// ═══════════════════════════════════════════════════
function openClusterMethod(method) {
  setPage(method.title, method.subtitle);
  const state = {
    placed: {}, // itemId -> clusterId
    clusters: method.data.clusters.map(c => ({ ...c, items: [] })),
    items: [...method.data.items],
  };

  renderCluster(method, state);
}

function renderCluster(method, state) {
  const data = method.data;
  const remaining = state.items.filter(item => !state.placed[item.id]);
  const placedCount = Object.keys(state.placed).length;
  const total = state.items.length;
  const score = Math.round((placedCount / total) * 120);

  setContent(`
    <div class="method-page-header">
      <button class="back-btn" onclick="showSection('methods')">← Orqaga</button>
      <div class="method-page-score">⭐ Ballingiz: ${score}</div>
    </div>

    <div class="cluster-page">
      <!-- Left: Instructions -->
      <div class="cluster-sidebar">
        <div class="cluster-info-card blue">
          <div class="ci-title"><span class="ci-icon">ℹ️</span> Ko'rsatma</div>
          <ul class="ci-list">
            <li><span class="ci-dot red">🎯</span> Quyidagi variantlarni o'qing va ularni mos klasterlarga tortib o'tkazing.</li>
            <li><span class="ci-dot">↔️</span> Har bir variantni tegishli klasterga tushiring.</li>
            <li><span class="ci-dot green">✅</span> Barcha klasterlar to'g'ri to'ldirilgach, javobni tekshirishingiz mumkin.</li>
          </ul>
        </div>

        <div class="cluster-info-card yellow">
          <div class="ci-title">💡 Maslahat</div>
          <p style="font-size:0.85rem;color:var(--text2);line-height:1.5">Klasterga mos kelishini diqqat bilan o'ylang. Xato joylashtirsamiz, variantni boshqa klasterga sudrab o'tishingiz mumkin.</p>
          <div class="cluster-mascot">🤖</div>
        </div>

        <div class="cluster-info-card purple">
          <div class="ci-title">🏆 Maqsad</div>
          <p style="font-size:0.85rem;color:var(--text2)">Barcha ${state.clusters.length} ta klasternі to'g'ri to'ldiring.</p>
          <div class="cluster-progress-text">${placedCount}/${total}</div>
        </div>
      </div>

      <!-- Center: Cluster Map -->
      <div class="cluster-map-area">
        <div class="cluster-map">
          <div class="cluster-center">
            <div class="cluster-center-icon">${data.icon}</div>
            <div class="cluster-center-text">${esc(data.topic)}</div>
          </div>
          ${state.clusters.map((cluster, i) => `
            <div class="cluster-node cluster-pos-${i}" style="--c:${cluster.color};--cl:${cluster.color}22">
              <div class="cluster-node-line"></div>
              <div class="cluster-node-inner"
                data-drop-zone="${cluster.id}"
                ondragover="event.preventDefault();this.classList.add('drag-over')"
                ondragleave="this.classList.remove('drag-over')"
                ondrop="clusterDrop(event,'${cluster.id}',${JSON.stringify(state).replace(/'/g,"\\'")})"
              >
                <div class="cluster-node-title">
                  <span>${cluster.icon}</span>
                  <span style="color:${cluster.color}">${esc(cluster.name)}</span>
                  <span class="cluster-node-num" style="background:${cluster.color}">${cluster.items.length}</span>
                </div>
                <div class="cluster-node-items" id="cluster-${cluster.id}">
                  ${cluster.items.length === 0
                    ? `<div class="cluster-empty">${Math.ceil(total / state.clusters.length)} ta variantni shu yerga joylang</div>`
                    : cluster.items.map(itemId => {
                        const item = data.items.find(x => x.id === itemId);
                        return item ? `<div class="cluster-placed-item" draggable="true"
                          ondragstart="clusterDragStart(event,'${itemId}','${cluster.id}')"
                          ondragend="onDragEnd(event)">${esc(item.text)}</div>` : '';
                      }).join('')
                  }
                </div>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Items pool -->
        <div class="cluster-items-pool">
          <div class="pool-title">📋 Variantlar <span style="color:var(--text2);font-size:0.8rem">Quyidagi variantlarni mos klasterlarga tortib o'tkazing.</span></div>
          <div class="pool-items" id="pool-items">
            ${remaining.map(item => `
              <div class="pool-item" draggable="true" id="pool-item-${item.id}"
                ondragstart="clusterDragStart(event,'${item.id}','pool')"
                ondragend="onDragEnd(event)">
                ${esc(item.text)}
              </div>
            `).join('')}
            ${remaining.length === 0 ? '<div style="color:var(--text2);font-size:0.85rem;padding:8px">Barcha variantlar joylashtirildi ✅</div>' : ''}
          </div>
        </div>
      </div>
    </div>

    <div class="method-footer">
      <button class="footer-btn reset" onclick="openClusterMethod(METHODS.find(m=>m.id==='brainstorming'))">🔄 Qayta boshlash</button>
      <div class="footer-hint">ℹ️ Variantlarni sudrab olib boring va klasterlarga to'ldiring.</div>
      <button class="footer-btn submit" onclick="submitCluster('${method.id}',${JSON.stringify(state).replace(/'/g,"\\'")})">✅ Javobni tekshirish</button>
    </div>
  `);
  initDrag();
  window._clusterState = state;
  window._clusterMethod = method;
}

function clusterDragStart(e, itemId, sourceId) {
  dragState = { item: itemId, sourceId };
  e.dataTransfer.effectAllowed = 'move';
  e.currentTarget.style.opacity = '0.4';
}

function clusterDrop(e, targetClusterId) {
  e.preventDefault();
  e.currentTarget.classList.remove('drag-over');
  const { item: itemId, sourceId } = dragState;
  if (!itemId) return;

  const state = window._clusterState;
  const method = window._clusterMethod;

  // Remove from source
  if (sourceId !== 'pool') {
    const srcCluster = state.clusters.find(c => c.id === sourceId);
    if (srcCluster) srcCluster.items = srcCluster.items.filter(id => id !== itemId);
  }
  delete state.placed[itemId];

  // Add to target
  const tgtCluster = state.clusters.find(c => c.id === targetClusterId);
  if (tgtCluster && !tgtCluster.items.includes(itemId)) {
    tgtCluster.items.push(itemId);
    state.placed[itemId] = targetClusterId;
  }

  renderCluster(method, state);
}

async function submitCluster(methodId, state) {
  const method = METHODS.find(m => m.id === methodId);
  const items = method.data.items;
  let correct = 0;
  const answers = {};

  items.forEach(item => {
    const placed = window._clusterState.placed[item.id];
    answers[item.id] = placed || 'unplaced';
    if (placed === item.correct) correct++;
  });

  const score = Math.round((correct / items.length) * 100);
  const stars = correct === items.length ? 5 : correct >= items.length * 0.8 ? 4 : correct >= items.length * 0.6 ? 3 : correct >= items.length * 0.4 ? 2 : 1;

  try {
    const result = await API.submitWork(methodId, answers, correct, stars);
    const idx = appState.submissions.findIndex(s => s.method_id === methodId);
    if (idx > -1) appState.submissions[idx] = result;
    else appState.submissions.unshift(result);
    showMethodResult(score, correct, items.length, stars, methodId);
  } catch (e) { toast('Yuborishda xato: ' + e.message, 'error'); }
}

// ═══════════════════════════════════════════════════
//  2. CASE STUDY — drag into correct/wrong categories
// ═══════════════════════════════════════════════════
function openCategorizeMethod(method) {
  setPage(method.title, method.subtitle);
  const state = {
    categories: method.data.categories.map(c => ({ ...c, items: [] })),
    pool: [...method.data.items],
    placed: {},
  };
  window._catState = state;
  window._catMethod = method;
  renderCategorize(method, state);
}

function renderCategorize(method, state) {
  const data = method.data;
  const remaining = state.pool.filter(item => !state.placed[item.id]);

  setContent(`
    <div class="method-page-header">
      <button class="back-btn" onclick="showSection('methods')">← Orqaga</button>
      <div class="method-page-score">⭐ Ballingiz: ${Object.keys(state.placed).length * 10}</div>
    </div>

    <!-- Situation card -->
    <div class="situation-card">
      <div class="situation-left">
        <div class="situation-icon">${data.situation.icon}</div>
        <div>
          <div class="situation-title">${data.situation.title}</div>
          <p class="situation-text">${esc(data.situation.text)}</p>
          <p class="situation-question"><strong style="color:var(--primary)">Savol:</strong> ${esc(data.situation.question)}</p>
        </div>
      </div>
      <div class="situation-visual">
        <div class="situation-computer">
          <div class="sc-screen">
            <div class="sc-alert">⚠️</div>
            <div class="sc-msg">Siz yutuq yutdingiz!</div>
            <div class="sc-btn">Havolani bosing</div>
          </div>
          <div class="sc-body"></div>
        </div>
      </div>
    </div>

    <div class="instruction-bar">
      ℹ️ <strong>Ko'rsatma:</strong> Quyidagi harakatlarni sichqoncha yordamida mos guruhlarga tortib joylashtiring.
    </div>

    <!-- Drag area -->
    <div class="categorize-layout">
      <!-- Items pool -->
      <div class="cat-pool">
        <div class="cat-pool-title">☰ Harakatlar (variantlar)</div>
        <div class="cat-pool-items" id="cat-pool">
          ${remaining.map(item => `
            <div class="cat-item" draggable="true" id="cat-item-${item.id}"
              ondragstart="catDragStart(event,'${item.id}','pool')"
              ondragend="onDragEnd(event)">
              <span class="cat-item-dots">⋮⋮</span>
              <span class="cat-item-icon">${item.icon}</span>
              <span>${esc(item.text)}</span>
            </div>
          `).join('')}
          ${remaining.length === 0 ? '<div style="color:var(--text2);padding:12px;font-size:0.85rem">Barcha harakatlar joylashtirildi ✅</div>' : ''}
        </div>
      </div>

      <!-- Drop zones -->
      <div class="cat-zones">
        ${state.categories.map(cat => `
          <div class="cat-zone" style="--cat-color:${cat.color};--cat-light:${cat.colorLight}">
            <div class="cat-zone-header" style="color:${cat.color}">
              <span style="font-size:1.3rem">${cat.icon}</span>
              <div>
                <div class="cat-zone-title">${esc(cat.name)}</div>
                <div class="cat-zone-sub">${esc(cat.subtitle)}</div>
              </div>
            </div>
            <div class="cat-drop-area" data-drop-zone="${cat.id}"
              ondragover="event.preventDefault();this.classList.add('drag-over')"
              ondragleave="this.classList.remove('drag-over')"
              ondrop="catDrop(event,'${cat.id}')">
              ${cat.items.length === 0
                ? `<div class="cat-empty"><div style="font-size:2rem;opacity:0.3">${cat.icon}</div><div>Variantlarni shu yerga tortib joylashtiring</div></div>`
                : cat.items.map(itemId => {
                    const item = data.items.find(x => x.id === itemId);
                    return item ? `<div class="cat-placed" style="border-color:${cat.color};background:${cat.colorLight}" draggable="true"
                      ondragstart="catDragStart(event,'${itemId}','${cat.id}')"
                      ondragend="onDragEnd(event)">
                      <span>${item.icon}</span> ${esc(item.text)}
                    </div>` : '';
                  }).join('')
              }
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="method-footer">
      <button class="footer-btn reset" onclick="openCategorizeMethod(METHODS.find(m=>m.id==='case-study'))">🔄 Qayta boshlash</button>
      <div class="footer-hint">💡 <strong>Maslahat:</strong> Vaziyatni diqqat bilan o'qing va xavfsiz bo'lishni unutmang!</div>
      <button class="footer-btn submit" onclick="submitCategorize('case-study')">✅ Javobni tekshirish</button>
    </div>
  `);
  initDrag();
}

function catDragStart(e, itemId, sourceId) {
  dragState = { item: itemId, sourceId };
  e.dataTransfer.effectAllowed = 'move';
  e.currentTarget.style.opacity = '0.4';
}

function catDrop(e, targetCatId) {
  e.preventDefault();
  e.currentTarget.classList.remove('drag-over');
  const { item: itemId, sourceId } = dragState;
  if (!itemId) return;

  const state = window._catState;
  const method = window._catMethod;

  // Remove from source category
  if (sourceId !== 'pool') {
    const src = state.categories.find(c => c.id === sourceId);
    if (src) src.items = src.items.filter(id => id !== itemId);
  }
  delete state.placed[itemId];

  // Add to target
  const tgt = state.categories.find(c => c.id === targetCatId);
  if (tgt && !tgt.items.includes(itemId)) {
    tgt.items.push(itemId);
    state.placed[itemId] = targetCatId;
  }

  renderCategorize(method, state);
}

async function submitCategorize(methodId) {
  const method = METHODS.find(m => m.id === methodId);
  const state = window._catState;
  const items = method.data.items;
  let correct = 0;
  const answers = {};

  items.forEach(item => {
    const placed = state.placed[item.id];
    answers[item.id] = placed || 'unplaced';
    if (placed === item.correct) correct++;
  });

  const score = Math.round((correct / items.length) * 100);
  const stars = correct === items.length ? 5 : correct >= items.length * 0.7 ? 3 : 1;

  try {
    const result = await API.submitWork(methodId, answers, correct, stars);
    const idx = appState.submissions.findIndex(s => s.method_id === methodId);
    if (idx > -1) appState.submissions[idx] = result;
    else appState.submissions.unshift(result);
    showMethodResult(score, correct, items.length, stars, methodId);
  } catch (e) { toast('Yuborishda xato: ' + e.message, 'error'); }
}

// ═══════════════════════════════════════════════════
//  3. PROBLEM-BASED LEARNING — drag to reorder steps
// ═══════════════════════════════════════════════════
function openOrderMethod(method) {
  setPage(method.title, method.subtitle);
  // Shuffle items
  const shuffled = [...method.data.items].sort(() => Math.random() - 0.5);
  const state = { pool: shuffled, ordered: Array(method.data.items.length).fill(null) };
  window._orderState = state;
  window._orderMethod = method;
  renderOrder(method, state);
}

function renderOrder(method, state) {
  const data = method.data;
  const unplaced = state.pool.filter(item => !state.ordered.includes(item));

  setContent(`
    <div class="method-page-header">
      <button class="back-btn" onclick="showSection('methods')">← Orqaga</button>
      <div class="method-page-score">⭐ Sizning ballingiz: ${state.ordered.filter(Boolean).length * 10}</div>
    </div>

    <!-- Problem card -->
    <div class="problem-card">
      <div class="problem-icon">${data.problem.icon}</div>
      <div>
        <div class="problem-title">${data.problem.title}</div>
        <p class="problem-text">${esc(data.problem.text)}</p>
      </div>
    </div>

    <div class="order-task">
      <span class="order-task-icon">📋</span>
      <div>
        <strong>Topshiriq:</strong>
        <span style="color:var(--text2)"> ${esc(data.problem.task)}</span>
      </div>
    </div>

    <div class="order-layout">
      <!-- Pool -->
      <div class="order-pool">
        <div class="order-pool-title">☰ Bosqichlar (aralash tartibda)</div>
        <div id="order-pool-items">
          ${unplaced.map(item => `
            <div class="order-pool-item" draggable="true" id="order-item-${item.id}"
              ondragstart="orderDragStart(event,'${item.id}','pool')"
              ondragend="onDragEnd(event)">
              <span class="order-item-icon">${item.icon}</span>
              <span>${esc(item.text)}</span>
              <span class="order-drag-handle">⋮⋮</span>
            </div>
          `).join('')}
          ${unplaced.length === 0 ? '<div style="color:var(--text2);padding:12px;font-size:0.85rem;text-align:center">Barcha bosqichlar joylashtirildi ✅</div>' : ''}
        </div>
        <div class="order-pool-hint">ℹ️ Bosqichlarni sichqoncha yordamida o\'ng tomondagi joylarga tortib olib boring.</div>
      </div>

      <!-- Arrow -->
      <div class="order-arrow">→</div>

      <!-- Drop slots -->
      <div class="order-slots">
        <div class="order-slots-title" style="color:var(--green)">✅ To'g'ri ketma-ketlik ( shu yerga joylashtiring )</div>
        ${state.ordered.map((item, i) => `
          <div class="order-slot" data-drop-zone="slot-${i}"
            ondragover="event.preventDefault();this.classList.add('drag-over')"
            ondragleave="this.classList.remove('drag-over')"
            ondrop="orderDrop(event,${i})">
            <div class="order-slot-num" style="background:var(--green)">${i + 1}</div>
            ${item
              ? `<div class="order-slot-item" draggable="true"
                  ondragstart="orderDragStart(event,'${item.id}','slot-${i}')"
                  ondragend="onDragEnd(event)">
                  <span>${item.icon}</span> ${esc(item.text)}
                </div>`
              : `<div class="order-slot-empty">Bosqichni shu yerga joylashtiring</div>`
            }
          </div>
        `).join('')}
      </div>
    </div>

    <div class="method-footer">
      <button class="footer-btn reset" onclick="openOrderMethod(METHODS.find(m=>m.id==='flipped'))">🔄 Qayta boshlash</button>
      <div class="footer-hint">💡 <strong>Maslahat:</strong> Avval muammoni tushuning, keyin bosqichlarni mantiqan tartiblang.</div>
      <button class="footer-btn submit" onclick="submitOrder('flipped')">✅ Javobni tekshirish</button>
    </div>
  `);
  initDrag();
}

function orderDragStart(e, itemId, sourceId) {
  dragState = { item: itemId, sourceId };
  e.dataTransfer.effectAllowed = 'move';
  e.currentTarget.style.opacity = '0.4';
}

function orderDrop(e, slotIndex) {
  e.preventDefault();
  e.currentTarget.classList.remove('drag-over');
  const { item: itemId, sourceId } = dragState;
  if (!itemId) return;

  const state = window._orderState;
  const method = window._orderMethod;
  const item = method.data.items.find(x => x.id === itemId);
  if (!item) return;

  // Remove from source slot
  if (sourceId.startsWith('slot-')) {
    const srcIdx = parseInt(sourceId.split('-')[1]);
    state.ordered[srcIdx] = null;
  }

  // If slot occupied, swap back to pool
  if (state.ordered[slotIndex]) {
    // it goes back to pool (already unplaced since not in ordered)
    state.ordered[slotIndex] = null;
  }

  state.ordered[slotIndex] = item;
  renderOrder(method, state);
}

async function submitOrder(methodId) {
  const method = METHODS.find(m => m.id === methodId);
  const state = window._orderState;
  const correctOrder = method.data.correctOrder;

  let correct = 0;
  const answers = {};
  state.ordered.forEach((item, i) => {
    if (item) {
      answers[`step${i + 1}`] = item.id;
      if (item.id === correctOrder[i]) correct++;
    } else {
      answers[`step${i + 1}`] = 'empty';
    }
  });

  const score = Math.round((correct / correctOrder.length) * 100);
  const stars = correct === correctOrder.length ? 5 : correct >= correctOrder.length * 0.6 ? 3 : 1;

  try {
    const result = await API.submitWork(methodId, answers, correct, stars);
    const idx = appState.submissions.findIndex(s => s.method_id === methodId);
    if (idx > -1) appState.submissions[idx] = result;
    else appState.submissions.unshift(result);
    showMethodResult(score, correct, correctOrder.length, stars, methodId);
  } catch (e) { toast('Yuborishda xato: ' + e.message, 'error'); }
}

// ═══════════════════════════════════════════════════
//  4. GAMIFICATION — stage-based quiz with UI
// ═══════════════════════════════════════════════════
function openGameMethod(method) {
  setPage(method.title, method.subtitle);
  const gs = { stageIndex: 0, stars: 0, streak: 0, answered: false };
  window._gameState = gs;
  window._gameMethod = method;
  renderGameStage(method, gs);
}

function renderGameStage(method, gs) {
  const stages = method.stages;
  const current = stages[gs.stageIndex];
  const totalStars = stages.reduce((s, st) => s + st.stars, 0);
  const pct = Math.round((gs.stageIndex / stages.length) * 100);
  const thresholds = [
    Math.floor(totalStars * 0.3),
    Math.floor(totalStars * 0.6),
    totalStars,
  ];

  setContent(`
    <div class="method-page-header">
      <button class="back-btn" onclick="showSection('methods')">← Orqaga</button>
      <div class="method-page-score">⭐ Yulduzlar: ${gs.stars}</div>
    </div>

    <!-- Stage progress bar -->
    <div class="game-stages-bar">
      <div class="gsb-castle">🏰</div>
      ${stages.map((stage, i) => {
        const done = i < gs.stageIndex;
        const current2 = i === gs.stageIndex;
        const locked = i > gs.stageIndex;
        return `
          ${i > 0 ? `<div class="gsb-line ${done ? 'done' : ''}">
            ${done ? '<div class="gsb-line-fill"></div>' : ''}
          </div>` : ''}
          <div class="gsb-stage ${done ? 'done' : current2 ? 'active' : 'locked'}" onclick="${current2 ? '' : ''}">
            <div class="gsb-icon">${done ? '<div class="gsb-check">✓</div>' : ''}<span>${stage.icon}</span>${locked ? '<div class="gsb-lock">🔒</div>' : ''}</div>
            <div class="gsb-name">${esc(stage.name)}</div>
            ${current2 ? '<div class="gsb-label">Joriy bosqich</div>' : ''}
            ${locked ? '<div class="gsb-label muted">Quflashdan ochish</div>' : ''}
          </div>
        `;
      }).join('')}
      <div class="gsb-chest">🎁</div>
    </div>

    <!-- Game layout -->
    <div class="game-main-layout">
      <!-- Left: Instructions + hints -->
      <div class="game-left-panel">
        <div class="cluster-info-card blue">
          <div class="ci-title">ℹ️ Ko'rsatma</div>
          <ul class="ci-list">
            <li>⭐ Har bir to'g'ri javob keyingi bosqich eshigini ochadi.</li>
            <li>🔑 Kalit va bonus bosqichlarida yulduzlar ko'proq bo'ladi!</li>
            <li>🏆 Final bosqichda eng katta mukofot seni kutmoqda!</li>
            <li>🎯 Diqqatli bo'l, bilim bilan yutasan!</li>
          </ul>
        </div>
        <div class="cluster-info-card yellow">
          <div class="ci-title">💡 Maslahat</div>
          <p style="font-size:0.85rem;color:var(--text2)">Savolni diqqat bilan o'qi va to'g'ri javobni tanlа.</p>
        </div>
      </div>

      <!-- Center: Question -->
      <div class="game-question-panel">
        <div class="game-stage-header">
          <span class="game-stage-badge">${current.icon} ${esc(current.name)}</span>
        </div>
        <div class="game-q-label">Savol:</div>
        <div class="game-q-text">${esc(current.question)}</div>
        <div class="game-options-grid" id="game-opts">
          ${current.options.map(opt => `
            <button class="game-opt-btn" onclick="selectGameOpt(this,'${esc(opt)}','${esc(current.correct)}')">
              ${esc(opt)}
            </button>
          `).join('')}
        </div>
        <div id="game-feedback" style="display:none"></div>
        <div style="display:flex;gap:12px;margin-top:16px">
          <button class="footer-btn reset" style="flex:1" onclick="openGameMethod(window._gameMethod)">🔄 Qayta boshlash</button>
          <button class="game-next-btn" id="game-next" style="display:none;flex:2" onclick="gameNextStage()">
            ${gs.stageIndex < stages.length - 1 ? 'Keyingi bosqich →' : '🏆 Yakunlash'}
          </button>
        </div>
      </div>

      <!-- Right: Rewards -->
      <div class="game-rewards-panel">
        <div class="rewards-card">
          <div class="rewards-title">🎁 Mukofotlarim</div>
          <div class="reward-section-title">Yulduzlar</div>
          <div class="game-stars-display">
            <span class="game-stars-icon">⭐</span>
            <span class="game-stars-count">${gs.stars}</span>
            <span class="game-stars-max">/ ${totalStars}</span>
          </div>
          <div class="stars-bar"><div class="stars-fill" style="width:${(gs.stars/totalStars)*100}%"></div></div>
          <div class="stars-next">Keyingi mukofot: ${thresholds.find(t => t > gs.stars) || totalStars} yulduz</div>

          <div class="reward-section-title" style="margin-top:16px">Medallar</div>
          <div class="medals-row">
            ${['🥉','🥈','🥇'].map((m, i) => `
              <div class="medal-item ${gs.stars >= thresholds[i] ? 'earned' : 'locked'}">${m}</div>
            `).join('')}
          </div>

          <div class="reward-section-title" style="margin-top:16px">Seriya (ketma-ket to'g'ri javoblar)</div>
          <div class="streak-row">
            <span style="font-size:1.5rem">🔥</span>
            <span class="streak-num">${gs.streak}</span>
            <span style="color:var(--text2);font-size:0.85rem">marta</span>
          </div>
        </div>

        <!-- Progress -->
        <div class="rewards-card" style="margin-top:12px">
          <div class="rewards-title">📊 Umumiy progress</div>
          <div class="game-progress-dots">
            ${stages.map((_, i) => `<div class="gpd ${i < gs.stageIndex ? 'done' : i === gs.stageIndex ? 'current' : ''}">${i+1}</div>`).join('')}
          </div>
          <div class="progress-line"><div class="progress-fill-bar" style="width:${pct}%"></div></div>
          <div class="progress-pct">${pct}%</div>
        </div>
      </div>
    </div>
  `);
}

function selectGameOpt(btn, selected, correct) {
  const gs = window._gameState;
  if (gs.answered) return;
  gs.answered = true;

  const isCorrect = selected === correct;
  document.querySelectorAll('.game-opt-btn').forEach(b => {
    b.disabled = true;
    if (b.textContent.trim() === correct) b.classList.add('correct');
    else if (b === btn && !isCorrect) b.classList.add('wrong');
  });

  const feedback = document.getElementById('game-feedback');
  feedback.style.display = 'block';

  const method = window._gameMethod;
  const stage = method.stages[gs.stageIndex];

  if (isCorrect) {
    gs.stars += stage.stars;
    gs.streak++;
    feedback.innerHTML = `<div class="game-result-banner success">🎉 Barakalla! ${esc(stage.name)} ochildi! &nbsp;<strong>+${stage.stars} ⭐</strong>${gs.streak > 1 ? ` &nbsp;🔥 ${gs.streak} seriya!` : ''}</div>`;
  } else {
    gs.streak = 0;
    feedback.innerHTML = `<div class="game-result-banner fail">😔 To'g'ri javob: <strong>${esc(correct)}</strong></div>`;
  }

  const nextBtn = document.getElementById('game-next');
  nextBtn.style.display = 'block';
  nextBtn.textContent = gs.stageIndex < method.stages.length - 1 ? 'Keyingi bosqich →' : '🏆 Yakunlash';

  // Update stars display
  const starsCount = document.querySelector('.game-stars-count');
  if (starsCount) starsCount.textContent = gs.stars;
  const totalStars = method.stages.reduce((s, st) => s + st.stars, 0);
  const fill = document.querySelector('.stars-fill');
  if (fill) fill.style.width = `${(gs.stars/totalStars)*100}%`;
}

async function gameNextStage() {
  const gs = window._gameState;
  const method = window._gameMethod;
  gs.stageIndex++;
  gs.answered = false;

  if (gs.stageIndex >= method.stages.length) {
    const answers = {};
    method.stages.forEach((stage, i) => { answers[`stage${i+1}`] = stage.correct; });
    const totalStars = method.stages.reduce((s,st) => s+st.stars, 0);
    try {
      const result = await API.submitWork(method.id, answers, gs.stars, gs.stars);
      const idx = appState.submissions.findIndex(s => s.method_id === method.id);
      if (idx > -1) appState.submissions[idx] = result;
      else appState.submissions.unshift(result);
    } catch (e) {}
    const pct = Math.round((gs.stars / totalStars) * 100);
    showMethodResult(pct, gs.stars, totalStars, gs.stars, method.id);
    return;
  }

  renderGameStage(method, gs);
}

// ═══════════════════════════════════════════════════
//  RESULT SCREEN
// ═══════════════════════════════════════════════════
function showMethodResult(score, correct, total, stars, methodId) {
  const emoji = score === 100 ? '🏆' : score >= 70 ? '🎉' : score >= 40 ? '👍' : '📚';
  const msg = score === 100 ? 'Mukammal natija!' : score >= 70 ? 'Ajoyib ish!' : score >= 40 ? 'Yaxshi harakat!' : 'Ko\'proq mashq qiling!';
  const starStr = '⭐'.repeat(Math.min(stars, 5));

  setContent(`
    <div class="result-screen">
      <div class="result-card">
        <div class="result-emoji">${emoji}</div>
        <div class="result-title">${msg}</div>
        <div class="result-score">${score}%</div>
        <div class="result-stars">${starStr}</div>
        <div class="result-detail">${correct} / ${total} to'g'ri javob</div>
        <div class="result-actions">
          <button class="footer-btn reset" onclick="openMethod('${methodId}')">🔄 Qayta urinish</button>
          <button class="footer-btn submit" onclick="showSection('myResults')">📊 Natijalarimga o'tish</button>
        </div>
      </div>
    </div>
  `);
}

// ═══════════════════════════════════════════════════
//  METHOD CARDS for dashboard/methods page
// ═══════════════════════════════════════════════════
function renderMethodCard(m) {
  const sub = typeof appState !== 'undefined' ? appState.submissions?.find(s => s.method_id === m.id) : null;
  const done = !!sub;
  const stars = sub?.stars || 0;
  return `
    <div class="method-card" style="--method-color:${m.color}" onclick="openMethod('${m.id}')">
      <div class="method-card-accent" style="background:${m.color}"></div>
      <div class="method-emoji">${m.emoji}</div>
      <div class="method-title">${esc(m.title)}</div>
      <div class="method-desc">${esc(m.desc)}</div>
      <div class="method-meta">
        <span class="method-tag">⏱ ${esc(m.duration)}</span>
        <span class="method-tag">📊 ${esc(m.level)}</span>
        ${done ? `<span class="method-tag" style="color:${m.color}">✅ ${'⭐'.repeat(Math.min(stars,5)) || 'Bajarildi'}</span>` : ''}
      </div>
      <button class="method-btn" style="background:${m.color}">
        ${done ? '🔄 Qayta bajarish' : '▶ Boshlash'}
      </button>
    </div>
  `;
}

function esc(v) {
  return String(v ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ═══════════════════════════════════════════════════════════════════════════
//  api.js — thin API client layer for EduGame Pro
//  Drop this file next to index.html and include it BEFORE script.js
// ═══════════════════════════════════════════════════════════════════════════

const API_BASE = 'http://localhost:8000/api';

// ── Token helpers ──────────────────────────────────────────────────────────
function getToken() { return localStorage.getItem('edugame_access'); }
function setTokens(access, refresh) {
  localStorage.setItem('edugame_access', access);
  if (refresh) localStorage.setItem('edugame_refresh', refresh);
}
function clearTokens() {
  localStorage.removeItem('edugame_access');
  localStorage.removeItem('edugame_refresh');
}

// ── Base request ───────────────────────────────────────────────────────────
async function apiRequest(method, path, body = null, retry = true) {
  const headers = { 'Content-Type': 'application/json' };
  const token = getToken();
  if (token) headers['Authorization'] = `Bearer ${token}`;

  const options = { method, headers };
  if (body) options.body = JSON.stringify(body);

  let res = await fetch(`${API_BASE}${path}`, options);

  // Auto-refresh on 401
  if (res.status === 401 && retry) {
    const refreshToken = localStorage.getItem('edugame_refresh');
    if (refreshToken) {
      const refreshRes = await fetch(`${API_BASE}/auth/refresh/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ refresh: refreshToken }),
      });
      if (refreshRes.ok) {
        const data = await refreshRes.json();
        setTokens(data.access, data.refresh);
        return apiRequest(method, path, body, false); // retry once
      }
    }
    // Refresh failed — force logout
    clearTokens();
    location.reload();
    return;
  }

  if (!res.ok) {
    const err = await res.json().catch(() => ({ detail: 'Server xatosi' }));
    throw new Error(err.detail || JSON.stringify(err));
  }

  if (res.status === 204) return null;
  return res.json();
}

const API = {
  // ── Auth ─────────────────────────────────────────────────────────────────
  studentLogin(name, studentClass) {
    return apiRequest('POST', '/auth/student/login/', { name, student_class: studentClass });
  },
  teacherLogin(email, password) {
    return apiRequest('POST', '/auth/teacher/login/', { email, password });
  },

  // ── Submissions ───────────────────────────────────────────────────────────
  getMySubmissions() {
    return apiRequest('GET', '/submissions/mine/');
  },
  submitWork(methodId, answers, autoScore) {
    return apiRequest('POST', '/submissions/', { method_id: methodId, answers, auto_score: autoScore });
  },
  getAllSubmissions(statusFilter = '', q = '') {
    const params = new URLSearchParams();
    if (statusFilter && statusFilter !== 'all') params.set('status', statusFilter);
    if (q) params.set('q', q);
    const qs = params.toString();
    return apiRequest('GET', `/submissions/all/${qs ? '?' + qs : ''}`);
  },
  gradeSubmission(submissionId, grade, comment) {
    return apiRequest('PATCH', `/submissions/${submissionId}/grade/`, { grade: String(grade), comment });
  },

  // ── Custom tasks ──────────────────────────────────────────────────────────
  getCustomTasks(methodId = '') {
    const qs = methodId ? `?method_id=${methodId}` : '';
    return apiRequest('GET', `/custom-tasks/${qs}`);
  },
  createCustomTask(methodId, taskData) {
    return apiRequest('POST', '/custom-tasks/create/', { method_id: methodId, task_data: taskData });
  },
  deleteCustomTask(taskId) {
    return apiRequest('DELETE', `/custom-tasks/${taskId}/delete/`);
  },

  // ── Stats & leaderboard ───────────────────────────────────────────────────
  getDashboardStats() {
    return apiRequest('GET', '/stats/');
  },
  getLeaderboard() {
    return apiRequest('GET', '/leaderboard/');
  },
};

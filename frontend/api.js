const API_BASE = 'https://lively-grace-production-1631.up.railway.app/api';

function getToken() { return localStorage.getItem('edugame_access'); }
function setTokens(access, refresh) {
  localStorage.setItem('edugame_access', access);
  if (refresh) localStorage.setItem('edugame_refresh', refresh);
}
function clearTokens() {
  localStorage.removeItem('edugame_access');
  localStorage.removeItem('edugame_refresh');
  localStorage.removeItem('edugame_user');
}
function getUser() {
  try { return JSON.parse(localStorage.getItem('edugame_user') || 'null'); } catch { return null; }
}
function setUser(u) { localStorage.setItem('edugame_user', JSON.stringify(u)); }

async function apiRequest(method, path, body = null, retry = true) {
  const headers = { 'Content-Type': 'application/json' };
  const token = getToken();
  if (token) headers['Authorization'] = `Bearer ${token}`;
  const options = { method, headers };
  if (body) options.body = JSON.stringify(body);
  let res = await fetch(`${API_BASE}${path}`, options);
  if (res.status === 401 && retry) {
    const refresh = localStorage.getItem('edugame_refresh');
    if (refresh) {
      const r = await fetch(`${API_BASE}/auth/refresh/`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ refresh }),
      });
      if (r.ok) {
        const d = await r.json();
        setTokens(d.access, d.refresh);
        return apiRequest(method, path, body, false);
      }
    }
    clearTokens(); location.reload(); return;
  }
  if (!res.ok) {
    const err = await res.json().catch(() => ({ detail: 'Server xatosi' }));
    throw new Error(err.detail || Object.values(err).flat().join(' '));
  }
  if (res.status === 204) return null;
  return res.json();
}

const API = {
  register: (data) => apiRequest('POST', '/auth/register/', data),
  login: (login, password) => apiRequest('POST', '/auth/login/', { login, password }),
  getMySubmissions: () => apiRequest('GET', '/submissions/mine/'),
  submitWork: (method_id, answers, auto_score, stars) =>
    apiRequest('POST', '/submissions/', { method_id, answers, auto_score, stars }),
  getAllSubmissions: (statusFilter='', q='') => {
    const p = new URLSearchParams();
    if (statusFilter && statusFilter !== 'all') p.set('status', statusFilter);
    if (q) p.set('q', q);
    const qs = p.toString();
    return apiRequest('GET', `/submissions/all/${qs ? '?'+qs : ''}`);
  },
  gradeSubmission: (id, grade, comment) =>
    apiRequest('PATCH', `/submissions/${id}/grade/`, { grade: String(grade), comment }),
  getCustomTasks: (method_id='') =>
    apiRequest('GET', `/custom-tasks/${method_id ? '?method_id='+method_id : ''}`),
  createCustomTask: (method_id, task_data) =>
    apiRequest('POST', '/custom-tasks/create/', { method_id, task_data }),
  deleteCustomTask: (id) => apiRequest('DELETE', `/custom-tasks/${id}/delete/`),
  getDashboardStats: () => apiRequest('GET', '/stats/'),
  getLeaderboard: () => apiRequest('GET', '/leaderboard/'),
  listUsers: (role='') => apiRequest('GET', `/users/${role ? '?role='+role : ''}`),
  toggleUser: (id) => apiRequest('PATCH', `/users/${id}/toggle/`),
  deleteUser: (id) => apiRequest('DELETE', `/users/${id}/delete/`),
};

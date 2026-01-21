const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export async function apiFetch(path, options = {}) {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  if (!res.ok) {
    throw await res.json().catch(() => ({}));
  }
  return res.json().catch(() => ({}));
}
// Admin Authentication Storage
export function getAdmin() {
  if (typeof window === "undefined") return null;

  const data = localStorage.getItem("admin");
  return data ? JSON.parse(data) : null;
}

export function adminLogout() {
  localStorage.removeItem("admin");
}

// User Authentication Storage 
export const getUser = () => {
  if (typeof window === "undefined") return null;

  const user = localStorage.getItem("anchordex_user");
  return user ? JSON.parse(user) : null;
};

export const logout = () => {
  localStorage.removeItem("anchordex_user");
};

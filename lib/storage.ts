// lib/storage.ts
/* ================= TYPES ================= */

export type User = {
  id: string;
  name: string;
  email: string;
  balance: number;
};

/* ================= STORAGE KEYS ================= */

const USERS_KEY = "users";
const CURRENT_USER_KEY = "currentUser";

/* ================= HELPERS ================= */

function read<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
}

function write<T>(key: string, value: T) {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, JSON.stringify(value));
}

/* ================= USERS ================= */

/**
 * Initialize users storage (run once on app load)
 */
export function initUsers() {
  const users = read<User[]>(USERS_KEY, []);
  write(USERS_KEY, users);
}

/**
 * Get all users (Admin)
 */
export function getUsers(): User[] {
  return read<User[]>(USERS_KEY, []);
}

/**
 * Save users array
 */
function saveUsers(users: User[]) {
  write(USERS_KEY, users);
}

/**
 * Add user on registration (auto appears in Admin)
 */
export function registerUser(name: string, email: string): User {
  const users = getUsers();

  const existing = users.find(u => u.email === email);
  if (existing) return existing;

  const newUser: User = {
    id: `u_${Date.now()}`,
    name,
    email,
    balance: 0,
  };

  const updated = [...users, newUser];
  saveUsers(updated);
  setCurrentUser(newUser);

  return newUser;
}

/**
 * Credit user balance (Admin action)
 */
export function creditUserByEmail(email: string, amount: number) {
  const users = getUsers().map(user =>
    user.email === email
      ? { ...user, balance: user.balance + amount }
      : user
  );

  saveUsers(users);

  // sync logged-in user
  const current = getCurrentUser();
  if (current?.email === email) {
    setCurrentUser({
      ...current,
      balance: current.balance + amount,
    });
  }
}

/**
 * Get user by email
 */
export function getUserByEmail(email: string): User | undefined {
  return getUsers().find(u => u.email === email);
}

/* ================= CURRENT USER ================= */

/**
 * Set logged-in user
 */
export function setCurrentUser(user: User) {
  write(CURRENT_USER_KEY, user);
}

/**
 * Get logged-in user (Dashboard, Withdraw, Assets)
 */
export function getCurrentUser(): User | null {
  return read<User | null>(CURRENT_USER_KEY, null);
}

/**
 * Logout user
 */
export function clearCurrentUser() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(CURRENT_USER_KEY);
}

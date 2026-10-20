"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiArrowLeft, FiCheckCircle, FiEye, FiEyeOff, FiAlertCircle, FiLock } from "react-icons/fi";
import { registerUser, getUsers, setCurrentUser } from "@/lib/storage";

type Mode = "login" | "signup";
type ToastType = "success" | "error";

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white placeholder:text-white/30 outline-none transition focus:border-teal-400/60 focus:ring-2 focus:ring-teal-400/20";

const points = [
  "Funds stay locked until both sides confirm",
  "Multi-signature protection on every trade",
  "Support for 120+ cryptocurrencies",
];

export default function AuthPage() {
  const router = useRouter();
  const [mode, setMode] = useState<Mode>("login");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: ToastType } | null>(null);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const later = (fn: () => void, ms: number) => {
    timers.current.push(setTimeout(fn, ms));
  };

  useEffect(() => {
    const t = timers.current;
    return () => t.forEach(clearTimeout);
  }, []);

  const showToast = (message: string, type: ToastType = "success") => {
    setToast({ message, type });
    later(() => setToast(null), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const switchMode = (m: Mode) => {
    setMode(m);
    setShowPassword(false);
  };

  const goToDashboard = () => {
    setLoading(true);
    later(() => router.push("/dashboard"), 800);
  };

  /* ================= SIGNUP ================= */
  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    const email = form.email.trim();

    if (!form.name.trim() || !email || !form.password) {
      return showToast("Fill in all fields to continue", "error");
    }
    if (getUsers().some((u) => u.email.toLowerCase() === email.toLowerCase())) {
      return showToast("An account with this email already exists. Log in instead.", "error");
    }

    registerUser(form.name.trim(), email);
    showToast("Account created. Taking you to your dashboard.");
    goToDashboard();
  };

  /* ================= LOGIN ================= */
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const email = form.email.trim().toLowerCase();

    const existingUser = getUsers().find((u) => u.email.toLowerCase() === email);
    if (!existingUser) {
      return showToast("No account found for this email. Sign up first.", "error");
    }

    setCurrentUser(existingUser);
    showToast("Welcome back. Taking you to your dashboard.");
    goToDashboard();
  };

  const isSignup = mode === "signup";

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#05080a] px-4 py-10 text-white">
      {/* Background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 60% 55% at 50% 40%, #000 30%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 60% 55% at 50% 40%, #000 30%, transparent 100%)",
          }}
        />
        <div className="absolute left-1/2 top-[-220px] h-[460px] w-[760px] -translate-x-1/2 rounded-full bg-teal-500/15 blur-[140px]" />
      </div>

      {/* Toast */}
      <div aria-live="polite" className="fixed right-4 top-4 z-50 sm:right-6 sm:top-6">
        {toast && (
          <div
            role="status"
            className={`flex max-w-sm items-start gap-3 rounded-xl border px-4 py-3 text-sm shadow-2xl backdrop-blur-xl ${
              toast.type === "success"
                ? "border-teal-400/30 bg-teal-400/15 text-teal-100"
                : "border-red-400/30 bg-red-500/15 text-red-100"
            }`}
          >
            {toast.type === "success" ? (
              <FiCheckCircle className="mt-0.5 shrink-0 text-teal-300" />
            ) : (
              <FiAlertCircle className="mt-0.5 shrink-0 text-red-300" />
            )}
            {toast.message}
          </div>
        )}
      </div>

      <div className="relative z-10 grid w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-[#080c0f]/90 shadow-2xl backdrop-blur-xl md:grid-cols-[1fr_1.05fr]">
        {/* Brand panel */}
        <aside className="relative hidden flex-col justify-between overflow-hidden border-r border-white/10 bg-gradient-to-b from-[#0b1418] to-[#080c0f] p-10 md:flex">
          <div
            aria-hidden
            className="absolute -bottom-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-teal-400/25 blur-[100px]"
          />

          <div className="relative">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-teal-400 text-sm font-bold text-black">
                P
              </span>
              <span className="text-lg font-semibold tracking-tight">Paychex</span>
            </Link>

            <h2 className="mt-10 text-3xl font-semibold leading-tight tracking-tight">
              Trade crypto with the money held safe.
            </h2>

            <ul className="mt-8 space-y-3">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-white/65">
                  <FiLock className="mt-0.5 shrink-0 text-teal-300" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto mt-10 w-56 translate-y-10">
            <Image
              src="/Bitcoin_img.png"
              alt="Paychex app preview"
              width={800}
              height={800}
              className="h-auto w-full drop-shadow-[0_30px_60px_rgba(0,0,0,0.7)]"
              priority
            />
          </div>
        </aside>

        {/* Form panel */}
        <section className="p-6 sm:p-10">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white md:hidden"
          >
            <FiArrowLeft /> Back to home
          </Link>

          {/* Mode switch */}
          <div role="tablist" aria-label="Authentication mode" className="mb-9 grid grid-cols-2 rounded-xl border border-white/10 bg-black/40 p-1">
            {(["login", "signup"] as Mode[]).map((m) => (
              <button
                key={m}
                type="button"
                role="tab"
                aria-selected={mode === m}
                onClick={() => switchMode(m)}
                className={`rounded-lg py-2 text-sm font-medium transition ${
                  mode === m ? "bg-white text-black" : "text-white/55 hover:text-white"
                }`}
              >
                {m === "login" ? "Log in" : "Sign up"}
              </button>
            ))}
          </div>

          <h1 className="text-3xl font-semibold tracking-tight">
            {isSignup ? "Create your account" : "Welcome back"}
          </h1>
          <p className="mt-2 text-white/50">
            {isSignup
              ? "Start trading with escrow protection in a few minutes."
              : "Log in to manage your trades and wallet."}
          </p>

          <form
            key={mode}
            onSubmit={isSignup ? handleSignup : handleLogin}
            className="mt-8 space-y-5"
            noValidate
          >
            {isSignup && (
              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-white/70">
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  placeholder="Jane Doe"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            )}

            <div>
              <label htmlFor="email" className="mb-2 block text-sm text-white/70">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="password" className="mb-2 block text-sm text-white/70">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete={isSignup ? "new-password" : "current-password"}
                  placeholder="Enter your password"
                  value={form.password}
                  onChange={handleChange}
                  className={`${inputClass} pr-12`}
                />
                <button
                  type="button"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-white/45 transition hover:text-white"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-teal-400 py-3.5 font-semibold text-black transition hover:bg-teal-300 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Please wait..." : isSignup ? "Create account" : "Log in"}
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-white/45">
            {isSignup ? "Already have an account?" : "New to Paychex?"}{" "}
            <button
              type="button"
              onClick={() => switchMode(isSignup ? "login" : "signup")}
              className="font-medium text-teal-300 hover:underline"
            >
              {isSignup ? "Log in" : "Create an account"}
            </button>
          </p>
        </section>
      </div>
    </main>
  );
}
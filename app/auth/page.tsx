"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

type ToastType = "success" | "error";

export default function AuthPage() {
  const router = useRouter();
  const [isSignup, setIsSignup] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: ToastType } | null>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    wallet: "",
  });

  const showToast = (message: string, type: ToastType = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      return showToast("All fields are required", "error");
    }

    localStorage.setItem(
      "anchordex_user",
      JSON.stringify({
        name: form.name,
        email: form.email,
        password: form.password,
        wallet: form.wallet,
        createdAt: new Date().toISOString(),
      })
    );

    showToast("Account created successfully 🎉");
    setTimeout(() => router.push("/dashboard"), 1200);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const savedUser = localStorage.getItem("anchordex_user");
    if (!savedUser) {
      return showToast("No account found. Please sign up.", "error");
    }

    const user = JSON.parse(savedUser);

    if (user.email !== form.email || user.password !== form.password) {
      return showToast("Invalid credentials", "error");
    }

    showToast("Welcome back 🚀");
    setTimeout(() => router.push("/dashboard"), 1200);
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center bg-black text-white overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.15),_transparent_60%)]" />

      {/* TOAST */}
      {toast && (
        <div
          className={`fixed top-6 right-6 z-50 rounded-xl px-6 py-4 text-sm shadow-lg backdrop-blur
          ${toast.type === "success"
            ? "bg-teal-500/90 text-black"
            : "bg-red-500/90 text-white"}`}
        >
          {toast.message}
        </div>
      )}

      <div className="relative z-10 grid w-full max-w-6xl grid-cols-1 gap-14 px-6 md:grid-cols-2 items-center">

        {/* LEFT */}
        <div className="hidden md:flex justify-center relative">
          <div className="absolute h-[420px] w-[420px] rounded-full bg-teal-500/20 blur-3xl" />
          <Image
            src="/security-icon.png"
            alt="AnchorDex Security"
            width={340}
            height={340}
            className="relative drop-shadow-[0_40px_80px_rgba(45,212,191,0.35)]"
          />
        </div>

        {/* CARD */}
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10">

          {/* TOGGLE */}
          <div className="mb-10 flex rounded-full bg-black/40 p-1">
            <button
              onClick={() => setIsSignup(false)}
              className={`w-1/2 rounded-full py-2 text-sm font-medium transition ${
                !isSignup ? "bg-teal-400 text-black" : "text-gray-400"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsSignup(true)}
              className={`w-1/2 rounded-full py-2 text-sm font-medium transition ${
                isSignup ? "bg-teal-400 text-black" : "text-gray-400"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* LOGIN */}
          {!isSignup && (
            <form onSubmit={handleLogin} className="space-y-5">
              <h2 className="text-3xl font-semibold">Welcome Back</h2>
              <p className="text-gray-400">
                Securely access your AnchorDex account.
              </p>

              <input
                name="email"
                type="email"
                placeholder="Email address"
                onChange={handleChange}
                className="auth-input"
              />

              <input
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
                className="auth-input"
              />

              <button className="w-full rounded-xl bg-teal-400 py-3 font-semibold text-black hover:bg-teal-300">
                Login
              </button>
            </form>
          )}

          {/* SIGNUP */}
          {isSignup && (
            <form onSubmit={handleSignup} className="space-y-5">
              <h2 className="text-3xl font-semibold">Create Account</h2>
              <p className="text-gray-400">
                Trade securely with AnchorDex escrow.
              </p>

              <input
                name="name"
                placeholder="Full name"
                onChange={handleChange}
                className="auth-input"
              />

              <input
                name="email"
                type="email"
                placeholder="Email address"
                onChange={handleChange}
                className="auth-input"
              />

              <input
                name="wallet"
                placeholder="Wallet address (optional)"
                onChange={handleChange}
                className="auth-input"
              />

              <input
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
                className="auth-input"
              />

              <button className="w-full rounded-xl bg-teal-400 py-3 font-semibold text-black hover:bg-teal-300">
                Create Account
              </button>
            </form>
          )}

          <p className="mt-8 text-center text-xs text-gray-500">
            Protected by AnchorDex escrow & encryption
          </p>
        </div>
      </div>
    </section>
  );
}

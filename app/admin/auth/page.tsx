"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

export default function AdminAuthPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const STATIC_PASSWORD = "335577";

  const handleLogin = () => {
    setError("");

    if (!name || !password) {
      setError("Please fill in all fields");
      return;
    }

    if (password !== STATIC_PASSWORD) {
      setError("Invalid admin password");
      return;
    }

    // Store admin info (dummy auth)
    localStorage.setItem(
      "admin",
      JSON.stringify({ name })
    );

    router.push("/admin/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center px-4 text-white">
      <div className="w-full max-w-md rounded-2xl bg-[#0b1220] border border-white/10 p-6">

        <h1 className="text-2xl font-semibold text-center mb-2">
          Admin Login
        </h1>

        <p className="text-sm text-slate-400 text-center mb-6">
          Sign in to access the admin dashboard
        </p>

        {/* ADMIN NAME */}
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Admin name"
          className="w-full mb-4 rounded-lg bg-[#020617] border border-white/10 px-4 py-2 text-sm
                     focus:outline-none focus:ring-2 focus:ring-teal-400"
        />

        {/* PASSWORD */}
        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Admin password"
            className="w-full rounded-lg bg-[#020617] border border-white/10 px-4 py-2 pr-10 text-sm
                       focus:outline-none focus:ring-2 focus:ring-teal-400"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-2.5 text-slate-400 hover:text-white"
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>

        {/* ERROR */}
        {error && (
          <p className="mb-3 text-sm text-red-400 text-center">
            {error}
          </p>
        )}

        {/* LOGIN BUTTON */}
        <button
          onClick={handleLogin}
          className="w-full rounded-lg bg-teal-500 hover:bg-teal-600 py-2 text-sm font-medium text-black transition"
        >
          Login
        </button>

      </div>
    </div>
  );
}

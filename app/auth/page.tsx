"use client";

import { useState } from "react";
import Image from "next/image";

export default function AuthPage() {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.12),_transparent_60%)]" />

      <div className="relative z-10 max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-16 px-6 items-center">

        {/* LEFT VISUAL */}
        <div className="hidden md:flex justify-center relative">
          <div className="absolute w-[420px] h-[420px] rounded-full bg-teal-500/20 blur-3xl" />
          <Image
            src="/security-icon.png"
            alt="AnchorDex Crypto Security"
            width={360}
            height={360}
            priority
            className="relative drop-shadow-[0_40px_80px_rgba(45,212,191,0.35)] animate-float"
          />
        </div>

        {/* AUTH CARD */}
        <div className="relative min-h-[600px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 flex flex-col justify-center">

          {/* Toggle */}
          <div className="flex mb-10 bg-black/40 rounded-full p-1">
            <button
              onClick={() => setIsSignup(false)}
              className={`w-1/2 py-2 rounded-full text-sm font-medium transition ${
                !isSignup
                  ? "bg-teal-400 text-black"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsSignup(true)}
              className={`w-1/2 py-2 rounded-full text-sm font-medium transition ${
                isSignup
                  ? "bg-teal-400 text-black"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Content */}
          <div className="relative min-h-[420px]">

            {/* LOGIN */}
            {!isSignup && (
              <div className="animate-auth">
                <h2 className="text-3xl font-semibold mb-2">
                  Welcome Back
                </h2>
                <p className="text-gray-400 mb-8">
                  Access your AnchorDex account securely.
                </p>

                <form className="space-y-5">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-400"
                  />

                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-400"
                  />

                  <button
                    type="submit"
                    className="w-full mt-4 bg-teal-400 text-black py-3 rounded-xl font-semibold hover:bg-teal-300 transition"
                  >
                    Login
                  </button>
                </form>
              </div>
            )}

            {/* SIGN UP */}
            {isSignup && (
              <div className="animate-auth">
                <h2 className="text-3xl font-semibold mb-2">
                  Create Your Account
                </h2>
                <p className="text-gray-400 mb-8">
                  Trade with confidence using AnchorDex escrow.
                </p>

                <form className="space-y-5">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-400"
                  />

                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-400"
                  />

                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-400"
                  />

                  <button
                    type="submit"
                    className="w-full mt-4 bg-teal-400 text-black py-3 rounded-xl font-semibold hover:bg-teal-300 transition"
                  >
                    Create Account
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* Trust Footer */}
          <p className="text-xs text-gray-500 text-center mt-8">
            Secured by AnchorDex escrow & industry-standard encryption.
          </p>
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Our Approach", href: "/our-approach" },
    { name: "Guarantee", href: "/guarantee" },
    { name: "Exchange", href: "/exchange" },
    { name: "Markets", href: "/markets" },
    { name: "FAQs", href: "/faqs" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur border-b border-white/10 z-[9999]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex h-20 items-center justify-between">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-teal-400 rounded-md flex items-center justify-center">
                <span className="text-black font-bold">A</span>
              </div>
              <span className="text-white text-xl font-semibold">
                AnchorDex
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white/80 hover:text-white text-sm transition"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Desktop Auth */}
            <div className="hidden md:flex items-center gap-6">
              <Link
                href="/auth"
                className="text-white/80 hover:text-white text-sm transition"
              >
                Login
              </Link>

              <Link
                href="/auth"
                className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition"
              >
                Register
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden text-white text-2xl"
              onClick={() => setOpen(!open)}
            >
              {open ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {open && (
          <div className="lg:hidden bg-black border-t border-white/10">
            <div className="px-6 py-6 space-y-5">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block text-white/80 hover:text-white transition"
                >
                  {item.name}
                </Link>
              ))}

              <div className="pt-4 border-t border-white/10 space-y-4">
                <Link
                  href="/auth"
                  onClick={() => setOpen(false)}
                  className="block text-white/80 hover:text-white"
                >
                  Login
                </Link>

                <Link
                  href="/auth"
                  onClick={() => setOpen(false)}
                  className="block text-center bg-white text-black py-2 rounded-full font-medium"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      
    </>
  );
}

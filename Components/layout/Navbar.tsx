"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Our Approach", href: "/our-approach" },
  { name: "Guarantee", href: "/guarantee" },
  { name: "Exchange", href: "/exchange" },
  { name: "Markets", href: "/markets" },
  { name: "FAQs", href: "/faqs" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isLightPage = pathname === "/about";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[9999] border-b transition-all duration-300 ${
        isLightPage
          ? `bg-white/95 text-gray-900 backdrop-blur-xl ${
              scrolled || open
                ? "border-gray-200 shadow-sm"
                : "border-transparent"
            }`
          : scrolled || open
            ? "border-white/[0.08] bg-[#05080a]/80 text-white backdrop-blur-xl"
            : "border-transparent bg-transparent text-white"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-teal-400 text-sm font-bold text-black">
            P
          </span>
          <span className="text-lg font-semibold tracking-tight">
            Paychex
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`rounded-lg px-3.5 py-2 text-sm transition-colors ${
                  isLightPage
                    ? "text-gray-600 hover:bg-gray-100 hover:text-gray-950"
                    : "text-white/65 hover:bg-white/[0.06] hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop auth */}
        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="/auth"
            className={`rounded-lg px-4 py-2 text-sm transition-colors ${
              isLightPage
                ? "text-gray-700 hover:text-gray-950"
                : "text-white/75 hover:text-white"
            }`}
          >
            Log in
          </Link>
          <Link
            href="/auth"
            className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-teal-300"
          >
            Create account
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`grid h-10 w-10 place-items-center rounded-lg border text-xl lg:hidden ${
            isLightPage
              ? "border-gray-300 text-gray-900"
              : "border-white/10 text-white"
          }`}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile panel */}
      {open && (
        <div
          className={`h-[calc(100dvh-4rem)] overflow-y-auto px-6 pb-10 pt-4 lg:hidden ${
            isLightPage ? "bg-white" : "bg-[#05080a]"
          }`}
        >
          <ul
            className={`divide-y ${
              isLightPage ? "divide-gray-200" : "divide-white/[0.08]"
            }`}
          >
            {navLinks.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block py-4 text-lg transition-colors ${
                    isLightPage
                      ? "text-gray-700 hover:text-gray-950"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8 grid gap-3">
            <Link
              href="/auth"
              onClick={() => setOpen(false)}
              className={`rounded-lg border py-3 text-center font-medium ${
                isLightPage
                  ? "border-gray-300 text-gray-900"
                  : "border-white/15 text-white"
              }`}
            >
              Log in
            </Link>
            <Link
              href="/auth"
              onClick={() => setOpen(false)}
              className="rounded-lg bg-white py-3 text-center font-medium text-black"
            >
              Create account
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
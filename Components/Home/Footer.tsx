"use client";

import { Instagram, Twitter, Youtube } from "lucide-react";
import PaychexLogo from "@/Components/PaychexLogo";
import { languages, useLanguage } from "@/lib/i18n";

export default function Footer() {
  const { language, setLanguage } = useLanguage();

  return (
    <footer className="bg-black text-gray-400 px-6 pt-16 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand Section */}
        <div>
          <div className="mb-4 flex items-center gap-2.5">
            <PaychexLogo className="h-9 w-9" />
            <h2 className="text-2xl font-bold text-white">Paychex</h2>
          </div>
          <p className="text-sm mb-6">© paychex.com 2026</p>

          {/* Social Icons */}
          <div className="flex gap-4 mb-6">
            <div className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
              <Instagram size={18} />
            </div>
            <div className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
              <Twitter size={18} />
            </div>
            <div className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
              <Youtube size={18} />
            </div>
          </div>

          {/* Language Selector */}
          <label className="sr-only" htmlFor="footer-language">
            Language
          </label>
          <select
            id="footer-language"
            value={language}
            onChange={(event) => {
              const selected = languages.find(
                (option) => option.code === event.target.value,
              );
              if (selected) setLanguage(selected.code);
            }}
            className="w-40 cursor-pointer rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10"
            aria-label="Select language"
          >
            {languages.map((option) => (
              <option
                key={option.code}
                value={option.code}
                className="bg-black text-white"
              >
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer">Terms of Service</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">FAQs</li>
          </ul>
        </div>

        {/* Learning */}
        <div>
          <h3 className="text-white font-semibold mb-4">Learning</h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer">What is Crypto</li>
            <li className="hover:text-white cursor-pointer">What is Bitcoin</li>
            <li className="hover:text-white cursor-pointer">What is Blockchain</li>
            <li className="hover:text-white cursor-pointer">What is Ethereum</li>
          </ul>
        </div>

        {/* Escrow Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">Escrow Services</h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer">Escrow process</li>
            <li className="hover:text-white cursor-pointer">Guarantee</li>
            <li className="hover:text-white cursor-pointer">Our Approach</li>
            <li className="hover:text-white cursor-pointer text-white">
              Start Escrow
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

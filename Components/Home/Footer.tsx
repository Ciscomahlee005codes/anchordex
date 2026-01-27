"use client";

import { Instagram, Twitter, Youtube, ChevronDown } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 px-6 pt-16 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-teal-400 mb-4">
            AnchorDex
          </h2>
          <p className="text-sm mb-6">© anchordex.com 2026</p>

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
          <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-lg px-4 py-2 w-40 cursor-pointer hover:bg-white/10 transition">
            <span className="text-white text-sm">English</span>
            <ChevronDown size={16} />
          </div>
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

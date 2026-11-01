"use client";

import Image from "next/image";

const partners = [
  {
    name: "MetaMask",
    icon: "/meta-mask.png",
  },
  {
    name: "Smart Chain",
    icon: "/smart_chain.png",
  },
  {
    name: "Trezor",
    icon: "/trezor.png",
  },
];

export default function TrustedPartners() {
  return (
    <section className="bg-black py-20 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-14">
          Our Trusted Partners
        </h2>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-4 bg-gradient-to-b from-[#111827] to-[#0f172a] border border-white/10 rounded-xl py-6 px-6 hover:bg-white/5 transition duration-300"
            >
              <Image
                src={partner.icon}
                alt={partner.name}
                width={40}
                height={40}
              />
              <span className="text-white font-medium text-lg">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

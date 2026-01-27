import Image from "next/image";

const features = [
  {
    title: "Rapid Transactions",
    description:
      "AnchorDex delivers exceptional transaction speeds, empowering you to capitalize on cryptocurrency market opportunities efficiently.",
    icon: "/arrow_icon.jpeg",
  },
  {
    title: "Cost-Effective Rates",
    description:
      "Enjoy competitive exchange rates with AnchorDex, designed to ensure seamless and cost-efficient transactions for all parties.",
    icon: "/b_coin.jpeg",
  },
  {
    title: "Fortified Security",
    description:
      "Our multi-signature protocols and automated trade systems ensure secure, dispute-free exchanges for maximum peace of mind.",
    icon: "/security_icon.jpeg",
  },
];

export default function WhyChoose() {
  return (
    <section className="relative w-full bg-black py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="mb-16 max-w-4xl">
          <p className="text-teal-400 font-medium mb-4">
            Why Choose AnchorDex
          </p>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold leading-tight">
            Tailored Escrow Solutions for Secure Crypto Transactions
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-gradient-to-b from-[#121722] to-[#0b0f14]
                         border border-white/10 rounded-2xl p-8
                         hover:-translate-y-2 hover:border-teal-400/40
                         transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-14 h-14 rounded-xl bg-black border border-white/10 flex items-center justify-center">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={58}
                    height={58}
                  />
                </div>
              </div>

              {/* Text */}
              <h3 className="text-xl font-semibold mb-4 text-amber-100">
                {feature.title}
              </h3>
              <p className="text-white/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

const steps = [
  {
    step: "1.",
    title: "Create Your Account Effortlessly",
    description:
      "Register with AnchorDex in just a few clicks using your email address to start managing secure transactions.",
  },
  {
    step: "2.",
    title: "Fund Your Wallet Securely",
    description:
      "Deposit funds into your AnchorDex wallet to initiate your cryptocurrency exchange process.",
  },
  {
    step: "3.",
    title: "Select Your Trading Pair",
    description:
      "Choose the crypto assets you want to exchange and set the trade terms with confidence.",
  },
  {
    step: "4.",
    title: "Finalize and Receive Funds",
    description:
      "Complete the escrow process and receive your funds securely once conditions are met.",
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <h2 className="text-center text-3xl md:text-4xl xl:text-5xl font-semibold mb-20">
          Seamlessly Exchange Crypto Assets in Minutes
        </h2>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Phone Mockup */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-[280px] md:w-[320px] xl:w-[360px]">
              <Image
                src="/section-min.webp"
                alt="AnchorDex Exchange"
                width={800}
                height={800}
                className="w-full h-auto drop-shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-2xl p-8 shadow-[0_20px_40px_rgba(0,0,0,0.08)]
                           hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-teal-500 text-3xl font-semibold block mb-4">
                  {item.step}
                </span>
                <h3 className="text-lg font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

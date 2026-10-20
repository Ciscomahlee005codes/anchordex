import Image from "next/image";

const features = [
  {
    title: "Rapid transactions",
    description:
      "Trades settle in minutes, so you can act on market moves instead of waiting on a counterparty.",
    icon: "/arrow_icon.jpeg",
  },
  {
    title: "Cost-effective rates",
    description:
      "Competitive exchange rates and clear fees, so both sides know exactly what they pay before they commit.",
    icon: "/b_coin.jpeg",
  },
  {
    title: "Fortified security",
    description:
      "Multi-signature protocols and automated trade checks keep every exchange safe and dispute-free.",
    icon: "/security_icon.jpeg",
  },
];

export default function WhyChoose() {
  return (
    <section className="relative w-full bg-[#05080a] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl xl:text-5xl">
            Escrow built for crypto trades that can’t go wrong
          </h2>
          <p className="max-w-sm text-white/55">
            Fast, fair and protected from the first deposit to the final release.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
          {features.map((f) => (
            <article
              key={f.title}
              className="group relative bg-[#080c0f] p-8 transition-colors duration-300 hover:bg-[#0b1115] md:p-10"
            >
              <div className="mb-8 grid h-14 w-14 place-items-center rounded-xl border border-white/10 bg-black transition-colors group-hover:border-teal-400/50">
                <Image src={f.icon} alt="" width={40} height={40} className="rounded-md" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">{f.title}</h3>
              <p className="leading-relaxed text-white/60">{f.description}</p>
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-teal-400 to-transparent transition-transform duration-500 group-hover:scale-x-100"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
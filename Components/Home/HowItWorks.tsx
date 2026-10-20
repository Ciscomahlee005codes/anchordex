import Image from "next/image";

const steps = [
  {
    title: "Create your account",
    description:
      "Sign up with your email in a few clicks and start managing secure trades.",
  },
  {
    title: "Fund your wallet",
    description:
      "Deposit funds into your Paychex wallet to get your first exchange going.",
  },
  {
    title: "Choose a trading pair",
    description:
      "Pick the assets you want to swap and set the terms of the trade.",
  },
  {
    title: "Confirm and receive",
    description:
      "Once both sides meet the conditions, escrow releases your funds.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full scroll-mt-16 bg-[#f6f8f8] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mx-auto mb-20 max-w-3xl text-center text-3xl font-semibold leading-tight tracking-tight text-neutral-950 md:text-4xl xl:text-5xl">
          Exchange crypto assets in minutes, in four steps
        </h2>

        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Phone */}
          <div className="relative flex justify-center">
            <div
              aria-hidden
              className="absolute top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-teal-300/40 blur-[90px]"
            />
            <div className="relative w-[260px] md:w-[320px] xl:w-[360px]">
              <Image
                src="/section-min.webp"
                alt="Paychex exchange screen"
                width={800}
                height={800}
                className="h-auto w-full drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Steps: a true sequence, so numbering and the connecting line carry meaning */}
          <ol className="relative">
            <span
              aria-hidden
              className="absolute bottom-6 left-[19px] top-6 w-px bg-gradient-to-b from-teal-400 via-teal-300/50 to-transparent"
            />
            {steps.map((s, i) => (
              <li key={s.title} className="relative flex gap-6 pb-10 last:pb-0">
                <span className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-teal-400 bg-white text-sm font-semibold tabular-nums text-teal-600">
                  {i + 1}
                </span>
                <div className="flex-1 rounded-xl border border-neutral-200 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)]">
                  <h3 className="mb-1.5 text-lg font-semibold text-neutral-950">{s.title}</h3>
                  <p className="leading-relaxed text-neutral-600">{s.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
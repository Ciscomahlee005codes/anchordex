import { FaChartBar, FaGlobe } from "react-icons/fa";
import { HiOutlineClock } from "react-icons/hi";
import { BsArrowRepeat } from "react-icons/bs";

const metrics = [
  { icon: FaChartBar, value: "$16M+", label: "Traded in the last 24 hours" },
  { icon: BsArrowRepeat, value: "2,200+", label: "Transactions every week" },
  { icon: FaGlobe, value: "100+", label: "Countries reached" },
  { icon: HiOutlineClock, value: "~10 min", label: "Average time to settle" },
];

export default function PerformanceMetrics() {
  return (
    <section className="bg-[#05080a] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Performance at a glance
        </h2>

        <dl className="grid overflow-hidden rounded-2xl border border-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map(({ icon: Icon, value, label }, i) => (
            <div
              key={label}
              className={`relative bg-[#080c0f] p-8 transition-colors hover:bg-[#0b1115] ${
                i > 0 ? "border-t border-white/10 sm:border-t-0 sm:border-l" : ""
              } ${i === 2 ? "sm:max-lg:border-t sm:max-lg:border-l-0" : ""} ${
                i === 3 ? "sm:max-lg:border-t" : ""
              }`}
            >
              <Icon className="mb-10 text-2xl text-teal-400" />
              <dd className="text-4xl font-semibold tabular-nums tracking-tight text-white">
                {value}
              </dd>
              <dt className="mt-2 text-sm text-white/50">{label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
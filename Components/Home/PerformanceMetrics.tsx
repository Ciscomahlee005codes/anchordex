import { FaChartBar, FaGlobe } from "react-icons/fa";
import { HiOutlineClock } from "react-icons/hi";
import { BsArrowRepeat } from "react-icons/bs";

const metrics = [
  {
    icon: <FaChartBar className="text-teal-400 text-3xl" />,
    value: "$16M+",
    label: "24-Hour Trading Volume",
  },
  {
    icon: <BsArrowRepeat className="text-teal-400 text-3xl" />,
    value: "2,200+",
    label: "Weekly Transactions",
  },
  {
    icon: <FaGlobe className="text-teal-400 text-3xl" />,
    value: "100+",
    label: "Global Reach (Countries)",
  },
  {
    icon: <HiOutlineClock className="text-teal-400 text-3xl" />,
    value: "~10 Minutes",
    label: "Average Transaction Time",
  },
];

export default function PerformanceMetrics() {
  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-white text-4xl font-semibold mb-12">
          Performance Metrics
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#111827] to-[#1f2937]
              rounded-2xl p-8 shadow-lg border border-white/5
              hover:scale-[1.03] transition-transform duration-300"
            >
              <div className="mb-6">{item.icon}</div>

              <h3 className="text-white text-3xl font-bold mb-2">
                {item.value}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

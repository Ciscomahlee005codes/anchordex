"use client";

export default function PortfolioCard() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-xs uppercase text-gray-400">
            Your Portfolio Value
          </p>
          <h2 className="text-3xl font-semibold">$1,856.84</h2>
        </div>

        <div className="flex gap-3 text-xs text-gray-400">
          <span>1H</span>
          <span>24H</span>
          <span className="text-blue-600 font-medium">1W</span>
          <span>1M</span>
          <span>1Y</span>
          <span>ALL</span>
        </div>
      </div>

      {/* Fake Chart */}
      <svg viewBox="0 0 500 120" className="w-full">
        <polyline
          fill="none"
          stroke="#2563eb"
          strokeWidth="2"
          points="
            0,90 40,85 80,88 120,80 160,78
            200,60 240,65 280,62 320,40
            360,90 400,75 440,70 480,72
          "
        />
      </svg>
    </div>
  );
}

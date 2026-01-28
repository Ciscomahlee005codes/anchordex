"use client";

export default function PortfolioCard() {
  return (
    <div className="w-full max-w-full overflow-x-hidden rounded-2xl border border-white/10 bg-[#020617] p-4 sm:p-6">

      {/* HEADER */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        {/* VALUE */}
        <div className="min-w-0">
          <p className="text-xs font-medium uppercase tracking-wider text-slate-400 truncate">
            Your Portfolio Value
          </p>
          <h2 className="mt-1 text-2xl sm:text-3xl md:text-4xl font-semibold text-white truncate">
            $1,856.84
          </h2>
        </div>

        {/* RANGE SELECTOR */}
        <div className="flex flex-wrap gap-2 text-xs">
          {["1H", "24H", "1W", "1M", "1Y", "ALL"].map((item) => {
            const active = item === "1W";
            return (
              <button
                key={item}
                className={`px-3 py-1.5 rounded-full border transition whitespace-nowrap ${
                  active
                    ? "bg-teal-500 text-black border-teal-400"
                    : "border-white/10 text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>

      {/* CHART */}
      <div className="mt-6 w-full overflow-x-hidden">
        <div className="relative w-full aspect-[5/1] sm:aspect-[6/1] md:aspect-[8/1] overflow-hidden rounded-lg bg-black/40">
          <svg
            viewBox="0 0 500 100"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full block"
          >
            <polyline
              fill="none"
              stroke="#2dd4bf"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
              points="
                0,80 40,75 80,78 120,70 160,68
                200,50 240,55 280,52 320,30
                360,80 400,65 440,60 480,62
              "
            />
          </svg>
        </div>
      </div>

    </div>
  );
}

"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiArrowUpRight } from "react-icons/fi";

interface Coin {
  id: string;
  name: string;
  symbol: string;
  image: string;
  market_cap: number;
  current_price: number;
  total_volume: number;
  price_change_percentage_24h: number | null;
  market_cap_rank: number;
}

const usd = (n: number, compact = false) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    notation: compact ? "compact" : "standard",
    maximumFractionDigits: compact ? 2 : n < 1 ? 4 : 2,
  }).format(n);

function Change({ value }: { value: number | null }) {
  if (value == null) return <span className="text-white/40">–</span>;
  const up = value >= 0;
  return (
    <span
      className={`inline-flex rounded-md px-2 py-1 text-xs font-medium tabular-nums ${
        up ? "bg-emerald-400/10 text-emerald-400" : "bg-red-400/10 text-red-400"
      }`}
    >
      {up ? "+" : ""}
      {value.toFixed(2)}%
    </span>
  );
}

export default function CryptoMarketTable() {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false",
      { signal: controller.signal }
    )
      .then((res) => {
        if (!res.ok) throw new Error("Failed");
        return res.json();
      })
      .then((data: Coin[]) => setCoins(data))
      .catch((e) => {
        if (e.name !== "AbortError") setError(true);
      })
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, []);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return coins.filter(
      (c) => c.name.toLowerCase().includes(q) || c.symbol.toLowerCase().includes(q)
    );
  }, [coins, search]);

  return (
    <section className="bg-[#05080a] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Escrow for over <span className="text-teal-400">120 cryptocurrencies</span>
            </h2>
            <p className="mt-3 text-white/50">Live prices for the top assets by market cap.</p>
          </div>

          <label className="relative block w-full md:w-80">
            <span className="sr-only">Search coins</span>
            <FiSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
            <input
              type="search"
              placeholder="Search BTC, ETH, USDT"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3 pl-11 pr-4 text-white placeholder:text-white/35 outline-none transition focus:border-teal-400/60 focus:ring-2 focus:ring-teal-400/20"
            />
          </label>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#080c0f]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 text-white/45">
                  <th className="w-16 px-6 py-4 font-medium">#</th>
                  <th className="px-6 py-4 font-medium">Coin</th>
                  <th className="px-6 py-4 text-right font-medium">Price</th>
                  <th className="px-6 py-4 text-right font-medium">24h</th>
                  <th className="px-6 py-4 text-right font-medium">Market cap</th>
                  <th className="px-6 py-4 text-right font-medium">Volume</th>
                  <th className="px-6 py-4" />
                </tr>
              </thead>

              <tbody className="divide-y divide-white/[0.06]">
                {loading &&
                  Array.from({ length: 7 }).map((_, i) => (
                    <tr key={i}>
                      <td colSpan={7} className="px-6 py-4">
                        <div className="h-6 animate-pulse rounded-md bg-white/[0.06]" />
                      </td>
                    </tr>
                  ))}

                {!loading && error && (
                  <tr>
                    <td colSpan={7} className="px-6 py-16 text-center">
                      <p className="font-medium text-white">Market data didn’t load</p>
                      <p className="mt-1 text-white/50">
                        Check your connection and refresh the page.
                      </p>
                    </td>
                  </tr>
                )}

                {!loading && !error && filtered.length === 0 && (
                  <tr>
                    <td colSpan={7} className="px-6 py-16 text-center text-white/50">
                      No coins match “{search}”.
                    </td>
                  </tr>
                )}

                {filtered.map((coin) => (
                  <tr key={coin.id} className="group transition-colors hover:bg-white/[0.03]">
                    <td className="px-6 py-4 tabular-nums text-white/40">
                      {coin.market_cap_rank}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <Image
                          src={coin.image}
                          alt=""
                          width={28}
                          height={28}
                          className="rounded-full"
                        />
                        <span className="font-medium text-white">{coin.name}</span>
                        <span className="text-xs uppercase text-white/40">{coin.symbol}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right font-medium tabular-nums text-white">
                      {usd(coin.current_price)}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Change value={coin.price_change_percentage_24h} />
                    </td>
                    <td className="px-6 py-4 text-right tabular-nums text-white/70">
                      {usd(coin.market_cap, true)}
                    </td>
                    <td className="px-6 py-4 text-right tabular-nums text-white/70">
                      {usd(coin.total_volume, true)}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Link
                        href="/auth"
                        className="inline-flex items-center gap-1 rounded-lg border border-white/10 px-3 py-1.5 text-xs font-medium text-white/80 transition hover:border-teal-400/60 hover:bg-teal-400/10 hover:text-teal-300"
                      >
                        Trade <FiArrowUpRight />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="mt-5 text-xs text-white/35">
          Market data by CoinGecko. Prices are indicative and may change.
        </p>
      </div>
    </section>
  );
}
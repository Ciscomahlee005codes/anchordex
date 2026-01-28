"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface Coin {
  id: string;
  name: string;
  symbol: string;
  image: string;
  market_cap: number;
  current_price: number;
  total_volume: number;
  price_change_percentage_24h: number;
  market_cap_rank: number;
}

export default function DashboardMarket() {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
    )
      .then((res) => {
        if (!res.ok) throw new Error("Failed");
        return res.json();
      })
      .then((data) => {
        setCoins(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="text-center text-gray-400 py-20 md:ml-[260px]">
        Loading market data...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-400 py-20 md:ml-[260px]">
        Failed to load market data. Please try again later.
      </div>
    );
  }

  return (
    <section className="bg-black py-20 md:ml-[260px] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <h2 className="text-white text-4xl font-semibold mb-6">
          Trusted Escrow for Over{" "}
          <span className="text-teal-400">120 Cryptocurrencies</span>
        </h2>

        {/* Search */}
        <input
          type="text"
          placeholder="Search coin (BTC, ETH, USDT...)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mb-8 w-full md:w-96 px-4 py-3 rounded-xl bg-[#0b0f19] text-white border border-white/10 outline-none"
        />

        {/* Table */}
        <div className="overflow-x-auto rounded-2xl border border-white/5">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#111827] text-gray-400 uppercase text-xs">
              <tr>
                <th className="px-6 py-4">Rank</th>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Price</th>
                <th className="px-6 py-4">Market Cap</th>
                <th className="px-6 py-4">Volume</th>
                <th className="px-6 py-4">24h</th>
                <th className="px-6 py-4">Action</th>
              </tr>
            </thead>

            <tbody className="bg-[#0b0f19]">
              {filteredCoins.length === 0 && (
                <tr>
                  <td
                    colSpan={7}
                    className="text-center text-gray-400 py-10"
                  >
                    No coins found.
                  </td>
                </tr>
              )}

              {filteredCoins.map((coin) => (
                <tr
                  key={coin.id}
                  className="border-t border-white/5 hover:bg-white/5 transition"
                >
                  <td className="px-6 py-4 text-gray-400">
                    {coin.market_cap_rank}
                  </td>

                  <td className="px-6 py-4 flex items-center gap-3">
                    <Image
                      src={coin.image}
                      alt={coin.name}
                      width={24}
                      height={24}
                    />
                    <span className="text-white font-medium">
                      {coin.name}
                    </span>
                    <span className="text-gray-500 uppercase text-xs">
                      {coin.symbol}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-white">
                    ${coin.current_price.toLocaleString()}
                  </td>

                  <td className="px-6 py-4 text-gray-300">
                    ${coin.market_cap.toLocaleString()}
                  </td>

                  <td className="px-6 py-4 text-gray-300">
                    ${coin.total_volume.toLocaleString()}
                  </td>

                  <td
                    className={`px-6 py-4 font-medium ${
                      coin.price_change_percentage_24h >= 0
                        ? "text-green-400"
                        : "text-red-500"
                    }`}
                  >
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </td>

                  {/* CTA */}
                  <td className="px-6 py-4">
                    <button className="text-teal-400 hover:underline text-sm">
                      Trade →
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Disclaimer */}
        <p className="text-gray-500 text-xs mt-6">
          Market data provided by CoinGecko. Prices are indicative and subject
          to change.
        </p>

      </div>
    </section>
  );
}

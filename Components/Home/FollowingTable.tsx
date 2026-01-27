const coins = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    price: "$9,497.12",
    change: "+0.55%",
    marketCap: "$169.6B",
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    price: "$210.93",
    change: "+2.30%",
    marketCap: "$22.6B",
  },
  {
    name: "XRP",
    symbol: "XRP",
    price: "$0.31",
    change: "+0.90%",
    marketCap: "$13.3B",
  },
  {
    name: "Bitcoin Cash",
    symbol: "BCH",
    price: "$305.14",
    change: "+1.92%",
    marketCap: "$5.5B",
  },
];

export default function FollowingTable() {
  return (
    <div className="bg-white rounded-xl shadow-sm border mt-6">
      <div className="p-4 border-b font-medium">Following</div>

      <table className="w-full text-sm">
        <thead className="text-gray-400">
          <tr>
            <th className="p-4 text-left">#</th>
            <th className="p-4 text-left">Name</th>
            <th className="p-4">Price</th>
            <th className="p-4">Change</th>
            <th className="p-4">Market Cap</th>
          </tr>
        </thead>

        <tbody>
          {coins.map((coin, i) => (
            <tr key={coin.symbol} className="border-t">
              <td className="p-4">{i + 1}</td>
              <td className="p-4 font-medium">
                {coin.name}{" "}
                <span className="text-gray-400 text-xs">
                  {coin.symbol}
                </span>
              </td>
              <td className="p-4">{coin.price}</td>
              <td className="p-4 text-green-500">{coin.change}</td>
              <td className="p-4">{coin.marketCap}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

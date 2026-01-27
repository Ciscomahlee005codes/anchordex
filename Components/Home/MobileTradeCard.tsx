export default function MobileTradeCard() {
  return (
    <div className="bg-[#0b0f19] text-white rounded-3xl p-6 w-[320px] shadow-xl">
      <h3 className="font-semibold mb-2">Start Escrow Trade</h3>
      <p className="text-sm text-gray-400 mb-6">
        Exchange crypto securely with our escrow system.
      </p>

      <div className="space-y-4">
        <div className="bg-[#111827] p-4 rounded-xl">
          <p className="text-xs text-gray-400 mb-1">You Send</p>
          <div className="flex justify-between items-center">
            <span>BTC</span>
            <span className="text-gray-400">0.00</span>
          </div>
        </div>

        <div className="bg-[#111827] p-4 rounded-xl">
          <p className="text-xs text-gray-400 mb-1">You Receive</p>
          <div className="flex justify-between items-center">
            <span>ETH</span>
            <span className="text-gray-400">0.00</span>
          </div>
        </div>

        <div>
          <p className="text-xs text-gray-400 mb-2">Select role type</p>
          <div className="flex gap-3">
            <button className="flex-1 py-2 rounded-lg bg-[#1f2937]">
              Seller
            </button>
            <button className="flex-1 py-2 rounded-lg bg-[#1f2937]">
              Buyer
            </button>
          </div>
        </div>

        <button className="w-full py-3 rounded-xl bg-teal-500 font-medium mt-4">
          Start Trade
        </button>
      </div>
    </div>
  );
}

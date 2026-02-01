function DummyFundModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
      <div className="w-full max-w-md rounded-xl bg-[#0b1220] border border-white/10 p-6">
        <h2 className="text-lg font-semibold mb-4 text-center">
          Credit Dummy Funds
        </h2>

        <input
          placeholder="Amount (BTC)"
          className="w-full mb-4 rounded-lg bg-[#020617] border border-white/10 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
        />

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 border border-white/10 rounded-lg py-2 text-sm"
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className="flex-1 bg-teal-500 hover:bg-teal-600 rounded-lg py-2 text-sm font-medium text-black"
          >
            Credit
          </button>
        </div>
      </div>
    </div>
  );
}
export default DummyFundModal;
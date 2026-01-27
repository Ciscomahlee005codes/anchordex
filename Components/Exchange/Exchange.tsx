import Footer from "../Home/Footer";

export default function Exchange() {
  return (
    <main className="w-full">

      {/* HERO */}
      <section className="bg-black py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-teal-400 text-4xl md:text-5xl font-semibold mb-6">
            Secure Crypto Exchange with Escrow Protection
          </h1>
          <p className="text-white/80 text-lg max-w-3xl mx-auto leading-relaxed">
            Trade cryptocurrencies confidently using AnchorDex’s escrow-powered
            exchange. Funds are securely locked until all conditions are met —
            eliminating counterparty risk.
          </p>

          <div className="flex justify-center gap-4 mt-10">
            <button className="bg-white text-black px-7 py-3 rounded-full font-medium hover:bg-gray-200 transition">
              Start Exchange
            </button>
            <button className="bg-teal-500/20 text-teal-400 px-7 py-3 rounded-full font-medium hover:bg-teal-500/30 transition">
              How It Works →
            </button>
          </div>
        </div>
      </section>

      {/* EXCHANGE PANEL */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT - EXCHANGE BOX */}
          <div className="border rounded-2xl p-8 shadow-sm">

            <h2 className="text-xl font-semibold mb-6">
              Start an Escrow Exchange
            </h2>

            {/* You Send */}
            <div className="mb-6">
              <label className="text-sm text-gray-600 mb-2 block">
                You Send
              </label>
              <div className="flex items-center justify-between border rounded-xl px-4 py-3">
                <span className="font-medium">BTC</span>
                <span className="text-gray-400">0.00</span>
              </div>
            </div>

            {/* Swap Icon */}
            <div className="flex justify-center my-4 text-teal-500 text-xl">
              ⇅
            </div>

            {/* You Receive */}
            <div className="mb-8">
              <label className="text-sm text-gray-600 mb-2 block">
                You Receive
              </label>
              <div className="flex items-center justify-between border rounded-xl px-4 py-3">
                <span className="font-medium">ETH</span>
                <span className="text-gray-400">0.00</span>
              </div>
            </div>

            <button className="w-full bg-teal-500 text-white py-3 rounded-full font-medium hover:bg-teal-600 transition">
              Continue to Escrow
            </button>
          </div>

          {/* RIGHT - EXPLANATION */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Why Use AnchorDex Exchange?
            </h3>

            <ul className="space-y-6">
              {[
                "Escrow-secured trades prevent fraud and chargebacks.",
                "Funds are only released after both parties confirm.",
                "Supports OTC and high-value crypto exchanges.",
                "Transparent dispute resolution if issues arise.",
                "No hidden fees or forced counterparties."
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="mt-2 w-3 h-3 rounded-full bg-teal-500 flex-shrink-0" />
                  <p className="text-gray-700 leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* SECURITY STRIP */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

          <div>
            <h4 className="font-semibold mb-2">Escrow Locked Funds</h4>
            <p className="text-gray-600">
              Assets are secured until transaction terms are fulfilled.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Verified Participants</h4>
            <p className="text-gray-600">
              Email and wallet verification ensure legitimate trades.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Human + Automated Review</h4>
            <p className="text-gray-600">
              Smart systems backed by manual oversight for disputes.
            </p>
          </div>

        </div>
      </section>
      <Footer />
    </main>
  );
}

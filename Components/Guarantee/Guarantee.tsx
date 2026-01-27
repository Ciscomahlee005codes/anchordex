import Footer from "../Home/Footer";

export default function Guarantee() {
  return (
    <main className="w-full">

      {/* HERO SECTION */}
      <section className="bg-black py-32">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-teal-400 text-4xl md:text-5xl font-semibold mb-6">
            Our Guarantee
          </h1>
          <p className="text-white/80 text-lg leading-relaxed">
            AnchorDex is committed to protecting every transaction with
            transparency, security, and fairness. Our escrow guarantee ensures
            confidence for both buyers and sellers at every step.
          </p>
        </div>
      </section>

      {/* GUARANTEE CONTENT */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">

          {/* INTRO */}
          <div className="max-w-3xl mb-20">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              What We Guarantee
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our escrow system is designed to eliminate uncertainty in crypto
              exchanges. AnchorDex guarantees that funds are held securely and
              released only when all agreed conditions between parties are met.
            </p>
          </div>

          {/* GUARANTEE CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">

            <div className="rounded-2xl border p-8">
              <h3 className="text-lg font-semibold mb-4">
                Fund Protection
              </h3>
              <p className="text-gray-600">
                All funds are securely locked in escrow and cannot be accessed
                or released without proper verification and approval.
              </p>
            </div>

            <div className="rounded-2xl border p-8">
              <h3 className="text-lg font-semibold mb-4">
                Fair Dispute Resolution
              </h3>
              <p className="text-gray-600">
                If a dispute arises, AnchorDex reviews all transaction details
                and evidence to ensure a fair and unbiased resolution.
              </p>
            </div>

            <div className="rounded-2xl border p-8">
              <h3 className="text-lg font-semibold mb-4">
                Transparent Process
              </h3>
              <p className="text-gray-600">
                Every step of the escrow process is clearly defined, monitored,
                and recorded to ensure full transparency for both parties.
              </p>
            </div>

          </div>

          {/* ADDITIONAL ASSURANCES */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">

            <div>
              <h3 className="text-xl font-semibold mb-4">
                Buyer Assurance
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Buyers are protected from premature fund releases. Payments are
                only completed once the agreed goods or services are delivered
                and approved.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                Seller Assurance
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Sellers are guaranteed payment once they fulfill their delivery
                obligations according to the transaction terms.
              </p>
            </div>

          </div>

          {/* CLOSING STATEMENT */}
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6">
              Built on Trust, Backed by Technology
            </h3>
            <p className="text-gray-700 leading-relaxed">
              AnchorDex combines secure escrow infrastructure with human
              oversight to guarantee safe, reliable, and dispute-free crypto
              transactions — giving you peace of mind every time you trade.
            </p>
          </div>

        </div>
      </section>
      <Footer />
    </main>
  );
}

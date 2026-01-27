import Footer from "../Home/Footer";

export default function OurApproach() {
  return (
    <main className="w-full">

      {/* HERO SECTION */}
      <section className="bg-black py-32">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-teal-400 text-4xl md:text-5xl font-semibold mb-6">
            AnchorDex Escrow Process
          </h1>
          <p className="text-white/80 text-lg leading-relaxed">
            AnchorDex employs a highly automated escrow process to streamline
            cryptocurrency transactions. For enhanced security, fund releases
            and dispute resolutions are meticulously handled by our expert team.
          </p>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="bg-white py-24">
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-2xl md:text-3xl font-semibold mb-10">
            Escrow Process Overview
          </h2>

          <ul className="space-y-6 mb-16">
            {[
              "A buyer or seller initiates a secure escrow transaction.",
              "Both parties verify their email and cryptocurrency addresses.",
              "The buyer transfers cryptocurrencies to AnchorDex's secure escrow address.",
              "The seller delivers the agreed-upon item(s) to the buyer.",
              "An inspection period begins upon the buyer's receipt of the item(s).",
              "Once approved, funds are securely released to the seller.",
              "In case of disputes, AnchorDex intervenes to ensure fair resolution.",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-4">
                <span className="mt-2 w-3 h-3 rounded-full bg-teal-500 flex-shrink-0" />
                <p className="text-gray-700 leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>

          {/* WHY OUR APPROACH */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
            <div>
              <h3 className="font-semibold text-lg mb-3">
                Neutral & Trustless
              </h3>
              <p className="text-gray-600">
                AnchorDex acts as an impartial third party, ensuring that
                neither buyer nor seller can manipulate the transaction.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">
                Security-First Design
              </h3>
              <p className="text-gray-600">
                Funds are locked in escrow using secure wallets and released
                only when all agreed conditions are met.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">
                Dispute Protection
              </h3>
              <p className="text-gray-600">
                In the event of disagreements, our team carefully reviews
                evidence to deliver a fair and transparent outcome.
              </p>
            </div>
          </div>

          {/* CLOSING NOTE */}
          <div className="text-center">
            <p className="text-gray-700 max-w-3xl mx-auto">
              With AnchorDex, every transaction is structured to minimize risk,
              protect all parties, and ensure confidence throughout the entire
              exchange process.
            </p>
          </div>

        </div>
      </section>
      <Footer />
    </main>
  );
}

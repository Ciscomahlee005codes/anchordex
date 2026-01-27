import Footer from "../Home/Footer";
import TrustedPartners from "../Home/TrustedPartners";


export default function AboutPage() {
  return (
    <main className="bg-white text-black">
      
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        
        <p className="uppercase tracking-widest text-gray-500 text-sm mb-4">
          About AnchorDex
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-teal-500 mb-8">
          Who We Are
        </h1>

        <div className="space-y-6 text-lg leading-relaxed text-gray-800">
          <p>
            AnchorDex is a premier cryptocurrency escrow service, recognized by
            leading publications such as Forbes. Our mission is to streamline
            and secure cryptocurrency exchanges, minimizing fraud and enhancing
            trust in online transactions through our advanced escrow platform.
          </p>

          <p>
            Our escrow process is highly automated, designed to facilitate
            seamless transactions. While we encourage trading parties to resolve
            disputes independently, AnchorDex provides a fair and systematic
            dispute resolution mechanism to address any challenges that may arise.
          </p>

          <p>
            We are dedicated to accelerating the global adoption of
            cryptocurrencies by offering a reliable, decentralized finance (DeFi)
            exchange platform for secure and efficient transactions.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          A Seamless Crypto Experience for All
        </h2>

        <p className="text-lg leading-relaxed text-gray-800">
          Bitcoin represents a transformative shift in the concept of money,
          pioneered by Satoshi Nakamoto in 2009. As a decentralized digital
          currency, it has garnered significant attention from early adopters
          to institutional investors, becoming a cornerstone of diversified
          investment portfolios.
        </p>

        <p className="text-lg leading-relaxed text-gray-800 mt-6">
          With cryptocurrency gaining mainstream traction, AnchorDex simplifies
          the complexities of crypto trading. Our tailored peer-to-peer escrow
          service empowers both novice and experienced traders to navigate the
          crypto market with confidence and ease.
        </p>
      </section>

      {/* Core Services Section */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Our Core Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-3 text-teal-500">
              Secure Escrow
            </h3>
            <p className="text-gray-700">
              Funds are securely held in escrow until all transaction
              conditions are met, protecting both buyers and sellers.
            </p>
          </div>

          <div className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-3 text-teal-500">
              Dispute Resolution
            </h3>
            <p className="text-gray-700">
              A transparent and structured dispute resolution system ensures
              fairness in the event of disagreements.
            </p>
          </div>

          <div className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-3 text-teal-500">
              DeFi Integration
            </h3>
            <p className="text-gray-700">
              Seamless integration with decentralized finance protocols
              for secure and efficient crypto transactions.
            </p>
          </div>

        </div>
      </section>

      {/* Trusted Partners */}
      <TrustedPartners />

      {/* Footer */}
      <Footer />
    </main>
  );
}

import CryptoMarketTable from "@/Components/Home/CryptoMarketTable";
import FAQ from "@/Components/Home/FAQ";
import FollowingTable from "@/Components/Home/FollowingTable";
import Footer from "@/Components/Home/Footer";
import Hero from "@/Components/Home/Hero";
import HowItWorks from "@/Components/Home/HowItWorks";
import MobileTradeCard from "@/Components/Home/MobileTradeCard";
import PerformanceMetrics from "@/Components/Home/PerformanceMetrics";
import PortfolioCard from "@/Components/Home/PortfolioCard";
import TrustedPartners from "@/Components/Home/TrustedPartners";
import WhyChoose from "@/Components/Home/WhyChoose";
import Navbar from "@/Components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyChoose />
        <HowItWorks />
        <PerformanceMetrics />
        <CryptoMarketTable />

        {/* Product preview */}
        <section className="overflow-x-hidden bg-[#f6f8f8] px-4 py-20 sm:px-6 md:py-28">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-start">
            <div className="flex min-w-0 flex-1 flex-col gap-6">
              <PortfolioCard />
              <FollowingTable />
            </div>
            <div className="flex min-w-0 justify-center lg:justify-end">
              <MobileTradeCard />
            </div>
          </div>
        </section>

        <FAQ />
        <TrustedPartners />
      </main>
      <Footer />
    </>
  );
}
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
    <Hero />
    <WhyChoose />
    <HowItWorks />
    <PerformanceMetrics />
    <CryptoMarketTable />
    <main className="bg-gray-100 min-h-screen p-4 sm:p-6 md:p-10 overflow-x-hidden">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 lg:gap-8">

    {/* LEFT & CENTER: Portfolio + Following Table */}
    <div className="flex-1 flex flex-col gap-6 w-full min-w-0">
      <PortfolioCard />
      <FollowingTable />
    </div>

    {/* RIGHT: Mobile Trade Card */}
    <div className="flex justify-center lg:justify-end w-full lg:w-auto min-w-0">
      <MobileTradeCard />
    </div>
  </div>
</main>

    <FAQ />
    <TrustedPartners />
    <Footer />
    </>
  );
}

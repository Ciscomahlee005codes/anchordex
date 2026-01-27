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
    <main className="bg-gray-100 min-h-screen p-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <PortfolioCard />
          <FollowingTable />
        </div>

        <div className="flex justify-center">
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

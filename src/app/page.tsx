import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import ResultsSection from '@/components/ResultsSection';
import PortfolioSection from '@/components/PortfolioSection';
import PricingSection from '@/components/PricingSection';
import BlogSection from '@/components/BlogSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <ResultsSection />
        <PortfolioSection />
        <PricingSection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}

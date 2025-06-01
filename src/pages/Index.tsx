import CosmicBackground from "@/components/CosmicBackground";
import StarField from "@/components/StarField";
import Header from "@/components/Header";
import MarketplaceHero from "@/components/MarketplaceHero";
import CategorySection from "@/components/CategorySection";
import ProductGrid from "@/components/ProductGrid";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <CosmicBackground />
      <StarField />
      <Header />
      <MarketplaceHero />
      <CategorySection />
      <ProductGrid />
    </div>
  );
};

export default Index;

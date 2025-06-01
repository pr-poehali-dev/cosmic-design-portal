import CosmicBackground from "@/components/CosmicBackground";
import StarField from "@/components/StarField";
import HeroSection from "@/components/HeroSection";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <CosmicBackground />
      <StarField />
      <HeroSection />
    </div>
  );
};

export default Index;

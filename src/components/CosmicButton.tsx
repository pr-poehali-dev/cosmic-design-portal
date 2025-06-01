import { Button } from "@/components/ui/button";

interface CosmicButtonProps {
  children: React.ReactNode;
  href: string;
}

const CosmicButton = ({ children, href }: CosmicButtonProps) => {
  const handleClick = () => {
    window.open(href, "_blank", "noopener,noreferrer");
  };

  return (
    <Button
      onClick={handleClick}
      className="relative px-8 py-6 text-lg font-medium text-white bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 hover:from-purple-700 hover:via-pink-600 hover:to-blue-600 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 border border-purple-400/30 backdrop-blur-sm"
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/20 via-pink-500/20 to-blue-500/20 blur-xl" />
      <div className="absolute inset-0 rounded-full bg-white/10 animate-pulse" />
    </Button>
  );
};

export default CosmicButton;

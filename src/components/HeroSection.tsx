import CosmicButton from "./CosmicButton";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-4">
      {/* Main heading */}
      <div className="mb-12">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-b from-white via-purple-200 to-purple-400 bg-clip-text text-transparent mb-6 font-montserrat tracking-wider">
          LAFI
        </h1>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-light bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent font-montserrat tracking-widest">
          DESIGN
        </h2>
      </div>

      {/* Cosmic decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-ping" />
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-300 rounded-full animate-pulse" />
      <div
        className="absolute bottom-1/3 left-1/5 w-1.5 h-1.5 bg-pink-300 rounded-full animate-ping"
        style={{ animationDelay: "1s" }}
      />

      {/* Call to action */}
      <div className="mt-16">
        <CosmicButton href="https://t.me/Lafidesign">
          🎨 Купить дизайн
        </CosmicButton>
      </div>

      {/* Subtitle */}
      <p className="mt-8 text-lg md:text-xl text-purple-200/80 font-light max-w-2xl">
        Создаем дизайн, который вдохновляет космосом
      </p>
    </div>
  );
};

export default HeroSection;

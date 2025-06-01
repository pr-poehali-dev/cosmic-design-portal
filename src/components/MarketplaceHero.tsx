import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const MarketplaceHero = () => {
  return (
    <section className="relative pt-24 pb-16 min-h-screen flex items-center">
      <div className="container mx-auto px-4 text-center">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-b from-white via-purple-200 to-purple-400 bg-clip-text text-transparent mb-6 font-montserrat">
            STELLAR DESIGNS
          </h1>
          <h2 className="text-2xl md:text-4xl font-light bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent mb-8">
            Маркетплейс космических дизайнов
          </h2>
          <p className="text-lg md:text-xl text-purple-200/80 mb-12 max-w-2xl mx-auto">
            Откройте галактику творчества. Покупайте и продавайте уникальные
            дизайн-продукты в космической тематике
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 hover:from-purple-700 hover:via-pink-600 hover:to-blue-600 text-white px-8 py-4 text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300">
              <Icon name="Telescope" size={20} className="mr-2" />
              Исследовать каталог
            </Button>
            <Button
              variant="outline"
              className="border-purple-400 text-purple-200 hover:bg-purple-600/20 px-8 py-4 text-lg rounded-full"
            >
              <Icon name="Rocket" size={20} className="mr-2" />
              Начать продавать
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">1000+</div>
            <div className="text-purple-300 text-sm">Дизайнов</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">500+</div>
            <div className="text-purple-300 text-sm">Дизайнеров</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">50+</div>
            <div className="text-purple-300 text-sm">Категорий</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-purple-300 text-sm">Поддержка</div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-ping" />
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-300 rounded-full animate-pulse" />
      <div
        className="absolute bottom-1/3 left-1/5 w-1.5 h-1.5 bg-pink-300 rounded-full animate-ping"
        style={{ animationDelay: "1s" }}
      />
    </section>
  );
};

export default MarketplaceHero;

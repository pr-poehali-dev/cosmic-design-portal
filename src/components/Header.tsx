import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-purple-500/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
            <Icon name="Sparkles" size={20} className="text-white" />
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
            Stellar Designs
          </h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="text-purple-200 hover:text-white transition-colors"
          >
            Каталог
          </a>
          <a
            href="#"
            className="text-purple-200 hover:text-white transition-colors"
          >
            Категории
          </a>
          <a
            href="#"
            className="text-purple-200 hover:text-white transition-colors"
          >
            Продавцам
          </a>
          <a
            href="#"
            className="text-purple-200 hover:text-white transition-colors"
          >
            Блог
          </a>
        </nav>

        {/* Search */}
        <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Icon
              name="Search"
              size={20}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-300"
            />
            <input
              type="text"
              placeholder="Поиск космических дизайнов..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-800/50 border border-purple-500/30 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:border-purple-400"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <button className="relative p-2 text-purple-200 hover:text-white transition-colors">
            <Icon name="Heart" size={24} />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-purple-500 rounded-full text-xs text-white flex items-center justify-center">
              3
            </span>
          </button>

          <button className="relative p-2 text-purple-200 hover:text-white transition-colors">
            <Icon name="ShoppingCart" size={24} />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 rounded-full text-xs text-white flex items-center justify-center">
              2
            </span>
          </button>

          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-4 py-2 rounded-lg">
            Войти
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

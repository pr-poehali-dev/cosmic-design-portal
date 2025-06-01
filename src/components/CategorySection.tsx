import Icon from "@/components/ui/icon";

const categories = [
  { name: "UI/UX Киты", icon: "Monitor", count: 156 },
  { name: "Иллюстрации", icon: "Palette", count: 234 },
  { name: "3D Модели", icon: "Box", count: 89 },
  { name: "Иконки", icon: "Star", count: 312 },
  { name: "Шрифты", icon: "Type", count: 67 },
  { name: "Текстуры", icon: "Image", count: 145 },
  { name: "Анимации", icon: "Play", count: 78 },
  { name: "Звуки", icon: "Volume2", count: 45 },
];

const CategorySection = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Категории дизайнов
          </h2>
          <p className="text-purple-200/80 text-lg">
            Найдите идеальные ресурсы для вашего космического проекта
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.name}
              className="group cursor-pointer bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-center">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-colors">
                  <Icon
                    name={category.icon as any}
                    size={32}
                    className="text-purple-300 group-hover:text-purple-200 transition-colors"
                  />
                </div>
                <h3 className="text-white font-semibold mb-2 group-hover:text-purple-200 transition-colors">
                  {category.name}
                </h3>
                <p className="text-purple-300 text-sm">
                  {category.count} дизайнов
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;

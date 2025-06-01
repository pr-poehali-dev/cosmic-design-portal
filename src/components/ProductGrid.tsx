import ProductCard from "@/components/ProductCard";

const sampleProducts = [
  {
    id: "1",
    title: "Космический UI Kit для мобильных приложений",
    author: "SpaceDesigner",
    price: 2500,
    rating: 4.8,
    reviews: 23,
    image:
      "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=500&h=300&fit=crop",
    tags: ["UI Kit", "Mobile", "Dark Theme"],
  },
  {
    id: "2",
    title: "Набор иконок галактики и планет",
    author: "CosmicArt",
    price: 1200,
    rating: 4.9,
    reviews: 45,
    image:
      "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=500&h=300&fit=crop",
    tags: ["Icons", "Planets", "Vector"],
  },
  {
    id: "3",
    title: "3D модель космической станции",
    author: "FutureModels",
    price: 4500,
    rating: 4.7,
    reviews: 12,
    image:
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=500&h=300&fit=crop",
    tags: ["3D", "Space Station", "Sci-Fi"],
  },
  {
    id: "4",
    title: "Футуристический шрифт Orion",
    author: "TypeSpace",
    price: 1800,
    rating: 4.6,
    reviews: 31,
    image:
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=500&h=300&fit=crop",
    tags: ["Font", "Futuristic", "Display"],
  },
  {
    id: "5",
    title: "Анимированные частицы звездной пыли",
    author: "AnimCosmos",
    price: 3200,
    rating: 4.8,
    reviews: 18,
    image:
      "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=500&h=300&fit=crop",
    tags: ["Animation", "Particles", "VFX"],
  },
  {
    id: "6",
    title: "Текстуры планет высокого разрешения",
    author: "PlanetTextures",
    price: 2100,
    rating: 4.9,
    reviews: 27,
    image:
      "https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?w=500&h=300&fit=crop",
    tags: ["Textures", "Planets", "4K"],
  },
];

const ProductGrid = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Популярные дизайны
          </h2>
          <p className="text-purple-200/80 text-lg">
            Откройте для себя самые востребованные космические ресурсы
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
            Показать больше дизайнов
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;

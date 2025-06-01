import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  id: string;
  title: string;
  author: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  tags: string[];
  isLiked?: boolean;
}

const ProductCard = ({
  title,
  author,
  price,
  rating,
  reviews,
  image,
  tags,
  isLiked = false,
}: ProductCardProps) => {
  return (
    <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-[1.02]">
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Actions Overlay */}
        <div className="absolute top-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            className={`p-2 rounded-full backdrop-blur-sm ${isLiked ? "bg-red-500/80 text-white" : "bg-white/20 text-white hover:bg-red-500/80"} transition-colors`}
          >
            <Icon name="Heart" size={16} />
          </button>
          <button className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-purple-500/80 transition-colors">
            <Icon name="Eye" size={16} />
          </button>
        </div>

        {/* Price Badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            ₽{price}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-white font-semibold mb-2 line-clamp-2 group-hover:text-purple-200 transition-colors">
          {title}
        </h3>

        <p className="text-purple-300 text-sm mb-3">от {author}</p>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex items-center text-yellow-400 mr-2">
            <Icon name="Star" size={14} className="fill-current" />
            <span className="text-sm ml-1 text-white">{rating}</span>
          </div>
          <span className="text-purple-300 text-sm">({reviews})</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="bg-purple-600/20 text-purple-200 px-2 py-1 rounded text-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Add to Cart Button */}
        <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-2 rounded-lg transition-all duration-300">
          <Icon name="ShoppingCart" size={16} className="mr-2" />В корзину
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;

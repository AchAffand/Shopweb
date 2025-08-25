import React, { useState } from 'react';
import { Heart, ShoppingBag, Star, Eye } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onQuickView }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div 
      className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500
                 hover:shadow-2xl hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-semibold">
              NEW
            </span>
          )}
          {product.originalPrice && (
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              SALE
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={() => setIsLiked(!isLiked)}
          className={`absolute top-4 right-4 p-2 rounded-full transition-all duration-300 ${
            isLiked ? 'bg-red-500 text-white' : 'bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white'
          }`}
        >
          <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
        </button>

        {/* Quick Action Buttons */}
        <div className={`absolute bottom-4 left-4 right-4 flex gap-2 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <button
            onClick={() => onQuickView(product)}
            className="flex-1 bg-white/90 backdrop-blur-sm text-gray-900 py-2 px-4 rounded-full
                     hover:bg-white transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <Eye className="w-4 h-4" />
            <span className="text-sm font-medium">Quick View</span>
          </button>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-yellow-500 text-black p-2 rounded-full hover:bg-yellow-400 
                     transition-all duration-300 transform hover:scale-110"
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6 space-y-4">
        {/* Rating */}
        {product.rating && (
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating!) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">
              {product.rating} ({product.reviews})
            </span>
          </div>
        )}

        {/* Product Name */}
        <h3 className="font-semibold text-lg text-gray-900 group-hover:text-yellow-600 transition-colors">
          {product.name}
        </h3>

        {/* Colors */}
        {product.colors && product.colors.length > 0 && (
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Colors:</span>
            <div className="flex space-x-1">
              {product.colors.slice(0, 3).map((color, index) => (
                <div
                  key={index}
                  className="w-5 h-5 rounded-full border-2 border-gray-200"
                  style={{ backgroundColor: color }}
                />
              ))}
              {product.colors.length > 3 && (
                <span className="text-xs text-gray-500">+{product.colors.length - 3}</span>
              )}
            </div>
          </div>
        )}

        {/* Price */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-gray-900">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="text-lg text-gray-500 line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
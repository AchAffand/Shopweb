import React, { useState } from 'react';
import { X, ShoppingBag, Heart, Star } from 'lucide-react';
import { Product } from '../types';

interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, selectedSize?: string, selectedColor?: string) => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  isOpen,
  onClose,
  onAddToCart
}) => {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [quantity, setQuantity] = useState(1);

  if (!product || !isOpen) return null;

  const handleAddToCart = () => {
    onAddToCart(product, selectedSize, selectedColor);
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-4 animate-fadeIn"
        onClick={onClose}
      >
        {/* Modal */}
        <div 
          className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scaleIn"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full 
                       hover:bg-white transition-all duration-300"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid md:grid-cols-2 gap-8 p-8">
              {/* Product Image */}
              <div className="space-y-4">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gray-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Badges */}
                <div className="flex space-x-2">
                  {product.isNew && (
                    <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      NEW
                    </span>
                  )}
                  {product.originalPrice && (
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      SALE
                    </span>
                  )}
                </div>
              </div>

              {/* Product Details */}
              <div className="space-y-6">
                {/* Rating */}
                {product.rating && (
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(product.rating!) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                )}

                {/* Product Name */}
                <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>

                {/* Price */}
                <div className="flex items-center space-x-3">
                  <span className="text-3xl font-bold text-gray-900">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xl text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>

                {/* Colors */}
                {product.colors && product.colors.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="font-semibold text-gray-900">Color</h3>
                    <div className="flex space-x-3">
                      {product.colors.map((color, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedColor(color)}
                          className={`w-8 h-8 rounded-full border-2 transition-all duration-200 ${
                            selectedColor === color ? 'border-gray-900 scale-110' : 'border-gray-300'
                          }`}
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Sizes */}
                {product.sizes && product.sizes.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="font-semibold text-gray-900">Size</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`px-4 py-2 border-2 rounded-lg font-medium transition-all duration-200 ${
                            selectedSize === size
                              ? 'border-gray-900 bg-gray-900 text-white'
                              : 'border-gray-300 hover:border-gray-400'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quantity */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900">Quantity</h3>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2 bg-gray-100 rounded-full">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                      >
                        -
                      </button>
                      <span className="px-4 py-2 font-semibold">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-4">
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 bg-yellow-500 text-black font-semibold py-4 px-6 rounded-full
                             hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105
                             flex items-center justify-center space-x-2"
                  >
                    <ShoppingBag className="w-5 h-5" />
                    <span>Add to Cart</span>
                  </button>
                  
                  <button className="p-4 border-2 border-gray-300 rounded-full hover:border-red-500 
                                   hover:text-red-500 transition-all duration-300">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>

                {/* Product Description */}
                <div className="pt-6 border-t border-gray-200">
                  <p className="text-gray-600 leading-relaxed">
                    Experience luxury and comfort with this premium piece from our collection. 
                    Crafted with attention to detail and designed for the modern lifestyle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
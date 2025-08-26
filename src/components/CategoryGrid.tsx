import React from 'react';
import { ArrowRight } from 'lucide-react';
import { categories } from '../data/products';

interface CategoryGridProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ selectedCategory, onCategoryChange }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Belanja Berdasarkan Kategori
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Temukan koleksi pilihan kami yang dirancang untuk gaya hidup modern
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-500
                         hover:scale-105 hover:shadow-xl animate-fadeInUp`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => onCategoryChange(category.id)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                  <p className="text-sm text-gray-300">{category.productCount} produk</p>
                  <div className="flex items-center space-x-2 text-yellow-400 opacity-0 group-hover:opacity-100 
                                transition-opacity duration-300">
                    <span className="text-sm font-medium">Belanja sekarang</span>
                    <ArrowRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>

              {/* Selection Indicator */}
              {selectedCategory === category.id && (
                <div className="absolute inset-0 ring-4 ring-yellow-500 rounded-2xl" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
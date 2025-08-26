import React from 'react';
import { ProductCard } from './ProductCard';
import { Product } from '../types';

interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
  title: string;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ 
  products, 
  onAddToCart, 
  onQuickView, 
  title 
}) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto" />
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard
                  product={product}
                  onAddToCart={onAddToCart}
                  onQuickView={onQuickView}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} 
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2M4 13h2m13-8l-2 2m0 0l-2-2m2 2v2.5M7 7l2 2m0 0l2-2M9 9v2.5" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Tidak ada produk ditemukan</h3>
            <p className="text-gray-500">Coba sesuaikan pencarian atau filter Anda untuk menemukan yang Anda cari.</p>
          </div>
        )}
      </div>
    </section>
  );
};
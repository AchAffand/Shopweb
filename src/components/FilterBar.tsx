import React from 'react';
import { Filter, SortAsc } from 'lucide-react';

interface FilterBarProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  selectedCategory,
  onCategoryChange,
  sortBy,
  onSortChange
}) => {
  const categories = [
    { id: 'all', name: 'Semua Produk' },
    { id: 'handbags', name: 'Tas Tangan' },
    { id: 'clothing', name: 'Pakaian' },
    { id: 'accessories', name: 'Aksesoris' },
    { id: 'shoes', name: 'Sepatu' }
  ];

  const sortOptions = [
    { value: 'newest', label: 'Terbaru' },
    { value: 'price-low', label: 'Harga: Rendah ke Tinggi' },
    { value: 'price-high', label: 'Harga: Tinggi ke Rendah' },
    { value: 'popular', label: 'Paling Populer' }
  ];

  return (
    <div className="bg-white border-b border-gray-200 sticky top-20 z-40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          {/* Categories */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="font-medium text-gray-900">Filter:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => onCategoryChange(category.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-yellow-500 text-black'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Sort */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <SortAsc className="w-5 h-5 text-gray-600" />
              <span className="font-medium text-gray-900">Urutkan:</span>
            </div>
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
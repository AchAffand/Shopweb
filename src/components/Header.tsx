import React, { useState } from 'react';
import { Search, ShoppingBag, Menu, X, User, Heart } from 'lucide-react';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartItemsCount,
  onCartClick,
  searchQuery,
  onSearchChange
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50 border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold tracking-wider text-yellow-500">
              AFFAN PROTOTYPE
            </h1>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              <a href="#" className="hover:text-yellow-500 transition-colors duration-300">Produk Baru</a>
              <a href="#" className="hover:text-yellow-500 transition-colors duration-300">Wanita</a>
              <a href="#" className="hover:text-yellow-500 transition-colors duration-300">Pria</a>
              <a href="#" className="hover:text-yellow-500 transition-colors duration-300">Aksesoris</a>
              <a href="#" className="hover:text-yellow-500 transition-colors duration-300">Diskon</a>
            </nav>
          </div>

          {/* Desktop Search */}
          <div className={`hidden md:flex items-center transition-all duration-300 ${
            isSearchOpen ? 'w-80' : 'w-64'
          }`}>
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Cari produk..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                onFocus={() => setIsSearchOpen(true)}
                onBlur={() => setIsSearchOpen(false)}
                className="w-full bg-gray-800 text-white placeholder-gray-400 rounded-full py-2 pl-10 pr-4 
                         focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:bg-gray-700 transition-all duration-300"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Mobile Search Toggle */}
            <button 
              className="md:hidden text-gray-400 hover:text-white transition-colors"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="w-5 h-5" />
            </button>

            <button className="text-gray-400 hover:text-white transition-colors">
              <User className="w-5 h-5" />
            </button>
            
            <button className="text-gray-400 hover:text-white transition-colors">
              <Heart className="w-5 h-5" />
            </button>

            <button 
              onClick={onCartClick}
              className="relative text-gray-400 hover:text-white transition-colors group"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs rounded-full w-5 h-5 
                               flex items-center justify-center font-semibold animate-pulse">
                  {cartItemsCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden text-gray-400 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        {isSearchOpen && (
          <div className="md:hidden mt-4 animate-fadeIn">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Cari produk..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full bg-gray-800 text-white placeholder-gray-400 rounded-full py-2 pl-10 pr-4 
                         focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:bg-gray-700"
                autoFocus
              />
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 animate-slideDown">
            <div className="flex flex-col space-y-3">
              <a href="#" className="hover:text-yellow-500 transition-colors duration-300">Produk Baru</a>
              <a href="#" className="hover:text-yellow-500 transition-colors duration-300">Wanita</a>
              <a href="#" className="hover:text-yellow-500 transition-colors duration-300">Pria</a>
              <a href="#" className="hover:text-yellow-500 transition-colors duration-300">Aksesoris</a>
              <a href="#" className="hover:text-yellow-500 transition-colors duration-300">Diskon</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
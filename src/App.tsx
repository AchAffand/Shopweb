import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryGrid } from './components/CategoryGrid';
import { ProductGrid } from './components/ProductGrid';
import { CartSidebar } from './components/CartSidebar';
import { QuickViewModal } from './components/QuickViewModal';
import { FilterBar } from './components/FilterBar';
import { products } from './data/products';
import { Product, CartItem } from './types';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'popular':
        filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case 'newest':
      default:
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
    }

    return filtered;
  }, [selectedCategory, sortBy, searchQuery]);

  const addToCart = (product: Product, selectedSize?: string, selectedColor?: string) => {
    const cartItem: CartItem = {
      ...product,
      quantity: 1,
      selectedSize,
      selectedColor
    };

    setCartItems(prev => {
      const existingItem = prev.find(item => 
        item.id === product.id && 
        item.selectedSize === selectedSize && 
        item.selectedColor === selectedColor
      );

      if (existingItem) {
        return prev.map(item =>
          item.id === existingItem.id && 
          item.selectedSize === existingItem.selectedSize &&
          item.selectedColor === existingItem.selectedColor
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, cartItem];
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity === 0) {
      removeFromCart(id);
      return;
    }

    setCartItems(prev =>
      prev.map(item => item.id === id ? { ...item, quantity } : item)
    );
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const openQuickView = (product: Product) => {
    setSelectedProduct(product);
    setIsQuickViewOpen(true);
  };

  const closeQuickView = () => {
    setSelectedProduct(null);
    setIsQuickViewOpen(false);
  };

  const cartItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        cartItemsCount={cartItemsCount}
        onCartClick={() => setIsCartOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      
      <main>
        <Hero />
        
        <CategoryGrid
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        
        <FilterBar
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />
        
        <ProductGrid
          products={filteredProducts}
          onAddToCart={addToCart}
          onQuickView={openQuickView}
          title={selectedCategory === 'all' ? 'Semua Produk' : 
            selectedCategory === 'handbags' ? 'Tas Tangan' :
            selectedCategory === 'clothing' ? 'Pakaian' :
            selectedCategory === 'accessories' ? 'Aksesoris' :
            selectedCategory === 'shoes' ? 'Sepatu' : 'Produk'}
        />
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-yellow-500">AFFAN PROTOTYPE</h3>
              <p className="text-gray-400">
                Fashion mewah untuk gaya hidup modern. Temukan karya tak lekang waktu yang dibuat dengan presisi.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Belanja</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Produk Baru</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Wanita</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pria</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Diskon</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Bantuan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Hubungi Kami</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Panduan Ukuran</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pengembalian</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Newsletter</h4>
              <p className="text-gray-400 text-sm">Berlangganan untuk penawaran eksklusif dan produk baru.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Masukkan email Anda"
                  className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-l-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <button className="bg-yellow-500 text-black px-6 py-2 rounded-r-full hover:bg-yellow-400 transition-colors">
                  Berlangganan
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AFFAN PROTOTYPE. Semua hak dilindungi.</p>
          </div>
        </div>
      </footer>

      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
      />

      <QuickViewModal
        product={selectedProduct}
        isOpen={isQuickViewOpen}
        onClose={closeQuickView}
        onAddToCart={addToCart}
      />
    </div>
  );
}

export default App;
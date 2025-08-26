import { Product, Category } from '../types';

export const categories: Category[] = [
  {
    id: 'handbags',
    name: 'Tas Tangan',
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg',
    productCount: 24
  },
  {
    id: 'clothing',
    name: 'Pakaian',
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg',
    productCount: 48
  },
  {
    id: 'accessories',
    name: 'Aksesoris',
    image: 'https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg',
    productCount: 32
  },
  {
    id: 'shoes',
    name: 'Sepatu',
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg',
    productCount: 36
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Tas Kulit Signature',
    price: 285,
    originalPrice: 350,
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg',
    category: 'handbags',
    colors: ['#8B4513', '#000000', '#D2B48C'],
    sizes: ['Kecil', 'Sedang', 'Besar'],
    rating: 4.8,
    reviews: 127,
    isNew: true,
    isFeatured: true
  },
  {
    id: '2',
    name: 'Jaket Kulit Klasik',
    price: 450,
    image: 'https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg',
    category: 'clothing',
    colors: ['#000000', '#8B4513'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    rating: 4.9,
    reviews: 89,
    isFeatured: true
  },
  {
    id: '3',
    name: 'Gaun Malam Elegan',
    price: 320,
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg',
    category: 'clothing',
    colors: ['#F5F1EB', '#000000', '#8B0000'],
    sizes: ['XS', 'S', 'M', 'L'],
    rating: 4.7,
    reviews: 156
  },
  {
    id: '4',
    name: 'Kacamata Hitam Desainer',
    price: 180,
    image: 'https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg',
    category: 'accessories',
    colors: ['#000000', '#8B4513'],
    rating: 4.6,
    reviews: 94,
    isNew: true
  },
  {
    id: '5',
    name: 'Sepatu Boot Premium',
    price: 295,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg',
    category: 'shoes',
    colors: ['#8B4513', '#000000'],
    sizes: ['36', '37', '38', '39', '40', '41'],
    rating: 4.8,
    reviews: 203
  },
  {
    id: '6',
    name: 'Koleksi Syal Sutra',
    price: 95,
    image: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg',
    category: 'accessories',
    colors: ['#F5F1EB', '#8B0000', '#000080'],
    rating: 4.5,
    reviews: 78
  },
  {
    id: '7',
    name: 'Sweater Kasmir',
    price: 240,
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
    category: 'clothing',
    colors: ['#F5F1EB', '#D2B48C', '#000000'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    rating: 4.9,
    reviews: 145,
    isFeatured: true
  },
  {
    id: '8',
    name: 'Tas Selempang Terstruktur',
    price: 195,
    image: 'https://images.pexels.com/photos/1102336/pexels-photo-1102336.jpeg',
    category: 'handbags',
    colors: ['#000000', '#8B4513', '#F5F1EB'],
    sizes: ['Kecil', 'Sedang'],
    rating: 4.7,
    reviews: 112,
    isNew: true
  }
];

export const featuredProducts = products.filter(product => product.isFeatured);
export const newProducts = products.filter(product => product.isNew);
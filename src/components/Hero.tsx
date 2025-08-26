import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-repeat bg-center" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-rule='evenodd'%3E%3Cpath d='m0 40l40-40h-40v40zm40 0v-40h-40l40 40z'/%3E%3C/g%3E%3C/svg%3E")`
             }}
        />
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fadeInUp">
            <div className="space-y-4">
              <p className="text-yellow-500 font-semibold tracking-wider uppercase text-sm">
                Koleksi Baru 2024
              </p>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Jelajahi 
                <span className="block text-yellow-500">Koleksi Terbaru</span>
              </h1>
              <p className="text-gray-300 text-lg max-w-md">
                Temukan koleksi fashion mewah terbaru kami yang dibuat dengan presisi dan keanggunan. 
                Tingkatkan gaya Anda dengan kecanggihan yang tak lekang waktu.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold 
                               hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105
                               flex items-center justify-center space-x-2 group">
                <span>Belanja Sekarang</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold 
                               hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105">
                Lihat Katalog
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fadeInRight">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-yellow-200 to-yellow-100 
                          shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg"
                alt="Featured Collection"
                className="w-full h-96 lg:h-[500px] object-cover transform -rotate-2 hover:rotate-0 
                         transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
                  <h3 className="font-semibold text-lg">Koleksi Signature</h3>
                  <p className="text-sm text-gray-200">Mulai dari Rp 4.275.000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
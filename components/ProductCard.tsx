import React from 'react';
import { MenuItem } from '../types';
import { Eye } from 'lucide-react';

interface ProductCardProps {
  product: MenuItem;
  onClick: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div 
      className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-brand-sage/10 cursor-pointer flex flex-col h-full"
      onClick={onClick}
    >
      <div className="relative aspect-square md:aspect-[4/3] overflow-hidden bg-brand-cream/30">
        <img 
          src={product.images[0]} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {product.isBestSeller && (
          <div className="absolute top-2 left-2 bg-brand-orange text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm z-10">
            BEST SELLER
          </div>
        )}
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
             <div className="bg-white text-brand-dark px-4 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <Eye size={16} /> Xem chi tiết
             </div>
        </div>
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-base md:text-lg font-serif font-bold text-brand-dark mb-1 group-hover:text-brand-green transition-colors line-clamp-2">
          {product.name}
        </h3>
        <div className="mt-auto pt-2 flex items-baseline justify-between">
            <span className="text-brand-orange font-bold text-lg font-serif">
                {product.price.toLocaleString()}đ
            </span>
            <span className="text-neutral-400 text-sm">
                /{product.unit}
            </span>
        </div>
      </div>
    </div>
  );
};

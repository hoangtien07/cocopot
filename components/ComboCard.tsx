import React from 'react';
import { MenuItem } from '../types';
import { Button } from './Button';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ComboCardProps {
  combo: MenuItem;
}

export const ComboCard: React.FC<ComboCardProps> = ({ combo }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-brand-sage/20 flex flex-col md:flex-row h-full">
      {/* Image Side */}
      <div className="md:w-2/5 relative overflow-hidden">
        <img 
            src={combo.images[0]} 
            alt={combo.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {combo.isRecommended && (
            <div className="absolute top-4 left-4 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                BEST SELLER
            </div>
        )}
      </div>

      {/* Content Side */}
      <div className="md:w-3/5 p-6 flex flex-col">
        <div className="flex justify-between items-start mb-2">
            <div>
                <span className="text-brand-sage text-xs font-bold uppercase tracking-wider block mb-1">{combo.unit}</span>
                <h3 className="text-2xl font-serif font-bold text-brand-green group-hover:text-brand-orange transition-colors">
                    {combo.name}
                </h3>
            </div>
        </div>

        {/* Pricing */}
        <div className="flex items-baseline gap-3 mb-6">
            <span className="text-3xl font-bold text-brand-orange font-serif">
                {combo.price.toLocaleString()}đ
            </span>
            {combo.originalPrice && (
                <span className="text-neutral-400 line-through text-lg font-serif">
                    {combo.originalPrice.toLocaleString()}đ
                </span>
            )}
        </div>

        {/* Items List */}
        <div className="flex-grow mb-6">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                {combo.items?.slice(0, 6).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-brand-dark/80">
                        <Check size={14} className="text-brand-green shrink-0 mt-1" />
                        <span className="line-clamp-1">{item}</span>
                    </li>
                ))}
            </ul>
        </div>

        <Link to="/thuc-don">
          <Button className="w-full md:w-auto self-start">
              Xem Chi Tiết Combo
          </Button>
        </Link>
      </div>
    </div>
  );
};

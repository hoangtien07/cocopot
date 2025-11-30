import React, { useEffect } from 'react';
import { X, Calendar, Check } from 'lucide-react';
import { MenuItem } from '../types';
import { Button } from './Button';
import { ImageCarousel } from './ImageCarousel';

interface ProductDetailModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ item, onClose }) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (item) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [item]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center px-0 md:px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white w-full md:max-w-4xl h-full md:h-auto md:max-h-[90vh] md:rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row animate-in zoom-in-95 duration-200">
        
        {/* Close Button (Floating on Mobile, Top Right on Desktop) */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 bg-white/80 md:bg-neutral-100 hover:bg-neutral-200 rounded-full text-neutral-800 transition-colors"
        >
          <X size={24} />
        </button>

        {/* LEFT COLUMN: Carousel */}
        <div className="w-full md:w-1/2 h-[40vh] md:h-auto bg-neutral-100">
          <ImageCarousel images={item.images} altTitle={item.name} />
        </div>

        {/* RIGHT COLUMN: Info */}
        <div className="w-full md:w-1/2 flex flex-col h-[60vh] md:h-auto md:max-h-[90vh]">
          <div className="p-6 md:p-8 overflow-y-auto flex-grow custom-scrollbar">
            {/* Header Info */}
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-green mb-2 leading-tight">
                {item.name}
              </h2>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl md:text-3xl font-bold text-brand-orange font-serif">
                  {item.price.toLocaleString()}đ
                </span>
                <span className="text-neutral-500 text-lg">/{item.unit}</span>
                {item.originalPrice && (
                  <span className="ml-2 text-neutral-400 line-through text-sm">
                    {item.originalPrice.toLocaleString()}đ
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            {item.description && (
              <p className="text-neutral-600 mb-6 leading-relaxed font-sans text-sm md:text-base">
                {item.description}
              </p>
            )}

            {/* Included Items (For Combos) */}
            {item.items && item.items.length > 0 && (
              <div className="mb-6">
                <h4 className="font-bold text-brand-dark mb-2 text-sm uppercase tracking-wide">Chi tiết Set ăn:</h4>
                <ul className="grid grid-cols-1 gap-2">
                  {item.items.map((subItem, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-neutral-700">
                      <Check size={16} className="text-brand-green shrink-0 mt-0.5" />
                      <span>{subItem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Conditions Box (GoGi Style) */}
            <div className="bg-neutral-50 rounded-lg p-4 border border-neutral-200">
              <div className="flex items-center gap-2 mb-2 text-brand-orange font-bold text-sm">
                <Calendar size={16} />
                <span>Điều kiện áp dụng</span>
              </div>
              <ul className="space-y-1.5 list-disc list-inside text-xs md:text-sm text-neutral-600">
                {item.conditions && item.conditions.length > 0 ? (
                    item.conditions.map((cond, idx) => (
                        <li key={idx}>{cond}</li>
                    ))
                ) : (
                    <>
                        <li>Áp dụng tại toàn bộ hệ thống COCOPOT.</li>
                        <li>Giá chưa bao gồm VAT.</li>
                    </>
                )}
              </ul>
            </div>
          </div>

          {/* Sticky Bottom CTA */}
          <div className="p-4 border-t border-neutral-100 bg-white md:bg-transparent shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] md:shadow-none">
             <Button variant="secondary" size="lg" className="w-full">
                Đặt Bàn Với Món Này
             </Button>
             <p className="text-center text-xs text-neutral-400 mt-2">
                Bạn sẽ được chuyển đến trang đặt bàn
             </p>
          </div>
        </div>

      </div>
    </div>
  );
};

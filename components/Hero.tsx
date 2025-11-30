import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

const backgroundImages = [
  "https://images.unsplash.com/photo-1598514983318-2f64f8f4796c?q=80&w=2560&auto=format&fit=crop", // Hotpot Table Spread
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2560&auto=format&fit=crop", // Restaurant Interior Vibe
];

export const Hero: React.FC = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  // Auto-rotate background images
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000); // Change every 6 seconds

    return () => clearInterval(interval);
  }, [currentBgIndex]);

  const nextSlide = () => {
    setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
  };

  const prevSlide = () => {
    setCurrentBgIndex((prev) => (prev === 0 ? backgroundImages.length - 1 : prev - 1));
  };

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative h-[100dvh] w-full overflow-hidden bg-brand-dark group">
      {/* Background Slider */}
      {backgroundImages.map((img, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentBgIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
           <img 
              src={img} 
              alt={`Cocopot Ambience ${index + 1}`} 
              className="w-full h-full object-cover"
           />
           {/* Gradient Overlay - Darkened for better text contrast */}
           <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
           <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent opacity-80" />
        </div>
      ))}

      {/* Navigation Buttons */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/30 text-white backdrop-blur-md border border-white/20 p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 duration-300 hidden md:flex items-center justify-center shadow-lg"
      >
        <ChevronLeft size={24} strokeWidth={1.5} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/30 text-white backdrop-blur-md border border-white/20 p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 duration-300 hidden md:flex items-center justify-center shadow-lg"
      >
        <ChevronRight size={24} strokeWidth={1.5} />
      </button>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative h-full flex items-center z-10 pt-10">
        <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-700">
           <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-8 md:w-12 bg-brand-orange shadow-[0_0_10px_rgba(217,119,6,0.8)]"></div>
              <span className="text-brand-orange text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-shadow-sm">
                Tuyệt Phẩm Mùa Hè
              </span>
           </div>
           
           <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif font-bold text-brand-cream mb-6 md:mb-8 leading-[1.1] text-shadow-lg">
             Lẩu Dừa Tươi <br/>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-sand italic font-serif relative">
               Món Quà Từ Thiên Nhiên
               {/* Fallback text shadow for gradient text */}
               <span className="absolute inset-0 text-brand-orange/20 blur-md -z-10" aria-hidden="true">Món Quà Từ Thiên Nhiên</span>
             </span>
           </h1>
           
           <p className="text-base md:text-xl text-brand-sand/90 mb-8 md:mb-10 leading-relaxed font-sans max-w-lg font-light border-l-4 border-brand-green pl-6 drop-shadow-md">
             Hương vị ngọt thanh tự nhiên của nước dừa tươi Bến Tre kết hợp cùng gà mía thả vườn và các loại thịt bò thượng hạng.
           </p>
           
           <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/thuc-don" className="w-full sm:w-auto">
                <Button size="lg" variant="secondary" className="shadow-brand-orange/30 shadow-xl w-full hover:scale-105 transform transition-transform">
                  Xem Thực Đơn
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-brand-cream border-brand-cream/50 hover:bg-brand-cream hover:text-brand-green w-full sm:w-auto backdrop-blur-sm shadow-lg"
              >
                Tìm Nhà Hàng
              </Button>
           </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer group" onClick={handleScrollDown}>
        <span className="text-brand-cream/70 text-[10px] font-bold tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-shadow">Khám phá</span>
        <div className="w-6 h-10 border border-brand-cream/30 rounded-full flex justify-center pt-2 group-hover:border-brand-orange transition-colors duration-300 backdrop-blur-sm">
           <div className="w-1 h-1.5 bg-brand-orange rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};
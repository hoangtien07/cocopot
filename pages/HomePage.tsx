import React from 'react';
import { Hero } from '../components/Hero';
import { InstructionSection } from '../components/InstructionSection';
import { ComboCard } from '../components/ComboCard';
import { featuredCombos, news } from '../data/mockData';
import { Button } from '../components/Button';
import { ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HomePage: React.FC = () => {
  // Take first 2 recommended combos
  const displayCombos = featuredCombos.slice(0, 2);

  return (
    <div>
      <Hero />
      <InstructionSection />
      
      {/* Featured Combos Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-2 block">Best Seller</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-green mb-4">Combo Được Yêu Thích</h2>
            <div className="w-20 h-1 bg-brand-orange mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {displayCombos.map(combo => (
              <ComboCard key={combo.id} combo={combo} />
            ))}
          </div>

          <div className="text-center">
             <Link to="/thuc-don">
                <Button variant="outline" className="gap-2">
                    Xem Toàn Bộ Thực Đơn <ArrowRight size={16} />
                </Button>
             </Link>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="promotions" className="py-20 bg-brand-cream border-t border-brand-sage/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-end mb-10">
             <div>
                <h2 className="text-3xl font-serif font-bold text-brand-green">Tin Tức & Ưu Đãi</h2>
             </div>
             <a href="#" className="text-brand-orange font-bold hover:underline">Xem tất cả</a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map(item => (
              <div key={item.id} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="aspect-[16/9] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex gap-4 text-xs text-brand-sage mb-3 font-bold uppercase tracking-wider">
                     <span>{item.date}</span>
                  </div>
                  <h4 className="text-xl font-serif font-bold text-brand-dark mb-3 group-hover:text-brand-green transition-colors">{item.title}</h4>
                  <p className="text-neutral-500 text-sm line-clamp-2 mb-4">{item.excerpt}</p>
                  <span className="flex items-center gap-1 text-brand-orange text-sm font-bold"><Tag size={14} /> Khuyến mãi</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

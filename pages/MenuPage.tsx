import React, { useState } from 'react';
import { menuData } from '../data/mockData';
import { ProductCard } from '../components/ProductCard';
import { ProductDetailModal } from '../components/ProductDetailModal';
import { Breadcrumb } from '../components/Breadcrumb';
import { MenuItem } from '../types';
import { ChevronRight } from 'lucide-react';

export const MenuPage: React.FC = () => {
  // State for Level 1 Tab (Combos vs Ala Carte)
  const [activeMainTab, setActiveMainTab] = useState<'combos' | 'alacarte'>('combos');
  
  // State for Level 2 Sub-category
  const [activeSubTab, setActiveSubTab] = useState<string>(menuData.combos.subCategories[0].id);

  // State for Modal
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  // Helper to handle main tab switch
  const handleMainTabChange = (tab: 'combos' | 'alacarte') => {
    setActiveMainTab(tab);
    // Reset sub-tab to first item of new main tab
    setActiveSubTab(menuData[tab].subCategories[0].id);
  };

  const currentMainCategory = menuData[activeMainTab];
  const currentSubCategory = currentMainCategory.subCategories.find(sub => sub.id === activeSubTab);

  return (
    <div className="bg-brand-cream min-h-screen pt-16 md:pt-20 pb-20">
      
      {/* 1. Header Banner */}
      <div className="bg-brand-green pt-8 pb-10 mb-0 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/leaves.png')]" />
        <div className="container mx-auto px-4 relative z-10">
           <div className="mb-4 text-white/80">
              <Breadcrumb 
                items={[{ label: 'Thực đơn' }]} 
                className="text-white/70 [&_a]:text-white/80 [&_a:hover]:text-white [&_span[aria-current]]:text-white" 
              />
           </div>
           <h1 className="text-3xl md:text-5xl font-serif font-bold text-white text-center">Thực Đơn</h1>
           <p className="text-center text-brand-sand/80 mt-2 font-serif italic">Khám phá hương vị lẩu dừa tinh tế</p>
        </div>
      </div>

      {/* MOBILE NAV (Visible < lg) - STICKY TOP */}
      <div className="lg:hidden sticky top-[60px] md:top-[72px] z-30 bg-brand-cream shadow-sm transition-all border-b border-brand-sage/10">
        <div className="pt-4 pb-2 bg-brand-cream">
          <div className="container mx-auto px-4 flex justify-center">
              <div className="inline-flex bg-white p-1 rounded-full shadow-md border border-brand-sage/20">
                  <button
                      onClick={() => handleMainTabChange('combos')}
                      className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 font-serif ${
                          activeMainTab === 'combos' 
                          ? 'bg-brand-green text-white shadow-sm' 
                          : 'bg-transparent text-brand-dark hover:bg-neutral-100'
                      }`}
                  >
                      COMBO LẨU
                  </button>
                  <button
                      onClick={() => handleMainTabChange('alacarte')}
                      className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 font-serif ${
                          activeMainTab === 'alacarte' 
                          ? 'bg-brand-green text-white shadow-sm' 
                          : 'bg-transparent text-brand-dark hover:bg-neutral-100'
                      }`}
                  >
                      GỌI MÓN
                  </button>
              </div>
          </div>
        </div>
        <div className="bg-brand-cream/95 backdrop-blur-sm pb-3 pt-1">
          <div className="container mx-auto px-4">
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-brand-cream to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-brand-cream to-transparent z-10 pointer-events-none" />
                <div className="flex overflow-x-auto gap-3 py-1 px-1 no-scrollbar items-center scroll-smooth snap-x">
                    {currentMainCategory.subCategories.map((sub) => (
                        <button
                            key={sub.id}
                            onClick={() => setActiveSubTab(sub.id)}
                            className={`flex-shrink-0 whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-bold transition-all border snap-center ${
                                activeSubTab === sub.id
                                    ? 'bg-white text-brand-orange border-brand-orange shadow-md ring-1 ring-brand-orange/20'
                                    : 'bg-white/50 text-brand-dark border-brand-sage/20 hover:border-brand-orange hover:text-brand-orange hover:bg-white'
                            }`}
                        >
                            {sub.name}
                        </button>
                    ))}
                </div>
              </div>
          </div>
        </div>
      </div>

      {/* DESKTOP LAYOUT (Visible >= lg) - SIDEBAR LEFT + GRID RIGHT */}
      <div className="container mx-auto px-4 md:px-6 py-8">
         <div className="flex flex-col lg:flex-row gap-8">
            
            {/* LEFT SIDEBAR (Desktop Only) */}
            <aside className="hidden lg:block w-1/4 flex-shrink-0">
               <div className="sticky top-24 bg-white rounded-xl shadow-sm border border-brand-sage/10 overflow-hidden">
                  <div className="p-4 bg-brand-green text-white font-serif font-bold text-lg text-center">
                    Danh Mục
                  </div>
                  <div className="p-4 space-y-6">
                    {/* Combos Section */}
                    <div>
                      <h3 
                        className={`text-brand-dark font-bold font-serif mb-2 cursor-pointer flex items-center justify-between ${activeMainTab === 'combos' ? 'text-brand-orange' : 'hover:text-brand-green'}`}
                        onClick={() => handleMainTabChange('combos')}
                      >
                         COMBO LẨU
                      </h3>
                      <div className={`space-y-1 ml-2 border-l-2 border-neutral-100 ${activeMainTab !== 'combos' ? 'opacity-50' : ''}`}>
                         {menuData.combos.subCategories.map(sub => (
                            <button
                              key={sub.id}
                              onClick={() => {
                                handleMainTabChange('combos');
                                setActiveSubTab(sub.id);
                              }}
                              className={`w-full text-left px-3 py-2 text-sm rounded-r-md transition-all flex items-center justify-between group ${
                                activeMainTab === 'combos' && activeSubTab === sub.id
                                  ? 'bg-brand-orange/10 text-brand-orange font-bold border-l-2 border-brand-orange -ml-[2px]'
                                  : 'text-neutral-600 hover:bg-neutral-50 hover:text-brand-dark'
                              }`}
                            >
                              {sub.name}
                              {activeMainTab === 'combos' && activeSubTab === sub.id && <ChevronRight size={14} />}
                            </button>
                         ))}
                      </div>
                    </div>

                    {/* Separator */}
                    <div className="h-px bg-neutral-100"></div>

                    {/* Alacarte Section */}
                    <div>
                      <h3 
                        className={`text-brand-dark font-bold font-serif mb-2 cursor-pointer flex items-center justify-between ${activeMainTab === 'alacarte' ? 'text-brand-orange' : 'hover:text-brand-green'}`}
                        onClick={() => handleMainTabChange('alacarte')}
                      >
                         GỌI MÓN
                      </h3>
                      <div className={`space-y-1 ml-2 border-l-2 border-neutral-100 ${activeMainTab !== 'alacarte' ? 'opacity-50' : ''}`}>
                         {menuData.alacarte.subCategories.map(sub => (
                            <button
                              key={sub.id}
                              onClick={() => {
                                handleMainTabChange('alacarte');
                                setActiveSubTab(sub.id);
                              }}
                              className={`w-full text-left px-3 py-2 text-sm rounded-r-md transition-all flex items-center justify-between group ${
                                activeMainTab === 'alacarte' && activeSubTab === sub.id
                                  ? 'bg-brand-orange/10 text-brand-orange font-bold border-l-2 border-brand-orange -ml-[2px]'
                                  : 'text-neutral-600 hover:bg-neutral-50 hover:text-brand-dark'
                              }`}
                            >
                              {sub.name}
                              {activeMainTab === 'alacarte' && activeSubTab === sub.id && <ChevronRight size={14} />}
                            </button>
                         ))}
                      </div>
                    </div>
                  </div>
               </div>
            </aside>

            {/* RIGHT CONTENT */}
            <div className="flex-grow lg:w-3/4 min-h-[500px]">
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {/* Section Title */}
                    <div className="mb-6 flex items-end gap-3 border-b border-brand-sage/10 pb-2">
                        <h2 className="text-2xl font-serif font-bold text-brand-green">
                            {currentSubCategory?.name}
                        </h2>
                        <span className="text-neutral-400 text-sm font-sans mb-1">
                            ({currentSubCategory?.items.length} món)
                        </span>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                        {currentSubCategory?.items.map((item) => (
                            <ProductCard 
                                key={item.id} 
                                product={item} 
                                onClick={() => setSelectedItem(item)}
                            />
                        ))}
                    </div>

                    {/* Empty State */}
                    {currentSubCategory?.items.length === 0 && (
                        <div className="text-center py-20 text-neutral-400 italic font-serif bg-white/50 rounded-xl border border-brand-sage/5">
                            Đang cập nhật thực đơn...
                        </div>
                    )}
                </div>
            </div>
         </div>
      </div>

      {/* 5. Detail Modal */}
      <ProductDetailModal 
        item={selectedItem} 
        onClose={() => setSelectedItem(null)} 
      />

    </div>
  );
};
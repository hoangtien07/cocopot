import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './Button';
import { Link, useLocation } from 'react-router-dom';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Thực Đơn', path: '/thuc-don' },
    { name: 'Khuyến Mãi', path: '/#promotions' },
    { name: 'Về Chúng Tôi', path: '/#about' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-brand-cream shadow-sm py-3 md:py-4 transition-all duration-300"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo Image */}
          <Link to="/" className="flex items-center gap-2 group relative z-50 shrink-0">
             <img 
               src="https://raw.githubusercontent.com/hoangtien07/cocopot/refs/heads/main/src/cocopot-logo.png"
               alt="COCOPOT Logo" 
               className="h-10 md:h-12 w-auto object-contain"
             />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`text-sm font-bold uppercase tracking-widest transition-colors font-sans relative group py-2 ${
                  isActive(link.path) 
                    ? 'text-brand-orange' 
                    : 'text-brand-dark hover:text-brand-green'
                }`}
              >
                {link.name}
                {/* Underline animation */}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-brand-orange transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${isActive(link.path) ? 'scale-x-100' : ''}`}></span>
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
             <div className="flex items-center gap-2 group cursor-pointer text-brand-green">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-brand-green/10 group-hover:bg-brand-green group-hover:text-white transition-colors">
                  <Phone size={16} />
                </div>
                <span className="font-bold font-sans text-lg">1900 6688</span>
             </div>
             <Button size="sm" variant="secondary" className="shadow-lg shadow-brand-orange/20">Đặt Bàn</Button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 relative z-50 text-brand-dark hover:text-brand-green transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-brand-cream/98 backdrop-blur-xl animate-in slide-in-from-top-10 duration-200 flex flex-col pt-24 px-6 h-screen">
          <nav className="flex flex-col gap-6">
            <Link 
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-bold font-serif border-b border-brand-sage/20 pb-4 text-brand-dark"
            >
                Trang Chủ
            </Link>
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-xl font-bold font-serif border-b border-brand-sage/20 pb-4 ${
                  isActive(link.path) 
                    ? 'text-brand-orange' 
                    : 'text-brand-dark'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 mt-auto mb-16">
              <Button className="w-full h-12 text-lg shadow-xl" onClick={() => setIsMobileMenuOpen(false)}>
                Đặt Bàn Ngay
              </Button>
              <div className="flex justify-center mt-6 gap-2 text-brand-green">
                 <Phone size={20} />
                 <span className="font-bold text-lg">1900 6688</span>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-green text-brand-cream pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">            
            <Link to="/" className="flex items-center gap-2 group relative z-50 shrink-0">
              <img 
                src="https://raw.githubusercontent.com/hoangtien07/cocopot/refs/heads/main/src/cocopot-logo.png"
                alt="COCOPOT Logo" 
                className="h-10 md:h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-brand-sand/80 text-sm leading-relaxed font-sans">
              Lẩu dừa tươi ngọt thanh, mang hương vị thiên nhiên đến bàn ăn của bạn. Tươi ngon - Sạch sẽ - Bổ dưỡng.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand-orange transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand-orange transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-serif font-bold text-lg mb-6">Liên Kết</h3>
            <ul className="space-y-3 text-brand-sand/80 text-sm font-sans">
              <li><a href="#" className="hover:text-brand-orange transition-colors">Câu chuyện thương hiệu</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Thực đơn</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Khuyến mãi</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Hệ thống nhà hàng</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-serif font-bold text-lg mb-6">Liên Hệ</h3>
            <ul className="space-y-4 text-brand-sand/80 text-sm font-sans">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-orange shrink-0" size={18} />
                <span>123 Nguyễn Văn Linh, Quận 7, TP.HCM</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-orange shrink-0" size={18} />
                <span>1900 6688</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-brand-orange shrink-0" size={18} />
                <span>contact@cocopot.vn</span>
              </li>
            </ul>
          </div>

           {/* Opening Hours */}
           <div>
            <h3 className="text-white font-serif font-bold text-lg mb-6">Giờ Mở Cửa</h3>
            <ul className="space-y-3 text-brand-sand/80 text-sm font-sans">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Thứ 2 - Thứ 6:</span>
                <span className="text-white font-medium">10:00 - 22:00</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Thứ 7 - CN:</span>
                <span className="text-white font-medium">09:00 - 23:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-brand-sand/60 text-sm font-sans">
          <p>&copy; {new Date().getFullYear()} COCOPOT Vietnam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
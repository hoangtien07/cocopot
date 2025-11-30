import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  link?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = '' }) => {
  return (
    <nav className={`flex items-center text-sm font-sans ${className}`} aria-label="Breadcrumb">
      <ol className="flex items-center flex-wrap gap-2">
        {/* Home Link */}
        <li className="flex items-center opacity-60 hover:opacity-100 transition-opacity">
          <Link to="/" className="flex items-center text-brand-dark hover:text-brand-green">
            <Home size={14} className="mr-1" />
            <span>Trang chủ</span>
          </Link>
        </li>

        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight size={14} className="text-brand-sage mx-1" />
            {item.link ? (
              <Link 
                to={item.link} 
                className="text-brand-dark hover:text-brand-green font-medium opacity-60 hover:opacity-100 transition-opacity"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-brand-orange font-bold pointer-events-none" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
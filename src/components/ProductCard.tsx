import React from 'react';
import { ArrowRight, Smartphone, Check } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  const formatPrice = (num: number, currency: string) => {
    return `${num.toLocaleString('fr-FR')} ${currency}`;
  };

  const getBadgeStyle = (badge?: string) => {
    switch (badge) {
      case 'OFFRE DU MOMENT':
        return 'bg-gradient-to-r from-amber-500 to-orange-500 text-white font-black';
      case 'POPULAIRE':
        return 'bg-sky-600 text-white font-bold';
      case 'NOUVEAU':
        return 'bg-emerald-600 text-white font-bold';
      case 'ESSENTIEL':
        return 'bg-blue-800 text-white font-semibold';
      default:
        return 'bg-slate-800 text-slate-200';
    }
  };

  return (
    <div
      id={`product-card-${product.id}`}
      className="group bg-white rounded-2xl border border-slate-200/90 hover:border-sky-300 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden text-slate-900 relative"
    >
      {/* Cover Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
        <img
          src={product.image}
          alt={product.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Badge overlay */}
        {product.badge && (
          <div className="absolute top-3 left-3">
            <span
              className={`text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-md shadow-md ${getBadgeStyle(
                product.badge
              )}`}
            >
              {product.badge}
            </span>
          </div>
        )}

        {/* Format tag */}
        <div className="absolute bottom-3 right-3 bg-slate-950/80 backdrop-blur-sm text-slate-200 text-[11px] font-medium px-2.5 py-1 rounded-md border border-slate-800 flex items-center gap-1">
          <Smartphone className="w-3 h-3 text-sky-400" />
          <span>{product.durationOrPages}</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Category Pill */}
          <div className="text-xs font-bold text-sky-600 tracking-wider uppercase mb-1.5">
            {product.categoryLabel}
          </div>

          {/* Product Title */}
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight leading-snug line-clamp-2 group-hover:text-sky-700 transition-colors">
            {product.title}
          </h3>

          {/* Short Description */}
          <p className="mt-2 text-sm text-slate-600 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* 2 Quick Benefit Bullet points */}
          {product.benefits && product.benefits.length > 0 && (
            <ul className="mt-3.5 space-y-1 text-xs text-slate-600 border-t border-slate-100 pt-3">
              {product.benefits.slice(0, 2).map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-1.5 line-clamp-1">
                  <Check className="w-3.5 h-3.5 text-sky-500 shrink-0 mt-0.5" />
                  <span className="truncate">{benefit}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Price & CTA Action */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
          <div className="flex flex-col">
            {product.oldPrice && (
              <span className="text-xs text-slate-400 line-through font-medium">
                {formatPrice(product.oldPrice, product.currency)}
              </span>
            )}
            <span className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              {formatPrice(product.price, product.currency)}
            </span>
          </div>

          <button
            id={`btn-discover-${product.id}`}
            onClick={() => onSelect(product)}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-sky-600 text-white text-xs sm:text-sm font-bold shadow-sm group-hover:shadow-md transition-all active:scale-95 cursor-pointer shrink-0"
          >
            <span>Découvrir l'offre</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

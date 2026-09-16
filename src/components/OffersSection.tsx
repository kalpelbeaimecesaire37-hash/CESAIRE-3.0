import React, { useState } from 'react';
import { Product, ProductCategory } from '../types';
import { ProductCard } from './ProductCard';
import { Sparkles, BookOpen, Cpu, Briefcase, LayoutGrid } from 'lucide-react';

interface OffersSectionProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const OffersSection: React.FC<OffersSectionProps> = ({
  products,
  onSelectProduct
}) => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('all');

  const categories = [
    {
      id: 'all' as ProductCategory,
      label: 'Toutes les offres',
      subtitle: 'L’ensemble de nos solutions pratiques',
      icon: <LayoutGrid className="w-4 h-4" />
    },
    {
      id: 'formations' as ProductCategory,
      label: 'Formations',
      subtitle: 'Développe des compétences directement utilisables.',
      icon: <Sparkles className="w-4 h-4" />
    },
    {
      id: 'guides' as ProductCategory,
      label: 'Guides pratiques',
      subtitle: 'Des méthodes simples pour résoudre des problèmes concrets.',
      icon: <BookOpen className="w-4 h-4" />
    },
    {
      id: 'ia' as ProductCategory,
      label: 'Intelligence Artificielle',
      subtitle: 'Apprends à utiliser l’IA pour créer, travailler et développer tes activités.',
      icon: <Cpu className="w-4 h-4" />
    },
    {
      id: 'business' as ProductCategory,
      label: 'Business Digital',
      subtitle: 'Découvre des méthodes et outils pour développer une activité en ligne.',
      icon: <Briefcase className="w-4 h-4" />
    }
  ];

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter((p) => p.category === activeCategory);

  const currentCategoryData = categories.find((c) => c.id === activeCategory);

  return (
    <section id="offres-section" className="py-20 sm:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-wider mb-4">
            <span>Catalogue Officiel</span>
          </div>
          <h2
            id="offers-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight"
          >
            Des ressources pour passer de l’idée à l’action.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Formations structurées et guides applicables pour développer des compétences utiles dès maintenant.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`cat-filter-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-md shadow-slate-900/20 scale-105'
                    : 'bg-white text-slate-700 hover:bg-slate-200/80 border border-slate-200'
                }`}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Category Description Banner */}
        {currentCategoryData && activeCategory !== 'all' && (
          <div className="max-w-2xl mx-auto text-center mb-10 p-4 rounded-xl bg-sky-50/80 border border-sky-100 text-sky-900 text-sm font-medium">
            <span className="font-bold">{currentCategoryData.label} : </span>
            {currentCategoryData.subtitle}
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelectProduct}
            />
          ))}
        </div>

        {/* Footnote reassurance */}
        <div className="mt-12 text-center text-xs text-slate-500">
          Toutes nos ressources sont accessibles instantanément depuis votre smartphone, tablette ou ordinateur.
        </div>

      </div>
    </section>
  );
};

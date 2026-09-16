import React, { useState } from 'react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';
import { BookOpen, Search, Download, Check } from 'lucide-react';

interface GuidesPageProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const GuidesPage: React.FC<GuidesPageProps> = ({
  products,
  onSelectProduct
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const guides = products.filter((p) => {
    const isGuide = p.category === 'guides' || p.category === 'ia';
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return isGuide && matchesSearch;
  });

  return (
    <div className="pt-28 pb-24 bg-slate-950 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950 border border-sky-800 text-sky-400 text-xs font-bold uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Catalogue des Guides Pratiques</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Des méthodes simples pour résoudre des problèmes concrets.
          </h1>
          <p className="text-slate-300 text-base sm:text-lg">
            E-books interactifs, feuilles d'action et templates immédiatement téléchargeables pour ton smartphone et ton ordinateur.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-xl mx-auto mb-10">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher un guide (ex: Prompts IA, Productivité...)"
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-sky-500 placeholder:text-slate-500"
            />
          </div>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {guides.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelectProduct}
            />
          ))}
        </div>

        {/* Benefits list of guides */}
        <div className="mt-16 bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto">
          <h3 className="text-lg font-bold text-white mb-4 text-center">
            Pourquoi choisir les guides pratiques CESAIRE 3.0 ?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 space-y-1.5">
              <Download className="w-5 h-5 text-sky-400 mb-1" />
              <div className="font-bold text-white">Téléchargement instantané</div>
              <p className="text-slate-400">Reçois ton lien sécurisé sans délai dès la confirmation de ton paiement.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 space-y-1.5">
              <Check className="w-5 h-5 text-sky-400 mb-1" />
              <div className="font-bold text-white">Directement applicable</div>
              <p className="text-slate-400">Des check-lists et fiches étapes par étapes prêtes à l'emploi.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 space-y-1.5">
              <BookOpen className="w-5 h-5 text-sky-400 mb-1" />
              <div className="font-bold text-white">Pensé pour écran mobile</div>
              <p className="text-slate-400">Lisibilité optimale sans avoir à zoomer constamment sur ton écran.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

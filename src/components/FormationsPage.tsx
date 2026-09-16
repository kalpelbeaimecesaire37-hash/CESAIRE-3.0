import React, { useState } from 'react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';
import { Sparkles, Search, CheckCircle2 } from 'lucide-react';

interface FormationsPageProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const FormationsPage: React.FC<FormationsPageProps> = ({
  products,
  onSelectProduct
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState<'all' | 'ia' | 'business' | 'digital'>('all');

  // Filter formations and related structured courses
  const formations = products.filter((p) => {
    const isFormationOrCourse = p.category === 'formations' || p.category === 'business' || p.category === 'ia';
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (selectedSubCategory === 'all') return isFormationOrCourse && matchesSearch;
    if (selectedSubCategory === 'ia') return p.category === 'ia' && matchesSearch;
    if (selectedSubCategory === 'business') return p.category === 'business' && matchesSearch;
    return isFormationOrCourse && matchesSearch;
  });

  return (
    <div className="pt-28 pb-24 bg-slate-950 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950 border border-sky-800 text-sky-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Catalogue des Formations</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Développe des compétences directement utilisables.
          </h1>
          <p className="text-slate-300 text-base sm:text-lg">
            Nos programmes de formation vidéo et ateliers pratiques pour maîtriser les outils numériques et l'intelligence artificielle.
          </p>
        </div>

        {/* Search & Filter bar */}
        <div className="max-w-3xl mx-auto mb-10 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher une formation (IA, WhatsApp, Business...)"
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-sky-500 placeholder:text-slate-500"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            {[
              { id: 'all', label: 'Toutes' },
              { id: 'ia', label: 'IA' },
              { id: 'business', label: 'Business' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedSubCategory(tab.id as any)}
                className={`px-4 py-3 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  selectedSubCategory === tab.id
                    ? 'bg-sky-600 text-white shadow-md'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Formations Grid */}
        {formations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {formations.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={onSelectProduct}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-slate-900/50 rounded-2xl border border-slate-800">
            <p className="text-slate-400 text-sm">Aucune formation ne correspond à votre recherche.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedSubCategory('all');
              }}
              className="mt-3 px-4 py-2 text-xs font-bold text-sky-400 bg-sky-950 border border-sky-800 rounded-lg"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}

        {/* Value promise */}
        <div className="mt-16 p-6 rounded-2xl bg-slate-900/80 border border-slate-800 max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-12 h-12 rounded-xl bg-emerald-950 border border-emerald-800/40 text-emerald-400 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">Pratique et accessible depuis ton smartphone</h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Chaque formation est structurée pour que tu puisses regarder les leçons et faire les exercices sur ton téléphone sans contrainte.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

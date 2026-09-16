import React from 'react';
import { Check, ArrowRight, ShieldCheck, Zap, Headphones, Sparkles, Smartphone } from 'lucide-react';
import { Product } from '../types';

interface FeaturedProductSectionProps {
  product: Product;
  onSelectProduct: (product: Product) => void;
}

export const FeaturedProductSection: React.FC<FeaturedProductSectionProps> = ({
  product,
  onSelectProduct
}) => {
  const formatPrice = (num: number, currency: string) => {
    return `${num.toLocaleString('fr-FR')} ${currency}`;
  };

  return (
    <section id="produit-vedette-section" className="py-20 sm:py-28 bg-slate-950 text-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-sky-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Pill */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-black uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Sélection Spéciale • Programme Phare</span>
          </div>
        </div>

        {/* 2 Columns Container */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* À GAUCHE: Cover du produit & Badge « OFFRE DU MOMENT » */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl group bg-slate-950">
                <img
                  id="featured-product-cover-img"
                  src={product.image}
                  alt={product.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-500"
                />

                {/* Badge OFFRE DU MOMENT */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black text-xs tracking-wider uppercase shadow-lg">
                    <Sparkles className="w-3.5 h-3.5 fill-current" />
                    OFFRE DU MOMENT
                  </span>
                </div>

                {/* Format pill */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-950/85 backdrop-blur-sm p-3 rounded-xl border border-slate-800 flex items-center justify-between text-xs text-slate-300">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Smartphone className="w-4 h-4 text-sky-400" />
                    {product.durationOrPages}
                  </span>
                  <span className="text-sky-400 font-semibold">{product.format}</span>
                </div>
              </div>
            </div>

            {/* À DROITE: Titre, Problème, Ce qu'on va apprendre, Bénéfices, Prix, CTA, Micro-rassurance */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              
              <div>
                {/* Grand titre */}
                <h3
                  id="featured-product-title"
                  className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight"
                >
                  {product.title}
                </h3>

                {/* Problème auquel le produit répond */}
                <div className="mt-4 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-slate-300 text-sm leading-relaxed">
                  <span className="font-bold text-sky-400">Le problème résolu : </span>
                  {product.problemSolved}
                </div>

                {/* Ce que le client va apprendre / obtenir */}
                <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                  {product.fullDescription}
                </p>

                {/* Liste de bénéfices */}
                <div className="mt-5 space-y-2.5">
                  <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400">
                    Bénéfices concrets inclus :
                  </h4>
                  <ul className="space-y-2">
                    {product.benefits.slice(0, 4).map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                        <div className="w-5 h-5 rounded-md bg-sky-500/20 border border-sky-400/30 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 text-sky-400" />
                        </div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Prix et Bouton CTA */}
              <div className="pt-6 border-t border-slate-800/80">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div className="flex flex-col">
                    {product.oldPrice && (
                      <span className="text-sm text-slate-400 line-through">
                        Ancien prix : {formatPrice(product.oldPrice, product.currency)}
                      </span>
                    )}
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                        {formatPrice(product.price, product.currency)}
                      </span>
                      <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded">
                        Accès à vie
                      </span>
                    </div>
                  </div>

                  <button
                    id="featured-product-cta-btn"
                    onClick={() => onSelectProduct(product)}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-slate-950 bg-gradient-to-r from-sky-400 to-sky-300 hover:from-sky-300 hover:to-white shadow-lg shadow-sky-400/20 active:scale-[0.98] transition-all cursor-pointer"
                  >
                    <span>Je découvre l’offre</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Micro-rassurance sous le bouton EXACTEMENT comme demandé */}
                <div
                  id="micro-reassurance-text"
                  className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-2 text-xs text-slate-400 pt-2"
                >
                  <span className="flex items-center gap-1.5 font-medium">
                    <ShieldCheck className="w-4 h-4 text-sky-400" />
                    Paiement sécurisé
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="flex items-center gap-1.5 font-medium">
                    <Zap className="w-4 h-4 text-emerald-400" />
                    Accès rapide
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="flex items-center gap-1.5 font-medium">
                    <Headphones className="w-4 h-4 text-sky-400" />
                    Support client
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

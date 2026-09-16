import React from 'react';
import { Product } from '../types';
import { X, Check, Smartphone, ArrowRight, ShieldCheck, Zap, BookOpen, Layers, Users } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onBuyNow: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onBuyNow
}) => {
  if (!product) return null;

  const formatPrice = (num: number, currency: string) => {
    return `${num.toLocaleString('fr-FR')} ${currency}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/85 backdrop-blur-md animate-in fade-in overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-3xl w-full my-auto shadow-2xl relative overflow-hidden text-slate-100 max-h-[92vh] flex flex-col">
        
        {/* Sticky Header with Close button */}
        <div className="p-5 sm:p-6 border-b border-slate-800 flex items-center justify-between bg-slate-900/90 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-sky-400 bg-sky-950 px-3 py-1 rounded-full border border-sky-800/60 uppercase tracking-wider">
              {product.categoryLabel}
            </span>
            {product.badge && (
              <span className="text-xs font-black text-amber-300 bg-amber-950 px-2.5 py-1 rounded-full border border-amber-800/40 uppercase">
                {product.badge}
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 space-y-8 overflow-y-auto">
          
          {/* Main Title & Image Header */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-5 rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-950 shadow-lg">
              <img
                src={product.image}
                alt={product.title}
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="p-3 bg-slate-950 text-xs text-slate-300 flex items-center justify-between border-t border-slate-800">
                <span className="flex items-center gap-1">
                  <Smartphone className="w-3.5 h-3.5 text-sky-400" />
                  {product.durationOrPages}
                </span>
                <span className="text-emerald-400 font-semibold">{product.deliveryTime}</span>
              </div>
            </div>

            <div className="md:col-span-7 space-y-3">
              <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                {product.title}
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed font-medium">
                {product.shortDescription}
              </p>

              {/* Price block */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-baseline justify-between">
                <div>
                  <div className="text-xs text-slate-400">Tarif unique (accès complet) :</div>
                  <div className="text-2xl sm:text-3xl font-black text-white">
                    {formatPrice(product.price, product.currency)}
                  </div>
                </div>
                {product.oldPrice && (
                  <div className="text-right">
                    <span className="text-xs text-slate-400 line-through block">
                      {formatPrice(product.oldPrice, product.currency)}
                    </span>
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded">
                      Économie immédiate
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Le Problème Résolu */}
          <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800">
            <h4 className="text-xs font-bold text-sky-400 uppercase tracking-wider mb-1.5">
              Problème concret résolu :
            </h4>
            <p className="text-sm text-slate-200 leading-relaxed">
              {product.problemSolved}
            </p>
          </div>

          {/* Présentation Détaillée */}
          <div>
            <h4 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-sky-400" />
              <span>Présentation du contenu</span>
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {product.fullDescription}
            </p>
          </div>

          {/* Liste des Bénéfices Clés */}
          <div>
            <h4 className="text-base font-bold text-white mb-3 flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Ce que tu vas obtenir & maîtriser :</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {product.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950 border border-slate-800/80 text-xs text-slate-200">
                  <div className="w-4 h-4 rounded bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Programme / Modules du produit */}
          {product.modules && product.modules.length > 0 && (
            <div>
              <h4 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-sky-400" />
                <span>Structure et modules détaillés :</span>
              </h4>
              <div className="space-y-2.5">
                {product.modules.map((m, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                    <div className="text-xs font-bold text-sky-300">{m.title}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{m.description}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Pour Qui est fait ce produit ? */}
          {product.targetAudience && product.targetAudience.length > 0 && (
            <div>
              <h4 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                <Users className="w-4 h-4 text-sky-400" />
                <span>À qui s'adresse cette offre :</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {product.targetAudience.map((aud, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                    <span>{aud}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Spécifications techniques */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-slate-950 p-4 rounded-xl border border-slate-800">
            <div>
              <span className="text-slate-500 block">Format :</span>
              <span className="font-semibold text-slate-200">{product.format}</span>
            </div>
            <div>
              <span className="text-slate-500 block">Compatibilité :</span>
              <span className="font-semibold text-slate-200">{product.deviceCompatibility}</span>
            </div>
          </div>

        </div>

        {/* Sticky Action Footer */}
        <div className="p-5 sm:p-6 border-t border-slate-800 bg-slate-950 flex flex-col sm:flex-row items-center justify-between gap-4 sticky bottom-0 z-20">
          <div className="text-center sm:text-left">
            <span className="text-xs text-slate-400">Prêt à passer à l'action ?</span>
            <div className="text-xl font-black text-white">
              {formatPrice(product.price, product.currency)}
            </div>
          </div>

          <div className="w-full sm:w-auto flex items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onBuyNow(product);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-sm shadow-lg shadow-sky-600/30 active:scale-95 transition-all cursor-pointer"
            >
              <span>Je découvre l'offre & Commande</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

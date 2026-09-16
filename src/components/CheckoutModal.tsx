import React, { useState } from 'react';
import { Product } from '../types';
import { X, ShieldCheck, Zap, Smartphone, CreditCard, MessageSquare, CheckCircle2, ArrowRight } from 'lucide-react';

interface CheckoutModalProps {
  product: Product | null;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ product, onClose }) => {
  const [paymentMethod, setPaymentMethod] = useState<'mobile-money' | 'card' | 'whatsapp'>('mobile-money');
  const [operator, setOperator] = useState<'orange' | 'mtn' | 'wave' | 'moov'>('orange');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!product) return null;

  const formatPrice = (num: number, currency: string) => {
    return `${num.toLocaleString('fr-FR')} ${currency}`;
  };

  const handleWhatsAppDirect = () => {
    const message = encodeURIComponent(
      `Bonjour CESAIRE 3.0, je souhaite commander la ressource suivante :\n\n` +
      `📦 Produit : ${product.title}\n` +
      `💰 Tarif : ${formatPrice(product.price, product.currency)}\n` +
      `👤 Nom : ${fullName || 'Mon Nom'}\n` +
      `📧 Email : ${email || 'monemail@exemple.com'}\n\n` +
      `Merci de m'indiquer la procédure de paiement pour recevoir mes accès.`
    );
    // Open WhatsApp with founder number / direct chat
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in">
      <div className="bg-slate-900 border border-slate-700/80 rounded-3xl max-w-xl w-full p-5 sm:p-8 shadow-2xl relative max-h-[92vh] overflow-y-auto text-white">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 sm:top-5 right-4 sm:right-5 text-slate-400 hover:text-white p-2 rounded-xl bg-slate-800/80 hover:bg-slate-800 transition-colors"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header / Summary */}
            <div className="mb-6 pr-8">
              <span className="text-[11px] font-black text-sky-400 tracking-wider uppercase bg-sky-950 px-2.5 py-1 rounded border border-sky-800/60">
                Commande sécurisée
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-2 leading-snug">
                {product.title}
              </h3>
              <div className="mt-2 flex items-baseline gap-3">
                <span className="text-2xl font-black text-sky-400">
                  {formatPrice(product.price, product.currency)}
                </span>
                {product.oldPrice && (
                  <span className="text-xs text-slate-400 line-through">
                    {formatPrice(product.oldPrice, product.currency)}
                  </span>
                )}
                <span className="text-[11px] text-emerald-400 font-bold bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/40">
                  Accès complet
                </span>
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="mb-6">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Sélectionne ton moyen de règlement :
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('mobile-money')}
                  className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center gap-1.5 cursor-pointer ${
                    paymentMethod === 'mobile-money'
                      ? 'bg-sky-600/20 border-sky-400 text-white shadow-sm'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:bg-slate-800/60'
                  }`}
                >
                  <Smartphone className="w-5 h-5 text-sky-400" />
                  <span className="text-xs font-bold leading-none">Mobile Money</span>
                  <span className="text-[9px] text-slate-400">Orange, MTN, Wave</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center gap-1.5 cursor-pointer ${
                    paymentMethod === 'card'
                      ? 'bg-sky-600/20 border-sky-400 text-white shadow-sm'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:bg-slate-800/60'
                  }`}
                >
                  <CreditCard className="w-5 h-5 text-sky-400" />
                  <span className="text-xs font-bold leading-none">Carte Bancaire</span>
                  <span className="text-[9px] text-slate-400">Visa, Mastercard</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('whatsapp')}
                  className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center gap-1.5 cursor-pointer ${
                    paymentMethod === 'whatsapp'
                      ? 'bg-emerald-600/20 border-emerald-400 text-white shadow-sm'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:bg-slate-800/60'
                  }`}
                >
                  <MessageSquare className="w-5 h-5 text-emerald-400" />
                  <span className="text-xs font-bold leading-none">WhatsApp</span>
                  <span className="text-[9px] text-slate-400">Assistance directe</span>
                </button>
              </div>
            </div>

            {/* Mobile Money Operator selection */}
            {paymentMethod === 'mobile-money' && (
              <div className="mb-5 p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  Opérateur Mobile Money :
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { id: 'orange', name: 'Orange Money' },
                    { id: 'mtn', name: 'MTN MoMo' },
                    { id: 'wave', name: 'Wave' },
                    { id: 'moov', name: 'Moov Money' }
                  ].map((op) => (
                    <button
                      type="button"
                      key={op.id}
                      onClick={() => setOperator(op.id as any)}
                      className={`py-2 px-1 text-[11px] font-bold rounded-lg border transition-all text-center ${
                        operator === op.id
                          ? 'bg-sky-500 text-white border-sky-400 shadow-sm'
                          : 'bg-slate-900 text-slate-300 border-slate-700 hover:bg-slate-800'
                      }`}
                    >
                      {op.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Nom complet ou Prénom :
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Ex: Aimé Kalpelbe"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-sky-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Adresse Email (pour recevoir tes accès) :
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tonemail@domaine.com"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-sky-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Numéro de téléphone / WhatsApp :
                </label>
                <input
                  type="tel"
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="+237 / +225 / +221..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-sky-400 transition-colors"
                />
              </div>

              {/* Action Button */}
              {paymentMethod === 'whatsapp' ? (
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full mt-2 py-4 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition-all cursor-pointer"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Finaliser la commande sur WhatsApp</span>
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-2 py-4 px-6 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-sky-600/30 transition-all active:scale-[0.98] cursor-pointer"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Confirmer et obtenir mon accès</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              )}
            </form>

            {/* Micro assurances */}
            <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-sky-400" />
                Paiement 100% sécurisé
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-emerald-400" />
                Envoi immédiat
              </span>
            </div>
          </div>
        ) : (
          /* Confirmation State */
          <div className="py-6 text-center space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-emerald-950 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-xl">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-black text-white">
              Demande de commande enregistrée !
            </h3>

            <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              Merci <strong>{fullName}</strong>. Les détails d'accès et les instructions pour <strong>{product.title}</strong> ont été générés pour l'adresse <span className="text-sky-400">{email}</span>.
            </p>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-left text-xs text-slate-300 space-y-2">
              <div className="font-bold text-sky-400 uppercase tracking-wider">Prochaines étapes :</div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-white">1.</span>
                <span>Consulte ta boîte email (vérifie également tes courriers indésirables).</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-white">2.</span>
                <span>Un message de confirmation WhatsApp a également été programmé pour le numéro <strong>{phoneNumber}</strong>.</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleWhatsAppDirect}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Ouvrir sur WhatsApp pour confirmation rapide</span>
              </button>

              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold cursor-pointer"
              >
                Fermer
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

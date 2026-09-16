import React, { useState } from 'react';
import { PageView } from '../types';
import { Mail, MessageSquare, ShieldCheck, FileText, Scale, X } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageView) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [legalModal, setLegalModal] = useState<'cgv' | 'privacy' | 'mentions' | null>(null);

  const handleLink = (page: PageView) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-900">
          
          {/* Brand Info (Col 1-5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-blue-700 flex items-center justify-center font-bold text-white shadow-md">
                <span className="text-base font-extrabold">C3</span>
              </div>
              <span className="text-2xl font-black tracking-tight text-white">
                CESAIRE 3.0
              </span>
            </div>

            <p className="text-sm font-semibold text-slate-200">
              Transforme tes connaissances en opportunités.
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              Formations digitales, guides pratiques et méthodes concrètes pour entrepreneurs, étudiants et créateurs ambitieux en Afrique francophone et partout dans le monde.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>Contact officiel : kalpelbeaimecesaire37@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Assistance WhatsApp disponible</span>
              </div>
            </div>
          </div>

          {/* Navigation Links (Col 6-8) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleLink('accueil')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('formations')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Formations
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('guides')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Guides pratiques
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('a-propos')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  À propos
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('faq')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Reassurance & Legal (Col 9-12) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">
              Informations légales
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => setLegalModal('cgv')}
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-2"
                >
                  <FileText className="w-3.5 h-3.5 text-sky-400" />
                  <span>Conditions générales de vente</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setLegalModal('privacy')}
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-2"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                  <span>Politique de confidentialité</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setLegalModal('mentions')}
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-2"
                >
                  <Scale className="w-3.5 h-3.5 text-sky-400" />
                  <span>Mentions légales</span>
                </button>
              </li>
            </ul>

            <div className="mt-4 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-[11px] text-slate-400 leading-relaxed">
              <span className="font-semibold text-slate-300">Paiements acceptés :</span> Mobile Money (Orange Money, MTN MoMo, Wave, Moov) & Cartes bancaires (Visa/Mastercard).
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} CESAIRE 3.0. Tous droits réservés. Fondé par Kalpelbe Aimé Césaire.
          </div>
          <div>
            Plateforme digitale optimisée pour mobile & ordinateurs.
          </div>
        </div>

      </div>

      {/* Legal Information Modal */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[85vh] overflow-y-auto text-slate-300">
            <button
              onClick={() => setLegalModal(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-lg bg-slate-800/80"
            >
              <X className="w-5 h-5" />
            </button>

            {legalModal === 'cgv' && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Conditions Générales de Vente (CGV)</h3>
                <p className="text-xs text-slate-400">Dernière mise à jour : Janvier 2025</p>
                <div className="space-y-3 text-xs leading-relaxed">
                  <p><strong>1. Objet :</strong> Les présentes conditions régissent la vente des formations, guides pratiques et produits digitaux édités par la marque CESAIRE 3.0.</p>
                  <p><strong>2. Accès aux produits :</strong> Les produits étant de nature numérique (vidéos téléchargeables, guides PDF, templates), ils sont livrés immédiatement par voie électronique (email et/ou WhatsApp) après confirmation du paiement.</p>
                  <p><strong>3. Tarifs et paiements :</strong> Les prix sont affichés en Francs CFA (FCFA) ou devise locale. Le paiement s’effectue via Mobile Money ou Carte bancaire via nos passerelles sécurisées.</p>
                  <p><strong>4. Propriété intellectuelle :</strong> Tous les contenus fournis demeurent la propriété exclusive de CESAIRE 3.0 et Kalpelbe Aimé Césaire. Toute redistribution non autorisée est strictement prohibée.</p>
                </div>
              </div>
            )}

            {legalModal === 'privacy' && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Politique de Confidentialité</h3>
                <p className="text-xs text-slate-400">Respect de vos données personnelles</p>
                <div className="space-y-3 text-xs leading-relaxed">
                  <p><strong>Collecte des données :</strong> Les seules informations collectées (nom, adresse email, numéro WhatsApp) le sont dans le but exclusif de vous délivrer vos produits commandés et de vous apporter notre assistance technique.</p>
                  <p><strong>Non-divulgation :</strong> Vos coordonnées ne sont jamais vendues, louées ou cédées à des tiers pour du démarchage publicitaire.</p>
                  <p><strong>Sécurité :</strong> Les transactions de paiement sont traitées par des prestataires financiers sécurisés et agréés. CESAIRE 3.0 ne stocke aucun numéro de carte ou code secret Mobile Money.</p>
                </div>
              </div>
            )}

            {legalModal === 'mentions' && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Mentions Légales</h3>
                <div className="space-y-3 text-xs leading-relaxed">
                  <p><strong>Éditeur du site :</strong> CESAIRE 3.0</p>
                  <p><strong>Responsable de publication :</strong> Kalpelbe Aimé Césaire, Fondateur & Formateur digital.</p>
                  <p><strong>Contact électronique :</strong> kalpelbeaimecesaire37@gmail.com</p>
                  <p><strong>Hébergement :</strong> Infrastructure Cloud Run sécurisée avec certificat SSL haute sécurité.</p>
                </div>
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setLegalModal(null)}
                className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

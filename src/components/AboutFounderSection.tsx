import React, { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle2, Mail, ExternalLink, X } from 'lucide-react';
import founderPhoto from '../assets/images/hero_founder_photo_1789552321641.jpg';

interface AboutFounderSectionProps {
  onContactFounder: () => void;
}

export const AboutFounderSection: React.FC<AboutFounderSectionProps> = ({ onContactFounder }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="a-propos-fondateur" className="py-20 sm:py-28 bg-slate-950 text-white relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 lg:p-14 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Founder Photo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative max-w-sm w-full">
                {/* Visual frame with soft gradient */}
                <div className="p-1 rounded-3xl bg-gradient-to-br from-sky-500/40 via-blue-600/30 to-slate-800 shadow-2xl overflow-hidden">
                  <img
                    id="founder-photo-img"
                    src={founderPhoto}
                    alt="Kalpelbe Aimé Césaire - Fondateur de CESAIRE 3.0"
                    referrerPolicy="no-referrer"
                    className="w-full h-auto aspect-[3/4] sm:aspect-[4/5] object-cover object-top rounded-2xl"
                  />
                </div>

                {/* Badge Founder tag */}
                <div className="absolute -bottom-4 -right-2 sm:right-4 bg-slate-950/95 border border-slate-700 rounded-xl px-4 py-2.5 shadow-xl backdrop-blur-md flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-bold text-white tracking-wide">
                    Fondateur & Formateur
                  </span>
                </div>
              </div>
            </div>

            {/* Founder Story & Presentation */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/80 border border-sky-800/40 text-sky-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Vision & Engagement</span>
              </div>

              {/* Titre */}
              <h2
                id="founder-title"
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight"
              >
                Derrière CESAIRE 3.0
              </h2>

              {/* Présentation du fondateur */}
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-extrabold text-sky-400 tracking-tight">
                  Kalpelbe Aimé Césaire
                </h3>
                <p className="text-sm font-semibold text-slate-300">
                  Entrepreneur digital • Formateur • Créateur de ressources digitales
                </p>
              </div>

              {/* Texte exact demandé */}
              <div className="space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                <p>
                  CESAIRE 3.0 est né d'une conviction : les connaissances et les outils numériques peuvent devenir de véritables leviers lorsqu'ils sont transformés en actions concrètes.
                </p>
                <p>
                  À travers cette marque, je partage des méthodes, ressources et outils conçus pour aider chacun à apprendre, créer et avancer dans l'univers digital.
                </p>
              </div>

              {/* Bouton Découvrir mon parcours */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  id="btn-discover-founder-journey"
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-sm font-bold shadow-lg shadow-sky-600/20 active:scale-95 transition-all cursor-pointer"
                >
                  <span>Découvrir mon parcours</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  id="btn-contact-founder-direct"
                  onClick={onContactFounder}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold border border-slate-700 active:scale-95 transition-all cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-sky-400" />
                  <span>Poser une question</span>
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Modal Parcours détaillé */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-lg bg-slate-800/80"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-sky-400" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">Le Parcours de Kalpelbe Aimé Césaire</h4>
                <p className="text-xs text-sky-400 font-medium">Bâtisseur de solutions numériques et éducatives</p>
              </div>
            </div>

            <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
              <p>
                Passionné d'informatique, de communication et de technologies d'intelligence artificielle, <strong>Kalpelbe Aimé Césaire</strong> a débuté son apprentissage avec pour unique outil un smartphone et une connexion internet.
              </p>
              <p>
                Face à la surabondance de cours théoriques déconnectés des réalités techniques, financières et pratiques de l'Afrique francophone, il a développé une méthodologie rigoureuse : <strong>simplifier chaque concept pour le rendre immédiatement applicable</strong>.
              </p>
              
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="text-xs font-bold text-sky-400 uppercase tracking-wider">Les principes qui guident CESAIRE 3.0 :</div>
                <div className="flex items-start gap-2 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>L'accessibilité totale : tout le monde doit pouvoir appliquer depuis un mobile.</span>
                </div>
                <div className="flex items-start gap-2 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Le pragmatisme : zéro jargon, des résultats tangibles pour ton projet.</span>
                </div>
                <div className="flex items-start gap-2 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>La valorisation de l'Afrique francophone dans l'économie de la connaissance.</span>
                </div>
              </div>

              <p>
                Aujourd'hui, à travers CESAIRE 3.0, l'objectif est clair : former une nouvelle génération d'acteurs capables de manier l'IA et le numérique pour créer de la valeur concrète.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setModalOpen(false)}
                className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold"
              >
                Fermer
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

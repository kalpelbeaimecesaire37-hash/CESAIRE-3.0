import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';

interface FinalCtaSectionProps {
  onExplore: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onExplore }) => {
  return (
    <section
      id="final-cta-section"
      className="py-20 sm:py-28 bg-slate-950 text-white relative text-center border-t border-slate-900 overflow-hidden"
    >
      {/* Soft central ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Grand titre exact */}
        <h2
          id="final-cta-heading"
          className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight uppercase mb-6"
        >
          APPRENDS. CRÉE.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-blue-400">
            PASSE À L'ACTION.
          </span>
        </h2>

        {/* Texte exact */}
        <p
          id="final-cta-text"
          className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10 font-normal"
        >
          Ton smartphone peut être plus qu’un outil pour consommer du contenu. Utilise-le aussi pour apprendre, créer et construire de nouvelles opportunités.
        </p>

        {/* Bouton exact */}
        <button
          id="btn-explore-cesaire-final"
          onClick={onExplore}
          className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl text-base sm:text-lg font-black text-white bg-gradient-to-r from-sky-500 via-blue-600 to-blue-700 hover:from-sky-400 hover:to-blue-600 shadow-xl shadow-sky-600/30 active:scale-[0.98] transition-all cursor-pointer uppercase tracking-wider"
        >
          <Compass className="w-5 h-5" />
          <span>EXPLORER CESAIRE 3.0</span>
          <ArrowRight className="w-5 h-5" />
        </button>

      </div>
    </section>
  );
};

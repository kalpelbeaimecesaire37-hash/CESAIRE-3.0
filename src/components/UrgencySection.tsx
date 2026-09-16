import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';

interface UrgencySectionProps {
  onDiscoverOffers: () => void;
}

export const UrgencySection: React.FC<UrgencySectionProps> = ({ onDiscoverOffers }) => {
  return (
    <section
      id="urgence-section"
      className="py-16 sm:py-24 bg-gradient-to-r from-blue-900 via-slate-900 to-sky-950 text-white relative overflow-hidden"
    >
      {/* Visual background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.15),transparent_50%)]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-bold uppercase tracking-wider mb-6">
          <Zap className="w-4 h-4 text-sky-400" />
          <span>Passage à l'action</span>
        </div>

        {/* Titre */}
        <h2
          id="urgency-title"
          className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-5"
        >
          N'attends pas d'être prêt pour commencer.
        </h2>

        {/* Sous-titre */}
        <p
          id="urgency-subtitle"
          className="text-base sm:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed mb-8 font-normal"
        >
          Choisis une ressource, développe une nouvelle compétence et commence à l’appliquer dès aujourd’hui.
        </p>

        {/* Bouton principal */}
        <div>
          <button
            id="urgency-cta-btn"
            onClick={onDiscoverOffers}
            className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-4.5 rounded-xl text-base sm:text-lg font-black text-slate-950 bg-gradient-to-r from-sky-400 to-sky-300 hover:from-white hover:to-sky-200 shadow-xl shadow-sky-400/30 active:scale-[0.98] transition-all cursor-pointer uppercase tracking-wider"
          >
            <span>DÉCOUVRIR LES OFFRES</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};

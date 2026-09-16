import React from 'react';
import { Wrench, Sparkles, Zap, Smartphone, Globe } from 'lucide-react';

export const WhyCesaireSection: React.FC = () => {
  const pillars = [
    {
      title: 'PRATIQUE',
      description: 'Des ressources conçues pour être comprises et appliquées.',
      icon: <Wrench className="w-6 h-6 text-sky-400" />
    },
    {
      title: 'SIMPLE',
      description: 'Des explications accessibles, sans jargon inutile.',
      icon: <Sparkles className="w-6 h-6 text-sky-400" />
    },
    {
      title: 'ACTION',
      description: 'L’objectif est de passer de la théorie à la pratique.',
      icon: <Zap className="w-6 h-6 text-sky-400" />
    },
    {
      title: 'DIGITAL',
      description: 'Accède à tes ressources depuis tes appareils compatibles.',
      icon: <Smartphone className="w-6 h-6 text-sky-400" />
    },
    {
      title: 'AFRIQUE FRANCOPHONE',
      description: 'Des contenus pensés pour être pertinents pour notre environnement.',
      icon: <Globe className="w-6 h-6 text-sky-400" />
    }
  ];

  return (
    <section id="pourquoi-section" className="py-20 sm:py-28 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Titre */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-sky-400 uppercase tracking-widest bg-sky-950/80 px-3.5 py-1.5 rounded-full border border-sky-800/40">
            Nos Engagements
          </span>
          <h2
            id="why-cesaire-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mt-4"
          >
            Pourquoi apprendre avec CESAIRE 3.0 ?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Une approche axée sur les solutions réelles, loin des promesses miracles.
          </p>
        </div>

        {/* Grille de confiance avec les 5 piliers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className={`bg-slate-950/80 border border-slate-800 rounded-2xl p-7 hover:border-sky-500/40 transition-all duration-300 flex flex-col justify-between shadow-lg ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-sky-950 border border-sky-800/60 flex items-center justify-center mb-5">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-black tracking-wider text-white uppercase mb-2.5">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] text-sky-400 font-bold uppercase tracking-wider">
                Gage de qualité CESAIRE 3.0
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

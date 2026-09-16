import React from 'react';
import { GraduationCap, Briefcase, Palette, Rocket, Cpu, BookOpen, Check } from 'lucide-react';

export const ForWhoSection: React.FC = () => {
  const audienceCards = [
    {
      title: 'Tu es étudiant',
      description: 'Tu veux développer des compétences utiles pour ton avenir.',
      icon: <GraduationCap className="w-6 h-6 text-sky-400" />
    },
    {
      title: 'Tu es entrepreneur',
      description: 'Tu veux améliorer ton activité et utiliser les outils numériques.',
      icon: <Briefcase className="w-6 h-6 text-sky-400" />
    },
    {
      title: 'Tu es créateur',
      description: 'Tu veux apprendre à créer davantage avec les nouveaux outils.',
      icon: <Palette className="w-6 h-6 text-sky-400" />
    },
    {
      title: 'Tu veux te lancer',
      description: 'Tu as une idée mais tu ne sais pas encore comment commencer.',
      icon: <Rocket className="w-6 h-6 text-sky-400" />
    },
    {
      title: 'Tu veux maîtriser l’IA',
      description: 'Tu souhaites utiliser l’intelligence artificielle de manière concrète.',
      icon: <Cpu className="w-6 h-6 text-sky-400" />
    },
    {
      title: 'Tu veux apprendre',
      description: 'Tu recherches des ressources simples et pratiques.',
      icon: <BookOpen className="w-6 h-6 text-sky-400" />
    }
  ];

  return (
    <section id="pour-qui-section" className="py-20 sm:py-28 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-sky-400 uppercase tracking-widest bg-sky-950/80 px-3.5 py-1.5 rounded-full border border-sky-800/40">
            Profils cibles
          </span>
          <h2
            id="for-who-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mt-4"
          >
            CESAIRE 3.0 est fait pour toi si…
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Des programmes pragmatiques pensés pour répondre aux réalités de chaque étape de ton parcours.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audienceCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-slate-900/90 border border-slate-800/90 hover:border-sky-500/40 rounded-2xl p-6 sm:p-7 shadow-lg hover:shadow-sky-900/20 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-950 border border-sky-800/60 flex items-center justify-center shrink-0">
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-medium text-sky-400">
                <Check className="w-4 h-4" />
                <span>Ressources adaptées disponibles</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

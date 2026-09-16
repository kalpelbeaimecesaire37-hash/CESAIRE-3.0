import React from 'react';
import { ArrowDown, ArrowRight, BookOpen, Lightbulb, PlayCircle, Rocket, TrendingUp } from 'lucide-react';

export const TransformationSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'APPRENDRE',
      desc: 'Acquérir les fondamentaux essentiels sans théorie superflue.',
      icon: <BookOpen className="w-5 h-5 text-sky-400" />
    },
    {
      step: '02',
      title: 'COMPRENDRE',
      desc: 'Saisir le pourquoi et le fonctionnement des outils et méthodes.',
      icon: <Lightbulb className="w-5 h-5 text-sky-400" />
    },
    {
      step: '03',
      title: 'APPLIQUER',
      desc: 'Exécuter immédiatement les exercices pratiques sur tes projets.',
      icon: <PlayCircle className="w-5 h-5 text-sky-400" />
    },
    {
      step: '04',
      title: 'CRÉER',
      desc: 'Donner vie à tes contenus, produits ou offres numériques.',
      icon: <Rocket className="w-5 h-5 text-sky-400" />
    },
    {
      step: '05',
      title: 'DÉVELOPPER',
      desc: 'Faire grandir ton activité et générer des résultats durables.',
      icon: <TrendingUp className="w-5 h-5 text-sky-400" />
    }
  ];

  return (
    <section id="transformation-section" className="py-20 sm:py-28 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête de section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            id="transformation-pre-title"
            className="text-lg sm:text-xl font-bold text-sky-400 uppercase tracking-wider mb-3"
          >
            Nous ne vendons pas simplement des formations.
          </h2>

          <h3
            id="transformation-main-title"
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-6"
          >
            Nous créons des transformations.
          </h3>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Une bonne ressource ne doit pas seulement t’apporter de l’information. Elle doit t’aider à comprendre, appliquer et passer à l’action.
          </p>
        </div>

        {/* Parcours visuel : APPRENDRE -> COMPRENDRE -> APPLIQUER -> CRÉER -> DÉVELOPPER */}
        <div className="relative">
          
          {/* Desktop/Tablet horizontal workflow */}
          <div className="hidden lg:grid grid-cols-5 gap-4 relative z-10">
            {steps.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center relative group">
                {/* Arrow connector between cards */}
                {idx < steps.length - 1 && (
                  <div className="absolute top-12 left-1/2 w-full flex items-center justify-center z-0 pointer-events-none">
                    <ArrowRight className="w-6 h-6 text-sky-500/40 ml-16" />
                  </div>
                )}

                {/* Card */}
                <div className="w-full bg-slate-950/80 border border-slate-800 group-hover:border-sky-500/50 rounded-2xl p-6 transition-all duration-300 shadow-xl relative z-10 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-sky-950 border border-sky-800/60 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-black text-sky-400 tracking-widest uppercase mb-1">
                    ÉTAPE {item.step}
                  </span>
                  <h4 className="text-lg font-black text-white tracking-tight mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile vertical workflow with arrows */}
          <div className="lg:hidden space-y-4 max-w-md mx-auto">
            {steps.map((item, idx) => (
              <React.Fragment key={idx}>
                <div className="bg-slate-950/90 border border-slate-800 rounded-2xl p-5 flex items-center gap-4 shadow-md">
                  <div className="w-12 h-12 rounded-xl bg-sky-950/80 border border-sky-800/60 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-black text-sky-400 tracking-wider">
                        {item.step}
                      </span>
                      <h4 className="text-base font-black text-white tracking-tight">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {idx < steps.length - 1 && (
                  <div className="flex justify-center py-1">
                    <ArrowDown className="w-5 h-5 text-sky-500/60 animate-bounce" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

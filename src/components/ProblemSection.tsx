import React from 'react';
import { HelpCircle, AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';

interface ProblemSectionProps {
  onExploreSolutions: () => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ onExploreSolutions }) => {
  return (
    <section id="problem-section" className="py-20 sm:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle background radial accent */}
      <div className="absolute -top-24 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Subtle pill tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sky-300 text-xs font-semibold mb-6">
          <HelpCircle className="w-3.5 h-3.5 text-sky-400" />
          <span>Le Défi Actuel</span>
        </div>

        {/* Titre */}
        <h2
          id="problem-title"
          className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-8"
        >
          Tu veux avancer, mais tu ne sais peut-être pas par où commencer.
        </h2>

        {/* Problème & Solution Box */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 sm:p-10 text-left shadow-2xl relative">
          <div className="space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed">
            
            <div className="flex items-start gap-4 p-4 rounded-xl bg-rose-950/20 border border-rose-900/30">
              <AlertTriangle className="w-6 h-6 text-rose-400 shrink-0 mt-1" />
              <p className="text-slate-200">
                Tu as une idée, une compétence ou simplement l’envie d’apprendre. Mais entre les outils, les méthodes et toutes les informations disponibles sur Internet, <strong className="text-white">il est facile de se perdre</strong> et de procrastiner sans jamais rien concrétiser.
              </p>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-sky-950/30 border border-sky-800/40">
              <CheckCircle2 className="w-6 h-6 text-sky-400 shrink-0 mt-1" />
              <p className="text-slate-100 font-medium">
                <span className="text-sky-300 font-bold">CESAIRE 3.0</span> t’aide à aller à l’essentiel avec des ressources pratiques, structurées et directement applicables.
              </p>
            </div>

          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400 text-center sm:text-left">
              Fini la surcharge d'informations. Place aux résultats concrets.
            </div>
            <button
              id="problem-cta-btn"
              onClick={onExploreSolutions}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-sm font-semibold shadow-md shadow-sky-700/20 active:scale-95 transition-all cursor-pointer"
            >
              <span>Découvrir la méthode</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

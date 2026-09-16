import React from 'react';
import { CheckCircle2, Smartphone, Target, Compass } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const trustItems = [
    {
      text: 'Contenu pratique',
      description: 'Méthodes concrètes sans blabla',
      icon: <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0" />
    },
    {
      text: 'Accessible aux débutants',
      description: 'Explications simples pas à pas',
      icon: <Compass className="w-5 h-5 text-sky-400 shrink-0" />
    },
    {
      text: 'Pensé pour l’action',
      description: 'Directement applicable pour créer',
      icon: <Target className="w-5 h-5 text-sky-400 shrink-0" />
    },
    {
      text: 'Accessible depuis ton smartphone',
      description: 'Lis et apprends où que tu sois',
      icon: <Smartphone className="w-5 h-5 text-sky-400 shrink-0" />
    }
  ];

  return (
    <section id="trust-bar-section" className="relative z-10 -mt-8 sm:-mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-slate-900/95 border border-slate-800 rounded-2xl shadow-xl shadow-slate-950/40 backdrop-blur-md p-4 sm:p-6 lg:p-7">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-800/80">
          {trustItems.map((item, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-3.5 pt-3 sm:pt-0 ${
                idx > 0 ? 'sm:pl-6' : ''
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-sky-950/80 border border-sky-800/40 flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-sm sm:text-base font-bold text-white tracking-tight">
                  ✓ {item.text}
                </span>
                <span className="text-xs text-slate-400">
                  {item.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

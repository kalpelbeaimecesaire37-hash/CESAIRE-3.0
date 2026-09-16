import React from 'react';
import founderPhoto from '../assets/images/hero_founder_photo_1789552321641.jpg';
import { Sparkles, Target, ShieldCheck, ArrowRight, Smartphone, Globe, Mail } from 'lucide-react';
import { WhyCesaireSection } from './WhyCesaireSection';

interface AboutPageProps {
  onDiscoverOffers: () => void;
  onContactClick: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onDiscoverOffers,
  onContactClick
}) => {
  return (
    <div className="pt-28 pb-24 bg-slate-950 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950 border border-sky-800 text-sky-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>À Propos</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Transforme tes connaissances en opportunités.
          </h1>
          <p className="text-slate-300 text-base sm:text-lg">
            Découvrez la vision, la mission et les engagements de CESAIRE 3.0.
          </p>
        </div>

        {/* Founder presentation card */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-12 mb-16 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative max-w-xs sm:max-w-sm w-full">
                <div className="p-1 rounded-3xl bg-gradient-to-br from-sky-500/40 via-blue-600/20 to-slate-800 overflow-hidden shadow-2xl">
                  <img
                    src={founderPhoto}
                    alt="Kalpelbe Aimé Césaire - Fondateur de CESAIRE 3.0"
                    referrerPolicy="no-referrer"
                    className="w-full h-auto object-cover object-top rounded-2xl aspect-[3/4] sm:aspect-[4/5]"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-bold text-white">Kalpelbe Aimé Césaire</h3>
                  <p className="text-xs text-sky-400 font-semibold">Fondateur de CESAIRE 3.0</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <div className="text-xs font-black text-sky-400 uppercase tracking-widest">
                L'Histoire & La Conviction
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                Derrière CESAIRE 3.0
              </h2>

              <p className="text-sm font-semibold text-slate-300">
                Entrepreneur digital • Formateur • Créateur de ressources digitales
              </p>

              <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                <p>
                  <strong>CESAIRE 3.0</strong> est né d'une conviction : les connaissances et les outils numériques peuvent devenir de véritables leviers lorsqu'ils sont transformés en actions concrètes.
                </p>
                <p>
                  À travers cette marque, je partage des méthodes, ressources et outils conçus pour aider chacun à apprendre, créer et avancer dans l'univers digital.
                </p>
                <p>
                  Trop souvent, les apprenants en Afrique francophone font face à des contenus abstraits, inadaptés au contexte local ou axés sur des théories obsolètes. CESAIRE 3.0 répond à ce défi en concevant des ressources structurées, courtes, efficaces et applicables dès aujourd'hui sur un simple smartphone.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={onDiscoverOffers}
                  className="px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold shadow-md cursor-pointer flex items-center gap-2"
                >
                  <span>Découvrir nos formations</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onContactClick}
                  className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 cursor-pointer flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-sky-400" />
                  <span>Nous contacter</span>
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Pillars component integration */}
        <WhyCesaireSection />

      </div>
    </div>
  );
};

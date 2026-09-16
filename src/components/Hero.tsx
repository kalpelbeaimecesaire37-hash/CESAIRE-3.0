import React from 'react';
import { ArrowRight, Sparkles, BookOpen, ShieldCheck, Zap } from 'lucide-react';
import heroImg from '../assets/images/hero_founder_photo_1789552321641.jpg';

interface HeroProps {
  onDiscoverOffers: () => void;
  onViewCourses: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onDiscoverOffers,
  onViewCourses
}) => {
  return (
    <section
      id="hero-section"
      className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Value proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Petit badge */}
            <div
              id="hero-badge"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/80 border border-sky-500/30 text-sky-300 text-xs font-bold tracking-wider uppercase shadow-inner"
            >
              <Sparkles className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
              <span>APPRENDS • CRÉE • VENDS • ÉVOLUE</span>
            </div>

            {/* Grand titre */}
            <h1
              id="hero-title"
              className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white"
            >
              TON PROCHAIN NIVEAU{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-blue-400">
                COMMENCE ICI.
              </span>
            </h1>

            {/* Sous-titre */}
            <p
              id="hero-subtitle"
              className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl font-normal"
            >
              Formations, guides et ressources pratiques pour développer tes compétences,
              maîtriser les outils numériques et transformer tes connaissances en opportunités.
            </p>

            {/* Boutons d'action */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                id="hero-cta-discover"
                onClick={onDiscoverOffers}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-sky-500 via-blue-600 to-blue-700 hover:from-sky-400 hover:to-blue-600 shadow-lg shadow-sky-600/30 active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Découvrir les offres</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                id="hero-cta-courses"
                onClick={onViewCourses}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-base font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-800 hover:text-white border border-slate-700 active:scale-[0.98] transition-all cursor-pointer"
              >
                <BookOpen className="w-5 h-5 text-sky-400" />
                <span>Voir les formations</span>
              </button>
            </div>

            {/* Fast reassurance banner */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-3 text-xs text-slate-400 font-medium">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Ressources testées et structurées
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-sky-400" />
                Accès instantané après validation
              </span>
            </div>
          </div>

          {/* Right Column: Hero Visual with Real Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative border frame with gradient */}
              <div className="relative rounded-3xl p-1 bg-gradient-to-br from-sky-500/40 via-blue-700/20 to-slate-800 shadow-2xl shadow-sky-950/60 overflow-hidden">
                <img
                  id="hero-founder-entrepreneur-img"
                  src={heroImg}
                  alt="Kalpelbe Aimé Césaire - Fondateur de CESAIRE 3.0 à son espace de travail avec ordinateur et outils numériques"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover object-top rounded-2xl aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] hover:scale-[1.02] transition-transform duration-500"
                />

                {/* Floating overlay badge */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-slate-950/92 border border-slate-700/80 rounded-2xl p-3 sm:p-3.5 backdrop-blur-md flex items-center gap-3 shadow-xl">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5 text-sky-400" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white uppercase tracking-wider">
                      Kalpelbe Aimé Césaire • CESAIRE 3.0
                    </div>
                    <div className="text-[11px] text-slate-300">
                      Outils numériques & Intelligence Artificielle pour l'action
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageView, Product } from './types';
import { PRODUCTS } from './data/products';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ProblemSection } from './components/ProblemSection';
import { OffersSection } from './components/OffersSection';
import { FeaturedProductSection } from './components/FeaturedProductSection';
import { TransformationSection } from './components/TransformationSection';
import { ForWhoSection } from './components/ForWhoSection';
import { WhyCesaireSection } from './components/WhyCesaireSection';
import { AboutFounderSection } from './components/AboutFounderSection';
import { UrgencySection } from './components/UrgencySection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CheckoutModal } from './components/CheckoutModal';
import { FormationsPage } from './components/FormationsPage';
import { GuidesPage } from './components/GuidesPage';
import { AboutPage } from './components/AboutPage';
import { FaqPage } from './components/FaqPage';
import { ContactPage } from './components/ContactPage';
import { MessageSquare } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('accueil');
  const [selectedProductForDetail, setSelectedProductForDetail] = useState<Product | null>(null);
  const [selectedProductForCheckout, setSelectedProductForCheckout] = useState<Product | null>(null);

  // Featured product (flagship offering)
  const featuredProduct = PRODUCTS.find((p) => p.isFeatured) || PRODUCTS[0];

  const handleNavigate = (page: PageView) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenOffers = () => {
    if (currentPage === 'accueil') {
      const el = document.getElementById('offres-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    handleNavigate('accueil');
    setTimeout(() => {
      const el = document.getElementById('offres-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleViewCourses = () => {
    handleNavigate('formations');
  };

  const handleWhatsAppFloatingChat = () => {
    const text = encodeURIComponent(
      "Bonjour CESAIRE 3.0, je vous écris depuis votre site web officiel pour obtenir des conseils sur vos offres et formations."
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-sky-500 selection:text-white">
      
      {/* Fixed Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenOffers={handleOpenOffers}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentPage === 'accueil' && (
          <>
            {/* 4. HERO — PREMIÈRE IMPRESSION */}
            <Hero
              onDiscoverOffers={handleOpenOffers}
              onViewCourses={handleViewCourses}
            />

            {/* 5. BARRE DE CONFIANCE */}
            <TrustBar />

            {/* 6. PROBLÈME */}
            <ProblemSection
              onExploreSolutions={handleOpenOffers}
            />

            {/* 7. NOS OFFRES */}
            <OffersSection
              products={PRODUCTS}
              onSelectProduct={(product) => setSelectedProductForDetail(product)}
            />

            {/* 8. SECTION « PRODUIT VEDETTE » */}
            <FeaturedProductSection
              product={featuredProduct}
              onSelectProduct={(product) => setSelectedProductForDetail(product)}
            />

            {/* 9. SECTION TRANSFORMATION */}
            <TransformationSection />

            {/* 10. POUR QUI ? */}
            <ForWhoSection />

            {/* 11. POURQUOI CESAIRE 3.0 ? */}
            <WhyCesaireSection />

            {/* 12. À PROPOS DU FONDATEUR */}
            <AboutFounderSection
              onContactFounder={() => handleNavigate('contact')}
            />

            {/* 13. SECTION URGENCE / PASSAGE À L'ACTION */}
            <UrgencySection
              onDiscoverOffers={handleOpenOffers}
            />

            {/* 14. FAQ */}
            <FaqSection
              onContactClick={() => handleNavigate('contact')}
            />

            {/* 15. CTA FINAL */}
            <FinalCtaSection
              onExplore={handleOpenOffers}
            />
          </>
        )}

        {currentPage === 'formations' && (
          <FormationsPage
            products={PRODUCTS}
            onSelectProduct={(product) => setSelectedProductForDetail(product)}
          />
        )}

        {currentPage === 'guides' && (
          <GuidesPage
            products={PRODUCTS}
            onSelectProduct={(product) => setSelectedProductForDetail(product)}
          />
        )}

        {currentPage === 'a-propos' && (
          <AboutPage
            onDiscoverOffers={handleOpenOffers}
            onContactClick={() => handleNavigate('contact')}
          />
        )}

        {currentPage === 'faq' && (
          <FaqPage
            onContactClick={() => handleNavigate('contact')}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* 16. FOOTER */}
      <Footer onNavigate={handleNavigate} />

      {/* Modals */}
      <ProductDetailModal
        product={selectedProductForDetail}
        onClose={() => setSelectedProductForDetail(null)}
        onBuyNow={(product) => {
          setSelectedProductForDetail(null);
          setSelectedProductForCheckout(product);
        }}
      />

      <CheckoutModal
        product={selectedProductForCheckout}
        onClose={() => setSelectedProductForCheckout(null)}
      />

      {/* Floating WhatsApp Quick-Conversion Button for Mobile & Desktop */}
      <button
        id="floating-whatsapp-btn"
        onClick={handleWhatsAppFloatingChat}
        aria-label="Discussion WhatsApp officielle"
        className="fixed bottom-5 right-5 z-40 bg-emerald-500 hover:bg-emerald-400 text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-2xl shadow-emerald-500/40 flex items-center gap-2 font-bold text-xs sm:text-sm hover:scale-105 active:scale-95 transition-all cursor-pointer border-2 border-emerald-300/40"
      >
        <MessageSquare className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline">Assistance WhatsApp</span>
      </button>

    </div>
  );
}

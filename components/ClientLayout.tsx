'use client';

import React, { useState, useEffect } from 'react';
import { useLocalization } from '../hooks/useLocalization';
import { AppContext } from '../context/AppContext';

import Header from './Header';
import Footer from './Footer';
import AiAssistantModal from './AiAssistantModal';
import VideoModal from './VideoModal';
import AuthModal from './AuthModal';
import SloganBanner from './SloganBanner';
import GuidingAssistant from './GuidingAssistant';

// Using a placeholder for the route for GuidingAssistant as hash-based routing is removed.
// In a full Next.js app, you'd use the `usePathname` hook here.
const useSimpleRoute = () => {
    const [route, setRoute] = useState('/');
    useEffect(() => {
        setRoute(window.location.pathname);
    }, []);
    return route;
};


export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { lang, dir, content, changeLanguage, availableLangs } = useLocalization();
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalPlan, setAuthModalPlan] = useState<string | null>(null);
  
  const currentRoute = useSimpleRoute();

  const openAuthModal = (planName: string | null = null) => {
    setAuthModalPlan(planName);
    setIsAuthModalOpen(true);
  };
  
  const contextValue = {
    openAuthModal,
    setIsVideoModalOpen,
    content,
    lang,
    changeLanguage,
    availableLangs,
    dir,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {/* FIX: Removed <html> and <body> tags. The root layout in `app/layout.tsx` is now responsible for them, following Next.js conventions. The `useLocalization` hook handles dynamic updates. */}
      <div className={`${lang === 'ar' ? 'font-cairo' : 'font-sans'} bg-brand-white text-gray-800`}>
          <Header 
              content={content.header} 
              lang={lang} 
              availableLangs={availableLangs}
              changeLanguage={changeLanguage} 
              onCtaClick={() => openAuthModal()} 
          />
          
          <main>
              {children}
          </main>
          
          <SloganBanner slogan={content.slogan} />
          <Footer content={content.footer} />

          <GuidingAssistant
              onOpenAssistant={() => setIsAiModalOpen(true)}
              lang={lang}
              currentRoute={currentRoute}
          />

          <AiAssistantModal 
              isOpen={isAiModalOpen} 
              onClose={() => setIsAiModalOpen(false)} 
              aiAssistantContent={content.aiAssistant}
              pricingContent={content.pricing}
              lang={lang}
          />
          
          <VideoModal 
              isOpen={isVideoModalOpen}
              onClose={() => setIsVideoModalOpen(false)}
              videoUrl="https://drive.google.com/file/d/1xXNlbbZ9osKNvn9GHZ_1Oaj2KB33Z5JK/preview"
          />

          <AuthModal
              isOpen={isAuthModalOpen}
              onClose={() => setIsAuthModalOpen(false)}
              content={content.authModal}
              lang={lang}
              planOfInterest={authModalPlan}
          />
      </div>
    </AppContext.Provider>
  );
}

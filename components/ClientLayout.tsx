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

  // This effect applies global styles to the body tag.
  useEffect(() => {
    document.body.className = `${lang === 'ar' ? 'font-cairo' : 'font-sans'} bg-brand-white text-gray-800`;
  }, [lang]);

  return (
    <AppContext.Provider value={contextValue}>
      {/* 
        FIX: Wrapped the component's content in a single root `div` instead of a React Fragment (<>).
        In Next.js, when a client component is a direct child of `<body>`, returning a fragment
        can cause hydration errors. These errors are sometimes misleadingly reported as a missing
        'children' prop in the parent layout (`app/layout.tsx`). Providing a single, stable root DOM element
        like this `div` resolves the structural issue and ensures React can hydrate correctly.
      */}
      <div className="flex flex-col min-h-screen">
          <Header 
              content={content.header} 
              lang={lang} 
              availableLangs={availableLangs}
              changeLanguage={changeLanguage} 
              onCtaClick={() => openAuthModal()} 
          />
          
          <main className="flex-grow">
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
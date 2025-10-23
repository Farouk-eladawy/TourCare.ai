'use client';

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useLocalization } from '../hooks/useLocalization';
import { AppContext } from '../context/AppContext';

import Header from './Header';
import Footer from './Footer';
import AiAssistantModal from './AiAssistantModal';
import VideoModal from './VideoModal';
import AuthModal from './AuthModal';
import SloganBanner from './SloganBanner';
import GuidingAssistant from './GuidingAssistant';


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
  
  const location = useLocation();
  const currentRoute = location.pathname;

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

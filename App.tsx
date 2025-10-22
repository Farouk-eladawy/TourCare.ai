
import React, { useState, useEffect } from 'react';
import { useLocalization } from './hooks/useLocalization';

import Header from './components/Header';
import Footer from './components/Footer';
import AiAssistantModal from './components/AiAssistantModal';
import VideoModal from './components/VideoModal';
import AuthModal from './components/AuthModal';
import SloganBanner from './components/SloganBanner';
import GuidingAssistant from './components/GuidingAssistant';

// Page Components
import HomePage from './pages/HomePage';
import OfferPage from './pages/OfferPage';
import TestAutomationPage from './pages/TestAutomationPage';
import FaqPage from './pages/FaqPage';
import OperationSysPage from './pages/products/OperationSysPage';
import PickupTimePage from './pages/products/PickupTimePage';
import LiveSupportPage from './pages/products/LiveSupportPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import ConnectNowPage from './pages/ConnectNowPage'; // Import the new page

function App() {
  const { lang, dir, content, changeLanguage, availableLangs } = useLocalization();
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalPlan, setAuthModalPlan] = useState<string | null>(null);

  // Simple hash-based routing
  const [route, setRoute] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || '#/');
      window.scrollTo(0, 0); // Scroll to top on page change
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);


  const openAuthModal = (planName: string | null = null) => {
    setAuthModalPlan(planName);
    setIsAuthModalOpen(true);
  };

  const renderPage = () => {
    switch (route) {
      case '#/':
        return <HomePage content={content} setIsVideoModalOpen={setIsVideoModalOpen} openAuthModal={openAuthModal} />;
      case '#/about':
        return <OfferPage content={content.commercialOffer} />;
      case '#/test-automation': // Replaced #/pricing route
        return <TestAutomationPage openAuthModal={() => openAuthModal()} lang={lang} />;
      case '#/faq':
        return <FaqPage content={content.faqSection} />;
      case '#/connect-now':
        return <ConnectNowPage content={content.connectNowPage} lang={lang} openAuthModal={openAuthModal} />;
      case '#/contact':
        return <ContactPage content={content.contactPage} />;
      case '#/products/operation-sys':
        return <OperationSysPage pageContent={content.productPages.operationSys} openAuthModal={openAuthModal} />;
      case '#/products/pickup-time':
        return <PickupTimePage content={content.productPages.pickupTime} openAuthModal={openAuthModal} />;
      case '#/products/live-support':
        return <LiveSupportPage content={content.productPages.liveSupport} openAuthModal={openAuthModal} />;
      case '#/privacy':
        return <PrivacyPolicyPage content={content.privacyPolicy} />;
      case '#/terms':
        return <TermsOfServicePage content={content.termsOfService} />;
      default:
        return <HomePage content={content} setIsVideoModalOpen={setIsVideoModalOpen} openAuthModal={openAuthModal} />;
    }
  }

  return (
    <div className={`${lang === 'ar' ? 'font-cairo' : 'font-sans'} bg-brand-white text-gray-800`} dir={dir}>
      <Header 
        content={content.header} 
        lang={lang} 
        availableLangs={availableLangs}
        changeLanguage={changeLanguage} 
        onCtaClick={() => openAuthModal()} 
      />
      
      <main>
        {renderPage()}
      </main>
      
      <SloganBanner slogan={content.slogan} />
      <Footer content={content.footer} />

      <GuidingAssistant
        onOpenAssistant={() => setIsAiModalOpen(true)}
        lang={lang}
        currentRoute={route}
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
  );
}

export default App;

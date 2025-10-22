
import React, { useState } from 'react';
import { ConnectNowPageContent, Language } from '../types';
import GygLoginModal from '../components/dashboard/GygLoginModal';
import DashboardLoading from '../components/dashboard/DashboardLoading';
import SupplierDashboard from '../components/dashboard/SupplierDashboard';
import ParticlesBackground from '../components/ParticlesBackground';

interface ConnectNowPageProps {
  content: ConnectNowPageContent;
  lang: Language;
  openAuthModal: () => void;
}

type PageState = 'idle' | 'login' | 'loading' | 'ready';

const ConnectNowPage: React.FC<ConnectNowPageProps> = ({ content, lang, openAuthModal }) => {
    const [pageState, setPageState] = useState<PageState>('idle');

    // On successful login simulation
    const handleLoginSuccess = () => {
        setPageState('loading');
    };

    // When loading finishes
    const handleLoadingComplete = () => {
        setPageState('ready');
    };

    const renderContent = () => {
        switch (pageState) {
            case 'loading':
                return <DashboardLoading content={content.loadingScreen} onComplete={handleLoadingComplete} />;
            case 'ready':
                return <SupplierDashboard content={content.dashboard} openAuthModal={openAuthModal} />;
            case 'idle':
            default:
                return (
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4 text-gray-900">{content.title}</h1>
                        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8">
                            Connect your GetYourGuide account to automatically sync your bookings and manage communications from a single, intelligent dashboard.
                        </p>
                        <button 
                            onClick={() => setPageState('login')} 
                            className="bg-brand-accent text-white font-bold px-8 py-3 rounded-md hover:bg-brand-accent-hover transition text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                            {content.connectButton}
                        </button>
                    </div>
                );
        }
    };

    return (
        <div className="relative min-h-[calc(100vh-300px)] flex flex-col items-center justify-center p-4 sm:p-8 bg-brand-light-gray overflow-hidden">
             <ParticlesBackground id="particles-connect-page" />
             <div className="relative z-10 w-full flex flex-col items-center justify-center">
                {renderContent()}
             </div>
            {pageState === 'login' && <GygLoginModal content={content.loginModal} onClose={() => setPageState('idle')} onSuccess={handleLoginSuccess} />}
        </div>
    );
};

export default ConnectNowPage;
